import { log }                from './logger.js';
import { highlightButton }    from './ui.js';
import { setSelectedModel }   from './model.js';
import { CONFIG, DOM, state } from './config.js';

// ===========================================================================
// Utilities
// ===========================================================================

export const getDistance = (pointA, pointB) =>
  Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);

// ===========================================================================
// Hit areas & motions
// ===========================================================================

export const toggleHitAreaVisibility = () => {
  if (state.hitAreaFrames && state.selectedModel) {
    state.hitAreaFrames.visible = DOM.hitareasToggle.checked;
    log('UI', `Hit area frames: ${state.hitAreaFrames.visible}`);
  }
};

// Plays a motion whose group name contains hitAreaName.
export const triggerMotionForHitArea = (model, hitAreaName) => {
  const manager = model.internalModel?.motionManager;
  if (!manager) return;

  manager.stopAllMotions?.();
  const groups = manager.definitions;
  let group    = null;

  if (hitAreaName) {
    const lower    = hitAreaName.toLowerCase();
    const matching = Object.keys(groups).filter((grp) => grp.toLowerCase().includes(lower));
    if (matching.length > 0) group = matching[Math.floor(Math.random() * matching.length)];
  }

  if (!group) {
    const available = Object.keys(groups).filter((grp) => groups[grp]?.length > 0);
    if (available.length > 0) {
      group = available[Math.floor(Math.random() * available.length)];
      log('WARN', `No motion for "${hitAreaName}". Playing random motion.`);
    }
  }

  if (group) {
    const idx = Math.floor(Math.random() * groups[group].length);
    setTimeout(() => {
      log('MODEL', `Motion for "${hitAreaName}": Group=${group}, Index=${idx}`);
      model.motion(group, idx);
    }, 0);
  }
};

// Selects a model, plays a hit-area motion, and highlights the button and overlay.
export const simulateTapOnHitArea = (model, hitAreaName, buttonElement) => {
  if (model !== state.selectedModel) setSelectedModel(model);
  triggerMotionForHitArea(model, hitAreaName);
  highlightButton(buttonElement, DOM.hitareasPanel);
  state.hitAreaFrames?.highlight?.(hitAreaName);
};

// ===========================================================================
// Pointer / touch interaction handlers
// ===========================================================================

export const handlePointerDown = (event) => {
  const ia        = state.interaction;
  const globalPos = event.data.global;

  ia.activePointers[event.data.pointerId] = globalPos.clone();
  ia.modelJustSelected                    = false;
  ia.wasDragging                          = false;

  // Check topmost model first (last in array = highest z-order).
  const hit = state.models.slice().reverse().find((model) => model.containsPoint(globalPos));

  if (Object.keys(ia.activePointers).length === 1) {
    if (hit) {
      if (state.selectedModel !== hit) {
        setSelectedModel(hit);
        ia.modelJustSelected = true;
      }
      ia.isDragging       = true;
      ia.activeDragTarget = hit;
      ia.activeDragTarget.cursor = 'grabbing';

      const local        = ia.activeDragTarget.parent.toLocal(globalPos);
      ia.dragStartOffset = {
        x: local.x - ia.activeDragTarget.x,
        y: local.y - ia.activeDragTarget.y,
      };
    }
  } else if (Object.keys(ia.activePointers).length === 2 && state.selectedModel) {
    // Second finger down — switch from drag to pinch-to-zoom.
    ia.isDragging = false;
    if (ia.activeDragTarget) ia.activeDragTarget.cursor = 'grab';
    ia.activeDragTarget = null;

    ia.isPinching         = true;
    ia.activePinchTarget  = state.selectedModel;
    const pointers        = Object.values(ia.activePointers);
    ia.pinchDistanceStart = getDistance(pointers[0], pointers[1]);
    ia.pinchScaleStart    = ia.activePinchTarget.scale.x;
  }
};

export const handlePointerMove = (event) => {
  const ia            = state.interaction;
  const { pointerId } = event.data;

  if (!ia.activePointers[pointerId]) return;

  ia.activePointers[pointerId] = event.data.global.clone();
  ia.wasDragging               = true;

  if (ia.isPinching && ia.activePinchTarget && Object.keys(ia.activePointers).length === 2) {
    const pointers = Object.values(ia.activePointers);
    const dist     = getDistance(pointers[0], pointers[1]);

    if (ia.pinchDistanceStart > 0) {
      const scale = Math.max(
        CONFIG.MIN_ZOOM,
        Math.min(ia.pinchScaleStart * (dist / ia.pinchDistanceStart), CONFIG.MAX_ZOOM),
      );
      ia.activePinchTarget.scale.set(scale);
    }
  } else if (ia.isDragging && ia.activeDragTarget) {
    const pos = ia.activeDragTarget.parent.toLocal(event.data.global);
    ia.activeDragTarget.position.set(
      pos.x - ia.dragStartOffset.x,
      pos.y - ia.dragStartOffset.y,
    );
  }
};

export const handlePointerUp = (event) => {
  const ia        = state.interaction;
  const remaining = Object.keys(ia.activePointers).length - 1;

  delete ia.activePointers[event.data.pointerId];

  if (ia.isPinching && remaining < 2) {
    ia.isPinching = false;
    if (ia.activePinchTarget) ia.activePinchTarget.cursor = 'grab';
    ia.activePinchTarget = null;
  }

  if (ia.isDragging && remaining < 1) {
    ia.isDragging = false;
    if (ia.activeDragTarget) ia.activeDragTarget.cursor = 'grab';
    ia.activeDragTarget = null;
  }
};

// Fires after a pointer-down + pointer-up with no significant movement.
export const handleStageTap = (event) => {
  if (state.interaction.wasDragging || state.interaction.modelJustSelected) return;
  if (!state.selectedModel) return;

  const hits = state.selectedModel.hitTest(event.data.global.x, event.data.global.y);
  if (hits.length > 0) {
    const area = hits[Math.floor(Math.random() * hits.length)];
    log('INTERACTION', `Tap on hit area: ${area}`);
    triggerMotionForHitArea(state.selectedModel, area);
  }
};

// Zooms the selected model toward/away from the cursor via scroll wheel.
export const handleCanvasZoom = (event) => {
  if (!state.selectedModel) return;
  event.preventDefault();

  const factor   = Math.exp((event.deltaY < 0 ? 1 : -1) * CONFIG.ZOOM_SENSITIVITY);
  const newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(state.selectedModel.scale.x * factor, CONFIG.MAX_ZOOM));
  const pointer  = new PIXI.Point(event.clientX, event.clientY);
  const stagePos = state.app.stage.toLocal(pointer);
  const localPos = state.selectedModel.toLocal(stagePos);

  state.selectedModel.scale.set(newScale);

  // Compensate position so the model doesn't drift during zoom.
  const newGlobal = state.selectedModel.toGlobal(localPos);
  state.selectedModel.x -= newGlobal.x - stagePos.x;
  state.selectedModel.y -= newGlobal.y - stagePos.y;
};

// Scrolling over the filename label cycles through loaded models.
export const handleModelLabelScroll = (event) => {
  if (state.models.length < 2) return;
  event.preventDefault();

  const sorted  = [...state.models].sort((a, b) => a.appModelId - b.appModelId);
  const current = sorted.findIndex((model) => model === state.selectedModel);
  const dir     = event.deltaY < 0 ? -1 : 1;
  const next    = (current + dir + sorted.length) % sorted.length;

  if (next !== current) setSelectedModel(sorted[next]);
};