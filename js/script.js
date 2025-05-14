'use strict';

// Make PIXI globally available for pixi-live2d-display and extras
window.PIXI = PIXI;

/**
 * Configuration constants for the Live2D Viewer.
 * @namespace CONFIG
 * @property {number} BACKGROUND_COLOR - Background color for the PIXI canvas.
 * @property {number} MODEL_FIT_PADDING - Padding factor when fitting model to screen (e.g., 0.9 for 90%).
 * @property {number} ZOOM_SENSITIVITY - Sensitivity for mouse wheel zooming.
 * @property {number} MIN_ZOOM - Minimum zoom scale for the model.
 * @property {number} MAX_ZOOM - Maximum zoom scale for the model.
 * @property {number} HIT_AREA_BUTTON_HIGHLIGHT_DURATION - Duration in ms to highlight hit area buttons.
 * @property {number} FILE_URL_REVOKE_TIMEOUT - Timeout in ms to revoke object URLs created for file uploads.
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

/** @type {PIXI.Application | null} PIXI Application instance */
let app = null;
/** @type {PIXI.live2d.Live2DModel | null} Currently displayed Live2D model */
let currentModel = null;
/** @type {PIXI.live2d.HitAreaFrames | null} Optional HitAreaFrames visualizer */
let hitAreaFrames = null;

/** @type {boolean} Flag for model dragging state */
let isDragging = false;
/** @type {boolean} Flag to differentiate drag completion from a tap */
let wasDragging = false; // Used to prevent tap after a drag
/** @type {{x: number, y: number}} Offset from model anchor to drag start point */
let dragStartOffset = { x: 0, y: 0 };

// Cached DOM Elements
const DOMElements = {
    canvas: document.getElementById('live2d-canvas'),
    loadingOverlay: document.getElementById('loading-overlay'),
    noModelMessage: document.getElementById('no-model-message'),
    modelSelect: document.getElementById('model-select'),
    loadSelectedButton: document.getElementById('load-selected-button'),
    modelUrlInput: document.getElementById('model-url-input'),
    loadUrlButton: document.getElementById('load-url-button'),
    showHitAreasCheckbox: document.getElementById('show-hit-areas-checkbox'),
    expressionsContainer: document.getElementById('expressions-container'),
    motionsContainer: document.getElementById('motions-container'),
    hitAreasContainer: document.getElementById('hit-areas-container'),
};

//==============================================================================
// INITIALIZATION
//==============================================================================

/**
 * Initializes the PixiJS application and sets up core event listeners.
 */
function initApp() {
    const essentialElementIDs = [
        'canvas', 'loadingOverlay', 'noModelMessage', 'modelUrlInput', 'loadUrlButton',
        'expressionsContainer', 'motionsContainer', 'hitAreasContainer'
    ];
    for (const id of essentialElementIDs) {
        if (!DOMElements[id]) {
            const errorMessage = `Fatal Error: Essential UI element '${id}' not found in the DOM.`;
            console.error(errorMessage);
            alert(`Initialization failed: ${errorMessage} Please check the HTML structure.`);
            return;
        }
    }

    try {
        app = new PIXI.Application({
            view: DOMElements.canvas,
            autoStart: true,
            resizeTo: DOMElements.canvas.parentElement,
            backgroundColor: CONFIG.BACKGROUND_COLOR,
            antialias: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });
    } catch (error) {
        console.error("Fatal Error: Failed to create PIXI Application.", error);
        alert(`Initialization failed: Could not create PixiJS Application. ${error.message}`);
        return;
    }

    // Setup UI event listeners
    DOMElements.loadSelectedButton?.addEventListener('click', loadSelectedModelFromDropdown);
    DOMElements.loadUrlButton.addEventListener('click', loadModelFromUrlInput);
    DOMElements.showHitAreasCheckbox?.addEventListener('change', toggleHitAreaFramesVisibility);

    setupModelInteractions();
    window.addEventListener('resize', handleWindowResize);

    updateUIVisibility(false); // No model initially
    console.log("Live2D Viewer initialized.");
}

/**
 * Handles window resize events to refit the model.
 */
function handleWindowResize() {
    // PIXI's resizeTo handles canvas size. We only need to re-fit the model.
    if (currentModel) {
        fitModelToScreen();
    }
}

//==============================================================================
// MODEL LOADING
//==============================================================================

/**
 * Loads the model specified in the dropdown select.
 */
async function loadSelectedModelFromDropdown() {
    if (!DOMElements.modelSelect) {
        console.error("Model select dropdown ('model-select') not found.");
        alert('Model selection dropdown is missing.');
        return;
    }
    const modelUrl = DOMElements.modelSelect.value;
    if (modelUrl) {
        await loadModel(modelUrl);
    } else {
        alert('Please select a model from the dropdown first.');
    }
}

/**
 * Loads the model from the URL input field.
 */
async function loadModelFromUrlInput() {
    const modelUrl = DOMElements.modelUrlInput.value.trim();
    if (!modelUrl) {
        alert('Please enter a model URL.');
        DOMElements.modelUrlInput.focus();
        return;
    }
    if (!modelUrl.startsWith('http://') && !modelUrl.startsWith('https://')) {
        alert('Please enter a valid HTTP or HTTPS URL (e.g., https://example.com/model.model3.json).');
        DOMElements.modelUrlInput.focus();
        return;
    }
    await loadModel(modelUrl);
}

/**
 * Core function to load a Live2D model.
 * @param {string | FileList | File[]} source - The model source (URL, FileList, or File array).
 */
async function loadModel(source) {
    if (!app?.stage) {
        console.error("PIXI Application not ready for model loading.");
        alert("Error: Application not initialized properly. Cannot load model.");
        return;
    }

    updateUIVisibility(true, true); // Show loading, hide 'no model'
    clearModelControlPanels();

    // Destroy previous model if exists
    if (currentModel) {
        console.log("Destroying previous model...");
        app.stage.removeChild(currentModel);
        currentModel.destroy({ children: true, texture: true, baseTexture: true });
        currentModel = null;
        hitAreaFrames = null; // Also clear hit area frames
    }

    try {
        console.log("Loading new model from:", typeof source === 'string' ? source : `[${source.length} files]`);

        const model = await PIXI.live2d.Live2DModel.from(source, {
            onError: (e) => {
                console.error("Error during Live2DModel.from operation:", e);
                // This error might be caught by the outer try-catch as well
                throw new Error(`Live2DModel.from failed: ${e.message || 'Unknown error during model instantiation'}`);
            },
        });

        console.log("Model loaded successfully:", model.internalModel?.settings?.name || "Unnamed Model", model);
        currentModel = model;
        app.stage.addChild(model);

        // Setup HitAreaFrames if available (from pixi-live2d-display/extra)
        if (PIXI.live2d.HitAreaFrames) {
            hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            currentModel.addChild(hitAreaFrames);
            hitAreaFrames.visible = DOMElements.showHitAreasCheckbox?.checked ?? false;
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = false;
        } else {
            console.warn('HitAreaFrames feature is unavailable. For this, load pixi-live2d-display/extra.min.js.');
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = true;
        }

        await new Promise(resolve => setTimeout(resolve, 150));

        fitModelToScreen();
        populateModelControlPanels();
        currentModel.cursor = 'grab';

        updateUIVisibility(true, false);
        console.log('Model setup complete.');

    } catch (error) {
        console.error('Error during model loading or setup:', error);
        alert(`Failed to load model. Please check the console for details. Error: ${error.message || String(error)}`);

        if (currentModel && app.stage.children.includes(currentModel)) {
            app.stage.removeChild(currentModel);
            currentModel.destroy({ children: true, texture: true, baseTexture: true });
        }
        currentModel = null;
        hitAreaFrames = null;
        updateUIVisibility(false);
        clearModelControlPanels();
    }
}

//==============================================================================
// UI MANAGEMENT & MODEL CONTROLS
//==============================================================================

/**
 * Updates the visibility of UI elements like loading overlay and 'no model' message.
 * @param {boolean} hasModel - Whether a model is currently loaded or being loaded.
 * @param {boolean} [isLoading=false] - Whether the model is currently in a loading state.
 */
function updateUIVisibility(hasModel, isLoading = false) {
    if (DOMElements.loadingOverlay) {
        DOMElements.loadingOverlay.style.display = isLoading ? 'flex' : 'none';
    }
    if (DOMElements.noModelMessage) {
        DOMElements.noModelMessage.style.display = !hasModel && !isLoading ? 'flex' : 'none';
    }
}

/**
 * Scales and positions the model to fit within the canvas view.
 */
function fitModelToScreen() {
    if (!currentModel || !app?.renderer || !DOMElements.canvas.parentElement) {
        return;
    }

    const parent = DOMElements.canvas.parentElement;
    const viewWidth = parent.clientWidth;
    const viewHeight = parent.clientHeight;
    const modelWidth = currentModel.width;
    const modelHeight = currentModel.height;

    if (!modelWidth || !modelHeight || modelWidth <= 0 || modelHeight <= 0) {
        return;
    }

    const scaleX = (viewWidth * CONFIG.MODEL_FIT_PADDING) / modelWidth;
    const scaleY = (viewHeight * CONFIG.MODEL_FIT_PADDING) / modelHeight;
    const scale = Math.min(scaleX, scaleY);

    currentModel.scale.set(scale);
    currentModel.anchor.set(0.5, 0.5);
    currentModel.position.set(viewWidth / 2, viewHeight / 2);
}

/**
 * Populates all model-related UI control panels (Motions, Expressions, Hit Areas).
 */
function populateModelControlPanels() {
    populateMotionControls();
    populateExpressionControls();
    populateHitAreaControls();
}

/**
 * Clears all model-related UI control panels.
 */
function clearModelControlPanels() {
    setNoContentMessage(DOMElements.expressionsContainer, 'expressions');
    setNoContentMessage(DOMElements.motionsContainer, 'motions');
    setNoContentMessage(DOMElements.hitAreasContainer, 'hit areas');
    if (DOMElements.showHitAreasCheckbox) {
        DOMElements.showHitAreasCheckbox.checked = false;
        // DOMElements.showHitAreasCheckbox.disabled = true; // Disable if no model, re-enable on load
    }
}

/**
 * Creates a generic button element for UI controls.
 * @param {string} text - Button text.
 * @param {string} title - Button tooltip (title attribute).
 * @param {() => void} onClick - Click handler function.
 * @param {string} baseClassName - Base CSS class for the button (e.g., 'feature-btn').
 * @param {string} [specificClassName=''] - Specific CSS class (e.g., 'expression-btn').
 * @returns {HTMLButtonElement} The created button element.
 */
function createControlButton(text, title, onClick, baseClassName, specificClassName = '') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `${baseClassName} ${specificClassName}`.trim();
    button.textContent = text;
    button.title = title;
    button.onclick = onClick;
    return button;
}

/**
 * Sets or clears the "active" class on a button within a container.
 * If highlightDurationMs is provided and positive, the active state is temporary.
 * @param {HTMLElement | null} container - The parent container of the buttons.
 * @param {HTMLElement | null} activeButton - The button to mark as active, or null to clear all.
 * @param {number} [highlightDurationMs=0] - Duration in ms to keep the button highlighted. 0 means permanent until another is clicked.
 */
function setActiveButton(container, activeButton, highlightDurationMs = 0) {
    if (!container) return;

    // Clear 'active' class from all buttons in the container
    container.querySelectorAll('.active').forEach(btn => btn.classList.remove('active'));

    if (activeButton) {
        activeButton.classList.add('active');

        // If a duration is specified, remove the 'active' class after the timeout
        if (highlightDurationMs > 0) {
            setTimeout(() => {
                activeButton.classList.remove('active');
            }, highlightDurationMs);
        }
    }
}

/**
 * Displays a "no content" message in a given container if it's empty.
 * @param {HTMLElement | null} container - The container element.
 * @param {string} contentType - Type of content (e.g., "expressions", "motions").
 */
function setNoContentMessage(container, contentType) {
    if (container) {
        if (container.children.length === 0 ||
            (container.children.length === 1 && container.firstElementChild.classList.contains('no-content-message'))) {
            container.innerHTML = `<p class="no-content-message">No ${contentType} available</p>`;
        } else if (container.querySelector('.no-content-message') && container.children.length > 1) {
            // Remove "no content" message if actual content (buttons) was added
            const msgElement = container.querySelector('.no-content-message');
            if (msgElement) msgElement.remove();
        }
    }
}


/**
 * Populates the motions UI container with buttons for each available motion.
 */
function populateMotionControls() {
    const container = DOMElements.motionsContainer;
    if (!container) return;
    container.innerHTML = '';

    const motionManager = currentModel?.internalModel?.motionManager;
    const definitions = motionManager?.definitions;

    if (!definitions || Object.keys(definitions).length === 0) {
        setNoContentMessage(container, 'motions');
        return;
    }

    let motionButtonsCreated = 0;
    const groupNames = Object.keys(definitions).sort();

    groupNames.forEach(group => {
        const motionsInGroup = definitions[group];
        if (!motionsInGroup || motionsInGroup.length === 0) return;

        motionsInGroup.forEach((motionDef, index) => {
            const pathName = motionDef?.File?.split(/[/\\]/).pop()?.replace(/\.(motion3\.json|mtn)$/i, '');
            const explicitName = motionDef?.Name;
            const motionName = explicitName || pathName || `${group} ${index + 1}`;

            const button = createControlButton(
                motionName,
                `Play Motion: ${group} - ${motionName}`,
                () => {
                    try {
                        currentModel?.motion(group, index);
                        // Apply temporary active state
                        setActiveButton(container, button, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
                        console.log(`Playing motion: Group='${group}', Index=${index}, Name='${motionName}'`);
                    } catch (e) {
                        console.error(`Error playing motion ${group}[${index}] ('${motionName}'):`, e);
                        alert(`Could not play motion: ${motionName}. ${e.message}`);
                    }
                },
                'feature-btn', 'motion-btn'
            );
            container.appendChild(button);
            motionButtonsCreated++;
        });
    });

    if (motionButtonsCreated === 0) {
        setNoContentMessage(container, 'motions');
    } else {
        setNoContentMessage(container, 'motions'); // This will remove the message if buttons were added
    }
}

/**
 * Populates the expressions UI container with buttons for each available expression.
 */
function populateExpressionControls() {
    const container = DOMElements.expressionsContainer;
    if (!container) return;
    container.innerHTML = '';

    const rawExpressions = currentModel?.internalModel?.expressions ??
        currentModel?.internalModel?.settings?.expressions;

    let expressionList = [];
    if (Array.isArray(rawExpressions)) {
        expressionList = rawExpressions;
    } else if (typeof rawExpressions === 'object' && rawExpressions !== null) {
        expressionList = Object.entries(rawExpressions).map(([key, value]) => ({
            Name: key,
            File: typeof value === 'string' ? value : value?.File
        }));
    }

    if (expressionList.length === 0) {
        setNoContentMessage(container, 'expressions');
        return;
    }

    expressionList.forEach((expDef, index) => {
        const expressionName = expDef.Name || expDef.name || `Expression ${index + 1}`;

        const button = createControlButton(
            expressionName,
            `Set Expression: ${expressionName}`,
            () => {
                try {
                    currentModel?.expression(expressionName);
                    // Apply temporary active state
                    setActiveButton(container, button, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
                    console.log(`Setting expression: '${expressionName}'`);
                } catch (e) {
                    console.error(`Error setting expression '${expressionName}':`, e);
                    alert(`Could not set expression: '${expressionName}'. ${e.message}`);
                }
            },
            'feature-btn', 'expression-btn'
        );
        container.appendChild(button);
    });

    if (container.children.length === 0) {
        setNoContentMessage(container, 'expressions');
    } else {
        setNoContentMessage(container, 'expressions'); // Clears message if buttons added
    }
}


/**
 * Populates the hit areas UI container with buttons for each defined hit area.
 */
function populateHitAreaControls() {
    const container = DOMElements.hitAreasContainer;
    if (!container) return;
    container.innerHTML = '';

    const hitAreaDefs = currentModel?.internalModel?.settings?.hitAreas;

    if (!hitAreaDefs || hitAreaDefs.length === 0) {
        setNoContentMessage(container, 'hit areas');
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
            () => simulateTapOnHitArea(hitAreaName, button),
            'feature-btn', 'hit-area-btn'
        );
        container.appendChild(button);
    });

    if (validHitAreasFound === 0) {
        setNoContentMessage(container, 'hit areas (none valid)');
    } else {
        setNoContentMessage(container, 'hit areas'); // Clears message if buttons added
    }
}

/**
 * Toggles the visibility of the HitAreaFrames overlay.
 */
function toggleHitAreaFramesVisibility() {
    if (!DOMElements.showHitAreasCheckbox) return;

    const isChecked = DOMElements.showHitAreasCheckbox.checked;
    if (hitAreaFrames && currentModel) {
        hitAreaFrames.visible = isChecked;
        console.log(`Hit Area Frames visibility set to: ${isChecked}`);
    } else if (isChecked) {
        // console.warn("Cannot show HitAreaFrames: Feature not loaded or no model present.");
        // DOMElements.showHitAreasCheckbox.checked = false; 
    }
}

//==============================================================================
// MODEL INTERACTION (Dragging, Tapping, Zooming)
//==============================================================================

/**
 * Sets up primary interaction listeners on the PIXI stage for model manipulation.
 */
function setupModelInteractions() {
    if (!app?.stage) {
        console.error("Cannot setup interactions: PIXI Application stage not available.");
        return;
    }

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;

    app.stage.on('pointerdown', handlePointerDown);
    app.stage.on('pointermove', handlePointerMove);
    app.stage.on('pointerup', handlePointerUp);
    app.stage.on('pointerupoutside', handlePointerUp);
    app.stage.on('pointertap', handleStageTap);

    DOMElements.canvas.addEventListener('wheel', handleModelZoom, { passive: false });
}

/**
 * Handles pointer down event for initiating model drag.
 * @param {PIXI.InteractionEvent} event - The PIXI interaction event.
 */
function handlePointerDown(event) {
    if (!currentModel || !event.data || !app?.renderer) return;

    wasDragging = false;

    const hitObject = app.renderer.plugins.interaction.hitTest(event.data.global, currentModel);

    if (hitObject) {
        isDragging = true;
        const pointerInModelParent = currentModel.parent.toLocal(event.data.global, null, undefined, true);
        dragStartOffset.x = pointerInModelParent.x - currentModel.x;
        dragStartOffset.y = pointerInModelParent.y - currentModel.y;
        currentModel.cursor = 'grabbing';
    } else {
        isDragging = false;
    }
}

/**
 * Handles pointer move event for dragging the model.
 * @param {PIXI.InteractionEvent} event - The PIXI interaction event.
 */
function handlePointerMove(event) {
    if (!isDragging || !currentModel || !event.data) return;

    wasDragging = true;
    const pointerInModelParent = currentModel.parent.toLocal(event.data.global, null, undefined, true);
    currentModel.position.set(
        pointerInModelParent.x - dragStartOffset.x,
        pointerInModelParent.y - dragStartOffset.y
    );
}

/**
 * Handles pointer up event for ending model drag.
 */
function handlePointerUp() {
    if (isDragging) {
        if (currentModel) currentModel.cursor = 'grab';
    }
    isDragging = false;
}

/**
 * Handles mouse wheel event for zooming the model.
 * @param {WheelEvent} event - The native wheel event.
 */
function handleModelZoom(event) {
    if (!currentModel || !app?.renderer) return;
    event.preventDefault();

    const delta = event.deltaY;
    const zoomDirection = delta < 0 ? 1 : -1;
    const zoomIncrement = Math.exp(zoomDirection * CONFIG.ZOOM_SENSITIVITY);

    const currentScale = currentModel.scale.x;
    let newScale = currentScale * zoomIncrement;
    newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM));

    if (newScale === currentScale) return;

    const pointer = new PIXI.Point();
    app.renderer.plugins.interaction.mapPositionToPoint(pointer, event.clientX, event.clientY);

    const stagePointerPos = app.stage.toLocal(pointer, undefined, undefined, true);
    const modelLocalPointerPos = currentModel.toLocal(stagePointerPos, undefined, undefined, true);

    currentModel.scale.set(newScale);
    const newGlobalPointerPos = currentModel.toGlobal(modelLocalPointerPos, undefined, true);

    currentModel.x -= (newGlobalPointerPos.x - stagePointerPos.x);
    currentModel.y -= (newGlobalPointerPos.y - stagePointerPos.y);
}

/**
 * Handles pointer tap event on the stage for hit testing the model.
 * @param {PIXI.InteractionEvent} event - The PIXI interaction event.
 */
function handleStageTap(event) {
    if (wasDragging || isDragging) {
        wasDragging = false; // Reset drag flag
        return;
    }
    if (!currentModel || !event.data) return;

    // currentModel.updateTransform(); // updateTransform is called within toModelPosition if needed

    // Pass the GLOBAL coordinates directly to hitTest
    // The Live2DModel's hitTest method expects coordinates that its
    // toModelPosition method can convert from global to internal model space.
    const hitAreaNames = currentModel.hitTest(event.data.global.x, event.data.global.y);

    if (hitAreaNames.length > 0) {
        const mainHitArea = hitAreaNames[0];
        console.log('Tap hit detected area(s):', hitAreaNames.join(', '));
        highlightHitAreaButtonsInUI(hitAreaNames);
        triggerMotionForHitArea(mainHitArea);
    } else {
        // Optional: Check if the tap was on the model's general visible area
        // even if not a specific hit area, for a generic tap motion.
        // GetBounds() returns the bounds in global space by default.
        const modelBounds = currentModel.getBounds();
        if (modelBounds.contains(event.data.global.x, event.data.global.y)) {
             console.log("Tap occurred on model (general bounds), but no defined hit area detected. Attempting generic tap motion.");
             triggerMotionForHitArea(null); // Pass null or a specific identifier for "generic tap"
        }
    }
    wasDragging = false; // Ensure this is reset if the tap didn't follow a drag
}

/**
 * Simulates a tap on a specific hit area, usually triggered by a UI button.
 * @param {string} hitAreaName - The name of the hit area to simulate.
 * @param {HTMLElement} [buttonElement] - The button that triggered this, for highlighting.
 */
function simulateTapOnHitArea(hitAreaName, buttonElement) {
    if (!currentModel || !hitAreaName) return;
    console.log(`Simulating tap on hit area: '${hitAreaName}'`);

    highlightHitAreaButtonsInUI([hitAreaName], buttonElement);
    triggerMotionForHitArea(hitAreaName);

    if (hitAreaFrames && typeof hitAreaFrames.highlight === 'function') {
        hitAreaFrames.highlight(hitAreaName);
    }
}

/**
 * Highlights the UI buttons corresponding to the given hit area names.
 * @param {string[]} hitAreaNames - Array of hit area names that were hit.
 * @param {HTMLElement} [specificButtonToHighlight] - If provided, only this button gets active class.
 */
function highlightHitAreaButtonsInUI(hitAreaNames, specificButtonToHighlight) {
    if (!DOMElements.hitAreasContainer) return;

    const buttons = DOMElements.hitAreasContainer.querySelectorAll('.hit-area-btn');
    buttons.forEach(button => {
        const buttonHitAreaName = button.textContent; // Name is in button's text
        const buttonMatches = hitAreaNames.some(name => name.toLowerCase() === buttonHitAreaName.toLowerCase());

        if (specificButtonToHighlight) {
            // If a specific button triggered this (e.g., UI click), only highlight that one
            if (button === specificButtonToHighlight) {
                button.classList.add('active');
                setTimeout(() => button.classList.remove('active'), CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
            } else {
                button.classList.remove('active'); // Ensure others are not highlighted from this direct call
            }
        } else if (buttonMatches) {
            // If tap was on model, highlight all matching buttons
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
        }
    });
}

/**
 * Attempts to find and play a motion related to a hit area tap.
 * Prioritizes motions directly related to the hitAreaName (e.g., "Head", "Tap_Head", "Flick_Head").
 * If multiple such motions exist, one is chosen randomly.
 * If no direct match, falls back to generic tap motions (e.g., "Tap", "IdleTap").
 * @param {string | null} hitAreaName - The name of the hit area.
 */
function triggerMotionForHitArea(hitAreaName) {
    if (!currentModel) return;
    const motionManager = currentModel.internalModel?.motionManager;
    if (!motionManager?.definitions || Object.keys(motionManager.definitions).length === 0) {
        // console.warn("Cannot play hit motion: MotionManager or definitions not available.");
        return;
    }

    const definedGroupNames = Object.keys(motionManager.definitions);
    let motionPlayed = false;
    const lowerHitAreaName = hitAreaName?.toLowerCase(); // Use optional chaining for null safety

    console.log(`Attempting to play motion for hit: '${hitAreaName || "Generic Tap"}'. Defined groups: [${definedGroupNames.join(', ')}]`);

    // 1. Primary Search: Motions directly related to the hitAreaName
    if (lowerHitAreaName) {
        const primaryCandidatePatterns = [
            lowerHitAreaName,                   // e.g., "head"
            `tap_${lowerHitAreaName}`,          // e.g., "tap_head"
            `flick_${lowerHitAreaName}`,        // e.g., "flick_head" (from your log example)
            `hit_${lowerHitAreaName}`,          // e.g., "hit_head" (another common pattern)
            `tap${lowerHitAreaName}`            // e.g., "taphead" (no underscore)
        ];

        // Add variations if hitAreaName itself might be a prefixed version, e.g., "TapBody" -> also check for "Body"
        if (lowerHitAreaName.startsWith('tap_') || lowerHitAreaName.startsWith('flick_') || lowerHitAreaName.startsWith('hit_')) {
            primaryCandidatePatterns.push(lowerHitAreaName.substring(lowerHitAreaName.indexOf('_') + 1));
        } else if (lowerHitAreaName.startsWith('tap') && !lowerHitAreaName.includes('_')) {
             primaryCandidatePatterns.push(lowerHitAreaName.substring(3)); // e.g., "taphead" -> "head"
        }
        // Ensure no empty strings from substring operations if prefixes are short
        const validPrimaryPatterns = [...new Set(primaryCandidatePatterns.filter(p => p))];


        const actualPrimaryMotionGroups = definedGroupNames.filter(definedGroup =>
            validPrimaryPatterns.some(pattern => definedGroup.toLowerCase() === pattern)
        );

        if (actualPrimaryMotionGroups.length > 0) {
            console.log(`Found primary motion group(s) for '${hitAreaName}': [${actualPrimaryMotionGroups.join(', ')}]`);
            const randomIndex = Math.floor(Math.random() * actualPrimaryMotionGroups.length);
            const groupToPlay = actualPrimaryMotionGroups[randomIndex];
            try {
                console.log(`Playing randomly selected primary motion: Group='${groupToPlay}'`);
                currentModel.motion(groupToPlay); // Play a random motion from this specific group
                motionPlayed = true;
            } catch (e) {
                console.warn(`Primary motion group '${groupToPlay}' failed to play:`, e);
            }
        }
    }

    // 2. Secondary Search: Generic tap motions, if no primary motion was played
    if (!motionPlayed) {
        const genericTapGroupCandidates = ['tap', 'idletap']; // Add more generic fallbacks if needed

        if (hitAreaName) { // Log only if a specific area was hit but found no primary motion
            console.log(`No primary motion played for '${hitAreaName}'. Trying generic tap motions.`);
        } else if (hitAreaName === null) { // Explicitly null, from a general tap
            console.log(`No specific hit area identified. Trying generic tap motions.`);
        }


        for (const genericGroupCandidate of genericTapGroupCandidates) {
            const matchedGenericGroup = definedGroupNames.find(defined => defined.toLowerCase() === genericGroupCandidate.toLowerCase());
            if (matchedGenericGroup) {
                try {
                    console.log(`Playing generic motion: Group='${matchedGenericGroup}'`);
                    currentModel.motion(matchedGenericGroup); // Play a random motion from this generic group
                    motionPlayed = true;
                    break; // Generic motion played, no need to try others
                } catch (e) {
                    console.warn(`Generic motion group '${matchedGenericGroup}' failed to play:`, e);
                }
            }
        }
    }

    if (!motionPlayed) {
        console.log(`No suitable motion group found or played for hit: '${hitAreaName || '(No specific area)'}'.`);
    }
}


//==============================================================================
// STARTUP
//==============================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}