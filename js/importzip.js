import { log } from './logger.js';

const ZIP_CONFIG = Object.freeze({
  MODEL_JSON_REGEX: /model3?[-\w]*\.json$/i,
  HIGHLIGHT_COLOR:  '#8c5eff',
  ZIP_ACCEPT:       '.zip',
});

// MIME types for files embedded as data URIs in the patched model JSON.
const MIME_TYPES = Object.freeze({
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.moc3': 'application/octet-stream',
  '.moc':  'application/octet-stream',
});

// Module-level references set after DOMContentLoaded.
let canvasArea = null;

const getMimeType = (filename) => {
  if (!filename) return 'application/octet-stream';
  const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase();
  return MIME_TYPES[ext] ?? 'application/octet-stream';
};

const blobToDataURL = (blob) =>
  new Promise((resolve, reject) => {
    const reader   = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Failed to read blob'));
    reader.readAsDataURL(blob);
  });

// Resolves a relative path from within the model JSON against the model's directory.
const resolvePath = (pathStr, dirPath) => {
  if (!pathStr || typeof pathStr !== 'string') return null;
  if (pathStr.startsWith('data:') || /^https?:\/\//i.test(pathStr)) return null;

  try {
    const resolved = new URL(pathStr, `http://dummy/${dirPath}`).pathname.substring(1);
    return [decodeURIComponent(resolved), pathStr];
  } catch {
    return null;
  }
};

// Recursively visits every string value in an object tree and calls callback(node, key, value).
const walkJSON = (obj, callback) => {
  const traverse = (node) => {
    if (!node || typeof node !== 'object') return;
    for (const key of Object.keys(node)) {
      const val = node[key];
      if (typeof val === 'string') {
        callback(node, key, val);
      } else if (typeof val === 'object') {
        traverse(val);
      }
    }
  };
  traverse(obj);
};

// Walks the parsed model JSON and collects every string value that looks like a relative file path.
const collectPaths = (obj, dirPath) => {
  const refs = new Set();

  walkJSON(obj, (_, __, val) => {
    const resolved = resolvePath(val, dirPath);
    if (resolved) {
      refs.add(resolved[0]);
      refs.add(resolved[1]);
    } else if (val && !val.startsWith('data:') && !/^https?:\/\//i.test(val)) {
      refs.add(val);
    }
  });

  return refs;
};

// Replaces all relative path strings in the model JSON with their data URIs.
const substituteDataURIs = (obj, dirPath, uriMap) => {
  walkJSON(obj, (node, key, val) => {
    const resolved = resolvePath(val, dirPath);
    if (resolved) {
      const uri = uriMap.get(resolved[0]) ?? uriMap.get(resolved[1]);
      if (uri) node[key] = uri;
    } else if (uriMap.has(val)) {
      node[key] = uriMap.get(val);
    }
  });
};

// Reads a ZIP archive, finds the model JSON and converts all referenced assets to data URIs.
export const processZipFile = async (file) => {
  if (!file) return;

  try {
    const zip = await JSZip.loadAsync(file);

    // Find the model JSON entry; last match wins if multiple exist.
    let modelEntry = null;
    let modelPath  = '';

    zip.forEach((relPath, entry) => {
      if (!entry.dir && ZIP_CONFIG.MODEL_JSON_REGEX.test(relPath)) {
        modelEntry = entry;
        modelPath  = relPath;
      }
    });

    if (!modelEntry) throw new Error('No .model3.json / .model.json found in ZIP');

    const jsonText = await modelEntry.async('text');
    let jsonObj;

    try {
      jsonObj = JSON.parse(jsonText);
    } catch (error) {
      throw new Error(`Invalid JSON in ${modelPath}: ${error.message}`);
    }

    const dirPath    = modelPath.includes('/') ? modelPath.slice(0, modelPath.lastIndexOf('/') + 1) : '';
    const referenced = collectPaths(jsonObj, dirPath);
    const uriMap     = new Map();

    // Convert all referenced ZIP entries to data URIs in parallel.
    const jobs = [];
    zip.forEach((relPath, entry) => {
      if (!referenced.has(relPath)) return;

      jobs.push(
        entry.async('blob').then(async (blob) => {
          const typed = new Blob([blob], { type: getMimeType(relPath) });
          uriMap.set(relPath, await blobToDataURL(typed));
        })
      );
    });

    await Promise.all(jobs);
    substituteDataURIs(jsonObj, dirPath, uriMap);

    // Encode the patched JSON as a base64 data URI for Live2DModel.from().
    const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(jsonObj))));
    return `data:application/json;base64,${base64}`;

  } catch (error) {
    log('ERROR', 'Failed to process ZIP file:', error);
    throw error;
  }
};

// ===========================================================================
// Drag-and-drop handling
// ===========================================================================

const setDropHighlight = (active) => {
  if (canvasArea) canvasArea.style.borderColor = active ? ZIP_CONFIG.HIGHLIGHT_COLOR : 'var(--border)';
};

const handleDrop = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  setDropHighlight(false);

  const file = event.dataTransfer?.files?.[0];
  if (file?.name?.toLowerCase().endsWith('.zip')) {
    try {
      const url = await processZipFile(file);
      if (url) window.loadLive2DModel?.(url);
    } catch (error) {
      alert(`Error loading ZIP file: ${error.message ?? error}\nCheck the console for details.`);
    }
  }
};

const attachDropHandlers = () => {
  if (!canvasArea) return;

  const prevent = (event) => { event.preventDefault(); event.stopPropagation(); };

  canvasArea.addEventListener('dragenter', (event) => { prevent(event); setDropHighlight(true);  });
  canvasArea.addEventListener('dragover',  (event) => { prevent(event); setDropHighlight(true);  });
  canvasArea.addEventListener('dragleave', (event) => { prevent(event); setDropHighlight(false); });
  canvasArea.addEventListener('drop', handleDrop);
};

document.addEventListener('DOMContentLoaded', () => {
  canvasArea = document.querySelector('.canvas-area');

  if (canvasArea) canvasArea.id = 'drop-zone';

  // Wire the static upload button and file input declared in index.html.
  const uploadBtn     = document.getElementById('upload-btn');
  const zipInput      = document.getElementById('zip-upload-input');
  const dropdownLabel = document.getElementById('dropdown-label');
  const dropdown      = document.getElementById('model-dropdown');

  if (uploadBtn && zipInput) {
    uploadBtn.addEventListener('click', () => zipInput.click());

    zipInput.addEventListener('change', async () => {
      const file = zipInput.files?.[0];
      if (file?.name?.toLowerCase().endsWith('.zip')) {
        try {
          const url = await processZipFile(file);
          if (url) {
            if (dropdownLabel) dropdownLabel.textContent = file.name;
            if (dropdown) dropdown.classList.remove('open');
            window.loadLive2DModel?.(url);
          }
        } catch (error) {
          alert(`Error loading ZIP file: ${error.message ?? error}\nCheck the console for details.`);
        }
      }
      zipInput.value = '';
    });
  }

  attachDropHandlers();
});