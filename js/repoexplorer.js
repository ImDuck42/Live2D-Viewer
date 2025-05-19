'use strict';

//==============================================================================
// INITIALIZATION AND DOMContentLoaded
//==============================================================================
document.addEventListener('DOMContentLoaded', () => {
    //==============================================================================
    // DOM ELEMENT CACHE
    //==============================================================================
    const openExplorerBtn = document.getElementById('open-file-explorer-btn');
    const explorerModal = document.getElementById('file-explorer-modal');
    const closeExplorerBtn = document.getElementById('file-explorer-close-btn');
    const ownerInput = document.getElementById('feOwnerInput');
    const repoInput = document.getElementById('feRepoInput');
    const loadRepoBtn = document.getElementById('feLoadRepoBtn');
    const mainBreadcrumbs = document.getElementById('feMainBreadcrumbs');
    const upDirectoryBtn = document.getElementById('feUpDirectoryBtn');
    const fileListingContainer = document.getElementById('feFileListingContainer');
    const filePreviewContainer = document.getElementById('feFilePreviewContainer');
    const previewFileName = document.getElementById('fePreviewFileName');
    const closePreviewBtn = document.getElementById('feClosePreviewBtn');
    const previewContent = document.getElementById('fePreviewContent');
    const previewActions = document.getElementById('fePreviewActions');
    const statusMessage = document.getElementById('feStatusMessage');
    const loader = document.getElementById('feLoader');

    // Validate essential DOM elements
    if (!explorerModal || !openExplorerBtn || !closeExplorerBtn || !ownerInput || !repoInput || !loadRepoBtn ||
        !mainBreadcrumbs || !upDirectoryBtn || !fileListingContainer || !filePreviewContainer || !previewFileName ||
        !closePreviewBtn || !previewContent || !previewActions || !statusMessage || !loader) {
        console.error("One or more File Explorer DOM elements are missing. Feature disabled.");
        return;
    }

    //==============================================================================
    // GLOBAL VARIABLES AND CONSTANTS
    //==============================================================================
    let currentOwner = '';
    let currentRepo = '';
    let currentPath = '';
    let selectedFileItemElement = null;
    const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes
    const GITHUB_API_BASE = 'https://api.github.com/repos';
    const JSDELIVR_CDN_BASE = 'https://cdn.jsdelivr.net/gh';
    const DEFAULT_BRANCHE = '@master'; // Default branch for jsDelivr links
    const MODEL_FILE_REGEX = /(.*)(model3?|model)\.json$/i; // Regex to identify model files

    //==============================================================================
    // EVENT LISTENERS SETUP
    //==============================================================================
    openExplorerBtn.addEventListener('click', () => {
        explorerModal.classList.add('active');
        openExplorerBtn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll');
    });

    const closeExplorer = () => {
        explorerModal.classList.remove('active');
        openExplorerBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    };

    closeExplorerBtn.addEventListener('click', closeExplorer);
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && explorerModal.classList.contains('active')) {
            closeExplorer();
        }
    });

    loadRepoBtn.addEventListener('click', initializeRepositoryLoad);
    repoInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') initializeRepositoryLoad(); });
    ownerInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') initializeRepositoryLoad(); });
    upDirectoryBtn.addEventListener('click', navigateUp);
    closePreviewBtn.addEventListener('click', closeFilePreview);

    //==============================================================================
    // REPOSITORY LOADING AND INITIALIZATION
    //==============================================================================
    function initializeRepositoryLoad() {
        currentOwner = ownerInput.value.trim();
        currentRepo = repoInput.value.trim();
        if (!currentOwner || !currentRepo) {
            updateStatus('Error: Owner and Repository name are required.', true);
            return;
        }
        resetUIForNewRepo();
        currentPath = '';
        updateStatus(`Loading ${currentOwner}/${currentRepo}...`);
        fetchAndDisplayContentsFE('');
    }

    function resetUIForNewRepo() {
        fileListingContainer.innerHTML = '<p class="fe-placeholder-text">Loading content...</p>';
        mainBreadcrumbs.innerHTML = '';
        closeFilePreview();
    }

    //==============================================================================
    // GITHUB API FETCHING AND CACHING
    //==============================================================================
    async function fetchGitHubContentsFE(path) {
        const url = `${GITHUB_API_BASE}/${currentOwner}/${currentRepo}/contents/${path}`;
        updateStatus(`Fetching from API: ${path || 'root'}`);
        showLoaderFE(true);
        try {
            const response = await fetch(url, { headers: { 'Accept': 'application/vnd.github.v3+json' } });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                throw new Error(`GitHub API Error (${response.status}): ${errorData.message}`);
            }
            const data = await response.json();
            updateStatus(`API Fetched: ${path || 'root'}`, false, true);
            return Array.isArray(data) ? data : [data]; // Ensure result is always an array
        } catch (error) {
            console.error('GitHub API Fetch error:', error);
            updateStatus(`Error: ${error.message}`, true);
            fileListingContainer.innerHTML = `<p class="fe-placeholder-text fe-error-message">Error: ${error.message}</p>`;
            return null;
        } finally {
            showLoaderFE(false);
        }
    }

    async function fetchGitHubContentsWithCacheFE(path) {
        const cacheKey = `fe_github_contents_${currentOwner}_${currentRepo}_${path || 'ROOT'}`;
        const cachedItem = sessionStorage.getItem(cacheKey);

        if (cachedItem) {
            try {
                const { timestamp, data } = JSON.parse(cachedItem);
                if (Date.now() - timestamp < CACHE_DURATION_MS) {
                    updateStatus(`Using cached data for: ${path || 'root'}`);
                    return data;
                }
                sessionStorage.removeItem(cacheKey); // Cache expired
            } catch (e) {
                console.warn("Failed to parse cached item, removing:", e);
                sessionStorage.removeItem(cacheKey);
            }
        }

        const data = await fetchGitHubContentsFE(path);
        if (data) {
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
            } catch (e) {
                console.warn("Failed to save to session storage (possibly full):", e);
                // Potentially implement a more robust cache eviction strategy if this becomes an issue
            }
        }
        return data;
    }

    //==============================================================================
    // CONTENT DISPLAY AND RENDERING
    //==============================================================================
    async function fetchAndDisplayContentsFE(path) {
        currentPath = path;
        fileListingContainer.innerHTML = '<p class="fe-placeholder-text">Loading items...</p>';
        updateBreadcrumbsFE(path);
        upDirectoryBtn.style.display = path ? 'flex' : 'none'; // Show 'Up' button if not in root
        closeFilePreview();

        const contents = await fetchGitHubContentsWithCacheFE(path);
        if (!contents) return; // Error handled in fetch function

        renderItemsFE(contents.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
            return a.type === 'dir' ? -1 : 1; // Directories first
        }));
    }

    function renderItemsFE(items) {
        fileListingContainer.innerHTML = ''; // Clear previous items
        if (items.length === 0) {
            fileListingContainer.innerHTML = '<p class="fe-placeholder-text">This folder is empty.</p>';
            return;
        }

        const ul = document.createElement('ul');
        ul.style.cssText = 'list-style-type: none; padding: 0; margin: 0;'; // Basic styling
        items.forEach(item => ul.appendChild(createListItemElementFE(item)));
        fileListingContainer.appendChild(ul);
    }

    function createListItemElementFE(item) {
        const li = document.createElement('li');
        li.className = 'fe-list-item';
        li.dataset.path = item.path;
        li.dataset.type = item.type;
        li.title = item.name;

        const icon = document.createElement('span');
        icon.className = 'fe-item-icon';
        const faIcon = document.createElement('i');
        faIcon.className = 'fas'; // Font Awesome base class
        faIcon.setAttribute('aria-hidden', 'true');
        faIcon.classList.add(item.type === 'dir' ? 'fa-folder' : getFileIconFA(item.name));
        if (item.type === 'dir') icon.classList.add('folder-icon');
        icon.appendChild(faIcon);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'fe-list-item-name';
        nameSpan.textContent = item.name;

        li.appendChild(icon);
        li.appendChild(nameSpan);

        // Add import button for model files
        if (item.type === 'file' && MODEL_FILE_REGEX.test(item.name)) {
            const importBtn = document.createElement('button');
            importBtn.className = 'fe-import-model-btn';
            importBtn.title = `Import ${item.name} to Live2D Viewer`;
            const importIcon = document.createElement('i');
            importIcon.className = 'fas fa-file-import';
            importIcon.setAttribute('aria-hidden', 'true');
            importBtn.appendChild(importIcon);
            importBtn.appendChild(document.createTextNode('Import Model'));
            importBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent li click event
                handleImportModel(item);
            });
            li.appendChild(importBtn);
        }

        li.addEventListener('click', () => {
            // Deselect previous item if any
            if (selectedFileItemElement && selectedFileItemElement !== li) {
                selectedFileItemElement.classList.remove('selected');
            }

            if (item.type === 'dir') {
                fetchAndDisplayContentsFE(item.path);
                selectedFileItemElement = null; // No selection for directories after navigation
            } else {
                fetchAndDisplayFilePreviewFE(item);
                li.classList.add('selected');
                selectedFileItemElement = li;
            }
        });
        return li;
    }

    function updateBreadcrumbsFE(path) {
        mainBreadcrumbs.innerHTML = '';
        const segments = path.split('/').filter(s => s); // Filter out empty segments

        const rootLink = document.createElement('a');
        rootLink.href = '#'; // Prevent page navigation
        rootLink.textContent = 'Root';
        rootLink.title = `Navigate to root of ${currentOwner}/${currentRepo}`;
        rootLink.addEventListener('click', (e) => {
            e.preventDefault();
            fetchAndDisplayContentsFE('');
        });
        mainBreadcrumbs.appendChild(rootLink);

        let currentBuiltPath = '';
        segments.forEach((segment, index) => {
            mainBreadcrumbs.appendChild(document.createTextNode(' / '));
            currentBuiltPath += (currentBuiltPath ? '/' : '') + segment;

            if (index < segments.length - 1) { // Not the last segment
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = segment;
                link.title = `Navigate to ${segment}`;
                const pathForLink = currentBuiltPath; // Capture path for this link
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    fetchAndDisplayContentsFE(pathForLink);
                });
                mainBreadcrumbs.appendChild(link);
            } else { // Last segment (current directory)
                const span = document.createElement('span');
                span.textContent = segment;
                mainBreadcrumbs.appendChild(span);
            }
        });
    }

    //==============================================================================
    // NAVIGATION AND FILE PREVIEW
    //==============================================================================
    function navigateUp() {
        if (!currentPath) return; // Already at root
        const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        fetchAndDisplayContentsFE(parentPath);
    }

    async function fetchAndDisplayFilePreviewFE(fileItem) {
        previewFileName.textContent = fileItem.name;
        previewContent.innerHTML = '<p class="fe-placeholder-text">Loading preview...</p>';
        previewActions.innerHTML = ''; // Clear previous actions
        filePreviewContainer.style.display = 'flex';
        showLoaderFE(true);

        const jsDelivrUrl = `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}${DEFAULT_BRANCHE}/${fileItem.path}`;
        const rawGitHubUrl = fileItem.download_url; // Fallback or for non-CDN use
        let fileSourceUrl = jsDelivrUrl; // Assume jsDelivr first

        try {
            const extension = fileItem.name.split('.').pop().toLowerCase();
            const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'];

            if (imageExtensions.includes(extension)) {
                const img = document.createElement('img');
                img.alt = `Preview of ${fileItem.name}`;
                img.src = fileSourceUrl;
                img.onerror = () => { // Fallback to raw GitHub URL if jsDelivr fails
                    console.warn(`Image load failed from jsDelivr: ${fileSourceUrl}. Trying raw GitHub URL.`);
                    img.src = rawGitHubUrl;
                    fileSourceUrl = rawGitHubUrl; // Update source URL for "Open" button
                    img.onerror = () => { // Final failure
                        previewContent.innerHTML = '<p class="fe-placeholder-text fe-error-message">Could not load image.</p>';
                    };
                };
                previewContent.innerHTML = ''; // Clear loading text
                previewContent.appendChild(img);
            } else { // For text-based files
                let response = await fetch(fileSourceUrl);
                if (!response.ok) {
                    console.warn(`Fetch failed from jsDelivr (${response.status}). Trying raw GitHub.`);
                    fileSourceUrl = rawGitHubUrl;
                    response = await fetch(rawGitHubUrl);
                    if (!response.ok) throw new Error(`HTTP ${response.status} fetching file.`);
                }
                renderTextPreviewFE(await response.text(), extension);
            }

            // Add "Open File" link
            const openBtn = document.createElement('a');
            openBtn.href = fileSourceUrl;
            openBtn.textContent = `Open ${fileItem.name}`;
            openBtn.className = 'fe-open-link';
            openBtn.target = "_blank"; // Open in new tab
            openBtn.rel = "noopener noreferrer";
            previewActions.appendChild(openBtn);

            // Add "Import Model" button for model files in preview
            if (fileItem.type === 'file' && MODEL_FILE_REGEX.test(fileItem.name)) {
                const importBtnPreview = document.createElement('button');
                importBtnPreview.className = 'fe-import-model-btn-preview';
                importBtnPreview.title = `Import ${fileItem.name} to Live2D Viewer`;
                const importIconPreview = document.createElement('i');
                importIconPreview.className = 'fas fa-file-import';
                importIconPreview.setAttribute('aria-hidden', 'true');
                importBtnPreview.appendChild(importIconPreview);
                importBtnPreview.appendChild(document.createTextNode('Import Model'));
                importBtnPreview.addEventListener('click', () => handleImportModel(fileItem, fileSourceUrl));
                previewActions.appendChild(importBtnPreview);
            }

        } catch (error) {
            console.error('File preview error:', error);
            previewContent.innerHTML = `<p class="fe-placeholder-text fe-error-message">Error loading preview: ${error.message}</p>`;
            // Add a link to view on GitHub as a fallback
            const githubLink = document.createElement('a');
            githubLink.href = fileItem.html_url;
            githubLink.textContent = `View on GitHub`;
            githubLink.className = 'fe-open-link';
            githubLink.target = "_blank";
            githubLink.rel = "noopener noreferrer";
            previewActions.appendChild(githubLink);
        } finally {
            showLoaderFE(false);
            // Scroll preview into view if it's active
            if (filePreviewContainer.style.display === 'flex') {
                filePreviewContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }

    function renderTextPreviewFE(text, extension) {
        const pre = document.createElement('pre');
        if (extension === 'json') {
            try { // Pretty-print JSON
                pre.textContent = JSON.stringify(JSON.parse(text), null, 2);
            } catch { // If JSON is invalid, show raw text
                pre.textContent = text;
            }
        } else {
            pre.textContent = text;
        }
        previewContent.innerHTML = '';
        previewContent.appendChild(pre);
    }

    function closeFilePreview() {
        filePreviewContainer.style.display = 'none';
        previewFileName.textContent = '';
        previewContent.innerHTML = '';
        previewActions.innerHTML = '';
        if (selectedFileItemElement) {
            selectedFileItemElement.classList.remove('selected');
            selectedFileItemElement = null;
        }
    }

    //==============================================================================
    // UTILITY FUNCTIONS
    //==============================================================================
    function getFileIconFA(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        const iconMap = {
            // Image files
            'png': 'fa-image', 'jpg': 'fa-image', 'jpeg': 'fa-image', 'gif': 'fa-image', 'webp': 'fa-image', 'svg': 'fa-image', 'bmp': 'fa-image', 'ico': 'fa-image',
            // Code/Script files
            'json': 'fa-code', 'js': 'fa-code', 'jsx': 'fa-code', 'ts': 'fa-code', 'tsx': 'fa-code',
            'html': 'fa-code', 'css': 'fa-code', 'scss': 'fa-code', 'less': 'fa-code',
            'py': 'fa-code', 'java': 'fa-code', 'c': 'fa-code', 'cpp': 'fa-code', 'cs': 'fa-code',
            'rb': 'fa-code', 'php': 'fa-code', 'go': 'fa-code', 'sh': 'fa-terminal', 'bat': 'fa-terminal',
            // Text/Document files
            'md': 'fa-file-lines', 'markdown': 'fa-file-lines', 'txt': 'fa-file-lines', 'log': 'fa-file-lines',
            // Archive files
            'zip': 'fa-file-zipper', 'rar': 'fa-file-zipper', 'tar': 'fa-file-zipper', 'gz': 'fa-file-zipper', '7z': 'fa-file-zipper',
            // Specific document types
            'pdf': 'fa-file-pdf', 'doc': 'fa-file-word', 'docx': 'fa-file-word', 'odt': 'fa-file-word',
            'xls': 'fa-file-excel', 'xlsx': 'fa-file-excel', 'csv': 'fa-file-csv',
            'ppt': 'fa-file-powerpoint', 'pptx': 'fa-file-powerpoint',
            // Media files
            'mp3': 'fa-file-audio', 'wav': 'fa-file-audio', 'ogg': 'fa-file-audio',
            'mp4': 'fa-file-video', 'mov': 'fa-file-video', 'avi': 'fa-file-video', 'webm': 'fa-file-video',
            // Default
            'default': 'fa-file'
        };
        return iconMap[ext] || iconMap['default'];
    }

    function showLoaderFE(show) {
        loader.style.display = show ? 'flex' : 'none';
    }

    function updateStatus(message, isError = false, isSuccess = false) {
        statusMessage.textContent = message;
        statusMessage.className = ''; // Reset classes
        if (isError) statusMessage.classList.add('fe-status-error');
        else if (isSuccess) statusMessage.classList.add('fe-status-success');
    }

    //==============================================================================
    // MODEL IMPORT HANDLING
    //==============================================================================
    function handleImportModel(fileItem, sourceUrlOverride = null) {
        // Prefer override (e.g., from preview), then download_url, then construct jsDelivr URL
        const modelUrl = sourceUrlOverride || fileItem.download_url || `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}${DEFAULT_BRANCHE}/${fileItem.path}`;
        console.log(`Attempting to import Live2D Model: ${modelUrl}`);

        if (window.loadLive2DModel && typeof window.loadLive2DModel === 'function') {
            window.loadLive2DModel(modelUrl);
            updateStatus(`Sent ${fileItem.name} to Live2D viewer.`, false, true);
        } else {
            console.error('Live2D import function (window.loadLive2DModel) not found.');
            updateStatus('Error: Live2D import function not available.', true);
            alert('Error: Could not communicate with the Live2D viewer.');
        }
    }

    //==============================================================================
    // INITIAL UI STATE
    //==============================================================================
    if (ownerInput.value.trim() && repoInput.value.trim()) {
        updateStatus('Defaults loaded. Click "Load Repository" or enter new values.');
    } else {
        updateStatus('Enter GitHub Owner and Repository name to begin.');
    }
});