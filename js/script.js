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
// Application-wide configuration constants
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
// DOM ELEMENT CACHE
//==============================================================================
// Cache DOM elements for performance
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
    dropdown: document.getElementById('model-select-dropdown'),
    dropdownSelected: document.getElementById('model-select-dropdown-selected'),
    dropdownList: document.getElementById('model-select-dropdown-list'),
    dropdownHiddenInput: document.getElementById('model-select'),
    loadSelectedButton: document.getElementById('load-selected-button'),
};


//==============================================================================
// STATE MANAGEMENT
//==============================================================================
// Application state variables
const state = {
    app: null,
    models: [],
    selectedModel: null,
    modelIdCounter: 0,
    hitAreaFrames: null,
    selectionOutline: null,
    interaction: {
        isDragging: false,
        wasDragging: false,
        dragStartOffset: { x: 0, y: 0 },
        activeDragTarget: null,
        isPinching: false,
        activePointers: {},
        initialPinchDistance: 0,
        initialModelScaleOnPinchStart: 1,
        activePinchTarget: null,
        modelJustSelected: false,
    },
};


//==============================================================================
// APPLICATION INITIALIZATION
//==============================================================================
function initializeApplication() {
    if (!DOM.canvas) {
        log('ERROR', "Fatal Error: Canvas element not found. Application cannot start.");
        return;
    }

    try {
        state.app = new PIXI.Application({
            view: DOM.canvas,
            resizeTo: DOM.canvas.parentElement,
            backgroundColor: CONFIG.BACKGROUND_COLOR,
            antialias: true,
            autoStart: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });

        initializeSelectionOutline();
        state.app.ticker.add(onTick);

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

    updateUI();
}

// Creates and adds the selection outline graphics to the stage.
function initializeSelectionOutline() {
    state.selectionOutline = new PIXI.Graphics();
    state.selectionOutline.visible = false;
    state.app.stage.addChild(state.selectionOutline);
}

// Main update loop for continuous rendering tasks.
function onTick() {
    if (state.selectedModel && state.selectionOutline.visible) {
        updateSelectionOutline(state.selectedModel);
        state.app.stage.setChildIndex(state.selectionOutline, state.app.stage.children.length - 1);
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
        window.history.replaceState({}, '', window.location.pathname);
    }
}


//==============================================================================
// MODEL LOADING & MANAGEMENT
//==============================================================================

// Main function to load a Live2D model from a source URL.
async function loadModel(source) {
    if (!state.app?.stage) {
        log('ERROR', "PIXI Application not ready for model loading.");
        alert("Error: Application not initialized properly.");
        return;
    }
    if (!source) return;

    log('MODEL', `Attempting to load model from: ${source}`);
    updateUIVisibility(true);
    let newModel = null;

    try {
        newModel = await PIXI.live2d.Live2DModel.from(source, {
            onError: (e) => { throw new Error(`Live2DModel.from failed: ${e.message || 'Unknown error'}`); },
        });

        newModel.appModelId = state.modelIdCounter++;
        state.app.stage.addChild(newModel);
        state.models.push(newModel);

        await new Promise(resolve => setTimeout(resolve, 150)); // Allow PIXI to calculate bounds

        fitAndPositionNewModel(newModel);
        newModel.cursor = 'grab';
        setSelectedModel(newModel);

        log('MODEL', `Model loaded successfully: ${newModel.internalModel?.settings?.name || `Model ${newModel.appModelId}`}`);
    } catch (error) {
        log('ERROR', `Error loading model from ${source}:`, error);
        alert(`Error loading model: ${error.message || error}`);

        if (newModel) {
            newModel.parent?.removeChild(newModel);
            const index = state.models.findIndex(m => m.appModelId === newModel.appModelId);
            if (index > -1) state.models.splice(index, 1);
            newModel.destroy({ children: true, texture: false, baseTexture: false });
        }

        if (state.selectedModel === newModel) {
            setSelectedModel(state.models[state.models.length - 1] || null);
        }
    } finally {
        updateUIVisibility(false);
    }
}
window.loadLive2DModel = loadModel; // Expose for repoexplorer.js

// Sets the currently selected model and updates the UI accordingly.
function setSelectedModel(model) {
    state.hitAreaFrames?.parent?.removeChild(state.hitAreaFrames);

    state.selectedModel = model;

    if (state.selectedModel) {
        log('MODEL', `Selected model ID: ${state.selectedModel.appModelId}`);
        if (PIXI.live2d.HitAreaFrames) {
            if (!state.hitAreaFrames || state.hitAreaFrames.destroyed) {
                state.hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            }
            try {
                state.selectedModel.addChild(state.hitAreaFrames);
            } catch (err) {
                log('WARN', 'Failed to reuse hitAreaFrames, creating new instance.', err);
                state.hitAreaFrames = new PIXI.live2d.HitAreaFrames();
                state.selectedModel.addChild(state.hitAreaFrames);
            }
            state.hitAreaFrames.visible = DOM.showHitAreasCheckbox.checked;
        }
        bringModelToFront(state.selectedModel);
        state.selectionOutline.visible = true;
    } else {
        log('MODEL', "Deselected all models.");
        state.selectionOutline.visible = false;
    }

    updateUI();
}

// Deletes the currently selected model from the stage and memory.
function deleteSelectedModel() {
    if (!state.selectedModel) return;

    const modelToDelete = state.selectedModel;
    const modelIndex = state.models.findIndex(m => m.appModelId === modelToDelete.appModelId);

    if (modelIndex > -1) state.models.splice(modelIndex, 1);

    if (modelToDelete.parent) {
        state.hitAreaFrames?.parent === modelToDelete && state.hitAreaFrames.parent.removeChild(state.hitAreaFrames);
        modelToDelete.parent.removeChild(modelToDelete);
    }

    const shouldDestroyTexture = !state.models.some(m => m.textures.some(t => modelToDelete.textures.includes(t)));
    modelToDelete.destroy({ children: true, texture: shouldDestroyTexture, baseTexture: shouldDestroyTexture });
    log('MODEL', `Model ${modelToDelete.appModelId} deleted. Texture destroyed: ${shouldDestroyTexture}`);

    setSelectedModel(state.models[state.models.length - 1] || null);
}

// Scales and positions a new model to fit nicely in the canvas view.
function fitAndPositionNewModel(model) {
    if (!model || !state.app?.renderer) return;

    const view = state.app.renderer.view;
    const viewWidth = view.width / (window.devicePixelRatio || 1);
    const viewHeight = view.height / (window.devicePixelRatio || 1);

    model.updateTransform();
    const modelWidth = model.width / model.scale.x;
    const modelHeight = model.height / model.scale.y;

    if (modelWidth > 0 && modelHeight > 0) {
        const scaleX = (viewWidth * CONFIG.MODEL_FIT_PADDING) / modelWidth;
        const scaleY = (viewHeight * CONFIG.MODEL_FIT_PADDING) / modelHeight;
        model.scale.set(Math.min(scaleX, scaleY));
    } else {
        log('WARN', "fitAndPositionNewModel: Invalid model dimensions. Applying default scale.");
        model.scale.set(0.1);
    }

    model.anchor.set(0.5, 0.5);
    model.position.set(viewWidth / 2, viewHeight / 2);
    log('MODEL', `Fitted model ${model.appModelId} to view.`);
}

function bringModelToFront(model) {
    if (!model || !state.app?.stage) return;
    state.app.stage.setChildIndex(model, state.app.stage.children.length - 1);
    if (state.selectionOutline) {
        state.app.stage.setChildIndex(state.selectionOutline, state.app.stage.children.length - 1);
    }

    const idx = state.models.indexOf(model);
    if (idx > -1) {
        state.models.splice(idx, 1);
        state.models.push(model);
    }
}


//==============================================================================
// UI & CONTROL PANEL
//==============================================================================
function updateUI() {
    updateUIVisibility();
    updateDeleteButtonState();
    updateControlPanel();
    updateModelFilenameDisplay();
    DOM.showHitAreasCheckbox.disabled = !state.selectedModel;
}

function updateUIVisibility(isLoading = false) {
    DOM.loadingOverlay.style.display = isLoading ? 'flex' : 'none';
    DOM.noModelMessage.style.display = state.models.length === 0 && !isLoading ? 'flex' : 'none';
}

function updateDeleteButtonState() {
    DOM.deleteSelectedButton.disabled = !state.selectedModel;
}

// Populates control panel sections with buttons for expressions, motions, and hit areas.
const controlPopulators = {
    expressions: model => {
        const data = model.internalModel?.expressions ?? model.internalModel?.settings?.expressions;
        let expressionList = [];
        if (Array.isArray(data)) {
            expressionList = data;
        } else if (typeof data === 'object' && data !== null) {
            expressionList = Object.entries(data).map(([name, file]) => ({ Name: name, File: file }));
        }
        return expressionList.map((exp, i) => {
            const name = exp.Name || exp.name || `Expression ${i + 1}`;
            return { name, action: () => model.expression(name) };
        });
    },
    motions: model => {
        const motionManager = model.internalModel?.motionManager;
        const definitions = motionManager?.definitions || {};
        const items = Object.entries(definitions).flatMap(([group, motions]) =>
            motions.map((motion, index) => ({
                name: motion.Name || motion.File?.split('/').pop().replace(/\.(motion3\.json|mtn)$/i, '') || group,
                action: () => {
                    motionManager?.stopAllMotions?.();
                    setTimeout(() => model.motion(group, index), 0);
                }
            }))
        );
        // Handle duplicate names
        const nameCounts = items.reduce((acc, item) => (acc[item.name] = (acc[item.name] || 0) + 1, acc), {});
        const seenCounts = {};
        items.forEach(item => {
            item.displayName = nameCounts[item.name] > 1
                ? `${item.name} ${(seenCounts[item.name] = (seenCounts[item.name] || 0) + 1)}`
                : item.name;
        });
        return items;
    },
    hitAreas: model => {
        return (model.internalModel?.settings?.hitAreas || []).map(area => {
            const name = area.Name || area.name || area.Id;
            return { name, action: btn => simulateTapOnHitArea(model, name, btn) };
        });
    }
};

function updateControlPanel() {
    log('UI', "Updating control panel for selected model.");
    if (state.selectedModel) {
        Object.keys(controlPopulators).forEach(type => {
            populateControls(type, state.selectedModel);
        });
    } else {
        Object.keys(controlPopulators).forEach(type => {
            setNoContentMessage(DOM[`${type}Container`], type);
        });
    }
}

function populateControls(type, model) {
    const container = DOM[`${type}Container`];
    const populator = controlPopulators[type];
    if (!container || !populator) return;

    container.innerHTML = '';
    const items = populator(model);
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
        log('UI', `Triggering ${type}: ${text}`);
        onClick(button);
        highlightButton(button, DOM[`${type}Container`]);
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
    if (!state.selectedModel) {
        DOM.modelFilename.style.display = 'none';
        return;
    }
    const settings = state.selectedModel.internalModel?.settings;
    const filename = settings?.url?.split('/').pop() || settings?.model?.split('/').pop() || 'Unknown';
    DOM.modelFilename.textContent = `File: ${filename}`;
    DOM.modelFilename.style.display = 'block';
}

// Draws the selection outline around the given model.
function updateSelectionOutline(model) {
    if (!state.selectionOutline || !model?.getBounds) return;
    state.selectionOutline.clear();
    const bounds = model.getBounds(false);

    if (bounds.width > 0 && bounds.height > 0) {
        state.selectionOutline.lineStyle(CONFIG.SELECTION_OUTLINE_THICKNESS, CONFIG.SELECTION_OUTLINE_COLOR, CONFIG.SELECTION_OUTLINE_ALPHA, 0.5, true);
        state.selectionOutline.drawRoundedRect(bounds.x, bounds.y, bounds.width, bounds.height, CONFIG.SELECTION_OUTLINE_CORNER_RADIUS);
    }
}


//==============================================================================
// EVENT LISTENERS & HANDLERS
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
    DOM.modelFilename.addEventListener('wheel', handleModelFilenameScroll, { passive: false });
}

// Sets up interaction listeners on the PIXI stage.
function setupStageInteractions() {
    state.app.stage.interactive = true;
    state.app.stage.hitArea = state.app.screen;
    state.app.stage.on('pointerdown', handlePointerDown);
    state.app.stage.on('pointermove', handlePointerMove);
    state.app.stage.on('pointerup', handlePointerUp);
    state.app.stage.on('pointerupoutside', handlePointerUp);
    state.app.stage.on('pointertap', handleStageTap);
    DOM.canvas.addEventListener('wheel', handleCanvasZoom, { passive: false });
}

// Sets up the custom dropdown functionality.
function initializeCustomDropdown() {
    const { dropdown, dropdownSelected, dropdownList, dropdownHiddenInput } = DOM;
    if (!dropdown) return;

    const toggleDropdown = (forceOpen) => {
        const isOpen = forceOpen ?? !dropdown.classList.contains('open');
        dropdown.setAttribute('aria-expanded', String(isOpen));
        dropdown.classList.toggle('open', isOpen);
    };

    dropdown.addEventListener('click', () => toggleDropdown());
    dropdown.addEventListener('keydown', e => e.key === 'Escape' && toggleDropdown(false));
    dropdownList.querySelectorAll('.custom-dropdown-option').forEach(option => {
        option.addEventListener('click', e => {
            e.stopPropagation();
            dropdownSelected.textContent = option.textContent;
            dropdownHiddenInput.value = option.dataset.value;
            toggleDropdown(false);
        });
    });
    document.addEventListener('click', e => !dropdown.contains(e.target) && toggleDropdown(false));
}


//==============================================================================
// INTERACTION HANDLERS
//==============================================================================
// Handles pointer down events for dragging and pinching.
function handlePointerDown(event) {
    const { interaction } = state;
    const globalPos = event.data.global;
    interaction.activePointers[event.data.pointerId] = globalPos.clone();
    interaction.modelJustSelected = false;
    interaction.wasDragging = false;

    const downOnModel = state.models.slice().reverse().find(model => model.containsPoint(globalPos));

    if (Object.keys(interaction.activePointers).length === 1) { // Drag start
        if (downOnModel) {
            if (state.selectedModel !== downOnModel) {
                setSelectedModel(downOnModel);
                interaction.modelJustSelected = true;
            }
            interaction.isDragging = true;
            interaction.activeDragTarget = downOnModel;
            interaction.activeDragTarget.cursor = 'grabbing';
            const localPos = interaction.activeDragTarget.parent.toLocal(globalPos);
            interaction.dragStartOffset = { x: localPos.x - interaction.activeDragTarget.x, y: localPos.y - interaction.activeDragTarget.y };
        }
    } else if (Object.keys(interaction.activePointers).length === 2 && state.selectedModel) { // Pinch start
        interaction.isDragging = false;
        if (interaction.activeDragTarget) interaction.activeDragTarget.cursor = 'grab';
        interaction.activeDragTarget = null;
        interaction.isPinching = true;
        interaction.activePinchTarget = state.selectedModel;
        const pointers = Object.values(interaction.activePointers);
        interaction.initialPinchDistance = getDistance(pointers[0], pointers[1]);
        interaction.initialModelScaleOnPinchStart = interaction.activePinchTarget.scale.x;
    }
}

// Handles pointer move events for moving the model.
function handlePointerMove(event) {
    const { interaction } = state;
    const pointerId = event.data.pointerId;
    if (!interaction.activePointers[pointerId]) return;

    interaction.activePointers[pointerId] = event.data.global.clone();
    interaction.wasDragging = true;

    if (interaction.isPinching && interaction.activePinchTarget && Object.keys(interaction.activePointers).length === 2) {
        const pointers = Object.values(interaction.activePointers);
        const currentDistance = getDistance(pointers[0], pointers[1]);
        if (interaction.initialPinchDistance > 0) {
            const scaleFactor = currentDistance / interaction.initialPinchDistance;
            let newScale = interaction.initialModelScaleOnPinchStart * scaleFactor;
            newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM));
            interaction.activePinchTarget.scale.set(newScale);
        }
    } else if (interaction.isDragging && interaction.activeDragTarget) {
        const newPos = interaction.activeDragTarget.parent.toLocal(event.data.global);
        interaction.activeDragTarget.position.set(newPos.x - interaction.dragStartOffset.x, newPos.y - interaction.dragStartOffset.y);
    }
}

// Handles pointer up events to stop dragging or pinching.
function handlePointerUp(event) {
    const { interaction } = state;
    delete interaction.activePointers[event.data.pointerId];
    const remainingPointers = Object.keys(interaction.activePointers).length;

    if (interaction.isPinching && remainingPointers < 2) {
        interaction.isPinching = false;
        if (interaction.activePinchTarget) interaction.activePinchTarget.cursor = 'grab';
        interaction.activePinchTarget = null;
    }
    if (interaction.isDragging && remainingPointers < 1) {
        interaction.isDragging = false;
        if (interaction.activeDragTarget) interaction.activeDragTarget.cursor = 'grab';
        interaction.activeDragTarget = null;
    }
}

// Handles tap events on the stage to trigger hit area motions.
function handleStageTap(event) {
    if (state.interaction.wasDragging || state.interaction.modelJustSelected) return;

    if (state.selectedModel) {
        const hitAreaNames = state.selectedModel.hitTest(event.data.global.x, event.data.global.y);
        if (hitAreaNames.length > 0) {
            const randomHitArea = hitAreaNames[Math.floor(Math.random() * hitAreaNames.length)];
            log('INTERACTION', `Tap hit on area: ${randomHitArea}`);
            triggerMotionForHitArea(state.selectedModel, randomHitArea);
        }
    }
}

// Handles zooming the selected model with the mouse wheel or fingers.
function handleCanvasZoom(event) {
    if (!state.selectedModel) return;
    event.preventDefault();

    const zoomFactor = Math.exp((event.deltaY < 0 ? 1 : -1) * CONFIG.ZOOM_SENSITIVITY);
    const newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(state.selectedModel.scale.x * zoomFactor, CONFIG.MAX_ZOOM));
    const pointer = new PIXI.Point(event.clientX, event.clientY);
    const stagePos = state.app.stage.toLocal(pointer);
    const localPos = state.selectedModel.toLocal(stagePos);

    state.selectedModel.scale.set(newScale);

    const newGlobalPos = state.selectedModel.toGlobal(localPos);
    state.selectedModel.x -= newGlobalPos.x - stagePos.x;
    state.selectedModel.y -= newGlobalPos.y - stagePos.y;
}

// Handles scrolling on the model filename to switch models.
function handleModelFilenameScroll(event) {
    if (!state.models || state.models.length < 2) return;
    event.preventDefault();

    const sorted = state.models.slice().sort((a, b) => (a.appModelId - b.appModelId));
    let currentIndex = sorted.findIndex(m => m === state.selectedModel);
    
    const direction = event.deltaY < 0 ? -1 : 1;
    const newIndex = (currentIndex + direction + sorted.length) % sorted.length;

    if (newIndex !== currentIndex) {
        setSelectedModel(sorted[newIndex]);
    }
}


//==============================================================================
// HIT AREA & MOTION LOGIC
//==============================================================================
// Toggles the visibility of hit area frames based on the checkbox state.
function toggleHitAreaFramesVisibility() {
    if (state.hitAreaFrames && state.selectedModel) {
        state.hitAreaFrames.visible = DOM.showHitAreasCheckbox.checked;
        log('UI', `Hit area frames visibility set to: ${state.hitAreaFrames.visible}`);
    }
}

// Simulates a tap on a hit area to trigger its motion and highlight the button.
function simulateTapOnHitArea(model, hitAreaName, buttonElement) {
    if (model !== state.selectedModel) setSelectedModel(model);
    triggerMotionForHitArea(model, hitAreaName);
    highlightButton(buttonElement, DOM.hitAreasContainer);
    state.hitAreaFrames?.highlight?.(hitAreaName);
}

// Triggers a motion associated with the given hit area name.
function triggerMotionForHitArea(model, hitAreaName) {
    const motionManager = model.internalModel?.motionManager;
    if (!motionManager) return;

    motionManager.stopAllMotions?.();

    const motionGroups = motionManager.definitions;
    let groupToPlay = null;

    if (hitAreaName) {
        const lowerHitArea = hitAreaName.toLowerCase();
        const matchingGroups = Object.keys(motionGroups).filter(group => group.toLowerCase().includes(lowerHitArea));
        if (matchingGroups.length > 0) {
            groupToPlay = matchingGroups[Math.floor(Math.random() * matchingGroups.length)];
        }
    }

    if (!groupToPlay) { // Fallback to a random motion
        const availableGroups = Object.keys(motionGroups).filter(g => motionGroups[g]?.length > 0);
        if (availableGroups.length > 0) {
            groupToPlay = availableGroups[Math.floor(Math.random() * availableGroups.length)];
            log('WARN', `No matching motion for "${hitAreaName}". Playing random motion instead.`);
        }
    }

    if (groupToPlay) {
        const indexToPlay = Math.floor(Math.random() * motionGroups[groupToPlay].length);
        setTimeout(() => {
            log('MODEL', `Playing motion for "${hitAreaName}": Group=${groupToPlay}, Index=${indexToPlay}`);
            model.motion(groupToPlay, indexToPlay);
        }, 0);
    }
}


//==============================================================================
// UTILITY FUNCTIONS
//==============================================================================
const getDistance = (p1, p2) => Math.hypot(p2.x - p1.x, p2.y - p1.y);


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

★·.·´¯\`·.·★ ══════ Version 4.8 ══════ ★·.·´¯\`·.·★
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