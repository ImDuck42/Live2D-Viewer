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
const modelUrlInput = document.getElementById('model-url-input'); // New
const loadUrlButton = document.getElementById('load-url-button'); // New
const uploadButton = document.getElementById('upload-button'); // Optional
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
    if (!canvas) {
        console.error("Fatal Error: Canvas element 'live2d-canvas' not found.");
        alert("Initialization failed: Canvas element missing.");
        return;
    }
    if (!fileInput) {
        console.error("Fatal Error: File input element 'file-input' not found.");
        alert("Initialization failed: File input missing.");
        return;
    }
    if (!loadingOverlay || !noModelMessage || !expressionsContainer || !motionsContainer || !hitAreasContainer) {
         console.error("Fatal Error: One or more essential UI container elements are missing.");
         alert("Initialization failed: Essential UI elements missing.");
         return;
    }
    if (!modelUrlInput || !loadUrlButton) { // New checks
        console.error("Fatal Error: URL input or load URL button elements are missing.");
        alert("Initialization failed: URL loading UI elements missing.");
        return;
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
    loadUrlButton?.addEventListener('click', loadFromUrlInput); // New
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
    if (!modelUrlInput) {
        console.error("Model URL input field ('model-url-input') not found.");
        alert('Model URL input field is missing.');
        return;
    }
    const modelUrl = modelUrlInput.value.trim();
    if (modelUrl) {
        // Basic URL validation (can be improved)
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
    if (!files || files.length === 0) {
        return; // No files selected
    }

    console.log(`Processing ${files.length} file(s) from input.`);

    const hasSettingsFile = Array.from(files).some(file =>
        file.name.endsWith('.model.json') || file.name.endsWith('.model3.json')
    );
    const isSingleJson = files.length === 1 && hasSettingsFile;

    if (files.length > 1 && !hasSettingsFile) {
        console.warn("Warning: No *.model.json or *.model3.json file detected in the selection. Folder uploads might fail if the main settings file is missing or the library cannot automatically detect it.");
    }

    try {
        let modelSource = files; // Default to FileList for folder/zip handling

        if (isSingleJson) {
            console.log("Loading single model JSON file via Object URL.");
            const fileUrl = URL.createObjectURL(files[0]);
            setTimeout(() => URL.revokeObjectURL(fileUrl), CONFIG.FILE_URL_REVOKE_TIMEOUT);
            modelSource = fileUrl;
        } else {
            console.log("Attempting to load model from FileList (likely folder or zip).");
        }

        await loadModel(modelSource);

    } catch (error) {
        console.error('Error initiating model load from file input:', error);
        alert(`Failed to start loading model. Error: ${error.message}`);
        loadingOverlay.style.display = 'none';
        noModelMessage.style.display = currentModel ? 'none' : 'flex';
    } finally {
        event.target.value = null;
    }
}


/**
 * Loads a Live2D model from a given source (URL, FileList, File[]).
 * @param {string | FileList | File[]} source - The source to load the model from.
 */
async function loadModel(source) {
    if (!app || !app.stage) {
        console.error("PIXI Application not ready for loading.");
        alert("Error: Application not initialized properly.");
        return;
    }

    // --- Show loading state ---
    noModelMessage.style.display = 'none';
    loadingOverlay.style.display = 'flex';
    clearUIElements(); // Clear old controls

    // --- Cleanup previous model ---
    if (currentModel) {
        console.log("Destroying previous model...");
        app.stage.removeChild(currentModel);
        currentModel.destroy({ children: true, texture: true, baseTexture: true }); // Full cleanup
        currentModel = null;
        hitAreaFrames = null; // Ensure visualizer reference is cleared
    }

    // --- Load new model ---
    try {
        console.log("Loading new model from:", typeof source === 'string' ? source : `${source.length} files`);

        const model = await PIXI.live2d.Live2DModel.from(source, {
            onError: (e) => {
                 console.error("Error during Live2DModel.from operation:", e);
                 alert(`Failed during model loading process: ${e.message || 'Unknown error'}. Please check console.`);
            },
        });

        console.log("Model loaded:", model.internalModel?.settings?.name || "Unnamed Model");

        // --- Setup model ---
        currentModel = model;
        app.stage.addChild(model);

        // Enable HitAreaFrames visualizer if available
        if (PIXI.live2d.HitAreaFrames) {
            hitAreaFrames = new PIXI.live2d.HitAreaFrames();
            currentModel.addChild(hitAreaFrames);
            hitAreaFrames.visible = showHitAreasCheckbox?.checked ?? false;
            console.log("HitAreaFrames added to model.");
            if (showHitAreasCheckbox) showHitAreasCheckbox.disabled = false;
        } else {
            console.warn('HitAreaFrames feature is unavailable. Load pixi-live2d-display/extra for this.');
            hitAreaFrames = null;
            if (showHitAreasCheckbox) showHitAreasCheckbox.disabled = true;
        }

        // Wait briefly before fitting - ensures bounds are calculated
        await new Promise(resolve => setTimeout(resolve, 100));
        fitModelToScreen();

        // Populate UI controls
        setupModelControls();

        // Set initial cursor style
        currentModel.cursor = 'grab';

        console.log('Model setup complete.');
        noModelMessage.style.display = 'none';

    } catch (error) {
        console.error('Error during model loading or setup:', error);
        alert(`Failed to load model. Check console for details. Error: ${error.message || error}`);

        if (currentModel && app.stage.children.includes(currentModel)) {
             app.stage.removeChild(currentModel);
             currentModel.destroy({ children: true, texture: true, baseTexture: true });
        }
        currentModel = null;
        hitAreaFrames = null;

        const hasLive2DModel = app.stage.children.some(c => c instanceof PIXI.live2d.Live2DModel);
        noModelMessage.style.display = hasLive2DModel ? 'none' : 'flex';
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
    if (!currentModel || !app?.renderer || !canvas.parentElement) {
        return; // Not ready to fit
    }

    const parent = canvas.parentElement;
    const viewWidth = parent.clientWidth;
    const viewHeight = parent.clientHeight;

    const modelWidth = currentModel.width;
    const modelHeight = currentModel.height;

    if (!modelWidth || !modelHeight || modelWidth <= 0 || modelHeight <= 0) {
        console.warn("Model dimensions are invalid or not ready, cannot fit to screen yet.");
        return;
    }

    const scaleX = (viewWidth * CONFIG.MODEL_FIT_PADDING) / modelWidth;
    const scaleY = (viewHeight * CONFIG.MODEL_FIT_PADDING) / modelHeight;
    const scale = Math.min(scaleX, scaleY);

    currentModel.scale.set(scale);
    currentModel.anchor.set(0.5, 0.5); // Center anchor
    currentModel.position.set(viewWidth / 2, viewHeight / 2); // Center model in view

    console.log(`Model fitted. View: ${viewWidth}x${viewHeight}, Model Original: ${modelWidth.toFixed(0)}x${modelHeight.toFixed(0)}, Applied Scale: ${scale.toFixed(3)}`);
}

/**
 * Sets up all model-related UI controls (Motions, Expressions, Hit Areas).
 */
function setupModelControls() {
    setupModelMotions(); // Use the reverted layout function
    setupModelExpressions(); // Keep using helper for consistency here
    setupModelHitAreas(); // Keep using helper for consistency here
}

/**
 * Creates a standard button element for UI controls (Used for Expressions/HitAreas).
 * @param {string} text - Button text.
 * @param {string} title - Button tooltip.
 * @param {() => void} onClick - Click handler function.
 * @param {string} [className='control-btn'] - CSS class name.
 * @returns {HTMLDivElement} - The created button element.
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
 * Adds a "no content" message to a container.
 * @param {HTMLElement} container - The container element.
 * @param {string} contentType - Type of content (e.g., "motions").
 */
function setNoContentMessage(container, contentType) {
    container.innerHTML = `<p class="no-content">No ${contentType} defined</p>`;
}

/**
 * Populates the motions UI container using the original layout structure.
 */
function setupModelMotions() {
    motionsContainer.innerHTML = ''; // Clear previous
    const motionManager = currentModel?.internalModel?.motionManager;
    const definitions = motionManager?.definitions;

    if (!definitions || Object.keys(definitions).length === 0) {
        setNoContentMessage(motionsContainer, 'motions');
        return;
    }

    // Get motion groups and sort alphabetically for consistent order
    const groupNames = Object.keys(definitions).sort();

    groupNames.forEach(group => {
        const motions = definitions[group];
        if (!motions || motions.length === 0) return; // Skip empty groups

        // Create buttons for each motion index (Original Style)
        motions.forEach((motionDef, index) => {
            const button = document.createElement('div');
            button.className = 'motion-btn'; // Use original class name

            // Extract a user-friendly name
            const pathName = motionDef?.File?.split(/[/\\]/).pop()?.replace(/\.(motion3\.json|mtn)$/i, '');
            const explicitName = motionDef?.Name;
            const motionName = explicitName || pathName || `${group} ${index + 1}`;

            button.textContent = motionName;
            button.title = `Play Motion: ${group} [${index}]`;
            button.onclick = () => {
                 try {
                     console.log(`Playing motion: Group=${group}, Index=${index}, Name=${motionName}`);
                     currentModel?.motion(group, index);
                     // Highlight active button
                     motionsContainer.querySelectorAll('.motion-btn.active').forEach(btn => btn.classList.remove('active'));
                     button.classList.add('active');
                 } catch (e) {
                     console.error(`Error playing motion ${group}[${index}] (${motionName}):`, e);
                     alert(`Could not play motion: ${motionName}. ${e.message}`);
                 }
            };
            // Append button directly to the main container (Original Style)
            motionsContainer.appendChild(button);
        });
    });

    if (motionsContainer.childElementCount === 0) {
        setNoContentMessage(motionsContainer, 'motions'); // Fallback if only empty groups existed
    }
}

/**
 * Populates the expressions UI container.
 */
function setupModelExpressions() {
    expressionsContainer.innerHTML = ''; // Clear previous
    const expressionDefs = currentModel?.internalModel?.expressions ?? // V3 internal
                           currentModel?.internalModel?.settings?.expressions ?? // V2/V3 settings
                           []; // Default

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
        const button = createControlButton( // Use helper for consistency
            expressionName,
            `Set Expression: ${expressionName}`,
            () => {
                try {
                    console.log(`Setting expression: ${expressionName}`);
                    currentModel?.expression(expressionName);
                    expressionsContainer.querySelectorAll('.expression-btn.active').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                } catch (e) {
                    console.error(`Error setting expression ${expressionName}:`, e);
                    alert(`Could not set expression: ${expressionName}. It might not be defined correctly. ${e.message}`);
                }
            },
            'expression-btn' // Specific class
        );
        expressionsContainer.appendChild(button);
    });
}

/**
 * Populates the hit areas UI container.
 */
function setupModelHitAreas() {
    hitAreasContainer.innerHTML = ''; // Clear previous
    const hitAreaDefs = currentModel?.internalModel?.settings?.hitAreas;

    if (!hitAreaDefs || hitAreaDefs.length === 0) {
        setNoContentMessage(hitAreasContainer, 'hit areas');
        return;
    }

    let validHitAreasFound = false;
    hitAreaDefs.forEach(hitAreaDef => {
        const hitAreaName = hitAreaDef.name || hitAreaDef.Name;
        if (!hitAreaName) {
            console.warn("Found hit area definition without a name, skipping.");
            return;
        }
        validHitAreasFound = true;
        const button = createControlButton( // Use helper for consistency
            hitAreaName,
            `Simulate Tap on Hit Area: ${hitAreaName}`,
            () => simulateHitArea(hitAreaName),
            'hit-area-btn' // Specific class
        );
        hitAreasContainer.appendChild(button);
    });

    if (!validHitAreasFound) {
         setNoContentMessage(hitAreasContainer, 'valid hit areas');
    }
}

/**
 * Clears UI elements related to the model (buttons, messages).
 */
function clearUIElements() {
    const containers = [expressionsContainer, motionsContainer, hitAreasContainer];
    containers.forEach(container => {
        if (container) {
            setNoContentMessage(container, 'model');
        }
    });
    document.querySelectorAll('.motion-btn.active, .expression-btn.active, .hit-area-btn.active')
        .forEach(btn => btn.classList.remove('active'));
}

/**
 * Toggles the visibility of the HitAreaFrames overlay.
 */
function toggleHitAreaFrames() {
    if (hitAreaFrames && currentModel) {
        hitAreaFrames.visible = showHitAreasCheckbox?.checked ?? false;
        console.log(`HitAreaFrames visibility set to: ${hitAreaFrames.visible}`);
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
    app.stage.hitArea = app.screen;

    app.stage.on('pointerdown', handlePointerDown);
    app.stage.on('pointermove', handlePointerMove);
    app.stage.on('pointerup', handlePointerUp);
    app.stage.on('pointerupoutside', handlePointerUp);
    app.stage.on('pointertap', handlePointerTap);

    canvas.addEventListener('wheel', handleZoom, { passive: false });
}

/**
 * Handles pointer down event for initiating potential drag.
 * Reverted hit test logic.
 */
function handlePointerDown(event) {
    if (!currentModel || !event.data || !app?.renderer) return; // Add renderer check

    wasDragging = false; // Reset drag state

    // Use Pixi's interaction manager to hit test against the stage
    // This is generally more accurate for complex display objects like the model
    const hitObject = app.renderer.plugins.interaction.hitTest(event.data.global, app.stage);

    // Check if the object hit was the current model
    if (hitObject === currentModel) {
        isDragging = true;
        // Calculate offset relative to the model's parent (the stage)
        const pointerInStage = currentModel.parent.toLocal(event.data.global);
        dragStartOffset.x = pointerInStage.x - currentModel.x;
        dragStartOffset.y = pointerInStage.y - currentModel.y;
        currentModel.cursor = 'grabbing';
    } else {
        isDragging = false; // Not dragging if pointerdown is not on the model
    }
}

/**
 * Handles pointer move event for dragging the model.
 */
function handlePointerMove(event) {
    if (!isDragging || !currentModel || !event.data) return;

    wasDragging = true; // Indicate movement occurred

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
        if (currentModel) {
            currentModel.cursor = 'grab'; // Restore cursor
        }
        // Keep wasDragging state for handlePointerTap to check
    }
    isDragging = false; // Always end dragging state on pointer up/upoutside
}

/**
 * Handles mouse wheel event for zooming the model.
 */
function handleZoom(event) {
    if (!currentModel || !app?.renderer) return; // Add renderer check
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
    if (wasDragging || isDragging) { // Check if a drag just finished or is somehow still active
        // console.log("Pointer tap ignored because a drag occurred.");
        wasDragging = false; // Reset for the next interaction cycle
        return;
    }
    if (!currentModel || !event.data) {
        return;
    }

    currentModel.updateTransform();
    const globalPos = event.data.global;
    const localPos = currentModel.toLocal(globalPos);

    const hitAreaNames = currentModel.hitTest(localPos.x, localPos.y);

    if (hitAreaNames.length > 0) {
        console.log('Tap hit detected area(s):', hitAreaNames);
        highlightHitAreaButtons(hitAreaNames);
        playMotionForHitArea(hitAreaNames[0]);
    } else {
        console.log("Tap occurred, but no defined hit area detected at:", localPos);
        // playMotionForHitArea(null); // Optional: trigger background tap motion
    }

    wasDragging = false; // Reset after tap processing too
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

    // Optionally highlight the frame visualizer briefly
    if (hitAreaFrames?.highlight) { // Check if highlight method exists
         hitAreaFrames.highlight(hitAreaName);
    } else if (hitAreaFrames && hitAreaFrames.visible) {
        // Basic visual feedback if highlight method is missing: temporarily make others less visible? Complex.
        // Or just rely on the button highlight.
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
            button.classList.add('active'); // Add highlight class
            setTimeout(() => {
                button.classList.remove('active'); // Remove after duration
            }, CONFIG.HIT_AREA_BUTTON_HIGHLIGHT_DURATION);
        }
    });
}

/**
 * Attempts to find and play a motion related to a hit area tap.
 * @param {string | null} hitAreaName - The name of the hit area, or null for a potential background tap.
 */
function playMotionForHitArea(hitAreaName) {
    const motionManager = currentModel?.internalModel?.motionManager;
    if (!motionManager?.definitions || Object.keys(motionManager.definitions).length === 0) {
        console.warn("Cannot play hit motion: MotionManager or definitions not available.");
        return;
    }

    const definedGroups = Object.keys(motionManager.definitions);
    let motionPlayed = false;

    const potentialGroups = hitAreaName
        ? [ `tap_${hitAreaName}`, hitAreaName ] // Priority: TapHead, Fallback: Head
        : [ 'tap' ]; // Generic Tap for background/fallback

    let targetGroup = null;
    for (const potential of potentialGroups) {
        const potentialLower = potential.toLowerCase();
        const foundGroup = definedGroups.find(defined => defined.toLowerCase() === potentialLower);
        if (foundGroup) {
            targetGroup = foundGroup;
            break;
        }
    }

    if (targetGroup) {
        try {
            console.log(`Playing motion for hit '${hitAreaName || 'Generic Tap'}': Group='${targetGroup}'`);
            currentModel.motion(targetGroup); // Play random motion from the group
            motionPlayed = true;
        } catch (e) {
            console.warn(`Motion group '${targetGroup}' exists but failed to play for hit '${hitAreaName || 'Generic Tap'}':`, e);
        }
    }

    if (!motionPlayed && hitAreaName && targetGroup?.toLowerCase() !== 'tap') {
        const genericTapGroup = definedGroups.find(defined => defined.toLowerCase() === 'tap');
        if (genericTapGroup) {
             try {
                 console.log(`Playing generic 'Tap' motion as fallback for hit '${hitAreaName}': Group='${genericTapGroup}'`);
                 currentModel.motion(genericTapGroup);
                 motionPlayed = true;
             } catch (e) {
                 console.warn(`Generic 'Tap' motion failed to play as fallback:`, e);
             }
        }
    }

    if (!motionPlayed) {
        console.log(`No suitable motion group found or played for hit: ${hitAreaName || '(No specific area)'}`);
    }
}


//==============================================================================
// STARTUP
//==============================================================================

// Initialize the application when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', initApp);