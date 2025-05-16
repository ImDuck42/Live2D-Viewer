'use strict';

// Make PIXI globally available for pixi-live2d-display and extras
window.PIXI = PIXI;

/**
 * Configuration constants for the Live2D Viewer.
 * @namespace CONFIG
 */
const CONFIG = {
    BACKGROUND_COLOR: 0x1a1a2e,
    MODEL_FIT_PADDING: 0.9,
    ZOOM_SENSITIVITY: 0.07,
    MIN_ZOOM: 0.1,
    MAX_ZOOM: 5.0,
    HIT_AREA_BUTTON_HIGHLIGHT_DURATION: 500,
    FILE_URL_REVOKE_TIMEOUT: 60000,
    SELECTION_OUTLINE_COLOR: 0x8c5eff, // Accent color for outline
    SELECTION_OUTLINE_THICKNESS: 2,   // Thickness in pixels
    SELECTION_OUTLINE_ALPHA: 0.1,     // Opacity of the outline (0.0 to 1.0)
    SELECTION_OUTLINE_CORNER_RADIUS: 10, // Radius for rounded corners
    CHANGES_HTML_URL: 'assets/changes.html', // Path to the changelog HTML file
};

/** @type {PIXI.Application | null} PIXI Application instance */
let app = null;
/** @type {PIXI.live2d.Live2DModel[]} Array to store all Live2D models on stage */
let models = [];
/** @type {PIXI.live2d.Live2DModel | null} The currently selected Live2D model */
let selectedModel = null;
/** @type {number} Counter for unique model IDs */
let modelIdCounter = 0;
/** @type {PIXI.live2d.HitAreaFrames | null} Single HitAreaFrames visualizer, moved to selected model */
let hitAreaFrames = null;
/** @type {PIXI.Graphics | null} Graphics object for drawing selection outline */
let selectionOutline = null;


// Interaction state variables
let isDragging = false;
let wasDragging = false;
let dragStartOffset = { x: 0, y: 0 };
/** @type {PIXI.live2d.Live2DModel | null} The model currently being dragged */
let activeDragTarget = null;

let isPinching = false;
const activePointers = {};
let initialPinchDistance = 0;
let initialPinchMidpoint = new PIXI.Point();
let initialModelScaleOnPinchStart = 1;
/** @type {PIXI.live2d.Live2DModel | null} The model currently being pinched */
let activePinchTarget = null;


let previousCanvasWidth = 0;

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
    deleteSelectedButton: document.getElementById('delete-selected-model-button'),
    // Changelog elements
    siteTitleButton: document.getElementById('site-title-button'),
    changelogPlaceholder: document.getElementById('changelog-placeholder'), // Placeholder div
    changelogModal: null, // Will be populated after fetch
    changelogCloseButton: null, // Will be populated after fetch
};

//==============================================================================
// INITIALIZATION
//==============================================================================
function initApp() {
    const essentialElementIDs = [
        'canvas', 'loadingOverlay', 'noModelMessage', 'modelUrlInput', 'loadUrlButton',
        'expressionsContainer', 'motionsContainer', 'hitAreasContainer', 'deleteSelectedButton',
        'siteTitleButton', 'changelogPlaceholder' // Add siteTitleButton and placeholder to essential checks
    ];
    for (const id of essentialElementIDs) {
        if (!DOMElements[id]) {
            const errorMessage = `Fatal Error: Essential UI element '${id}' not found.`;
            console.error(errorMessage);
            alert(`Initialization failed: ${errorMessage}`);
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
        previousCanvasWidth = app.renderer.width;
        app.renderer.on('resize', handleCanvasResize);

        selectionOutline = new PIXI.Graphics();
        selectionOutline.visible = false;
        app.stage.addChild(selectionOutline); 

        app.ticker.add(() => {
            if (selectedModel && selectionOutline.visible) {
                updateSelectionOutline(selectedModel);
                if (app.stage.children.includes(selectionOutline)) {
                     app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
                }
            }
        });

    } catch (error) {
        console.error("Fatal Error: Failed to create PIXI Application.", error);
        alert(`Initialization failed: ${error.message}`);
        return;
    }

    DOMElements.loadSelectedButton?.addEventListener('click', loadSelectedModelFromDropdown);
    DOMElements.loadUrlButton.addEventListener('click', loadModelFromUrlInput);
    DOMElements.showHitAreasCheckbox?.addEventListener('change', toggleHitAreaFramesVisibility);
    DOMElements.deleteSelectedButton.addEventListener('click', deleteSelectedModel);

    setupModelInteractions();
    loadAndSetupChangelog(); // Modified function call
    
    updateUIVisibility(false);
    clearAllControlPanelsAndState(); 
    updateDeleteButtonState();
    console.log("Live2D Viewer initialized.");
}

async function loadAndSetupChangelog() {
    if (!DOMElements.changelogPlaceholder || !DOMElements.siteTitleButton) {
        console.warn("Changelog placeholder or site title button not found. Changelog feature disabled.");
        return;
    }

    try {
        const response = await fetch(CONFIG.CHANGES_HTML_URL); // Fetch the external HTML
        if (!response.ok) {
            throw new Error(`Failed to fetch ${CONFIG.CHANGES_HTML_URL}: ${response.status} ${response.statusText}`);
        }
        const htmlContent = await response.text();
        DOMElements.changelogPlaceholder.innerHTML = htmlContent; // Inject content

        // Now that the content is loaded, find and cache the modal specific elements
        DOMElements.changelogModal = document.getElementById('changelog-modal');
        DOMElements.changelogCloseButton = document.getElementById('changelog-close-button');
        
        // Proceed to setup interactions if elements are found
        setupChangelogModalInteractions();

    } catch (error) {
        console.error("Error loading changelog content:", error);
        // Optionally, hide the trigger if loading fails
        if (DOMElements.siteTitleButton) {
            DOMElements.siteTitleButton.style.cursor = 'default';
            DOMElements.siteTitleButton.title = 'Changelog unavailable';
        }
    }
}


function setupChangelogModalInteractions() {
    // This function now relies on DOMElements.changelogModal and DOMElements.changelogCloseButton
    // being correctly populated by loadAndSetupChangelog()
    if (DOMElements.siteTitleButton && DOMElements.changelogModal && DOMElements.changelogCloseButton) {
        DOMElements.siteTitleButton.addEventListener('click', () => {
            DOMElements.changelogModal.classList.add('active');
        });

        DOMElements.changelogCloseButton.addEventListener('click', () => {
            DOMElements.changelogModal.classList.remove('active');
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && DOMElements.changelogModal.classList.contains('active')) {
                DOMElements.changelogModal.classList.remove('active');
            }
        });
    } else {
        console.warn("Changelog UI elements (modal or close button) not found after loading. Changelog interactions may be incomplete.");
    }
}


//==============================================================================
// MODEL MANAGEMENT (Load, Select, Delete)
//==============================================================================

async function loadSelectedModelFromDropdown() {
    if (!DOMElements.modelSelect) { 
        console.error("Model select dropdown ('model-select') not found.");
        alert('Model selection dropdown is missing.');
        return;
    }
    const modelUrl = DOMElements.modelSelect.value;
    if (modelUrl == 'https://cdn.jsdelivr.net/gh/AzurLaneAssets/Live2D-Chars/碧蓝航线%20Azur%20Lane/Azur%20Lane(JP)/ricky_1/ricky_.model3.json') {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Easter egg
    } else if (modelUrl) {
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
    if (!modelUrl.startsWith('http://') && !modelUrl.startsWith('https://')) {
        alert('Please enter a valid HTTP or HTTPS URL (e.g., https://example.com/model.model3.json).');
        DOMElements.modelUrlInput.focus();
        return;
    }
    await loadModel(modelUrl);
}

async function loadModel(source) {
    if (!app?.stage) { 
        console.error("PIXI Application not ready for model loading.");
        alert("Error: Application not initialized properly. Cannot load model.");
        return;
    }

    updateUIVisibility(models.length > 0, true); 

    let newModel = null;
    try {
        newModel = await PIXI.live2d.Live2DModel.from(source, {
            onError: (e) => { throw new Error(`Live2DModel.from failed: ${e.message || 'Unknown error'}`); },
        });
        newModel.appModelId = modelIdCounter++; 

        console.log("Model loaded successfully:", newModel.internalModel?.settings?.name || `Model ${newModel.appModelId}`);
        
        app.stage.addChild(newModel);
        models.push(newModel);
        if (selectionOutline && app.stage.children.includes(selectionOutline)) {
            app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
        }


        await new Promise(resolve => setTimeout(resolve, 150)); 

        fitAndPositionNewModel(newModel);
        newModel.cursor = 'grab';
        setSelectedModel(newModel); 

        updateUIVisibility(models.length > 0, false);
        console.log('Model setup complete. Total models:', models.length);

    } catch (error) {
        console.error('Error during model loading or setup:', error);
        alert(`Failed to load model. Error: ${error.message || String(error)}`);

        if (newModel) { 
            if (newModel.parent) newModel.parent.removeChild(newModel);
            const indexInModels = models.findIndex(m => m.appModelId === newModel.appModelId);
            if (indexInModels > -1) models.splice(indexInModels, 1);
            try { newModel.destroy({ children: true, texture: false, baseTexture: false }); } // Keep textures if shared
            catch (e) { console.warn("Error destroying partially loaded model:", e); }
        }
        
        if (selectedModel && newModel && selectedModel.appModelId === newModel.appModelId) {
            setSelectedModel(models.length > 0 ? models[models.length - 1] : null);
        } else if (!selectedModel && models.length > 0) {
            setSelectedModel(models[models.length - 1]);
        }

        updateUIVisibility(models.length > 0, false);
    }
}


function setSelectedModel(modelToSelect) {
    if (hitAreaFrames && hitAreaFrames.parent) {
        hitAreaFrames.parent.removeChild(hitAreaFrames);
    }

    selectedModel = modelToSelect;

    if (selectedModel) {
        if (PIXI.live2d.HitAreaFrames) {
            if (!hitAreaFrames) { 
                hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            }
            selectedModel.addChild(hitAreaFrames);
            hitAreaFrames.visible = DOMElements.showHitAreasCheckbox?.checked ?? false;
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = false;
        } else { 
            if (DOMElements.showHitAreasCheckbox) DOMElements.showHitAreasCheckbox.disabled = true;
            console.warn('HitAreaFrames feature is unavailable. For this, load pixi-live2d-display/extra.min.js.');
        }
        
        if (app && app.stage && selectedModel.parent === app.stage) {
            app.stage.setChildIndex(selectedModel, app.stage.children.length - 1);
        }
        console.log(`Model ${selectedModel.appModelId} selected.`);
        
        if (selectionOutline) {
            selectionOutline.visible = true;
            updateSelectionOutline(selectedModel); 
            if(app.stage.children.includes(selectionOutline)) {
                app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
            } else {
                app.stage.addChild(selectionOutline); 
            }
        }

    } else { 
        if (DOMElements.showHitAreasCheckbox) {
            DOMElements.showHitAreasCheckbox.checked = false; 
            DOMElements.showHitAreasCheckbox.disabled = true;
        }
        if (selectionOutline) {
            selectionOutline.visible = false; 
        }
        console.log("No model selected.");
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
    console.log(`Deleting model: ${modelToDelete.appModelId}`);

    if (modelToDelete.parent) {
        modelToDelete.parent.removeChild(modelToDelete);
    }

    const modelIndex = models.findIndex(m => m.appModelId === modelToDelete.appModelId);
    if (modelIndex > -1) {
        models.splice(modelIndex, 1);
    }
    
    if (hitAreaFrames && hitAreaFrames.parent === modelToDelete) {
        modelToDelete.removeChild(hitAreaFrames); 
    }

    // IMPORTANT: Changed to prevent destroying shared textures
    // This might lead to memory not being freed if many *unique* models are loaded/deleted
    // but fixes black textures for multiple instances of the *same* model.
    modelToDelete.destroy({ children: true, texture: false, baseTexture: false });
    console.log("Destroyed model with texture:false, baseTexture:false to preserve shared resources.");


    const nextSelected = models.length > 0 ? models[models.length - 1] : null;
    setSelectedModel(nextSelected); 

    updateUIVisibility(models.length > 0, false);
    console.log('Model deleted. Remaining models:', models.length);
}


//==============================================================================
// UI MANAGEMENT & MODEL CONTROLS
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

function fitAndPositionNewModel(model) {
    if (!model || !app?.renderer || !DOMElements.canvas.parentElement) {
        console.warn("fitAndPositionNewModel: Pre-conditions not met.");
        return;
    }

    const parent = DOMElements.canvas.parentElement;
    const viewWidth = parent.clientWidth;
    const viewHeight = parent.clientHeight;

    model.updateTransform();
    const modelWidth = model.width / (model.scale.x || 1); 
    const modelHeight = model.height / (model.scale.y || 1);

    if (!modelWidth || !modelHeight || modelWidth <= 0 || modelHeight <= 0) {
        console.warn("fitAndPositionNewModel: Invalid model dimensions.", modelWidth, modelHeight);
        model.scale.set(0.1);
        model.anchor.set(0.5, 0.5);
        model.position.set(viewWidth / 2, viewHeight / 2);
        return;
    }

    const scaleX = (viewWidth * CONFIG.MODEL_FIT_PADDING) / modelWidth;
    const scaleY = (viewHeight * CONFIG.MODEL_FIT_PADDING) / modelHeight;
    const scale = Math.min(scaleX, scaleY);

    model.scale.set(scale);
    model.anchor.set(0.5, 0.5);
    model.position.set(viewWidth / 2, viewHeight / 2); 
}

function updateControlPanelForSelectedModel() {
    if (selectedModel) {
        populateMotionControls(selectedModel);
        populateExpressionControls(selectedModel);
        populateHitAreaControls(selectedModel);
    } else {
        clearIndividualControlPanels();
    }
}

function clearIndividualControlPanels() {
    const msgSuffix = '(No model selected)';
    setNoContentMessage(DOMElements.expressionsContainer, `expressions ${msgSuffix}`);
    setNoContentMessage(DOMElements.motionsContainer, `motions ${msgSuffix}`);
    setNoContentMessage(DOMElements.hitAreasContainer, `hit areas ${msgSuffix}`);
}

function clearAllControlPanelsAndState() { 
    setSelectedModel(null); 
}

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

function setNoContentMessage(container, contentType) {
    if (container) {
        const hasContent = Array.from(container.children).some(child => !child.classList.contains('no-content-message'));
        const messageElement = container.querySelector('.no-content-message');

        if (!hasContent && !messageElement) { 
             container.innerHTML = `<p class="no-content-message">No ${contentType} available</p>`;
        } else if (hasContent && messageElement) { 
            messageElement.remove();
        } else if (!hasContent && messageElement) { 
            messageElement.textContent = `No ${contentType} available`;
        }
    }
}

function populateMotionControls(model) {
    const container = DOMElements.motionsContainer;
    if (!container) return;
    container.innerHTML = '';
    if (!model) { setNoContentMessage(container, 'motions (No model selected)'); return; }

    const motionManager = model.internalModel?.motionManager;
    const definitions = motionManager?.definitions;

    if (!definitions || Object.keys(definitions).length === 0) {
        setNoContentMessage(container, 'motions'); return;
    }
    let motionButtonsCreated = 0;
    Object.keys(definitions).sort().forEach(group => {
        definitions[group]?.forEach((motionDef, index) => {
            const pathName = motionDef?.File?.split(/[/\\]/).pop()?.replace(/\.(motion3\.json|mtn)$/i, '');
            const motionName = motionDef?.Name || pathName || `${group} ${index + 1}`;
            const btn = createControlButton(motionName, `Play Motion: ${motionName}`, () => {
                try {
                    model.motion(group, index);
                    setActiveButton(container, btn, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
                    console.log(`Motion on model ${model.appModelId}: ${group}[${index}] ('${motionName}')`);
                } catch (e) { console.error(`Error playing motion on model ${model.appModelId}:`, e); alert(`Motion error: ${e.message}`); }
            }, 'feature-btn', 'motion-btn');
            container.appendChild(btn);
            motionButtonsCreated++;
        });
    });
    if(motionButtonsCreated === 0) setNoContentMessage(container, 'motions');
    else {const msg = container.querySelector('.no-content-message'); if(msg) msg.remove();}
}

function populateExpressionControls(model) {
    const container = DOMElements.expressionsContainer;
    if (!container) return;
    container.innerHTML = '';
    if (!model) { setNoContentMessage(container, 'expressions (No model selected)'); return; }
    
    const rawExpressions = model.internalModel?.expressions ?? model.internalModel?.settings?.expressions;
    let expressionList = [];
    if (Array.isArray(rawExpressions)) expressionList = rawExpressions;
    else if (typeof rawExpressions === 'object' && rawExpressions !== null) {
        expressionList = Object.entries(rawExpressions).map(([key, value]) => ({
            Name: key, File: typeof value === 'string' ? value : value?.File
        }));
    }

    if (expressionList.length === 0) {
        setNoContentMessage(container, 'expressions'); return;
    }
    let expressionsCreated = 0;
    expressionList.forEach((expDef, index) => {
        const expressionName = expDef.Name || expDef.name || `Expression ${index + 1}`;
        const btn = createControlButton(expressionName, `Set Expression: ${expressionName}`, () => {
            try {
                model.expression(expressionName);
                setActiveButton(container, btn, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
                console.log(`Expression on model ${model.appModelId}: '${expressionName}'`);
            } catch (e) { console.error(`Error setting expression on model ${model.appModelId}:`, e); alert(`Expression error: ${e.message}`); }
        }, 'feature-btn', 'expression-btn');
        container.appendChild(btn);
        expressionsCreated++;
    });
    if(expressionsCreated === 0) setNoContentMessage(container, 'expressions');
    else {const msg = container.querySelector('.no-content-message'); if(msg) msg.remove();}
}

function populateHitAreaControls(model) {
    const container = DOMElements.hitAreasContainer;
    if (!container) return;
    container.innerHTML = '';
    if (!model) { setNoContentMessage(container, 'hit areas (No model selected)'); return; }

    const hitAreaDefs = model.internalModel?.settings?.hitAreas;
    if (!hitAreaDefs || hitAreaDefs.length === 0) {
        setNoContentMessage(container, 'hit areas'); return;
    }
    let validHitAreasFound = 0;
    hitAreaDefs.forEach(hitAreaDef => {
        // MODIFIED: Fallback to ID if Name is not present or empty
        const hitAreaName = (hitAreaDef.name && hitAreaDef.name.trim() !== "") ? hitAreaDef.name : hitAreaDef.id;
        if (!hitAreaName) {
             console.warn("Hit area found with no name or id:", hitAreaDef);
             return; 
        }

        validHitAreasFound++;
        const btn = createControlButton(hitAreaName, `Simulate Tap: ${hitAreaName}`,
            () => simulateTapOnHitArea(model, hitAreaName, btn), 
            'feature-btn', 'hit-area-btn');
        container.appendChild(btn);
    });
    if(validHitAreasFound === 0) setNoContentMessage(container, 'hit areas (none valid)');
    else {const msg = container.querySelector('.no-content-message'); if(msg) msg.remove();}
}

function toggleHitAreaFramesVisibility() {
    if (!DOMElements.showHitAreasCheckbox) return;
    const isChecked = DOMElements.showHitAreasCheckbox.checked;
    if (hitAreaFrames && selectedModel) { 
        hitAreaFrames.visible = isChecked;
        console.log(`Hit Area Frames for model ${selectedModel.appModelId} visibility set to: ${isChecked}`);
    }
}

function updateSelectionOutline(model) {
    if (!selectionOutline || !model || !model.getBounds) return;

    selectionOutline.clear();
    
    const bounds = model.getBounds(false); 

    if (bounds.width > 0 && bounds.height > 0) {
        selectionOutline.lineStyle(
            CONFIG.SELECTION_OUTLINE_THICKNESS,
            CONFIG.SELECTION_OUTLINE_COLOR,
            CONFIG.SELECTION_OUTLINE_ALPHA 
        );
        selectionOutline.drawRoundedRect(
            bounds.x,
            bounds.y,
            bounds.width,
            bounds.height,
            CONFIG.SELECTION_OUTLINE_CORNER_RADIUS 
        );
    }
}

//==============================================================================
// CANVAS AND RENDERER HANDLERS
//==============================================================================
function handleCanvasResize(newWidth, newHeight) {
    if (selectedModel && app?.renderer) {
        if (newWidth !== previousCanvasWidth) {
            selectedModel.position.x = newWidth / 2;
        }
    }
    previousCanvasWidth = newWidth;
}

//==============================================================================
// MODEL INTERACTION
//==============================================================================
function getDistance(p1, p2) { return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)); }
function getMidpoint(p1, p2) { return new PIXI.Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2); }

function setupModelInteractions() {
    if (!app?.stage) {
        console.error("Cannot setup interactions: PIXI Application stage not available.");
        return;
    }
    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('pointerdown', handlePointerDown);
    app.stage.on('pointermove', handlePointerMove);
    app.stage.on('pointerup', handlePointerRelease);
    app.stage.on('pointerupoutside', handlePointerRelease);
    app.stage.on('pointertap', handleStageTap);
    DOMElements.canvas.addEventListener('wheel', handleModelZoom, { passive: false });
}

function handlePointerDown(event) {
    if (!event.data || !app?.renderer) return;
    activePointers[event.data.pointerId] = event.data.global.clone(); 
    const numActivePointers = Object.keys(activePointers).length;
    wasDragging = false;

    let downOnModel = null;
    for (let i = app.stage.children.length - 1; i >= 0; i--) {
        const child = app.stage.children[i];
        if (child instanceof PIXI.live2d.Live2DModel && models.includes(child)) { 
            if (app.renderer.plugins.interaction.hitTest(event.data.global, child)) {
                downOnModel = child;
                break;
            }
        }
    }

    if (numActivePointers === 1) {
        if (downOnModel) {
            // Select model on drag initiation if not already selected
            if (selectedModel !== downOnModel) {
                setSelectedModel(downOnModel);
            }
            activeDragTarget = downOnModel; 
            isDragging = true;
            isPinching = false;
            const pointerInModelParent = activeDragTarget.parent.toLocal(event.data.global, null, undefined, true);
            dragStartOffset.x = pointerInModelParent.x - activeDragTarget.x;
            dragStartOffset.y = pointerInModelParent.y - activeDragTarget.y;
            activeDragTarget.cursor = 'grabbing';
            // No need to bring to front here again, setSelectedModel and subsequent logic in tap handle it
        } else {
            isDragging = false; activeDragTarget = null;
        }
    } else if (numActivePointers === 2 && selectedModel) { 
        activePinchTarget = selectedModel; 
        isDragging = false; if (activeDragTarget) activeDragTarget.cursor = 'grab'; activeDragTarget = null;
        isPinching = true; wasDragging = true;
        if(activePinchTarget) activePinchTarget.cursor = 'default'; 

        const pointers = Object.values(activePointers);
        initialPinchDistance = getDistance(pointers[0], pointers[1]);
        initialPinchMidpoint = getMidpoint(pointers[0], pointers[1]);
        initialModelScaleOnPinchStart = activePinchTarget.scale.x;
    }
}

function handlePointerMove(event) {
    if (!event.data) return;
    if (activePointers[event.data.pointerId]) {
        activePointers[event.data.pointerId] = event.data.global.clone();
    } else { return; } 
    
    const numActivePointers = Object.keys(activePointers).length;

    if (isPinching && activePinchTarget && numActivePointers === 2) {
        wasDragging = true;
        const pointers = Object.values(activePointers);
        const currentPinchDistance = getDistance(pointers[0], pointers[1]);

        if (initialPinchDistance > 0) { 
            const scaleFactor = currentPinchDistance / initialPinchDistance;
            let newScale = initialModelScaleOnPinchStart * scaleFactor;
            newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM));

            if (newScale !== activePinchTarget.scale.x) {
                const stagePointerPos = initialPinchMidpoint; 
                const modelLocalPointerPos = activePinchTarget.toLocal(stagePointerPos, undefined, undefined, true);
                
                activePinchTarget.scale.set(newScale);
                
                const newGlobalPointerPosFromModel = activePinchTarget.toGlobal(modelLocalPointerPos, undefined, true);
                
                activePinchTarget.x -= (newGlobalPointerPosFromModel.x - stagePointerPos.x);
                activePinchTarget.y -= (newGlobalPointerPosFromModel.y - stagePointerPos.y);
            }
        }
    } else if (isDragging && activeDragTarget && numActivePointers === 1 && activePointers[event.data.pointerId]) {
        wasDragging = true;
        const pointerInModelParent = activeDragTarget.parent.toLocal(event.data.global, null, undefined, true);
        activeDragTarget.position.set(
            pointerInModelParent.x - dragStartOffset.x,
            pointerInModelParent.y - dragStartOffset.y
        );
    }
}

function handlePointerRelease(event) {
    const releasedPointerId = event.data.pointerId;
    if (activePointers[releasedPointerId]) delete activePointers[releasedPointerId];
    const numActivePointers = Object.keys(activePointers).length;

    if (isPinching) {
        isPinching = false;
        if (activePinchTarget) activePinchTarget.cursor = 'grab';
        activePinchTarget = null;
        initialModelScaleOnPinchStart = 1;

        if (numActivePointers === 1) { 
            const remainingPointerGlobalPos = Object.values(activePointers)[0];
            let hitModel = null;
            for (let i = app.stage.children.length - 1; i >= 0; i--) {
                 const child = app.stage.children[i];
                 if (child instanceof PIXI.live2d.Live2DModel && models.includes(child) && app.renderer.plugins.interaction.hitTest(remainingPointerGlobalPos, child)) {
                    hitModel = child; break;
                }
            }
            if (hitModel) {
                // If a finger remains and is on a model, re-initiate drag for that model.
                // Also select it if it wasn't already selected.
                if (selectedModel !== hitModel) {
                    setSelectedModel(hitModel);
                }
                isDragging = true; activeDragTarget = hitModel; 
                const pointerInModelParent = activeDragTarget.parent.toLocal(remainingPointerGlobalPos, null, undefined, true);
                dragStartOffset.x = pointerInModelParent.x - activeDragTarget.x;
                dragStartOffset.y = pointerInModelParent.y - activeDragTarget.y;
                activeDragTarget.cursor = 'grabbing';
            } else { isDragging = false; activeDragTarget = null; }
        } else { 
            isDragging = false; if (activeDragTarget) activeDragTarget.cursor = 'grab'; activeDragTarget = null;
        }
    } else if (isDragging) { 
        isDragging = false; if (activeDragTarget) activeDragTarget.cursor = 'grab'; activeDragTarget = null;
    }

    if (numActivePointers === 0) { 
        isDragging = false; isPinching = false;
        if (activeDragTarget) activeDragTarget.cursor = 'grab'; activeDragTarget = null;
        if (activePinchTarget) activePinchTarget.cursor = 'grab'; activePinchTarget = null;
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
    if (wasDragging || isDragging || isPinching) {
        wasDragging = false;
        return;
    }
    if (!event.data) return;

    let tappedModelInstance = null;
    let hitAreaNamesOnTappedModel = [];

    for (let i = app.stage.children.length - 1; i >= 0; i--) {
        const modelInstance = app.stage.children[i];
        
        if (!(modelInstance instanceof PIXI.live2d.Live2DModel) || !models.includes(modelInstance)) {
            continue;
        }

        const currentHitAreas = modelInstance.hitTest(event.data.global.x, event.data.global.y);
        if (currentHitAreas.length > 0) {
            tappedModelInstance = modelInstance;
            hitAreaNamesOnTappedModel = currentHitAreas;
            break; 
        }

        const modelBounds = modelInstance.getBounds();
        if (modelBounds.contains(event.data.global.x, event.data.global.y)) {
            tappedModelInstance = modelInstance;
            break; 
        }
    }

    if (tappedModelInstance) {
        const wasAlreadySelected = (selectedModel === tappedModelInstance);

        if (!wasAlreadySelected) {
            setSelectedModel(tappedModelInstance); 
            console.log(`Model ${tappedModelInstance.appModelId} selected by tap.`);
        } else {
            if (hitAreaNamesOnTappedModel.length > 0) {
                console.log(`Tap on selected model ${tappedModelInstance.appModelId} hit area(s):`, hitAreaNamesOnTappedModel.join(', '));
                highlightHitAreaButtonsInUI(hitAreaNamesOnTappedModel);
                triggerMotionForHitArea(tappedModelInstance, hitAreaNamesOnTappedModel[0]);
            } else {
                console.log(`Body tap on selected model ${tappedModelInstance.appModelId}. Generic tap.`);
                triggerMotionForHitArea(tappedModelInstance, null); 
            }
        }
        if (app.stage && tappedModelInstance.parent === app.stage) {
            app.stage.setChildIndex(tappedModelInstance, app.stage.children.length - 1);
            if (selectionOutline && selectionOutline.visible && app.stage.children.includes(selectionOutline)) {
                app.stage.setChildIndex(selectionOutline, app.stage.children.length - 1);
            }
        }
    }
    wasDragging = false;
}


function simulateTapOnHitArea(model, hitAreaNameFromButton, buttonElement) {
    if (!model || !hitAreaNameFromButton) return;
    console.log(`Simulating tap on model ${model.appModelId} hit area: '${hitAreaNameFromButton}'`);

    if (model !== selectedModel) {
        setSelectedModel(model); 
    }
    
    highlightHitAreaButtonsInUI([hitAreaNameFromButton], buttonElement);
    triggerMotionForHitArea(model, hitAreaNameFromButton);

    if (hitAreaFrames && hitAreaFrames.parent === model && typeof hitAreaFrames.highlight === 'function') {
        const hitAreaDef = model.internalModel?.settings?.hitAreas.find(ha => (ha.name === hitAreaNameFromButton || ha.id === hitAreaNameFromButton));
        if(hitAreaDef) {
            hitAreaFrames.highlight(hitAreaDef.name || hitAreaDef.id); 
        }
    }
}

function highlightHitAreaButtonsInUI(hitAreaNames, specificButtonToHighlight) {
    if (!DOMElements.hitAreasContainer || !selectedModel) return; 

    const buttons = DOMElements.hitAreasContainer.querySelectorAll('.hit-area-btn');
    buttons.forEach(button => {
        button.classList.remove('active'); 
        const buttonHitAreaName = button.textContent; 
        const buttonMatches = hitAreaNames.some(name => name.toLowerCase() === buttonHitAreaName.toLowerCase());
        if (buttonMatches && !specificButtonToHighlight) { 
             setTimeout(() => button.classList.remove('active'), CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
             button.classList.add('active');
        }
    });
    if (specificButtonToHighlight) { 
         setActiveButton(DOMElements.hitAreasContainer, specificButtonToHighlight, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
    }
}

function triggerMotionForHitArea(model, hitAreaName) {
    if (!model) return;
    const motionManager = model.internalModel?.motionManager;
    if (!motionManager?.definitions || Object.keys(motionManager.definitions).length === 0) {
        return;
    }

    const definedGroupNames = Object.keys(motionManager.definitions);
    let motionPlayed = false;
    const lowerHitAreaName = hitAreaName?.toLowerCase(); // hitAreaName here can be the 'name' or 'id'

    if (lowerHitAreaName) {
        const primaryCandidatePatterns = [
            lowerHitAreaName, `tap_${lowerHitAreaName}`, `flick_${lowerHitAreaName}`,
            `hit_${lowerHitAreaName}`, `tap${lowerHitAreaName}`
        ];
        // If lowerHitAreaName was an ID like "HitAreaHead", patterns like "tap_hitareahead" are generated.
        // These patterns are then matched against defined motion group names (e.g., "TapHead", "TapBody").
        // This matching relies on the hit area name/id being part of the motion group name.
        
        if (lowerHitAreaName.startsWith('tap_') || lowerHitAreaName.startsWith('flick_') || lowerHitAreaName.startsWith('hit_')) {
            primaryCandidatePatterns.push(lowerHitAreaName.substring(lowerHitAreaName.indexOf('_') + 1));
        } else if (lowerHitAreaName.startsWith('tap') && !lowerHitAreaName.includes('_')) {
             primaryCandidatePatterns.push(lowerHitAreaName.substring(3));
        }
        const validPrimaryPatterns = [...new Set(primaryCandidatePatterns.filter(p => p))];
        const actualPrimaryMotionGroups = definedGroupNames.filter(definedGroup =>
            validPrimaryPatterns.some(pattern => definedGroup.toLowerCase().includes(pattern)) 
        );

        if (actualPrimaryMotionGroups.length > 0) {
            let groupToPlay = actualPrimaryMotionGroups.find(g => validPrimaryPatterns.some(p => g.toLowerCase() === p));
            if (!groupToPlay) { 
                groupToPlay = actualPrimaryMotionGroups[Math.floor(Math.random() * actualPrimaryMotionGroups.length)];
            }

            try {
                model.motion(groupToPlay);
                motionPlayed = true;
                console.log(`Playing primary motion on model ${model.appModelId}: Group='${groupToPlay}' for hit='${hitAreaName}'`);
            } catch (e) { console.warn(`Primary motion group '${groupToPlay}' failed on model ${model.appModelId}:`, e); }
        }
    }

    if (!motionPlayed) {
        const genericTapGroupCandidates = ['tap', 'idletap', 'tapbody']; 
        
        for (const genericGroupCandidate of genericTapGroupCandidates) {
            const matchedGenericGroup = definedGroupNames.find(defined => defined.toLowerCase() === genericGroupCandidate.toLowerCase());
            if (matchedGenericGroup) {
                try {
                    model.motion(matchedGenericGroup);
                    motionPlayed = true;
                    console.log(`Playing generic motion on model ${model.appModelId}: Group='${matchedGenericGroup}' for hit='${hitAreaName || "Body/Generic"}'`);
                    break; 
                } catch (e) { console.warn(`Generic motion group '${matchedGenericGroup}' failed on model ${model.appModelId}:`, e); }
            }
        }
    }

    if (!motionPlayed) {
        console.log(`No suitable motion found for hit: '${hitAreaName || '(No specific area)'}' on model ${model.appModelId}.`);
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