'use strict';

// Make PIXI globally available for extensions like pixi-live2d-display
window.PIXI = PIXI;

//==============================================================================
// GLOBAL CONFIGURATION AND STATE VARIABLES
//==============================================================================
const CONFIG = {
    BACKGROUND_COLOR: 0x1a1a2e,
    MODEL_FIT_PADDING: 0.9, // Padding factor when fitting model to view
    ZOOM_SENSITIVITY: 0.075,
    MIN_ZOOM: 0.01,
    MAX_ZOOM: 10.0,
    HIT_AREA_BUTTON_HIGHLIGHT_DURATION: 500, // ms
    FILE_URL_REVOKE_TIMEOUT: 60000, // ms, for ObjectURLs if used
    SELECTION_OUTLINE_COLOR: 0x8c5eff,
    SELECTION_OUTLINE_THICKNESS: 2,
    SELECTION_OUTLINE_ALPHA: 0.1, // Note: This alpha is for the line, PIXI might blend it further
    SELECTION_OUTLINE_CORNER_RADIUS: 10,
    CHANGES_HTML_URL: 'assets/changes.html', // Used by newsmodal.js
};

let app = null; // PIXI Application instance
let models = []; // Array to store loaded Live2D models
let selectedModel = null; // Currently selected Live2D model
let modelIdCounter = 0; // Simple ID generator for models
let hitAreaFrames = null; // PIXI.Graphics for displaying hit areas
let selectionOutline = null; // PIXI.Graphics for displaying selection outline

// Dragging state
let isDragging = false;
let wasDragging = false; // Used to differentiate tap from drag-release
let dragStartOffset = { x: 0, y: 0 };
let activeDragTarget = null; // The model being dragged

// Pinching state
let isPinching = false;
const activePointers = {}; // Store active pointers for multi-touch
let initialPinchDistance = 0;
let initialPinchMidpoint = new PIXI.Point();
let initialModelScaleOnPinchStart = 1;
let activePinchTarget = null; // The model being pinched

// Interaction state flags
let modelSelectionJustHappenedInPointerDown = false; // Flag to prevent immediate action on tap-select
let previousCanvasWidth = 0; // For resize handling

//==============================================================================
// DOM ELEMENT CACHE
//==============================================================================
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
    deleteSelectedButton: document.getElementById('delete-selected-model-button'),
};

//==============================================================================
// APPLICATION INITIALIZATION
//==============================================================================
function initApp() {
    // Ensure essential DOM elements are present
    const essentialElementIDs = [
        'canvas', 'loadingOverlay', 'noModelMessage', 'modelUrlInput', 'loadUrlButton',
        'expressionsContainer', 'motionsContainer', 'hitAreasContainer', 'deleteSelectedButton',
    ];
    for (const id of essentialElementIDs) {
        if (!DOMElements[id]) {
            console.error(
                `%cFatal Error:%c Essential UI element '${id}' not found. Application cannot start.`,
                "color: white; background: #e74c3c; font-weight: bold; padding:2px 4px; border-radius:2px;",
                "color: #e74c3c; font-weight: bold;"
            );
            return;
        }
    }

    try {
        app = new PIXI.Application({
            view: DOMElements.canvas,
            autoStart: true,
            resizeTo: DOMElements.canvas.parentElement, // Auto-resize with parent
            backgroundColor: CONFIG.BACKGROUND_COLOR,
            antialias: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });
        previousCanvasWidth = app.renderer.width;
        app.renderer.on('resize', handleCanvasResize);

        // Initialize selection outline graphics
        selectionOutline = new PIXI.Graphics();
        selectionOutline.visible = false;
        app.stage.addChild(selectionOutline);

        // Ticker for continuous updates like selection outline
        app.ticker.add(() => {
            if (selectedModel && selectionOutline.visible) {
                updateSelectionOutline(selectedModel);
                // Ensure outline is always on top of models but below UI overlays if any
                if (app.stage.children.includes(selectionOutline)) {
                    app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
                }
            }
        });
        console.log(
            "%cLive2D Viewer%c initialized.",
            "color: white; background: #6c5ce7; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #6c5ce7; font-weight: bold;"
        );
    } catch (error) {
        console.error(
            "%cFatal Error:%c Failed to create PIXI Application.",
            "color: white; background: #e74c3c; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #e74c3c; font-weight: bold;",
            error
        );
        return;
    }

    // Setup event listeners for UI controls
    DOMElements.loadSelectedButton?.addEventListener('click', loadSelectedModelFromDropdown);
    DOMElements.loadUrlButton.addEventListener('click', loadModelFromUrlInput);
    DOMElements.showHitAreasCheckbox?.addEventListener('change', toggleHitAreaFramesVisibility);
    DOMElements.deleteSelectedButton.addEventListener('click', deleteSelectedModel);

    setupModelInteractions();

    // Initial UI state
    updateUIVisibility(false); // No models initially
    clearAllControlPanelsAndState();
    updateDeleteButtonState();
}

//==============================================================================
// MODEL LOADING FUNCTIONS
//==============================================================================
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

async function loadModelFromUrlInput() {
    const modelUrl = DOMElements.modelUrlInput.value.trim();
    if (!modelUrl) {
        alert('Please enter a model URL.');
        DOMElements.modelUrlInput.focus();
        return;
    }
    // Basic URL validation
    if (!modelUrl.startsWith('http://') && !modelUrl.startsWith('https://')) {
        alert('Please enter a valid HTTP or HTTPS URL.');
        DOMElements.modelUrlInput.focus();
        return;
    }
    await loadModel(modelUrl);
}

/**
 * Main function to load a Live2D model from a given source (URL or file path).
 * This function is also exposed globally as window.loadLive2DModel for external calls (e.g., repo explorer).
 * @param {string} source - The URL or path to the model's model.json or .model3.json file.
 */
async function loadModel(source) {
    if (!app?.stage) {
        console.error("PIXI Application not ready for model loading.");
        alert("Error: Application not initialized properly. Cannot load model.");
        return;
    }

    updateUIVisibility(models.length > 0, true); // Show loading state
    let newModel = null;

    try {
        newModel = await PIXI.live2d.Live2DModel.from(source, {
            onError: (e) => {
                // This allows PIXI.live2d.Live2DModel.from to propagate the error
                throw new Error(`Live2DModel.from failed: ${e.message || 'Unknown error'}`);
            },
        });

        newModel.appModelId = modelIdCounter++; // Assign a unique ID for internal tracking
        console.log(
            `%cModel loaded:%c ${newModel.internalModel?.settings?.name || `Model ${newModel.appModelId}`}`,
            "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #00b894; font-weight: bold;"
        );

        app.stage.addChild(newModel);
        models.push(newModel);

        // Ensure selection outline is rendered above the new model if it exists
        if (selectionOutline && app.stage.children.includes(selectionOutline)) {
            app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
        }

        // Short delay to allow PIXI to process the new model, especially its bounds
        await new Promise(resolve => setTimeout(resolve, 150));

        fitAndPositionNewModel(newModel);
        newModel.cursor = 'grab'; // Set cursor for draggable interaction
        setSelectedModel(newModel); // Select the newly loaded model

        updateUIVisibility(models.length > 0, false); // Hide loading state
        console.log(
            `%cModel setup complete.%c Total models: ${models.length}`,
            "color: white; background: #0984e3; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #0984e3; font-weight: bold;"
        );
    } catch (error) {
        console.error(
            "%cError:%c during model loading or setup:",
            "color: white; background: #e17055; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #e17055; font-weight: bold;",
            error
        );

        // Cleanup partially loaded model if an error occurred
        if (newModel) {
            if (newModel.parent) newModel.parent.removeChild(newModel);
            const indexInModels = models.findIndex(m => m.appModelId === newModel.appModelId);
            if (indexInModels > -1) models.splice(indexInModels, 1);
            try {
                newModel.destroy({ children: true, texture: false, baseTexture: false });
            } catch (e) {
                console.warn("Error destroying partially loaded model:", e);
            }
        }

        // Reselect a model if the failed one was selected, or if no model was selected and others exist
        if (selectedModel && newModel && selectedModel.appModelId === newModel.appModelId) {
            setSelectedModel(models.length > 0 ? models[models.length - 1] : null);
        } else if (!selectedModel && models.length > 0) {
            setSelectedModel(models[models.length - 1]);
        }

        updateUIVisibility(models.length > 0, false); // Update UI based on remaining models
    }
}
// Expose loadModel globally for repoexplorer.js
window.loadLive2DModel = loadModel;

//==============================================================================
// MODEL MANAGEMENT (SELECTION, DELETION, POSITIONING)
//==============================================================================
function setSelectedModel(modelToSelect) {
    // Remove hit area frames from previously selected model if any
    if (hitAreaFrames && hitAreaFrames.parent) {
        hitAreaFrames.parent.removeChild(hitAreaFrames);
    }

    selectedModel = modelToSelect;

    if (selectedModel) {
        // Add hit area frames to the new selected model
        if (PIXI.live2d.HitAreaFrames) { // Check if the feature is available in the pixi-live2d-display version
            if (!hitAreaFrames) {
                hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            }
            selectedModel.addChild(hitAreaFrames);
            hitAreaFrames.visible = DOMElements.showHitAreasCheckbox?.checked ?? false;
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = false;
        } else {
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = true;
            console.warn('HitAreaFrames feature is unavailable in this version of pixi-live2d-display.');
        }

        // Bring selected model to the top of the stage (visual stacking)
        if (app && app.stage && selectedModel.parent === app.stage) {
            app.stage.setChildIndex(selectedModel, app.stage.children.length - 1);
        }
        console.log(
            `%cModel selected:%c ${selectedModel.appModelId}`,
            "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #00b894; font-weight: bold;"
        );

        // Manage selection outline
        if (selectionOutline) {
            selectionOutline.visible = true;
            updateSelectionOutline(selectedModel);
            // Ensure outline is above the selected model
            if (app.stage.children.includes(selectionOutline)) {
                app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
            } else {
                app.stage.addChild(selectionOutline); // As a safeguard
            }
        }
    } else { // No model selected
        if (DOMElements.showHitAreasCheckbox) {
            DOMElements.showHitAreasCheckbox.checked = false;
            DOMElements.showHitAreasCheckbox.disabled = true;
        }
        if (selectionOutline) {
            selectionOutline.visible = false;
        }
        console.log(
            "%cNo model selected.",
            "color: #636e72; font-style: italic;"
        );
    }

    updateControlPanelForSelectedModel();
    updateDeleteButtonState();
}

function deleteSelectedModel() {
    if (!selectedModel) {
        alert("No model selected to delete.");
        return;
    }

    const modelToDelete = selectedModel;
    console.log(
        `%cDeleting model:%c ${modelToDelete.appModelId}`,
        "color: white; background: #fdcb6e; font-weight: bold; padding:2px 4px; border-radius:2px;",
        "color: #fdcb6e; font-weight: bold;"
    );

    // Remove from PIXI stage
    if (modelToDelete.parent) {
        modelToDelete.parent.removeChild(modelToDelete);
    }

    // Remove from internal models array
    const modelIndex = models.findIndex(m => m.appModelId === modelToDelete.appModelId);
    if (modelIndex > -1) {
        models.splice(modelIndex, 1);
    }

    // Clean up hit area frames if they were attached to this model
    if (hitAreaFrames && hitAreaFrames.parent === modelToDelete) {
        modelToDelete.removeChild(hitAreaFrames);
    }

    // Get all textures used by this model
    const texturesToCheck = [];
    if (modelToDelete.textures && Array.isArray(modelToDelete.textures)) {
        texturesToCheck.push(...modelToDelete.textures);
    } else if (modelToDelete.texture) {
        texturesToCheck.push(modelToDelete.texture);
    }

    // Check if any other model uses the same texture(s)
    let shouldDestroyTexture = false;
    if (texturesToCheck.length > 0) {
        shouldDestroyTexture = texturesToCheck.every(tex => {
            // If no other model uses this texture, we can destroy it
            return !models.some(otherModel => {
                if (otherModel === modelToDelete) return false;
                if (otherModel.textures && Array.isArray(otherModel.textures)) {
                    return otherModel.textures.includes(tex);
                } else if (otherModel.texture) {
                    return otherModel.texture === tex;
                }
                return false;
            });
        });
    }

    // Destroy the model (releases WebGL resources)
    modelToDelete.destroy({
        children: true,
        texture: shouldDestroyTexture,
        baseTexture: shouldDestroyTexture
    });
    console.log(
        `%cDestroyed model%c texture/baseTexture: ${shouldDestroyTexture ? "true (last of kind)" : "false (shared)"}`,
        "color: white; background: #d35400; font-weight: bold; padding:2px 4px; border-radius:2px;",
        "color: #d35400; font-weight: bold;"
    );

    // Select the last model in the list, or null if no models are left
    const nextSelected = models.length > 0 ? models[models.length - 1] : null;
    setSelectedModel(nextSelected);
    updateUIVisibility(models.length > 0, false);
    console.log(
        `%cModel deleted.%c Remaining models: ${models.length}`,
        "color: white; background: #636e72; font-weight: bold; padding:2px 4px; border-radius:2px;",
        "color: #636e72; font-weight: bold;"
    );
}

function fitAndPositionNewModel(model) {
    if (!model || !app?.renderer || !DOMElements.canvas.parentElement) {
        console.warn("fitAndPositionNewModel: Pre-conditions not met (model, renderer, or canvas parent missing).");
        return;
    }

    const parent = DOMElements.canvas.parentElement;
    const viewWidth = parent.clientWidth;
    const viewHeight = parent.clientHeight;

    model.updateTransform();

    // Get model's original dimensions (before any scaling)
    const modelWidth = model.width / (model.scale.x || 1);
    const modelHeight = model.height / (model.scale.y || 1);

    if (!modelWidth || !modelHeight || modelWidth <= 0 || modelHeight <= 0) {
        console.warn("fitAndPositionNewModel: Invalid model dimensions (width or height is zero or negative). Defaulting position.", modelWidth, modelHeight);
        // Fallback positioning if dimensions are problematic
        model.scale.set(0.1); // Arbitrary small scale
        model.anchor.set(0.5, 0.5); // Center anchor
        model.position.set(viewWidth / 2, viewHeight / 2); // Center in view
        return;
    }

    // Calculate scale to fit model within view, maintaining aspect ratio
    const scaleX = (viewWidth * CONFIG.MODEL_FIT_PADDING) / modelWidth;
    const scaleY = (viewHeight * CONFIG.MODEL_FIT_PADDING) / modelHeight;
    const scale = Math.min(scaleX, scaleY);

    model.scale.set(scale);
    model.anchor.set(0.5, 0.5); // Set anchor to the center of the model
    model.position.set(viewWidth / 2, viewHeight / 2); // Position model in the center of the view
}

//==============================================================================
// UI UPDATE FUNCTIONS
//==============================================================================
function updateUIVisibility(hasModels, isLoading = false) {
    if (DOMElements.loadingOverlay) {
        DOMElements.loadingOverlay.style.display = isLoading ? 'flex' : 'none';
    }
    if (DOMElements.noModelMessage) {
        DOMElements.noModelMessage.style.display = !hasModels && !isLoading ? 'flex' : 'none';
    }
}

function updateDeleteButtonState() {
    if (DOMElements.deleteSelectedButton) {
        DOMElements.deleteSelectedButton.disabled = !selectedModel || models.length === 0;
    }
}

function updateControlPanelForSelectedModel() {
    if (selectedModel) {
        populateMotionControls(selectedModel);
        populateExpressionControls(selectedModel);
        populateHitAreaControls(selectedModel);
    } else {
        clearIndividualControlPanels(); // Clear panels if no model is selected
    }
}

function clearIndividualControlPanels() {
    const noModelSelectedMessage = '<p class="no-content-message">No model selected</p>';
    if (DOMElements.expressionsContainer) DOMElements.expressionsContainer.innerHTML = noModelSelectedMessage;
    if (DOMElements.motionsContainer) DOMElements.motionsContainer.innerHTML = noModelSelectedMessage;
    if (DOMElements.hitAreasContainer) DOMElements.hitAreasContainer.innerHTML = noModelSelectedMessage;
}

function clearAllControlPanelsAndState() {
    setSelectedModel(null); // This will trigger clearing individual panels
}

//==============================================================================
// CONTROL PANEL POPULATION
//==============================================================================
function createControlButton(text, title, onClick, baseClassName, specificClassName = '') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `${baseClassName} ${specificClassName}`.trim();
    button.textContent = text;
    button.title = title;
    button.onclick = onClick;
    return button;
}

function setActiveButton(container, activeButton, highlightDurationMs = 0) {
    if (!container) return;
    // Remove 'active' class from all buttons in the container
    container.querySelectorAll('.active').forEach(btn => btn.classList.remove('active'));
    if (activeButton) {
        activeButton.classList.add('active');
        // If a duration is provided, remove 'active' class after timeout (for temporary highlights)
        if (highlightDurationMs > 0) {
            setTimeout(() => {
                activeButton.classList.remove('active');
            }, highlightDurationMs);
        }
    }
}

function setNoContentMessage(container, contentType) {
    if (container) {
        const hasContent = Array.from(container.children).some(child => !child.classList.contains('no-content-message'));
        const messageElement = container.querySelector('.no-content-message');

        if (!hasContent && !messageElement) { // No content and no message exists, add message
            container.innerHTML = `<p class="no-content-message">No ${contentType} available</p>`;
        } else if (hasContent && messageElement) { // Content exists and message exists, remove message
            messageElement.remove();
        } else if (!hasContent && messageElement) { // No content but message exists, update text (e.g., if model changes)
            messageElement.textContent = `No ${contentType} available`;
        }
    }
}

function populateMotionControls(model) {
    const container = DOMElements.motionsContainer;
    if (!container) return;
    container.innerHTML = ''; // Clear previous controls

    if (!model) { setNoContentMessage(container, 'motions (No model selected)'); return; }

    const motionManager = model.internalModel?.motionManager;
    const definitions = motionManager?.definitions;

    if (!definitions || Object.keys(definitions).length === 0) {
        setNoContentMessage(container, 'motions');
        return;
    }

    let motionButtonsCreated = 0;
    Object.keys(definitions).sort().forEach(group => { // Sort motion groups alphabetically
        definitions[group]?.forEach((motionDef, index) => {
            // Try to derive a user-friendly name
            const pathName = motionDef?.File?.split(/[/\\]/).pop()?.replace(/\.(motion3\.json|mtn)$/i, '');
            const motionName = motionDef?.Name || pathName || `${group} ${index + 1}`;

            const btn = createControlButton(motionName, `Play Motion: ${motionName}`, () => {
                try {
                    // Stop all motions before playing the next one
                    model.internalModel?.motionManager?.stopAllMotions?.();
                    model.motion(group, index); // Play the motion
                    setActiveButton(container, btn, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION); // Highlight button briefly
                    console.log(
                        `%cMotion%c on model ${model.appModelId}: ${group}[${index}] ('${motionName}')`,
                        "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
                        "color: #00b894; font-weight: bold;"
                    );
                } catch (e) {
                    console.error(
                        `%cError%c playing motion on model ${model.appModelId}:`,
                        "color: white; background: #e17055; font-weight: bold; padding:2px 4px; border-radius:2px;",
                        "color: #e17055; font-weight: bold;",
                        e
                    );
                    alert(`Motion error: ${e.message}`);
                }
            }, 'feature-btn', 'motion-btn');
            container.appendChild(btn);
            motionButtonsCreated++;
        });
    });

    if (motionButtonsCreated === 0) setNoContentMessage(container, 'motions');
    else { const msg = container.querySelector('.no-content-message'); if (msg) msg.remove(); }
}

function populateExpressionControls(model) {
    const container = DOMElements.expressionsContainer;
    if (!container) return;
    container.innerHTML = '';

    if (!model) { setNoContentMessage(container, 'expressions (No model selected)'); return; }

    // Handle different structures for expression definitions (array vs object)
    const rawExpressions = model.internalModel?.expressions ?? model.internalModel?.settings?.expressions;
    let expressionList = [];

    if (Array.isArray(rawExpressions)) {
        expressionList = rawExpressions;
    } else if (typeof rawExpressions === 'object' && rawExpressions !== null) {
        // Convert object to array of { Name, File } objects
        expressionList = Object.entries(rawExpressions).map(([key, value]) => ({
            Name: key,
            File: typeof value === 'string' ? value : value?.File // Handle cases where value is just filepath or an object
        }));
    }

    if (expressionList.length === 0) {
        setNoContentMessage(container, 'expressions');
        return;
    }

    let expressionsCreated = 0;
    expressionList.forEach((expDef, index) => {
        const expressionName = expDef.Name || expDef.name || `Expression ${index + 1}`; // Use .Name or .name
        const btn = createControlButton(expressionName, `Set Expression: ${expressionName}`, () => {
            try {
                model.expression(expressionName); // Set the expression
                setActiveButton(container, btn, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION); // Highlight briefly
                console.log(
                    `%cExpression%c on model ${model.appModelId}: '${expressionName}'`,
                    "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
                    "color: #00b894; font-weight: bold;"
                );
            } catch (e) {
                console.error(
                    `%cError%c setting expression on model ${model.appModelId}:`,
                    "color: white; background: #e17055; font-weight: bold; padding:2px 4px; border-radius:2px;",
                    "color: #e17055; font-weight: bold;",
                    e
                );
                alert(`Expression error: ${e.message}`);
            }
        }, 'feature-btn', 'expression-btn');
        container.appendChild(btn);
        expressionsCreated++;
    });
    if (expressionsCreated === 0) setNoContentMessage(container, 'expressions');
    else { const msg = container.querySelector('.no-content-message'); if (msg) msg.remove(); }
}

function populateHitAreaControls(model) {
    const container = DOMElements.hitAreasContainer;
    if (!container) return;
    container.innerHTML = '';

    if (!model) { setNoContentMessage(container, 'hit areas (No model selected)'); return; }

    const hitAreaDefs = model.internalModel?.settings?.hitAreas;
    if (!hitAreaDefs || hitAreaDefs.length === 0) {
        setNoContentMessage(container, 'hit areas');
        return;
    }

    let validHitAreasFound = 0;
    hitAreaDefs.forEach(hitAreaDef => {
        // Support both lowercase and capitalized property names
        const name = hitAreaDef.name || hitAreaDef.Name;
        const id = hitAreaDef.id || hitAreaDef.Id;
        // Use 'name' if available and non-empty, otherwise fallback to 'id'
        const hitAreaName = (name && name.trim() !== "") ? name : id;
        if (!hitAreaName) { // Skip if no identifiable name or id
            console.warn(
                "%cHit area found with no name or id:%c",
                "color: white; background: #fdcb6e; font-weight: bold; padding:2px 4px; border-radius:2px;",
                "color: #fdcb6e; font-weight: bold;",
                hitAreaDef
            );
            return;
        }
        validHitAreasFound++;
        const btn = createControlButton(hitAreaName, `Simulate Tap: ${hitAreaName}`,
            () => simulateTapOnHitArea(model, hitAreaName, btn), // Pass button for direct highlight
            'feature-btn', 'hit-area-btn');
        container.appendChild(btn);
    });
    if (validHitAreasFound === 0) setNoContentMessage(container, 'hit areas (none valid)');
    else { const msg = container.querySelector('.no-content-message'); if (msg) msg.remove(); }
}

//==============================================================================
// HIT AREA AND SELECTION OUTLINE VISUALIZATION
//==============================================================================
function toggleHitAreaFramesVisibility() {
    if (!DOMElements.showHitAreasCheckbox) return;
    const isChecked = DOMElements.showHitAreasCheckbox.checked;
    if (hitAreaFrames && selectedModel) {
        hitAreaFrames.visible = isChecked;
        console.log(
            `%cHit Area Frames%c for model ${selectedModel.appModelId} visibility set to: ${isChecked}`,
            "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #00b894; font-weight: bold;"
        );
    }
}

function updateSelectionOutline(model) {
    if (!selectionOutline || !model || !model.getBounds) return;

    selectionOutline.clear(); // Clear previous drawing
    const bounds = model.getBounds(false); // Get local bounds of the model

    if (bounds.width > 0 && bounds.height > 0) { // Only draw if valid bounds
        selectionOutline.lineStyle(
            CONFIG.SELECTION_OUTLINE_THICKNESS,
            CONFIG.SELECTION_OUTLINE_COLOR,
            CONFIG.SELECTION_OUTLINE_ALPHA, // Alpha for the line itself
            0.5, // Alignment (0.5 for center)
            true // Native lines
        );
        selectionOutline.drawRoundedRect(
            bounds.x, bounds.y,
            bounds.width, bounds.height,
            CONFIG.SELECTION_OUTLINE_CORNER_RADIUS
        );
    }
}

//==============================================================================
// CANVAS AND RENDERER HANDLERS
//==============================================================================
function handleCanvasResize(newWidth, newHeight) {
    // Reposition the selected model to the center if width changes
    if (selectedModel && app?.renderer) {
        if (newWidth !== previousCanvasWidth) { // Only adjust if width actually changed
            selectedModel.position.x = newWidth / 2;
        }
    }
    previousCanvasWidth = newWidth; // Update for next comparison
}

//==============================================================================
// INTERACTION HELPERS (POINTER MATH)
//==============================================================================
function getDistance(p1, p2) { return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)); }
function getMidpoint(p1, p2) { return new PIXI.Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2); }

//==============================================================================
// MODEL INTERACTION SETUP (DRAG, ZOOM, TAP, PINCH)
//==============================================================================
function setupModelInteractions() {
    if (!app?.stage) {
        console.error("Cannot setup interactions: PIXI Application stage not available.");
        return;
    }
    app.stage.interactive = true;
    app.stage.hitArea = app.screen; // Make the entire stage interactive

    // Pointer events for mouse and touch
    app.stage.on('pointerdown', handlePointerDown);
    app.stage.on('pointermove', handlePointerMove);
    app.stage.on('pointerup', handlePointerRelease);
    app.stage.on('pointerupoutside', handlePointerRelease); // Handle release outside canvas
    app.stage.on('pointertap', handleStageTap); // For tap interactions

    // Wheel event for zooming (mouse)
    DOMElements.canvas.addEventListener('wheel', handleModelZoom, { passive: false }); // passive:false to allow preventDefault
}

//==============================================================================
// POINTER EVENT HANDLERS
//==============================================================================
function handlePointerDown(event) {
    if (!event.data || !app?.renderer) return; // Guard against missing data

    activePointers[event.data.pointerId] = event.data.global.clone(); // Store pointer position
    modelSelectionJustHappenedInPointerDown = false;
    const numActivePointers = Object.keys(activePointers).length;
    wasDragging = false; // Reset drag flag for tap detection

    // Determine if the pointer is down on a model
    let downOnModel = null;
    // Iterate backwards to pick top-most model
    for (let i = app.stage.children.length - 1; i >= 0; i--) {
        const child = app.stage.children[i];
        if (child instanceof PIXI.live2d.Live2DModel && models.includes(child)) {
            // Use PIXI's hitTest for accurate detection
            if (app.renderer.plugins.interaction.hitTest(event.data.global, child)) {
                downOnModel = child;
                break;
            }
        }
    }

    if (numActivePointers === 1) { // Single pointer (drag or tap select)
        if (downOnModel) {
            if (selectedModel !== downOnModel) {
                setSelectedModel(downOnModel);
                modelSelectionJustHappenedInPointerDown = true; // Flag that selection occurred in this event
            }
            activeDragTarget = downOnModel;
            isDragging = true;
            isPinching = false; // Ensure not pinching
            activeDragTarget.cursor = 'grabbing'; // Update cursor

            // Calculate offset for smooth dragging
            const pointerInModelParent = activeDragTarget.parent.toLocal(event.data.global, null, undefined, true);
            dragStartOffset.x = pointerInModelParent.x - activeDragTarget.x;
            dragStartOffset.y = pointerInModelParent.y - activeDragTarget.y;
        } else {
            // Clicked on empty stage area
            isDragging = false;
            activeDragTarget = null;
        }
    } else if (numActivePointers === 2 && selectedModel) { // Two pointers (pinch zoom/pan)
        activePinchTarget = selectedModel; // Pinch operates on the currently selected model
        isDragging = false; // Stop single-pointer dragging if it was active
        if (activeDragTarget) {
            activeDragTarget.cursor = 'grab'; // Reset cursor if it was grabbing
            activeDragTarget = null;
        }
        isPinching = true;
        wasDragging = true; // Pinching implies movement, so set wasDragging
        if (activePinchTarget) activePinchTarget.cursor = 'default';

        const pointers = Object.values(activePointers);
        initialPinchDistance = getDistance(pointers[0], pointers[1]);
        initialPinchMidpoint = getMidpoint(pointers[0], pointers[1]); // Midpoint in global stage coordinates
        initialModelScaleOnPinchStart = activePinchTarget.scale.x; // Assume uniform scale
    }
}

function handlePointerMove(event) {
    if (!event.data) return;

    // Update stored pointer position if it's an active one
    if (activePointers[event.data.pointerId]) {
        activePointers[event.data.pointerId] = event.data.global.clone();
    } else {
        return;
    }

    const numActivePointers = Object.keys(activePointers).length;

    if (isPinching && activePinchTarget && numActivePointers === 2) {
        wasDragging = true; // Movement occurred
        const pointers = Object.values(activePointers);
        const currentPinchDistance = getDistance(pointers[0], pointers[1]);

        if (initialPinchDistance > 0) { // Avoid division by zero
            const scaleFactor = currentPinchDistance / initialPinchDistance;
            let newScale = initialModelScaleOnPinchStart * scaleFactor;
            newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM)); // Clamp scale

            if (newScale !== activePinchTarget.scale.x) {
                // Zoom relative to the pinch midpoint
                const stagePointerPos = initialPinchMidpoint; // Midpoint where pinch started
                const modelLocalPointerPos = activePinchTarget.toLocal(stagePointerPos, undefined, undefined, true);

                activePinchTarget.scale.set(newScale); // Apply new scale

                // Reposition model to keep the pinch midpoint stationary relative to the model
                const newGlobalPointerPosFromModel = activePinchTarget.toGlobal(modelLocalPointerPos, undefined, true);
                activePinchTarget.x -= (newGlobalPointerPosFromModel.x - stagePointerPos.x);
                activePinchTarget.y -= (newGlobalPointerPosFromModel.y - stagePointerPos.y);
            }
        }
    } else if (isDragging && activeDragTarget && numActivePointers === 1 && activePointers[event.data.pointerId]) {
        wasDragging = true; // Movement occurred
        const pointerInModelParent = activeDragTarget.parent.toLocal(event.data.global, null, undefined, true);
        activeDragTarget.position.set(
            pointerInModelParent.x - dragStartOffset.x,
            pointerInModelParent.y - dragStartOffset.y
        );
    }
}

function handlePointerRelease(event) {
    const releasedPointerId = event.data.pointerId;
    if (activePointers[releasedPointerId]) delete activePointers[releasedPointerId]; // Remove released pointer
    const numActivePointers = Object.keys(activePointers).length;

    if (isPinching) {
        isPinching = false;
        if (activePinchTarget) activePinchTarget.cursor = 'grab'; // Reset cursor
        activePinchTarget = null;
        initialModelScaleOnPinchStart = 1; // Reset
    }
    
    if (isDragging) {
        isDragging = false;
        if (activeDragTarget) activeDragTarget.cursor = 'grab'; // Reset cursor
        activeDragTarget = null;
    }

    // If transitioning from pinch (2 pointers) to drag (1 pointer)
    if (numActivePointers === 1 && !isDragging) { // Check !isDragging to ensure not already dragging
        const remainingPointerGlobalPos = Object.values(activePointers)[0];
        // Check if the remaining pointer is over a model to start dragging it
        let hitModel = null;
        for (let i = app.stage.children.length - 1; i >= 0; i--) {
            const child = app.stage.children[i];
            if (child instanceof PIXI.live2d.Live2DModel && models.includes(child) && app.renderer.plugins.interaction.hitTest(remainingPointerGlobalPos, child)) {
                hitModel = child;
                break;
            }
        }

        if (hitModel) {
            if (selectedModel !== hitModel) {
                setSelectedModel(hitModel);
                modelSelectionJustHappenedInPointerDown = false;
            }
            isDragging = true;
            activeDragTarget = hitModel;
            activeDragTarget.cursor = 'grabbing';
            const pointerInModelParent = activeDragTarget.parent.toLocal(remainingPointerGlobalPos, null, undefined, true);
            dragStartOffset.x = pointerInModelParent.x - activeDragTarget.x;
            dragStartOffset.y = pointerInModelParent.y - activeDragTarget.y;
        } else {
             // Remaining pointer is not over a model
             isDragging = false;
             activeDragTarget = null;
        }
    } else if (numActivePointers === 0) { // All pointers released
        isDragging = false;
        isPinching = false;
        if (activeDragTarget) activeDragTarget.cursor = 'grab';
        activeDragTarget = null;
        if (activePinchTarget) activePinchTarget.cursor = 'grab';
        activePinchTarget = null;
    }
}

function handleModelZoom(event) { 
    if (!selectedModel || !app?.renderer) return;
    event.preventDefault();
    const delta = event.deltaY;
    const zoomDirection = delta < 0 ? 1 : -1;
    const zoomIncrement = Math.exp(zoomDirection * CONFIG.ZOOM_SENSITIVITY);
    const currentScale = selectedModel.scale.x;
    let newScale = currentScale * zoomIncrement;
    newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM));
    if (newScale === currentScale) return;

    const pointer = new PIXI.Point(); 
    app.renderer.plugins.interaction.mapPositionToPoint(pointer, event.clientX, event.clientY);
    const stagePointerPos = app.stage.toLocal(pointer, undefined, undefined, true); 
    const modelLocalPointerPos = selectedModel.toLocal(stagePointerPos, undefined, undefined, true);
    selectedModel.scale.set(newScale);
    const newGlobalPointerPosFromModel = selectedModel.toGlobal(modelLocalPointerPos, undefined, true);
    selectedModel.x -= (newGlobalPointerPosFromModel.x - stagePointerPos.x);
    selectedModel.y -= (newGlobalPointerPosFromModel.y - stagePointerPos.y);
}

function handleStageTap(event) {
    // If a drag or pinch just ended, don't interpret this as a tap
    if (wasDragging || isDragging || isPinching) {
        wasDragging = false; // Reset flag for next interaction
        return;
    }
    if (!event.data) return;

    let tappedModelInstance = null;
    let hitAreaNamesOnTappedModel = [];

    // Check for tap on any model, prioritizing hit areas
    // Iterate backwards to check top-most models first
    for (let i = app.stage.children.length - 1; i >= 0; i--) {
        const modelInstance = app.stage.children[i];
        if (!(modelInstance instanceof PIXI.live2d.Live2DModel) || !models.includes(modelInstance)) {
            continue; // Skip non-Live2D models or models not in our managed list
        }

        // Check for hit on specific hit areas first
        const currentHitAreas = modelInstance.hitTest(event.data.global.x, event.data.global.y);
        if (currentHitAreas.length > 0) {
            tappedModelInstance = modelInstance;
            hitAreaNamesOnTappedModel = currentHitAreas;
            break; // Found a model with a hit area
        }

        // If no specific hit area, check if tap is within model's general bounds
        const modelBounds = modelInstance.getBounds();
        if (modelBounds.contains(event.data.global.x, event.data.global.y)) {
            tappedModelInstance = modelInstance;
            break; // Found a model by bounds
        }
    }

    if (tappedModelInstance) {
        if (modelSelectionJustHappenedInPointerDown && selectedModel === tappedModelInstance) {
            // If the model was just selected in the pointerdown phase of this tap,
            console.log(
                `%cModel ${tappedModelInstance.appModelId} was selected by this tap's pointerdown.%c No motion triggered.`,
                "color: white; background: #fdcb6e; font-weight: bold; padding:2px 4px; border-radius:2px;",
                "color: #fdcb6e; font-weight: bold;"
            );
        } else if (selectedModel === tappedModelInstance) {
            // Tapped on an already selected model: trigger interaction (motion)
            console.log(
                `%cInteraction tap%c on selected model ${tappedModelInstance.appModelId}.`,
                "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
                "color: #00b894; font-weight: bold;"
            );
            if (hitAreaNamesOnTappedModel.length > 0) {
                // Randomly select one hit area if multiple are hit
                const chosenHitArea = hitAreaNamesOnTappedModel.length === 1
                    ? hitAreaNamesOnTappedModel[0]
                    : hitAreaNamesOnTappedModel[Math.floor(Math.random() * hitAreaNamesOnTappedModel.length)];
                console.log(
                    `%cTap hit area(s):%c ${hitAreaNamesOnTappedModel.join(', ')} | Chosen: ${chosenHitArea}`,
                    "color: white; background: #fdcb6e; font-weight: bold; padding:2px 4px; border-radius:2px;",
                    "color: #fdcb6e; font-weight: bold;"
                );
                highlightHitAreaButtonsInUI([chosenHitArea]);
                triggerMotionForHitArea(tappedModelInstance, chosenHitArea);
            } else {
                // Tap was on the model's body (bounds) but not a specific hit area
                console.log(
                    `%cBody tap%c on selected model ${tappedModelInstance.appModelId}.`,
                    "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
                    "color: #00b894; font-weight: bold;"
                );
                triggerMotionForHitArea(tappedModelInstance, null); // Or a default 'body' hit area name
            }
        } else {
            // Tapped on a model that wasn't selected: select it
            setSelectedModel(tappedModelInstance);
            console.log(
                `%cModel ${tappedModelInstance.appModelId} newly selected by tap.%c No motion triggered on this tap.`,
                "color: white; background: #0984e3; font-weight: bold; padding:2px 4px; border-radius:2px;",
                "color: #0984e3; font-weight: bold;"
            );
        }
        // Ensure the (now potentially) selected model is on top for rendering
        if (selectedModel === tappedModelInstance && app.stage && selectedModel.parent === app.stage) {
            app.stage.setChildIndex(selectedModel, app.stage.children.length - 1);
        }
    }
    // Reset wasDragging for the next complete interaction cycle
    wasDragging = false;
}

//==============================================================================
// HIT AREA INTERACTION LOGIC
//==============================================================================
function simulateTapOnHitArea(model, hitAreaNameFromButton, buttonElement) {
    if (!model || !hitAreaNameFromButton) return;
    console.log(
        `%cSimulating tap%c on model ${model.appModelId} hit area: '${hitAreaNameFromButton}'`,
        "color: white; background: #fdcb6e; font-weight: bold; padding:2px 4px; border-radius:2px;",
        "color: #fdcb6e; font-weight: bold;"
    );

    // If the model associated with the button isn't currently selected, select it
    if (model !== selectedModel) {
        setSelectedModel(model);
    }

    highlightHitAreaButtonsInUI([hitAreaNameFromButton], buttonElement); // Highlight the clicked button
    triggerMotionForHitArea(model, hitAreaNameFromButton);

    if (hitAreaFrames && hitAreaFrames.parent === model && typeof hitAreaFrames.highlight === 'function') {
        // Find the definition to ensure correct name/id is passed to highlight
        const hitAreaDef = model.internalModel?.settings?.hitAreas.find(
            ha => (ha.name === hitAreaNameFromButton || ha.id === hitAreaNameFromButton)
        );
        if (hitAreaDef) {
            hitAreaFrames.highlight(hitAreaDef.name || hitAreaDef.id); // Use the actual defined name/id
        }
    }
}

function highlightHitAreaButtonsInUI(hitAreaNames, specificButtonToHighlight = null) {
    if (!DOMElements.hitAreasContainer || !selectedModel) return;

    const buttons = DOMElements.hitAreasContainer.querySelectorAll('.hit-area-btn');
    buttons.forEach(button => {
        button.classList.remove('active'); // Clear previous active states
        // If not highlighting a specific button (e.g., tap on model), highlight all matching buttons
        if (!specificButtonToHighlight) {
            const buttonHitAreaName = button.textContent;
            const buttonMatches = hitAreaNames.some(name => name.toLowerCase() === buttonHitAreaName.toLowerCase());
            if (buttonMatches) {
                setTimeout(() => button.classList.remove('active'), CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
                button.classList.add('active');
            }
        }
    });

    // If a specific button was interacted with (e.g., clicked in UI panel)
    if (specificButtonToHighlight) {
        setActiveButton(DOMElements.hitAreasContainer, specificButtonToHighlight, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
    }
}

function triggerMotionForHitArea(model, hitAreaName) {
    if (!model) return;
    const motionManager = model.internalModel?.motionManager;
    if (!motionManager?.definitions || Object.keys(motionManager.definitions).length === 0) {
        console.log(
            `%cNo motion definitions found%c for model ${model.appModelId}.`,
            "color: white; background: #636e72; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #636e72; font-weight: bold;"
        );
        return;
    }

    // Stop all motions before playing the next one
    motionManager.stopAllMotions?.();

    const definedGroupNames = Object.keys(motionManager.definitions);
    let motionPlayed = false;
    const lowerHitAreaName = hitAreaName?.toLowerCase();

    if (lowerHitAreaName) {
        // Prioritize motions directly matching or related to the hit area name
        // Common prefixes: Tap, TapHead, TapBody, HitAreaHead, etc.
        // Try to match group names like 'Tap<HitAreaName>' or '<HitAreaName>'
        const primaryCandidatePatterns = [
            lowerHitAreaName, // Exact match for hit area name if it's a group
            `tap_${lowerHitAreaName}`, `flick_${lowerHitAreaName}`, // Common prefixes
            `hit_${lowerHitAreaName}`, `tap${lowerHitAreaName}` // Variations
        ];
        // If hitAreaName itself has a prefix, try without it
        if (lowerHitAreaName.startsWith('tap_') || lowerHitAreaName.startsWith('flick_') || lowerHitAreaName.startsWith('hit_')) {
            primaryCandidatePatterns.push(lowerHitAreaName.substring(lowerHitAreaName.indexOf('_') + 1));
        } else if (lowerHitAreaName.startsWith('tap') && !lowerHitAreaName.includes('_')) { // e.g. taphead -> head
            primaryCandidatePatterns.push(lowerHitAreaName.substring(3));
        }

        const validPrimaryPatterns = [...new Set(primaryCandidatePatterns.filter(p => p))]; // Unique, non-empty

        // Find actual motion groups in the model that match these patterns
        const actualPrimaryMotionGroups = definedGroupNames.filter(definedGroup =>
            validPrimaryPatterns.some(pattern => definedGroup.toLowerCase().includes(pattern))
        );

        if (actualPrimaryMotionGroups.length > 0) {
            let groupToPlay = actualPrimaryMotionGroups.find(g => validPrimaryPatterns.some(p => g.toLowerCase() === p));
            if (!groupToPlay) {
                groupToPlay = actualPrimaryMotionGroups[Math.floor(Math.random() * actualPrimaryMotionGroups.length)];
            }
            // Pick a random motion index if multiple motions exist in the group
            const motions = motionManager.definitions[groupToPlay];
            let motionIndex = 0;
            if (Array.isArray(motions) && motions.length > 1) {
                motionIndex = Math.floor(Math.random() * motions.length);
            }
            try {
                model.motion(groupToPlay, motionIndex);
                motionPlayed = true;
                console.log(
                    `%cPlaying primary motion%c on model ${model.appModelId}: Group='${groupToPlay}' Index=${motionIndex} for hit='${hitAreaName}'`,
                    "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
                    "color: #00b894; font-weight: bold;"
                );
            } catch (e) {
                console.warn(
                    `%cPrimary motion group '${groupToPlay}' index ${motionIndex} failed%c for ${model.appModelId}:`,
                    "color: white; background: #fdcb6e; font-weight: bold; padding:2px 4px; border-radius:2px;",
                    "color: #fdcb6e; font-weight: bold;",
                    e
                );
            }
        }
    }

    // Fallback to generic tap motions if no specific one played
    if (!motionPlayed) {
        const genericTapGroupCandidates = ['tap', 'idle', 'idletap', 'tapbody'];
        for (const genericGroupCandidate of genericTapGroupCandidates) {
            const matchedGenericGroup = definedGroupNames.find(defined => defined.toLowerCase() === genericGroupCandidate.toLowerCase());
            if (matchedGenericGroup) {
                const motions = motionManager.definitions[matchedGenericGroup];
                let motionIndex = 0;
                if (Array.isArray(motions) && motions.length > 1) {
                    motionIndex = Math.floor(Math.random() * motions.length);
                }
                try {
                    model.motion(matchedGenericGroup, motionIndex);
                    motionPlayed = true;
                    console.log(
                        `%cPlaying generic motion%c on model ${model.appModelId}: Group='${matchedGenericGroup}' Index=${motionIndex} for hit='${hitAreaName || "Body"}'`,
                        "color: white; background: #00b894; font-weight: bold; padding:2px 4px; border-radius:2px;",
                        "color: #00b894; font-weight: bold;"
                    );
                    break;
                } catch (e) {
                    console.warn(
                        `%cGeneric motion group '${matchedGenericGroup}' index ${motionIndex} failed%c for ${model.appModelId}:`,
                        "color: white; background: #fdcb6e; font-weight: bold; padding:2px 4px; border-radius:2px;",
                        "color: #fdcb6e; font-weight: bold;",
                        e
                    );
                }
            }
        }
    }

    if (!motionPlayed) {
        console.log(
            `%cNo suitable motion found%c for hit: '${hitAreaName || '(No specific area)'}' on model ${model.appModelId}.`,
            "color: white; background: #636e72; font-weight: bold; padding:2px 4px; border-radius:2px;",
            "color: #636e72; font-weight: bold;"
        );
    }
}

//==============================================================================
// SCRIPT EXECUTION START
//==============================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOMContentLoaded has already fired
    initApp();
}