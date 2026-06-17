import { log }                from './logger.js';
import { CONFIG, DOM, state } from './config.js';

// ===========================================================================
// Utilities
// ===========================================================================

// Briefly marks a button as active and removes the class from any sibling that has it.
export const highlightButton = (button, container) => {
  if (!container) return;
  container.querySelectorAll('.active').forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), CONFIG.HIT_HIGHLIGHT_MS);
};

export const setEmptyMessage = (container, contentType) => {
  if (container) {
    container.innerHTML = `<p class="empty-msg">No ${contentType} available</p>`;
  }
};

// Creates a button for triggering an expression, motion, or hit-area action.
export const createControlButton = (label, type, onClick) => {
  const btn       = document.createElement('button');
  btn.type        = 'button';
  btn.className   = `feature-btn ${type}-btn`;
  btn.textContent = label;
  btn.title       = `Trigger ${type}: ${label}`;
  btn.onclick     = () => {
    log('UI', `Triggering ${type}: ${label}`);
    onClick(btn);
    highlightButton(btn, DOM[`${type}Panel`]);
  };
  return btn;
};

// ===========================================================================
// Control panel populators
// ===========================================================================

// Maps panel type names to their populator functions.
const populators = {
  expressions: (model) => {
    const raw  = model.internalModel?.expressions ?? model.internalModel?.settings?.expressions;
    let items  = [];

    if (Array.isArray(raw)) {
      items = raw;
    } else if (raw && typeof raw === 'object') {
      items = Object.entries(raw).map(([name, file]) => ({ Name: name, File: file }));
    }

    return items.map((exp, idx) => {
      const name = exp.Name || exp.name || `Expression ${idx + 1}`;
      return { name, action: () => model.expression(name) };
    });
  },

  motions: (model) => {
    const manager     = model.internalModel?.motionManager;
    const definitions = manager?.definitions ?? {};

    const items = Object.entries(definitions).flatMap(([group, list]) =>
      list.map((motion, idx) => ({
        name: motion.Name
          || motion.File?.split('/').pop().replace(/\.(motion3\.json|mtn)$/i, '')
          || group,
        action: () => {
          // Stop any current motion before starting the new one to avoid blending.
          manager?.stopAllMotions?.();
          setTimeout(() => model.motion(group, idx), 0);
        },
      }))
    );

    // Disambiguate duplicate names by appending an incrementing counter.
    const counts = items.reduce((acc, { name }) => {
      acc[name] = (acc[name] ?? 0) + 1;
      return acc;
    }, {});

    const seen = {};
    for (const item of items) {
      item.displayName = counts[item.name] > 1
        ? `${item.name} ${(seen[item.name] = (seen[item.name] ?? 0) + 1)}`
        : item.name;
    }

    return items;
  },

  hitareas: null,
};

// Call once during app init to wire up the hit-area populator.
export const registerHitAreaPopulator = (simulateTapFn) => {
  populators.hitareas = (model) =>
    (model.internalModel?.settings?.hitAreas ?? []).map((area) => {
      const name = area.Name || area.name || area.Id;
      return { name, action: (btn) => simulateTapFn(model, name, btn) };
    });
};

// Populates a single panel type for the given model.
const populatePanel = (type, model) => {
  const container = DOM[`${type}Panel`];
  const populator = populators[type];
  if (!container || !populator) return;

  container.innerHTML = '';
  const items = populator(model).sort((a, b) =>
    (a.displayName ?? a.name).localeCompare(b.displayName ?? b.name)
  );

  if (items.length > 0) {
    log('UI', `Populating ${items.length} ${type} controls.`);
    for (const item of items) {
      container.appendChild(createControlButton(item.displayName ?? item.name, type, item.action));
    }
  } else {
    log('UI', `No ${type} found for this model.`);
    setEmptyMessage(container, type);
  }
};

// ===========================================================================
// UI update helpers
// ===========================================================================

export const updateControlPanel = () => {
  log('UI', 'Updating control panel.');
  const types = Object.keys(populators);

  if (state.selectedModel) {
    types.forEach((type) => populatePanel(type, state.selectedModel));
  } else {
    types.forEach((type) => setEmptyMessage(DOM[`${type}Panel`], type));
  }
};

export const updateLoadingState = (isLoading = false, message = 'Loading model...') => {
  DOM.loadingOverlay.hidden = !isLoading;
  DOM.emptyMessage.hidden   = !(state.models.length === 0 && !isLoading);

  if (isLoading) {
    const textEl = DOM.loadingOverlay.querySelector('.loading-text');
    if (textEl) textEl.textContent = message;
  }
};

export const updateDeleteButton = () => {
  DOM.deleteModelBtn.disabled  = !state.selectedModel;
  if (DOM.screenshotBtn) DOM.screenshotBtn.disabled = !state.selectedModel;
};

export const updateModelLabel = () => {
  if (!state.selectedModel) {
    DOM.modelLabel.hidden = true;
    return;
  }

  const settings = state.selectedModel.internalModel?.settings;
  const filename = settings?.url?.split('/').pop()
    ?? settings?.model?.split('/').pop()
    ?? 'Unknown';

  DOM.modelLabel.textContent =
    filename.length > 25
      ? `File: ${filename.slice(0, 25)}...`
      : `File: ${filename}`;

  DOM.modelLabel.hidden = false;
};

export const updateUI = () => {
  updateLoadingState();
  updateDeleteButton();
  updateControlPanel();
  updateModelLabel();
  DOM.hitareasToggle.disabled = !state.selectedModel;
};

// ===========================================================================
// Selection outline
// ===========================================================================

export const updateSelectionOutline = (model) => {
  if (!state.selectionOutline || !model?.getBounds) return;

  state.selectionOutline.clear();
  const bounds = model.getBounds(false);

  if (bounds.width > 0 && bounds.height > 0) {
    state.selectionOutline.lineStyle(
      CONFIG.OUTLINE_THICKNESS,
      CONFIG.OUTLINE_COLOR,
      CONFIG.OUTLINE_ALPHA,
      0.5,
      true,
    );
    state.selectionOutline.drawRoundedRect(
      bounds.x, bounds.y, bounds.width, bounds.height,
      CONFIG.OUTLINE_CORNER_RADIUS,
    );
  }
};