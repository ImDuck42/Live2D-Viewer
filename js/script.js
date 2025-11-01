'use strict';

// Make PIXI globally available for extensions
window.PIXI = PIXI;

//==============================================================================
// THEMED LOGGER
//==============================================================================

const LOG_STYLES = {
    'SYSTEM': {
        tag: 'background: #1e90ff; color: white; font-weight: bold; border-radius: 4px 10px 10px 4px; padding: 2px 8px 2px 4px;',
        text: 'background: #4a6a8a; color: white; border-radius: 0 4px 4px 0; padding: 2px 4px 2px 2px; margin-left: -5px;'
    },
    'MODEL': {
        tag: 'background: #8c5eff; color: white; font-weight: bold; border-radius: 4px 10px 10px 4px; padding: 2px 8px 2px 4px;',
        text: 'background: #6c608a; color: white; border-radius: 0 4px 4px 0; padding: 2px 4px 2px 2px; margin-left: -5px;'
    },
    'UI': {
        tag: 'background: #ff67d7; color: white; font-weight: bold; border-radius: 4px 10px 10px 4px; padding: 2px 8px 2px 4px;',
        text: 'background: #8a5c7f; color: white; border-radius: 0 4px 4px 0; padding: 2px 4px 2px 2px; margin-left: -5px;'
    },
    'INTERACTION': {
        tag: 'background: #2ecc71; color: white; font-weight: bold; border-radius: 4px 10px 10px 4px; padding: 2px 8px 2px 4px;',
        text: 'background: #4e8a68; color: white; border-radius: 0 4px 4px 0; padding: 2px 4px 2px 2px; margin-left: -5px;'
    },
    'ERROR': {
        tag: 'background: #e74c3c; color: white; font-weight: bold; border-radius: 4px 10px 10px 4px; padding: 2px 8px 2px 4px;',
        text: 'background: #8a524c; color: #ffc9c5; border-radius: 0 4px 4px 0; padding: 2px 4px 2px 2px; margin-left: -5px;'
    },
    'WARN': {
        tag: 'background: #f1c40f; color: black; font-weight: bold; border-radius: 4px 10px 10px 4px; padding: 2px 8px 2px 4px;',
        text: 'background: #8a7e4d; color: black; border-radius: 0 4px 4px 0; padding: 2px 4px 2px 2px; margin-left: -5px;'
    },
};

const log = (context, message, ...args) => {
    const contextUpper = context.toUpperCase();
    const styles = LOG_STYLES[contextUpper] || LOG_STYLES['SYSTEM'];
    console.log(`%c[${contextUpper}]%c ${message}`, styles.tag, styles.text, ...args);
};

//==============================================================================
// CONFIGURATION & CONSTANTS
//==============================================================================

const CONFIG = {
    BACKGROUND_COLOR: 0x1a1a2e,
    MODEL_FIT_PADDING: 0.9,
    ZOOM_SENSITIVITY: 0.075,
    MIN_ZOOM: 0.01,
    MAX_ZOOM: 10.0,
    HIT_AREA_HIGHLIGHT_DURATION: 500, // ms
    SELECTION_OUTLINE_COLOR: 0x8c5eff,
    SELECTION_OUTLINE_THICKNESS: 2,
    SELECTION_OUTLINE_ALPHA: 0.1,
    SELECTION_OUTLINE_CORNER_RADIUS: 10,
};

//==============================================================================
// STATE VARIABLES
//==============================================================================

let app = null;
let models = [];
let selectedModel = null;
let modelIdCounter = 0;
let hitAreaFrames = null;
let selectionOutline = null;

// Interaction state
let isDragging = false;
let wasDragging = false; // Differentiates tap from drag-release
let dragStartOffset = { x: 0, y: 0 };
let activeDragTarget = null;

let isPinching = false;
const activePointers = {};
let initialPinchDistance = 0;
let initialPinchMidpoint = new PIXI.Point();
let initialModelScaleOnPinchStart = 1;
let activePinchTarget = null;

// Flag to prevent triggering a motion on the same tap that selects a model
let modelJustSelected = false;

//==============================================================================
// DOM ELEMENT CACHE
//==============================================================================

const DOM = {
    canvas: document.getElementById('live2d-canvas'),
    loadingOverlay: document.getElementById('loading-overlay'),
    noModelMessage: document.getElementById('no-model-message'),
    modelUrlInput: document.getElementById('model-url-input'),
    loadUrlButton: document.getElementById('load-url-button'),
    showHitAreasCheckbox: document.getElementById('show-hit-areas-checkbox'),
    expressionsContainer: document.getElementById('expressions-container'),
    motionsContainer: document.getElementById('motions-container'),
    hitAreasContainer: document.getElementById('hit-areas-container'),
    deleteSelectedButton: document.getElementById('delete-selected-model-button'),
    modelFilename: document.getElementById('model-filename'),
    // Custom Dropdown Elements
    dropdown: document.getElementById('model-select-dropdown'),
    dropdownSelected: document.getElementById('model-select-dropdown-selected'),
    dropdownList: document.getElementById('model-select-dropdown-list'),
    dropdownHiddenInput: document.getElementById('model-select'),
    loadSelectedButton: document.getElementById('load-selected-button'),
};

//==============================================================================
// APPLICATION INITIALIZATION
//==============================================================================

// Initializes the PIXI application, sets up the stage, and attaches event listeners.
function initializeApplication() {
    if (!DOM.canvas) {
        log('ERROR', "Fatal Error: Canvas element not found. Application cannot start.");
        return;
    }

    try {
        app = new PIXI.Application({
            view: DOM.canvas,
            resizeTo: DOM.canvas.parentElement,
            backgroundColor: CONFIG.BACKGROUND_COLOR,
            antialias: true,
            autoStart: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });

        initializeSelectionOutline();
        app.ticker.add(onTick);

        log('SYSTEM', "Live2D Viewer Initialized Successfully.");
    } catch (error) {
        log('ERROR', "Fatal Error: Failed to create PIXI Application.", error);
        DOM.loadingOverlay.innerHTML = `<p class="loading-text fe-error-message">Error: Could not initialize graphics. Please try a different browser or update your graphics drivers.</p>`;
        DOM.loadingOverlay.style.display = 'flex';
        return;
    }

    setupUIEventListeners();
    setupStageInteractions();
    initializeCustomDropdown();
    handleURLParameters();

    updateUIVisibility();
    updateDeleteButtonState();
}

// Creates and adds the selection outline graphics to the stage.
function initializeSelectionOutline() {
    selectionOutline = new PIXI.Graphics();
    selectionOutline.visible = false;
    app.stage.addChild(selectionOutline);
}

// Main update loop for continuous rendering tasks.
function onTick() {
    if (selectedModel && selectionOutline.visible) {
        updateSelectionOutline(selectedModel);
        // Ensure outline is always rendered on top
        app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
    }
}

// Checks for a 'model' URL parameter and loads it if present.
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelURL = urlParams.get('model');

    if (modelURL) {
        log('SYSTEM', `Found 'model' URL parameter: ${modelURL}`);
        DOM.modelUrlInput.value = modelURL;
        loadModel(modelURL);
        // Clean up the URL
        window.history.replaceState({}, '', window.location.pathname);
    }
}

//==============================================================================
// MODEL LOADING & MANAGEMENT
//==============================================================================

// Main function to load a Live2D model from a source URL.
async function loadModel(source) {
    if (!app?.stage) {
        log('ERROR', "PIXI Application not ready for model loading.");
        alert("Error: Application not initialized properly.");
        return;
    }
    if (!source) {
        alert("Please provide a model URL.");
        return;
    }

    log('MODEL', `Attempting to load model from: ${source}`);
    updateUIVisibility(true);
    let newModel = null;

    try {
        newModel = await PIXI.live2d.Live2DModel.from(source, {
            onError: (e) => {
                throw new Error(`Live2DModel.from failed: ${e.message || 'Unknown error'}`);
            },
        });

        newModel.appModelId = modelIdCounter++;
        app.stage.addChild(newModel);
        models.push(newModel);

        // Short delay to allow PIXI to calculate bounds correctly
        await new Promise(resolve => setTimeout(resolve, 150));

        fitAndPositionNewModel(newModel);
        newModel.cursor = 'grab';
        setSelectedModel(newModel);

        log('MODEL', `Model loaded successfully: ${newModel.internalModel?.settings?.name || `Model ${newModel.appModelId}`}`);
    } catch (error) {
        log('ERROR', `Error loading model from ${source}:`, error);
        alert(`Failed to load model. Please check the URL and console for details.\nError: ${error.message}`);

        if (newModel) {
            if (newModel.parent) newModel.parent.removeChild(newModel);
            const index = models.findIndex(m => m.appModelId === newModel.appModelId);
            if (index > -1) models.splice(index, 1);
            newModel.destroy({ children: true, texture: false, baseTexture: false });
        }

        // If the failed model was selected, select another one
        if (selectedModel === newModel) {
            setSelectedModel(models[models.length - 1] || null);
        }
    } finally {
        updateUIVisibility(false);
    }
}
window.loadLive2DModel = loadModel; // Expose for repoexplorer.js

// Sets the currently selected model and updates the UI accordingly.
function setSelectedModel(model) {
    if (hitAreaFrames?.parent) {
        hitAreaFrames.parent.removeChild(hitAreaFrames);
    }

    selectedModel = model;

    if (selectedModel) {
        log('MODEL', `Selected model ID: ${selectedModel.appModelId}`);
        if (PIXI.live2d.HitAreaFrames) {
            // If we have a hitAreaFrames instance, ensure it's usable; if not, recreate it.
            if (!hitAreaFrames || (typeof hitAreaFrames.destroyed !== 'undefined' && hitAreaFrames.destroyed)) {
                hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            }
            try {
                selectedModel.addChild(hitAreaFrames);
            } catch (err) {
                // If adding the reused instance fails for any reason, create a fresh one and try again.
                log('WARN', 'Failed to add existing hitAreaFrames, recreating a new instance.', err);
                hitAreaFrames = new PIXI.live2d.HitAreaFrames();
                selectedModel.addChild(hitAreaFrames);
            }
            hitAreaFrames.visible = DOM.showHitAreasCheckbox.checked;
        }

        app.stage.setChildIndex(selectedModel, app.stage.children.length - 1);
        selectionOutline.visible = true;
        updateSelectionOutline(selectedModel);
    } else {
        log('MODEL', "Deselected all models.");
        selectionOutline.visible = false;
    }

    updateControlPanel();
    updateDeleteButtonState();
    updateModelFilenameDisplay();
    DOM.showHitAreasCheckbox.disabled = !selectedModel;
}

// Deletes the currently selected model from the stage and memory.
function deleteSelectedModel() {
    if (!selectedModel) return;

    const modelToDelete = selectedModel;
    const modelIndex = models.findIndex(m => m.appModelId === modelToDelete.appModelId);

    if (modelIndex > -1) {
        models.splice(modelIndex, 1);
    }

    if (modelToDelete.parent) {
        // Detach hitAreaFrames from the model-to-delete if it's attached, so it isn't destroyed with the model.
        if (hitAreaFrames?.parent === modelToDelete) {
            hitAreaFrames.parent.removeChild(hitAreaFrames);
        }
        modelToDelete.parent.removeChild(modelToDelete);
    }

    // Check if textures are shared before destroying them
    const shouldDestroyTexture = !models.some(m => m.textures.some(t => modelToDelete.textures.includes(t)));
    modelToDelete.destroy({
        children: true,
        texture: shouldDestroyTexture,
        baseTexture: shouldDestroyTexture
    });

    log('MODEL', `Model ${modelToDelete.appModelId} deleted. Texture destroyed: ${shouldDestroyTexture}`);

    setSelectedModel(models[models.length - 1] || null);
    updateUIVisibility();
}

// Scales and positions a new model to fit nicely in the canvas view.
function fitAndPositionNewModel(model) {
    if (!model || !app?.renderer) return;

    const view = app.renderer.view;
    const viewWidth = view.width / (window.devicePixelRatio || 1);
    const viewHeight = view.height / (window.devicePixelRatio || 1);

    model.updateTransform();
    const modelWidth = model.width / model.scale.x;
    const modelHeight = model.height / model.scale.y;

    if (modelWidth <= 0 || modelHeight <= 0) {
        log('WARN', "fitAndPositionNewModel: Invalid model dimensions. Applying default scale and position.");
        model.scale.set(0.1);
    } else {
        const scaleX = (viewWidth * CONFIG.MODEL_FIT_PADDING) / modelWidth;
        const scaleY = (viewHeight * CONFIG.MODEL_FIT_PADDING) / modelHeight;
        model.scale.set(Math.min(scaleX, scaleY));
    }

    model.anchor.set(0.5, 0.5);
    model.position.set(viewWidth / 2, viewHeight / 2);
    log('MODEL', `Fitted model ${model.appModelId} to view.`);
}

//==============================================================================
// UI UPDATES & CONTROL PANEL
//==============================================================================

// Updates the visibility of the loading overlay and initial message.
function updateUIVisibility(isLoading = false) {
    DOM.loadingOverlay.style.display = isLoading ? 'flex' : 'none';
    DOM.noModelMessage.style.display = models.length === 0 && !isLoading ? 'flex' : 'none';
}

// Enables or disables the delete button based on model selection.
function updateDeleteButtonState() {
    DOM.deleteSelectedButton.disabled = !selectedModel;
}

// Updates the entire control panel based on the selected model.
function updateControlPanel() {
    log('UI', "Updating control panel for selected model.");
    if (selectedModel) {
        populateControls('expressions', selectedModel.internalModel?.expressions ?? selectedModel.internalModel?.settings?.expressions);
        populateControls('motions', selectedModel.internalModel?.motionManager?.definitions);
        populateControls('hitAreas', selectedModel.internalModel?.settings?.hitAreas);
    } else {
        clearControlPanel();
    }
}

// Clears all sections of the control panel.
function clearControlPanel() {
    setNoContentMessage(DOM.expressionsContainer, 'expressions');
    setNoContentMessage(DOM.motionsContainer, 'motions');
    setNoContentMessage(DOM.hitAreasContainer, 'hit areas');
}

// Populates a section of the control panel with buttons.
function populateControls(type, data) {
    const container = DOM[`${type}Container`];
    if (!container) return;
    container.innerHTML = '';

    let items = [];
    switch (type) {
        case 'expressions':
            let expressionList = [];
            if (Array.isArray(data)) {
                expressionList = data;
            } else if (typeof data === 'object' && data !== null) {
                expressionList = Object.entries(data).map(([name, file]) => ({ Name: name, File: file }));
            }
            items = expressionList.map((exp, i) => {
                const expressionName = exp.Name || exp.name || `Expression ${i + 1}`;
                return {
                    name: expressionName,
                    action: () => {
                        log('UI', `Triggering expression: ${expressionName}`);
                        selectedModel.expression(expressionName);
                    }
                };
            });
            break;
        case 'motions':
            const motionCounts = {};
            items = Object.entries(data || {}).flatMap(([group, motions]) =>
                motions.map((motion, index) => {
                    const name = motion.Name || motion.File?.split('/').pop().replace(/\.(motion3\.json|mtn)$/i, '') || group;
                    motionCounts[name] = (motionCounts[name] || 0) + 1;
                    return {
                        group,
                        name,
                        action: () => {
                            const mm = selectedModel.internalModel?.motionManager;
                            mm?.stopAllMotions?.();
                            log('UI', `Triggering motion: Group=${group}, Index=${index}`);
                            selectedModel.motion(group, index);
                        }
                    };
                })
            );
            // Add index to duplicate names
            const seenCounts = {};
            items.forEach(item => {
                if (motionCounts[item.name] > 1) {
                    seenCounts[item.name] = (seenCounts[item.name] || 0) + 1;
                    item.displayName = `${item.name} ${seenCounts[item.name]}`;
                } else {
                    item.displayName = item.name;
                }
            });
            break;
        case 'hitAreas':
            items = (data || []).map(area => {
                const name = area.Name || area.name || area.Id;
                return {
                    name: name,
                    action: (btn) => {
                        log('UI', `Simulating tap on hit area: ${name}`);
                        simulateTapOnHitArea(selectedModel, name, btn);
                    }
                };
            });
            break;
    }

    // Sort items alphabetically by display name
    items.sort((a, b) => (a.displayName || a.name).localeCompare(b.displayName || b.name));

    if (items.length > 0) {
        log('UI', `Populating ${items.length} ${type} controls.`);
        items.forEach(item => {
            const btn = createControlButton(item.displayName || item.name, type, item.action);
            container.appendChild(btn);
        });
    } else {
        log('UI', `No ${type} found for this model.`);
        setNoContentMessage(container, type);
    }
}


// Creates a button for the control panel.
function createControlButton(text, type, onClick) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `feature-btn ${type}-btn`;
    button.textContent = text;
    button.title = `Trigger ${type}: ${text}`;
    button.onclick = () => {
        onClick(button);
        highlightButton(button, DOM[`${type}sContainer`]);
    };
    return button;
}

// Briefly highlights a button in the control panel.
function highlightButton(button, container) {
    if (!container) return;
    container.querySelectorAll('.active').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), CONFIG.HIT_AREA_HIGHLIGHT_DURATION);
}

// Displays a "no content" message in a container.
function setNoContentMessage(container, contentType) {
    if (container) {
        container.innerHTML = `<p class="no-content-message">No ${contentType} available</p>`;
    }
}

// Updates the model filename display in the corner of the canvas.
function updateModelFilenameDisplay() {
    if (!selectedModel) {
        DOM.modelFilename.style.display = 'none';
        return;
    }
    const settings = selectedModel.internalModel?.settings;
    const filename = settings?.url?.split('/').pop() || settings?.model?.split('/').pop() || 'Unknown';
    DOM.modelFilename.textContent = `File: ${filename}`;
    DOM.modelFilename.style.display = 'block';
}

// Draws the selection outline around the given model.
function updateSelectionOutline(model) {
    if (!selectionOutline || !model?.getBounds) return;

    selectionOutline.clear();
    const bounds = model.getBounds(false);

    if (bounds.width > 0 && bounds.height > 0) {
        selectionOutline.lineStyle(
            CONFIG.SELECTION_OUTLINE_THICKNESS,
            CONFIG.SELECTION_OUTLINE_COLOR,
            CONFIG.SELECTION_OUTLINE_ALPHA,
            0.5, // alignment
            true // native lines
        );
        selectionOutline.drawRoundedRect(
            bounds.x, bounds.y,
            bounds.width, bounds.height,
            CONFIG.SELECTION_OUTLINE_CORNER_RADIUS
        );
    }
}

//==============================================================================
// EVENT LISTENERS SETUP
//==============================================================================

// Sets up event listeners for all UI elements.
function setupUIEventListeners() {
    DOM.loadSelectedButton.addEventListener('click', () => loadModel(DOM.dropdownHiddenInput.value));
    DOM.loadUrlButton.addEventListener('click', () => loadModel(DOM.modelUrlInput.value.trim()));
    DOM.showHitAreasCheckbox.addEventListener('change', toggleHitAreaFramesVisibility);
    DOM.deleteSelectedButton.addEventListener('click', deleteSelectedModel);
    DOM.modelFilename.addEventListener('click', () => {
        if (DOM.modelFilename.textContent) {
            navigator.clipboard.writeText(DOM.modelFilename.textContent.replace('File: ', ''));
        }
    });

    // Allow scrolling on the filename area to switch selected model by id
    if (DOM.modelFilename) {
        DOM.modelFilename.addEventListener('wheel', handleModelFilenameScroll, { passive: false });
    }
}

// Sets up interaction listeners on the PIXI stage.
function setupStageInteractions() {
    app.stage.interactive = true;
    app.stage.hitArea = app.screen;

    app.stage.on('pointerdown', handlePointerDown);
    app.stage.on('pointermove', handlePointerMove);
    app.stage.on('pointerup', handlePointerUp);
    app.stage.on('pointerupoutside', handlePointerUp);
    app.stage.on('pointertap', handleStageTap);

    DOM.canvas.addEventListener('wheel', handleCanvasZoom, { passive: false });
}

// Sets up the custom dropdown functionality.
function initializeCustomDropdown() {
    const { dropdown, dropdownSelected, dropdownList, dropdownHiddenInput } = DOM;
    if (!dropdown) return;

    const toggleDropdown = (forceOpen) => {
        const isOpen = forceOpen ?? dropdown.getAttribute('aria-expanded') !== 'true';
        dropdown.setAttribute('aria-expanded', String(isOpen));
        dropdown.classList.toggle('open', isOpen);
    };

    dropdown.addEventListener('click', () => toggleDropdown());
    dropdown.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleDropdown(false);
    });

    dropdownList.querySelectorAll('.custom-dropdown-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownSelected.textContent = option.textContent;
            dropdownHiddenInput.value = option.dataset.value;
            toggleDropdown(false);
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            toggleDropdown(false);
        }
    });
}

//==============================================================================
// INTERACTION HANDLERS
//==============================================================================

function handlePointerDown(event) {
    const globalPos = event.data.global;
    activePointers[event.data.pointerId] = globalPos.clone();
    modelJustSelected = false;
    wasDragging = false;

    const downOnModel = models.slice().reverse().find(model => model.containsPoint(globalPos));

    if (Object.keys(activePointers).length === 1) { // Start of a drag
        if (downOnModel) {
            if (selectedModel !== downOnModel) {
                setSelectedModel(downOnModel);
                modelJustSelected = true;
            }
            isDragging = true;
            activeDragTarget = downOnModel;
            activeDragTarget.cursor = 'grabbing';
            const localPos = activeDragTarget.parent.toLocal(globalPos);
            dragStartOffset = { x: localPos.x - activeDragTarget.x, y: localPos.y - activeDragTarget.y };
            log('INTERACTION', `Drag started on model ${activeDragTarget.appModelId}`);
        }
    } else if (Object.keys(activePointers).length === 2 && selectedModel) { // Start of a pinch
        isDragging = false;
        if (activeDragTarget) activeDragTarget.cursor = 'grab';
        activeDragTarget = null;

        isPinching = true;
        activePinchTarget = selectedModel;
        const pointers = Object.values(activePointers);
        initialPinchDistance = getDistance(pointers[0], pointers[1]);
        initialModelScaleOnPinchStart = activePinchTarget.scale.x;
        log('INTERACTION', `Pinch started on model ${activePinchTarget.appModelId}`);
    }
}

function handlePointerMove(event) {
    if (!event.data.global) return;
    const pointerId = event.data.pointerId;
    if (!activePointers[pointerId]) return;

    activePointers[pointerId] = event.data.global.clone();
    wasDragging = true;

    if (isPinching && activePinchTarget && Object.keys(activePointers).length === 2) {
        const pointers = Object.values(activePointers);
        const currentDistance = getDistance(pointers[0], pointers[1]);
        if (initialPinchDistance > 0) {
            const scaleFactor = currentDistance / initialPinchDistance;
            let newScale = initialModelScaleOnPinchStart * scaleFactor;
            newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM));
            activePinchTarget.scale.set(newScale);
        }
    } else if (isDragging && activeDragTarget) {
        const newPos = activeDragTarget.parent.toLocal(event.data.global);
        activeDragTarget.position.set(newPos.x - dragStartOffset.x, newPos.y - dragStartOffset.y);
    }
}

function handlePointerUp(event) {
    delete activePointers[event.data.pointerId];
    const remainingPointers = Object.keys(activePointers).length;

    if (isPinching && remainingPointers < 2) {
        isPinching = false;
        if (activePinchTarget) {
            log('INTERACTION', `Pinch ended on model ${activePinchTarget.appModelId}`);
            activePinchTarget.cursor = 'grab';
        }
        activePinchTarget = null;
    }

    if (isDragging && remainingPointers < 1) {
        isDragging = false;
        if (activeDragTarget) {
            activeDragTarget.cursor = 'grab';
            log('INTERACTION', `Drag ended on model ${activeDragTarget.appModelId}`);
        }
        activeDragTarget = null;
    }
}

function handleStageTap(event) {
    if (wasDragging || modelJustSelected) {
        log('INTERACTION', "Tap ignored (drag/selection occurred).");
        return;
    }

    if (selectedModel) {
        const hitAreaNames = selectedModel.hitTest(event.data.global.x, event.data.global.y);
        if (hitAreaNames.length > 0) {
            const randomHitArea = hitAreaNames[Math.floor(Math.random() * hitAreaNames.length)];
            log('INTERACTION', `Tap hit on area: ${randomHitArea}`);
            triggerMotionForHitArea(selectedModel, randomHitArea);
        } else {
            log('INTERACTION', "Tap missed model hit areas.");
        }
    }
}

function handleCanvasZoom(event) {
    if (!selectedModel) return;
    event.preventDefault();

    const delta = event.deltaY;
    const zoomFactor = Math.exp((delta < 0 ? 1 : -1) * CONFIG.ZOOM_SENSITIVITY);
    const newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(selectedModel.scale.x * zoomFactor, CONFIG.MAX_ZOOM));

    const pointer = new PIXI.Point(event.clientX, event.clientY);
    const stagePos = app.stage.toLocal(pointer);
    const localPos = selectedModel.toLocal(stagePos);

    selectedModel.scale.set(newScale);

    const newGlobalPos = selectedModel.toGlobal(localPos);
    selectedModel.x -= newGlobalPos.x - stagePos.x;
    selectedModel.y -= newGlobalPos.y - stagePos.y;
}

// Add helper to ensure a model is rendered on top of the stage
function bringModelToFront(model) {
    if (!model || !app?.stage) return;
    try {
        // Move in display list
        app.stage.setChildIndex(model, app.stage.children.length - 1);

        // Ensure selection outline remains on top as well
        if (selectionOutline && selectionOutline.parent === app.stage) {
            app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
        }

        // Reorder the models[] array so hit-testing (which iterates models)
        const idx = models.indexOf(model);
        if (idx > -1 && idx !== models.length - 1) {
            models.splice(idx, 1);
            models.push(model);
        }

        log('SYSTEM', `Brought model ${model.appModelId} to front.`);
    } catch (e) {
        // silently ignore if something goes wrong with indexing
    }
}

// Change selected model when user scrolls over the filename element
function handleModelFilenameScroll(event) {
    if (!models || models.length === 0) return;
    event.preventDefault();

    // Sort models by appModelId (ascending)
    const sorted = models.slice().sort((a, b) => (a.appModelId - b.appModelId));

    // Find current index in sorted list
    let currentIndex = sorted.findIndex(m => m === selectedModel);
    if (currentIndex === -1) {
        currentIndex = (event.deltaY > 0) ? 0 : sorted.length - 1;
    }

    if (event.deltaY < 0) { // scroll up -> select previous (lower id)
        if (currentIndex > 0) {
            const newModel = sorted[currentIndex - 1];
            setSelectedModel(newModel);
            bringModelToFront(newModel);
            log('INTERACTION', `Selected previous model (id=${newModel.appModelId}) via filename scroll.`);
        }
    } else if (event.deltaY > 0) { // scroll down -> select next (higher id)
        if (currentIndex < sorted.length - 1) {
            const newModel = sorted[currentIndex + 1];
            setSelectedModel(newModel);
            bringModelToFront(newModel);
            log('INTERACTION', `Selected next model (id=${newModel.appModelId}) via filename scroll.`);
        }
    }
}

//==============================================================================
// HIT AREA & MOTION LOGIC
//==============================================================================

function toggleHitAreaFramesVisibility() {
    if (hitAreaFrames && selectedModel) {
        hitAreaFrames.visible = DOM.showHitAreasCheckbox.checked;
        log('UI', `Hit area frames visibility set to: ${hitAreaFrames.visible}`);
    }
}

function simulateTapOnHitArea(model, hitAreaName, buttonElement) {
    if (model !== selectedModel) {
        setSelectedModel(model);
    }
    triggerMotionForHitArea(model, hitAreaName);
    highlightButton(buttonElement, DOM.hitAreasContainer);
    if (hitAreaFrames?.highlight) {
        hitAreaFrames.highlight(hitAreaName);
    }
}

function triggerMotionForHitArea(model, hitAreaName) {
    const motionManager = model.internalModel?.motionManager;
    if (!motionManager) return;

    // Stop any currently playing motions
    motionManager.stopAllMotions?.();

    const motionGroups = motionManager.definitions;
    let motionPlayed = false;

    if (hitAreaName) {
        const lowerHitArea = hitAreaName.toLowerCase();
        // Find all groups that contain the hit area name
        const matchingGroups = Object.keys(motionGroups).filter(group =>
            group.toLowerCase().includes(lowerHitArea)
        );
        if (matchingGroups.length > 0) {
            // Pick a random group among matches
            const groupName = matchingGroups[Math.floor(Math.random() * matchingGroups.length)];
            const motions = motionGroups[groupName];
            if (motions && motions.length > 0) {
                const index = Math.floor(Math.random() * motions.length);
                log('MODEL', `Playing motion for hit area "${hitAreaName}": Group=${groupName}, Index=${index}`);
                model.motion(groupName, index);
                motionPlayed = true;
            }
        }
    }

    // If no motion matched the hit area, play any available motion at random
    if (!motionPlayed) {
        const availableGroups = Object.keys(motionGroups).filter(g => Array.isArray(motionGroups[g]) && motionGroups[g].length > 0);
        if (availableGroups.length > 0) {
            const randomGroup = availableGroups[Math.floor(Math.random() * availableGroups.length)];
            const motions = motionGroups[randomGroup];
            const index = Math.floor(Math.random() * motions.length);
            log('WARN', `No matching motion for hit area "${hitAreaName}". Playing random motion instead.`);
            log('MODEL', `Playing random motion: Group=${randomGroup}, Index=${index}`);
            model.motion(randomGroup, index);
            motionPlayed = true;
        }
    }
}

//==============================================================================
// UTILITY FUNCTIONS
//==============================================================================

function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

//==============================================================================
// SCRIPT EXECUTION START
//==============================================================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApplication);
    // Sneaky ASCII art console log
    (()=>{const ascii=`            
             ☆・゜・。。・゜゜・。。・゜★
★·.·´¯\`·.·★ L I V E 2 D   V I E W E R ★·.·´¯\`·.·★
              ★・。。・゜゜・。。・゜・☆

            ⭐ GH: github.com/ImDuck42
            📨 Mail: imduck420@gmail.com
            💬 DC: @hu7ao

★·.·´¯\`·.·★ ══════ Version 4.7 ══════ ★·.·´¯\`·.·★
`
    const asciiStyle=`
        font-family:Courier New,monospace;
        font-size:12px;
        line-height:1.4;
        font-weight:bold;
        background:linear-gradient(135deg,#8c5eff,#ff67d7);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
    `;
    console.log('%c'+ascii, asciiStyle)})();
} else {
    initializeApplication();
}