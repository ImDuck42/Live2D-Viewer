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
    };


    //==============================================================================
    // INITIALIZATION & EVENT LISTENERS
    //==============================================================================
    // Initializes the file explorer, sets up event listeners, and handles deep-linked URLs
    function initialize() {
        if (Object.values(DOM).some(el => !el)) {
            log('ERROR', "File Explorer: One or more DOM elements are missing. Feature disabled.");
            return;
        }
        setupEventListeners();
        handleFeUrl();
        updateStatus('Enter GitHub Owner and Repository to begin.');
    }

    // Attaches all necessary event listeners for the file explorer UI
    function setupEventListeners() {
        DOM.openExplorerBtn.addEventListener('click', openExplorer);
        DOM.closeExplorerBtn.addEventListener('click', closeExplorer);
        window.addEventListener('keydown', handleGlobalKeyDown);
        DOM.loadRepoBtn.addEventListener('click', handleLoadRepository);
        DOM.repoInput.addEventListener('keypress', handleInputKeyPress);
        DOM.ownerInput.addEventListener('keypress', handleInputKeyPress);
        DOM.upDirectoryBtn.addEventListener('click', navigateUp);
        DOM.closePreviewBtn.addEventListener('click', closeFilePreview);
        window.addEventListener('popstate', handleFeUrl);
    }


    //==============================================================================
    // EVENT HANDLERS
    //==============================================================================
    // Handles the 'Escape' key to close the explorer modal and loading the repository when the 'Enter' key is pressed
    const handleGlobalKeyDown = e => e.key === 'Escape' && DOM.explorerModal.classList.contains('active') && closeExplorer();
    const handleInputKeyPress = e => e.key === 'Enter' && handleLoadRepository();

    // Handles clicks on file and directory list items
    function handleListItemClick(item) {
        state.selectedFileItemElement?.classList.remove('selected');

        if (item.type === 'dir') {
            closeFilePreview();
            fetchAndDisplayContents(item.path);
            state.selectedFileItemElement = null;
        } else {
            const listItemElement = document.querySelector(`[data-path="${item.path}"]`);
            listItemElement?.classList.add('selected');
            state.selectedFileItemElement = listItemElement;
            displayFilePreview(item);
        }
    }

    // Handles clicks on breadcrumb links to navigate to a specific path
    function handleBreadcrumbClick(event, path) {
        event.preventDefault();
        fetchAndDisplayContents(path);
    }

    // Imports a Live2D model by calling the global 'window.loadLive2DModel' function, which is exposed by 'script.js'
    function handleImportModel(fileItem, sourceUrlOverride = null) {
        const modelUrl = sourceUrlOverride || `${JSDELIVR_CDN_BASE}/${state.owner}/${state.repo}/${fileItem.path}`;
        log('MODEL', `[REPO EXPLORER] Attempting to import Live2D Model: ${modelUrl}`);

        if (typeof window.loadLive2DModel === 'function') {
            window.loadLive2DModel(modelUrl);
            updateStatus(`Sent ${fileItem.name} to viewer.`, false, true);
        } else {
            log('ERROR', '[REPO EXPLORER] Live2D import function (window.loadLive2DModel) not found.');
            updateStatus('Error: Live2D import function not available.', true);
        }
    }


    //==============================================================================
    // UI CONTROL
    //==============================================================================
    // Opens the file explorer modal and updates the URL to reflect the current state
    function openExplorer() {
        DOM.explorerModal.classList.add('active');
        DOM.openExplorerBtn.setAttribute('aria-expanded', 'true');
        DOM.body.classList.add('no-scroll');
        updateUrl();
    }

    // Closes the file explorer modal and cleans up the URL
    function closeExplorer() {
        DOM.explorerModal.classList.remove('active');
        DOM.openExplorerBtn.setAttribute('aria-expanded', 'false');
        DOM.body.classList.remove('no-scroll');
        
        const url = new URL(window.location);
        if (url.searchParams.has('fe')) {
            url.searchParams.delete('fe');
            url.searchParams.delete('preview');
            history.replaceState({ path: url.pathname }, '', url.pathname);
        }
    }

    // Toggles the visibility of the loading spinner
    const showLoader = show => DOM.loader.style.display = show ? 'flex' : 'none';

    // Updates the status message at the bottom of the file explorer
    function updateStatus(message, isError = false, isSuccess = false) {
        DOM.statusMessage.textContent = message;
        DOM.statusMessage.className = '';
        if (isError) DOM.statusMessage.classList.add('fe-status-error');
        if (isSuccess) DOM.statusMessage.classList.add('fe-status-success');
    }


    // Displays a placeholder message in a container
    function setPlaceholder(container, text, isError = false) {
        const className = isError ? 'fe-placeholder-text fe-error-message' : 'fe-placeholder-text';
        container.innerHTML = `<p class="${className}">${text}</p>`;
    }


    //==============================================================================
    // REPOSITORY LOADING & DATA FETCHING
    //==============================================================================

    // Handles the "Load Repository" button click
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

    // Fetches and displays the contents of a given path in the repository
    async function fetchAndDisplayContents(path) {
        state.path = path;
        updateUrl();
        setPlaceholder(DOM.fileListingContainer, 'Loading items...');
        updateBreadcrumbs(path);
        DOM.upDirectoryBtn.style.display = path ? 'flex' : 'none';

        try {
            const contents = await fetchGitHubContentsWithCache(path);
            renderItems(contents || []);
        } catch (error) {
            log('ERROR', '[REPO EXPLORER] GitHub API Fetch error:', error);
            setPlaceholder(DOM.fileListingContainer, `Error: ${error.message}`, true);
            updateStatus(`Error: ${error.message}`, true);
        }
    }

    // Fetches repository contents from the GitHub API
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


    // A wrapper around 'fetchGitHubContents' that caches the results in 'sessionStorage' to avoid redundant API calls.
    async function fetchGitHubContentsWithCache(path) {
        const cacheKey = `fe_github_${state.owner}_${state.repo}_${path || 'ROOT'}`;
        const cachedItem = sessionStorage.getItem(cacheKey);
        if (cachedItem) {
            try {
                const { data } = JSON.parse(cachedItem);
                updateStatus(`Using cached data for: ${path || 'root'}`);
                return data;
            } catch (e) {
                log('WARN', "[REPO EXPLORER] Failed to parse cached item, removing:", e);
                sessionStorage.removeItem(cacheKey);
            }
        }
        const data = await fetchGitHubContents(path);
        if (data) {
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
            } catch (e) {
                log('WARN', "[REPO EXPLORER] Failed to save to session storage (possibly full):", e);
            }
        }
        return data;
    }


    //==============================================================================
    // CONTENT & PREVIEW RENDERING
    //==============================================================================
    // Renders a list of files and directories in the file listing container
    function renderItems(items) {
        DOM.fileListingContainer.innerHTML = '';
        if (items.length === 0) {
            setPlaceholder(DOM.fileListingContainer, 'This folder is empty.');
            return;
        }

        // Sort items to show directories first, then files alphabetically
        items.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
            return a.type === 'dir' ? -1 : 1;
        });

        const list = document.createDocumentFragment();
        items.forEach(item => list.appendChild(createListItemElement(item)));
        DOM.fileListingContainer.appendChild(list);
    }

    // Creates a single list item element for a file or directory
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

        // If the file is a model.json, add an "Import" button
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

    // Updates the breadcrumb navigation based on the current path
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
                // The last segment is the current directory and is not a link
                const span = document.createElement('span');
                span.textContent = segment;
                DOM.breadcrumbs.appendChild(span);
            }
        });
    }

    // A helper function to create a single breadcrumb link
    function createBreadcrumbLink(text, title, path) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = text;
        link.title = title;
        link.addEventListener('click', e => handleBreadcrumbClick(e, path));
        return link;
    }


    // Converts a Blob object to a data URL
    function blobToDataURL(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }


    // Displays a preview for the selected file
    async function displayFilePreview(fileItem) {
        DOM.previewFileName.textContent = fileItem.name;
        setPlaceholder(DOM.previewContent, 'Loading preview...');
        DOM.previewActions.innerHTML = '';
        DOM.filePreviewContainer.style.display = 'flex';
        DOM.filePreviewContainer.classList.add('active');
        DOM.fileListingContainer.classList.add('preview-open');
        updateUrl();

        const jsDelivrUrl = `${JSDELIVR_CDN_BASE}/${state.owner}/${state.repo}/${fileItem.path}`;
        const extension = fileItem.name.split('.').pop().toLowerCase();

        // Attempt to load the preview from the cache
        const getPreviewCacheKey = path => `fe_preview_${state.owner}_${state.repo}_${path}`;
        const getPreviewFromCache = path => {
            const raw = sessionStorage.getItem(getPreviewCacheKey(path));
            if (!raw) return null;
            try { return JSON.parse(raw); } catch (e) {
                log('WARN', '[REPO EXPLORER] Invalid preview cache, removing:', e);
                sessionStorage.removeItem(getPreviewCacheKey(path));
                return null;
            }
        };
        const savePreviewToCache = (path, type, content) => {
            try { sessionStorage.setItem(getPreviewCacheKey(path), JSON.stringify({ type, content, timestamp: Date.now() })); } catch (e) {
                log('WARN', '[REPO EXPLORER] Failed to save preview to sessionStorage (possibly full):', e);
            }
        };

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
                log('WARN', '[REPO EXPLORER] Cached preview render failed, falling back to fetch:', err);
            }
            return;
        }

        // If not cached, fetch the file content and display the preview
        showLoader(true);
        try {
            if (IMAGE_EXTENSIONS.includes(extension)) {
                // For images, fetch as a blob and convert to a data URL for caching
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
                savePreviewToCache(fileItem.path, 'image', dataUrl);
            } else {
                // For text-based files, fetch as text
                const response = await fetch(jsDelivrUrl);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const text = await response.text();
                const content = extension === 'json' ? JSON.stringify(JSON.parse(text), null, 2) : text;
                const pre = document.createElement('pre');
                pre.textContent = content;
                DOM.previewContent.innerHTML = '';
                DOM.previewContent.appendChild(pre);
                savePreviewToCache(fileItem.path, 'text', content);
            }
            renderPreviewActions(fileItem, jsDelivrUrl);
        } catch (error) {
            log('ERROR', '[REPO EXPLORER] File preview error:', error);
            setPlaceholder(DOM.previewContent, `Error loading preview: ${error.message}`, true);
            renderPreviewActions(fileItem, fileItem.html_url, true); // Fallback to GitHub URL.
        } finally {
            showLoader(false);
        }
    }

    // Renders action buttons for the file preview, such as "Open" and "Import Model"
    function renderPreviewActions(fileItem, url, isFallback = false) {
        DOM.previewActions.innerHTML = '';
        const openBtn = document.createElement('a');
        openBtn.href = url;
        openBtn.textContent = isFallback ? 'View on GitHub' : `Open ${fileItem.name}`;
        openBtn.className = 'fe-open-link';
        openBtn.target = "_blank";
        openBtn.rel = "noopener noreferrer";
        DOM.previewActions.appendChild(openBtn);

        // Add an "Import Model" button for model.json files
        if (MODEL_FILE_REGEX.test(fileItem.name) && !isFallback) {
            const importBtn = document.createElement('button');
            importBtn.className = 'fe-import-model-btn-preview';
            importBtn.textContent = 'Import Model';
            importBtn.addEventListener('click', () => handleImportModel(fileItem, url));
            DOM.previewActions.appendChild(importBtn);
        }
    }

    // Closes the file preview panel
    function closeFilePreview() {
        if (!DOM.filePreviewContainer.classList.contains('active')) return;

        DOM.filePreviewContainer.classList.remove('active');
        DOM.fileListingContainer.classList.remove('preview-open');
        DOM.filePreviewContainer.style.display = 'none';
        DOM.previewContent.innerHTML = '';
        DOM.previewActions.innerHTML = '';
        DOM.previewFileName.textContent = '';
        if (state.selectedFileItemElement) {
            state.selectedFileItemElement.classList.remove('selected');
            state.selectedFileItemElement = null;
        }
        updateUrl();
    }

    // Navigates up one directory level
    const navigateUp = () => state.path && fetchAndDisplayContents(state.path.substring(0, state.path.lastIndexOf('/')));


    //==============================================================================
    // URL MANAGEMENT & INITIALIZATION
    //==============================================================================
    // Handles deep linking by parsing URL parameters on page load
    function handleFeUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const fePath = urlParams.get('fe');
        
        if (!fePath) return;

        const [owner, repo, ...pathSegments] = fePath.split('/');
        if (owner && repo) {
            openExplorer();
            DOM.ownerInput.value = owner;
            DOM.repoInput.value = repo;
            // Prevent re-triggering handleLoadRepository if the values are the same
            if (state.owner === owner && state.repo === repo) return;
            state.owner = owner;
            state.repo = repo;

            const path = pathSegments.join('/');
            fetchAndDisplayContents(path).then(async () => {
                const previewFile = urlParams.get('preview');
                if (previewFile) {
                    await new Promise(r => setTimeout(r, 50)); // Allow DOM to update
                    const fullPath = (path ? path + '/' : '') + previewFile;
                    const fileItemElement = document.querySelector(`[data-path="${fullPath}"]`);
                    if (fileItemElement) {
                        const fileItem = {
                            path: fullPath,
                            name: previewFile,
                            type: 'file',
                        };
                        handleListItemClick(fileItem);
                    }
                }
            });
        }
    }


    // Updates the URL's query parameters to reflect the current state of the file explorer
    function updateUrl() {
        // Only update the URL if the modal is active and a repository is loaded
        if (!DOM.explorerModal.classList.contains('active') || !state.owner || !state.repo) {
            return;
        }
    
        // Construct the path, filtering out any empty segments to avoid double slashes
        const pathSegments = [state.owner, state.repo, ...state.path.split('/')].filter(Boolean);
        const fePath = pathSegments.join('/');
    
        const url = new URL(window.location);
        url.searchParams.set('fe', fePath);
    
        const previewFileName = DOM.previewFileName.textContent;
        if (DOM.filePreviewContainer.classList.contains('active') && previewFileName) {
            url.searchParams.set('preview', previewFileName);
        } else {
            url.searchParams.delete('preview');
        }
    
        const newSearchString = decodeURIComponent(url.search);
        const newRelativeUrl = url.pathname + newSearchString;
        const currentRelativeUrl = window.location.pathname + window.location.search;
    
        if (newRelativeUrl !== currentRelativeUrl) {
            history.pushState({ path: newRelativeUrl }, '', newRelativeUrl);
        }
    }
    
    // Returns the appropriate Font Awesome icon class for a given filename
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