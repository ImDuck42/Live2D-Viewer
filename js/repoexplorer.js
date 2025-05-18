document.addEventListener('DOMContentLoaded', () => {
    //==============================================================================
    // DOM ELEMENT RETRIEVAL
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

    if (!explorerModal || !openExplorerBtn || !closeExplorerBtn || !ownerInput || !repoInput || !loadRepoBtn ||
        !mainBreadcrumbs || !upDirectoryBtn || !fileListingContainer || !filePreviewContainer || !previewFileName ||
        !closePreviewBtn || !previewContent || !previewActions || !statusMessage || !loader) {
        console.error("One or more File Explorer DOM elements are missing. File Explorer may not function correctly.");
        return;
    }

    //==============================================================================
    // APP STATE & CONFIGURATION
    //==============================================================================
    let currentOwner = '';
    let currentRepo = '';
    let currentPath = '';
    let selectedFileItemElement = null; // DOM element
    const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

    const GITHUB_API_BASE = 'https://api.github.com/repos';
    const JSDELIVR_CDN_BASE = 'https://cdn.jsdelivr.net/gh';

    //==============================================================================
    // MODAL VISIBILITY & CONTROL
    //==============================================================================
    openExplorerBtn.addEventListener('click', () => {
        explorerModal.classList.add('active');
        document.body.classList.add('no-scroll'); // Prevent main page scroll
        if (ownerInput.value.trim() && repoInput.value.trim() && fileListingContainer.querySelector('.fe-placeholder-text')) {
        }
    });

    closeExplorerBtn.addEventListener('click', () => {
        explorerModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && explorerModal.classList.contains('active')) {
            explorerModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    //==============================================================================
    // EVENT LISTENERS
    //==============================================================================
    loadRepoBtn.addEventListener('click', initializeRepositoryLoad);
    repoInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') initializeRepositoryLoad(); });
    ownerInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') initializeRepositoryLoad(); });
    upDirectoryBtn.addEventListener('click', navigateUp);
    closePreviewBtn.addEventListener('click', closeFilePreview);

    //==============================================================================
    // INITIALIZATION & RESET
    //==============================================================================
    /**
     * Initializes the repository loading process based on input fields.
     */
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
        fetchAndDisplayContentsFE(''); // FE for File Explorer
    }

    /**
     * Resets the UI elements when a new repository is loaded.
     */
    function resetUIForNewRepo() {
        fileListingContainer.innerHTML = '<p class="fe-placeholder-text">Loading content...</p>';
        mainBreadcrumbs.innerHTML = '';
        closeFilePreview();
    }

    //==============================================================================
    // API FETCHING & CACHING
    //==============================================================================
    /**
     * Fetches content data from the GitHub API for a given path.
     * @param {string} path - The path within the repository to fetch.
     * @returns {Promise<Array|null>} A promise that resolves to an array of content items or null on error.
     */
    async function fetchGitHubContentsFE(path) {
        const url = `${GITHUB_API_BASE}/${currentOwner}/${currentRepo}/contents/${path}`;
        updateStatus(`Fetching from API: ${path || 'root'}`);
        showLoaderFE(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                throw new Error(`GitHub API Error (${response.status}): ${errorData.message}`);
            }
            const data = await response.json();
            updateStatus(`API Fetched: ${path || 'root'}`, false, true);
            return Array.isArray(data) ? data : [data]; // Ensure array for consistency
        } catch (error) {
            console.error('GitHub API Fetch error:', error);
            updateStatus(`Error: ${error.message}`, true);
            fileListingContainer.innerHTML = `<p class="fe-placeholder-text fe-error-message">Error: ${error.message}</p>`;
            return null;
        } finally {
            showLoaderFE(false);
        }
    }

    /**
     * Fetches GitHub contents, utilizing a session cache to avoid redundant API calls.
     * @param {string} path - The repository path to fetch contents for.
     * @returns {Promise<Array|null>} Data from cache or fetched from API.
     */
    async function fetchGitHubContentsWithCacheFE(path) {
        const cacheKey = `fe_github_contents_${currentOwner}_${currentRepo}_${path || 'ROOT'}`;
        const cachedItem = sessionStorage.getItem(cacheKey);

        if (cachedItem) {
            const { timestamp, data } = JSON.parse(cachedItem);
            if (Date.now() - timestamp < CACHE_DURATION_MS) {
                updateStatus(`Using cached data for: ${path || 'root'}`);
                return data;
            } else {
                sessionStorage.removeItem(cacheKey);
            }
        }
        const data = await fetchGitHubContentsFE(path);
        if (data) {
            sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
        }
        return data;
    }

    //==============================================================================
    // CONTENT RENDERING (Items, Breadcrumbs)
    //==============================================================================
    /**
     * Fetches and displays the contents of a given path in the repository.
     * @param {string} path - The path to display.
     */
    async function fetchAndDisplayContentsFE(path) {
        currentPath = path;
        fileListingContainer.innerHTML = '<p class="fe-placeholder-text">Loading items...</p>';
        updateBreadcrumbsFE(path);
        upDirectoryBtn.style.display = path ? 'flex' : 'none';
        closeFilePreview();

        const contents = await fetchGitHubContentsWithCacheFE(path);

        if (!contents) {
            fileListingContainer.innerHTML = '<p class="fe-placeholder-text fe-error-message">Failed to load content.</p>';
            return;
        }

        renderItemsFE(contents.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === 'dir' ? -1 : 1;
        }));
    }

    /**
     * Renders the list of file/folder items in the UI.
     * @param {Array} items - Array of item objects from GitHub API.
     */
    function renderItemsFE(items) {
        fileListingContainer.innerHTML = '';
        if (items.length === 0) {
            fileListingContainer.innerHTML = '<p class="fe-placeholder-text">This folder is empty.</p>';
            return;
        }
        const ul = document.createElement('ul');
        ul.style.listStyleType = 'none';
        ul.style.padding = '0';
        ul.style.margin = '0';

        items.forEach(item => {
            const li = createListItemElementFE(item);
            ul.appendChild(li);
        });
        fileListingContainer.appendChild(ul);
    }

    /**
     * Creates a list item element for a file or directory.
     * @param {object} item - The GitHub content item.
     * @returns {HTMLLIElement} The created list item element.
     */
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

        if (item.type === 'dir') {
            faIcon.classList.add('fa-folder');
            icon.classList.add('folder-icon');
        } else {
            faIcon.classList.add(getFileIconFA(item.name)); // Using Font Awesome icons
        }
        icon.appendChild(faIcon);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'fe-list-item-name';
        nameSpan.textContent = item.name;

        li.appendChild(icon);
        li.appendChild(nameSpan);

        // Check for Live2D model file
        if (item.type === 'file' && item.name.toLowerCase().includes('model.json') || item.name.toLowerCase().includes('model3.json')) {
            const importBtn = document.createElement('button');
            importBtn.textContent = 'Import Model';
            importBtn.className = 'fe-import-model-btn';
            importBtn.title = `Import ${item.name} to Live2D Viewer`;
            importBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent li click event
                handleImportModel(item);
            });
            li.appendChild(importBtn);
        }


        li.addEventListener('click', () => {
            if (selectedFileItemElement && selectedFileItemElement !== li) {
                selectedFileItemElement.classList.remove('selected');
            }
            if (item.type === 'dir') {
                fetchAndDisplayContentsFE(item.path);
                selectedFileItemElement = null;
            } else {
                fetchAndDisplayFilePreviewFE(item);
                li.classList.add('selected');
                selectedFileItemElement = li;
            }
        });
        return li;
    }

    /**
     * Updates the breadcrumbs navigation based on the current path.
     * @param {string} path - The current repository path.
     */
    function updateBreadcrumbsFE(path) {
        mainBreadcrumbs.innerHTML = '';
        const segments = path.split('/').filter(s => s);

        const rootLink = document.createElement('a');
        rootLink.href = '#';
        rootLink.textContent = 'Root';
        rootLink.addEventListener('click', (e) => {
            e.preventDefault();
            fetchAndDisplayContentsFE('');
        });
        mainBreadcrumbs.appendChild(rootLink);

        segments.forEach((segment, index) => {
            mainBreadcrumbs.appendChild(document.createTextNode(' / '));
            if (index < segments.length - 1) {
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = segment;
                const pathForLink = segments.slice(0, index + 1).join('/');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    fetchAndDisplayContentsFE(pathForLink);
                });
                mainBreadcrumbs.appendChild(link);
            } else {
                const span = document.createElement('span');
                span.textContent = segment;
                mainBreadcrumbs.appendChild(span);
            }
        });
    }

    //==============================================================================
    // NAVIGATION
    //==============================================================================
    /**
     * Navigates to the parent directory of the current path.
     */
    function navigateUp() {
        if (!currentPath) return;
        const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        fetchAndDisplayContentsFE(parentPath);
    }

    //==============================================================================
    // FILE PREVIEW LOGIC
    //==============================================================================
    /**
     * Fetches and displays a preview of the selected file.
     * Uses jsDelivr CDN primarily, with a fallback to raw GitHub URL.
     * @param {object} fileItem - The file item object from GitHub API.
     */
    async function fetchAndDisplayFilePreviewFE(fileItem) {
        previewFileName.textContent = fileItem.name;
        previewContent.innerHTML = '<p class="fe-placeholder-text">Loading preview...</p>';
        previewActions.innerHTML = '';
        filePreviewContainer.style.display = 'flex';
        showLoaderFE(true);

        const jsDelivrUrl = `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}/${fileItem.path}`;
        const rawGitHubUrl = fileItem.download_url;

        try {
            const extension = fileItem.name.split('.').pop().toLowerCase();
            const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'];
            let fileSourceUrl = jsDelivrUrl;

            if (imageExtensions.includes(extension)) {
                const img = document.createElement('img');
                img.src = fileSourceUrl;
                img.alt = fileItem.name;
                img.onerror = () => {
                    console.warn(`Image load failed from jsDelivr: ${fileSourceUrl}. Trying raw GitHub URL.`);
                    img.src = rawGitHubUrl;
                    img.onerror = () => {
                        previewContent.innerHTML = '<p class="fe-placeholder-text fe-error-message">Could not load image from both sources.</p>';
                    };
                };
                previewContent.innerHTML = '';
                previewContent.appendChild(img);
            } else {
                let response = await fetch(fileSourceUrl);
                if (!response.ok) {
                    console.warn(`Fetch failed from jsDelivr (${response.status}): ${fileSourceUrl}. Trying raw GitHub URL.`);
                    fileSourceUrl = rawGitHubUrl; // Fallback to raw GitHub URL
                    response = await fetch(rawGitHubUrl);
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status} error fetching file from both jsDelivr and raw GitHub.`);
                    }
                }
                const text = await response.text();
                renderTextPreviewFE(text, extension);
            }

            // Add "Open" button
            const openBtn = document.createElement('a');
            openBtn.href = fileSourceUrl; // Use the URL that successfully loaded the content
            openBtn.textContent = `Open ${fileItem.name}`;
            openBtn.className = 'fe-open-link';
            openBtn.target = "_blank";
            previewActions.appendChild(openBtn);

            // Add "Import Model" button to preview if applicable
            if (fileItem.type === 'file' && fileItem.name.toLowerCase().includes('model') && fileItem.name.toLowerCase().endsWith('.json')) {
                const importBtnPreview = document.createElement('button');
                importBtnPreview.textContent = 'Import Model';
                importBtnPreview.className = 'fe-import-model-btn-preview';
                importBtnPreview.title = `Import ${fileItem.name} to Live2D Viewer`;
                importBtnPreview.addEventListener('click', (e) => {
                    handleImportModel(fileItem, fileSourceUrl); // Pass the successful source URL
                });
                previewActions.appendChild(importBtnPreview);
            }

        } catch (error) {
            console.error('File preview error:', error);
            previewContent.innerHTML = `<p class="fe-placeholder-text fe-error-message">Error loading preview: ${error.message}</p>`;
            const githubLink = document.createElement('a');
            githubLink.href = fileItem.html_url; // Link to view on GitHub main site
            githubLink.textContent = `View on GitHub`;
            githubLink.className = 'fe-open-link';
            githubLink.target = "_blank";
            previewActions.appendChild(githubLink);
        } finally {
            showLoaderFE(false);
            filePreviewContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    /**
     * Renders text content in the preview area, pretty-printing JSON if applicable.
     * @param {string} text - The text content of the file.
     * @param {string} extension - The file extension.
     */
    function renderTextPreviewFE(text, extension) {
        const pre = document.createElement('pre');
        if (extension === 'json') {
            try {
                pre.textContent = JSON.stringify(JSON.parse(text), null, 2);
            } catch { pre.textContent = text; } // Display raw if JSON parsing fails
        } else {
            pre.textContent = text;
        }
        previewContent.innerHTML = '';
        previewContent.appendChild(pre);
    }

    /**
     * Closes the file preview panel.
     */
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
    /**
     * Gets a Font Awesome icon class name based on file extension.
     * @param {string} filename - The name of the file.
     * @returns {string} Font Awesome icon class.
     */
    function getFileIconFA(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) return 'fa-image';
        if (ext === 'json') return 'fa-code';
        if (['js', 'jsx', 'ts', 'tsx', 'py', 'java', 'c', 'cpp', 'cs', 'html', 'css', 'rb', 'php', 'go', 'sh', 'bat'].includes(ext)) return 'fa-code';
        if (['zip', 'rar', 'tar', 'gz', '7z'].includes(ext)) return 'fa-file-zipper';
        if (['md', 'markdown', 'txt', 'log'].includes(ext)) return 'fa-file-lines';
        if (['pdf'].includes(ext)) return 'fa-file-pdf';
        if (['doc', 'docx', 'odt'].includes(ext)) return 'fa-file-word';
        if (['xls', 'xlsx', 'csv'].includes(ext)) return 'fa-file-excel';
        if (['ppt', 'pptx'].includes(ext)) return 'fa-file-powerpoint';
        return 'fa-file'; // Generic file icon
    }

    /**
     * Shows or hides the loader overlay.
     * @param {boolean} show - True to show, false to hide.
     */
    function showLoaderFE(show) {
        loader.style.display = show ? 'flex' : 'none';
    }

    /**
     * Updates the status message display.
     * @param {string} message - The message to display.
     * @param {boolean} [isError=false] - True if the message is an error.
     * @param {boolean} [isSuccess=false] - True if the message indicates success.
     */
    function updateStatus(message, isError = false, isSuccess = false) {
        statusMessage.textContent = message;
        statusMessage.className = ''; // Reset classes
        if (isError) statusMessage.classList.add('fe-status-error');
        else if (isSuccess) statusMessage.classList.add('fe-status-success');
    }

    //==============================================================================
    // LIVE2D VIEWER INTEGRATION
    //==============================================================================
    /**
     * Handles the import of a Live2D model file.
     * @param {object} fileItem - The GitHub file item object for the model.
     * @param {string|null} [sourceUrlOverride=null]
     */
    function handleImportModel(fileItem, sourceUrlOverride = null) {
        const modelUrl = sourceUrlOverride || fileItem.download_url || `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}/${fileItem.path}`;
        console.log(`Attempting to import Live2D Model: ${modelUrl}`);

        if (window.loadLive2DModel && typeof window.loadLive2DModel === 'function') {
            window.loadLive2DModel(modelUrl);
            updateStatus(`Sent ${fileItem.name} to Live2D viewer.`, false, true);
        } else {
            console.error('Live2D import function (window.loadLive2DModel) not found.');
            updateStatus('Error: Live2D import function not available.', true);
            alert('Error: Could not communicate with the Live2D viewer to import the model.');
        }
    }

    //==============================================================================
    // INITIAL STATE / ENTRY POINT
    //==============================================================================
    if (ownerInput.value.trim() && repoInput.value.trim()) {
        updateStatus('Defaults loaded. Click "Load Repository" or enter new values.');
    } else {
        updateStatus('Enter GitHub Owner and Repository name to begin.');
    }
});