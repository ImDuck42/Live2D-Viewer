// Make PIXI globally available for pixi-live2d-display
window.PIXI = PIXI;

// Global variables
let app;
let currentModel = null;
let isDragging = false;
let lastPosition = { x: 0, y: 0 };
let modelScale = 1.0;

// DOM Elements
const canvas = document.getElementById('live2d-canvas');
const loadingOverlay = document.getElementById('loading-overlay');
const noModelMessage = document.getElementById('no-model-message');
const modelSelect = document.getElementById('model-select');
const loadButton = document.getElementById('load-button');
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input');
const fitScreenButton = document.getElementById('fit-screen');
const resetPositionButton = document.getElementById('reset-position');
const scaleSlider = document.getElementById('scale-slider');
const scaleValue = document.getElementById('scale-value');
const expressionsContainer = document.getElementById('expressions-container');
const motionsContainer = document.getElementById('motions-container');
const hitAreasContainer = document.getElementById('hit-areas-container');

// Initialize the application
function initApp() {
    // Create PixiJS Application
    app = new PIXI.Application({
        view: canvas,
        autoStart: true,
        resizeTo: canvas.parentElement,
        backgroundColor: 0xf9f9f9,
        antialias: true
    });

    // Set up event listeners
    loadButton.addEventListener('click', loadSelectedModel);
    fileInput.addEventListener('change', handleFileUpload);
    fitScreenButton.addEventListener('click', fitModelToScreen);
    resetPositionButton.addEventListener('click', resetModelPosition);
    scaleSlider.addEventListener('input', updateModelScale);

    // Set up model interaction
    setupModelInteractions();

    // Show the "no model" message initially
    noModelMessage.style.display = 'flex';
    loadingOverlay.style.display = 'none';
}

// Load the model selected from the dropdown
async function loadSelectedModel() {
    const modelUrl = modelSelect.value;
    if (modelUrl) {
        await loadModel(modelUrl);
    } else {
        alert('Please select a model first.');
    }
}

// Handle file upload
async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Currently only supporting direct JSON model files, not ZIP
        if (file.name.endsWith('.model.json') || file.name.endsWith('.model3.json')) {
            try {
                const fileUrl = URL.createObjectURL(file);
                await loadModel(fileUrl);
            } catch (error) {
                console.error('Error loading model from file:', error);
                alert('Failed to load model from file. Please try another file.');
            }
        } else {
            alert('Unsupported file format. Please upload a .model.json or .model3.json file.');
        }
    }
}

// Load a Live2D model
async function loadModel(modelUrl) {
    try {
        // Show loading overlay
        noModelMessage.style.display = 'none';
        loadingOverlay.style.display = 'flex';

        // Clean up existing model if any
        if (currentModel) {
            app.stage.removeChild(currentModel);
            currentModel.destroy();
            currentModel = null;
        }

        // Clear UI elements
        clearUIElements();

        // Load the new model
        const model = await PIXI.live2d.Live2DModel.from(modelUrl);

        // Set up the model
        currentModel = model;
        app.stage.addChild(model);

        // Center the model
        fitModelToScreen();
        
        // Set up interactivity
        setupModelMotions();
        setupModelExpressions();
        setupModelHitAreas();

        // Hide loading overlay
        loadingOverlay.style.display = 'none';

        console.log('Model loaded successfully:', model);
    } catch (error) {
        console.error('Error loading model:', error);
        alert('Failed to load model. Please try another one.');
        loadingOverlay.style.display = 'none';
        noModelMessage.style.display = 'flex';
    }
}

// Fit model to screen
function fitModelToScreen() {
    if (!currentModel) return;

    // Calculate the scaling needed to fit the model
    const containerWidth = app.renderer.width;
    const containerHeight = app.renderer.height;
    const modelWidth = currentModel.width;
    const modelHeight = currentModel.height;

    // Calculate scale to fit (with some padding)
    const scaleX = (containerWidth * 0.9) / modelWidth;
    const scaleY = (containerHeight * 0.9) / modelHeight;
    const scale = Math.min(scaleX, scaleY);

    // Set model scale and position
    currentModel.scale.set(scale);
    currentModel.position.set(containerWidth / 2, containerHeight / 2);
    currentModel.anchor.set(0.5, 0.5);

    // Update UI
    modelScale = scale;
    scaleSlider.value = Math.min(Math.max(scale, 0.5), 2);
    scaleValue.textContent = scale.toFixed(1);
}

// Reset model position
function resetModelPosition() {
    if (!currentModel) return;
    
    // Center the model with current scale
    currentModel.position.set(app.renderer.width / 2, app.renderer.height / 2);
    currentModel.anchor.set(0.5, 0.5);
}

// Update model scale
function updateModelScale() {
    if (!currentModel) return;
    
    modelScale = parseFloat(scaleSlider.value);
    currentModel.scale.set(modelScale);
    scaleValue.textContent = modelScale.toFixed(1);
}

// Set up model motions
function setupModelMotions() {
    if (!currentModel || !currentModel.internalModel) return;
    
    // Clear previous motions
    motionsContainer.innerHTML = '';

    // Get model definition and motion groups
    const modelDef = currentModel.internalModel.settings;
    
    // Check if motions exist in the model
    if (!modelDef.motions || Object.keys(modelDef.motions).length === 0) {
        motionsContainer.innerHTML = '<p class="no-content">No motions available</p>';
        return;
    }

    // Add buttons for each motion group
    Object.keys(modelDef.motions).forEach(group => {
        const motions = modelDef.motions[group];
        
        // Skip if the motion group is empty
        if (!motions || motions.length === 0) return;
        
        // Create group header
        const groupHeader = document.createElement('div');
        groupHeader.className = 'motion-group';
        groupHeader.style.width = '100%';
        groupHeader.innerHTML = `<h4>${group}</h4>`;
        motionsContainer.appendChild(groupHeader);
        
        // Create buttons for each motion in the group
        motions.forEach((motion, index) => {
            const button = document.createElement('div');
            button.className = 'motion-btn';
            button.textContent = `${group} ${index + 1}`;
            button.onclick = () => {
                currentModel.motion(group, index);
                
                // Highlight active button
                const allButtons = motionsContainer.querySelectorAll('.motion-btn');
                allButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            };
            motionsContainer.appendChild(button);
        });
    });
}

// Set up model expressions
function setupModelExpressions() {
    if (!currentModel || !currentModel.internalModel) return;
    
    // Clear previous expressions
    expressionsContainer.innerHTML = '';
    
    // Get model definition and expressions
    const modelDef = currentModel.internalModel.settings;
    
    // Check if expressions exist in the model
    if (!modelDef.expressions || modelDef.expressions.length === 0) {
        expressionsContainer.innerHTML = '<p class="no-content">No expressions available</p>';
        return;
    }
    
    // Add button for each expression
    modelDef.expressions.forEach((expression, index) => {
        const button = document.createElement('div');
        button.className = 'expression-btn';
        button.textContent = expression.name || `Expression ${index + 1}`;
        button.onclick = () => {
            currentModel.expression(expression.name);
            
            // Highlight active button
            const allButtons = expressionsContainer.querySelectorAll('.expression-btn');
            allButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        };
        expressionsContainer.appendChild(button);
    });
}

// Set up model hit areas
function setupModelHitAreas() {
    if (!currentModel || !currentModel.internalModel) return;
    
    // Clear previous hit areas
    hitAreasContainer.innerHTML = '';
    
    // Get hit areas from the model definition
    const modelDef = currentModel.internalModel.settings;
    
    // Check if hit areas exist in the model
    if (!modelDef.hitAreas || modelDef.hitAreas.length === 0) {
        hitAreasContainer.innerHTML = '<p class="no-content">No hit areas available</p>';
        return;
    }
    
    // Add button for each hit area
    modelDef.hitAreas.forEach(hitArea => {
        const button = document.createElement('div');
        button.className = 'hit-area-btn';
        button.textContent = hitArea.name;
        button.onclick = () => {
            // Simulate hitting this area
            simulateHitArea(hitArea.name);
            
            // Highlight active button briefly
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active');
            }, 500);
        };
        hitAreasContainer.appendChild(button);
    });
}

// Simulate hitting a specific hit area
function simulateHitArea(hitAreaName) {
    if (!currentModel) return;
    
    // Different behavior based on hit area
    switch (hitAreaName.toLowerCase()) {
        case 'head':
        case 'face':
            currentModel.motion('tap_face');
            break;
        case 'face':
            currentModel.motion('tap_face');
            break;
        case 'body':
            currentModel.motion('tap_body');
            break;
        case 'special':
            currentModel.motion('special');
            break;
        default:
            // Try generic motion with hit area name
            currentModel.motion(`tap_${hitAreaName.toLowerCase()}`);
            break;
    }
    
    // Log hit event
    console.log(`Hit area triggered: ${hitAreaName}`);
}

// Set up interactions with the model (drag, hit areas)
function setupModelInteractions() {
    // Mouse events for dragging
    canvas.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', endDrag);
    
    // Touch events for mobile
    canvas.addEventListener('touchstart', startDragTouch);
    window.addEventListener('touchmove', dragTouch);
    window.addEventListener('touchend', endDrag);
    
    // Mouse wheel for zooming
    canvas.addEventListener('wheel', handleZoom);
    
    // Add hit test event to the Live2D model
    app.stage.on('pointertap', (event) => {
        if (!currentModel) return;
        
        // Convert global point to local point in model
        const point = currentModel.toLocal(event.global);
        
        // Hit test
        const hitAreas = currentModel.hitTest(point.x, point.y);
        
        if (hitAreas && hitAreas.length > 0) {
            console.log('Hit areas:', hitAreas);
            
            // Trigger motion based on hit area
            if (hitAreas.includes('face')) {
                currentModel.motion('tap_face');
            } else if (hitAreas.includes('body')) {
                currentModel.motion('tap_body');
            } else {
                // Try to find a motion for the first hit area
                currentModel.motion(`tap_${hitAreas[0]}`);
            }
            
            // Highlight the corresponding button
            hitAreas.forEach(area => {
                const buttons = hitAreasContainer.querySelectorAll('.hit-area-btn');
                buttons.forEach(button => {
                    if (button.textContent.toLowerCase() === area.toLowerCase()) {
                        button.classList.add('active');
                        setTimeout(() => {
                            button.classList.remove('active');
                        }, 500);
                    }
                });
            });
        }
    });
}

// Start dragging the model
function startDrag(event) {
    if (!currentModel) return;
    isDragging = true;
    lastPosition = { x: event.clientX, y: event.clientY };
}

// Start dragging on touch devices
function startDragTouch(event) {
    if (!currentModel || !event.touches[0]) return;
    isDragging = true;
    lastPosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    event.preventDefault();
}

// Drag the model
function drag(event) {
    if (!isDragging || !currentModel) return;
    
    const dx = event.clientX - lastPosition.x;
    const dy = event.clientY - lastPosition.y;
    
    currentModel.position.x += dx;
    currentModel.position.y += dy;
    
    lastPosition = { x: event.clientX, y: event.clientY };
}

// Drag on touch devices
function dragTouch(event) {
    if (!isDragging || !currentModel || !event.touches[0]) return;
    
    const dx = event.touches[0].clientX - lastPosition.x;
    const dy = event.touches[0].clientY - lastPosition.y;
    
    currentModel.position.x += dx;
    currentModel.position.y += dy;
    
    lastPosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    event.preventDefault();
}

// End dragging
function endDrag() {
    isDragging = false;
}

// Handle zooming with mouse wheel
function handleZoom(event) {
    if (!currentModel) return;
    event.preventDefault();
    
    // Calculate new scale
    const zoomIntensity = 0.1;
    const wheel = event.deltaY < 0 ? 1 : -1;
    const zoom = Math.exp(wheel * zoomIntensity);
    
    // Apply new scale (with limits)
    const newScale = Math.min(Math.max(currentModel.scale.x * zoom, 0.1), 3.0);
    currentModel.scale.set(newScale);
    
    // Update UI
    modelScale = newScale;
    
    // Update slider (but only if within range)
    if (newScale >= 0.5 && newScale <= 2) {
        scaleSlider.value = newScale;
    }
    
    scaleValue.textContent = newScale.toFixed(1);
}

// Clear UI elements
function clearUIElements() {
    expressionsContainer.innerHTML = '<p class="no-content">No expressions available</p>';
    motionsContainer.innerHTML = '<p class="no-content">No motions available</p>';
    hitAreasContainer.innerHTML = '<p class="no-content">No hit areas available</p>';
}

// Initialize when the page loads
window.addEventListener('DOMContentLoaded', initApp);