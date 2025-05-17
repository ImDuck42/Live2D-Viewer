document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const ownerInput = document.getElementById('ownerInput');
    const repoInput = document.getElementById('repoInput');
    const loadRepoBtn = document.getElementById('loadRepoBtn');
    const mainBreadcrumbs = document.getElementById('mainBreadcrumbs');
    const upDirectoryBtn = document.getElementById('upDirectoryBtn');
    const fileListingContainer = document.getElementById('fileListingContainer');
    const filePreviewContainer = document.getElementById('filePreviewContainer');
    const previewFileName = document.getElementById('previewFileName');
    const closePreviewBtn = document.getElementById('closePreviewBtn');
    const previewContent = document.getElementById('previewContent');
    const previewActions = document.getElementById('previewActions');
    const statusMessage = document.getElementById('statusMessage');
    const loader = document.getElementById('loader');

    // App State & Configuration
    let currentOwner = '';
    let currentRepo = '';
    let currentPath = '';
    let selectedFileItem = null;
    const DEFAULT_BRANCH = 'main'; // Or 'master', or fetch dynamically
    const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes for API cache

    const GITHUB_API_BASE = 'https://api.github.com/repos';
    const JSDELIVR_CDN_BASE = 'https://cdn.jsdelivr.net/gh';

    // --- Event Listeners ---
    loadRepoBtn.addEventListener('click', initializeRepositoryLoad);
    repoInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') initializeRepositoryLoad(); });
    ownerInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') initializeRepositoryLoad(); });
    upDirectoryBtn.addEventListener('click', navigateUp);
    closePreviewBtn.addEventListener('click', closeFilePreview);

    // --- Initialization ---
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
        fetchAndDisplayContents('');
    }

    function resetUIForNewRepo() {
        fileListingContainer.innerHTML = '<p class="placeholder-text">Loading content...</p>';
        mainBreadcrumbs.innerHTML = '';
        closeFilePreview();
    }

    // --- API Fetching with Cache ---
    async function fetchGitHubContents(path) { // Original fetcher
        const url = `${GITHUB_API_BASE}/${currentOwner}/${currentRepo}/contents/${path}`;
        updateStatus(`Fetching from API: ${path || 'root'}`);
        showLoader(true);
        try {
            const response = await fetch(url);
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
            showLoader(false);
            return null;
        } finally {
            // Loader handled by the caching function or display function
        }
    }

    async function fetchGitHubContentsWithCache(path) {
        const cacheKey = `github_contents_${currentOwner}_${currentRepo}_${path || 'ROOT'}`;
        const cachedItem = sessionStorage.getItem(cacheKey);

        if (cachedItem) {
            const { timestamp, data } = JSON.parse(cachedItem);
            if (Date.now() - timestamp < CACHE_DURATION_MS) {
                updateStatus(`Using cached data for: ${path || 'root'}`);
                console.log("Using cached data for:", path);
                return data;
            } else {
                sessionStorage.removeItem(cacheKey); // Cache expired
                console.log("Cache expired for:", path);
            }
        }

        updateStatus(`Fetching (cache miss or expired): ${path || 'root'}`);
        const data = await fetchGitHubContents(path); // Actual API call
        if (data) {
            sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
        }
        return data;
    }


    // --- Main Content Display ---
    async function fetchAndDisplayContents(path) {
        currentPath = path;
        fileListingContainer.innerHTML = '<p class="placeholder-text">Loading items...</p>';
        updateBreadcrumbs(path);
        upDirectoryBtn.style.display = path ? 'flex' : 'none';
        closeFilePreview();
        showLoader(true); // Show loader before fetching (cached or not)

        const contents = await fetchGitHubContentsWithCache(path); // Use cached fetch
        showLoader(false); // Hide loader after fetching

        if (!contents) {
            fileListingContainer.innerHTML = '<p class="placeholder-text error-message">Failed to load content.</p>';
            return;
        }
        
        renderItems(contents.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === 'dir' ? -1 : 1;
        }));
    }

    function renderItems(items) {
        fileListingContainer.innerHTML = '';
        if (items.length === 0) {
            fileListingContainer.innerHTML = '<p class="placeholder-text">This folder is empty.</p>';
            return;
        }
        const ul = document.createElement('ul');
        items.forEach(item => {
            const li = createListItemElement(item);
            ul.appendChild(li);
        });
        fileListingContainer.appendChild(ul);
    }

    function createListItemElement(item) {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.dataset.path = item.path;
        li.dataset.type = item.type;
        li.title = item.name;

        const icon = document.createElement('span');
        icon.className = 'item-icon';
        if (item.type === 'dir') {
            icon.textContent = '📁';
            icon.classList.add('folder-icon');
        } else {
            icon.textContent = getFileIcon(item.name);
            icon.classList.add('file-icon');
            const specificIconClass = getIconClass(item.name);
            if (specificIconClass) icon.classList.add(specificIconClass);
        }
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'list-item-name';
        nameSpan.textContent = item.name;

        li.appendChild(icon);
        li.appendChild(nameSpan);

        li.addEventListener('click', () => {
            if (selectedFileItem && selectedFileItem !== li) {
                selectedFileItem.classList.remove('selected');
            }
            if (item.type === 'dir') {
                fetchAndDisplayContents(item.path);
                selectedFileItem = null;
            } else {
                fetchAndDisplayFilePreview(item);
                li.classList.add('selected');
                selectedFileItem = li;
            }
        });
        return li;
    }

    function updateBreadcrumbs(path) {
        mainBreadcrumbs.innerHTML = '';
        const segments = path.split('/').filter(s => s);
        
        const rootLink = document.createElement('a');
        rootLink.href = '#';
        rootLink.textContent = 'Root';
        rootLink.addEventListener('click', (e) => {
            e.preventDefault();
            fetchAndDisplayContents('');
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
                    fetchAndDisplayContents(pathForLink);
                });
                mainBreadcrumbs.appendChild(link);
            } else {
                const span = document.createElement('span');
                span.textContent = segment;
                mainBreadcrumbs.appendChild(span);
            }
        });
    }
    
    function navigateUp() {
        if (!currentPath) return;
        const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        fetchAndDisplayContents(parentPath);
    }

    // --- File Preview using jsDelivr ---
    async function fetchAndDisplayFilePreview(fileItem) {
        previewFileName.textContent = fileItem.name;
        previewContent.innerHTML = '<p class="placeholder-text">Loading preview...</p>';
        previewActions.innerHTML = '';
        filePreviewContainer.style.display = 'flex';
        showLoader(true);

        const branchToUse = DEFAULT_BRANCH; // You might want to get the actual default branch
        const jsDelivrUrl = `${JSDELIVR_CDN_BASE}/${currentOwner}/${currentRepo}@${branchToUse}/${fileItem.path}`;
        // The fileItem.download_url (from raw.githubusercontent) can serve as a fallback
        const rawGitHubUrl = fileItem.download_url; 

        try {
            const extension = fileItem.name.split('.').pop().toLowerCase();
            const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'];
            let fileSourceUrl = jsDelivrUrl; // Prefer jsDelivr

            if (imageExtensions.includes(extension)) {
                const img = document.createElement('img');
                img.src = fileSourceUrl;
                img.alt = fileItem.name;
                img.onerror = () => {
                    console.warn(`Image load failed from jsDelivr: ${fileSourceUrl}. Trying raw GitHub URL.`);
                    img.src = rawGitHubUrl; // Fallback to raw GitHub URL for images
                    img.onerror = () => { // Second error handler
                         previewContent.innerHTML = '<p class="error-message">Could not load image from both sources.</p>';
                    }
                };
                previewContent.innerHTML = '';
                previewContent.appendChild(img);
            } else { // For other files (text, JSON, etc.)
                let response = await fetch(fileSourceUrl);
                if (!response.ok) {
                    console.warn(`Fetch failed from jsDelivr (${response.status}): ${fileSourceUrl}. Trying raw GitHub URL.`);
                    fileSourceUrl = rawGitHubUrl; // Update source for download link if fallback is used
                    response = await fetch(rawGitHubUrl); // Fallback to raw GitHub URL
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status} error fetching file from both jsDelivr and raw GitHub.`);
                    }
                }
                const text = await response.text();
                renderTextPreview(text, extension);
            }

            // Add download button - points to the URL that successfully loaded content or jsdelivr by default
            const downloadBtn = document.createElement('a');
            downloadBtn.href = fileSourceUrl;
            downloadBtn.textContent = `Download ${fileItem.name}`;
            downloadBtn.className = 'download-link';
            downloadBtn.target = "_blank";
            downloadBtn.setAttribute('download', fileItem.name);
            previewActions.appendChild(downloadBtn);

        } catch (error) {
            console.error('File preview error:', error);
            previewContent.innerHTML = `<p class="error-message">Error loading preview: ${error.message}</p>`;
            const githubLink = document.createElement('a'); // Link to view on GitHub main site
            githubLink.href = fileItem.html_url;
            githubLink.textContent = `View on GitHub`;
            githubLink.className = 'download-link';
            githubLink.target = "_blank";
            previewActions.appendChild(githubLink);
        } finally {
            showLoader(false);
            filePreviewContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    function renderTextPreview(text, extension) {
        const pre = document.createElement('pre');
        if (extension === 'json') {
            try {
                pre.textContent = JSON.stringify(JSON.parse(text), null, 2);
            } catch { pre.textContent = text; }
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
        if (selectedFileItem) {
            selectedFileItem.classList.remove('selected');
            selectedFileItem = null;
        }
    }

    // --- Utility Functions ---
    function getFileIcon(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) return '🖼️';
        if (ext === 'json') return '⚙️';
        if (['js', 'jsx', 'ts', 'tsx', 'py', 'java', 'c', 'cpp', 'cs', 'html', 'css', 'rb', 'php', 'go', 'sh', 'bat'].includes(ext)) return '💻';
        if (['zip', 'rar', 'tar', 'gz', '7z'].includes(ext)) return '📦';
        if (['md', 'markdown', 'txt', 'log'].includes(ext)) return '📝';
        if (['pdf'].includes(ext)) return '📚';
        if (['doc', 'docx', 'odt'].includes(ext)) return '📄';
        if (['xls', 'xlsx', 'csv'].includes(ext)) return '📊';
        if (['ppt', 'pptx'].includes(ext)) return '🖥️';
        return '📄';
    }
    function getIconClass(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) return 'image-icon';
        if (ext === 'json') return 'json-icon';
        return '';
    }

    function showLoader(show) {
        loader.style.display = show ? 'flex' : 'none';
    }

    function updateStatus(message, isError = false, isSuccess = false) {
        statusMessage.textContent = message;
        statusMessage.style.color = 'var(--text-secondary)';
        if (isError) statusMessage.style.color = 'var(--error-color)';
        else if (isSuccess) statusMessage.style.color = 'var(--success-color)';
    }

    // --- Initial State ---
    if (ownerInput.value.trim() && repoInput.value.trim()) {
        // initializeRepositoryLoad(); // Uncomment for auto-load on page start
        updateStatus('Defaults loaded. Click "Load Repository" or enter new values.');
    } else {
        updateStatus('Enter GitHub Owner and Repository name to begin.');
    }
});