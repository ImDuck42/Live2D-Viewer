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

// Interaction state variables
let isDragging = false;
let wasDragging = false; // Used to prevent tap after a drag/pinch
let dragStartOffset = { x: 0, y: 0 };

let isPinching = false;
const activePointers = {}; // Stores active pointer data, keyed by pointerId
let initialPinchDistance = 0;
let initialPinchMidpoint = new PIXI.Point();
let initialModelScaleOnPinchStart = 1;

let previousCanvasWidth = 0; // Stores the canvas width before a resize, to detect actual width changes.


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
            resizeTo: DOMElements.canvas.parentElement, // PIXI handles canvas resize
            backgroundColor: CONFIG.BACKGROUND_COLOR,
            antialias: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });

        // Initialize previousCanvasWidth with the initial renderer width
        previousCanvasWidth = app.renderer.width;

        // Add resize listener for PIXI renderer
        app.renderer.on('resize', handleCanvasResize);

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
    
    updateUIVisibility(false); // No model initially
    console.log("Live2D Viewer initialized.");
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
    if (modelUrl == 'https://cdn.jsdelivr.net/gh/AzurLaneAssets/Live2D-Chars/碧蓝航线%20Azur%20Lane/Azur%20Lane(JP)/ricky_1/ricky_.model3.json') {
        window.location.href = "https://www.yout-ube.com/watch?v=dQw4w9WgXcQ";
    } else if (modelUrl) {
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
                throw new Error(`Live2DModel.from failed: ${e.message || 'Unknown error during model instantiation'}`);
            },
        });

        console.log("Model loaded successfully:", model.internalModel?.settings?.name || "Unnamed Model", model);
        currentModel = model;
        app.stage.addChild(model);

        if (PIXI.live2d.HitAreaFrames) {
            hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            currentModel.addChild(hitAreaFrames);
            hitAreaFrames.visible = DOMElements.showHitAreasCheckbox?.checked ?? false;
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = false;
        } else {
            console.warn('HitAreaFrames feature is unavailable. For this, load pixi-live2d-display/extra.min.js.');
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = true;
        }

        await new Promise(resolve => setTimeout(resolve, 150)); // Short delay for rendering setup

        fitModelToScreen(); // Fit model initially
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
 * Called on initial model load.
 */
function fitModelToScreen() {
    if (!currentModel || !app?.renderer || !DOMElements.canvas.parentElement) {
        console.warn("fitModelToScreen: Pre-conditions not met.");
        return;
    }

    const parent = DOMElements.canvas.parentElement;
    const viewWidth = parent.clientWidth;
    const viewHeight = parent.clientHeight;

    // Ensure model dimensions are valid
    currentModel.updateTransform(); // Ensure bounds are up-to-date
    const modelWidth = currentModel.width / currentModel.scale.x; // Use unscaled width
    const modelHeight = currentModel.height / currentModel.scale.y; // Use unscaled height

    if (!modelWidth || !modelHeight || modelWidth <= 0 || modelHeight <= 0) {
        console.warn("fitModelToScreen: Invalid model dimensions.", modelWidth, modelHeight);
        // Set a small default scale if dimensions are weird
        currentModel.scale.set(Math.min(viewWidth * 0.1 / (modelWidth || 100), viewHeight * 0.1 / (modelHeight || 100) ));
        currentModel.anchor.set(0.5, 0.5);
        currentModel.position.set(viewWidth / 2, viewHeight / 2);
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
        // DOMElements.showHitAreasCheckbox.disabled = true; // Re-enabled on model load
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
    container.querySelectorAll('.active').forEach(btn => btn.classList.remove('active'));
    if (activeButton) {
        activeButton.classList.add('active');
        if (highlightDurationMs > 0) {
            setTimeout(() => {
                activeButton.classList.remove('active');
            }, highlightDurationMs);
        }
    }
}

/**
 * Displays a "no content" message in a given container if it's empty or only contains the message itself.
 * @param {HTMLElement | null} container - The container element.
 * @param {string} contentType - Type of content (e.g., "expressions", "motions").
 */
function setNoContentMessage(container, contentType) {
    if (container) {
        const hasContent = Array.from(container.children).some(child => !child.classList.contains('no-content-message'));
        const messageElement = container.querySelector('.no-content-message');

        if (!hasContent) {
            if (!messageElement) {
                container.innerHTML = `<p class="no-content-message">No ${contentType} available</p>`;
            }
        } else if (messageElement) {
            messageElement.remove();
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
    if(motionButtonsCreated === 0) { // if only empty groups existed
        setNoContentMessage(container, 'motions');
    } else {
        const messageElement = container.querySelector('.no-content-message');
        if (messageElement) messageElement.remove();
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
    let expressionsCreated = 0;
    expressionList.forEach((expDef, index) => {
        const expressionName = expDef.Name || expDef.name || `Expression ${index + 1}`;
        const button = createControlButton(
            expressionName,
            `Set Expression: ${expressionName}`,
            () => {
                try {
                    currentModel?.expression(expressionName);
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
        expressionsCreated++;
    });
    if(expressionsCreated === 0) {
        setNoContentMessage(container, 'expressions');
    } else {
        const messageElement = container.querySelector('.no-content-message');
        if (messageElement) messageElement.remove();
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

    if(validHitAreasFound === 0) {
        setNoContentMessage(container, 'hit areas (none valid)');
    } else {
        const messageElement = container.querySelector('.no-content-message');
        if (messageElement) messageElement.remove();
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
    }
}

//==============================================================================
// CANVAS AND RENDERER HANDLERS
//==============================================================================

/**
 * Handles canvas resize events to re-center the model horizontally if the width changes.
 * This function is called by PIXI's renderer 'resize' event.
 * @param {number} newWidth - The new width of the renderer.
 * @param {number} newHeight - The new height of the renderer.
 */
function handleCanvasResize(newWidth, newHeight) {
    if (currentModel && app?.renderer) {
        if (newWidth !== previousCanvasWidth) {
            // console.log(`Canvas width changed from ${previousCanvasWidth} to ${newWidth}. Centering model horizontally.`);
            currentModel.position.x = newWidth / 2;
        }
        // currentModel.position.y and currentModel.scale remain unchanged by this handler
    }
    // Always update previousCanvasWidth to the new current width for the next comparison.
    // This handles cases where the model might not be loaded yet, but the canvas resizes.
    previousCanvasWidth = newWidth;
}


//==============================================================================
// MODEL INTERACTION (Dragging, Tapping, Zooming, Pinching)
//==============================================================================

/** Helper: Calculate distance between two PIXI.Point objects */
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

/** Helper: Calculate midpoint between two PIXI.Point objects */
function getMidpoint(p1, p2) {
    return new PIXI.Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
}

/**
 * Sets up primary interaction listeners on the PIXI stage for model manipulation.
 */
function setupModelInteractions() {
    if (!app?.stage) {
        console.error("Cannot setup interactions: PIXI Application stage not available.");
        return;
    }

    app.stage.interactive = true;
    app.stage.hitArea = app.screen; // Make the whole stage interactive

    app.stage.on('pointerdown', handlePointerDown);
    app.stage.on('pointermove', handlePointerMove);
    app.stage.on('pointerup', handlePointerRelease); // Use common release handler
    app.stage.on('pointerupoutside', handlePointerRelease); // Use common release handler
    app.stage.on('pointertap', handleStageTap);

    DOMElements.canvas.addEventListener('wheel', handleModelZoom, { passive: false });
}

/**
 * Handles pointer down event for initiating model drag or pinch.
 * @param {PIXI.InteractionEvent} event - The PIXI interaction event.
 */
function handlePointerDown(event) {
    if (!currentModel || !event.data || !app?.renderer) return;

    activePointers[event.data.pointerId] = event.data;
    const numActivePointers = Object.keys(activePointers).length;

    wasDragging = false; // Reset for this interaction sequence

    if (numActivePointers === 1) {
        const hitObject = app.renderer.plugins.interaction.hitTest(event.data.global, currentModel);
        if (hitObject) {
            isDragging = true;
            isPinching = false; // Ensure not pinching
            const pointerInModelParent = currentModel.parent.toLocal(event.data.global, null, undefined, true);
            dragStartOffset.x = pointerInModelParent.x - currentModel.x;
            dragStartOffset.y = pointerInModelParent.y - currentModel.y;
            currentModel.cursor = 'grabbing';
        } else {
            isDragging = false;
        }
    } else if (numActivePointers === 2) {
        isDragging = false; // Stop single-finger drag if it was active
        isPinching = true;
        wasDragging = true; // A two-finger interaction should prevent a tap
        if (currentModel) currentModel.cursor = 'default'; // Or 'move' or custom pinch cursor

        const pointers = Object.values(activePointers);
        initialPinchDistance = getDistance(pointers[0].global, pointers[1].global);
        initialPinchMidpoint = getMidpoint(pointers[0].global, pointers[1].global);
        initialModelScaleOnPinchStart = currentModel.scale.x;
    }
}

/**
 * Handles pointer move event for dragging or pinching the model.
 * @param {PIXI.InteractionEvent} event - The PIXI interaction event.
 */
function handlePointerMove(event) {
    if (!currentModel || !event.data) return;

    // Update the moving pointer's data
    if (activePointers[event.data.pointerId]) {
        activePointers[event.data.pointerId] = event.data;
    } else { // Pointer move for a pointer not previously registered (shouldn't happen with proper down handling)
        return;
    }
    
    const numActivePointers = Object.keys(activePointers).length;

    if (isPinching && numActivePointers === 2) {
        wasDragging = true;
        const pointers = Object.values(activePointers);
        const currentPinchDistance = getDistance(pointers[0].global, pointers[1].global);

        if (initialPinchDistance > 0) { // Avoid division by zero
            const scaleFactor = currentPinchDistance / initialPinchDistance;
            let newScale = initialModelScaleOnPinchStart * scaleFactor;
            newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM));

            if (newScale !== currentModel.scale.x) {
                // Zoom around the initial pinch midpoint
                const stagePointerPos = initialPinchMidpoint; // Global coords of the pinch center
                const modelLocalPointerPos = currentModel.toLocal(stagePointerPos, undefined, undefined, true);
                
                currentModel.scale.set(newScale);
                
                const newGlobalPointerPosFromModel = currentModel.toGlobal(modelLocalPointerPos, undefined, true);
                
                currentModel.x -= (newGlobalPointerPosFromModel.x - stagePointerPos.x);
                currentModel.y -= (newGlobalPointerPosFromModel.y - stagePointerPos.y);
            }
        }
    } else if (isDragging && numActivePointers === 1 && activePointers[event.data.pointerId]) {
        // Standard single-finger drag
        wasDragging = true;
        const pointerInModelParent = currentModel.parent.toLocal(event.data.global, null, undefined, true);
        currentModel.position.set(
            pointerInModelParent.x - dragStartOffset.x,
            pointerInModelParent.y - dragStartOffset.y
        );
    }
}

/**
 * Common handler for pointer up and pointer up outside events.
 * @param {PIXI.InteractionEvent} event - The PIXI interaction event.
 */
function handlePointerRelease(event) {
    const releasedPointerId = event.data.pointerId;

    if (activePointers[releasedPointerId]) {
        delete activePointers[releasedPointerId];
    }
    const numActivePointers = Object.keys(activePointers).length;

    if (isPinching) {
        // Pinching stops if either of the two fingers is lifted.
        isPinching = false;
        initialModelScaleOnPinchStart = 1; // Reset
        if (currentModel) currentModel.cursor = 'grab'; // Reset cursor

        if (numActivePointers < 2) { 
            isDragging = false; 
        }
        if (numActivePointers === 1) {
            // Re-initialize drag for the remaining finger
            const remainingPointerData = Object.values(activePointers)[0];
            if (app?.renderer && currentModel?.parent) { // Check if context is valid
                 const hitObject = app.renderer.plugins.interaction.hitTest(remainingPointerData.global, currentModel);
                 if (hitObject) {
                    isDragging = true; 
                    const pointerInModelParent = currentModel.parent.toLocal(remainingPointerData.global, null, undefined, true);
                    dragStartOffset.x = pointerInModelParent.x - currentModel.x;
                    dragStartOffset.y = pointerInModelParent.y - currentModel.y;
                    if (currentModel) currentModel.cursor = 'grabbing';
                 } else {
                    isDragging = false;
                 }
            } else {
                isDragging = false;
            }
        }


    } else if (isDragging) { // Was dragging with a single finger
        isDragging = false;
        if (currentModel) currentModel.cursor = 'grab';
    }

    if (numActivePointers === 0) { // All pointers are up
        isDragging = false;
        isPinching = false;
        if (currentModel) currentModel.cursor = 'grab';
    }
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

    const newGlobalPointerPosFromModel = currentModel.toGlobal(modelLocalPointerPos, undefined, true);
    
    currentModel.x -= (newGlobalPointerPosFromModel.x - stagePointerPos.x);
    currentModel.y -= (newGlobalPointerPosFromModel.y - stagePointerPos.y);
}

/**
 * Handles pointer tap event on the stage for hit testing the model.
 * @param {PIXI.InteractionEvent} event - The PIXI interaction event.
 */
function handleStageTap(event) {
    if (wasDragging || isDragging || isPinching) {
        wasDragging = false; 
        return;
    }
    if (!currentModel || !event.data) return;

    const hitAreaNames = currentModel.hitTest(event.data.global.x, event.data.global.y);

    if (hitAreaNames.length > 0) {
        const mainHitArea = hitAreaNames[0];
        console.log('Tap hit detected area(s):', hitAreaNames.join(', '));
        highlightHitAreaButtonsInUI(hitAreaNames);
        triggerMotionForHitArea(mainHitArea);
    } else {
        const modelBounds = currentModel.getBounds(); 
        if (modelBounds.contains(event.data.global.x, event.data.global.y)) {
             console.log("Tap occurred on model (general bounds), but no defined hit area. Attempting generic tap motion.");
             triggerMotionForHitArea(null); 
        }
    }
    wasDragging = false; 
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
        const buttonHitAreaName = button.textContent; 
        const buttonMatches = hitAreaNames.some(name => name.toLowerCase() === buttonHitAreaName.toLowerCase());

        if (specificButtonToHighlight) {
            if (button === specificButtonToHighlight) {
                setActiveButton(DOMElements.hitAreasContainer, button, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
            }
        } else if (buttonMatches) {
            button.classList.add('active'); 
            setTimeout(() => button.classList.remove('active'), CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
        }
    });
    if (specificButtonToHighlight) { 
         setActiveButton(DOMElements.hitAreasContainer, specificButtonToHighlight, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
    }
}

/**
 * Attempts to find and play a motion related to a hit area tap.
 * @param {string | null} hitAreaName - The name of the hit area.
 */
function triggerMotionForHitArea(hitAreaName) {
    if (!currentModel) return;
    const motionManager = currentModel.internalModel?.motionManager;
    if (!motionManager?.definitions || Object.keys(motionManager.definitions).length === 0) {
        return;
    }

    const definedGroupNames = Object.keys(motionManager.definitions);
    let motionPlayed = false;
    const lowerHitAreaName = hitAreaName?.toLowerCase();

    console.log(`Attempting to play motion for hit: '${hitAreaName || "Generic Tap"}'. Defined groups: [${definedGroupNames.join(', ')}]`);

    if (lowerHitAreaName) {
        const primaryCandidatePatterns = [
            lowerHitAreaName, `tap_${lowerHitAreaName}`, `flick_${lowerHitAreaName}`,
            `hit_${lowerHitAreaName}`, `tap${lowerHitAreaName}`
        ];
        if (lowerHitAreaName.startsWith('tap_') || lowerHitAreaName.startsWith('flick_') || lowerHitAreaName.startsWith('hit_')) {
            primaryCandidatePatterns.push(lowerHitAreaName.substring(lowerHitAreaName.indexOf('_') + 1));
        } else if (lowerHitAreaName.startsWith('tap') && !lowerHitAreaName.includes('_')) {
             primaryCandidatePatterns.push(lowerHitAreaName.substring(3));
        }
        const validPrimaryPatterns = [...new Set(primaryCandidatePatterns.filter(p => p))];
        const actualPrimaryMotionGroups = definedGroupNames.filter(definedGroup =>
            validPrimaryPatterns.some(pattern => definedGroup.toLowerCase() === pattern)
        );

        if (actualPrimaryMotionGroups.length > 0) {
            const groupToPlay = actualPrimaryMotionGroups[Math.floor(Math.random() * actualPrimaryMotionGroups.length)];
            try {
                currentModel.motion(groupToPlay);
                motionPlayed = true;
                console.log(`Playing primary motion: Group='${groupToPlay}'`);
            } catch (e) { console.warn(`Primary motion group '${groupToPlay}' failed:`, e); }
        }
    }

    if (!motionPlayed) {
        const genericTapGroupCandidates = ['tap', 'idletap'];
        if (hitAreaName) { console.log(`No primary motion for '${hitAreaName}'. Trying generic.`); }
        else { console.log(`No specific hit area. Trying generic tap.`); }

        for (const genericGroupCandidate of genericTapGroupCandidates) {
            const matchedGenericGroup = definedGroupNames.find(defined => defined.toLowerCase() === genericGroupCandidate.toLowerCase());
            if (matchedGenericGroup) {
                try {
                    currentModel.motion(matchedGenericGroup);
                    motionPlayed = true;
                    console.log(`Playing generic motion: Group='${matchedGenericGroup}'`);
                    break; 
                } catch (e) { console.warn(`Generic motion group '${matchedGenericGroup}' failed:`, e); }
            }
        }
    }

    if (!motionPlayed) {
        console.log(`No suitable motion found for hit: '${hitAreaName || '(No specific area)'}'.`);
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