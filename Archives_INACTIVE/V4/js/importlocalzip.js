'use strict';

//==============================================================================
// ZIP MODEL LOADER
//==============================================================================
// Extracts a Live2D model JSON from a dropped ZIP file
document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const CONFIG = {
        MODEL_JSON_REGEX: /model3?[-\w]*\.json$/i,
        HIGHLIGHT_COLOR: '#8c5eff',
        ZIP_MIME_TYPE: '.zip',
    };

    // DOM element references
    const DOM = {
        canvas: document.querySelector('.canvas-area'),
        modelUrlInput: document.getElementById('model-url-input'),
        modelDropdownList: document.getElementById('model-select-dropdown-list'),
    };

    // MIME type mappings for L2D file extensions
    const MIME_TYPES = {
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.moc3': 'application/octet-stream',
        '.moc': 'application/octet-stream',
    };

    // Returns an appropriate MIME type based on a filename extension
    const getMimeType = (filename) => {
        if (!filename || typeof filename !== 'string') return 'application/octet-stream';
        const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase();
        return MIME_TYPES[ext] || 'application/octet-stream';
    };

    const setupPageElements = () => {
        DOM.canvas.id = 'drop-zone';

        const uploadOption = document.createElement('li');
        uploadOption.className = 'custom-dropdown-option';
        uploadOption.id = 'upload-button';
        uploadOption.setAttribute('role', 'button');
        uploadOption.textContent = 'Upload model (.zip)';

        uploadOption.addEventListener('click', async () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = CONFIG.ZIP_MIME_TYPE;
            fileInput.style.display = 'none';

            const handleFileChange = async () => {
                if (fileInput.files?.[0]?.name?.toLowerCase().endsWith('.zip')) {
                    const dataUrl = await processZipFile(fileInput.files[0], true);
                    loadModel(dataUrl);
                }
                document.body.removeChild(fileInput);
            };

            fileInput.addEventListener('change', handleFileChange);
            document.body.appendChild(fileInput);
            fileInput.click();
        });

        DOM.modelDropdownList.appendChild(uploadOption);
    };

    // Convert a Blob to a data: URL using FileReader
    const blobToDataURL = (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Failed to read blob'));
        reader.readAsDataURL(blob);
    });

    // Resolve a path reference relative to a directory path
    const resolvePath = (pathStr, dirPath) => {
        if (!pathStr || typeof pathStr !== 'string') return null;
        if (pathStr.startsWith('data:') || /^https?:\/\//i.test(pathStr)) return null;
        
        try {
            const fullPath = new URL(pathStr, `http://dummy/${dirPath}`).pathname.substring(1);
            return [decodeURIComponent(fullPath), pathStr]; // Both resolved and raw
        } catch {
            return null; // Invalid URL
        }
    };

    // Recursively walk through a JSON object and apply a function to each string value
    const walkJsonObject = (obj, callback) => {
        const traverse = (node) => {
            if (!node || typeof node !== 'object') return;
            for (const key in node) {
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

    // Walk the parsed model JSON and collect any referenced file paths
    const collectReferencedPaths = (obj, dirPath = '') => {
        const collected = new Set();
        walkJsonObject(obj, (node, key, val) => {
            const resolved = resolvePath(val, dirPath);
            if (resolved) {
                collected.add(resolved[0]); // Resolved path
                collected.add(resolved[1]); // Raw path
            } else if (val && !val.startsWith('data:') && !/^https?:\/\//i.test(val)) {
                collected.add(val);
            }
        });
        return collected;
    };

    // Replace referenced file paths in the model JSON with inlined data URIs
    const replacePaths = (obj, dirPath = '', dataUriMap = new Map()) => {
        walkJsonObject(obj, (node, key, val) => {
            // Try resolved path first, then raw value
            const resolved = resolvePath(val, dirPath);
            if (resolved) {
                const dataUri = dataUriMap.get(resolved[0]) || dataUriMap.get(resolved[1]);
                if (dataUri) node[key] = dataUri;
            } else if (dataUriMap.has(val)) {
                node[key] = dataUriMap.get(val);
            }
        });
    };

    // Read ZIP, find model JSON and inline referenced files
    const processZipFile = async (file, returnUrl = false) => {
        const dataUriMap = new Map();

        try {
            if (!file) throw new Error('No file provided');
            const zip = await JSZip.loadAsync(file);

            // Locate the primary model JSON entry inside the ZIP
            let modelEntry = null;
            let modelPath = '';

            zip.forEach((relPath, zipEntry) => {
                if (!zipEntry.dir && CONFIG.MODEL_JSON_REGEX.test(relPath)) {
                    modelEntry = zipEntry;
                    modelPath = relPath;
                }
            });

            if (!modelEntry) throw new Error('No .model3.json or .model.json found in ZIP');

            // Parse the model JSON and determine its directory
            const jsonText = await modelEntry.async('text');
            let jsonObj;
            try {
                jsonObj = JSON.parse(jsonText);
            } catch (parseErr) {
                throw new Error(`Invalid JSON in ${modelPath}: ${parseErr.message}`);
            }

            const dirPath = modelPath.includes('/') ? modelPath.slice(0, modelPath.lastIndexOf('/') + 1) : '';

            // Collect all referenced paths from the model JSON
            const referenced = collectReferencedPaths(jsonObj, dirPath);

            // For each referenced file present in the ZIP, create a data: URI
            const jobs = [];
            zip.forEach((relPath, zipEntry) => {
                if (!referenced.has(relPath)) return;
                
                const job = zipEntry.async('blob').then(async (blob) => {
                    const mime = getMimeType(relPath);
                    const typed = new Blob([blob], { type: mime });
                    const dataUrl = await blobToDataURL(typed);
                    dataUriMap.set(relPath, dataUrl);
                });
                jobs.push(job);
            });

            await Promise.all(jobs);

            // Replace model JSON file references with inlined data URIs
            replacePaths(jsonObj, dirPath, dataUriMap);

            // Produce a data: URL for the final model JSON
            const finalText = JSON.stringify(jsonObj);
            const base64 = btoa(unescape(finalText)); // Deprecate but needed for non-ascii characters
            const dataUrl = `data:application/json;base64,${base64}`;

            if (returnUrl) return dataUrl;

            if (DOM.modelUrlInput) {
                DOM.modelUrlInput.value = dataUrl;
                DOM.modelUrlInput.dispatchEvent(new Event('input', { bubbles: true }));
                DOM.modelUrlInput.dispatchEvent(new Event('change', { bubbles: true }));
            }
            return dataUrl;
        } catch (err) {
            console.error('Failed to process ZIP file:', err);
            if (DOM.modelUrlInput) DOM.modelUrlInput.value = '';
        }
    };

    // Highlight the canvas area during drag operations
    const setCanvasHighlight = (highlight) => {
        if (!DOM.canvas) return;
        DOM.canvas.style.borderColor = highlight ? CONFIG.HIGHLIGHT_COLOR : '';
    };

    // Drop handler
    const handleDrop = async (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        setCanvasHighlight(false);
        
        const file = ev.dataTransfer?.files?.[0];
        if (file?.name?.toLowerCase().endsWith('.zip')) {
            const dataUrl = await processZipFile(file, true);
            if (dataUrl) loadModel(dataUrl);
        }
    };

    // Attach drag & drop handlers
    const attachDragHandlers = () => {
        const dropZone = DOM.canvas;
        if (!dropZone) return;

        const dragEventTypes = ['dragenter', 'dragover', 'dragleave', 'drop'];
        const highlightEvents = ['dragenter', 'dragover'];
        const removeHighlightEvents = ['dragleave', 'drop'];

        dragEventTypes.forEach((eventType) => {
            dropZone.addEventListener(eventType, (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                
                if (highlightEvents.includes(eventType)) setCanvasHighlight(true);
                if (removeHighlightEvents.includes(eventType)) setCanvasHighlight(false);
            });
        });

        dropZone.addEventListener('drop', handleDrop);
    };

    // Initialize drag/drop functionality
    setupPageElements();
    attachDragHandlers();
});