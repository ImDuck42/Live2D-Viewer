function handleModelZoom(event) {
    if (!selectedModel || !app?.renderer) return;
    event.preventDefault(); // Prevent page scroll

    const delta = event.deltaY;
    const zoomDirection = delta < 0 ? 1 : -1; // -1 for zoom out, 1 for zoom in
    const zoomIncrement = Math.exp(zoomDirection * CONFIG.ZOOM_SENSITIVITY);

    const currentScale = selectedModel.scale.x; // Assume uniform scale
    let newScale = currentScale * zoomIncrement;
    newScale = Math.max(CONFIG.MIN_ZOOM, Math.min(newScale, CONFIG.MAX_ZOOM)); // Clamp scale

    if (newScale === currentScale) return; // No change in scale

    // Zoom relative to pointer position
    const pointer = new PIXI.Point();
    app.renderer.plugins.interaction.mapPositionToPoint(pointer, event.clientX, event.clientY); // Get pointer in global canvas space
    const stagePointerPos = app.stage.toLocal(pointer, undefined, undefined, true); // Pointer in stage coordinates

    // Convert pointer position to model's local space BEFORE scaling
    const modelLocalPointerPos = selectedModel.toLocal(stagePointerPos, undefined, undefined, true);

    selectedModel.scale.set(newScale); // Apply new scale

    // Get new global position of that local point AFTER scaling
    const newGlobalPointerPosFromModel = selectedModel.toGlobal(modelLocalPointerPos, undefined, true);

    // Adjust model position to keep the point under the cursor stationary
    selectedModel.x -= (newGlobalPointerPosFromModel.x - stagePointerPos.x);
    selectedModel.y -= (newGlobalPointerPosFromModel.y - stagePointerPos.y);
}