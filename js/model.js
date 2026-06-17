import { log }                          from './logger.js';
import { processZipFile }               from './importzip.js';
import { CONFIG, DOM, state }           from './config.js';
import { updateUI, updateLoadingState } from './ui.js';

// ===========================================================================
// Model selection & ordering
// ===========================================================================

// Moves a model to the top of the PIXI stage and to the end of state.models.
export const bringModelToFront = (model) => {
  if (!model || !state.app?.stage) return;

  const stage = state.app.stage;
  stage.setChildIndex(model, stage.children.length - 1);

  if (state.selectionOutline) {
    stage.setChildIndex(state.selectionOutline, stage.children.length - 1);
  }

  const idx = state.models.indexOf(model);
  if (idx > -1) {
    state.models.splice(idx, 1);
    state.models.push(model);
  }
};

export const setSelectedModel = (model) => {
  // Detach the hit-area overlay from the previously selected model.
  state.hitAreaFrames?.parent?.removeChild(state.hitAreaFrames);
  state.selectedModel = model;

  if (model) {
    log('MODEL', `Selected model ID: ${model.appModelId}`);

    if (PIXI.live2d.HitAreaFrames) {
      if (!state.hitAreaFrames || state.hitAreaFrames.destroyed) {
        state.hitAreaFrames = new PIXI.live2d.HitAreaFrames();
      }
      try {
        model.addChild(state.hitAreaFrames);
      } catch {
        log('WARN', 'Failed to reuse hitAreaFrames; creating new instance.');
        state.hitAreaFrames = new PIXI.live2d.HitAreaFrames();
        model.addChild(state.hitAreaFrames);
      }
      state.hitAreaFrames.visible = DOM.hitareasToggle.checked;
    }

    bringModelToFront(model);
    state.selectionOutline.visible = true;
  } else {
    log('MODEL', 'Deselected all models.');
    state.selectionOutline.visible = false;
  }

  updateUI();
};

export const deleteSelectedModel = () => {
  if (!state.selectedModel) return;

  const target = state.selectedModel;
  const idx    = state.models.findIndex((model) => model.appModelId === target.appModelId);
  if (idx > -1) state.models.splice(idx, 1);

  if (target.parent) {
    if (state.hitAreaFrames?.parent === target) target.removeChild(state.hitAreaFrames);
    target.parent.removeChild(target);
  }

  // Only destroy textures not shared with another loaded model.
  const hasSharedTexture = state.models.some((model) =>
    model.textures.some((tex) => target.textures.includes(tex))
  );

  target.destroy({ children: true, texture: !hasSharedTexture, baseTexture: !hasSharedTexture });
  log('MODEL', `Model ${target.appModelId} deleted. Texture destroyed: ${!hasSharedTexture}`);

  setSelectedModel(state.models.at(-1) ?? null);
};

// ===========================================================================
// Model fitting
// ===========================================================================

// Scales and centers a newly loaded model to fill CONFIG.MODEL_FIT_PADDING of the canvas.
const fitModelToView = (model) => {
  if (!model || !state.app?.renderer) return;

  const dpr    = window.devicePixelRatio || 1;
  const view   = state.app.renderer.view;
  const viewW  = view.width  / dpr;
  const viewH  = view.height / dpr;

  model.updateTransform();
  const modelW = model.width  / model.scale.x;
  const modelH = model.height / model.scale.y;

  if (modelW > 0 && modelH > 0) {
    const scale = Math.min(
      (viewW * CONFIG.MODEL_FIT_PADDING) / modelW,
      (viewH * CONFIG.MODEL_FIT_PADDING) / modelH,
    );
    model.scale.set(scale);
  } else {
    log('WARN', 'fitModelToView: Invalid model dimensions; using default scale.');
    model.scale.set(0.1);
  }

  model.anchor.set(0.5, 0.5);
  model.position.set(viewW / 2, viewH / 2);
  log('MODEL', `Fitted model ${model.appModelId} to view.`);
};

// ===========================================================================
// Model loading
// ===========================================================================

export const loadModel = async (source) => {
  if (!state.app?.stage) {
    log('ERROR', 'PIXI Application not ready.');
    alert('Error: Application not initialized properly.');
    return;
  }

  if (!source) return;

  // Handle ZIP files by extracting and converting assets to data URIs.
  if (source.endsWith('.zip')) {
    const zipName = source.split('/').pop();
    try {
      const response = await fetch(source);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const buffer   = await response.arrayBuffer();
      const modelUrl = await processZipFile(buffer);

      if (!modelUrl) throw new Error('Failed to parse ZIP file.');
      await loadModel(modelUrl);
    } catch (error) {
      log('ERROR', `Error loading ZIP from ${source}:`, error);
      alert(`Error loading ZIP file: ${error.message ?? error}\nCheck the console for details.`);
      updateLoadingState(false);
    }
    return;
  }

  const modelName = source.startsWith('data:') ? 'model' : source.split('/').pop();
  log('MODEL', `Loading model from: ${source}`);
  updateLoadingState(true, `Loading ${modelName}…`);
  let newModel = null;

  try {
    newModel = await PIXI.live2d.Live2DModel.from(source, {
      onError: (error) => {
        throw new Error(`Live2DModel.from failed: ${error.message ?? 'Unknown error'}`);
      },
    });

    newModel.appModelId = state.modelIdCounter++;
    state.app.stage.addChild(newModel);
    state.models.push(newModel);

    // Brief delay lets PIXI finish layout before reading dimensions for fitting.
    await new Promise((resolve) => setTimeout(resolve, 125));

    fitModelToView(newModel);
    newModel.cursor = 'grab';
    setSelectedModel(newModel);

    log('MODEL', `Model loaded: ${newModel.internalModel?.settings?.name ?? `Model ${newModel.appModelId}`}`, newModel);
  } catch (error) {
    log('ERROR', `Error loading model from ${source}:`, error);
    alert(`Error loading model: ${error.message ?? error}\nCheck the console for details.`);

    if (newModel) {
      newModel.parent?.removeChild(newModel);
      const idx = state.models.findIndex((model) => model.appModelId === newModel.appModelId);
      if (idx > -1) state.models.splice(idx, 1);
      newModel.destroy({ children: true, texture: false, baseTexture: false });
    }

    if (state.selectedModel === newModel) {
      setSelectedModel(state.models.at(-1) ?? null);
    }
  } finally {
    updateLoadingState(false);
  }
};

// Expose globally so non-module scripts can call it.
window.loadLive2DModel = loadModel;