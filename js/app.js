import { log }                                                        from './logger.js';
import { DOM, state }                                                 from './config.js';
import { initKeyboardShortcuts, initContextMenu }                     from './context.js';
import { loadModel, deleteSelectedModel, setSelectedModel }           from './model.js';
import { registerHitAreaPopulator, updateSelectionOutline, updateUI } from './ui.js';
import {
  simulateTapOnHitArea,
  toggleHitAreaVisibility,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handleStageTap,
  handleCanvasZoom,
  handleModelLabelScroll,
} from './interaction.js';

// ===========================================================================
// Initialization
// ===========================================================================

const setupStageEvents = () => {
  state.app.stage.interactive = true;
  state.app.stage.hitArea     = state.app.screen;

  state.app.stage.on('pointerdown',      handlePointerDown);
  state.app.stage.on('pointermove',      handlePointerMove);
  state.app.stage.on('pointerup',        handlePointerUp);
  state.app.stage.on('pointerupoutside', handlePointerUp);
  state.app.stage.on('pointertap',       handleStageTap);

  DOM.canvas.addEventListener('wheel', handleCanvasZoom, { passive: false });
};

const initDropdown = () => {
  const { dropdown, dropdownLabel, dropdownList, dropdownValue } = DOM;
  if (!dropdown) return;

  const toggle = (forceOpen) => {
    const open = forceOpen ?? !dropdown.classList.contains('open');
    dropdown.setAttribute('aria-expanded', String(open));
    dropdown.classList.toggle('open', open);
  };

  dropdown.addEventListener('click', () => toggle());
  dropdown.addEventListener('keydown', (event) => event.key === 'Escape' && toggle(false));

  dropdownList.querySelectorAll('.dropdown-option').forEach((option) => {
    option.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdownLabel.textContent = option.textContent.trim();
      dropdownValue.value       = option.dataset.value ?? '';
      toggle(false);
    });
  });

  // Clicking outside closes the dropdown.
  document.addEventListener('click', (event) => !dropdown.contains(event.target) && toggle(false));
};

const setupUIEvents = () => {
  DOM.loadSelectedBtn.addEventListener('click', () => loadModel(DOM.dropdownValue.value));
  DOM.loadUrlBtn.addEventListener('click', () => loadModel(DOM.modelUrlInput.value.trim()));

  DOM.modelUrlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') loadModel(DOM.modelUrlInput.value.trim());
  });

  DOM.hitareasToggle.addEventListener('change', toggleHitAreaVisibility);
  DOM.deleteModelBtn.addEventListener('click', deleteSelectedModel);

  // Click on filename label copies it to the clipboard.
  DOM.modelLabel.addEventListener('click', () => {
    const text = DOM.modelLabel.textContent?.replace('File: ', '');
    if (text) navigator.clipboard.writeText(text);
  });

  DOM.modelLabel.addEventListener('wheel', handleModelLabelScroll, { passive: false });
};

const initSelectionOutline = () => {
  state.selectionOutline         = new PIXI.Graphics();
  state.selectionOutline.visible = false;
  state.app.stage.addChild(state.selectionOutline);
};

// Called every frame by the PIXI ticker.
const onTick = () => {
  if (state.selectedModel && state.selectionOutline.visible) {
    updateSelectionOutline(state.selectedModel);
    // Keep the outline on top of all models.
    state.app.stage.setChildIndex(
      state.selectionOutline,
      state.app.stage.children.length - 1,
    );
  }
};

// If a ?model= query parameter is present, load it immediately and clean up the URL.
const handleURLParams = () => {
  const params   = new URLSearchParams(window.location.search);
  const modelURL = params.get('model');

  if (modelURL) {
    log('SYSTEM', `Found 'model' URL parameter: ${modelURL}`);
    DOM.modelUrlInput.value = modelURL;
    loadModel(modelURL);
    window.history.replaceState({}, '', window.location.pathname);
  }
};

const printBanner = () => {
  const ascii = `
            ☆・゜・。。・゜゜・。。・゜★
★·.\`¯\`·.·★ L I V E 2 D   V I E W E R ★·.\`¯\`·.·★
             ★・。。・゜゜・。。・゜・☆

           ⭐ GH:   github.com/ImDuck42
           📨 Mail: imduck420@gmail.com
           💬 DC:   @hu7ao

★·.\`¯\`·.·★ ══════ Version 5.0 ══════ ★·.\`¯\`·.·★
`;
  console.log(
    '%c' + ascii,
    'font-family:Courier New,monospace;font-size:12px;line-height:1.4;font-weight:bold;' +
    'background:linear-gradient(135deg,#8c5eff,#ff67d7);-webkit-background-clip:text;' +
    '-webkit-text-fill-color:transparent;',
  );
};

const initApp = () => {
  if (!DOM.canvas) {
    log('ERROR', 'Fatal: canvas element not found.');
    return;
  }

  try {
    state.app = new PIXI.Application({
      view:            DOM.canvas,
      resizeTo:        DOM.canvas.parentElement,
      backgroundColor: 0x1a1a2e,
      antialias:       true,
      autoStart:       true,
      resolution:      window.devicePixelRatio || 1,
      autoDensity:     true,
    });
  } catch (error) {
    log('ERROR', 'Fatal: Failed to create PIXI Application.', error);
    DOM.loadingOverlay.innerHTML =
      '<p class="loading-text error-msg">Error: Could not initialize graphics. ' +
      'Please try a different browser or update your graphics drivers.</p>';
    DOM.loadingOverlay.hidden = false;
    return;
  }

  registerHitAreaPopulator(simulateTapOnHitArea);
  initSelectionOutline();
  state.app.ticker.add(onTick);
  log('SYSTEM', 'Live2D Viewer Initialized.');

  setupUIEvents();
  setupStageEvents();
  initDropdown();
  initKeyboardShortcuts();
  initContextMenu();
  handleURLParams();
  updateUI();
};

printBanner();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}