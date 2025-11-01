'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //==============================================================================
    // CONSTANTS
    //==============================================================================
    const GITHUB_API_BASE = 'https://api.github.com/repos';
    const JSDELIVR_CDN_BASE = 'https://cdn.jsdelivr.net/gh';
    const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour
    const MODEL_FILE_REGEX = /model3?[-\w]*\.json$/i;
    const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'];

    //==============================================================================
    // DOM ELEMENT CACHE
    //==============================================================================
    const DOM = {
        openExplorerBtn: document.getElementById('open-file-explorer-btn'),
        explorerModal: document.getElementById('file-explorer-modal'),
        closeExplorerBtn: document.getElementById('file-explorer-close-btn'),
        ownerInput: document.getElementById('fe-owner-input'),
        repoInput: document.getElementById('fe-repo-input'),
        loadRepoBtn: document.getElementById('fe-load-repo-btn'),
        breadcrumbs: document.getElementById('fe-breadcrumbs'),
        upDirectoryBtn: document.getElementById('fe-up-directory-btn'),
        fileListingContainer: document.getElementById('fe-file-listing-container'),
        filePreviewContainer: document.getElementById('fe-file-preview-container'),
        previewFileName: document.getElementById('fe-preview-filename'),
        closePreviewBtn: document.getElementById('fe-close-preview-btn'),
        previewContent: document.getElementById('fe-preview-content'),
        previewActions: document.getElementById('fe-preview-actions'),
        statusMessage: document.getElementById('fe-status-message'),
        loader: document.getElementById('fe-loader'),
        body: document.body,
    };

    //==============================================================================
    // STATE VARIABLES
    //==============================================================================
    let currentOwner = '';
    let currentRepo = '';
    let currentPath = '';
    let selectedFileItemElement = null;

    //==============================================================================
    // INITIALIZATION
    //==============================================================================

    // Validates that all essential DOM elements are present and sets up event listeners.
    function initializeExplorer() {
        const essentialElements = Object.values(DOM);
        if (essentialElements.some(el => !el)) {
            log('ERROR', "File Explorer: One or more DOM elements are missing. Feature disabled.");
            return;
        }

        setupEventListeners();
        updateStatus('Enter GitHub Owner and Repository to begin.');
    }

    //==============================================================================
    // EVENT HANDLERS & LISTENERS
    //==============================================================================

    function setupEventListeners() {
        DOM.openExplorerBtn.addEventListener('click', openExplorer);
        DOM.closeExplorerBtn.addEventListener('click', closeExplorer);
        window.addEventListener('keydown', handleGlobalKeyDown);
        DOM.loadRepoBtn.addEventListener('click', handleLoadRepository);
        DOM.repoInput.addEventListener('keypress', handleInputKeyPress);
        DOM.ownerInput.addEventListener('keypress', handleInputKeyPress);
        DOM.upDirectoryBtn.addEventListener('click', navigateUp);
        DOM.closePreviewBtn.addEventListener('click', closeFilePreview);
    }

    function handleGlobalKeyDown(event) {
        if (event.key === 'Escape' && DOM.explorerModal.classList.contains('active')) {
            closeExplorer();
        }
    }

    function handleInputKeyPress(event) {
        if (event.key === 'Enter') {
            handleLoadRepository();
        }
    }

    function handleListItemClick(item) {
        if (selectedFileItemElement) {
            selectedFileItemElement.classList.remove('selected');
        }

        if (item.type === 'dir') {
            fetchAndDisplayContents(item.path);
            selectedFileItemElement = null;
        } else {
            const listItemElement = document.querySelector(`[data-path="${item.path}"]`);
            if (listItemElement) {
                listItemElement.classList.add('selected');
                selectedFileItemElement = listItemElement;
            }
            displayFilePreview(item);
        }
    }

    function handleBreadcrumbClick(event, path) {
        event.preventDefault();
        fetchAndDisplayContents(path);
    }

    function handleImportModel(fileItem, sourceUrlOverride = null) {
        const modelUrl = sourceUrlOverride || `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}@master/${fileItem.path}`;
        log('MODEL', `Attempting to import Live2D Model: ${modelUrl}`);

        if (typeof window.loadLive2DModel === 'function') {
            window.loadLive2DModel(modelUrl);
            updateStatus(`Sent ${fileItem.name} to viewer.`, false, true);
        } else {
            log('ERROR', 'Live2D import function (window.loadLive2DModel) not found.');
            updateStatus('Error: Live2D import function not available.', true);
        }
    }

    //==============================================================================
    // MODAL AND UI CONTROL
    //==============================================================================

    function openExplorer() {
        DOM.explorerModal.classList.add('active');
        DOM.openExplorerBtn.setAttribute('aria-expanded', 'true');
        DOM.body.classList.add('no-scroll');
    }

    function closeExplorer() {
        DOM.explorerModal.classList.remove('active');
        DOM.openExplorerBtn.setAttribute('aria-expanded', 'false');
        DOM.body.classList.remove('no-scroll');
    }

    function showLoader(show) {
        DOM.loader.style.display = show ? 'flex' : 'none';
    }

    function updateStatus(message, isError = false, isSuccess = false) {
        DOM.statusMessage.textContent = message;
        DOM.statusMessage.className = '';
        if (isError) DOM.statusMessage.classList.add('fe-status-error');
        if (isSuccess) DOM.statusMessage.classList.add('fe-status-success');
    }

    function setPlaceholder(container, text, isError = false) {
        const className = isError ? 'fe-placeholder-text fe-error-message' : 'fe-placeholder-text';
        container.innerHTML = `<p class="${className}">${text}</p>`;
    }

    //==============================================================================
    // REPOSITORY LOADING
    //==============================================================================

    function handleLoadRepository() {
        currentOwner = DOM.ownerInput.value.trim();
        currentRepo = DOM.repoInput.value.trim();

        if (!currentOwner || !currentRepo) {
            updateStatus('Error: Owner and Repository name are required.', true);
            return;
        }

        setPlaceholder(DOM.fileListingContainer, 'Loading content...');
        DOM.breadcrumbs.innerHTML = '';
        closeFilePreview();
        currentPath = '';
        fetchAndDisplayContents('');
    }

    async function fetchAndDisplayContents(path) {
        currentPath = path;
        setPlaceholder(DOM.fileListingContainer, 'Loading items...');
        updateBreadcrumbs(path);
        DOM.upDirectoryBtn.style.display = path ? 'flex' : 'none';

        try {
            const contents = await fetchGitHubContentsWithCache(path);
            if (contents) {
                renderItems(contents);
            }
        } catch (error) {
            log('ERROR', 'GitHub API Fetch error:', error);
            setPlaceholder(DOM.fileListingContainer, `Error: ${error.message}`, true);
            updateStatus(`Error: ${error.message}`, true);
        }
    }

    //==============================================================================
    // GITHUB API & CACHING
    //==============================================================================

    async function fetchGitHubContents(path) {
        const url = `${GITHUB_API_BASE}/${currentOwner}/${currentRepo}/contents/${path}`;
        updateStatus(`Fetching from API: ${path || 'root'}`);
        showLoader(true);

        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({
                    message: response.statusText
                }));
                throw new Error(`GitHub API Error (${response.status}): ${errorData.message}`);
            }
            const data = await response.json();
            updateStatus(`API Fetched: ${path || 'root'}`, false, true);
            return Array.isArray(data) ? data : [data];
        } finally {
            showLoader(false);
        }
    }

    async function fetchGitHubContentsWithCache(path) {
        const cacheKey = `fe_github_${currentOwner}_${currentRepo}_${path || 'ROOT'}`;
        const cachedItem = sessionStorage.getItem(cacheKey);

        if (cachedItem) {
            try {
                const {
                    timestamp,
                    data
                } = JSON.parse(cachedItem);
                if (Date.now() - timestamp < CACHE_DURATION_MS) {
                    updateStatus(`Using cached data for: ${path || 'root'}`);
                    return data;
                }
                sessionStorage.removeItem(cacheKey);
            } catch (e) {
                log('WARN', "Failed to parse cached item, removing:", e);
                sessionStorage.removeItem(cacheKey);
            }
        }

        const data = await fetchGitHubContents(path);
        if (data) {
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify({
                    timestamp: Date.now(),
                    data
                }));
            } catch (e) {
                log('WARN', "Failed to save to session storage (possibly full):", e);
            }
        }
        return data;
    }

    //==============================================================================
    // CONTENT RENDERING
    //==============================================================================

    function renderItems(items) {
        DOM.fileListingContainer.innerHTML = '';
        if (items.length === 0) {
            setPlaceholder(DOM.fileListingContainer, 'This folder is empty.');
            return;
        }

        items.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name, undefined, {
                numeric: true,
                sensitivity: 'base'
            });
            return a.type === 'dir' ? -1 : 1;
        });

        const list = document.createElement('ul');
        list.style.listStyleType = 'none';
        items.forEach(item => list.appendChild(createListItemElement(item)));
        DOM.fileListingContainer.appendChild(list);
    }

    function createListItemElement(item) {
        const li = document.createElement('li');
        li.className = 'fe-list-item';
        li.dataset.path = item.path;
        li.title = item.name;
        li.setAttribute('role', 'button');
        li.tabIndex = 0;

        const iconClass = item.type === 'dir' ? 'fa-folder' : getFileIcon(item.name);
        li.innerHTML = `
            <span class="fe-item-icon ${item.type === 'dir' ? 'folder-icon' : ''}">
                <i class="fas ${iconClass}" aria-hidden="true"></i>
            </span>
            <span class="fe-list-item-name">${item.name}</span>
        `;

        if (item.type === 'file' && MODEL_FILE_REGEX.test(item.name)) {
            const importBtn = document.createElement('button');
            importBtn.className = 'fe-import-model-btn';
            importBtn.title = `Import ${item.name}`;
            importBtn.innerHTML = `<i class="fas fa-file-import" aria-hidden="true"></i> Import Model`;
            importBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleImportModel(item);
            });
            li.appendChild(importBtn);
        }

        li.addEventListener('click', () => handleListItemClick(item));
        li.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') handleListItemClick(item);
        });

        return li;
    }

    function updateBreadcrumbs(path) {
        DOM.breadcrumbs.innerHTML = '';
        const segments = path.split('/').filter(Boolean);

        const rootLink = document.createElement('a');
        rootLink.href = '#';
        rootLink.textContent = 'Root';
        rootLink.title = `Navigate to root of ${currentOwner}/${currentRepo}`;
        rootLink.addEventListener('click', (e) => handleBreadcrumbClick(e, ''));
        DOM.breadcrumbs.appendChild(rootLink);

        let currentBuiltPath = '';
        segments.forEach((segment, index) => {
            DOM.breadcrumbs.appendChild(document.createTextNode(' / '));
            currentBuiltPath += (currentBuiltPath ? '/' : '') + segment;

            const segmentPath = currentBuiltPath;

            if (index < segments.length - 1) {
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = segment;
                link.title = `Navigate to ${segment}`;
                link.addEventListener('click', (e) => handleBreadcrumbClick(e, segmentPath));
                DOM.breadcrumbs.appendChild(link);
            } else {
                const span = document.createElement('span');
                span.textContent = segment;
                DOM.breadcrumbs.appendChild(span);
            }
        });
    }

    //==============================================================================
    // FILE PREVIEW
    //==============================================================================

    async function displayFilePreview(fileItem) {
        DOM.previewFileName.textContent = fileItem.name;
        setPlaceholder(DOM.previewContent, 'Loading preview...');
        DOM.previewActions.innerHTML = '';
        DOM.filePreviewContainer.style.display = 'flex';
        DOM.filePreviewContainer.classList.add('active');
        DOM.fileListingContainer.classList.add('preview-open');
        showLoader(true);

        const jsDelivrUrl = `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}@master/${fileItem.path}`;

        try {
            const extension = fileItem.name.split('.').pop().toLowerCase();

            if (IMAGE_EXTENSIONS.includes(extension)) {
                await renderImagePreview(jsDelivrUrl, fileItem.name);
            } else {
                const response = await fetch(jsDelivrUrl);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                renderTextPreview(await response.text(), extension);
            }
            renderPreviewActions(fileItem, jsDelivrUrl);
        } catch (error) {
            log('ERROR', 'File preview error:', error);
            setPlaceholder(DOM.previewContent, `Error loading preview: ${error.message}`, true);
            renderPreviewActions(fileItem, fileItem.html_url, true); // Fallback to GitHub URL
        } finally {
            showLoader(false);
        }
    }

    function renderImagePreview(url, altText) {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.alt = `Preview of ${altText}`;
            img.onload = () => {
                DOM.previewContent.innerHTML = '';
                DOM.previewContent.appendChild(img);
                resolve();
            };
            img.onerror = () => reject(new Error('Could not load image.'));
            img.src = url;
        });
    }

    function renderTextPreview(text, extension) {
        const pre = document.createElement('pre');
        let content = text;
        if (extension === 'json') {
            try {
                content = JSON.stringify(JSON.parse(text), null, 2);
            } catch {
                // Not a valid JSON, show raw text
            }
        }
        pre.textContent = content;
        DOM.previewContent.innerHTML = '';
        DOM.previewContent.appendChild(pre);
    }

    function renderPreviewActions(fileItem, url, isFallback = false) {
        DOM.previewActions.innerHTML = '';

        const openBtn = document.createElement('a');
        openBtn.href = url;
        openBtn.textContent = isFallback ? 'View on GitHub' : `Open ${fileItem.name}`;
        openBtn.className = 'fe-open-link';
        openBtn.target = "_blank";
        openBtn.rel = "noopener noreferrer";
        DOM.previewActions.appendChild(openBtn);

        if (MODEL_FILE_REGEX.test(fileItem.name) && !isFallback) {
            const importBtn = document.createElement('button');
            importBtn.className = 'fe-import-model-btn-preview';
            importBtn.textContent = 'Import Model';
            importBtn.addEventListener('click', () => handleImportModel(fileItem, url));
            DOM.previewActions.appendChild(importBtn);
        }
    }

    function closeFilePreview() {
        // Remove visual state
        DOM.filePreviewContainer.classList.remove('active');
        DOM.fileListingContainer.classList.remove('preview-open');

        // Fully hide the preview container (matches display set when opened)
        DOM.filePreviewContainer.style.display = 'none';

        // Clear preview content and actions so reopening starts fresh
        DOM.previewContent.innerHTML = '';
        DOM.previewActions.innerHTML = '';
        DOM.previewFileName.textContent = '';

        // Clear selected item highlight if any
        if (selectedFileItemElement) {
            selectedFileItemElement.classList.remove('selected');
            selectedFileItemElement = null;
        }
    }

    function navigateUp() {
        if (!currentPath) return;
        const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        fetchAndDisplayContents(parentPath);
    }

    //==============================================================================
    // UTILITY FUNCTIONS
    //==============================================================================

    function getFileIcon(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        const iconMap = {
            'json': 'fa-code',
            'png': 'fa-image',
            'jpg': 'fa-image',
            'jpeg': 'fa-image',
            'gif': 'fa-image',
            'md': 'fa-file-lines',
            'txt': 'fa-file-alt',
            'zip': 'fa-file-archive',
        };
        return iconMap[ext] || 'fa-file';
    }

    //==============================================================================
    // SCRIPT EXECUTION START
    //==============================================================================
    initializeExplorer();
});