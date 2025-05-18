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
    const DEFAULT_BRANCHE = '@master';
    const MODEL_FILE_REGEX = /(.*)(model3?|model)\.json$/i; // Precise regex for model files
        // ✅ Matches (allowed)
        // Ends exactly in "model.json"
        "model.json";                // ✅ no prefix, ends with model.json
        "model3.json";               // ✅ no prefix, ends with model3.json
        "bronya.model.json";         // ✅ has prefix, ends with model.json
        "kiana-model3.json";         // ✅ has prefix, ends with model3.json
        "abc.model3.json";           // ✅ valid prefix, ends with model3.json
        "json.model.json";           // ✅ valid prefix, ends with model.json
        "dir/abc.model3.json";       // ✅ full path, filename ends with model3.json

        // ❌ Non-matches (rejected)
        // Invalid due to extra chars between 'model' and '.json' or bad ending
        "modelx.json";               // ❌ "modelx" is not allowed — must be exactly "model"
        "model3a.json";              // ❌ extra 'a' after "model3" — only "model" or "model3" allowed
        "model.json.bak";            // ❌ ends with ".bak", not ".json"
        "modeljson";                 // ❌ missing dot before "json"
        "some.model2.json";          // ❌ "model2" is not allowed — only "model" or "model3"
        "model.3.json";              // ❌ invalid pattern — "model.3" is not "model3"
        "file.model3.json.backup";   // ❌ ends with ".backup", not ".json"

    //==============================================================================
    // MODAL VISIBILITY & CONTROL
    //==============================================================================
    openExplorerBtn.addEventListener('click', () => {
        explorerModal.classList.add('active');
        openExplorerBtn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll'); // Prevent main page scroll
        if (ownerInput.value.trim() && repoInput.value.trim() && fileListingContainer.querySelector('.fe-placeholder-text')) {
        }
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
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json' // Recommended header
                }
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                throw new Error(`GitHub API Error (${response.status}): ${errorData.message}`);
            }
            const data = await response.json();
            updateStatus(`API Fetched: ${path || 'root'}`, false, true);
            return Array.isArray(data) ? data : [data];
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
            try {
                const { timestamp, data } = JSON.parse(cachedItem);
                if (Date.now() - timestamp < CACHE_DURATION_MS) {
                    updateStatus(`Using cached data for: ${path || 'root'}`);
                    return data;
                } else {
                    sessionStorage.removeItem(cacheKey); // Cache expired
                }
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
            }
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
            // Error message is already set by fetchGitHubContentsFE in this case
            // fileListingContainer.innerHTML = '<p class="fe-placeholder-text fe-error-message">Failed to load content.</p>';
            return;
        }

        renderItemsFE(contents.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
            return a.type === 'dir' ? -1 : 1; // Directories first
        }));
    }

    /**
     * Renders the list of file/folder items in the UI.
     * @param {Array} items - Array of item objects from GitHub API.
     */
    function renderItemsFE(items) {
        fileListingContainer.innerHTML = ''; // Clear previous content
        if (items.length === 0) {
            fileListingContainer.innerHTML = '<p class="fe-placeholder-text">This folder is empty.</p>';
            return;
        }
        const ul = document.createElement('ul');
        ul.style.listStyleType = 'none'; // CSS should handle this, but defensive
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
        faIcon.setAttribute('aria-hidden', 'true'); // Icon is decorative

        if (item.type === 'dir') {
            faIcon.classList.add('fa-folder');
            icon.classList.add('folder-icon');
        } else {
            faIcon.classList.add(getFileIconFA(item.name));
        }
        icon.appendChild(faIcon);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'fe-list-item-name';
        nameSpan.textContent = item.name;

        li.appendChild(icon);
        li.appendChild(nameSpan);

        // Check for Live2D model file using the refined regex
        if (item.type === 'file' && MODEL_FILE_REGEX.test(item.name)) {
            const importBtn = document.createElement('button');
            importBtn.className = 'fe-import-model-btn';
            importBtn.title = `Import ${item.name} to Live2D Viewer`;

            const importIcon = document.createElement('i');
            importIcon.className = 'fas fa-file-import';
            importIcon.setAttribute('aria-hidden', 'true');
            importIcon.style.marginRight = '0.4em'; // Add some space between icon and text

            importBtn.appendChild(importIcon); // Icon first
            importBtn.appendChild(document.createTextNode('Import Model')); // Then text

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
                selectedFileItemElement = null; // Deselect if navigating to a new directory
            } else { // It's a file
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
        const segments = path.split('/').filter(s => s); // Filter out empty segments

        const rootLink = document.createElement('a');
        rootLink.href = '#'; // Prevent page jump
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
                const pathForLink = currentBuiltPath; // Closure will capture this
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    fetchAndDisplayContentsFE(pathForLink);
                });
                mainBreadcrumbs.appendChild(link);
            } else { // Last segment
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

        const jsDelivrUrl = `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}${DEFAULT_BRANCHE}/${fileItem.path}`;
        const rawGitHubUrl = fileItem.download_url; // download_url is usually the raw content URL (GitHub API preference)

        try {
            const extension = fileItem.name.split('.').pop().toLowerCase();
            const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'];
            let fileSourceUrl = jsDelivrUrl; // Start with jsDelivr

            if (imageExtensions.includes(extension)) {
                const img = document.createElement('img');
                img.alt = `Preview of ${fileItem.name}`;
                img.src = fileSourceUrl;
                img.onerror = () => {
                    console.warn(`Image load failed from jsDelivr: ${fileSourceUrl}. Trying raw GitHub URL.`);
                    img.src = rawGitHubUrl; // Fallback to raw GitHub URL
                    fileSourceUrl = rawGitHubUrl; // Update source URL if fallback is used
                    img.onerror = () => { // Final error
                        previewContent.innerHTML = '<p class="fe-placeholder-text fe-error-message">Could not load image from both sources.</p>';
                    };
                };
                previewContent.innerHTML = ''; // Clear loading text
                previewContent.appendChild(img);
            } else { // For text-based files
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

            // Add "Open" button (uses the URL that successfully loaded the content)
            const openBtn = document.createElement('a');
            openBtn.href = fileSourceUrl;
            openBtn.textContent = `Open ${fileItem.name}`;
            openBtn.className = 'fe-open-link';
            openBtn.target = "_blank";
            openBtn.rel = "noopener noreferrer"; // Security for external links
            previewActions.appendChild(openBtn);

            // Add "Import Model" button to preview if applicable
            if (fileItem.type === 'file' && MODEL_FILE_REGEX.test(fileItem.name)) {
                const importBtnPreview = document.createElement('button');
                importBtnPreview.className = 'fe-import-model-btn-preview';
                importBtnPreview.title = `Import ${fileItem.name} to Live2D Viewer`;

                const importIconPreview = document.createElement('i');
                importIconPreview.className = 'fas fa-file-import';
                importIconPreview.setAttribute('aria-hidden', 'true');
                importIconPreview.style.marginRight = '0.4em';

                importBtnPreview.appendChild(importIconPreview);
                importBtnPreview.appendChild(document.createTextNode('Import Model'));

                importBtnPreview.addEventListener('click', () => {
                    handleImportModel(fileItem, fileSourceUrl); // Pass the successful source URL
                });
                previewActions.appendChild(importBtnPreview);
            }

        } catch (error) {
            console.error('File preview error:', error);
            previewContent.innerHTML = `<p class="fe-placeholder-text fe-error-message">Error loading preview: ${error.message}</p>`;
            // Add a link to view on GitHub as a last resort for any error
            const githubLink = document.createElement('a');
            githubLink.href = fileItem.html_url; // Link to view on GitHub main site
            githubLink.textContent = `View on GitHub`;
            githubLink.className = 'fe-open-link';
            githubLink.target = "_blank";
            githubLink.rel = "noopener noreferrer";
            previewActions.appendChild(githubLink);
        } finally {
            showLoaderFE(false);
            // Scroll the preview into view smoothly
            if (filePreviewContainer.style.display === 'flex') {
                filePreviewContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
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
                pre.textContent = JSON.stringify(JSON.parse(text), null, 2); // Pretty print JSON
            } catch {
                pre.textContent = text; // Display raw if JSON parsing fails
            }
        } else {
            pre.textContent = text;
        }
        previewContent.innerHTML = ''; // Clear loading/error message
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
        const iconMap = {
            // Images
            'png': 'fa-image', 'jpg': 'fa-image', 'jpeg': 'fa-image', 'gif': 'fa-image', 'webp': 'fa-image', 'svg': 'fa-image', 'bmp': 'fa-image', 'ico': 'fa-image',
            // Code/Text
            'json': 'fa-code', 'js': 'fa-code', 'jsx': 'fa-code', 'ts': 'fa-code', 'tsx': 'fa-code',
            'html': 'fa-code', 'css': 'fa-code', 'scss': 'fa-code', 'less': 'fa-code',
            'py': 'fa-code', 'java': 'fa-code', 'c': 'fa-code', 'cpp': 'fa-code', 'cs': 'fa-code',
            'rb': 'fa-code', 'php': 'fa-code', 'go': 'fa-code', 'sh': 'fa-terminal', 'bat': 'fa-terminal',
            'md': 'fa-file-lines', 'markdown': 'fa-file-lines', 'txt': 'fa-file-lines', 'log': 'fa-file-lines',
            // Archives
            'zip': 'fa-file-zipper', 'rar': 'fa-file-zipper', 'tar': 'fa-file-zipper', 'gz': 'fa-file-zipper', '7z': 'fa-file-zipper',
            // Documents
            'pdf': 'fa-file-pdf',
            'doc': 'fa-file-word', 'docx': 'fa-file-word', 'odt': 'fa-file-word',
            'xls': 'fa-file-excel', 'xlsx': 'fa-file-excel', 'csv': 'fa-file-csv',
            'ppt': 'fa-file-powerpoint', 'pptx': 'fa-file-powerpoint',
            // Audio/Video
            'mp3': 'fa-file-audio', 'wav': 'fa-file-audio', 'ogg': 'fa-file-audio',
            'mp4': 'fa-file-video', 'mov': 'fa-file-video', 'avi': 'fa-file-video', 'webm': 'fa-file-video',
            // Default
            'default': 'fa-file'
        };
        return iconMap[ext] || iconMap['default'];
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
     * @param {string|null} [sourceUrlOverride=null] - Optional override for the model URL.
     */
    function handleImportModel(fileItem, sourceUrlOverride = null) {
        // Prefer download_url if available and no override, as it's the direct raw content link.
        // Fallback to jsDelivr if download_url is not present (should be rare for files).
        const modelUrl = sourceUrlOverride || fileItem.download_url || `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}${DEFAULT_BRANCHE}/${fileItem.path}`;
        console.log(`Attempting to import Live2D Model: ${modelUrl}`);

        if (window.loadLive2DModel && typeof window.loadLive2DModel === 'function') {
            window.loadLive2DModel(modelUrl); // This function is exposed by script.js
            updateStatus(`Sent ${fileItem.name} to Live2D viewer.`, false, true);
            // closeExplorer();
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