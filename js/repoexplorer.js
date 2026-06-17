import { log } from './logger.js';
import { DOM } from './config.js';

const GITHUB_API  = 'https://api.github.com/repos';
const GITHUB_RAW  = 'https://raw.githubusercontent.com';
const MODEL_REGEX = /model3?[-\w]*\.json$/i;
const IMAGE_EXTS  = new Set(['png', 'jpg', 'jpeg', 'gif', 'apng', 'webp', 'svg']);

// Maps file extensions to Font Awesome icon class names.
const FILE_ICONS = Object.freeze({
  json: 'fa-code',
  png:  'fa-image',
  jpg:  'fa-image',
  jpeg: 'fa-image',
  gif:  'fa-image',
  md:   'fa-file-lines',
  txt:  'fa-file-alt',
  zip:  'fa-file-archive',
});

// ===========================================================================
// State
// ===========================================================================

const state = {
  owner:                   '',
  repo:                    '',
  path:                    '',
  selectedFileItemElement: null, // The <li> element currently highlighted in the file listing
};

// ===========================================================================
// UI helpers
// ===========================================================================

const showLoader = (show) => {
  DOM.loader.style.display = show ? 'flex' : 'none';
};

const setPlaceholder = (container, text, isError = false) => {
  container.innerHTML = `<p class="${isError ? 'fe-placeholder-text fe-error-message' : 'fe-placeholder-text'}">${text}</p>`;
};

const updateStatus = (msg, isError = false, isSuccess = false) => {
  DOM.statusMessage.textContent = msg;
  DOM.statusMessage.className   = isError ? 'fe-status-error' : isSuccess ? 'fe-status-success' : '';
};

// ===========================================================================
// Explorer open / close & URL sync
// ===========================================================================

const openExplorer = () => {
  DOM.explorerModal.classList.add('active');
  DOM.openExplorerBtn.setAttribute('aria-expanded', 'true');
  DOM.body.classList.add('no-scroll');
  syncUrl();
};

const closeExplorer = () => {
  DOM.explorerModal.classList.remove('active');
  DOM.openExplorerBtn.setAttribute('aria-expanded', 'false');
  DOM.body.classList.remove('no-scroll');

  // Remove the ?fe= param without adding a history entry.
  const url = new URL(window.location.href);
  if (url.searchParams.has('fe')) {
    url.searchParams.delete('fe');
    url.searchParams.delete('preview');
    history.replaceState({ path: url.pathname }, '', url.pathname);
  }
};

// Keeps the browser URL in sync with the current explorer state.
const syncUrl = () => {
  if (!DOM.explorerModal.classList.contains('active') || !state.owner || !state.repo) return;

  const segments = [state.owner, state.repo, ...state.path.split('/')].filter(Boolean);
  const url      = new URL(window.location.href);
  url.searchParams.set('fe', segments.join('/'));

  const previewName = DOM.previewFileName.textContent;
  if (DOM.filePreviewContainer.classList.contains('active') && previewName) {
    url.searchParams.set('preview', previewName);
  } else {
    url.searchParams.delete('preview');
  }

  const next = url.pathname + decodeURIComponent(url.search);
  const curr = window.location.pathname + window.location.search;
  if (next !== curr) history.pushState({ path: next }, '', next);
};

// ===========================================================================
// Caches fetched file content per repo+path.
// ===========================================================================

const previewCacheKey = (path) => `fe_preview_${state.owner}_${state.repo}_${path}`;

const getPreviewCache = (path) => {
  const raw = sessionStorage.getItem(previewCacheKey(path));
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    sessionStorage.removeItem(previewCacheKey(path));
    return null;
  }
};

const setPreviewCache = (path, type, content) => {
  try {
    sessionStorage.setItem(previewCacheKey(path), JSON.stringify({ type, content, ts: Date.now() }));
  } catch {
    log('WARN', '[REPO EXPLORER] sessionStorage full — preview not cached.');
  }
};

// ===========================================================================
// File preview
// ===========================================================================

const closeFilePreview = () => {
  if (!DOM.filePreviewContainer.classList.contains('active')) return;

  DOM.filePreviewContainer.classList.remove('active');
  DOM.filePreviewContainer.style.display = 'none';
  DOM.fileListingContainer.classList.remove('preview-open');
  DOM.previewContent.innerHTML  = '';
  DOM.previewActions.innerHTML  = '';
  DOM.previewFileName.textContent = '';

  state.selectedFileItemElement?.classList.remove('selected');
  state.selectedFileItemElement = null;
  syncUrl();
};

const blobToDataURL = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

// Renders the action row below a preview (open-in-new-tab link + optional import button).
const renderPreviewActions = (fileItem, url, isFallback = false) => {
  DOM.previewActions.innerHTML = '';

  const openLink       = document.createElement('a');
  openLink.href        = url;
  openLink.textContent = isFallback ? 'View on GitHub' : `Open ${fileItem.name}`;
  openLink.className   = 'fe-open-link';
  openLink.target      = '_blank';
  openLink.rel         = 'noopener noreferrer';
  DOM.previewActions.appendChild(openLink);

  if (isImportableModelFile(fileItem.name) && !isFallback) {
    const importBtn       = document.createElement('button');
    importBtn.className   = 'fe-import-model-btn-preview';
    importBtn.textContent = 'Import Model';
    importBtn.addEventListener('click', () => handleImportModel(fileItem, url));
    DOM.previewActions.appendChild(importBtn);
  }
};

const displayFilePreview = async (fileItem) => {
  DOM.previewFileName.textContent = fileItem.name;
  setPlaceholder(DOM.previewContent, 'Loading preview...');
  DOM.previewActions.innerHTML = '';
  DOM.filePreviewContainer.style.display = 'flex';
  DOM.filePreviewContainer.classList.add('active');
  DOM.fileListingContainer.classList.add('preview-open');
  syncUrl();

  const cdnUrl = `${GITHUB_RAW}/${state.owner}/${state.repo}/master/${fileItem.path}`;
  const ext    = fileItem.name.split('.').pop().toLowerCase();
  const cached = getPreviewCache(fileItem.path);

  // Attempt to render from cache before hitting the network.
  if (cached) {
    try {
      DOM.previewContent.innerHTML = '';
      if (cached.type === 'image') {
        const img = document.createElement('img');
        img.alt   = `Preview of ${fileItem.name}`;
        img.src   = cached.content;
        await img.decode();
        DOM.previewContent.appendChild(img);
      } else {
        const pre = document.createElement('pre');
        pre.textContent = cached.content;
        DOM.previewContent.appendChild(pre);
      }
      renderPreviewActions(fileItem, cdnUrl);
      return;
    } catch {
      log('WARN', '[REPO EXPLORER] Cached preview render failed; re-fetching.');
    }
  }

  showLoader(true);
  try {
    const res = await fetch(cdnUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    DOM.previewContent.innerHTML = '';

    if (IMAGE_EXTS.has(ext)) {
      const dataUrl = await blobToDataURL(await res.blob());
      const img     = document.createElement('img');
      img.alt       = `Preview of ${fileItem.name}`;
      img.src       = dataUrl;
      await img.decode();
      DOM.previewContent.appendChild(img);
      setPreviewCache(fileItem.path, 'image', dataUrl);
    } else {
      const text    = await res.text();
      // Pretty-print JSON files for readability.
      const content = ext === 'json' ? JSON.stringify(JSON.parse(text), null, 2) : text;
      const pre     = document.createElement('pre');
      pre.textContent = content;
      DOM.previewContent.appendChild(pre);
      setPreviewCache(fileItem.path, 'text', content);
    }

    renderPreviewActions(fileItem, cdnUrl);
  } catch (error) {
    log('ERROR', '[REPO EXPLORER] Preview error:', error);
    setPlaceholder(DOM.previewContent, `Error loading preview: ${error.message}`, true);
    renderPreviewActions(fileItem, fileItem.html_url, true);
  } finally {
    showLoader(false);
  }
};

// ===========================================================================
// GitHub API fetching
// ===========================================================================

const fetchContents = async (path) => {
  const url = `${GITHUB_API}/${state.owner}/${state.repo}/contents/${path}`;
  updateStatus(`Fetching: ${path || 'root'}`);
  showLoader(true);

  try {
    const res = await fetch(url, { headers: { Accept: 'application/vnd.github.v3+json' } });
    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: res.statusText }));
      throw new Error(`GitHub API (${res.status}): ${error.message}`);
    }
    const data = await res.json();
    updateStatus(`Fetched: ${path || 'root'}`, false, true);
    return Array.isArray(data) ? data : [data];
  } finally {
    showLoader(false);
  }
};

const fetchContentsWithCache = async (path) => {
  const key    = `fe_github_${state.owner}_${state.repo}_${path || 'ROOT'}`;
  const cached = sessionStorage.getItem(key);

  if (cached) {
    try {
      updateStatus(`Using cached data for: ${path || 'root'}`);
      return JSON.parse(cached).data;
    } catch {
      sessionStorage.removeItem(key);
    }
  }

  const data = await fetchContents(path);
  if (data) {
    try {
      sessionStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
    } catch {
      log('WARN', '[REPO EXPLORER] sessionStorage full — not cached.');
    }
  }
  return data;
};

// ===========================================================================
// Breadcrumbs
// ===========================================================================

const createBreadcrumbLink = (text, title, path) => {
  const a = document.createElement('a');
  a.href        = '#';
  a.textContent = text;
  a.title       = title;
  a.addEventListener('click', (e) => { e.preventDefault(); fetchAndDisplay(path); });
  return a;
};

const updateBreadcrumbs = (path) => {
  DOM.breadcrumbs.innerHTML = '';
  DOM.breadcrumbs.appendChild(
    createBreadcrumbLink('Root', `Root of ${state.owner}/${state.repo}`, '')
  );

  const segments = path.split('/').filter(Boolean);
  let built      = '';

  segments.forEach((seg, i) => {
    DOM.breadcrumbs.appendChild(document.createTextNode(' / '));
    built += (built ? '/' : '') + seg;

    if (i < segments.length - 1) {
      DOM.breadcrumbs.appendChild(createBreadcrumbLink(seg, `Go to ${seg}`, built));
    } else {
      // Current segment is shown as plain text.
      const span = document.createElement('span');
      span.textContent = seg;
      DOM.breadcrumbs.appendChild(span);
    }
  });
};

// ===========================================================================
// File listing
// ===========================================================================

const getFileIcon = (filename) => {
  const ext = filename.split('.').pop().toLowerCase();
  return FILE_ICONS[ext] ?? 'fa-file';
};

// Returns true for files the viewer can load directly (model JSON or ZIP).
const isImportableModelFile = (filename) =>
  MODEL_REGEX.test(filename) || filename.toLowerCase().endsWith('.zip');

const createListItem = (item) => {
  const li = document.createElement('li');
  li.className    = 'fe-list-item';
  li.dataset.path = item.path;
  li.title        = item.name;
  li.setAttribute('role', 'button');
  li.tabIndex     = 0;

  const iconClass = item.type === 'dir' ? 'fa-folder' : getFileIcon(item.name);
  li.innerHTML    = `
    <span class="fe-item-icon ${item.type === 'dir' ? 'folder-icon' : ''}">
      <i class="fas ${iconClass}" aria-hidden="true"></i>
    </span>
    <span class="fe-list-item-name">${item.name}</span>
  `;

  // Add an inline import button for model files so users can load without opening the preview.
  if (item.type === 'file' && isImportableModelFile(item.name)) {
    const btn       = document.createElement('button');
    btn.className   = 'fe-import-model-btn';
    btn.title       = `Import ${item.name}`;
    btn.innerHTML   = '<i class="fas fa-file-import" aria-hidden="true"></i> Import Model';
    btn.addEventListener('click', (e) => { e.stopPropagation(); handleImportModel(item); });
    li.appendChild(btn);
  }

  const activate = () => handleListItemClick(item);
  li.addEventListener('click', activate);
  li.addEventListener('keypress', (e) => (e.key === 'Enter' || e.key === ' ') && activate());

  return li;
};

const renderItems = (items) => {
  DOM.fileListingContainer.innerHTML = '';

  if (items.length === 0) {
    setPlaceholder(DOM.fileListingContainer, 'This folder is empty.');
    return;
  }

  // Sort: directories first, then files; both groups sorted alphabetically.
  items.sort((a, b) => {
    if (a.type !== b.type) return a.type === 'dir' ? -1 : 1;
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });

  const frag = document.createDocumentFragment();
  items.forEach((item) => frag.appendChild(createListItem(item)));
  DOM.fileListingContainer.appendChild(frag);
};

const fetchAndDisplay = async (path) => {
  state.path = path;
  syncUrl();
  DOM.fileListingContainer.scrollTop = 0;
  setPlaceholder(DOM.fileListingContainer, 'Loading items...');
  updateBreadcrumbs(path);

  try {
    renderItems(await fetchContentsWithCache(path) ?? []);
  } catch (error) {
    log('ERROR', '[REPO EXPLORER] Fetch error:', error);
    setPlaceholder(DOM.fileListingContainer, `Error: ${error.message}`, true);
    updateStatus(`Error: ${error.message}`, true);
  }
};

// ===========================================================================
// Click / import handlers
// ===========================================================================

const handleListItemClick = (item) => {
  state.selectedFileItemElement?.classList.remove('selected');

  if (item.type === 'dir') {
    closeFilePreview();
    fetchAndDisplay(item.path);
    state.selectedFileItemElement = null;
  } else {
    const el = DOM.fileListingContainer.querySelector(`[data-path="${item.path}"]`);
    el?.classList.add('selected');
    state.selectedFileItemElement = el ?? null;
    displayFilePreview(item);
  }
};

const handleImportModel = (fileItem, urlOverride = null) => {
  const url = urlOverride ?? `${GITHUB_RAW}/${state.owner}/${state.repo}/master/${fileItem.path}`;
  log('MODEL', `[REPO EXPLORER] Importing: ${url}`);

  if (typeof window.loadLive2DModel === 'function') {
    window.loadLive2DModel(url);
    updateStatus(`Sent ${fileItem.name} to viewer.`, false, true);
  } else {
    log('ERROR', '[REPO EXPLORER] window.loadLive2DModel not found.');
    updateStatus('Error: Live2D import function unavailable.', true);
  }
};

// ===========================================================================
// Repo loading & navigation
// ===========================================================================

const handleLoadRepository = () => {
  state.owner = DOM.ownerInput.value.trim();
  state.repo  = DOM.repoInput.value.trim();

  if (!state.owner || !state.repo) {
    updateStatus('Error: Owner and Repository name are required.', true);
    return;
  }

  setPlaceholder(DOM.fileListingContainer, 'Loading content...');
  DOM.breadcrumbs.innerHTML = '';
  closeFilePreview();
  fetchAndDisplay('');
};

// Restores explorer state from a ?fe= query parameter (deep link / back-nav).
const handleFeUrl = async () => {
  const params  = new URLSearchParams(window.location.search);
  const fePath  = params.get('fe');
  if (!fePath) return;

  const [owner, repo, ...segments] = fePath.split('/');
  if (!owner || !repo) return;

  openExplorer();
  DOM.ownerInput.value = owner;
  DOM.repoInput.value  = repo;

  // Skip fetching if this repo is already loaded.
  if (state.owner === owner && state.repo === repo) return;
  state.owner = owner;
  state.repo  = repo;

  const path = segments.join('/');
  await fetchAndDisplay(path);

  // If a specific file was previewed, re-open its preview.
  const previewFile = params.get('preview');
  if (previewFile) {
    await new Promise((r) => setTimeout(r, 50));
    const fullPath = (path ? `${path}/` : '') + previewFile;
    const el       = DOM.fileListingContainer.querySelector(`[data-path="${fullPath}"]`);
    if (el) handleListItemClick({ path: fullPath, name: previewFile, type: 'file' });
  }
};

// ===========================================================================
// Entry point
// ===========================================================================

const initialize = () => {
  if (Object.values(DOM).some((el) => !el)) {
    log('ERROR', 'File Explorer: Missing DOM elements. Feature disabled.');
    return;
  }

  DOM.openExplorerBtn.addEventListener('click', openExplorer);
  DOM.closeExplorerBtn.addEventListener('click', closeExplorer);
  DOM.loadRepoBtn.addEventListener('click', handleLoadRepository);
  DOM.closePreviewBtn.addEventListener('click', closeFilePreview);

  // Allow submitting the repo form with Enter from either input.
  const onEnter = (e) => e.key === 'Enter' && handleLoadRepository();
  DOM.ownerInput.addEventListener('keypress', onEnter);
  DOM.repoInput.addEventListener('keypress', onEnter);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.explorerModal.classList.contains('active')) closeExplorer();
  });
  window.addEventListener('popstate', handleFeUrl);

  handleFeUrl();
  updateStatus('Enter GitHub Owner and Repository to begin.');
};

initialize();