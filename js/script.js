// Make PIXI globally available for pixi-live2d-display and extras
window.PIXI = PIXI;

/**
 * Configuration constants
 */
const CONFIG = {
    BACKGROUND_COLOR: 0x1a1a2e, // Dark blue-grey background
    MODEL_FIT_PADDING: 0.9,    // Fit model to 90% of the viewport dimension
    ZOOM_SENSITIVITY: 0.07,
    MIN_ZOOM: 0.1,
    MAX_ZOOM: 5.0,
    HIT_AREA_BUTTON_HIGHLIGHT_DURATION: 500, // ms
    FILE_URL_REVOKE_TIMEOUT: 60000,          // ms (1 minute)
};

/**
 * Global variables
 */
let app = null; // PIXI Application instance
let currentModel = null; // Currently displayed Live2D model
let hitAreaFrames = null; // Optional HitAreaFrames visualizer
let isDragging = false; // Flag for model dragging state
let wasDragging = false; // Flag to differentiate drag completion from a tap
let dragStartOffset = { x: 0, y: 0 }; // Offset from model anchor to drag start point

/**
 * DOM Elements (Cached for performance)
 */
const canvas = document.getElementById('live2d-canvas');
const loadingOverlay = document.getElementById('loading-overlay');
const noModelMessage = document.getElementById('no-model-message');
const modelSelect = document.getElementById('model-select');
const loadButton = document.getElementById('load-button');
const modelUrlInput = document.getElementById('model-url-input');
const loadUrlButton = document.getElementById('load-url-button');
const uploadButton = document.getElementById('upload-button'); // Optional, linked to fileInput
const fileInput = document.getElementById('file-input');
const showHitAreasCheckbox = document.getElementById('show-hit-areas'); // Optional
const expressionsContainer = document.getElementById('expressions-container');
const motionsContainer = document.getElementById('motions-container');
const hitAreasContainer = document.getElementById('hit-areas-container');

//==============================================================================
// INITIALIZATION
//==============================================================================

/**
 * Initializes the PixiJS application and sets up event listeners.
 */
function initApp() {
    const essentialElements = {
        canvas, fileInput, loadingOverlay, noModelMessage,
        expressionsContainer, motionsContainer, hitAreasContainer,
        modelUrlInput, loadUrlButton
    };

    for (const elName in essentialElements) {
        if (!essentialElements[elName]) {
            const errorMessage = `Fatal Error: Essential UI element '${elName}' (or its mapped ID) not found.`;
            console.error(errorMessage);
            alert(`Initialization failed: ${errorMessage}`);
            return;
        }
    }

    // Create PixiJS Application
    try {
        app = new PIXI.Application({
            view: canvas,
            autoStart: true,
            resizeTo: canvas.parentElement, // Resize canvas to parent container
            backgroundColor: CONFIG.BACKGROUND_COLOR,
            antialias: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true, // Adjust renderer density based on resolution
        });
    } catch (error) {
        console.error("Fatal Error: Failed to create PIXI Application.", error);
        alert(`Initialization failed: Could not create PixiJS Application. ${error.message}`);
        return;
    }

    // Set up UI event listeners
    loadButton?.addEventListener('click', loadSelectedModel);
    loadUrlButton.addEventListener('click', loadFromUrlInput);
    uploadButton?.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileUpload);
    showHitAreasCheckbox?.addEventListener('change', toggleHitAreaFrames);

    // Set up model interaction listeners on the PIXI stage
    setupModelInteractions();

    // Handle window resize
    window.addEventListener('resize', handleResize);

    // Initial UI state
    noModelMessage.style.display = 'flex';
    loadingOverlay.style.display = 'none';
    clearUIElements(); // Ensure UI starts clean
}

/**
 * Handles window resize events.
 */
function handleResize() {
    // PIXI's resizeTo handles canvas size. We just need to re-fit the model.
    fitModelToScreen();
}

//==============================================================================
// MODEL LOADING
//==============================================================================

/**
 * Loads the model specified in the dropdown select.
 */
async function loadSelectedModel() {
    if (!modelSelect) {
        console.error("Model select dropdown ('model-select') not found.");
        alert('Model selection dropdown is missing.');
        return;
    }
    const modelUrl = modelSelect.value;
    if (modelUrl) {
        await loadModel(modelUrl);
    } else {
        alert('Please select a model from the dropdown first.');
    }
}

/**
 * Loads the model from the URL input field.
 */
async function loadFromUrlInput() {
    const modelUrl = modelUrlInput.value.trim();
    if (modelUrl) {
        if (!modelUrl.startsWith('http://') && !modelUrl.startsWith('https://')) {
            alert('Please enter a valid HTTP or HTTPS URL.');
            modelUrlInput.focus();
            return;
        }
        await loadModel(modelUrl);
    } else {
        alert('Please enter a model URL.');
        modelUrlInput.focus();
    }
}

/**
 * Handles file input changes for loading models from local files/folders.
 */
async function handleFileUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    console.log(`Processing ${files.length} file(s) from input.`);

    const hasSettingsFile = Array.from(files).some(file =>
        file.name.endsWith('.model.json') || file.name.endsWith('.model3.json')
    );
    const isSingleJson = files.length === 1 && hasSettingsFile;

    if (files.length > 1 && !hasSettingsFile) {
        console.warn("Warning: No *.model.json or *.model3.json file detected. Folder uploads might fail if the main settings file is missing.");
    }

    try {
        let modelSource = files;
        if (isSingleJson) {
            console.log("Loading single model JSON file via Object URL.");
            const fileUrl = URL.createObjectURL(files[0]);
            setTimeout(() => URL.revokeObjectURL(fileUrl), CONFIG.FILE_URL_REVOKE_TIMEOUT);
            modelSource = fileUrl;
        } else {
            console.log("Attempting to load model from FileList (folder/zip).");
        }
        await loadModel(modelSource);
    } catch (error) {
        console.error('Error initiating model load from file input:', error);
        alert(`Failed to start loading model. Error: ${error.message}`);
        loadingOverlay.style.display = 'none';
        noModelMessage.style.display = currentModel ? 'none' : 'flex';
    } finally {
        event.target.value = null; // Reset file input
    }
}

/**
 * Loads a Live2D model from a given source (URL, FileList, File[]).
 * @param {string | FileList | File[]} source - The source to load the model from.
 */
async function loadModel(source) {
    if (!app?.stage) {
        console.error("PIXI Application not ready for loading.");
        alert("Error: Application not initialized properly.");
        return;
    }

    noModelMessage.style.display = 'none';
    loadingOverlay.style.display = 'flex';
    clearUIElements();

    if (currentModel) {
        console.log("Destroying previous model...");
        app.stage.removeChild(currentModel);
        currentModel.destroy({ children: true, texture: true, baseTexture: true });
        currentModel = null;
        hitAreaFrames = null;
    }

    try {
        console.log("Loading new model from:", typeof source === 'string' ? source : `${source.length} files`);
        const model = await PIXI.live2d.Live2DModel.from(source, {
            onError: (e) => {
                console.error("Error during Live2DModel.from operation:", e);
                alert(`Failed during model loading process: ${e.message || 'Unknown error'}. Check console.`);
            },
        });
        console.log("Model loaded:", model.internalModel?.settings?.name || "Unnamed Model");

        currentModel = model;
        app.stage.addChild(model);

        if (PIXI.live2d.HitAreaFrames) {
            hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            currentModel.addChild(hitAreaFrames);
            hitAreaFrames.visible = showHitAreasCheckbox?.checked ?? false;
            if (showHitAreasCheckbox) showHitAreasCheckbox.disabled = false;
        } else {
            console.warn('HitAreaFrames feature is unavailable. Load pixi-live2d-display/extra for this.');
            if (showHitAreasCheckbox) showHitAreasCheckbox.disabled = true;
        }

        await new Promise(resolve => setTimeout(resolve, 100)); // Wait for bounds calculation
        fitModelToScreen();
        setupModelControls();
        currentModel.cursor = 'grab';
        noModelMessage.style.display = 'none';
        console.log('Model setup complete.');

    } catch (error) {
        console.error('Error during model loading or setup:', error);
        alert(`Failed to load model. Check console. Error: ${error.message || error}`);
        if (currentModel && app.stage.children.includes(currentModel)) {
            app.stage.removeChild(currentModel);
            currentModel.destroy({ children: true, texture: true, baseTexture: true });
        }
        currentModel = null;
        hitAreaFrames = null;
        noModelMessage.style.display = 'flex';
        clearUIElements();
    } finally {
        loadingOverlay.style.display = 'none';
    }
}

//==============================================================================
// UI SETUP AND CONTROLS
//==============================================================================

/**
 * Scales and positions the model to fit within the canvas view.
 */
function fitModelToScreen() {
    if (!currentModel || !app?.renderer || !canvas.parentElement) return;

    const parent = canvas.parentElement;
    const viewWidth = parent.clientWidth;
    const viewHeight = parent.clientHeight;
    const modelWidth = currentModel.width;
    const modelHeight = currentModel.height;

    if (!modelWidth || !modelHeight || modelWidth <= 0 || modelHeight <= 0) {
        // console.warn("Model dimensions invalid/not ready, cannot fit.");
        return;
    }

    const scaleX = (viewWidth * CONFIG.MODEL_FIT_PADDING) / modelWidth;
    const scaleY = (viewHeight * CONFIG.MODEL_FIT_PADDING) / modelHeight;
    const scale = Math.min(scaleX, scaleY);

    currentModel.scale.set(scale);
    currentModel.anchor.set(0.5, 0.5);
    currentModel.position.set(viewWidth / 2, viewHeight / 2);
    // console.log(`Model fitted. View: ${viewWidth}x${viewHeight}, Scale: ${scale.toFixed(3)}`);
}

/**
 * Sets up all model-related UI controls (Motions, Expressions, Hit Areas).
 */
function setupModelControls() {
    setupModelMotions();
    setupModelExpressions();
    setupModelHitAreas();
}

/**
 * Creates a standard button element for UI controls.
 * @param {string} text Button text.
 * @param {string} title Button tooltip.
 * @param {() => void} onClick Click handler.
 * @param {string} [className='control-btn'] CSS class.
 * @returns {HTMLDivElement} The button element.
 */
function createControlButton(text, title, onClick, className = 'control-btn') {
    const button = document.createElement('div');
    button.className = className;
    button.textContent = text;
    button.title = title;
    button.onclick = onClick;
    return button;
}

/**
 * Sets or clears the "active" class on a button within a container.
 * @param {HTMLElement} container The parent container of the buttons.
 * @param {HTMLElement | null} activeButton The button to mark as active, or null to clear all.
 */
function setActiveButton(container, activeButton) {
    if (!container) return;
    container.querySelectorAll('.active').forEach(btn => btn.classList.remove('active'));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


/**
 * Adds a "no content" message to a container.
 * @param {HTMLElement} container The container element.
 * @param {string} contentType Type of content (e.g., "motions").
 */
function setNoContentMessage(container, contentType) {
    if (container) {
        container.innerHTML = `<p class="no-content">No ${contentType} defined</p>`;
    }
}

/**
 * Populates the motions UI container.
 */
function setupModelMotions() {
    motionsContainer.innerHTML = '';
    const motionManager = currentModel?.internalModel?.motionManager;
    const definitions = motionManager?.definitions;

    if (!definitions || Object.keys(definitions).length === 0) {
        setNoContentMessage(motionsContainer, 'motions');
        return;
    }

    const groupNames = Object.keys(definitions).sort();
    let motionButtonsCreated = 0;

    groupNames.forEach(group => {
        const motions = definitions[group];
        if (!motions || motions.length === 0) return;

        motions.forEach((motionDef, index) => {
            const button = document.createElement('div');
            button.className = 'motion-btn';

            const pathName = motionDef?.File?.split(/[/\\]/).pop()?.replace(/\.(motion3\.json|mtn)$/i, '');
            const explicitName = motionDef?.Name;
            const motionName = explicitName || pathName || `${group} ${index + 1}`;

            button.textContent = motionName;
            button.title = `Play Motion: ${group} [${index}] (${motionName})`;
            button.onclick = () => {
                try {
                    currentModel?.motion(group, index);
                    setActiveButton(motionsContainer, button);
                    console.log(`Playing motion: ${group}[${index}] - ${motionName}`);
                } catch (e) {
                    console.error(`Error playing motion ${group}[${index}] (${motionName}):`, e);
                    alert(`Could not play motion: ${motionName}. ${e.message}`);
                }
            };
            motionsContainer.appendChild(button);
            motionButtonsCreated++;
        });
    });

    if (motionButtonsCreated === 0) {
        setNoContentMessage(motionsContainer, 'motions');
    }
}

/**
 * Populates the expressions UI container.
 */
function setupModelExpressions() {
    expressionsContainer.innerHTML = '';
    const expressionDefs = currentModel?.internalModel?.expressions ??
        currentModel?.internalModel?.settings?.expressions ?? [];
    let expressionList = [];

    if (Array.isArray(expressionDefs)) {
        expressionList = expressionDefs;
    } else if (typeof expressionDefs === 'object' && expressionDefs !== null) {
        expressionList = Object.entries(expressionDefs).map(([key, value]) => ({ name: key, ...value }));
    }

    if (expressionList.length === 0) {
        setNoContentMessage(expressionsContainer, 'expressions');
        return;
    }

    expressionList.forEach((expression, index) => {
        const expressionName = expression.name || expression.Name || `Expression ${index + 1}`;
        const button = createControlButton(
            expressionName,
            `Set Expression: ${expressionName}`,
            () => {
                try {
                    currentModel?.expression(expressionName);
                    setActiveButton(expressionsContainer, button);
                    console.log(`Setting expression: ${expressionName}`);
                } catch (e) {
                    console.error(`Error setting expression ${expressionName}:`, e);
                    alert(`Could not set expression: ${expressionName}. ${e.message}`);
                }
            },
            'expression-btn'
        );
        expressionsContainer.appendChild(button);
    });
}

/**
 * Populates the hit areas UI container.
 */
function setupModelHitAreas() {
    hitAreasContainer.innerHTML = '';
    const hitAreaDefs = currentModel?.internalModel?.settings?.hitAreas;

    if (!hitAreaDefs || hitAreaDefs.length === 0) {
        setNoContentMessage(hitAreasContainer, 'hit areas');
        return;
    }

    let validHitAreasFound = 0;
    hitAreaDefs.forEach(hitAreaDef => {
        const hitAreaName = hitAreaDef.name || hitAreaDef.Name;
        if (!hitAreaName) return;

        validHitAreasFound++;
        const button = createControlButton(
            hitAreaName,
            `Simulate Tap on Hit Area: ${hitAreaName}`,
            () => simulateHitArea(hitAreaName),
            'hit-area-btn'
        );
        hitAreasContainer.appendChild(button);
    });

    if (validHitAreasFound === 0) {
        setNoContentMessage(hitAreasContainer, 'valid hit areas');
    }
}

/**
 * Clears UI elements related to the model.
 */
function clearUIElements() {
    [expressionsContainer, motionsContainer, hitAreasContainer].forEach(container => {
        if (container) {
            // Individual setup functions will set specific "no content" messages if needed.
            // Here, we just clear them or set a generic placeholder during full reset.
            setNoContentMessage(container, 'model data');
        }
    });
    // Clear any lingering active states
    setActiveButton(motionsContainer, null);
    setActiveButton(expressionsContainer, null);
    // Hit area buttons have temporary highlights, handled by their own logic
}

/**
 * Toggles the visibility of the HitAreaFrames overlay.
 */
function toggleHitAreaFrames() {
    if (hitAreaFrames && currentModel) {
        hitAreaFrames.visible = showHitAreasCheckbox?.checked ?? false;
    } else if (showHitAreasCheckbox?.checked) {
        console.warn("Cannot show HitAreaFrames: Feature not loaded or no model present.");
        if (showHitAreasCheckbox) showHitAreasCheckbox.checked = false;
    }
}

//==============================================================================
// MODEL INTERACTION (Dragging, Tapping, Zooming)
//==============================================================================

/**
 * Sets up primary interaction listeners on the PIXI stage.
 */
function setupModelInteractions() {
    if (!app?.stage) return;

    app.stage.interactive = true;
    app.stage.hitArea = app.screen; // Make the whole stage interactive

    app.stage.on('pointerdown', handlePointerDown);
    app.stage.on('pointermove', handlePointerMove);
    app.stage.on('pointerup', handlePointerUp);
    app.stage.on('pointerupoutside', handlePointerUp);
    app.stage.on('pointertap', handlePointerTap); // Tap on the stage

    canvas.addEventListener('wheel', handleZoom, { passive: false });
}

/**
 * Handles pointer down event for initiating potential drag.
 */
function handlePointerDown(event) {
    if (!currentModel || !event.data || !app?.renderer) return;
    wasDragging = false;

    const hitObject = app.renderer.plugins.interaction.hitTest(event.data.global, app.stage);
    if (hitObject === currentModel) {
        isDragging = true;
        const pointerInStage = currentModel.parent.toLocal(event.data.global);
        dragStartOffset.x = pointerInStage.x - currentModel.x;
        dragStartOffset.y = pointerInStage.y - currentModel.y;
        currentModel.cursor = 'grabbing';
    } else {
        isDragging = false;
    }
}

/**
 * Handles pointer move event for dragging the model.
 */
function handlePointerMove(event) {
    if (!isDragging || !currentModel || !event.data) return;
    wasDragging = true;
    const pointerInStage = currentModel.parent.toLocal(event.data.global);
    currentModel.position.set(
        pointerInStage.x - dragStartOffset.x,
        pointerInStage.y - dragStartOffset.y
    );
}

/**
 * Handles pointer up event for ending drag.
 */
function handlePointerUp() {
    if (isDragging) {
        if (currentModel) currentModel.cursor = 'grab';
    }
    isDragging = false;
}

/**
 * Handles mouse wheel event for zooming the model.
 */
function handleZoom(event) {
    if (!currentModel || !app?.renderer) return;
    event.preventDefault();

    const delta = event.deltaY;
    const zoomDirection = delta < 0 ? 1 : -1;
    const zoomFactor = Math.exp(zoomDirection * CONFIG.ZOOM_SENSITIVITY);

    const currentScale = currentModel.scale.x;
    let newScale = currentScale * zoomFactor;
    newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM));

    if (newScale === currentScale) return;

    const pointer = new PIXI.Point();
    app.renderer.plugins.interaction.mapPositionToPoint(pointer, event.clientX, event.clientY);
    const worldPos = app.stage.toLocal(pointer);
    const beforeTransform = currentModel.toLocal(worldPos);

    currentModel.scale.set(newScale);

    const afterTransform = currentModel.toGlobal(beforeTransform);
    currentModel.x -= (afterTransform.x - worldPos.x);
    currentModel.y -= (afterTransform.y - worldPos.y);
}

/**
 * Handles pointer tap event on the stage for hit testing the model.
 */
function handlePointerTap(event) {
    if (wasDragging || isDragging) { // Prevent tap after drag
        wasDragging = false;
        return;
    }
    if (!currentModel || !event.data) return;

    currentModel.updateTransform(); // Ensure transforms are up-to-date
    const localPos = currentModel.toLocal(event.data.global);
    const hitAreaNames = currentModel.hitTest(localPos.x, localPos.y);

    if (hitAreaNames.length > 0) {
        console.log('Tap hit detected area(s):', hitAreaNames.join(', '));
        highlightHitAreaButtons(hitAreaNames);
        playMotionForHitArea(hitAreaNames[0]); // Play motion for the first detected area
    } else {
        // console.log("Tap occurred, but no defined hit area detected at:", localPos);
        // Optionally, play a generic background tap motion if desired:
        // playMotionForHitArea(null);
    }
    wasDragging = false; // Reset for next interaction
}

/**
 * Simulates a tap on a specific hit area, triggered by UI button.
 * @param {string} hitAreaName - The name of the hit area to simulate.
 */
function simulateHitArea(hitAreaName) {
    if (!currentModel || !hitAreaName) return;
    console.log(`Simulating tap on hit area: ${hitAreaName}`);

    highlightHitAreaButtons([hitAreaName]);
    playMotionForHitArea(hitAreaName);

    if (hitAreaFrames?.highlight) {
        hitAreaFrames.highlight(hitAreaName);
    }
}

/**
 * Highlights the UI buttons corresponding to the given hit area names.
 * @param {string[]} hitAreaNames - Array of hit area names.
 */
function highlightHitAreaButtons(hitAreaNames) {
    if (!hitAreasContainer) return;
    hitAreasContainer.querySelectorAll('.hit-area-btn').forEach(button => {
        if (hitAreaNames.includes(button.textContent)) {
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
        }
    });
}

/**
 * Attempts to find and play a motion related to a hit area tap.
 * @param {string | null} hitAreaName - The name of the hit area, or null for a background tap.
 */
function playMotionForHitArea(hitAreaName) {
    const motionManager = currentModel?.internalModel?.motionManager;
    if (!motionManager?.definitions || Object.keys(motionManager.definitions).length === 0) {
        // console.warn("Cannot play hit motion: MotionManager or definitions not available.");
        return;
    }

    const definedGroups = Object.keys(motionManager.definitions);
    let motionPlayed = false;

    const potentialGroups = hitAreaName
        ? [`tap_${hitAreaName.toLowerCase()}`, hitAreaName.toLowerCase()] // Standardize to lower for matching
        : ['tap'];

    let targetGroup = null;
    for (const potential of potentialGroups) {
        const foundGroup = definedGroups.find(defined => defined.toLowerCase() === potential);
        if (foundGroup) {
            targetGroup = foundGroup;
            break;
        }
    }

    if (targetGroup) {
        try {
            console.log(`Playing motion for hit '${hitAreaName || 'Generic Tap'}': Group='${targetGroup}'`);
            currentModel.motion(targetGroup);
            motionPlayed = true;
        } catch (e) {
            console.warn(`Motion group '${targetGroup}' failed to play for hit '${hitAreaName || 'Generic Tap'}':`, e);
        }
    }

    // Fallback to generic 'Tap' if a specific (non-'Tap') hit area was targeted but no motion played
    if (!motionPlayed && hitAreaName && targetGroup?.toLowerCase() !== 'tap') {
        const genericTapGroup = definedGroups.find(defined => defined.toLowerCase() === 'tap');
        if (genericTapGroup) {
            try {
                console.log(`Playing generic 'Tap' motion as fallback for hit '${hitAreaName}': Group='${genericTapGroup}'`);
                currentModel.motion(genericTapGroup);
                motionPlayed = true;
            } catch (e) {
                console.warn(`Generic 'Tap' motion fallback failed:`, e);
            }
        }
    }

    if (!motionPlayed) {
        // console.log(`No suitable motion group found or played for hit: ${hitAreaName || '(No specific area)'}`);
    }
}

//==============================================================================
// STARTUP
//==============================================================================

window.addEventListener('DOMContentLoaded', initApp);