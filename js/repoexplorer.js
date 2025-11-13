'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //==============================================================================
    // CONSTANTS & CONFIGURATION
    //==============================================================================
    const GITHUB_API_BASE = 'https://api.github.com/repos';
    const JSDELIVR_CDN_BASE = 'https://cdn.jsdelivr.net/gh';
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
    // STATE
    //==============================================================================
    const state = {
        owner: '',
        repo: '',
        path: '',
        selectedFileItemElement: null,
        previewFile: null,
    };


    //==============================================================================
    // INITIALIZATION & EVENT LISTENERS
    //==============================================================================
    function initialize() {
        if (Object.values(DOM).some(el => !el)) {
            console.error("File Explorer: One or more DOM elements are missing. Feature disabled.");
            return;
        }
        setupEventListeners();
        handleUrlAndLoad();
    }

    // Set up all event listeners
    function setupEventListeners() {
        DOM.openExplorerBtn.addEventListener('click', openExplorer);
        DOM.closeExplorerBtn.addEventListener('click', closeExplorer);
        window.addEventListener('keydown', handleGlobalKeyDown);
        DOM.loadRepoBtn.addEventListener('click', handleLoadRepository);
        DOM.repoInput.addEventListener('keypress', handleInputKeyPress);
        DOM.ownerInput.addEventListener('keypress', handleInputKeyPress);
        DOM.upDirectoryBtn.addEventListener('click', navigateUp);
        DOM.closePreviewBtn.addEventListener('click', closeFilePreview);
        window.addEventListener('popstate', handlePopState);
    }


    //==============================================================================
    // EVENT HANDLERS
    //==============================================================================
    // Global keydown handler for Escape and Enter keys
    const handleGlobalKeyDown = e => e.key === 'Escape' && DOM.explorerModal.classList.contains('active') && closeExplorer();
    const handleInputKeyPress = e => e.key === 'Enter' && handleLoadRepository();

    function handleListItemClick(item) {
        state.selectedFileItemElement?.classList.remove('selected');

        if (item.type === 'dir') {
            fetchAndDisplayContents(item.path);
            state.selectedFileItemElement = null;
        } else {
            const listItemElement = document.querySelector(`[data-path="${item.path}"]`);
            listItemElement?.classList.add('selected');
            state.selectedFileItemElement = listItemElement;
            displayFilePreview(item);
        }
    }

    // Handle breadcrumb navigation click
    function handleBreadcrumbClick(event, path) {
        event.preventDefault();
        fetchAndDisplayContents(path);
    }

    // Handle importing a Live2D model
    function handleImportModel(fileItem, sourceUrlOverride = null) {
        const modelUrl = sourceUrlOverride || `${JSDELIVR_CDN_BASE}/${state.owner}/${state.repo}/${fileItem.path}`;
        console.log(`[REPO EXPLORER] Attempting to import Live2D Model: ${modelUrl}`);

        if (typeof window.loadLive2DModel === 'function') {
            window.loadLive2DModel(modelUrl);
            updateStatus(`Sent ${fileItem.name} to viewer.`, false, true);
        } else {
            console.error('[REPO EXPLORER] Live2D import function (window.loadLive2DModel) not found.');
            updateStatus('Error: Live2D import function not available.', true);
        }
    }


    //==============================================================================
    // UI CONTROL
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

    // Show or hide the loading spinner
    const showLoader = show => DOM.loader.style.display = show ? 'flex' : 'none';

    // Update the status message displayed to the user
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
    // URL HANDLING
    //==============================================================================
    // Updates the browser's URL to reflect the current state of the file explorer.
    function updateUrl(replaceState = false) {
        if (!state.owner || !state.repo) return;
        const feIndex = window.location.pathname.indexOf('/fe/');
        const basePath = feIndex !== -1 
        ? window.location.pathname.substring(0, feIndex) 
        : window.location.pathname.replace(/\/$/, ''); // Get current path, remove trailing slash if any
        let newPath = `${basePath}/fe/${state.owner}/${state.repo}`;
        if (state.path) {
            newPath += `/${state.path}`;
        }

        const params = new URLSearchParams(window.location.search);
        if (state.previewFile) {
            params.set('preview', state.previewFile);
        } else {
            params.delete('preview');
        }

        const queryString = params.toString();
        if (queryString) {
            newPath += `?${queryString}`;
        }
        
        const currentUrl = window.location.pathname + window.location.search;
        if (currentUrl !== newPath) {
            const method = replaceState ? 'replaceState' : 'pushState';
            // Use an empty string for the title
            history[method]({}, '', newPath);
        }
    }

    // Parses the URL on page load to initialize the explorer state.
    function handleUrlAndLoad() {
        // Handle the redirect from the 404.html page.
        const initialParams = new URLSearchParams(window.location.search);
        const redirectPath = initialParams.get('redirect');

        if (redirectPath) {
            // Contain the path the user originally tried to access.
            const newUrl = new URL(redirectPath, window.location.href);
            history.replaceState(null, '', newUrl.pathname + newUrl.search);
        }

        const path = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        const previewFile = params.get('preview');

        const segments = path.split('/');
        // Find the 'fe' segment
        const feIndex = segments.findIndex(s => s.toLowerCase() === 'fe');

        if (feIndex > -1 && segments.length >= feIndex + 3) {
            const owner = segments[feIndex + 1];
            const repo = segments[feIndex + 2];
            const filePath = segments.slice(feIndex + 3).join('/');

            openExplorer();
            DOM.ownerInput.value = owner;
            DOM.repoInput.value = repo;
            state.owner = owner;
            state.repo = repo;

            const onContentLoaded = (items) => {
                if (previewFile) {
                    const fileToPreview = items.find(item => item.name === previewFile && item.type === 'file');
                    if (fileToPreview) {
                        handleListItemClick(fileToPreview);
                    }
                }
            };
            fetchAndDisplayContents(filePath, onContentLoaded);
        } else {
            updateStatus('Enter GitHub Owner and Repository to begin.');
        }
    }

    // Handles browser back/forward navigation.
    function handlePopState() {
        closeFilePreview();
        handleUrlAndLoad();
    }


    //==============================================================================
    // REPOSITORY LOADING & DATA FETCHING
    //==============================================================================
    function handleLoadRepository() {
        state.owner = DOM.ownerInput.value.trim();
        state.repo = DOM.repoInput.value.trim();

        if (!state.owner || !state.repo) {
            updateStatus('Error: Owner and Repository name are required.', true);
            return;
        }
        setPlaceholder(DOM.fileListingContainer, 'Loading content...');
        DOM.breadcrumbs.innerHTML = '';
        closeFilePreview();
        fetchAndDisplayContents('');
    }

    // Fetch and display contents for a given path
    async function fetchAndDisplayContents(path, onLoadCallback) {
        state.path = path;
        updateUrl();
        setPlaceholder(DOM.fileListingContainer, 'Loading items...');
        updateBreadcrumbs(path);
        DOM.upDirectoryBtn.style.display = path ? 'flex' : 'none';

        try {
            const contents = await fetchGitHubContentsWithCache(path);
            renderItems(contents || []);
            if (onLoadCallback) {
                onLoadCallback(contents || []);
            }
        } catch (error) {
            console.error('[REPO EXPLORER] GitHub API Fetch error:', error);
            setPlaceholder(DOM.fileListingContainer, `Error: ${error.message}`, true);
            updateStatus(`Error: ${error.message}`, true);
        }
    }

    // Fetch contents from GitHub API for a given Owner plus Repo
    async function fetchGitHubContents(path) {
        const url = `${GITHUB_API_BASE}/${state.owner}/${state.repo}/contents/${path}`;
        updateStatus(`Fetching from API: ${path || 'root'}`);
        showLoader(true);
        try {
            const response = await fetch(url, { headers: { 'Accept': 'application/vnd.github.v3+json' } });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                throw new Error(`GitHub API Error (${response.status}): ${errorData.message}`);
            }
            const data = await response.json();
            updateStatus(`API Fetched: ${path || 'root'}`, false, true);
            return Array.isArray(data) ? data : [data];
        } finally {
            showLoader(false);
        }
    }

    // Fetch contents with session storage caching
    async function fetchGitHubContentsWithCache(path) {
        const cacheKey = `fe_github_${state.owner}_${state.repo}_${path || 'ROOT'}`;
        const cachedItem = sessionStorage.getItem(cacheKey);
        if (cachedItem) {
            try {
                const { data } = JSON.parse(cachedItem);
                updateStatus(`Using cached data for: ${path || 'root'}`);
                return data;
            } catch (e) {
                console.warn("[REPO EXPLORER] Failed to parse cached item, removing:", e);
                sessionStorage.removeItem(cacheKey);
            }
        }
        const data = await fetchGitHubContents(path);
        if (data) {
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
            } catch (e) {
                console.warn("[REPO EXPLORER] Failed to save to session storage (possibly full):", e);
            }
        }
        return data;
    }


    //==============================================================================
    // CONTENT & PREVIEW RENDERING
    //==============================================================================
    // Render list of items in the file listing container
    function renderItems(items) {
        DOM.fileListingContainer.innerHTML = '';
        if (items.length === 0) {
            setPlaceholder(DOM.fileListingContainer, 'This folder is empty.');
            return;
        }

        items.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
            return a.type === 'dir' ? -1 : 1;
        });

        const list = document.createDocumentFragment();
        items.forEach(item => list.appendChild(createListItemElement(item)));
        DOM.fileListingContainer.appendChild(list);
    }

    // Create a list item element for a given file or directory item
    function createListItemElement(item) {
        const li = document.createElement('li');
        li.className = 'fe-list-item';
        li.dataset.path = item.path;
        li.title = item.name;
        li.setAttribute('role', 'button');
        li.tabIndex = 0;

        const iconClass = item.type === 'dir' ? 'fa-folder' : getFileIcon(item.name);
        li.innerHTML = `
            <span class="fe-item-icon ${item.type === 'dir' ? 'folder-icon' : ''}"><i class="fas ${iconClass}" aria-hidden="true"></i></span>
            <span class="fe-list-item-name">${item.name}</span>
        `;

        if (item.type === 'file' && MODEL_FILE_REGEX.test(item.name)) {
            const importBtn = document.createElement('button');
            importBtn.className = 'fe-import-model-btn';
            importBtn.title = `Import ${item.name}`;
            importBtn.innerHTML = `<i class="fas fa-file-import" aria-hidden="true"></i> Import Model`;
            importBtn.addEventListener('click', e => { e.stopPropagation(); handleImportModel(item); });
            li.appendChild(importBtn);
        }

        li.addEventListener('click', () => handleListItemClick(item));
        li.addEventListener('keypress', e => (e.key === 'Enter' || e.key === ' ') && handleListItemClick(item));
        return li;
    }

    // Update the breadcrumb navigation based on the current path
    function updateBreadcrumbs(path) {
        DOM.breadcrumbs.innerHTML = '';
        const segments = path.split('/').filter(Boolean);
        const rootLink = createBreadcrumbLink('Root', `Navigate to root of ${state.owner}/${state.repo}`, '');
        DOM.breadcrumbs.appendChild(rootLink);

        let currentBuiltPath = '';
        segments.forEach((segment, index) => {
            DOM.breadcrumbs.appendChild(document.createTextNode(' / '));
            currentBuiltPath += (currentBuiltPath ? '/' : '') + segment;
            if (index < segments.length - 1) {
                DOM.breadcrumbs.appendChild(createBreadcrumbLink(segment, `Navigate to ${segment}`, currentBuiltPath));
            } else {
                const span = document.createElement('span');
                span.textContent = segment;
                DOM.breadcrumbs.appendChild(span);
            }
        });
    }

    // Create a breadcrumb link element
    function createBreadcrumbLink(text, title, path) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = text;
        link.title = title;
        link.addEventListener('click', e => handleBreadcrumbClick(e, path));
        return link;
    }

    // Preview caching helpers (store small previews in sessionStorage)
    function getPreviewCacheKey(path) {
        return `fe_preview_${state.owner}_${state.repo}_${path}`;
    }

    function getPreviewFromCache(path) {
        const key = getPreviewCacheKey(path);
        const raw = sessionStorage.getItem(key);
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch (e) {
            console.warn('[REPO EXPLORER] Invalid preview cache, removing:', e);
            sessionStorage.removeItem(key);
            return null;
        }
    }

    function savePreviewToCache(path, type, content) {
        const key = getPreviewCacheKey(path);
        try {
            sessionStorage.setItem(key, JSON.stringify({ type, content, timestamp: Date.now() }));
        } catch (e) {
            console.warn('[REPO EXPLORER] Failed to save preview to sessionStorage (possibly full):', e);
        }
    }

    function blobToDataURL(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    // Display file preview for a given file item
    async function displayFilePreview(fileItem) {
        DOM.previewFileName.textContent = fileItem.name;
        setPlaceholder(DOM.previewContent, 'Loading preview...');
        DOM.previewActions.innerHTML = '';
        DOM.filePreviewContainer.style.display = 'flex';
        DOM.filePreviewContainer.classList.add('active');
        DOM.fileListingContainer.classList.add('preview-open');

        state.previewFile = fileItem.name;
        updateUrl(true);

        const jsDelivrUrl = `${JSDELIVR_CDN_BASE}/${state.owner}/${state.repo}/${fileItem.path}`;
        const extension = fileItem.name.split('.').pop().toLowerCase();

        // If we have a cached preview, render it synchronously and skip the loader
        const cached = getPreviewFromCache(fileItem.path);
        if (cached) {
            try {
                DOM.previewContent.innerHTML = '';
                if (cached.type === 'image') {
                    const img = document.createElement('img');
                    img.alt = `Preview of ${fileItem.name}`;
                    img.src = cached.content; // data URL
                    await img.decode();
                    DOM.previewContent.appendChild(img);
                } else { // text/json
                    const pre = document.createElement('pre');
                    pre.textContent = cached.content;
                    DOM.previewContent.appendChild(pre);
                }
                renderPreviewActions(fileItem, jsDelivrUrl);
            } catch (err) {
                console.warn('[REPO EXPLORER] Cached preview render failed, falling back to fetch:', err);
                // fall through to fetch path
            }
            return;
        }

        // Not cached: show loader and fetch, then save to cache
        showLoader(true);
        try {
            if (IMAGE_EXTENSIONS.includes(extension)) {
                const response = await fetch(jsDelivrUrl);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const blob = await response.blob();
                const dataUrl = await blobToDataURL(blob);
                const img = document.createElement('img');
                img.alt = `Preview of ${fileItem.name}`;
                img.src = dataUrl;
                await img.decode();
                DOM.previewContent.innerHTML = '';
                DOM.previewContent.appendChild(img);
                // save image as data URL to cache
                savePreviewToCache(fileItem.path, 'image', dataUrl);
            } else {
                const response = await fetch(jsDelivrUrl);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const text = await response.text();
                const content = extension === 'json' ? JSON.stringify(JSON.parse(text), null, 2) : text;
                const pre = document.createElement('pre');
                pre.textContent = content;
                DOM.previewContent.innerHTML = '';
                DOM.previewContent.appendChild(pre);
                // save text to cache
                savePreviewToCache(fileItem.path, 'text', content);
            }
            renderPreviewActions(fileItem, jsDelivrUrl);
        } catch (error) {
            console.error('[REPO EXPLORER] File preview error:', error);
            setPlaceholder(DOM.previewContent, `Error loading preview: ${error.message}`, true);
            renderPreviewActions(fileItem, fileItem.html_url, true); // Fallback
        } finally {
            showLoader(false);
        }
    }

    // Render action buttons for the file preview
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

    // Close the file preview panel
    function closeFilePreview() {
        if (!DOM.filePreviewContainer.classList.contains('active')) return;

        DOM.filePreviewContainer.classList.remove('active');
        DOM.fileListingContainer.classList.remove('preview-open');
        DOM.filePreviewContainer.style.display = 'none';
        DOM.previewContent.innerHTML = '';
        DOM.previewActions.innerHTML = '';
        DOM.previewFileName.textContent = '';
        
        state.previewFile = null;
        updateUrl(true);

        if (state.selectedFileItemElement) {
            state.selectedFileItemElement.classList.remove('selected');
            state.selectedFileItemElement = null;
        }
    }

    // Navigate up one directory level
    const navigateUp = () => state.path && fetchAndDisplayContents(state.path.substring(0, state.path.lastIndexOf('/')));


    //==============================================================================
    // UTILITIES & START
    //==============================================================================
    // Get appropriate icon class for a given file extension
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
            'zip': 'fa-file-archive'
        };
        return iconMap[ext] || 'fa-file';
    }

    // Initialize the repository explorer
    initialize();
});