/**
 * Live2D Cubism Core
 * (C) 2019 Live2D Inc. All rights reserved.
 *
 * This file is licensed pursuant to the license agreement below.
 * This file corresponds to the "Redistributable Code" in the agreement.
 * https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html
*/

var Live2DCubismCore;
!(function (Live2DCubismCore) {
    var _scriptDir,
        _csm = (function () {
            function _csm() {}
            return (
                (_csm.getVersion = function () {
                    return _em.ccall("csmGetVersion", "number", [], []);
                }),
                (_csm.getLatestMocVersion = function () {
                    return _em.ccall("csmGetLatestMocVersion", "number", [], []);
                }),
                (_csm.getMocVersion = function (moc, mocSize) {
                    return _em.ccall("csmGetMocVersion", "number", ["number", "number"], [moc, mocSize]);
                }),
                (_csm.getLogFunction = function () {
                    return _em.ccall("csmGetLogFunction", "number", [], []);
                }),
                (_csm.getSizeofModel = function (moc) {
                    return _em.ccall("csmGetSizeofModel", "number", ["number"], [moc]);
                }),
                (_csm.reviveMocInPlace = function (memory, mocSize) {
                    return _em.ccall("csmReviveMocInPlace", "number", ["number", "number"], [memory, mocSize]);
                }),
                (_csm.initializeModelInPlace = function (moc, memory, modelSize) {
                    return _em.ccall("csmInitializeModelInPlace", "number", ["number", "number", "number"], [moc, memory, modelSize]);
                }),
                (_csm.hasMocConsistency = function (memory, mocSize) {
                    return _em.ccall("csmHasMocConsistency", "number", ["number", "number"], [memory, mocSize]);
                }),
                (_csm.getParameterCount = function (model) {
                    return _em.ccall("csmGetParameterCount", "number", ["number"], [model]);
                }),
                (_csm.getParameterIds = function (model) {
                    return _em.ccall("csmGetParameterIds", "number", ["number"], [model]);
                }),
                (_csm.getParameterMinimumValues = function (model) {
                    return _em.ccall("csmGetParameterMinimumValues", "number", ["number"], [model]);
                }),
                (_csm.getParameterTypes = function (model) {
                    return _em.ccall("csmGetParameterTypes", "number", ["number"], [model]);
                }),
                (_csm.getParameterMaximumValues = function (model) {
                    return _em.ccall("csmGetParameterMaximumValues", "number", ["number"], [model]);
                }),
                (_csm.getParameterDefaultValues = function (model) {
                    return _em.ccall("csmGetParameterDefaultValues", "number", ["number"], [model]);
                }),
                (_csm.getParameterValues = function (model) {
                    return _em.ccall("csmGetParameterValues", "number", ["number"], [model]);
                }),
                (_csm.getParameterRepeats = function (model) {
                    return _em.ccall("csmGetParameterRepeats", "number", ["number"], [model]);
                }),
                (_csm.getParameterKeyCounts = function (model) {
                    return _em.ccall("csmGetParameterKeyCounts", "number", ["number"], [model]);
                }),
                (_csm.getParameterKeyValues = function (model) {
                    return _em.ccall("csmGetParameterKeyValues", "number", ["number"], [model]);
                }),
                (_csm.getPartCount = function (model) {
                    return _em.ccall("csmGetPartCount", "number", ["number"], [model]);
                }),
                (_csm.getPartIds = function (model) {
                    return _em.ccall("csmGetPartIds", "number", ["number"], [model]);
                }),
                (_csm.getPartOpacities = function (model) {
                    return _em.ccall("csmGetPartOpacities", "number", ["number"], [model]);
                }),
                (_csm.getPartParentPartIndices = function (model) {
                    return _em.ccall("csmGetPartParentPartIndices", "number", ["number"], [model]);
                }),
                (_csm.getDrawableCount = function (model) {
                    return _em.ccall("csmGetDrawableCount", "number", ["number"], [model]);
                }),
                (_csm.getDrawableIds = function (model) {
                    return _em.ccall("csmGetDrawableIds", "number", ["number"], [model]);
                }),
                (_csm.getDrawableConstantFlags = function (model) {
                    return _em.ccall("csmGetDrawableConstantFlags", "number", ["number"], [model]);
                }),
                (_csm.getDrawableDynamicFlags = function (model) {
                    return _em.ccall("csmGetDrawableDynamicFlags", "number", ["number"], [model]);
                }),
                (_csm.getDrawableTextureIndices = function (model) {
                    return _em.ccall("csmGetDrawableTextureIndices", "number", ["number"], [model]);
                }),
                (_csm.getDrawableDrawOrders = function (model) {
                    return _em.ccall("csmGetDrawableDrawOrders", "number", ["number"], [model]);
                }),
                (_csm.getDrawableRenderOrders = function (model) {
                    return _em.ccall("csmGetDrawableRenderOrders", "number", ["number"], [model]);
                }),
                (_csm.getDrawableOpacities = function (model) {
                    return _em.ccall("csmGetDrawableOpacities", "number", ["number"], [model]);
                }),
                (_csm.getDrawableMaskCounts = function (model) {
                    return _em.ccall("csmGetDrawableMaskCounts", "number", ["number"], [model]);
                }),
                (_csm.getDrawableMasks = function (model) {
                    return _em.ccall("csmGetDrawableMasks", "number", ["number"], [model]);
                }),
                (_csm.getDrawableVertexCounts = function (model) {
                    return _em.ccall("csmGetDrawableVertexCounts", "number", ["number"], [model]);
                }),
                (_csm.getDrawableVertexPositions = function (model) {
                    return _em.ccall("csmGetDrawableVertexPositions", "number", ["number"], [model]);
                }),
                (_csm.getDrawableVertexUvs = function (model) {
                    return _em.ccall("csmGetDrawableVertexUvs", "number", ["number"], [model]);
                }),
                (_csm.getDrawableIndexCounts = function (model) {
                    return _em.ccall("csmGetDrawableIndexCounts", "number", ["number"], [model]);
                }),
                (_csm.getDrawableIndices = function (model) {
                    return _em.ccall("csmGetDrawableIndices", "number", ["number"], [model]);
                }),
                (_csm.getDrawableMultiplyColors = function (model) {
                    return _em.ccall("csmGetDrawableMultiplyColors", "number", ["number"], [model]);
                }),
                (_csm.getDrawableScreenColors = function (model) {
                    return _em.ccall("csmGetDrawableScreenColors", "number", ["number"], [model]);
                }),
                (_csm.getDrawableParentPartIndices = function (model) {
                    return _em.ccall("csmGetDrawableParentPartIndices", "number", ["number"], [model]);
                }),
                (_csm.mallocMoc = function (mocSize) {
                    return _em.ccall("csmMallocMoc", "number", ["number"], [mocSize]);
                }),
                (_csm.mallocModelAndInitialize = function (moc) {
                    return _em.ccall("csmMallocModelAndInitialize", "number", ["number"], [moc]);
                }),
                (_csm.malloc = function (size) {
                    return _em.ccall("csmMalloc", "number", ["number"], [size]);
                }),
                (_csm.setLogFunction = function (handler) {
                    _em.ccall("csmSetLogFunction", null, ["number"], [handler]);
                }),
                (_csm.updateModel = function (model) {
                    _em.ccall("csmUpdateModel", null, ["number"], [model]);
                }),
                (_csm.readCanvasInfo = function (model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit) {
                    _em.ccall("csmReadCanvasInfo", null, ["number", "number", "number", "number"], [model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit]);
                }),
                (_csm.resetDrawableDynamicFlags = function (model) {
                    _em.ccall("csmResetDrawableDynamicFlags", null, ["number"], [model]);
                }),
                (_csm.free = function (memory) {
                    _em.ccall("csmFree", null, ["number"], [memory]);
                }),
                (_csm.initializeAmountOfMemory = function (size) {
                    _em.ccall("csmInitializeAmountOfMemory", null, ["number"], [size]);
                }),
                _csm
            );
        })(),
        Version =
            ((Live2DCubismCore.AlignofMoc = 64),
            (Live2DCubismCore.AlignofModel = 16),
            (Live2DCubismCore.MocVersion_Unknown = 0),
            (Live2DCubismCore.MocVersion_30 = 1),
            (Live2DCubismCore.MocVersion_33 = 2),
            (Live2DCubismCore.MocVersion_40 = 3),
            (Live2DCubismCore.MocVersion_42 = 4),
            (Live2DCubismCore.MocVersion_50 = 5),
            (Live2DCubismCore.ParameterType_Normal = 0),
            (Live2DCubismCore.ParameterType_BlendShape = 1),
            (function () {
                function Version() {}
                return (
                    (Version.csmGetVersion = function () {
                        return _csm.getVersion();
                    }),
                    (Version.csmGetLatestMocVersion = function () {
                        return _csm.getLatestMocVersion();
                    }),
                    (Version.csmGetMocVersion = function (moc, mocBytes) {
                        return _csm.getMocVersion(moc._ptr, mocBytes.byteLength);
                    }),
                    Version
                );
            })()),
        Version =
            ((Live2DCubismCore.Version = Version),
            (function () {
                function Logging() {}
                return (
                    (Logging.csmSetLogFunction = function (handler) {
                        Logging.logFunction = handler;
                        handler = _em.addFunction(Logging.wrapLogFunction, "vi");
                        _csm.setLogFunction(handler);
                    }),
                    (Logging.csmGetLogFunction = function () {
                        return Logging.logFunction;
                    }),
                    (Logging.wrapLogFunction = function (messagePtr) {
                        messagePtr = _em.UTF8ToString(messagePtr);
                        Logging.logFunction(messagePtr);
                    }),
                    Logging
                );
            })()),
        Version =
            ((Live2DCubismCore.Logging = Version),
            (function () {
                function Moc(mocBytes) {
                    var memory = _csm.mallocMoc(mocBytes.byteLength);
                    memory && (new Uint8Array(_em.HEAPU8.buffer, memory, mocBytes.byteLength).set(new Uint8Array(mocBytes)), (this._ptr = _csm.reviveMocInPlace(memory, mocBytes.byteLength)), this._ptr || _csm.free(memory));
                }
                return (
                    (Moc.prototype.hasMocConsistency = function (mocBytes) {
                        var memory = _csm.mallocMoc(mocBytes.byteLength);
                        if (memory) return new Uint8Array(_em.HEAPU8.buffer, memory, mocBytes.byteLength).set(new Uint8Array(mocBytes)), (mocBytes = _csm.hasMocConsistency(memory, mocBytes.byteLength)), _csm.free(memory), mocBytes;
                    }),
                    (Moc.fromArrayBuffer = function (buffer) {
                        return buffer && (buffer = new Moc(buffer))._ptr ? buffer : null;
                    }),
                    (Moc.prototype._release = function () {
                        _csm.free(this._ptr), (this._ptr = 0);
                    }),
                    Moc
                );
            })()),
        Version =
            ((Live2DCubismCore.Moc = Version),
            (function () {
                function Model(moc) {
                    (this._ptr = _csm.mallocModelAndInitialize(moc._ptr)),
                        this._ptr && ((this.parameters = new Parameters(this._ptr)), (this.parts = new Parts(this._ptr)), (this.drawables = new Drawables(this._ptr)), (this.canvasinfo = new CanvasInfo(this._ptr)));
                }
                return (
                    (Model.fromMoc = function (moc) {
                        moc = new Model(moc);
                        return moc._ptr ? moc : null;
                    }),
                    (Model.prototype.update = function () {
                        _csm.updateModel(this._ptr);
                    }),
                    (Model.prototype.release = function () {
                        _csm.free(this._ptr), (this._ptr = 0);
                    }),
                    Model
                );
            })()),
        CanvasInfo =
            ((Live2DCubismCore.Model = Version),
            function (modelPtr) {
                var _canvasSize_data, _canvasSize_dataPtr, _canvasSize_nDataBytes, _canvasOrigin_dataPtr, _canvasOrigin_nDataBytes, _canvasPPU_nDataBytes, _canvasPPU_dataPtr;
                modelPtr &&
                    ((_canvasSize_nDataBytes = (_canvasSize_data = new Float32Array(2)).length * _canvasSize_data.BYTES_PER_ELEMENT),
                    (_canvasSize_dataPtr = _csm.malloc(_canvasSize_nDataBytes)),
                    (_canvasSize_dataPtr = new Uint8Array(_em.HEAPU8.buffer, _canvasSize_dataPtr, _canvasSize_nDataBytes)).set(new Uint8Array(_canvasSize_data.buffer)),
                    (_canvasOrigin_nDataBytes = (_canvasSize_nDataBytes = new Float32Array(2)).length * _canvasSize_nDataBytes.BYTES_PER_ELEMENT),
                    (_canvasOrigin_dataPtr = _csm.malloc(_canvasOrigin_nDataBytes)),
                    (_canvasOrigin_dataPtr = new Uint8Array(_em.HEAPU8.buffer, _canvasOrigin_dataPtr, _canvasOrigin_nDataBytes)).set(new Uint8Array(_canvasSize_nDataBytes.buffer)),
                    (_canvasPPU_nDataBytes = (_canvasOrigin_nDataBytes = new Float32Array(1)).length * _canvasOrigin_nDataBytes.BYTES_PER_ELEMENT),
                    (_canvasPPU_dataPtr = _csm.malloc(_canvasPPU_nDataBytes)),
                    (_canvasPPU_dataPtr = new Uint8Array(_em.HEAPU8.buffer, _canvasPPU_dataPtr, _canvasPPU_nDataBytes)).set(new Uint8Array(_canvasOrigin_nDataBytes.buffer)),
                    _csm.readCanvasInfo(modelPtr, _canvasSize_dataPtr.byteOffset, _canvasOrigin_dataPtr.byteOffset, _canvasPPU_dataPtr.byteOffset),
                    (_canvasSize_data = new Float32Array(_canvasSize_dataPtr.buffer, _canvasSize_dataPtr.byteOffset, _canvasSize_dataPtr.length)),
                    (_canvasSize_nDataBytes = new Float32Array(_canvasOrigin_dataPtr.buffer, _canvasOrigin_dataPtr.byteOffset, _canvasOrigin_dataPtr.length)),
                    (_canvasOrigin_nDataBytes = new Float32Array(_canvasPPU_dataPtr.buffer, _canvasPPU_dataPtr.byteOffset, _canvasPPU_dataPtr.length)),
                    (this.CanvasWidth = _canvasSize_data[0]),
                    (this.CanvasHeight = _canvasSize_data[1]),
                    (this.CanvasOriginX = _canvasSize_nDataBytes[0]),
                    (this.CanvasOriginY = _canvasSize_nDataBytes[1]),
                    (this.PixelsPerUnit = _canvasOrigin_nDataBytes[0]),
                    _csm.free(_canvasSize_dataPtr.byteOffset),
                    _csm.free(_canvasOrigin_dataPtr.byteOffset),
                    _csm.free(_canvasPPU_dataPtr.byteOffset));
            }),
        Parameters =
            ((Live2DCubismCore.CanvasInfo = CanvasInfo),
            function (modelPtr) {
                (this.count = _csm.getParameterCount(modelPtr)), (length = _csm.getParameterCount(modelPtr)), (this.ids = new Array(length));
                for (var length, length2, _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getParameterIds(modelPtr), length), i = 0; i < _ids.length; i++) this.ids[i] = _em.UTF8ToString(_ids[i]);
                (length = _csm.getParameterCount(modelPtr)),
                    (this.minimumValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterMinimumValues(modelPtr), length)),
                    (length = _csm.getParameterCount(modelPtr)),
                    (this.types = new Int32Array(_em.HEAP32.buffer, _csm.getParameterTypes(modelPtr), length)),
                    (length = _csm.getParameterCount(modelPtr)),
                    (this.maximumValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterMaximumValues(modelPtr), length)),
                    (length = _csm.getParameterCount(modelPtr)),
                    (this.defaultValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterDefaultValues(modelPtr), length)),
                    (length = _csm.getParameterCount(modelPtr)),
                    (this.values = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterValues(modelPtr), length)),
                    (length = _csm.getParameterCount(modelPtr)),
                    (this.repeats = new Int32Array(_em.HEAP32.buffer, _csm.getParameterRepeats(modelPtr), length)),
                    (length = _csm.getParameterCount(modelPtr)),
                    (this.keyCounts = new Int32Array(_em.HEAP32.buffer, _csm.getParameterKeyCounts(modelPtr), length)),
                    (length = _csm.getParameterCount(modelPtr)),
                    (length2 = new Int32Array(_em.HEAP32.buffer, _csm.getParameterKeyCounts(modelPtr), length)),
                    (this.keyValues = new Array(length));
                for (var _keyValues = new Uint32Array(_em.HEAPU32.buffer, _csm.getParameterKeyValues(modelPtr), length), i = 0; i < _keyValues.length; i++) this.keyValues[i] = new Float32Array(_em.HEAPF32.buffer, _keyValues[i], length2[i]);
            }),
        Parts =
            ((Live2DCubismCore.Parameters = Parameters),
            function (modelPtr) {
                (this.count = _csm.getPartCount(modelPtr)), (length = _csm.getPartCount(modelPtr)), (this.ids = new Array(length));
                for (var length, _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getPartIds(modelPtr), length), i = 0; i < _ids.length; i++) this.ids[i] = _em.UTF8ToString(_ids[i]);
                (length = _csm.getPartCount(modelPtr)),
                    (this.opacities = new Float32Array(_em.HEAPF32.buffer, _csm.getPartOpacities(modelPtr), length)),
                    (length = _csm.getPartCount(modelPtr)),
                    (this.parentIndices = new Int32Array(_em.HEAP32.buffer, _csm.getPartParentPartIndices(modelPtr), length));
            }),
        Drawables =
            ((Live2DCubismCore.Parts = Parts),
            (function () {
                function Drawables(modelPtr) {
                    this._modelPtr = modelPtr;
                    for (
                        var length,
                            length2 = null,
                            _ids = ((this.count = _csm.getDrawableCount(modelPtr)), (length = _csm.getDrawableCount(modelPtr)), (this.ids = new Array(length)), new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableIds(modelPtr), length)),
                            i = 0;
                        i < _ids.length;
                        i++
                    )
                        this.ids[i] = _em.UTF8ToString(_ids[i]);
                    (length = _csm.getDrawableCount(modelPtr)),
                        (this.constantFlags = new Uint8Array(_em.HEAPU8.buffer, _csm.getDrawableConstantFlags(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.dynamicFlags = new Uint8Array(_em.HEAPU8.buffer, _csm.getDrawableDynamicFlags(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.textureIndices = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableTextureIndices(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.drawOrders = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableDrawOrders(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.renderOrders = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableRenderOrders(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.opacities = new Float32Array(_em.HEAPF32.buffer, _csm.getDrawableOpacities(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.maskCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableMaskCounts(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.vertexCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.indexCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableIndexCounts(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.multiplyColors = new Float32Array(_em.HEAPF32.buffer, _csm.getDrawableMultiplyColors(modelPtr), 4 * length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.screenColors = new Float32Array(_em.HEAPF32.buffer, _csm.getDrawableScreenColors(modelPtr), 4 * length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (this.parentPartIndices = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableParentPartIndices(modelPtr), length)),
                        (length = _csm.getDrawableCount(modelPtr)),
                        (length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableMaskCounts(modelPtr), length)),
                        (this.masks = new Array(length));
                    for (var _masks = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableMasks(modelPtr), length), i = 0; i < _masks.length; i++) this.masks[i] = new Int32Array(_em.HEAP32.buffer, _masks[i], length2[i]);
                    (length = _csm.getDrawableCount(modelPtr)), (length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length)), (this.vertexPositions = new Array(length));
                    for (var _vertexPositions = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableVertexPositions(modelPtr), length), i = 0; i < _vertexPositions.length; i++)
                        this.vertexPositions[i] = new Float32Array(_em.HEAPF32.buffer, _vertexPositions[i], 2 * length2[i]);
                    (length = _csm.getDrawableCount(modelPtr)), (length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length)), (this.vertexUvs = new Array(length));
                    for (var _vertexUvs = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableVertexUvs(modelPtr), length), i = 0; i < _vertexUvs.length; i++)
                        this.vertexUvs[i] = new Float32Array(_em.HEAPF32.buffer, _vertexUvs[i], 2 * length2[i]);
                    (length = _csm.getDrawableCount(modelPtr)), (length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableIndexCounts(modelPtr), length)), (this.indices = new Array(length));
                    for (var _indices = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableIndices(modelPtr), length), i = 0; i < _indices.length; i++) this.indices[i] = new Uint16Array(_em.HEAPU16.buffer, _indices[i], length2[i]);
                }
                return (
                    (Drawables.prototype.resetDynamicFlags = function () {
                        _csm.resetDrawableDynamicFlags(this._modelPtr);
                    }),
                    Drawables
                );
            })()),
        Version =
            ((Live2DCubismCore.Drawables = Drawables),
            (function () {
                function Utils() {}
                return (
                    (Utils.hasBlendAdditiveBit = function (bitfield) {
                        return 1 == (1 & bitfield);
                    }),
                    (Utils.hasBlendMultiplicativeBit = function (bitfield) {
                        return 2 == (2 & bitfield);
                    }),
                    (Utils.hasIsDoubleSidedBit = function (bitfield) {
                        return 4 == (4 & bitfield);
                    }),
                    (Utils.hasIsInvertedMaskBit = function (bitfield) {
                        return 8 == (8 & bitfield);
                    }),
                    (Utils.hasIsVisibleBit = function (bitfield) {
                        return 1 == (1 & bitfield);
                    }),
                    (Utils.hasVisibilityDidChangeBit = function (bitfield) {
                        return 2 == (2 & bitfield);
                    }),
                    (Utils.hasOpacityDidChangeBit = function (bitfield) {
                        return 4 == (4 & bitfield);
                    }),
                    (Utils.hasDrawOrderDidChangeBit = function (bitfield) {
                        return 8 == (8 & bitfield);
                    }),
                    (Utils.hasRenderOrderDidChangeBit = function (bitfield) {
                        return 16 == (16 & bitfield);
                    }),
                    (Utils.hasVertexPositionsDidChangeBit = function (bitfield) {
                        return 32 == (32 & bitfield);
                    }),
                    (Utils.hasBlendColorDidChangeBit = function (bitfield) {
                        return 64 == (64 & bitfield);
                    }),
                    Utils
                );
            })()),
        Version =
            ((Live2DCubismCore.Utils = Version),
            (function () {
                function Memory() {}
                return (
                    (Memory.initializeAmountOfMemory = function (size) {
                        16777216 < size && _csm.initializeAmountOfMemory(size);
                    }),
                    Memory
                );
            })()),
        _em_module =
            ((Live2DCubismCore.Memory = Version),
            (_scriptDir = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0),
            function (_em_module) {
                _em_module = _em_module || {};
                var b,
                    n,
                    l = {};
                for (n in (b = b || (void 0 !== _em_module ? _em_module : {}))) b.hasOwnProperty(n) && (l[n] = b[n]);
                var x,
                    y,
                    v,
                    w,
                    r = !1,
                    p = "object" == typeof window,
                    q = "function" == typeof importScripts,
                    r = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && !p && !q,
                    t = !p && !r && !q,
                    u = "",
                    D =
                        (r
                            ? ((u = __dirname + "/"),
                              (v = function (a, c) {
                                  var d = z(a);
                                  return d || ((x = x || require("fs")), (a = (y = y || require("path")).normalize(a)), (d = x.readFileSync(a))), c ? d : d.toString();
                              }),
                              (w = function (a) {
                                  return assert((a = (a = v(a, !0)).buffer ? a : new Uint8Array(a)).buffer), a;
                              }),
                              1 < process.argv.length && process.argv[1].replace(/\\/g, "/"),
                              process.argv.slice(2),
                              process.on("uncaughtException", function (a) {
                                  throw a;
                              }),
                              process.on("unhandledRejection", B),
                              (b.inspect = function () {
                                  return "[Emscripten Module object]";
                              }))
                            : t
                            ? ("undefined" != typeof read &&
                                  (v = function (a) {
                                      var c = z(a);
                                      return c ? C(c) : read(a);
                                  }),
                              (w = function (a) {
                                  var c;
                                  if (!(c = z(a))) {
                                      if ("function" == typeof readbuffer) return new Uint8Array(readbuffer(a));
                                      assert("object" == typeof (c = read(a, "binary")));
                                  }
                                  return c;
                              }),
                              "undefined" != typeof print && (((console = "undefined" == typeof console ? {} : console).log = print), (console.warn = console.error = "undefined" != typeof printErr ? printErr : print)))
                            : (p || q) &&
                              (q ? (u = self.location.href) : document.currentScript && (u = document.currentScript.src),
                              (u = 0 !== (u = _scriptDir || u).indexOf("blob:") ? u.substr(0, u.lastIndexOf("/") + 1) : ""),
                              (v = function (a) {
                                  try {
                                      var c = new XMLHttpRequest();
                                      return c.open("GET", a, !1), c.send(null), c.responseText;
                                  } catch (d) {
                                      if ((a = z(a))) return C(a);
                                      throw d;
                                  }
                              }),
                              q) &&
                              (w = function (a) {
                                  try {
                                      var c = new XMLHttpRequest();
                                      return c.open("GET", a, !1), (c.responseType = "arraybuffer"), c.send(null), new Uint8Array(c.response);
                                  } catch (d) {
                                      if ((a = z(a))) return a;
                                      throw d;
                                  }
                              }),
                        b.print || console.log.bind(console)),
                    E = b.printErr || console.warn.bind(console);
                for (n in l) l.hasOwnProperty(n) && (b[n] = l[n]);
                function da() {
                    return {
                        exports: (function (asmLibraryArg, wasmMemory, wasmTable) {
                            var scratchBuffer = new ArrayBuffer(8),
                                b = new Int32Array(scratchBuffer),
                                c = new Float32Array(scratchBuffer),
                                d = new Float64Array(scratchBuffer);
                            function f(index, value) {
                                b[index] = value;
                            }
                            function g() {
                                return d[0];
                            }
                            function h(value) {
                                d[0] = value;
                            }
                            function j(value) {
                                c[0] = value;
                            }
                            function k() {
                                return c[0];
                            }
                            scratchBuffer = wasmMemory.buffer;
                            var U,
                                global,
                                buffer,
                                m,
                                n,
                                o,
                                p,
                                q,
                                r,
                                s,
                                t,
                                u,
                                v,
                                w,
                                x,
                                y,
                                z,
                                A,
                                C,
                                H,
                                I,
                                J,
                                K,
                                L,
                                M,
                                U = new Uint8Array(scratchBuffer);
                            return (
                                (scratchBuffer = function (offset, s) {
                                    var V, W;
                                    if ("undefined" == typeof Buffer) for (V = atob(s), W = 0; W < V.length; W++) U[offset + W] = V.charCodeAt(W);
                                    else for (V = Buffer.from(s, "base64"), W = 0; W < V.length; W++) U[offset + W] = V[W];
                                })(
                                    1024,
                                    "QW4gZXJyb3Igb2NjdXJyZWQgaW4gdGhlIGludGVycG9sYXRpb24gZm9yIGJsZW5kIHNoYXBlcy4gQ29tYmluYXRpb25Db3VudCBpcyAlZC4ACgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBUaGlzIG1vYzMgc2l6ZSBpcyBpbnZhbGlkLgoAW0NTTV0gW0VdJXM6ICVzCgBbQ1NNXSBbV11Sb3RhdGlvbkRlZm9ybWVyOiBOb3QgZm91bmQgdHJhbnNmb3JtZWQgRGlyZWN0aW9uLgoAW0NTTV0gW0VdVXBkYXRlRGVmb3JtZXJIaWVyYXJjaHkoKTogVW5rbm93biBEZWZvcm1lciBUeXBlLgoAJXMKACAgAE1PQzMAImFkZHJlc3MiIGlzIG51bGwuACUwMlggAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBGaWxlVHlwZSBpcyBpbnZhbGlkLgoAImFkZHJlc3MiIGFsaWdubWVudCBpcyBpbnZhbGlkLgBbQ1NNXSBbRV1jc21IYXNNb2NDb25zaXN0ZW5jeTogVGhpcyBtb2MzIHZlciBpcyBpbnZhbGlkIFt2ZXI6JWRdLgoAInNpemUiIGlzIGludmFsaWQuAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBUaGUgQ29yZSB1bnN1cHBvcnQgbGF0ZXIgdGhhbiBtb2MzIHZlcjpbJWRdLiBUaGlzIG1vYzMgdmVyIGlzIFslZF0uCgAibW9kZWwiIGlzIGludmFsaWQuAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBIZWFkZXIgc2VjdGlvbiBpcyBpbnZhbGlkLgoAIm91dFNpemVJblBpeGVscyIgaXMgbnVsbC4AW0NTTV0gW0VdY3NtSGFzTW9jQ29uc2lzdGVuY3k6IERhdGEgc2VjdGlvbiBpcyBpbnZhbGlkLgoAIm91dE9yaWdpbkluUGl4ZWxzIiBpcyBudWxsLgBbQ1NNXSBbRV1jc21SZXZpdmVNb2NJblBsYWNlIGlzIGZhaWxlZC4gQ29ycnVwdGVkICBtb2MzIGZpbGUuCgAib3V0UGl4ZWxzUGVyVW5pdCIgaXMgbnVsbC4AW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIFRoZSBDb3JlIHVuc3VwcG9ydCBsYXRlciB0aGFuIG1vYzMgdmVyOlslZF0uIFRoaXMgbW9jMyB2ZXIgaXMgWyVkXS4KACJtb2MiIGlzIGludmFsaWQuAFtDU01dIFtFXWNzbUdldE1vY1ZlcnNpb24gaXMgZmFpbGVkLiBDb3JydXB0ZWQgbW9jMyBmaWxlLgoAInNpemUiIGlzIGludmFsaWQATGl2ZTJEIEN1YmlzbSBTREsgQ29yZSBWZXJzaW9uICVkLiVkLiVkAGNzbUdldE1vY1ZlcnNpb24AY3NtSGFzTW9jQ29uc2lzdGVuY3kAY3NtUmV2aXZlTW9jSW5QbGFjZQBjc21SZWFkQ2FudmFzSW5mbwBjc21HZXRTaXplb2ZNb2RlbABjc21Jbml0aWFsaXplTW9kZWxJblBsYWNlAGNzbVVwZGF0ZU1vZGVsAGNzbUdldFBhcmFtZXRlckNvdW50AGNzbUdldFBhcmFtZXRlcklkcwBjc21HZXRQYXJhbWV0ZXJUeXBlcwBjc21HZXRQYXJhbWV0ZXJNaW5pbXVtVmFsdWVzAGNzbUdldFBhcmFtZXRlck1heGltdW1WYWx1ZXMAY3NtR2V0UGFyYW1ldGVyRGVmYXVsdFZhbHVlcwBjc21HZXRQYXJhbWV0ZXJWYWx1ZXMAY3NtR2V0UGFyYW1ldGVyUmVwZWF0cwBjc21HZXRQYXJ0Q291bnQAY3NtR2V0UGFydElkcwBjc21HZXRQYXJ0T3BhY2l0aWVzAGNzbUdldFBhcnRQYXJlbnRQYXJ0SW5kaWNlcwBjc21HZXREcmF3YWJsZUNvdW50AGNzbUdldERyYXdhYmxlSWRzAGNzbUdldERyYXdhYmxlQ29uc3RhbnRGbGFncwBjc21HZXREcmF3YWJsZUR5bmFtaWNGbGFncwBjc21HZXREcmF3YWJsZVRleHR1cmVJbmRpY2VzAGNzbUdldERyYXdhYmxlRHJhd09yZGVycwBjc21HZXREcmF3YWJsZVJlbmRlck9yZGVycwBjc21HZXREcmF3YWJsZU9wYWNpdGllcwBjc21HZXREcmF3YWJsZU1hc2tDb3VudHMAY3NtR2V0RHJhd2FibGVNYXNrcwBjc21HZXREcmF3YWJsZVZlcnRleENvdW50cwBjc21HZXREcmF3YWJsZVZlcnRleFBvc2l0aW9ucwBjc21HZXREcmF3YWJsZVZlcnRleFV2cwBjc21HZXREcmF3YWJsZUluZGV4Q291bnRzAGNzbUdldERyYXdhYmxlSW5kaWNlcwBjc21HZXREcmF3YWJsZU11bHRpcGx5Q29sb3JzAGNzbUdldERyYXdhYmxlU2NyZWVuQ29sb3JzAGNzbUdldERyYXdhYmxlUGFyZW50UGFydEluZGljZXMAY3NtUmVzZXREcmF3YWJsZUR5bmFtaWNGbGFncwBjc21HZXRQYXJhbWV0ZXJLZXlDb3VudHMAY3NtR2V0UGFyYW1ldGVyS2V5VmFsdWVz"
                                ),
                                scratchBuffer(3252, "Cg=="),
                                scratchBuffer(3291, "//////8="),
                                scratchBuffer(3360, "LSsgICAwWDB4AChudWxsKQ=="),
                                scratchBuffer(3392, "EQAKABEREQAAAAAFAAAAAAAACQAAAAAL"),
                                scratchBuffer(3424, "EQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERER"),
                                scratchBuffer(3473, "Cw=="),
                                scratchBuffer(3482, "EQAKChEREQAKAAACAAkLAAAACQALAAAL"),
                                scratchBuffer(3531, "DA=="),
                                scratchBuffer(3543, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"),
                                scratchBuffer(3589, "Dg=="),
                                scratchBuffer(3601, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"),
                                scratchBuffer(3647, "EA=="),
                                scratchBuffer(3659, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"),
                                scratchBuffer(3714, "EgAAABISEgAAAAAAAAk="),
                                scratchBuffer(3763, "Cw=="),
                                scratchBuffer(3775, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"),
                                scratchBuffer(3821, "DA=="),
                                scratchBuffer(
                                    3833,
                                    "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAuAAAAAMgaAAAAAAAAAwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzphAC0JnAAQX5fANaROQBTgzkAnPQ5AItfhAAo+b0A+B87AN7/lwAPmAUAES/vAApaiwBtH20Az342AAnLJwBGT7cAnmY/AC3qXwC6J3UA5evHAD178QD3OQcAklKKAPtr6gAfsV8ACF2NADADVgB7/EYA8KtrACC8zwA29JoA46kdAF5hkQAIG+YAhZllAKAUXwCNQGgAgNj/ACdzTQAGBjEAylYVAMmocwB74mAAa4zAABnERwDNZ8MACejcAFmDKgCLdsQAphyWAESv3QAZV9EApT4FAAUH/wAzfj8AwjLoAJhP3gC7fTIAJj3DAB5r7wCf+F4ANR86AH/yygDxhx0AfJAhAGokfADVbvoAMC13ABU7QwC1FMYAwxmdAK3EwgAsTUEADABdAIZ9RgDjcS0Am8aaADNiAAC00nwAtKeXADdV1QDXPvYAoxAYAE12/ABknSoAcNerAGN8+AB6sFcAFxXnAMBJVgA71tkAp4Q4ACQjywDWincAWlQjAAAfuQDxChsAGc7fAJ8x/wBmHmoAmVdhAKz7RwB+f9gAImW3ADLoiQDmv2AA78TNAGw2CQBdP9QAFt7XAFg73gDem5IA0iIoACiG6ADiWE0AxsoyAAjjFgDgfcsAF8BQAPMdpwAY4FsALhM0AIMSYgCDSAEA9Y5bAK2wfwAe6fIASEpDABBn0wCq3dgArl9CAGphzgAKKKQA05m0AAam8gBcd38Ao8KDAGE8iACKc3gAr4xaAG/XvQAtpmMA9L/LAI2B7wAmwWcAVcpFAMrZNgAoqNIAwmGNABLJdwAEJhQAEkabAMRZxADIxUQATbKRAAAX8wDUQ60AKUnlAP3VEAAAvvwAHpTMAHDO7gATPvUA7PGAALPnwwDH+CgAkwWUAMFxPgAuCbMAC0XzAIgSnACrIHsALrWfAEeSwgB7Mi8ADFVtAHKnkABr5x8AMcuWAHkWSgBBeeIA9N+JAOiUlwDi5oQAmTGXAIjtawBfXzYAu/0OAEiatABnpGwAcXJCAI1dMgCfFbgAvOUJAI0xJQD3dDkAMAUcAA0MAQBLCGgALO5YAEeqkAB05wIAvdYkAPd9pgBuSHIAnxbvAI6UpgC0kfYA0VNRAM8K8gAgmDMA9Ut+ALJjaADdPl8AQF0DAIWJfwBVUikAN2TAAG3YEAAySDIAW0x1AE5x1ABFVG4ACwnBACr1aQAUZtUAJwedAF0EUAC0O9sA6nbFAIf5FwBJa30AHSe6AJZpKQDGzKwArRRUAJDiagCI2YkALHJQAASkvgB3B5QA8zBwAAD8JwDqcagAZsJJAGTgPQCX3YMAoz+XAEOU/QANhowAMUHeAJI5nQDdcIwAF7fnAAjfOwAVNysAXICgAFqAkwAQEZIAD+jYAGyArwDb/0sAOJAPAFkYdgBipRUAYcu7AMeJuQAQQL0A0vIEAEl1JwDrtvYA2yK7AAoUqgCJJi8AZIN2AAk7MwAOlBoAUTqqAB2jwgCv7a4AXCYSAG3CTQAtepwAwFaXAAM/gwAJ8PYAK0CMAG0xmQA5tAcADCAVANjDWwD1ksQAxq1LAE7KpQCnN80A5qk2AKuSlADdQmgAGWPeAHaM7wBoi1IA/Ns3AK6hqwDfFTEAAK6hAAz72gBkTWYA7QW3ACllMABXVr8AR/86AGr5uQB1vvMAKJPfAKuAMABmjPYABMsVAPoiBgDZ5B0APbOkAFcbjwA2zQkATkLpABO+pAAzI7UA8KoaAE9lqADSwaUACz8PAFt4zQAj+XYAe4sEAIkXcgDGplMAb27iAO/rAACbSlgAxNq3AKpmugB2z88A0QIdALHxLQCMmcEAw613AIZI2gD3XaAAxoD0AKzwLwDd7JoAP1y8ANDebQCQxx8AKtu2AKMlOgAAr5oArVOTALZXBAApLbQAS4B+ANoHpwB2qg4Ae1mhABYSKgDcty0A+uX9AInb/gCJvv0A5HZsAAap/AA+gHAAhW4VAP2H/wAoPgcAYWczACoYhgBNveoAs+evAI9tbgCVZzkAMb9bAITXSAAw3xYAxy1DACVhNQDJcM4AMMu4AL9s/QCkAKIABWzkAFrdoAAhb0cAYhLSALlchABwYUkAa1bgAJlSAQBQVTcAHtW3ADPxxAATbl8AXTDkAIUuqQAdssMAoTI2AAi3pADqsdQAFvchAI9p5AAn/3cADAOAAI1ALQBPzaAAIKWZALOi0wAvXQoAtPlCABHaywB9vtAAm9vBAKsXvQDKooEACGpcAC5VFwAnAFUAfxTwAOEHhgAUC2QAlkGNAIe+3gDa/SoAayW2AHuJNAAF8/4Aub+eAGhqTwBKKqgAT8RaAC34vADXWpgA9MeVAA1NjQAgOqYApFdfABQ/sQCAOJUAzCABAHHdhgDJ3rYAv2D1AE1lEQABB2sAjLCsALLA0ABRVUgAHvsOAJVywwCjBjsAwEA1AAbcewDgRcwATin6ANbKyADo80EAfGTeAJtk2ADZvjEApJfDAHdY1ABp48UA8NoTALo6PABGGEYAVXVfANK99QBuksYArC5dAA5E7QAcPkIAYcSHACn96QDn1vMAInzKAG+RNQAI4MUA/9eNAG5q4gCw/cYAkwjBAHxddABrrbIAzW6dAD5yewDGEWoA98+pAClz3wC1yboAtwBRAOKyDQB0uiQA5X1gAHTYigANFSwAgRgMAH5mlAABKRYAn3p2AP39vgBWRe8A2X42AOzZEwCLurkAxJf8ADGoJwDxbsMAlMU2ANioVgC0qLUAz8wOABKJLQBvVzQALFaJAJnO4wDWILkAa16qAD4qnAARX8wA/QtKAOH0+wCOO20A4oYsAOnUhAD8tKkA7+7RAC41yQAvOWEAOCFEABvZyACB/AoA+0pqAC8c2ABTtIQATpmMAFQizAAqVdwAwMbWAAsZlgAacLgAaZVkACZaYAA/Uu4AfxEPAPS1EQD8y/UANLwtADS87gDoXcwA3V5gAGeOmwCSM+8AyRe4AGFYmwDhV7wAUYPGANg+EADdcUgALRzdAK8YoQAhLEYAWfPXANl6mACeVMAAT4b6AFYG/ADlea4AiSI2ADitIgBnk9wAVeiqAIImOADK55sAUQ2kAJkzsQCp1w4AaQVIAGWy8AB/iKcAiEyXAPnRNgAhkrMAe4JKAJjPIQBAn9wA3EdVAOF0OgBn60IA/p3fAF7UXwB7Z6QAuqx6AFX2ogAriCMAQbpVAFluCAAhKoYAOUeDAInj5gDlntQASftAAP9W6QAcD8oAxVmKAJT6KwDTwcUAD8XPANtargBHxYYAhUNiACGGOwAseZQAEGGHACpMewCALBoAQ78SAIgmkAB4PIkAqMTkAOXbewDEOsIAJvTqAPdnigANkr8AZaMrAD2TsQC9fAsApFHcACfdYwBp4d0AmpQZAKgplQBozigACe20AESfIABOmMoAcIJjAH58IwAPuTIAp/WOABRW5wAh8QgAtZ0qAG9+TQClGVEAtfmrAILf1gCW3WEAFjYCAMQ6nwCDoqEAcu1tADmNegCCuKkAazJcAEYnWwAANO0A0gB3APz0VQABWU0A4HGA"
                                ),
                                scratchBuffer(
                                    6707,
                                    "QPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNThj7T7aD0k/Xph7P9oPyT9pN6wxaCEiM7QPFDNoIaIz2w9JP9sPSb/kyxZA5MsWwAAAAAAAAACA2w9JQNsPScAAAIA/AADAPwAAAADcz9E1AAAAAADAFT8="
                                ),
                                scratchBuffer(6856, "BQ=="),
                                scratchBuffer(6868, "DQ=="),
                                scratchBuffer(6892, "DgAAAA8AAAB4HAAAAAQ="),
                                scratchBuffer(6916, "AQ=="),
                                scratchBuffer(6931, "Cv////8="),
                                scratchBuffer(7188, "oCA="),
                                (global = {
                                    Int8Array: Int8Array,
                                    Int16Array: Int16Array,
                                    Int32Array: Int32Array,
                                    Uint8Array: Uint8Array,
                                    Uint16Array: Uint16Array,
                                    Uint32Array: Uint32Array,
                                    Float32Array: Float32Array,
                                    Float64Array: Float64Array,
                                    NaN: NaN,
                                    Infinity: 1 / 0,
                                    Math: Math,
                                }),
                                (buffer = wasmMemory.buffer),
                                (m = (scratchBuffer = asmLibraryArg).memory),
                                (n = wasmTable),
                                (o = new global.Int8Array(buffer)),
                                (p = new global.Int16Array(buffer)),
                                (q = new global.Int32Array(buffer)),
                                (r = new global.Uint8Array(buffer)),
                                (s = new global.Uint16Array(buffer)),
                                (t = new global.Uint32Array(buffer)),
                                (u = new global.Float32Array(buffer)),
                                (v = new global.Float64Array(buffer)),
                                (w = global.Math.imul),
                                (x = global.Math.fround),
                                (y = global.Math.abs),
                                (z = global.Math.clz32),
                                (A = global.Math.min),
                                global.Math.max,
                                (C = global.Math.floor),
                                global.Math.ceil,
                                global.Math.sqrt,
                                scratchBuffer.abort,
                                global.NaN,
                                (H = global.Infinity),
                                (I = scratchBuffer.a),
                                (J = scratchBuffer.b),
                                (K = scratchBuffer.c),
                                (L = 5251776),
                                (M = 0),
                                (n[1] = function (a, Mn, Nn, On, Pn) {
                                    (a |= 0), (Mn |= 0), (Nn |= 0), (On |= 0), (Pn |= 0);
                                    var Xn,
                                        lo,
                                        mo,
                                        po,
                                        ro,
                                        so,
                                        to,
                                        uo,
                                        vo,
                                        wo,
                                        xo,
                                        yo,
                                        zo,
                                        Ao,
                                        Bo,
                                        Co,
                                        Do,
                                        Eo,
                                        Fo,
                                        Go,
                                        Ho,
                                        Io,
                                        Jo,
                                        qo,
                                        Qn = 0,
                                        Rn = x(0),
                                        Sn = x(0),
                                        Tn = 0,
                                        Un = x(0),
                                        Vn = x(0),
                                        Wn = x(0),
                                        Yn = x(0),
                                        Zn = x(0),
                                        _n = x(0),
                                        $n = x(0),
                                        ao = x(0),
                                        bo = x(0),
                                        co = x(0),
                                        eo = x(0),
                                        fo = x(0),
                                        go = x(0),
                                        ho = x(0),
                                        io = x(0),
                                        jo = x(0),
                                        ko = x(0),
                                        no = x(0),
                                        oo = x(0),
                                        Ko = (x(0), x(0), x(0), x(0), x(0), x(0), x(0), x(0), x(0), 0);
                                    if (((L = qo = (L - 32) | 0), 1 <= (0 | Pn)))
                                        for (
                                            Xn = q[(16 + ((q[(a + 308) >> 2] + (Mn << 5)) | 0)) >> 2],
                                                Qn = (q[(a + 60) >> 2] + w(Xn, 24)) | 0,
                                                Mn = ((lo = q[(Qn + 8) >> 2]) + -1) | 0,
                                                yo = ((ro = q[(Qn + 4) >> 2]) + -1) | 0,
                                                zo = vo = ((Xn = q[(q[(a + 152) >> 2] + (Xn << 2)) >> 2]) + (lo << 3)) | 0,
                                                Ao = wo = (Xn + ((uo = w(ro, (mo = (lo + 1) | 0))) << 3)) | 0,
                                                Bo = xo = (Xn + ((lo + uo) << 3)) | 0,
                                                Jo = q[(Qn + 12) >> 2],
                                                so = x(0 | ro),
                                                to = x(0 | lo),
                                                a = 0;
                                            (Wn = u[(4 + (Qn = ((po = a << 3) + Nn) | 0)) >> 2]),
                                                (Sn = x(Wn * so)),
                                                (Yn = u[Qn >> 2]),
                                                (Rn = x(Yn * to)),
                                                (Qn = Wn >= x(1)),
                                                (Sn =
                                                    !((Wn < x(0)) ^ 1) || Qn | (Yn >= x(1)) | (Yn < x(0))
                                                        ? (Ko ||
                                                              ((bo = u[(4 + Bo) >> 2]),
                                                              (Co = u[(Xn + 4) >> 2]),
                                                              (Zn = x(bo - Co)),
                                                              (Do = u[(4 + zo) >> 2]),
                                                              (Eo = u[(4 + Ao) >> 2]),
                                                              (_n = x(Do - Eo)),
                                                              (co = x(x(Zn - _n) * x(0.5))),
                                                              (Fo = u[xo >> 2]),
                                                              (Go = u[Xn >> 2]),
                                                              ($n = x(Fo - Go)),
                                                              (Ho = u[vo >> 2]),
                                                              (Io = u[wo >> 2]),
                                                              (ao = x(Ho - Io)),
                                                              (eo = x(x($n - ao) * x(0.5))),
                                                              (_n = x(x(_n + Zn) * x(0.5))),
                                                              (ao = x(x(ao + $n) * x(0.5))),
                                                              (Ko = 1),
                                                              (Zn = x(x(x(x(x(Co + Do) + Eo) + bo) * x(0.25)) - x(Zn * x(0.5)))),
                                                              ($n = x(x(x(x(x(Go + Ho) + Io) + Fo) * x(0.25)) - x($n * x(0.5))))),
                                                          ((Wn < x(3)) ^ 1) | ((Yn > x(-2)) ^ 1) | (((Yn < x(3)) ^ 1) | ((Wn > x(-2)) ^ 1))
                                                              ? ((u[(On + po) >> 2] = x(Wn * eo) + x(x(Yn * ao) + $n)), (Rn = x(Wn * co)), x(x(Yn * _n) + Zn))
                                                              : (Yn <= x(0)
                                                                    ? Wn <= x(0)
                                                                        ? ((Vn = x(x(Wn + x(2)) * x(0.5))),
                                                                          (Un = x(x(Yn + x(2)) * x(0.5))),
                                                                          (Rn = x(co + co)),
                                                                          (no = x(Zn - Rn)),
                                                                          (Sn = x(eo + eo)),
                                                                          (oo = x($n - Sn)),
                                                                          (jo = x(Zn - x(_n + _n))),
                                                                          (fo = x(jo - Rn)),
                                                                          (ko = x($n - x(ao + ao))),
                                                                          (go = x(ko - Sn)),
                                                                          (ho = u[(Xn + 4) >> 2]),
                                                                          (io = u[Xn >> 2]))
                                                                        : Qn
                                                                        ? ((Rn = x(co * x(3))),
                                                                          (Sn = x(Zn - x(_n + _n))),
                                                                          (jo = x(Rn + Sn)),
                                                                          (fo = x(eo * x(3))),
                                                                          (go = x($n - x(ao + ao))),
                                                                          (ko = x(fo + go)),
                                                                          (Vn = x(x(Wn + x(-1)) * x(0.5))),
                                                                          (Un = x(x(Yn + x(2)) * x(0.5))),
                                                                          (ho = x(Rn + Zn)),
                                                                          (io = x(fo + $n)),
                                                                          (fo = x(co + Sn)),
                                                                          (go = x(eo + go)),
                                                                          (no = u[(4 + Ao) >> 2]),
                                                                          (oo = u[wo >> 2]))
                                                                        : ((Rn = x(Zn - x(_n + _n))),
                                                                          (Qn = yo),
                                                                          (Tn = x(y(Sn)) < x(2147483648) ? ~~Sn : -2147483648),
                                                                          (Vn = x(0 | (Qn = (0 | Tn) == (0 | ro) ? Qn : Tn))),
                                                                          (Un = x(Vn / so)),
                                                                          (fo = x(x(Un * co) + Rn)),
                                                                          (bo = x(Un * eo)),
                                                                          (Un = x($n - x(ao + ao))),
                                                                          (go = x(bo + Un)),
                                                                          (Wn = x(x(0 | (Tn = (Qn + 1) | 0)) / so)),
                                                                          (jo = x(x(Wn * co) + Rn)),
                                                                          (ko = x(x(Wn * eo) + Un)),
                                                                          (Un = x(x(Yn + x(2)) * x(0.5))),
                                                                          (Vn = x(Sn - Vn)),
                                                                          (Qn = (Xn + (w(Qn, mo) << 3)) | 0),
                                                                          (no = u[(Qn + 4) >> 2]),
                                                                          (oo = u[Qn >> 2]),
                                                                          (Qn = (Xn + (w(Tn, mo) << 3)) | 0),
                                                                          (ho = u[(Qn + 4) >> 2]),
                                                                          (io = u[Qn >> 2]))
                                                                    : Yn >= x(1)
                                                                    ? Wn <= x(0)
                                                                        ? ((Vn = x(x(Wn + x(2)) * x(0.5))),
                                                                          (Un = x(x(Yn + x(-1)) * x(0.5))),
                                                                          (Rn = x(co + co)),
                                                                          (fo = x(x(_n + Zn) - Rn)),
                                                                          (Sn = x(eo + eo)),
                                                                          (go = x(x(ao + $n) - Sn)),
                                                                          (ho = x(x(_n * x(3)) + Zn)),
                                                                          (no = x(ho - Rn)),
                                                                          (io = x(x(ao * x(3)) + $n)),
                                                                          (oo = x(io - Sn)),
                                                                          (jo = u[(4 + zo) >> 2]),
                                                                          (ko = u[vo >> 2]))
                                                                        : Qn
                                                                        ? ((Rn = x(co * x(3))),
                                                                          (jo = x(Rn + x(_n + Zn))),
                                                                          (Sn = x(eo * x(3))),
                                                                          (ko = x(Sn + x(ao + $n))),
                                                                          (bo = Rn),
                                                                          (Rn = x(x(_n * x(3)) + Zn)),
                                                                          (ho = x(bo + Rn)),
                                                                          (bo = Sn),
                                                                          (Sn = x(x(ao * x(3)) + $n)),
                                                                          (io = x(bo + Sn)),
                                                                          (Vn = x(x(Wn + x(-1)) * x(0.5))),
                                                                          (Un = x(x(Yn + x(-1)) * x(0.5))),
                                                                          (no = x(co + Rn)),
                                                                          (oo = x(eo + Sn)),
                                                                          (fo = u[(4 + Bo) >> 2]),
                                                                          (go = u[xo >> 2]))
                                                                        : ((Rn = x(x(_n * x(3)) + Zn)),
                                                                          (Qn = yo),
                                                                          (Tn = x(y(Sn)) < x(2147483648) ? ~~Sn : -2147483648),
                                                                          (Vn = x(0 | (Qn = (0 | Tn) == (0 | ro) ? Qn : Tn))),
                                                                          (Un = x(Vn / so)),
                                                                          (no = x(x(Un * co) + Rn)),
                                                                          (bo = x(Un * eo)),
                                                                          (Un = x(x(ao * x(3)) + $n)),
                                                                          (oo = x(bo + Un)),
                                                                          (Wn = x(x(0 | (Tn = (Qn + 1) | 0)) / so)),
                                                                          (ho = x(x(Wn * co) + Rn)),
                                                                          (io = x(x(Wn * eo) + Un)),
                                                                          (Un = x(x(Yn + x(-1)) * x(0.5))),
                                                                          (Vn = x(Sn - Vn)),
                                                                          (Qn = (Xn + ((w(Qn, mo) + lo) << 3)) | 0),
                                                                          (fo = u[(Qn + 4) >> 2]),
                                                                          (go = u[Qn >> 2]),
                                                                          (Qn = (Xn + ((w(Tn, mo) + lo) << 3)) | 0),
                                                                          (jo = u[(Qn + 4) >> 2]),
                                                                          (ko = u[Qn >> 2]))
                                                                    : Wn <= x(0)
                                                                    ? ((Vn = x(x(Wn + x(2)) * x(0.5))),
                                                                      (Qn = Mn),
                                                                      (Tn = x(y((Sn = Rn))) < x(2147483648) ? ~~Rn : -2147483648),
                                                                      (Rn = x(0 | (Qn = (0 | Tn) == (0 | lo) ? Qn : Tn))),
                                                                      (Un = x(Sn - Rn)),
                                                                      (Rn = x(Rn / to)),
                                                                      (Sn = x(co + co)),
                                                                      (fo = x(x(x(Rn * _n) + Zn) - Sn)),
                                                                      (bo = x(x(Rn * ao) + $n)),
                                                                      (Rn = x(eo + eo)),
                                                                      (go = x(bo - Rn)),
                                                                      (Wn = x(x(0 | (Tn = (Qn + 1) | 0)) / to)),
                                                                      (no = x(x(x(Wn * _n) + Zn) - Sn)),
                                                                      (oo = x(x(x(Wn * ao) + $n) - Rn)),
                                                                      (jo = u[(4 + (Qn = (Xn + (Qn << 3)) | 0)) >> 2]),
                                                                      (ko = u[Qn >> 2]),
                                                                      (ho = u[(4 + (Qn = (Xn + (Tn << 3)) | 0)) >> 2]),
                                                                      (io = u[Qn >> 2]))
                                                                    : Qn
                                                                    ? ((bo = Sn = x(co * x(3))),
                                                                      (Qn = Mn),
                                                                      (Tn = x(y(Rn)) < x(2147483648) ? ~~Rn : -2147483648),
                                                                      (Un = x(0 | (Qn = (0 | Tn) == (0 | lo) ? Qn : Tn))),
                                                                      (Vn = x(Un / to)),
                                                                      (jo = x(bo + x(x(Vn * _n) + Zn))),
                                                                      (Yn = x(eo * x(3))),
                                                                      (ko = x(Yn + x(x(Vn * ao) + $n))),
                                                                      (bo = Sn),
                                                                      (Sn = x(x(0 | (Tn = (Qn + 1) | 0)) / to)),
                                                                      (ho = x(bo + x(x(Sn * _n) + Zn))),
                                                                      (io = x(Yn + x(x(Sn * ao) + $n))),
                                                                      (Vn = x(x(Wn + x(-1)) * x(0.5))),
                                                                      (Un = x(Rn - Un)),
                                                                      (fo = u[(4 + (Qn = (Xn + ((Qn + uo) << 3)) | 0)) >> 2]),
                                                                      (go = u[Qn >> 2]),
                                                                      (no = u[(4 + (Qn = (Xn + ((Tn + uo) << 3)) | 0)) >> 2]),
                                                                      (oo = u[Qn >> 2]))
                                                                    : ((v[(16 + qo) >> 3] = Wn), (q[qo >> 2] = a), (v[(8 + qo) >> 3] = Yn), Y(4, 1107, qo)),
                                                                x(Un + Vn) <= x(1)
                                                                    ? ((u[(On + po) >> 2] = x(go + x(x(oo - go) * Un)) + x(x(ko - go) * Vn)), (Rn = x(fo + x(x(no - fo) * Un))), x(x(jo - fo) * Vn))
                                                                    : ((Rn = x(x(1) - Un)), (Sn = x(x(1) - Vn)), (u[(On + po) >> 2] = x(io + x(x(ko - io) * Rn)) + x(x(oo - io) * Sn)), (Rn = x(ho + x(x(jo - ho) * Rn))), x(x(no - ho) * Sn))))
                                                        : ((Qn = x(y((bo = Sn))) < x(2147483648) ? ~~Sn : -2147483648),
                                                          (Vn = x(bo - x(0 | Qn))),
                                                          (Tn = x(y((Sn = Rn))) < x(2147483648) ? ~~Rn : -2147483648),
                                                          (Un = x(Sn - x(0 | Tn))),
                                                          (Qn = (Tn + w(Qn, mo)) | 0),
                                                          Jo
                                                              ? ((Rn = x(x(1) - Vn)),
                                                                (Sn = x(x(1) - Un)),
                                                                (Tn = (Xn + (Qn << 3)) | 0),
                                                                (Qn = (Xn + ((Qn + mo) << 3)) | 0),
                                                                (u[(On + po) >> 2] = x(x(x(Rn * x(Sn * u[Tn >> 2])) + x(Rn * x(Un * u[(Tn + 8) >> 2]))) + x(Vn * x(Sn * u[Qn >> 2]))) + x(Vn * x(Un * u[(Qn + 8) >> 2]))),
                                                                (Rn = x(x(x(Rn * x(Sn * u[(Tn + 4) >> 2])) + x(Rn * x(Un * u[(Tn + 12) >> 2]))) + x(Vn * x(Sn * u[(Qn + 4) >> 2])))),
                                                                x(Vn * x(Un * u[(Qn + 12) >> 2])))
                                                              : x(Un + Vn) <= x(1)
                                                              ? ((Rn = x(x(x(1) - Un) - Vn)),
                                                                (Tn = (Xn + (Qn << 3)) | 0),
                                                                (Qn = (Xn + ((Qn + mo) << 3)) | 0),
                                                                (u[(On + po) >> 2] = x(x(Rn * u[Tn >> 2]) + x(Un * u[(Tn + 8) >> 2])) + x(Vn * u[Qn >> 2])),
                                                                (Rn = x(x(Rn * u[(Tn + 4) >> 2]) + x(Un * u[(Tn + 12) >> 2]))),
                                                                x(Vn * u[(Qn + 4) >> 2]))
                                                              : ((Rn = x(x(Un + x(-1)) + Vn)),
                                                                (Tn = (Xn + ((Qn + mo) << 3)) | 0),
                                                                (Sn = x(x(1) - Un)),
                                                                (Wn = x(x(1) - Vn)),
                                                                (Qn = (Xn + (Qn << 3)) | 0),
                                                                (u[(On + po) >> 2] = x(x(Rn * u[(Tn + 8) >> 2]) + x(Sn * u[Tn >> 2])) + x(Wn * u[(Qn + 8) >> 2])),
                                                                (Rn = x(x(Rn * u[(Tn + 12) >> 2]) + x(Sn * u[(Tn + 4) >> 2]))),
                                                                x(Wn * u[(Qn + 12) >> 2])))),
                                                (u[(4 + ((On + po) | 0)) >> 2] = Rn + Sn),
                                                (0 | Pn) != (0 | (a = (a + 1) | 0));

                                        );
                                    L = (32 + qo) | 0;
                                }),
                                (n[2] = function (a, jh) {
                                    (a |= 0), (jh |= 0);
                                    var Ah = 0,
                                        Bh = 0,
                                        Ch = 0,
                                        Dh = 0,
                                        Eh = 0,
                                        Fh = x(0),
                                        Gh = 0,
                                        Hh = 0,
                                        Jh = (x(0), 0),
                                        Kh = 0,
                                        Dh = q[(a + 320) >> 2],
                                        Ah = q[(a + 316) >> 2],
                                        Eh = q[(a + 308) >> 2];
                                    -1 == (0 | (Bh = q[(8 + (Ch = (Eh + (jh << 5)) | 0)) >> 2]))
                                        ? ((q[((Kh = Ah) + (Ah = jh << 2)) >> 2] = q[(q[(a + 148) >> 2] + (q[(Ch + 16) >> 2] << 2)) >> 2]), (q[(Ah + Dh) >> 2] = 1065353216))
                                        : ((Gh = q[(Ch + 16) >> 2]),
                                          (Hh = q[(q[(a + 152) >> 2] + (Gh << 2)) >> 2]),
                                          n[q[(24 + ((Eh + (Bh << 5)) | 0)) >> 2]](a, Bh, Hh, Hh, q[(16 + ((q[(a + 60) >> 2] + w(Gh, 24)) | 0)) >> 2]),
                                          (Fh = u[(q[(a + 148) >> 2] + (q[(Ch + 16) >> 2] << 2)) >> 2]),
                                          (Ch = q[(Ch + 8) >> 2] << 2),
                                          (u[((Bh = jh << 2) + Ah) >> 2] = Fh * u[(Ch + Ah) >> 2]),
                                          (q[(Bh + Dh) >> 2] = q[(Ch + Dh) >> 2])),
                                        4 <= r[(q[a >> 2] + 4) | 0] &&
                                            ((Dh = jh << 2),
                                            (Ah = (q[(a + 308) >> 2] + (jh << 5)) | 0),
                                            (Bh = q[(Ah + 16) >> 2] << 2),
                                            (Ch = q[(a + 328) >> 2]),
                                            (jh = q[(a + 324) >> 2]),
                                            -1 == (0 | (Eh = q[(Ah + 8) >> 2]))
                                                ? ((Eh = q[(a + 156) >> 2]),
                                                  (q[((Ah = Dh << 2) + jh) >> 2] = q[(Eh + (Bh <<= 2)) >> 2]),
                                                  (q[((Gh = 4 | Ah) + jh) >> 2] = q[((Hh = 4 | Bh) + Eh) >> 2]),
                                                  (q[((Jh = 8 | Ah) + jh) >> 2] = q[(Eh + (Kh = 8 | Bh)) >> 2]),
                                                  (q[(jh + ((Dh |= 3) << 2)) >> 2] = 1065353216),
                                                  (a = q[(a + 160) >> 2]),
                                                  (q[(Ah + Ch) >> 2] = q[(a + Bh) >> 2]),
                                                  (q[(Ch + Gh) >> 2] = q[(a + Hh) >> 2]),
                                                  (q[(Ch + Jh) >> 2] = q[(a + Kh) >> 2]))
                                                : ((Bh = ((Hh = Bh << 2) + q[(a + 156) >> 2]) | 0),
                                                  (u[(Ah = ((Gh = Dh << 2) + jh) | 0) >> 2] = u[Bh >> 2] * u[(Eh = ((Jh = Eh << 4) + jh) | 0) >> 2]),
                                                  (u[(Ah + 4) >> 2] = u[(Bh + 4) >> 2] * u[(Eh + 4) >> 2]),
                                                  (u[(Ah + 8) >> 2] = u[(Bh + 8) >> 2] * u[(Eh + 8) >> 2]),
                                                  (q[(jh + ((Dh |= 3) << 2)) >> 2] = 1065353216),
                                                  (a = (Hh + q[(a + 160) >> 2]) | 0),
                                                  (Kh = u[a >> 2]),
                                                  (Fh = u[(Ah = (Ch + Jh) | 0) >> 2]),
                                                  (u[(jh = (Ch + Gh) | 0) >> 2] = x(Kh + Fh) - x(Kh * Fh)),
                                                  (Kh = u[(a + 4) >> 2]),
                                                  (Fh = u[(Ah + 4) >> 2]),
                                                  (u[(jh + 4) >> 2] = x(Kh + Fh) - x(Kh * Fh)),
                                                  (Kh = u[(a + 8) >> 2]),
                                                  (Fh = u[(Ah + 8) >> 2]),
                                                  (u[(jh + 8) >> 2] = x(Kh + Fh) - x(Kh * Fh))),
                                            (q[(Ch + (Dh << 2)) >> 2] = 1065353216));
                                }),
                                (n[3] = function (a, rn, sn, vn, wn) {
                                    (a |= 0), (rn |= 0), (sn |= 0), (vn |= 0), (wn |= 0);
                                    var Bn,
                                        Cn,
                                        Dn,
                                        Fn,
                                        Gn,
                                        xn = 0,
                                        xn = (x(0), x(0), x(0), x(0), x(0), x(0), x(0), x(0), (rn = q[(16 + ((q[(a + 308) >> 2] + (rn << 5)) | 0)) >> 2]) << 2),
                                        zn = (function (a) {
                                            var Cl,
                                                Fl,
                                                Dl,
                                                El,
                                                Bl = x(0);
                                            (L = Dl = (L - 16) | 0), j(a);
                                            a: if ((Cl = 2147483647 & (El = b[0])) >>> 0 <= 1061752794) (Bl = x(1)), Cl >>> 0 < 964689920 || (Bl = ba(+a));
                                            else if (Cl >>> 0 <= 1081824209)
                                                (Fl = +a), (Bl = 1075235812 <= Cl >>> 0 ? x(-ba(((0 | El) < 0 ? 3.141592653589793 : -3.141592653589793) + Fl)) : aa((0 | El) <= -1 ? 1.5707963267948966 + Fl : 1.5707963267948966 - Fl));
                                            else if (Cl >>> 0 <= 1088565717)
                                                Bl = 1085271520 <= Cl >>> 0 ? ba(+a + ((0 | El) < 0 ? 6.283185307179586 : -6.283185307179586)) : aa((0 | El) <= -1 ? -4.71238898038469 - +a : +a - 4.71238898038469);
                                            else if (((Bl = x(a - a)), !(2139095040 <= Cl >>> 0)))
                                                if ((Cl = 3 & Da(a, (8 + Dl) | 0)) >>> 0 <= 2) {
                                                    switch ((Cl - 1) | 0) {
                                                        default:
                                                            Bl = ba(v[(8 + Dl) >> 3]);
                                                            break a;
                                                        case 0:
                                                            Bl = aa(-v[(8 + Dl) >> 3]);
                                                            break a;
                                                        case 1:
                                                    }
                                                    Bl = x(-ba(v[(8 + Dl) >> 3]));
                                                } else Bl = aa(v[(8 + Dl) >> 3]);
                                            return (L = (16 + Dl) | 0), Bl;
                                        })((yn = x(x(x(u[(4 + ((q[(a + 168) >> 2] + w(rn, 12)) | 0)) >> 2] + u[(xn + q[(a + 284) >> 2]) >> 2]) * x(3.1415927410125732)) / x(180)))),
                                        An = u[(xn + q[(a + 272) >> 2]) >> 2],
                                        En = q[(xn + q[(a + 292) >> 2]) >> 2],
                                        yn = (function (a) {
                                            var Tk,
                                                yl,
                                                Al,
                                                zl = 0;
                                            (L = yl = (L - 16) | 0), j(a);
                                            a: if ((Tk = 2147483647 & (Al = b[0])) >>> 0 <= 1061752794) Tk >>> 0 < 964689920 || (a = aa(+a));
                                            else if (Tk >>> 0 <= 1081824209)
                                                (zl = +a),
                                                    (a = Tk >>> 0 <= 1075235811 ? ((0 | Al) <= -1 ? x(-ba(zl + 1.5707963267948966)) : ba(zl + -1.5707963267948966)) : aa(-(((0 | Al) < 0 ? 3.141592653589793 : -3.141592653589793) + zl)));
                                            else if (Tk >>> 0 <= 1088565717)
                                                (zl = +a), (a = Tk >>> 0 <= 1085271519 ? ((0 | Al) <= -1 ? ba(zl + 4.71238898038469) : x(-ba(zl + -4.71238898038469))) : aa(((0 | Al) < 0 ? 6.283185307179586 : -6.283185307179586) + zl));
                                            else if (2139095040 <= Tk >>> 0) a = x(a - a);
                                            else if ((Tk = 3 & Da(a, (8 + yl) | 0)) >>> 0 <= 2) {
                                                switch ((Tk - 1) | 0) {
                                                    default:
                                                        a = aa(v[(8 + yl) >> 3]);
                                                        break a;
                                                    case 0:
                                                        a = ba(v[(8 + yl) >> 3]);
                                                        break a;
                                                    case 1:
                                                }
                                                a = aa(-v[(8 + yl) >> 3]);
                                            } else a = x(-ba(v[(8 + yl) >> 3]));
                                            return (L = (16 + yl) | 0), a;
                                        })(yn);
                                    if ((rn = 0) < (0 | wn))
                                        for (
                                            zn = x(An * zn),
                                                Cn = x(En ? -1 : 1),
                                                Fn = x(zn * Cn),
                                                Bn = q[(xn + q[(a + 288) >> 2]) >> 2] ? x(-1) : x(1),
                                                Gn = x(x(An * yn) * Bn),
                                                zn = x(zn * Bn),
                                                An = x(x(An * x(-yn)) * Cn),
                                                yn = u[(xn + q[(a + 280) >> 2]) >> 2],
                                                Cn = u[(xn + q[(a + 276) >> 2]) >> 2];
                                            (xn = ((a = rn << 3) + vn) | 0),
                                                (Bn = u[(a = (a + sn) | 0) >> 2]),
                                                (Dn = u[(a + 4) >> 2]),
                                                (u[(xn + 4) >> 2] = yn + x(x(Gn * Bn) + x(Fn * Dn))),
                                                (u[xn >> 2] = Cn + x(x(zn * Bn) + x(An * Dn))),
                                                (0 | wn) != (0 | (rn = (rn + 1) | 0));

                                        );
                                }),
                                (n[4] = function (a, jh) {
                                    (a |= 0), (jh |= 0);
                                    var vh,
                                        wh,
                                        xh,
                                        yh,
                                        zh,
                                        kh,
                                        lh = 0,
                                        mh = 0,
                                        nh = 0,
                                        oh = x(0),
                                        ph = 0,
                                        qh = 0,
                                        rh = x(0),
                                        sh = 0,
                                        th = 0,
                                        uh = 0;
                                    if ((x(0), x(0), x(0), x(0), (L = kh = (L + -64) | 0), (sh = q[(a + 320) >> 2]), (th = q[(a + 316) >> 2]), (mh = q[(a + 308) >> 2]), -1 == (0 | (ph = q[(8 + (nh = (mh + (jh << 5)) | 0)) >> 2]))))
                                        (lh = q[(nh + 16) >> 2] << 2), (q[((mh = jh << 2) + th) >> 2] = q[(lh + q[(a + 268) >> 2]) >> 2]), (q[(mh + sh) >> 2] = q[(lh + q[(a + 272) >> 2]) >> 2]);
                                    else {
                                        (lh = q[(nh + 16) >> 2] << 2),
                                            (uh = q[(lh + q[(a + 276) >> 2]) >> 2]),
                                            (q[(24 + kh) >> 2] = uh),
                                            (lh = q[(lh + q[(a + 280) >> 2]) >> 2]),
                                            (q[(28 + kh) >> 2] = lh),
                                            (q[(16 + kh) >> 2] = 0),
                                            (wh = 1 == q[(12 + (qh = (mh + (ph << 5)) | 0)) >> 2] ? x(-10) : x(-0.10000000149011612)),
                                            (u[(20 + kh) >> 2] = wh),
                                            (q[(60 + kh) >> 2] = lh),
                                            (q[(56 + kh) >> 2] = uh),
                                            n[q[(qh + 24) >> 2]](a, ph, (56 + kh) | 0, (48 + kh) | 0, 1),
                                            (oh = x(1)),
                                            (mh = 9);
                                        b: {
                                            for (;;) {
                                                if (
                                                    ((lh = mh),
                                                    (rh = x(oh * x(0))),
                                                    (u[(32 + kh) >> 2] = rh + u[(56 + kh) >> 2]),
                                                    (vh = x(wh * oh)),
                                                    (u[(36 + kh) >> 2] = vh + u[(60 + kh) >> 2]),
                                                    n[q[(qh + 24) >> 2]](a, ph, (32 + kh) | 0, (40 + kh) | 0, 1),
                                                    (xh = x(u[(44 + kh) >> 2] - u[(52 + kh) >> 2])),
                                                    (u[(44 + kh) >> 2] = xh),
                                                    (yh = x(u[(40 + kh) >> 2] - u[(48 + kh) >> 2])),
                                                    (u[(40 + kh) >> 2] = yh),
                                                    xh != x(0) || yh != x(0))
                                                ) {
                                                    (mh = q[(44 + kh) >> 2]), (q[(8 + kh) >> 2] = q[(40 + kh) >> 2]), (q[(12 + kh) >> 2] = mh);
                                                    break b;
                                                }
                                                if (
                                                    ((u[(32 + kh) >> 2] = u[(56 + kh) >> 2] - rh),
                                                    (u[(36 + kh) >> 2] = u[(60 + kh) >> 2] - vh),
                                                    n[q[(qh + 24) >> 2]](a, ph, (32 + kh) | 0, (40 + kh) | 0, 1),
                                                    (rh = x(u[(40 + kh) >> 2] - u[(48 + kh) >> 2])),
                                                    (u[(40 + kh) >> 2] = rh),
                                                    (vh = x(u[(44 + kh) >> 2] - u[(52 + kh) >> 2])),
                                                    (u[(44 + kh) >> 2] = vh) != x(0) || rh != x(0))
                                                ) {
                                                    (u[(12 + kh) >> 2] = -vh), (u[(8 + kh) >> 2] = -rh);
                                                    break b;
                                                }
                                                if (((mh = (lh + -1) | 0), (oh = x(oh * x(0.10000000149011612))), !lh)) break;
                                            }
                                            Y(3, 1311, 0);
                                        }
                                        (oh = (function (a, Sh) {
                                            var Th = x(0);
                                            if ((Th = x(Ba(u[(4 + a) >> 2], u[a >> 2]) - Ba(u[(4 + Sh) >> 2], u[Sh >> 2]))) < x(-3.1415927410125732)) for (; (Th = x(Th + x(6.2831854820251465))) < x(-3.1415927410125732); );
                                            if (Th > x(3.1415927410125732)) for (; (Th = x(Th + x(-6.2831854820251465))) > x(3.1415927410125732); );
                                            return Th;
                                        })((16 + kh) | 0, (8 + kh) | 0)),
                                            n[q[(qh + 24) >> 2]](a, q[(nh + 8) >> 2], (24 + kh) | 0, (24 + kh) | 0, 1),
                                            (mh = q[(nh + 16) >> 2] << 2),
                                            (q[(mh + q[(a + 276) >> 2]) >> 2] = q[(24 + kh) >> 2]),
                                            (q[(mh + q[(a + 280) >> 2]) >> 2] = q[(28 + kh) >> 2]),
                                            (lh = (mh + q[(a + 284) >> 2]) | 0),
                                            (u[lh >> 2] = u[lh >> 2] + x(x(oh * x(-180)) / x(3.1415927410125732))),
                                            (nh = q[(nh + 8) >> 2] << 2),
                                            (u[((lh = jh << 2) + th) >> 2] = u[(mh + q[(a + 268) >> 2]) >> 2] * u[(nh + th) >> 2]),
                                            (mh = (mh + q[(a + 272) >> 2]) | 0),
                                            (oh = x(u[mh >> 2] * u[(nh + sh) >> 2])),
                                            (u[(lh + sh) >> 2] = oh),
                                            (u[mh >> 2] = oh);
                                    }
                                    4 <= r[(q[a >> 2] + 4) | 0] &&
                                        ((lh = jh << 2),
                                        (nh = (q[(a + 308) >> 2] + (jh << 5)) | 0),
                                        (ph = q[(nh + 16) >> 2] << 2),
                                        (mh = q[(a + 328) >> 2]),
                                        (jh = q[(a + 324) >> 2]),
                                        -1 == (0 | (qh = q[(nh + 8) >> 2]))
                                            ? ((qh = q[(a + 296) >> 2]),
                                              (q[((nh = lh << 2) + jh) >> 2] = q[(qh + (ph <<= 2)) >> 2]),
                                              (q[((sh = 4 | nh) + jh) >> 2] = q[((th = 4 | ph) + qh) >> 2]),
                                              (q[((uh = 8 | nh) + jh) >> 2] = q[(qh + (zh = 8 | ph)) >> 2]),
                                              (q[(jh + ((lh |= 3) << 2)) >> 2] = 1065353216),
                                              (a = q[(a + 300) >> 2]),
                                              (q[(mh + nh) >> 2] = q[(a + ph) >> 2]),
                                              (q[(mh + sh) >> 2] = q[(a + th) >> 2]),
                                              (q[(mh + uh) >> 2] = q[(a + zh) >> 2]))
                                            : ((ph = ((th = ph << 2) + q[(a + 296) >> 2]) | 0),
                                              (u[(nh = ((sh = lh << 2) + jh) | 0) >> 2] = u[ph >> 2] * u[(qh = ((uh = qh << 4) + jh) | 0) >> 2]),
                                              (u[(nh + 4) >> 2] = u[(ph + 4) >> 2] * u[(qh + 4) >> 2]),
                                              (u[(nh + 8) >> 2] = u[(ph + 8) >> 2] * u[(qh + 8) >> 2]),
                                              (q[(jh + ((lh |= 3) << 2)) >> 2] = 1065353216),
                                              (a = (th + q[(a + 300) >> 2]) | 0),
                                              (oh = u[a >> 2]),
                                              (rh = u[(nh = (mh + uh) | 0) >> 2]),
                                              (u[(jh = (mh + sh) | 0) >> 2] = x(oh + rh) - x(oh * rh)),
                                              (oh = u[(a + 4) >> 2]),
                                              (rh = u[(nh + 4) >> 2]),
                                              (u[(jh + 4) >> 2] = x(oh + rh) - x(oh * rh)),
                                              (oh = u[(a + 8) >> 2]),
                                              (rh = u[(nh + 8) >> 2]),
                                              (u[(jh + 8) >> 2] = x(oh + rh) - x(oh * rh))),
                                        (q[(mh + (lh << 2)) >> 2] = 1065353216)),
                                        (L = (64 + kh) | 0);
                                }),
                                (n[5] = function (a, Tk) {
                                    return (a |= 0), (Tk |= 0), x(0), x(0), 0 | ((a = u[a >> 2]) < (Tk = u[Tk >> 2]) ? -1 : Tk < a);
                                }),
                                (n[6] = function (a, tj, vj, wj) {
                                    (a |= 0), (tj |= 0), (vj |= 0), (wj |= 0);
                                    var Tj = 0,
                                        Uj = 0,
                                        Vj = x(0),
                                        Wj = 0,
                                        Xj = 0,
                                        Yj = 0,
                                        Zj = 0,
                                        _j = 0;
                                    if (1 <= (0 | (Wj = q[(a + 8) >> 2]))) for (Yj = q[(a + 12) >> 2], Xj = q[(a + 20) >> 2]; (u[((Uj = Tj << 2) + Yj) >> 2] = u[(tj + Uj) >> 2] * u[(Uj + Xj) >> 2]), (0 | (Tj = (Tj + 1) | 0)) < (0 | Wj); );
                                    if (!((0 | (Wj = q[a >> 2])) < 1))
                                        if (((Yj = q[(a + 4) >> 2]), wj))
                                            for (Uj = tj = 0; ; ) {
                                                if (q[wj >> 2]) {
                                                    if ((0 | (Tj = q[((Xj = tj << 2) + q[(a + 16) >> 2]) >> 2])) < 1) Vj = x(0);
                                                    else for (Zj = (Tj + Uj) | 0, _j = q[(a + 12) >> 2], Vj = x(0), Tj = Uj; (Vj = x(Vj + u[(_j + (Tj << 2)) >> 2])), (0 | (Tj = (Tj + 1) | 0)) < (0 | Zj); );
                                                    u[(vj + Xj) >> 2] = Vj;
                                                }
                                                if (((wj = (wj + 4) | 0), (Uj = (q[(Yj + (tj << 2)) >> 2] + Uj) | 0), !((0 | (tj = (tj + 1) | 0)) < (0 | Wj)))) break;
                                            }
                                        else
                                            for (Xj = q[(a + 16) >> 2], tj = wj = 0; ; ) {
                                                if ((0 | (Tj = q[((Uj = wj << 2) + Xj) >> 2])) <= 0) Vj = x(0);
                                                else for (Zj = (tj + Tj) | 0, _j = q[(a + 12) >> 2], Vj = x(0), Tj = tj; (Vj = x(Vj + u[(_j + (Tj << 2)) >> 2])), (0 | (Tj = (Tj + 1) | 0)) < (0 | Zj); );
                                                if (((u[(vj + Uj) >> 2] = Vj), (tj = (q[(Uj + Yj) >> 2] + tj) | 0), !((0 | (wj = (wj + 1) | 0)) < (0 | Wj)))) break;
                                            }
                                }),
                                (n[7] = function (a, tj, vj, wj) {
                                    (a |= 0), (tj |= 0), (vj |= 0), (wj |= 0);
                                    var xj = 0,
                                        yj = x(0),
                                        Oj = 0,
                                        Pj = 0,
                                        Qj = 0,
                                        Rj = 0,
                                        Sj = 0;
                                    if (1 <= (0 | (Rj = q[(a + 8) >> 2]))) for (Pj = q[(a + 12) >> 2], Qj = q[(a + 20) >> 2]; (u[((Oj = xj << 2) + Pj) >> 2] = u[(tj + Oj) >> 2] * u[(Oj + Qj) >> 2]), (0 | (xj = (xj + 1) | 0)) < (0 | Rj); );
                                    if (!((0 | (xj = q[a >> 2])) < 1))
                                        if (((Rj = q[(a + 4) >> 2]), wj))
                                            for (Oj = tj = 0; ; ) {
                                                if (q[wj >> 2]) {
                                                    if ((0 | (xj = q[((Pj = tj << 2) + q[(a + 16) >> 2]) >> 2])) < 1) yj = x(0);
                                                    else for (Qj = (xj + Oj) | 0, Sj = q[(a + 12) >> 2], yj = x(0), xj = Oj; (yj = x(yj + u[(Sj + (xj << 2)) >> 2])), (0 | (xj = (xj + 1) | 0)) < (0 | Qj); );
                                                    (xj = (vj + Pj) | 0), (yj = x(yj + x(0.0010000000474974513))), (Pj = x(y(yj)) < x(2147483648) ? ~~yj : -2147483648), (q[xj >> 2] = Pj), (xj = q[a >> 2]);
                                                }
                                                if (((wj = (wj + 4) | 0), (Oj = (q[(Rj + (tj << 2)) >> 2] + Oj) | 0), !((0 | (tj = (tj + 1) | 0)) < (0 | xj)))) break;
                                            }
                                        else
                                            for (Pj = q[(a + 16) >> 2], tj = wj = 0; ; ) {
                                                if ((0 | (xj = q[((Oj = wj << 2) + Pj) >> 2])) <= 0) yj = x(0);
                                                else for (Qj = (tj + xj) | 0, Sj = q[(a + 12) >> 2], yj = x(0), xj = tj; (yj = x(yj + u[(Sj + (xj << 2)) >> 2])), (0 | (xj = (xj + 1) | 0)) < (0 | Qj); );
                                                if (
                                                    ((xj = (vj + Oj) | 0),
                                                    (yj = x(yj + x(0.0010000000474974513))),
                                                    (Qj = x(y(yj)) < x(2147483648) ? ~~yj : -2147483648),
                                                    (q[xj >> 2] = Qj),
                                                    (tj = (q[(Oj + Rj) >> 2] + tj) | 0),
                                                    !((0 | (wj = (wj + 1) | 0)) < q[a >> 2]))
                                                )
                                                    break;
                                            }
                                }),
                                (n[8] = function (a, tj, vj, wj, xj, yj) {
                                    (a |= 0), (tj |= 0), (vj |= 0), (wj |= 0), (xj |= 0), (yj |= 0);
                                    var Mj,
                                        Nj,
                                        zj = 0,
                                        Aj = 0,
                                        Bj = 0,
                                        Cj = 0,
                                        Dj = 0,
                                        Ej = 0,
                                        Fj = 0,
                                        Gj = 0,
                                        Ij = 0,
                                        Jj = 0,
                                        Kj = x(0),
                                        Lj = 0,
                                        Hj = q[a >> 2];
                                    if (!((0 | Hj) < 1))
                                        if (((Mj = xj << 2), (Nj = q[(a + 4) >> 2]), yj))
                                            for (;;) {
                                                if (
                                                    q[yj >> 2] &&
                                                    ((Bj = q[((zj = Cj << 2) + q[(a + 16) >> 2]) >> 2]), (Fj = q[(vj + zj) >> 2]), (Aj = q[(wj + zj) >> 2]), (zj = (0 | (Gj = w(Aj, xj))) < 1) || ca(Fj, 0, w(Aj, Mj)), !(zj | ((0 | Bj) < 1)))
                                                )
                                                    for (Ij = (Bj + Ej) | 0, Jj = q[(a + 20) >> 2], zj = Ej; ; ) {
                                                        for (
                                                            Kj = u[((Aj = zj << 2) + Jj) >> 2], Lj = q[(tj + Aj) >> 2], Dj = 0;
                                                            (u[(Aj = ((Bj = Dj << 2) + Fj) | 0) >> 2] = u[Aj >> 2] + x(Kj * u[(Bj + Lj) >> 2])), (0 | Gj) != (0 | (Dj = (Dj + 1) | 0));

                                                        );
                                                        if (!((0 | (zj = (zj + 1) | 0)) < (0 | Ij))) break;
                                                    }
                                                if (((yj = (yj + 4) | 0), (Ej = (q[((Cj << 2) + Nj) >> 2] + Ej) | 0), !((0 | (Cj = (Cj + 1) | 0)) < (0 | Hj)))) break;
                                            }
                                        else
                                            for (yj = 0; ; ) {
                                                if (
                                                    ((Bj = q[((Cj = yj << 2) + q[(a + 16) >> 2]) >> 2]), (Fj = q[(vj + Cj) >> 2]), (Aj = q[(wj + Cj) >> 2]), (zj = (0 | (Gj = w(Aj, xj))) < 1) || ca(Fj, 0, w(Aj, Mj)), !(zj | ((0 | Bj) <= 0)))
                                                )
                                                    for (Ij = (Bj + Ej) | 0, Jj = q[(a + 20) >> 2], zj = Ej; ; ) {
                                                        for (
                                                            Kj = u[((Aj = zj << 2) + Jj) >> 2], Lj = q[(tj + Aj) >> 2], Dj = 0;
                                                            (u[(Aj = ((Bj = Dj << 2) + Fj) | 0) >> 2] = u[Aj >> 2] + x(Kj * u[(Bj + Lj) >> 2])), (0 | Gj) != (0 | (Dj = (Dj + 1) | 0));

                                                        );
                                                        if (!((0 | (zj = (zj + 1) | 0)) < (0 | Ij))) break;
                                                    }
                                                if (((Ej = (q[(Cj + Nj) >> 2] + Ej) | 0), !((0 | (yj = (yj + 1) | 0)) < (0 | Hj)))) break;
                                            }
                                }),
                                (n[9] = function (a) {
                                    var Je,
                                        Ke,
                                        Le,
                                        Fe = 0,
                                        Ge = 0,
                                        He = 0,
                                        Ie = 0;
                                    if (!(q[((a |= 0) + 648) >> 2] || (0 | (Fe = q[(a + 332) >> 2])) < 1))
                                        for (Ke = ((Ge = q[(a + 336) >> 2]) + w(Fe, 20)) | 0, Fe = q[(a + 424) >> 2], Ie = q[(a + 444) >> 2]; ; ) {
                                            if (q[Fe >> 2] && !((0 | (He = q[(Ge + 16) >> 2])) < (a = 1))) for (He <<= 1, Le = q[Ie >> 2]; (u[(Je = ((a << 2) + Le) | 0) >> 2] = -u[Je >> 2]), (0 | (a = (a + 2) | 0)) < (0 | He); );
                                            if (((Ie = (Ie + 4) | 0), (Fe = (Fe + 4) | 0), !((Ge = (Ge + 20) | 0) >>> 0 < Ke >>> 0))) break;
                                        }
                                }),
                                (n[10] = function (a, rn, sn) {
                                    var un;
                                    return $((un = q[(20 + (a |= 0)) >> 2]), (rn |= 0), (rn = (sn |= 0) >>> 0 < (rn = (q[(a + 16) >> 2] - un) | 0) >>> 0 ? sn : rn)), (q[(a + 20) >> 2] = rn + q[(a + 20) >> 2]), 0 | sn;
                                }),
                                (n[11] = function (a, Gl, Pm, Qm, Rm, Sm) {
                                    (a |= 0), (Gl = +Gl), (Pm |= 0), (Qm |= 0), (Rm |= 0), (Sm |= 0);
                                    var dn,
                                        on,
                                        Xm,
                                        hn,
                                        Tm = 0,
                                        Um = 0,
                                        Vm = 0,
                                        Wm = 0,
                                        Ym = 0,
                                        Zm = 0,
                                        _m = 0,
                                        $m = 0,
                                        an = 0,
                                        bn = 0,
                                        cn = 0,
                                        en = 0,
                                        fn = 0,
                                        gn = 0,
                                        kn = 0;
                                    if (
                                        ((q[(44 + (L = Xm = (L - 560) | 0)) >> 2] = 0),
                                        h(+Gl),
                                        (Tm = 0 | b[1]),
                                        (on = 4294967295 < b[0] >>> 0 ? 0 : 1),
                                        (hn = (0 | Tm) < -1 || ((0 | Tm) <= -1 && on) ? (h((Gl = -Gl)), (Tm = 0 | b[1]), b[0], (gn = 1), 3872) : 2048 & Rm ? ((gn = 1), 3875) : (gn = 1 & Rm) ? 3878 : 3873),
                                        2146435072 == (2146435072 & Tm))
                                    )
                                        _(a, 32, Pm, (Zm = (gn + 3) | 0), -65537 & Rm), Z(a, hn, gn), (Qm = (Sm >>> 5) & 1), Z(a, Gl != Gl ? (Qm ? 3899 : 3903) : Qm ? 3891 : 3895, 3);
                                    else if (
                                        ((Gl = (function Ja(a, ic) {
                                            var kc,
                                                lc,
                                                jc = 0;
                                            if ((h(+a), (jc = 0 | b[1]), (kc = 0 | b[0]), 2047 != (0 | (jc = ((lc = jc) >>> 20) & 2047)))) {
                                                if (!jc) return (jc = ic), (ic = 0 == a ? 0 : ((a = Ja(0x10000000000000000 * a, ic)), (q[ic >> 2] + -64) | 0)), (q[jc >> 2] = ic), a;
                                                (q[ic >> 2] = jc + -1022), f(0, 0 | kc), f(1, (-2146435073 & lc) | 1071644672), (a = +g());
                                            }
                                            return a;
                                        })(Gl, (44 + Xm) | 0)),
                                        0 != (Gl += Gl) && (q[(44 + Xm) >> 2] = q[(44 + Xm) >> 2] + -1),
                                        (dn = (16 + Xm) | 0),
                                        97 == (0 | (on = 32 | Sm)))
                                    ) {
                                        if (((cn = (bn = 32 & Sm) ? (9 + hn) | 0 : hn), !(11 < Qm >>> 0) && (Tm = (12 - Qm) | 0))) {
                                            for (en = 8; (en *= 16), (Tm = (Tm + -1) | 0); );
                                            Gl = 45 == r[0 | cn] ? -(en + (-Gl - en)) : Gl + en - en;
                                        }
                                        for (
                                            (0 | dn) == (0 | (Tm = ga((Vm = (Tm = q[(44 + Xm) >> 2]) >> 31) ^ (Tm + Vm), 0, dn))) && ((o[(15 + Xm) | 0] = 48), (Tm = (15 + Xm) | 0)),
                                                Ym = 2 | gn,
                                                Vm = q[(44 + Xm) >> 2],
                                                o[0 | (an = (Tm + -2) | 0)] = Sm + 15,
                                                o[(Tm + -1) | 0] = (0 | Vm) < 0 ? 45 : 43,
                                                Tm = 8 & Rm,
                                                Um = (16 + Xm) | 0;
                                            (Sm = Um),
                                                ($m = bn),
                                                (Vm = y(Gl) < 2147483648 ? ~~Gl : -2147483648),
                                                (o[0 | Um] = $m | r[(Vm + 3856) | 0]),
                                                (1 != (((Um = (Sm + 1) | 0) - ((16 + Xm) | 0)) | 0)) | (0 == (Gl = 16 * (Gl - (0 | Vm))) ? !(Tm | (0 < (0 | Qm))) : 0) || ((o[(Sm + 1) | 0] = 46), (Um = (Sm + 2) | 0)),
                                                0 != Gl;

                                        );
                                        _(a, 32, Pm, (Zm = ((Sm = !Qm | ((0 | Qm) <= ((((Um - Xm) | 0) - 18) | 0)) ? (((((dn - ((16 + Xm) | 0)) | 0) - an) | 0) + Um) | 0 : (2 + ((((Qm + dn) | 0) - an) | 0)) | 0) + Ym) | 0), Rm),
                                            Z(a, cn, Ym),
                                            _(a, 48, Pm, Zm, 65536 ^ Rm),
                                            Z(a, (16 + Xm) | 0, (Qm = (Um - ((16 + Xm) | 0)) | 0)),
                                            _(a, 48, (Sm - (((Tm = Qm) + (Qm = (dn - an) | 0)) | 0)) | 0, 0, 0),
                                            Z(a, an, Qm);
                                    } else {
                                        for (
                                            Tm = (0 | Qm) < 0,
                                                0 == Gl ? (Wm = q[(44 + Xm) >> 2]) : ((Wm = (q[(44 + Xm) >> 2] + -28) | 0), (q[(44 + Xm) >> 2] = Wm), (Gl *= 268435456)),
                                                _m = Tm ? 6 : Qm,
                                                Vm = bn = (0 | Wm) < 0 ? (48 + Xm) | 0 : (336 + Xm) | 0;
                                            (Vm = ((Qm = Vm) + 4) | 0), 0 != (Gl = 1e9 * (Gl - ((q[Qm >> 2] = Tm = (Gl < 4294967296) & (0 <= Gl) ? ~~Gl >>> 0 : 0) >>> 0)));

                                        );
                                        if ((0 | Wm) < 1) (Tm = Vm), (Um = bn);
                                        else
                                            for (Um = bn; ; ) {
                                                if (((an = (0 | Wm) < 29 ? Wm : 29), !((Tm = (Vm + -4) | 0) >>> 0 < Um >>> 0))) {
                                                    for (
                                                        Qm = an, $m = 0;
                                                        (kn = $m),
                                                            ($m = q[(cn = Tm) >> 2]),
                                                            (Ym = 31 & Qm),
                                                            (Ym = 32 <= (63 & Qm) >>> (Zm = 0) ? ((Wm = $m << Ym), 0) : ((Wm = ((1 << Ym) - 1) & ($m >>> (32 - Ym))), $m << Ym)),
                                                            (Zm = (Wm + Zm) | 0),
                                                            (Zm = ($m = (kn + Ym) | 0) >>> 0 < Ym >>> 0 ? (Zm + 1) | 0 : Zm),
                                                            (kn = cn),
                                                            (cn = cd(($m = dd((Ym = $m), Zm, 1e9)), M, 1e9)),
                                                            (q[kn >> 2] = Ym - cn),
                                                            Um >>> 0 <= (Tm = (Tm + -4) | 0) >>> 0;

                                                    );
                                                    (Qm = $m) && (q[(Um = (Um + -4) | 0) >> 2] = Qm);
                                                }
                                                for (; Um >>> 0 < (Tm = Vm) >>> 0 && !q[(Vm = (Tm + -4) | 0) >> 2]; );
                                                if (((Wm = (q[(44 + Xm) >> 2] - an) | 0), (Vm = Tm), !(0 < (0 | (q[(44 + Xm) >> 2] = Wm))))) break;
                                            }
                                        if ((0 | Wm) <= -1)
                                            for (fn = (1 + ((((_m + 25) | 0) / 9) | 0)) | 0, an = 102 == (0 | on); ; ) {
                                                if ((($m = (0 | Wm) < -9 ? 9 : (0 - Wm) | 0), Tm >>> 0 <= Um >>> 0)) Um = q[Um >> 2] ? Um : (Um + 4) | 0;
                                                else {
                                                    for (cn = 1e9 >>> $m, Ym = (-1 << $m) ^ -1, Wm = 0, Vm = Um; (Qm = q[Vm >> 2]), (q[Vm >> 2] = (Qm >>> $m) + Wm), (Wm = w(cn, Qm & Ym)), (Vm = (Vm + 4) | 0) >>> 0 < Tm >>> 0; );
                                                    (Um = q[Um >> 2] ? Um : (Um + 4) | 0), Wm && ((q[Tm >> 2] = Wm), (Tm = (Tm + 4) | 0));
                                                }
                                                if (((Wm = ($m + q[(44 + Xm) >> 2]) | 0), (Tm = (0 | fn) < (Tm - (Qm = an ? bn : Um)) >> 2 ? (Qm + (fn << 2)) | 0 : Tm), !((0 | (q[(44 + Xm) >> 2] = Wm)) < 0))) break;
                                            }
                                        if (!(Tm >>> (Vm = 0) <= Um >>> 0 || ((Vm = w((bn - Um) >> 2, 9)), (Qm = q[Um >> 2]) >>> 0 < (Wm = 10)))) for (; (Vm = (Vm + 1) | 0), (Wm = w(Wm, 10)) >>> 0 <= Qm >>> 0; );
                                        if ((0 | (Qm = (((_m - (102 == (0 | on) ? 0 : Vm)) | 0) - ((103 == (0 | on)) & (0 != (0 | _m)))) | 0)) < ((w((Tm - bn) >> 2, 9) + -9) | 0)) {
                                            if (((Zm = (((bn + ((Qm = ((0 | (Ym = (Qm + 9216) | 0)) / 9) | 0) << 2)) | 0) - 4092) | 0), (Wm = 10), (0 | (Qm = (1 + ((Ym - w(Qm, 9)) | 0)) | 0)) <= 8))
                                                for (; (Wm = w(Wm, 10)), 9 != (0 | (Qm = (Qm + 1) | 0)); );
                                            if (
                                                ((fn = (Zm + 4) | 0),
                                                ((an = ((cn = q[Zm >> 2]) - w(Wm, (Ym = ((cn >>> 0) / (Wm >>> 0)) | 0))) | 0) || (0 | fn) != (0 | Tm)) &&
                                                    ((en = an >>> 0 < (Qm = Wm >>> 1) >>> 0 ? 0.5 : (0 | Tm) == (0 | fn) && (0 | Qm) == (0 | an) ? 1 : 1.5),
                                                    (Gl = 1 & Ym ? 9007199254740994 : 9007199254740992),
                                                    !gn | (45 != r[0 | hn]) || ((en = -en), (Gl = -Gl)),
                                                    (q[Zm >> 2] = Qm = (cn - an) | 0),
                                                    Gl + en != Gl))
                                            ) {
                                                if (1e9 <= (q[Zm >> 2] = Qm = (Qm + Wm) | 0) >>> 0)
                                                    for (; (Zm = (Zm + -4) | (q[Zm >> 2] = 0)) >>> 0 < Um >>> 0 && (q[(Um = (Um + -4) | 0) >> 2] = 0), (Qm = (q[Zm >> 2] + 1) | 0), 999999999 < (q[Zm >> 2] = Qm) >>> 0; );
                                                if (((Vm = w((bn - Um) >> 2, 9)), !((Qm = q[Um >> 2]) >>> 0 < (Wm = 10)))) for (; (Vm = (Vm + 1) | 0), (Wm = w(Wm, 10)) >>> 0 <= Qm >>> 0; );
                                            }
                                            Tm = (Qm = (Zm + 4) | 0) >>> 0 < Tm >>> 0 ? Qm : Tm;
                                        }
                                        j: {
                                            for (;;) {
                                                if ((an = Tm) >>> (cn = 0) <= Um >>> 0) break j;
                                                if (q[(Tm = (an + -4) | 0) >> 2]) break;
                                            }
                                            cn = 1;
                                        }
                                        if (103 != (0 | on)) Ym = 8 & Rm;
                                        else if (((_m = (((Qm = ((0 | Vm) < (0 | (Tm = _m || 1))) & (-5 < (0 | Vm))) ? -1 ^ Vm : -1) + Tm) | 0), (Sm = ((Qm ? -1 : -2) + Sm) | 0), !(Ym = 8 & Rm))) {
                                            if (((Tm = 9), cn && (Ym = q[(an + -4) >> 2]) && !((Ym >>> (Tm = 0)) % (Qm = 10)))) for (; (Tm = (Tm + 1) | 0), !((Ym >>> 0) % ((Qm = w(Qm, 10)) >>> 0)); );
                                            (Qm = (w((an - bn) >> 2, 9) + -9) | 0),
                                                (_m =
                                                    102 == (32 | Sm)
                                                        ? ((Ym = 0) | _m) < (0 | (Qm = 0 < (0 | (Qm = (Qm - Tm) | 0)) ? Qm : 0))
                                                            ? _m
                                                            : Qm
                                                        : ((Ym = 0) | _m) < (0 | (Qm = 0 < (0 | (Qm = (((Qm + Vm) | 0) - Tm) | 0)) ? Qm : 0))
                                                        ? _m
                                                        : Qm);
                                        }
                                        if (((Zm = 0 != (0 | (Wm = _m | Ym))), (Qm = a), (kn = Pm), (Tm = 0 < (0 | Vm) ? Vm : 0), 102 != (0 | ($m = 32 | Sm)))) {
                                            if (((dn - (Tm = ga(((Tm = Vm >> 31) + Vm) ^ Tm, 0, dn))) | 0) <= 1) for (; (o[0 | (Tm = (Tm + -1) | 0)] = 48), ((dn - Tm) | 0) < 2; );
                                            (o[0 | (fn = (Tm + -2) | 0)] = Sm), (o[(Tm + -1) | 0] = (0 | Vm) < 0 ? 45 : 43), (Tm = (dn - fn) | 0);
                                        }
                                        if ((_(Qm, 32, kn, (Zm = (1 + ((Tm + ((Zm + ((_m + gn) | 0)) | 0)) | 0)) | 0), Rm), Z(a, hn, gn), _(a, 48, Pm, Zm, 65536 ^ Rm), 102 == (0 | $m))) {
                                            for (Qm = (16 + Xm) | 8, Vm = (16 + Xm) | 9, Um = Sm = bn >>> 0 < Um >>> 0 ? bn : Um; ; ) {
                                                if (((Tm = ga(q[Um >> 2], 0, Vm)), (0 | Sm) != (0 | Um))) {
                                                    if (!(Tm >>> 0 <= (16 + Xm) >>> 0)) for (; (o[0 | (Tm = (Tm + -1) | 0)] = 48), (16 + Xm) >>> 0 < Tm >>> 0; );
                                                } else (0 | Tm) == (0 | Vm) && ((o[(24 + Xm) | 0] = 48), (Tm = Qm));
                                                if ((Z(a, Tm, (Vm - Tm) | 0), !((Um = (Um + 4) | 0) >>> 0 <= bn >>> 0))) break;
                                            }
                                            Wm && Z(a, 3907, 1);
                                            p: if (!(((0 | _m) < 1) | (an >>> 0 <= Um >>> 0)))
                                                for (;;) {
                                                    if ((16 + Xm) >>> 0 < (Tm = ga(q[Um >> 2], 0, Vm)) >>> 0) for (; (o[0 | (Tm = (Tm + -1) | 0)] = 48), (16 + Xm) >>> 0 < Tm >>> 0; );
                                                    if ((Z(a, Tm, (0 | _m) < 9 ? _m : 9), (_m = (_m + -9) | 0), an >>> 0 <= (Um = (Um + 4) | 0) >>> 0)) break p;
                                                    if (!(0 < (0 | _m))) break;
                                                }
                                            _(a, 48, (_m + 9) | 0, 9, 0);
                                        } else {
                                            q: if (!((0 | _m) < 0))
                                                for (Sm = cn ? an : (Um + 4) | 0, Qm = (16 + Xm) | 8, bn = (16 + Xm) | 9, Vm = Um; ; ) {
                                                    if (((0 | bn) == (0 | (Tm = ga(q[Vm >> 2], 0, bn))) && ((o[(24 + Xm) | 0] = 48), (Tm = Qm)), (0 | Um) != (0 | Vm))) {
                                                        if (!(Tm >>> 0 <= (16 + Xm) >>> 0)) for (; (o[0 | (Tm = (Tm + -1) | 0)] = 48), (16 + Xm) >>> 0 < Tm >>> 0; );
                                                    } else Z(a, Tm, 1), (Tm = (Tm + 1) | 0), ((0 | _m) < 1 && !Ym) || Z(a, 3907, 1);
                                                    if ((Z(a, ($m = Tm), (0 | (Tm = (bn - Tm) | 0)) < (0 | _m) ? Tm : _m), (_m = (_m - Tm) | 0), Sm >>> 0 <= (Vm = (Vm + 4) | 0) >>> 0)) break q;
                                                    if (!(-1 < (0 | _m))) break;
                                                }
                                            _(a, 48, (_m + 18) | 0, 18, 0), Z(a, fn, (dn - fn) | 0);
                                        }
                                    }
                                    return _(a, 32, Pm, Zm, 8192 ^ Rm), (L = (560 + Xm) | 0), 0 | ((0 | Zm) < (0 | Pm) ? Pm : Zm);
                                }),
                                (n[12] = function (a, Gl) {
                                    a |= 0;
                                    var Cm = (Gl |= 0);
                                    (Gl = (q[Gl >> 2] + 15) & -16),
                                        (q[Cm >> 2] = Gl + 16),
                                        (Cm = a),
                                        (a = (function (a, Gl, Hl, Zl) {
                                            var dm,
                                                am,
                                                _l = 0,
                                                $l = 0,
                                                bm = 0,
                                                cm = 0;
                                            return (
                                                (L = am = (L - 32) | 0),
                                                (_l = ((cm = _l = 2147483647 & Zl) - 1006698496) | 0),
                                                ($l = _l = (dm = $l = bm = Hl) >>> 0 < 0 ? (_l + 1) | 0 : _l),
                                                (_l = (cm - 1140785152) | 0),
                                                (((0 | (_l = bm >>> 0 < 0 ? (_l + 1) | 0 : _l)) == (0 | $l)) & (dm >>> 0 < bm >>> 0)) | ($l >>> 0 < _l >>> 0)
                                                    ? ((_l = (Zl << 4) | (Hl >>> 28)),
                                                      (Hl = (Hl << 4) | (Gl >>> 28)),
                                                      ((134217728 == (0 | (bm = Gl &= 268435455))) & (1 <= a >>> 0)) | (134217728 < Gl >>> 0)
                                                          ? ((_l = (_l + 1073741824) | 0), (a = (Hl + 1) | 0) >>> 0 < 1 && (_l = (_l + 1) | 0), ($l = a))
                                                          : ((_l = (_l - (((($l = Hl) >>> 0 < 0) + -1073741824) | 0)) | 0), a | (134217728 ^ bm) || ((a = ($l + (1 & $l)) | 0) >>> 0 < $l >>> 0 && (_l = (_l + 1) | 0), ($l = a))))
                                                    : (!bm & (2147418112 == (0 | cm)) ? !(a | Gl) : ((2147418112 == (0 | cm)) & (bm >>> 0 < 0)) | (cm >>> 0 < 2147418112))
                                                    ? ((_l = 2146435072),
                                                      ((1140785151 == (($l = 0) | cm)) & (4294967295 < bm >>> 0)) | (1140785151 < cm >>> 0) ||
                                                          (bm = cm >>> 16) >>> (_l = 0) < 15249 ||
                                                          ((function (a, Gl, Hl, Cm, Dm, Em) {
                                                              var Hm,
                                                                  Im,
                                                                  Fm = 0,
                                                                  Gm = 0;
                                                              64 & Em
                                                                  ? ((Gl = 31 & (Hl = (Em - 64) | 0)),
                                                                    (Gl = 32 <= (63 & Hl) >>> 0 ? ((Hl = 0), Dm >>> Gl) : ((Hl = Dm >>> Gl), ((((1 << Gl) - 1) & Dm) << (32 - Gl)) | (Cm >>> Gl))),
                                                                    (Dm = Cm = 0))
                                                                  : Em &&
                                                                    ((Gm = Dm),
                                                                    (Fm = 31 & (Im = (64 - Em) | 0)),
                                                                    (Im = 32 <= (63 & Im) >>> 0 ? ((Gm = Cm << Fm), 0) : ((Gm = (((1 << Fm) - 1) & (Cm >>> (32 - Fm))) | (Gm << Fm)), Cm << Fm)),
                                                                    (Hm = Gl),
                                                                    (Gl = 31 & (Fm = Em)),
                                                                    (Gl = 32 <= (63 & Fm) >>> 0 ? ((Fm = 0), Hl >>> Gl) : ((Fm = Hl >>> Gl), ((((1 << Gl) - 1) & Hl) << (32 - Gl)) | (Hm >>> Gl))),
                                                                    (Gl |= Im),
                                                                    (Hl = Fm | Gm),
                                                                    (Fm = Cm),
                                                                    (Cm = 31 & Em),
                                                                    (Cm = 32 <= (63 & Em) >>> 0 ? ((Gm = 0), Dm >>> Cm) : ((Gm = Dm >>> Cm), ((((1 << Cm) - 1) & Dm) << (32 - Cm)) | (Fm >>> Cm))),
                                                                    (Dm = Gm)),
                                                                  (q[a >> 2] = Gl),
                                                                  (q[(4 + a) >> 2] = Hl),
                                                                  (q[(8 + a) >> 2] = Cm),
                                                                  (q[(12 + a) >> 2] = Dm);
                                                          })(am, a, Gl, Hl, (_l = (65535 & Zl) | 65536), (15361 - bm) | 0),
                                                          (function (a, Gl, Hl, Zl, fm, gm) {
                                                              var jm,
                                                                  hm,
                                                                  im = 0;
                                                              64 & gm
                                                                  ? ((Zl = Gl),
                                                                    (Gl = 31 & (fm = (gm + -64) | 0)),
                                                                    32 <= (63 & fm) >>> 0 ? ((fm = Zl << Gl), (Zl = 0)) : ((fm = (((1 << Gl) - 1) & (Zl >>> (32 - Gl))) | (Hl << Gl)), (Zl <<= Gl)),
                                                                    (Hl = Gl = 0))
                                                                  : gm &&
                                                                    ((hm = Zl),
                                                                    (Zl = 31 & (jm = gm)),
                                                                    (hm = 32 <= (63 & gm) >>> 0 ? ((im = hm << Zl), 0) : ((im = (((1 << Zl) - 1) & (hm >>> (32 - Zl))) | (fm << Zl)), hm << Zl)),
                                                                    (Zl = Hl),
                                                                    (fm = 31 & (gm = (64 - gm) | 0)),
                                                                    32 <= (63 & gm) >>> 0 ? ((gm = 0), (Zl >>>= fm)) : ((gm = Zl >>> fm), (Zl = ((((1 << fm) - 1) & Zl) << (32 - fm)) | (Gl >>> fm))),
                                                                    (Zl |= hm),
                                                                    (fm = gm | im),
                                                                    (gm = Gl),
                                                                    (Gl = 31 & jm),
                                                                    (Gl = 32 <= (63 & jm) >>> 0 ? ((im = gm << Gl), 0) : ((im = (((1 << Gl) - 1) & (gm >>> (32 - Gl))) | (Hl << Gl)), gm << Gl)),
                                                                    (Hl = im)),
                                                                  (q[a >> 2] = Gl),
                                                                  (q[(4 + a) >> 2] = Hl),
                                                                  (q[(8 + a) >> 2] = Zl),
                                                                  (q[(12 + a) >> 2] = fm);
                                                          })((16 + am) | 0, a, Gl, Hl, _l, (bm + -15233) | 0),
                                                          (Hl = q[(4 + am) >> 2]),
                                                          (a = q[(8 + am) >> 2]),
                                                          (_l = (q[(12 + am) >> 2] << 4) | (a >>> 28)),
                                                          ($l = (a << 4) | (Hl >>> 28)),
                                                          ((134217728 == (0 | (Hl = a = 268435455 & Hl))) &
                                                              (1 <= (Gl = q[am >> 2] | ((0 != (q[(16 + am) >> 2] | q[(24 + am) >> 2])) | (0 != (q[(20 + am) >> 2] | q[(28 + am) >> 2])))) >>> 0)) |
                                                          (134217728 < a >>> 0)
                                                              ? ((a = ($l + 1) | 0) >>> 0 < 1 && (_l = (_l + 1) | 0), ($l = a))
                                                              : Gl | (134217728 ^ Hl) || ((a = ($l + (1 & $l)) | 0) >>> 0 < $l >>> 0 && (_l = (_l + 1) | 0), ($l = a))))
                                                    : (($l = (Hl << 4) | (Gl >>> 28)), (_l = (524287 & (_l = (Zl << 4) | (Hl >>> 28))) | 2146959360)),
                                                (L = (32 + am) | 0),
                                                f(0, 0 | $l),
                                                f(1, (-2147483648 & Zl) | _l),
                                                +g()
                                            );
                                        })(q[Gl >> 2], q[(Gl + 4) >> 2], q[(Gl + 8) >> 2], q[(Gl + 12) >> 2])),
                                        (v[Cm >> 3] = a);
                                }),
                                (n[13] = function (a) {
                                    return 0;
                                }),
                                (n[14] = function (a, Gl, Cm) {
                                    (Gl |= 0), (Cm |= 0);
                                    var Mm,
                                        Em,
                                        Dm = 0,
                                        Jm = 0,
                                        Km = 0,
                                        Lm = 0;
                                    for (
                                        L = Em = (L - 32) | 0,
                                            Dm = q[(28 + (a |= 0)) >> 2],
                                            q[(16 + Em) >> 2] = Dm,
                                            Km = q[(a + 20) >> 2],
                                            q[(28 + Em) >> 2] = Cm,
                                            q[(24 + Em) >> 2] = Gl,
                                            Km = ((q[(20 + Em) >> 2] = Gl = (Km - Dm) | 0) + Cm) | 0,
                                            Lm = 2,
                                            Gl = (16 + Em) | 0;
                                        ;

                                    ) {
                                        a: {
                                            if (((Jm = (Dm = 0) | K(q[(a + 60) >> 2], 0 | Gl, 0 | Lm, (12 + Em) | 0)) && ((q[2094] = Jm), (Dm = -1)), (0 | (Dm = Dm ? (q[(12 + Em) >> 2] = -1) : q[(12 + Em) >> 2])) == (0 | Km)))
                                                (Gl = q[(a + 44) >> 2]), (q[(a + 28) >> 2] = Gl), (q[(a + 20) >> 2] = Gl), (q[(a + 16) >> 2] = Gl + q[(a + 48) >> 2]), (a = Cm);
                                            else {
                                                if (-1 < (0 | Dm)) break a;
                                                (q[(a + 28) >> 2] = 0), (q[(a + 16) >> 2] = 0), (q[(a + 20) >> 2] = 0), (q[a >> 2] = 32 | q[a >> 2]), 2 != ((a = 0) | Lm) && (a = (Cm - q[(Gl + 4) >> 2]) | 0);
                                            }
                                            return (L = (32 + Em) | 0), 0 | a;
                                        }
                                        (Jm = q[(Gl + 4) >> 2]),
                                            (q[(Gl = (Mm = Jm >>> 0 < Dm >>> 0) ? (Gl + 8) | 0 : Gl) >> 2] = (Jm = (Dm - (Mm ? Jm : 0)) | 0) + q[Gl >> 2]),
                                            (q[(Gl + 4) >> 2] = q[(Gl + 4) >> 2] - Jm),
                                            (Km = (Km - Dm) | 0),
                                            (Lm = (Lm - Mm) | 0);
                                    }
                                }),
                                (n[15] = function (a, Gl, Cm, Dm) {
                                    return (M = 0);
                                }),
                                {
                                    d: function () {},
                                    e: function () {
                                        return q[1813];
                                    },
                                    f: function () {
                                        return 83951616;
                                    },
                                    g: function () {
                                        return 5;
                                    },
                                    h: function (a, tj) {
                                        return (
                                            (tj |= 0), (L = tj = (L - 16) | 0), (a = (a |= 0) ? (sa(a) ? (Y(4, 2150, 0), 0) : r[(a + 4) | 0]) : ((q[(tj + 4) >> 2] = 1444), (q[tj >> 2] = 2267), Y(4, 1294, tj), 0)), (L = (tj + 16) | 0), 0 | a
                                        );
                                    },
                                    i: function (a, tj) {
                                        var uj;
                                        return (
                                            (tj |= 0),
                                            (L = uj = (L - 48) | 0),
                                            (a = (a |= 0)
                                                ? ((a + 63) & -64) != (0 | a)
                                                    ? ((q[(36 + uj) >> 2] = 1522), (q[(32 + uj) >> 2] = 2284), Y(4, 1294, (32 + uj) | 0), 0)
                                                    : ((tj + 63) & -64) == (0 | tj) && tj
                                                    ? (function (a, Tk) {
                                                          var nl,
                                                              Uk = 0,
                                                              Vk = 0,
                                                              Wk = 0,
                                                              Xk = 0,
                                                              Yk = 0,
                                                              Zk = 0,
                                                              _k = 0,
                                                              $k = 0,
                                                              al = 0,
                                                              bl = 0,
                                                              cl = 0,
                                                              dl = 0,
                                                              el = 0,
                                                              fl = 0,
                                                              gl = 0,
                                                              hl = 0,
                                                              il = 0,
                                                              jl = 0,
                                                              kl = 0,
                                                              ll = 0,
                                                              ml = 0;
                                                          L = Yk = ((nl = Vk = L) - 704) & -64;
                                                          a: if (Tk >>> 0 <= 1343) Y(4, 1235, 0);
                                                          else if (sa(a)) Y(4, 1469, 0);
                                                          else if ((Vk = r[0 | (ll = (a + 4) | 0)])) {
                                                              if (!(6 <= Vk >>> 0)) {
                                                                  (hl = 1 == (0 | !r[(a + 5) | 0])) || (da(ll, 1), X((a - -64) | 0, 4, 160)), ca((Yk - -64) | 0, 0, 640), na(a, (Yk - -64) | 0), (Vk = (a + Tk) | 0), (Tk = q[(Yk + 64) >> 2]);
                                                                  b: {
                                                                      c: {
                                                                          d: {
                                                                              if (5 <= (gl = r[(a + 4) | 0]) >>> 0) {
                                                                                  if ((Tk >>> 0 < a >>> 0) | (Vk >>> 0 < Tk >>> 0)) break c;
                                                                                  if ((Xk = (Tk + 256) | 0) >>> 0 < a >>> 0) break c;
                                                                                  if (Xk >>> 0 <= Vk >>> 0) break d;
                                                                                  break c;
                                                                              }
                                                                              if ((Tk >>> 0 < a >>> 0) | (Vk >>> 0 < Tk >>> 0)) break c;
                                                                              if (((Xk = (Tk + 128) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0)) break c;
                                                                          }
                                                                          if (
                                                                              !(
                                                                                  ((Wk = q[(Yk + 68) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Xk >>> 0) ||
                                                                                  ((Wk = (Wk - -64) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  (0 | (bl = q[Tk >> 2])) < 0 ||
                                                                                  ((Xk = q[(Yk + 72) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = ((Uk = Xk) + (Xk = bl << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((_k = q[(Yk + 76) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < _k >>> 0) | (_k >>> 0 < Wk >>> 0) ||
                                                                                  ((Uk = ((bl << 6) + _k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 80) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 84) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 88) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 92) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 96) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 100) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  (0 | (Uk = q[(Tk + 4) >> 2])) < 0 ||
                                                                                  ((Xk = q[(Yk + 104) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Zk = ((Wk = Xk) + (Xk = Uk << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 108) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = (Wk + (Uk << 6)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 112) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 116) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 120) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 124) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 128) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 132) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 136) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  (0 | (Uk = q[(Tk + 8) >> 2])) < 0 ||
                                                                                  ((Xk = q[(Yk + 140) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = ((cl = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 144) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = (Xk + cl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 148) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = (Xk + cl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 156) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = (Xk + cl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 160) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = (Xk + cl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 164) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = (Xk + cl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  (0 | (Uk = q[(Tk + 12) >> 2])) < 0 ||
                                                                                  ((Xk = q[(Yk + 172) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = ((dl = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 176) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = (Xk + dl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 180) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Wk = (Xk + dl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                  ((Xk = q[(Yk + 188) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                  ((Uk = (Xk + dl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  (0 | (Wk = q[(Tk + 16) >> 2])) < 0 ||
                                                                                  ((Xk = q[(Yk + 192) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                  ((Zk = ((Uk = Xk) + (Xk = Wk << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 196) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 200) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 204) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 208) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + (Wk << 6)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 212) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 216) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 220) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 228) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 232) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 236) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 240) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 244) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 248) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 252) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 256) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 260) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 264) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 268) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  ((Wk = q[(Yk + 272) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                  (0 | (Zk = q[(Tk + 20) >> 2])) < 0 ||
                                                                                  ((Wk = q[(Yk + 276) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0) ||
                                                                                  ((el = ((Uk = Wk) + (Wk = Zk << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  ((Uk = q[(Yk + 280) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  ((Zk = (Uk + (Zk << 6)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 284) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 288) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 292) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 296) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 300) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 308) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 312) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  (0 | (el = q[(Tk + 24) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 336) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + (el << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  (0 | (el = q[(Tk + 28) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 340) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = ((jl = el << 2) + Uk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  ((Uk = q[(Yk + 344) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((Zk = (Uk + jl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Zk >>> 0) ||
                                                                                  (0 | (el = q[(Tk + 32) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 356) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < Zk >>> 0) ||
                                                                                  ((el = ((Zk = el << 2) + Uk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  ((Uk = q[(Yk + 360) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  ((el = (Uk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  ((Uk = q[(Yk + 364) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  ((el = (Uk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  ((Uk = q[(Yk + 368) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  ((el = (Uk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  ((Uk = q[(Yk + 372) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  ((el = (Uk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  ((Uk = q[(Yk + 376) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  ((el = (Uk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  ((Uk = q[(Yk + 380) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  ((el = (Uk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < el >>> 0) ||
                                                                                  (0 | ($k = q[(Tk + 36) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 392) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < el >>> 0) ||
                                                                                  (($k = ((el = $k << 2) + Uk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  ((Uk = q[(Yk + 396) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + el) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  ((Uk = q[(Yk + 400) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + el) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 40) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 412) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 44) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 424) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 48) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 428) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = ((al <<= 2) + Uk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  ((Uk = q[(Yk + 432) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + al) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 52) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 416) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = ((al <<= 2) + Uk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  ((Uk = q[(Yk + 420) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + al) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 56) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 552) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 60) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 556) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 64) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 560) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 1)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 68) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 564) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 72) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 568) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  ((al = (($k = Uk) + (Uk = al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 572) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 576) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 580) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 584) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  (($k = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 76) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 588) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  ((al = (($k = al << 2) + Uk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  ((Uk = q[(Yk + 592) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  ((Uk = q[(Yk + 596) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < al >>> 0) ||
                                                                                  (($k = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 80) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 600) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  ((fl = (($k = Uk) + (Uk = al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < fl >>> 0) ||
                                                                                  (($k = q[(Yk + 604) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < fl >>> 0) ||
                                                                                  ((al = ($k + (al << 6)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 608) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 612) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 616) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 620) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 624) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 628) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  ((al = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < al >>> 0) ||
                                                                                  (($k = q[(Yk + 632) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < al >>> 0) ||
                                                                                  (($k = (Uk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 84) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 636) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  ((Uk = q[(Yk + 640) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  (($k = (Uk + (al << 1)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) ||
                                                                                  (0 | (al = q[(Tk + 88) >> 2])) < 0 ||
                                                                                  ((Uk = q[(Yk + 644) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0) ||
                                                                                  ((Uk = (Uk + (al << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)
                                                                              )
                                                                          ) {
                                                                              if (!(gl >>> 0 < 2)) {
                                                                                  if ((($k = q[(Yk + 168) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < Uk >>> 0)) break c;
                                                                                  if (((Uk = ($k + cl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                  if (!(gl >>> 0 < 4)) {
                                                                                      if ((($k = q[(Yk + 324) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0) | ($k >>> 0 < Uk >>> 0)) break c;
                                                                                      if ((($k = (Wk + $k) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0)) break c;
                                                                                      if (((Uk = q[(Yk + 328) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0)) break c;
                                                                                      if ((($k = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0)) break c;
                                                                                      if (((Uk = q[(Yk + 332) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0)) break c;
                                                                                      if ((($k = (Uk + Wk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < $k >>> 0)) break c;
                                                                                      if (((Uk = q[(Yk + 152) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < $k >>> 0)) break c;
                                                                                      if (((cl = (Uk + cl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Uk = q[(Yk + 184) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((cl = (Uk + dl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Uk = q[(Yk + 224) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) | (Uk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Uk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if ((0 | (cl = q[(Tk + 92) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 648) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((cl = ((Uk = cl << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 652) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((cl = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 656) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Uk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if ((0 | (cl = q[(Tk + 96) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 660) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((cl = ((Uk = cl << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 664) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((cl = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 668) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < cl >>> 0)) break c;
                                                                                      if (((Uk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 304) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 316) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 320) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if ((0 | (Uk = q[(Tk + 100) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 436) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Uk = ((Wk = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 440) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 444) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if ((0 | (Uk = q[(Tk + 104) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 448) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Uk = ((Wk = Xk) + (Xk = Uk << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = q[(Yk + 452) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = q[(Yk + 456) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = q[(Yk + 460) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = q[(Yk + 464) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) | (Wk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if ((0 | (Uk = q[(Tk + 108) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 480) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Uk = ((Wk = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 484) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 488) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if ((0 | (Uk = q[(Tk + 112) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 504) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Uk = ((Wk = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 508) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 512) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if ((0 | (Uk = q[(Tk + 116) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 528) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Wk = (Xk + (Uk << 2)) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if ((0 | (Uk = q[(Tk + 120) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 532) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Uk = ((Wk = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 536) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 540) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0)) break c;
                                                                                      if (((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if ((0 | (Uk = q[(Tk + 124) >> 2])) < 0) break c;
                                                                                      if (((Xk = q[(Yk + 544) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Wk = ((Uk <<= 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Xk = q[(Yk + 548) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                      if (((Uk = (Uk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0)) break c;
                                                                                  }
                                                                              }
                                                                              if (gl >>> 0 < 5) break b;
                                                                              if (
                                                                                  !(
                                                                                      ((Xk = q[(Yk + 348) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                      ((Wk = (Xk + jl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 352) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Wk = (Xk + jl) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 384) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Wk = (Xk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 388) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Wk = (Xk + Zk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 404) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Wk = (Xk + el) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 408) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Wk = (Xk + el) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      (0 | (Uk = q[(Tk + 128) >> 2])) < 0 ||
                                                                                      ((Xk = q[(Yk + 468) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Uk = ((Wk = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 472) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                      ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 476) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                      ((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      (0 | (Uk = q[(Tk + 132) >> 2])) < 0 ||
                                                                                      ((Xk = q[(Yk + 492) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Uk = ((Wk = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 496) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                      ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 500) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                      ((Wk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Wk >>> 0) ||
                                                                                      (0 | (Uk = q[(Tk + 136) >> 2])) < 0 ||
                                                                                      ((Xk = q[(Yk + 516) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                      ((Uk = ((Wk = Uk << 2) + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 520) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                      ((Uk = (Wk + Xk) | 0) >>> 0 < a >>> 0) | (Vk >>> 0 < Uk >>> 0) ||
                                                                                      ((Xk = q[(Yk + 524) >> 2]) >>> 0 < a >>> 0) | (Vk >>> 0 < Xk >>> 0) | (Xk >>> 0 < Uk >>> 0) ||
                                                                                      (Xk = (Wk + Xk) | 0) >>> 0 < a >>> 0
                                                                                  ) &&
                                                                                  Xk >>> 0 <= Vk >>> 0
                                                                              )
                                                                                  break b;
                                                                          }
                                                                      }
                                                                      Y(4, 1760, 0), da(ll, 1), X((a - -64) | 0, 4, 160);
                                                                      break a;
                                                                  }
                                                                  hl || (ya(a), (o[(a + 5) | 0] = 0), (Tk = q[(Yk + 64) >> 2]), (bl = q[Tk >> 2]), (_k = q[(Yk + 76) >> 2]), (gl = r[(a + 4) | 0]));
                                                                  f: {
                                                                      if ((a = 0) < (0 | bl)) {
                                                                          for (;;) {
                                                                              if (63 < ia(((a << 6) + _k) | 0) >>> 0) break f;
                                                                              if ((0 | bl) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                          if (((Uk = (Tk + 48) | 0), (Vk = 0) < (0 | (a = q[Tk >> 2])))) {
                                                                              for (Xk = q[(Tk + 48) >> 2], Wk = q[(Yk + 80) >> 2]; ; ) {
                                                                                  if (((0 | (_k = q[(Wk + (Vk << 2)) >> 2])) < 0) | ((0 | Xk) <= (0 | _k))) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (el = (Tk + 24) | 0, Xk = q[(Tk + 24) >> 2], Zk = q[(Yk + 88) >> 2], bl = q[(Yk + 84) >> 2], Vk = 0; ; ) {
                                                                                  if ((Wk = q[((_k = Vk << 2) + Zk) >> 2])) {
                                                                                      if (((0 | Wk) < 0) | ((0 | Xk) < (0 | Wk))) break f;
                                                                                      if (((0 | (_k = q[(_k + bl) >> 2])) < 0) | ((0 | Xk) <= (0 | _k))) break f;
                                                                                      if (((Wk = (Wk + _k) | 0) >>> 31) | ((0 | Xk) < (0 | Wk))) break f;
                                                                                  }
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Vk = 0, Xk = q[(Yk + 92) >> 2]; ; ) {
                                                                                  if (1 < t[(Xk + (Vk << 2)) >> 2]) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Vk = 0, Xk = q[(Yk + 96) >> 2]; ; ) {
                                                                                  if (1 < t[(Xk + (Vk << 2)) >> 2]) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Vk = 0, Xk = q[(Yk + 100) >> 2]; ; ) {
                                                                                  if (((0 | (Wk = q[(Xk + (Vk << 2)) >> 2])) < -1) | ((0 | a) <= (0 | Wk))) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                          } else el = (Tk + 24) | 0;
                                                                      } else (el = (Tk + 24) | 0), (Uk = (Tk + 48) | 0);
                                                                      if ((a = 0) < (0 | (Vk = q[(Tk + 4) >> 2]))) {
                                                                          for (Xk = q[(Yk + 108) >> 2]; ; ) {
                                                                              if (63 < ia((Xk + (a << 6)) | 0) >>> 0) break f;
                                                                              if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                          if (((Zk = ((Xk = q[(Tk + 48) >> 2]) + -1) | 0), !(((Vk = 0) | (a = q[(Tk + 4) >> 2])) <= 0))) {
                                                                              for (Wk = q[(Yk + 112) >> 2]; ; ) {
                                                                                  if (((0 | (_k = q[(Wk + (Vk << 2)) >> 2])) < 0) | ((0 | Xk) <= (0 | _k))) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Vk = 0, Xk = q[(Yk + 116) >> 2]; ; ) {
                                                                                  if (1 < t[(Xk + (Vk << 2)) >> 2]) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Vk = 0, Xk = q[(Yk + 120) >> 2]; ; ) {
                                                                                  if (1 < t[(Xk + (Vk << 2)) >> 2]) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Xk = q[Tk >> 2], Vk = 0, Wk = q[(Yk + 124) >> 2]; ; ) {
                                                                                  if (((0 | (_k = q[(Wk + (Vk << 2)) >> 2])) < -1) | ((0 | Xk) <= (0 | _k))) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Vk = 0, Xk = q[(Yk + 128) >> 2]; ; ) {
                                                                                  if (((0 | (Wk = q[(Xk + (Vk << 2)) >> 2])) < -1) | ((0 | a) <= (0 | Wk))) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Vk = 0, Xk = q[(Yk + 132) >> 2]; ; ) {
                                                                                  if (1 < t[(Xk + (Vk << 2)) >> 2]) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                              for (Wk = (Tk + 8) | 0, _k = (Tk + 12) | 0, bl = q[(Yk + 136) >> 2], Vk = 0; ; ) {
                                                                                  if (1 < (dl = q[((cl = Vk << 2) + Xk) >> 2]) >>> 0) break f;
                                                                                  if (((0 | (cl = q[(bl + cl) >> 2])) < 0) | ((0 | cl) >= q[((dl - 1) | 0 ? Wk : _k) >> 2])) break f;
                                                                                  if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                              }
                                                                          }
                                                                      } else Zk = (q[Uk >> 2] + -1) | 0;
                                                                      if ((a = 0) < (0 | (Vk = q[(Tk + 8) >> 2]))) {
                                                                          for (Xk = q[(Yk + 140) >> 2]; ; ) {
                                                                              if (((0 | (Wk = q[(Xk + (a << 2)) >> 2])) < 0) | ((0 | Zk) < (0 | Wk))) break f;
                                                                              if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                          for (jl = (Tk + 28) | 0, Xk = q[(Tk + 28) >> 2], bl = q[(Yk + 148) >> 2], cl = q[(Yk + 144) >> 2], a = 0; ; ) {
                                                                              if ((Wk = q[((_k = a << 2) + bl) >> 2])) {
                                                                                  if (((0 | Wk) < 0) | ((0 | Xk) < (0 | Wk))) break f;
                                                                                  if (((0 | (_k = q[(_k + cl) >> 2])) < 0) | ((0 | Xk) <= (0 | _k))) break f;
                                                                                  if (((Wk = (Wk + _k) | 0) >>> 31) | ((0 | Xk) < (0 | Wk))) break f;
                                                                              }
                                                                              if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                          for (a = 0, Wk = q[(Yk + 156) >> 2], _k = q[(Yk + 164) >> 2], bl = q[(Yk + 160) >> 2]; ; ) {
                                                                              if ((0 | (cl = q[((Xk = a << 2) + bl) >> 2])) < 1) break f;
                                                                              if ((0 | (dl = q[(Xk + _k) >> 2])) < 1) break f;
                                                                              if (((0 | (Xk = q[(Wk + Xk) >> 2])) < 1) | ((0 | Xk) != (0 | w((dl + 1) | 0, (cl + 1) | 0)))) break f;
                                                                              if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                      } else jl = (Tk + 28) | 0;
                                                                      if ((a = 0) < (0 | (Wk = q[(Tk + 12) >> 2]))) {
                                                                          for (Vk = q[(Yk + 172) >> 2]; ; ) {
                                                                              if (((0 | (Xk = q[(Vk + (a << 2)) >> 2])) < 0) | ((0 | Zk) < (0 | Xk))) break f;
                                                                              if ((0 | Wk) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                          for ($k = (Tk + 32) | 0, Vk = q[(Tk + 32) >> 2], Zk = q[(Yk + 180) >> 2], bl = q[(Yk + 176) >> 2], a = 0; ; ) {
                                                                              if ((Xk = q[((_k = a << 2) + Zk) >> 2])) {
                                                                                  if (((0 | Xk) < 0) | ((0 | Vk) < (0 | Xk))) break f;
                                                                                  if (((0 | (_k = q[(_k + bl) >> 2])) < 0) | ((0 | Vk) <= (0 | _k))) break f;
                                                                                  if (((Xk = (Xk + _k) | 0) >>> 31) | ((0 | Vk) < (0 | Xk))) break f;
                                                                              }
                                                                              if ((0 | Wk) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                      } else $k = (Tk + 32) | 0;
                                                                      Xk = (Tk + 16) | 0;
                                                                      m: {
                                                                          n: {
                                                                              if (!(((a = 0) | (Vk = q[(Tk + 16) >> 2])) <= 0)) {
                                                                                  for (Wk = q[(Yk + 208) >> 2]; ; ) {
                                                                                      if (63 < ia((Wk + (a << 6)) | 0) >>> 0) break f;
                                                                                      if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                                  if (!(((Vk = 0) | (a = q[Xk >> 2])) <= 0)) {
                                                                                      for (Wk = q[Uk >> 2], _k = q[(Yk + 212) >> 2]; ; ) {
                                                                                          if (((0 | (Zk = q[(_k + (Vk << 2)) >> 2])) < 0) | ((0 | Wk) <= (0 | Zk))) break f;
                                                                                          if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                      }
                                                                                      for (ll = (Tk + 36) | 0, Wk = q[(Tk + 36) >> 2], bl = q[(Yk + 220) >> 2], cl = q[(Yk + 216) >> 2], Vk = 0; ; ) {
                                                                                          if ((_k = q[((Zk = Vk << 2) + bl) >> 2])) {
                                                                                              if (((0 | _k) < 0) | ((0 | Wk) < (0 | _k))) break f;
                                                                                              if (((0 | (Zk = q[(Zk + cl) >> 2])) < 0) | ((0 | Wk) <= (0 | Zk))) break f;
                                                                                              if (((_k = (_k + Zk) | 0) >>> 31) | ((0 | Wk) < (0 | _k))) break f;
                                                                                          }
                                                                                          if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                      }
                                                                                      for (Vk = 0, Wk = q[(Yk + 228) >> 2]; ; ) {
                                                                                          if (1 < t[(Wk + (Vk << 2)) >> 2]) break f;
                                                                                          if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                      }
                                                                                      for (Vk = 0, Wk = q[(Yk + 232) >> 2]; ; ) {
                                                                                          if (1 < t[(Wk + (Vk << 2)) >> 2]) break f;
                                                                                          if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                      }
                                                                                      for (Wk = q[Tk >> 2], Vk = 0, _k = q[(Yk + 236) >> 2]; ; ) {
                                                                                          if (((0 | (Zk = q[(_k + (Vk << 2)) >> 2])) < -1) | ((0 | Wk) <= (0 | Zk))) break f;
                                                                                          if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                      }
                                                                                      for (Wk = q[(Tk + 4) >> 2], Vk = 0, _k = q[(Yk + 240) >> 2]; ; ) {
                                                                                          if (((0 | (Zk = q[(_k + (Vk << 2)) >> 2])) < -1) | ((0 | Wk) <= (0 | Zk))) break f;
                                                                                          if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                      }
                                                                                      for (Wk = q[(Yk + 244) >> 2], Vk = 0; ; ) {
                                                                                          if (q[(Wk + (Vk << 2)) >> 2] < 0) break f;
                                                                                          if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                      }
                                                                                      break n;
                                                                                  }
                                                                              }
                                                                              (_k = (Tk + 68) | 0), (ll = (Tk + 36) | 0);
                                                                              break m;
                                                                          }
                                                                          for (Wk = q[(Yk + 252) >> 2], Vk = 0; ; ) {
                                                                              if (q[(Wk + (Vk << 2)) >> 2] < 0) break f;
                                                                              if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                          for (_k = q[(Tk + 60) >> 2], Vk = 0, Zk = q[(Yk + 256) >> 2]; ; ) {
                                                                              if (((bl = (q[((bl = Vk << 2) + Zk) >> 2] + (q[(Wk + bl) >> 2] << 1)) | 0) >>> 31) | ((0 | _k) < (0 | bl))) break f;
                                                                              if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                          for (Wk = q[(Tk + 64) >> 2], bl = q[(Yk + 264) >> 2], cl = q[(Yk + 260) >> 2], Vk = 0; ; ) {
                                                                              if ((_k = q[((Zk = Vk << 2) + bl) >> 2])) {
                                                                                  if (((0 | _k) < 0) | ((0 | Wk) < (0 | _k))) break f;
                                                                                  if (((0 | (Zk = q[(Zk + cl) >> 2])) < 0) | ((0 | Wk) <= (0 | Zk))) break f;
                                                                                  if (((_k = (_k + Zk) | 0) >>> 31) | ((0 | Wk) < (0 | _k))) break f;
                                                                              }
                                                                              if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                          for (_k = (Tk + 68) | 0, Wk = q[(Tk + 68) >> 2], cl = q[(Yk + 272) >> 2], dl = q[(Yk + 268) >> 2], Vk = 0; ; ) {
                                                                              if ((Zk = q[((bl = Vk << 2) + cl) >> 2])) {
                                                                                  if (((0 | Zk) < 0) | ((0 | Wk) < (0 | Zk))) break f;
                                                                                  if (((0 | (bl = q[(bl + dl) >> 2])) < 0) | ((0 | Wk) <= (0 | bl))) break f;
                                                                                  if (((Zk = (Zk + bl) | 0) >>> 31) | ((0 | Wk) < (0 | Zk))) break f;
                                                                              }
                                                                              if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      }
                                                                      p: {
                                                                          q: {
                                                                              if (!(((a = 0) | (Vk = q[(Tk + 20) >> 2])) <= 0)) {
                                                                                  for (Wk = q[(Yk + 280) >> 2]; ; ) {
                                                                                      if (63 < ia((Wk + (a << 6)) | 0) >>> 0) break f;
                                                                                      if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                                  if (!(((a = 0) | (Vk = q[(Tk + 20) >> 2])) <= 0)) {
                                                                                      for (Wk = q[(Yk + 296) >> 2]; ; ) {
                                                                                          if (1 < t[(Wk + (a << 2)) >> 2]) break f;
                                                                                          if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      for (Wk = q[(Yk + 300) >> 2], a = 0; ; ) {
                                                                                          if (q[(Wk + (a << 2)) >> 2] < 0) break f;
                                                                                          if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      break q;
                                                                                  }
                                                                              }
                                                                              a = q[(Tk + 52) >> 2];
                                                                              break p;
                                                                          }
                                                                          for (a = q[(Tk + 52) >> 2], cl = q[(Yk + 312) >> 2], dl = q[(Yk + 308) >> 2], Zk = 0; ; ) {
                                                                              if ((Wk = q[((bl = Zk << 2) + cl) >> 2])) {
                                                                                  if (((0 | Wk) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                  if (((0 | (bl = q[(bl + dl) >> 2])) < 0) | ((0 | a) <= (0 | bl))) break f;
                                                                                  if (((Wk = (Wk + bl) | 0) >>> 31) | ((0 | a) < (0 | Wk))) break f;
                                                                              }
                                                                              if ((0 | Vk) == (0 | (Zk = (Zk + 1) | 0))) break;
                                                                          }
                                                                      }
                                                                      if (((Wk = q[(Tk + 40) >> 2]), (Vk = 0) < (0 | (Zk = q[(Tk + 8) >> 2]))))
                                                                          for (bl = q[(Yk + 344) >> 2], cl = q[(Yk + 156) >> 2]; ; ) {
                                                                              if (((dl = (q[((dl = Vk << 2) + bl) >> 2] + (q[(cl + dl) >> 2] << 1)) | 0) >>> 31) | ((0 | Wk) < (0 | dl))) break f;
                                                                              if ((0 | Zk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      if ((Vk = 0) < (0 | (Zk = q[$k >> 2]))) {
                                                                          for (bl = q[(Yk + 376) >> 2]; ; ) {
                                                                              if (1 < t[(bl + (Vk << 2)) >> 2]) break f;
                                                                              if ((0 | Zk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                          for (Vk = 0, bl = q[(Yk + 380) >> 2]; ; ) {
                                                                              if (1 < t[(bl + (Vk << 2)) >> 2]) break f;
                                                                              if ((0 | Zk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      }
                                                                      if ((Vk = 0) < (0 | (Zk = q[Xk >> 2])))
                                                                          for (bl = q[(Yk + 400) >> 2], cl = q[(Yk + 252) >> 2]; ; ) {
                                                                              if (((dl = (q[((dl = Vk << 2) + bl) >> 2] + (q[(cl + dl) >> 2] << 1)) | 0) >>> 31) | ((0 | Wk) < (0 | dl))) break f;
                                                                              if ((0 | Zk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      if ((Vk = 0) < (0 | (Wk = q[(Tk + 44) >> 2])))
                                                                          for (bl = q[(Yk + 424) >> 2]; ; ) {
                                                                              if (((0 | (cl = q[(bl + (Vk << 2)) >> 2])) < 0) | ((0 | a) <= (0 | cl))) break f;
                                                                              if ((0 | Wk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      if (1 <= (0 | (cl = q[Uk >> 2])))
                                                                          for (Vk = 0, dl = q[(Yk + 432) >> 2], al = q[(Yk + 428) >> 2]; ; ) {
                                                                              if ((Uk = q[((bl = Vk << 2) + dl) >> 2])) {
                                                                                  if (((0 | Uk) < 0) | ((0 | Wk) < (0 | Uk))) break f;
                                                                                  if (((0 | (bl = q[(al + bl) >> 2])) < 0) | ((0 | Wk) <= (0 | bl))) break f;
                                                                                  if (((Uk = (Uk + bl) | 0) >>> 31) | ((0 | Wk) < (0 | Uk))) break f;
                                                                              }
                                                                              if ((0 | cl) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      if (1 <= (0 | a))
                                                                          for (Wk = q[(Tk + 56) >> 2], Vk = 0, cl = q[(Yk + 420) >> 2], dl = q[(Yk + 416) >> 2]; ; ) {
                                                                              if ((Uk = q[((bl = Vk << 2) + cl) >> 2])) {
                                                                                  if (((0 | Uk) < 0) | ((0 | Wk) < (0 | Uk))) break f;
                                                                                  if (((0 | (bl = q[(bl + dl) >> 2])) < 0) | ((0 | Wk) <= (0 | bl))) break f;
                                                                                  if (((Uk = (Uk + bl) | 0) >>> 31) | ((0 | Wk) < (0 | Uk))) break f;
                                                                              }
                                                                              if ((0 | (Vk = (Vk + 1) | 0)) == (0 | a)) break;
                                                                          }
                                                                      if ((a = 0) < (0 | (Vk = q[_k >> 2])))
                                                                          for (Wk = q[(Yk + 564) >> 2]; ; ) {
                                                                              if (((0 | (_k = q[(Wk + (a << 2)) >> 2])) < -1) | ((0 | Zk) <= (0 | _k))) break f;
                                                                              if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                          }
                                                                      if (((a = q[(Tk + 76) >> 2]), 1 <= (0 | (_k = q[(Tk + 72) >> 2]))))
                                                                          for (Vk = 0, Zk = q[(Yk + 572) >> 2], bl = q[(Yk + 568) >> 2]; ; ) {
                                                                              if ((Wk = q[((Uk = Vk << 2) + Zk) >> 2])) {
                                                                                  if (((0 | Wk) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                  if (((0 | (Uk = q[(Uk + bl) >> 2])) < 0) | ((0 | a) <= (0 | Uk))) break f;
                                                                                  if (((Wk = (Uk + Wk) | 0) >>> 31) | ((0 | a) < (0 | Wk))) break f;
                                                                              }
                                                                              if ((0 | _k) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      if ((Vk = 0) < (0 | a)) {
                                                                          for (Wk = q[(Yk + 588) >> 2]; ; ) {
                                                                              if (1 < t[(Wk + (Vk << 2)) >> 2]) break f;
                                                                              if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                          for (Uk = q[(Yk + 592) >> 2], Vk = 0; ; ) {
                                                                              if (1 < (bl = q[((Zk = Vk << 2) + Wk) >> 2]) >>> 0) break f;
                                                                              if (((0 | (Zk = q[(Uk + Zk) >> 2])) < 0) | ((0 | Zk) >= q[((bl - 1) | 0 ? Xk : Tk) >> 2])) break f;
                                                                              if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                          for (Vk = 0, Wk = q[(Yk + 596) >> 2]; ; ) {
                                                                              if (((0 | (Uk = q[(Wk + (Vk << 2)) >> 2])) < -1) | ((0 | _k) <= (0 | Uk))) break f;
                                                                              if ((0 | a) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                          }
                                                                      }
                                                                      s: {
                                                                          if (!(((a = 0) | (Zk = q[(Tk + 80) >> 2])) <= 0)) {
                                                                              for (Vk = q[(Yk + 604) >> 2]; ; ) {
                                                                                  if (63 < ia((Vk + (a << 6)) | 0) >>> 0) break f;
                                                                                  if ((0 | Zk) == (0 | (a = (a + 1) | 0))) break;
                                                                              }
                                                                              if (!(((a = 0) | (Zk = q[(Tk + 80) >> 2])) <= 0)) {
                                                                                  for (Vk = q[(Tk + 48) >> 2], Wk = q[(Yk + 608) >> 2]; ; ) {
                                                                                      if (((0 | (_k = q[(Wk + (a << 2)) >> 2])) < 0) | ((0 | Vk) <= (0 | _k))) break f;
                                                                                      if ((0 | Zk) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                                  for (cl = q[(Tk + 88) >> 2], _k = q[(Yk + 616) >> 2], Uk = q[(Yk + 612) >> 2], a = 0; ; ) {
                                                                                      if ((Vk = q[((Wk = a << 2) + _k) >> 2])) {
                                                                                          if (((0 | Vk) < 0) | ((0 | cl) < (0 | Vk))) break f;
                                                                                          if (((0 | (Wk = q[(Uk + Wk) >> 2])) < 0) | ((0 | cl) <= (0 | Wk))) break f;
                                                                                          if (((Vk = (Vk + Wk) | 0) >>> 31) | ((0 | cl) < (0 | Vk))) break f;
                                                                                      }
                                                                                      if ((0 | Zk) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                                  for (Xk = q[Xk >> 2], _k = q[(Yk + 620) >> 2], a = 0; ; ) {
                                                                                      if (((0 | (Vk = q[(_k + (a << 2)) >> 2])) < 0) | ((0 | Xk) <= (0 | Vk))) break f;
                                                                                      if ((0 | Zk) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                                  for (Uk = q[(Yk + 624) >> 2], a = 0; ; ) {
                                                                                      if (((0 | (Vk = q[(Uk + (a << 2)) >> 2])) < 0) | ((0 | Xk) <= (0 | Vk))) break f;
                                                                                      if ((0 | Zk) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                                  for (Vk = q[(Tk + 84) >> 2], bl = q[(Yk + 632) >> 2], dl = q[(Yk + 628) >> 2], a = 0; ; ) {
                                                                                      if ((Wk = q[((al = a << 2) + bl) >> 2])) {
                                                                                          if (((0 | Wk) < 0) | ((0 | Vk) < (0 | Wk))) break f;
                                                                                          if (((0 | (al = q[(al + dl) >> 2])) < 0) | ((0 | Vk) <= (0 | al))) break f;
                                                                                          if (((Wk = (Wk + al) | 0) >>> 31) | ((0 | Vk) < (0 | Wk))) break f;
                                                                                      }
                                                                                      if ((0 | Zk) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                                  for (fl = q[(Yk + 640) >> 2], Vk = q[(Yk + 252) >> 2], Wk = 0; ; ) {
                                                                                      if (0 < (0 | (hl = q[((a = Wk << 2) + bl) >> 2])))
                                                                                          for (al = (fl + (q[(a + dl) >> 2] << 1)) | 0, ml = q[(Vk + (q[(a + Uk) >> 2] << 2)) >> 2], il = q[(Vk + (q[(a + _k) >> 2] << 2)) >> 2], a = 0; ; ) {
                                                                                              if (((0 | ml) <= s[(al + (2 | (kl = a << 1))) >> 1]) | ((0 | il) <= s[(al + kl) >> 1])) break f;
                                                                                              if (!((0 | (a = (a + 2) | 0)) < (0 | hl))) break;
                                                                                          }
                                                                                      if ((0 | Zk) == (0 | (Wk = (Wk + 1) | 0))) break;
                                                                                  }
                                                                                  break s;
                                                                              }
                                                                          }
                                                                          (Xk = q[(Tk + 16) >> 2]), (cl = q[(Tk + 88) >> 2]);
                                                                      }
                                                                      if (!((255 & gl) >>> 0 < 2)) {
                                                                          if ((a = 0) < (0 | (bl = q[(Tk + 8) >> 2])))
                                                                              for (Vk = q[(Yk + 168) >> 2]; ; ) {
                                                                                  if (1 < t[(Vk + (a << 2)) >> 2]) break f;
                                                                                  if ((0 | bl) == (0 | (a = (a + 1) | 0))) break;
                                                                              }
                                                                          if (!((255 & gl) >>> 0 < 4)) {
                                                                              if (((_k = q[(Tk + 56) >> 2]), 1 <= (0 | (dl = q[(Tk + 20) >> 2]))))
                                                                                  for (Uk = q[(Yk + 332) >> 2], al = q[(Yk + 328) >> 2], a = 0; ; ) {
                                                                                      if ((Vk = q[((Wk = a << 2) + Uk) >> 2])) {
                                                                                          if (((0 | Vk) < 0) | ((0 | _k) < (0 | Vk))) break f;
                                                                                          if (((0 | (Wk = q[(Wk + al) >> 2])) < 0) | ((0 | _k) <= (0 | Wk))) break f;
                                                                                          if (((Vk = (Vk + Wk) | 0) >>> 31) | ((0 | _k) < (0 | Vk))) break f;
                                                                                      }
                                                                                      if ((0 | dl) == (0 | (a = (a + 1) | 0))) break;
                                                                                  }
                                                                              if ((0 | (a = q[(Tk + 92) >> 2])) != q[(Tk + 96) >> 2]) break f;
                                                                              if (1 <= (0 | bl))
                                                                                  for (al = q[(Yk + 152) >> 2], Vk = 0, fl = q[(Yk + 148) >> 2]; ; ) {
                                                                                      if ((Wk = q[((Uk = Vk << 2) + fl) >> 2])) {
                                                                                          if (((0 | Wk) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                          if (((0 | (Uk = q[(Uk + al) >> 2])) < 0) | ((0 | a) <= (0 | Uk))) break f;
                                                                                          if (((Wk = (Uk + Wk) | 0) >>> 31) | ((0 | a) < (0 | Wk))) break f;
                                                                                      }
                                                                                      if ((0 | bl) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                  }
                                                                              if (1 <= (0 | (ml = q[(Tk + 12) >> 2])))
                                                                                  for (al = q[(Yk + 184) >> 2], Vk = 0, fl = q[(Yk + 180) >> 2]; ; ) {
                                                                                      if ((Wk = q[((Uk = Vk << 2) + fl) >> 2])) {
                                                                                          if (((0 | Wk) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                          if (((0 | (Uk = q[(Uk + al) >> 2])) < 0) | ((0 | a) <= (0 | Uk))) break f;
                                                                                          if (((Wk = (Uk + Wk) | 0) >>> 31) | ((0 | a) < (0 | Wk))) break f;
                                                                                      }
                                                                                      if ((0 | ml) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                  }
                                                                              if (1 <= (0 | Xk))
                                                                                  for (al = q[(Yk + 224) >> 2], Vk = 0, fl = q[(Yk + 220) >> 2]; ; ) {
                                                                                      if ((Wk = q[((Uk = Vk << 2) + fl) >> 2])) {
                                                                                          if (((0 | Wk) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                          if (((0 | (Uk = q[(Uk + al) >> 2])) < 0) | ((0 | a) <= (0 | Uk))) break f;
                                                                                          if (((Wk = (Uk + Wk) | 0) >>> 31) | ((0 | a) < (0 | Wk))) break f;
                                                                                      }
                                                                                      if ((0 | Xk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                  }
                                                                              if ((Vk = 0) < (0 | dl)) {
                                                                                  for (Wk = q[(Yk + 304) >> 2]; ; ) {
                                                                                      if (1 < t[(Wk + (Vk << 2)) >> 2]) break f;
                                                                                      if ((0 | dl) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                  }
                                                                                  for (Wk = q[(Tk + 100) >> 2], fl = q[(Yk + 320) >> 2], hl = q[(Yk + 316) >> 2], Vk = 0; ; ) {
                                                                                      if ((Uk = q[((al = Vk << 2) + fl) >> 2])) {
                                                                                          if (((0 | Uk) < 0) | ((0 | Wk) < (0 | Uk))) break f;
                                                                                          if (((0 | (al = q[(al + hl) >> 2])) < 0) | ((0 | Wk) <= (0 | al))) break f;
                                                                                          if (((Uk = (Uk + al) | 0) >>> 31) | ((0 | Wk) < (0 | Uk))) break f;
                                                                                      }
                                                                                      if ((0 | dl) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                  }
                                                                              } else Wk = q[(Tk + 100) >> 2];
                                                                              if (1 <= (0 | Wk)) {
                                                                                  for (al = q[(Yk + 440) >> 2], Vk = 0, hl = q[(Yk + 436) >> 2]; ; ) {
                                                                                      if ((Uk = q[((fl = Vk << 2) + al) >> 2])) {
                                                                                          if (((0 | Uk) < 0) | ((0 | _k) < (0 | Uk))) break f;
                                                                                          if (((0 | (fl = q[(fl + hl) >> 2])) < 0) | ((0 | _k) <= (0 | fl))) break f;
                                                                                          if (((Uk = (Uk + fl) | 0) >>> 31) | ((0 | _k) < (0 | Uk))) break f;
                                                                                      }
                                                                                      if ((0 | Wk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                  }
                                                                                  for (_k = q[(Yk + 444) >> 2], Vk = 0; ; ) {
                                                                                      if (((0 | (fl = q[((Uk = Vk << 2) + _k) >> 2])) < 0) | ((0 | fl) >= q[(Uk + al) >> 2])) break f;
                                                                                      if ((0 | Wk) == (0 | (Vk = (Vk + 1) | 0))) break;
                                                                                  }
                                                                              }
                                                                              if ((_k = 0) < (0 | (Vk = q[(Tk + 104) >> 2]))) {
                                                                                  for (Uk = q[(Yk + 448) >> 2]; ; ) {
                                                                                      if (((0 | (al = q[(Uk + (_k << 2)) >> 2])) < 0) | ((0 | Wk) <= (0 | al))) break f;
                                                                                      if ((0 | Vk) == (0 | (_k = (_k + 1) | 0))) break;
                                                                                  }
                                                                                  for (Uk = q[(Tk + 116) >> 2], fl = q[(Yk + 464) >> 2], hl = q[(Yk + 460) >> 2], Wk = 0; ; ) {
                                                                                      if ((_k = q[((al = Wk << 2) + fl) >> 2])) {
                                                                                          if (((0 | _k) < 0) | ((0 | Uk) < (0 | _k))) break f;
                                                                                          if (((0 | (al = q[(al + hl) >> 2])) < 0) | ((0 | Uk) <= (0 | al))) break f;
                                                                                          if (((_k = (_k + al) | 0) >>> 31) | ((0 | Uk) < (0 | _k))) break f;
                                                                                      }
                                                                                      if ((0 | Vk) == (0 | (Wk = (Wk + 1) | 0))) break;
                                                                                  }
                                                                              } else Uk = q[(Tk + 116) >> 2];
                                                                              if ((Wk = 0) < (0 | (al = q[(Tk + 108) >> 2]))) {
                                                                                  for (_k = q[(Yk + 480) >> 2]; ; ) {
                                                                                      if (((0 | (fl = q[(_k + (Wk << 2)) >> 2])) < 0) | ((0 | bl) <= (0 | fl))) break f;
                                                                                      if ((0 | al) == (0 | (Wk = (Wk + 1) | 0))) break;
                                                                                  }
                                                                                  for (fl = q[(Yk + 488) >> 2], il = q[(Yk + 484) >> 2], Wk = 0; ; ) {
                                                                                      if ((_k = q[((bl = Wk << 2) + fl) >> 2])) {
                                                                                          if (((0 | _k) < 0) | ((0 | Vk) < (0 | _k))) break f;
                                                                                          if (((0 | (bl = q[(bl + il) >> 2])) < 0) | ((0 | Vk) <= (0 | bl))) break f;
                                                                                          if (((_k = (_k + bl) | 0) >>> 31) | ((0 | Vk) < (0 | _k))) break f;
                                                                                      }
                                                                                      if ((0 | al) == (0 | (Wk = (Wk + 1) | 0))) break;
                                                                                  }
                                                                                  for (fl = q[jl >> 2], Wk = q[(Yk + 456) >> 2], bl = q[(Yk + 452) >> 2], _k = 0; ; ) {
                                                                                      if (((kl = q[(il + (_k << 2)) >> 2] << 2), (hl = q[(kl + Wk) >> 2]))) {
                                                                                          if (((0 | hl) < 0) | ((0 | fl) < (0 | hl))) break f;
                                                                                          if (((0 | (kl = q[(bl + kl) >> 2])) < 0) | ((0 | fl) <= (0 | kl))) break f;
                                                                                          if (((0 | (hl = (hl + kl) | 0)) < 0) | ((0 | fl) < (0 | hl))) break f;
                                                                                      }
                                                                                      if ((0 | al) == (0 | (_k = (_k + 1) | 0))) break;
                                                                                  }
                                                                              } else (Wk = q[(Yk + 456) >> 2]), (bl = q[(Yk + 452) >> 2]);
                                                                              if ((_k = 0) < (0 | (al = q[(Tk + 112) >> 2]))) {
                                                                                  for (fl = q[(Yk + 504) >> 2]; ; ) {
                                                                                      if (((0 | (hl = q[(fl + (_k << 2)) >> 2])) < 0) | ((0 | Xk) <= (0 | hl))) break f;
                                                                                      if ((0 | al) == (0 | (_k = (_k + 1) | 0))) break;
                                                                                  }
                                                                                  for (il = q[(Yk + 512) >> 2], hl = q[(Yk + 508) >> 2], Xk = 0; ; ) {
                                                                                      if ((_k = q[((fl = Xk << 2) + il) >> 2])) {
                                                                                          if (((0 | _k) < 0) | ((0 | Vk) < (0 | _k))) break f;
                                                                                          if (((0 | (fl = q[(fl + hl) >> 2])) < 0) | ((0 | Vk) <= (0 | fl))) break f;
                                                                                          if (((_k = (_k + fl) | 0) >>> 31) | ((0 | Vk) < (0 | _k))) break f;
                                                                                      }
                                                                                      if ((0 | al) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                  }
                                                                                  for (_k = q[ll >> 2], Xk = 0; ; ) {
                                                                                      if (((il = q[(hl + (Xk << 2)) >> 2] << 2), (fl = q[(il + Wk) >> 2]))) {
                                                                                          if (((0 | fl) < 0) | ((0 | _k) < (0 | fl))) break f;
                                                                                          if (((0 | (il = q[(bl + il) >> 2])) < 0) | ((0 | _k) <= (0 | il))) break f;
                                                                                          if (((0 | (fl = (fl + il) | 0)) < 0) | ((0 | _k) < (0 | fl))) break f;
                                                                                      }
                                                                                      if ((0 | al) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                  }
                                                                              }
                                                                              if (((_k = q[(Tk + 120) >> 2]), (Xk = 0) < (0 | Uk)))
                                                                                  for (al = q[(Yk + 528) >> 2]; ; ) {
                                                                                      if (((0 | (fl = q[(al + (Xk << 2)) >> 2])) < 0) | ((0 | _k) <= (0 | fl))) break f;
                                                                                      if ((0 | (Xk = (Xk + 1) | 0)) == (0 | Uk)) break;
                                                                                  }
                                                                              if ((Xk = 0) < (0 | _k)) {
                                                                                  for (Uk = q[(Yk + 532) >> 2]; ; ) {
                                                                                      if (((0 | (al = q[(Uk + (Xk << 2)) >> 2])) < -1) | ((0 | dl) <= (0 | al))) break f;
                                                                                      if ((0 | _k) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                  }
                                                                                  for (Uk = q[(Tk + 124) >> 2], fl = q[(Yk + 540) >> 2], hl = q[(Yk + 536) >> 2], Xk = 0; ; ) {
                                                                                      if ((dl = q[((al = Xk << 2) + fl) >> 2])) {
                                                                                          if (((0 | dl) < 0) | ((0 | Uk) < (0 | dl))) break f;
                                                                                          if (((0 | (al = q[(al + hl) >> 2])) < 0) | ((0 | Uk) <= (0 | al))) break f;
                                                                                          if (((dl = (al + dl) | 0) >>> 31) | ((0 | Uk) < (0 | dl))) break f;
                                                                                      }
                                                                                      if ((0 | _k) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                  }
                                                                              }
                                                                              if (!((255 & gl) >>> 0 < 5)) {
                                                                                  if ((Xk = 0) < (0 | (gl = q[jl >> 2]))) {
                                                                                      for (_k = q[(Yk + 348) >> 2]; ; ) {
                                                                                          if (((0 | (Uk = q[(_k + (Xk << 2)) >> 2])) < 0) | ((0 | a) < (0 | Uk))) break f;
                                                                                          if ((0 | gl) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                      }
                                                                                      for (_k = q[(Yk + 352) >> 2], Xk = 0; ; ) {
                                                                                          if (((0 | (Uk = q[(_k + (Xk << 2)) >> 2])) < 0) | ((0 | a) < (0 | Uk))) break f;
                                                                                          if ((0 | gl) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                      }
                                                                                  }
                                                                                  if ((gl = 0) < (0 | (Xk = q[$k >> 2]))) {
                                                                                      for (_k = q[(Yk + 384) >> 2]; ; ) {
                                                                                          if (((0 | (Uk = q[(_k + (gl << 2)) >> 2])) < 0) | ((0 | a) < (0 | Uk))) break f;
                                                                                          if ((0 | Xk) == (0 | (gl = (gl + 1) | 0))) break;
                                                                                      }
                                                                                      for (_k = q[(Yk + 388) >> 2], gl = 0; ; ) {
                                                                                          if (((0 | (Uk = q[(_k + (gl << 2)) >> 2])) < 0) | ((0 | a) < (0 | Uk))) break f;
                                                                                          if ((0 | Xk) == (0 | (gl = (gl + 1) | 0))) break;
                                                                                      }
                                                                                  }
                                                                                  if ((gl = 0) < (0 | (_k = q[ll >> 2]))) {
                                                                                      for (Uk = q[(Yk + 404) >> 2]; ; ) {
                                                                                          if (((0 | (dl = q[(Uk + (gl << 2)) >> 2])) < 0) | ((0 | a) < (0 | dl))) break f;
                                                                                          if ((0 | _k) == (0 | (gl = (gl + 1) | 0))) break;
                                                                                      }
                                                                                      for (Uk = q[(Yk + 408) >> 2], gl = 0; ; ) {
                                                                                          if (((0 | (dl = q[(Uk + (gl << 2)) >> 2])) < 0) | ((0 | a) < (0 | dl))) break f;
                                                                                          if ((0 | _k) == (0 | (gl = (gl + 1) | 0))) break;
                                                                                      }
                                                                                  }
                                                                                  if ((a = 0) < (0 | (gl = q[(Tk + 128) >> 2]))) {
                                                                                      for (_k = q[Tk >> 2], Uk = q[(Yk + 468) >> 2]; ; ) {
                                                                                          if (((0 | (dl = q[(Uk + (a << 2)) >> 2])) < 0) | ((0 | _k) <= (0 | dl))) break f;
                                                                                          if ((0 | gl) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      for (jl = q[(Yk + 476) >> 2], dl = q[(Yk + 472) >> 2], a = 0; ; ) {
                                                                                          if ((_k = q[((Uk = a << 2) + jl) >> 2])) {
                                                                                              if (((0 | _k) < 0) | ((0 | Vk) < (0 | _k))) break f;
                                                                                              if (((0 | (Uk = q[(Uk + dl) >> 2])) < 0) | ((0 | Vk) <= (0 | Uk))) break f;
                                                                                              if (((_k = (Uk + _k) | 0) >>> 31) | ((0 | Vk) < (0 | _k))) break f;
                                                                                          }
                                                                                          if ((0 | gl) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      for (_k = q[el >> 2], a = 0; ; ) {
                                                                                          if (((el = q[(dl + (a << 2)) >> 2] << 2), (Uk = q[(el + Wk) >> 2]))) {
                                                                                              if (((0 | Uk) < 0) | ((0 | _k) < (0 | Uk))) break f;
                                                                                              if (((0 | (el = q[(bl + el) >> 2])) < 0) | ((0 | _k) <= (0 | el))) break f;
                                                                                              if (((0 | (Uk = (Uk + el) | 0)) < 0) | ((0 | _k) < (0 | Uk))) break f;
                                                                                          }
                                                                                          if ((0 | gl) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                  }
                                                                                  if ((a = 0) < (0 | (gl = q[(Tk + 132) >> 2]))) {
                                                                                      for (_k = q[(Yk + 492) >> 2]; ; ) {
                                                                                          if (((0 | (Uk = q[(_k + (a << 2)) >> 2])) < 0) | ((0 | ml) <= (0 | Uk))) break f;
                                                                                          if ((0 | gl) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      for (el = q[(Yk + 500) >> 2], Uk = q[(Yk + 496) >> 2], a = 0; ; ) {
                                                                                          if ((_k = q[((dl = a << 2) + el) >> 2])) {
                                                                                              if (((0 | _k) < 0) | ((0 | Vk) < (0 | _k))) break f;
                                                                                              if (((0 | (dl = q[(Uk + dl) >> 2])) < 0) | ((0 | Vk) <= (0 | dl))) break f;
                                                                                              if (((_k = (_k + dl) | 0) >>> 31) | ((0 | Vk) < (0 | _k))) break f;
                                                                                          }
                                                                                          if ((0 | gl) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      for (a = 0; ; ) {
                                                                                          if (((dl = q[(Uk + (a << 2)) >> 2] << 2), (_k = q[(dl + Wk) >> 2]))) {
                                                                                              if (((0 | _k) < 0) | ((0 | Xk) < (0 | _k))) break f;
                                                                                              if (((0 | (dl = q[(bl + dl) >> 2])) < 0) | ((0 | Xk) <= (0 | dl))) break f;
                                                                                              if (((0 | (_k = (_k + dl) | 0)) < 0) | ((0 | Xk) < (0 | _k))) break f;
                                                                                          }
                                                                                          if ((0 | gl) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                  }
                                                                                  if (!(((a = 0) | (Tk = q[(Tk + 136) >> 2])) <= 0)) {
                                                                                      for (Xk = q[(Yk + 516) >> 2]; ; ) {
                                                                                          if (((0 | (gl = q[(Xk + (a << 2)) >> 2])) < 0) | ((0 | Zk) <= (0 | gl))) break f;
                                                                                          if ((0 | Tk) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      for (_k = q[(Yk + 524) >> 2], Xk = q[(Yk + 520) >> 2], a = 0; ; ) {
                                                                                          if ((Yk = q[((gl = a << 2) + _k) >> 2])) {
                                                                                              if (((0 | Yk) < 0) | ((0 | Vk) < (0 | Yk))) break f;
                                                                                              if (((0 | (gl = q[(Xk + gl) >> 2])) < 0) | ((0 | Vk) <= (0 | gl))) break f;
                                                                                              if (((Yk = (Yk + gl) | 0) >>> 31) | ((0 | Vk) < (0 | Yk))) break f;
                                                                                          }
                                                                                          if ((0 | Tk) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                      for (a = 0; ; ) {
                                                                                          if (((Yk = q[(Xk + (a << 2)) >> 2] << 2), (Vk = q[(Yk + Wk) >> 2]))) {
                                                                                              if (((0 | Vk) < 0) | ((0 | cl) < (0 | Vk))) break f;
                                                                                              if (((0 | (Yk = q[(Yk + bl) >> 2])) < 0) | ((0 | cl) <= (0 | Yk))) break f;
                                                                                              if (((0 | (Vk = (Vk + Yk) | 0)) < 0) | ((0 | cl) < (0 | Vk))) break f;
                                                                                          }
                                                                                          if ((0 | Tk) == (0 | (a = (a + 1) | 0))) break;
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      }
                                                                      return (L = nl), 1;
                                                                  }
                                                                  return Y(4, 1846, 0), (L = nl), 0;
                                                              }
                                                              (q[(Yk + 52) >> 2] = Vk), (q[(Yk + 48) >> 2] = 5), Y(4, 1640, (Yk + 48) | 0);
                                                          } else (q[(Yk + 32) >> 2] = Vk), Y(4, 1554, (Yk + 32) | 0);
                                                          return (L = nl), 0;
                                                      })(a, tj)
                                                    : ((q[(20 + uj) >> 2] = 1621), (q[(16 + uj) >> 2] = 2284), Y(4, 1294, (16 + uj) | 0), 0)
                                                : ((q[(4 + uj) >> 2] = 1444), (q[uj >> 2] = 2284), Y(4, 1294, uj), 0)),
                                            (L = (48 + uj) | 0),
                                            0 | a
                                        );
                                    },
                                    j: function (a) {
                                        q[1813] = a |= 0;
                                    },
                                    k: function (a, cj) {
                                        var dj;
                                        return (
                                            (cj |= 0),
                                            (L = dj = (L - 48) | 0),
                                            (a = (a |= 0)
                                                ? ((a + 63) & -64) != (0 | a)
                                                    ? ((q[(36 + dj) >> 2] = 1522), (q[(32 + dj) >> 2] = 2305), Y(4, 1294, (32 + dj) | 0), 0)
                                                    : ((cj + 63) & -64) == (0 | cj) && cj
                                                    ? (function (a) {
                                                          var Ok,
                                                              Rk,
                                                              Sk,
                                                              Rh,
                                                              Ik = 0,
                                                              Jk = 0,
                                                              Kk = 0,
                                                              Lk = 0,
                                                              Mk = 0,
                                                              Nk = 0,
                                                              Pk = 0,
                                                              Qk = 0;
                                                          (q[(24 + (L = Ok = (L - 32) | 0)) >> 2] = 0),
                                                              (q[(16 + Ok) >> 2] = 5),
                                                              (q[(20 + Ok) >> 2] = 1),
                                                              Ka((16 + (L = Rh = (L - 272) | 0)) | 0, 2227, (q[(12 + Rh) >> 2] = (16 + Ok) | 0)),
                                                              (function (a) {
                                                                  var Dc;
                                                                  (q[(L = Dc = (L - 16) | 0) >> 2] = a),
                                                                      (function (a, Gl) {
                                                                          var Hl;
                                                                          (q[(12 + (L = Hl = (L - 16) | 0)) >> 2] = Gl), Ia(a, 1432, Gl, 0, 0), (L = (16 + Hl) | 0);
                                                                      })(q[978], Dc),
                                                                      (L = (16 + Dc) | 0);
                                                              })((16 + Rh) | 0),
                                                              (L = (272 + Rh) | 0);
                                                          a: {
                                                              if (sa(a)) Y(4, 1932, 0);
                                                              else {
                                                                  if (!(6 <= (Kk = r[(a + 4) | 0]) >>> 0)) {
                                                                      if (
                                                                          (1 != (0 | !r[(a + 5) | 0]) ? (da((a + 4) | 0, 1), X((a - -64) | 0, 4, 160), na(a, (a + 704) | (o[(a + 5) | 0] = 0)), ya(a)) : na(a, (a + 704) | 0),
                                                                          r[7256] || ((q[1815] = 6), (o[7256] = 1), (q[1816] = 7), (q[1817] = 8), (q[1818] = 9)),
                                                                          (Jk = q[(a + 704) >> 2]),
                                                                          1 <= (0 | (Kk = q[(Jk + 16) >> 2])))
                                                                      ) {
                                                                          for (Qk = ((Lk = q[(a + 912) >> 2]) + (Kk << 2)) | 0, Mk = q[(a + 908) >> 2]; ; ) {
                                                                              Pk = (q[(a + 1204) >> 2] + (q[Mk >> 2] << 2)) | 0;
                                                                              d: if (!(((Jk = 0) | (Ik = ((Kk = q[Lk >> 2]) + -1) | 0)) < 1))
                                                                                  e: for (;;) {
                                                                                      for (;;) {
                                                                                          if (q[(Nk = (Pk + (Jk << 2)) | 0) >> 2] <= -1) {
                                                                                              if (
                                                                                                  ((function (a, Tk, ol) {
                                                                                                      var pl = 0,
                                                                                                          ql = 0;
                                                                                                      a: if ((0 | a) != (0 | Tk)) {
                                                                                                          if (!(a >>> 0 < (Tk + ol) >>> 0 && Tk >>> 0 < (ql = (a + ol) | 0) >>> 0)) return $(a, Tk, ol);
                                                                                                          if (((pl = 3 & (a ^ Tk)), a >>> 0 < Tk >>> 0)) {
                                                                                                              if (!pl) {
                                                                                                                  if (3 & a)
                                                                                                                      for (;;) {
                                                                                                                          if (!ol) break a;
                                                                                                                          if (((o[0 | a] = r[0 | Tk]), (Tk = (Tk + 1) | 0), (ol = (ol + -1) | 0), !(3 & (a = (a + 1) | 0)))) break;
                                                                                                                      }
                                                                                                                  if (!(ol >>> 0 <= 3)) {
                                                                                                                      for (pl = ol; (q[a >> 2] = q[Tk >> 2]), (Tk = (Tk + 4) | 0), (a = (a + 4) | 0), 3 < (pl = (pl + -4) | 0) >>> 0; );
                                                                                                                      ol &= 3;
                                                                                                                  }
                                                                                                              }
                                                                                                              if (ol) for (; (o[0 | a] = r[0 | Tk]), (a = (a + 1) | 0), (Tk = (Tk + 1) | 0), (ol = (ol + -1) | 0); );
                                                                                                          } else {
                                                                                                              if (!pl) {
                                                                                                                  if (3 & ql)
                                                                                                                      for (;;) {
                                                                                                                          if (!ol) break a;
                                                                                                                          if (((o[0 | (pl = ((ol = (ol + -1) | 0) + a) | 0)] = r[(Tk + ol) | 0]), !(3 & pl))) break;
                                                                                                                      }
                                                                                                                  if (!(ol >>> 0 <= 3)) for (; (q[((ol = (ol + -4) | 0) + a) >> 2] = q[(Tk + ol) >> 2]), 3 < ol >>> 0; );
                                                                                                              }
                                                                                                              if (ol) for (; (o[((ol = (ol + -1) | 0) + a) | 0] = r[(Tk + ol) | 0]), ol; );
                                                                                                          }
                                                                                                      }
                                                                                                  })(Nk, (Nk + 4) | 0, ((-1 ^ Jk) + Kk) << 2),
                                                                                                  (0 | Jk) < (0 | (Ik = ((Kk = Ik) + -1) | 0)))
                                                                                              )
                                                                                                  continue e;
                                                                                              break d;
                                                                                          }
                                                                                          if (!((0 | (Jk = (Jk + 1) | 0)) < (0 | Ik))) break;
                                                                                      }
                                                                                      break;
                                                                                  }
                                                                              if (((Jk = Lk), 0 < (0 | Kk) && (Kk = q[(Pk + (Ik << 2)) >> 2] < 0 ? Ik : Kk), (q[Jk >> 2] = Kk), (Mk = (Mk + 4) | 0), !((Lk = (Lk + 4) | 0) >>> 0 < Qk >>> 0)))
                                                                                  break;
                                                                          }
                                                                          Jk = q[(a + 704) >> 2];
                                                                      }
                                                                      if (1 <= q[Jk >> 2])
                                                                          for (Ik = 0; (q[(q[(a + 712) >> 2] + (Ik << 2)) >> 2] = q[(a + 716) >> 2] + (Ik << 6)), (Jk = q[(a + 704) >> 2]), (0 | (Ik = (Ik + 1) | 0)) < q[Jk >> 2]; );
                                                                      if (1 <= q[(Jk + 4) >> 2])
                                                                          for (Ik = 0; (q[(q[(a + 744) >> 2] + (Ik << 2)) >> 2] = q[(a + 748) >> 2] + (Ik << 6)), (Jk = q[(a + 704) >> 2]), (0 | (Ik = (Ik + 1) | 0)) < q[(Jk + 4) >> 2]; );
                                                                      if (1 <= q[(Jk + 16) >> 2])
                                                                          for (
                                                                              Ik = 0;
                                                                              (q[((Kk = Ik << 2) + q[(a + 832) >> 2]) >> 2] = q[(a + 848) >> 2] + (Ik << 6)),
                                                                                  (q[(Kk + q[(a + 836) >> 2]) >> 2] = q[(a + 1196) >> 2] + (q[(Kk + q[(a + 896) >> 2]) >> 2] << 2)),
                                                                                  (q[(Kk + q[(a + 840) >> 2]) >> 2] = q[(a + 1200) >> 2] + (q[(Kk + q[(a + 900) >> 2]) >> 2] << 1)),
                                                                                  (q[(Kk + q[(a + 844) >> 2]) >> 2] = q[(a + 1204) >> 2] + (q[(Kk + q[(a + 908) >> 2]) >> 2] << 2)),
                                                                                  (Jk = q[(a + 704) >> 2]),
                                                                                  (0 | (Ik = (Ik + 1) | 0)) < q[(Jk + 16) >> 2];

                                                                          );
                                                                      if (1 <= q[(Jk + 20) >> 2])
                                                                          for (Ik = 0; (q[(q[(a + 916) >> 2] + (Ik << 2)) >> 2] = q[(a + 920) >> 2] + (Ik << 6)), (Jk = q[(a + 704) >> 2]), (0 | (Ik = (Ik + 1) | 0)) < q[(Jk + 20) >> 2]; );
                                                                      if (1 <= q[(Jk + 80) >> 2])
                                                                          for (Ik = 0; (q[(q[(a + 1240) >> 2] + (Ik << 2)) >> 2] = q[(a + 1244) >> 2] + (Ik << 6)), (Jk = q[(a + 704) >> 2]), (0 | (Ik = (Ik + 1) | 0)) < q[(Jk + 80) >> 2]; );
                                                                      if (1 & o[(q[(a + 708) >> 2] + 20) | 0]) break a;
                                                                      if ((0 | (Lk = q[(Jk + 16) >> 2])) < 1) break a;
                                                                      for (Ik = q[(a + 904) >> 2], Pk = q[(a + 900) >> 2], Nk = q[(a + 1200) >> 2], Mk = 0; ; ) {
                                                                          if (0 < (0 | (Qk = (q[((Kk = Mk << 2) + Ik) >> 2] + -1) | 0)))
                                                                              for (
                                                                                  Rk = (Nk + (q[(Kk + Pk) >> 2] << 1)) | 0, Jk = 0;
                                                                                  (Sk = s[(Kk = (Rk + (Jk << 1)) | 0) >> 1]), (p[Kk >> 1] = s[(Kk + 4) >> 1]), (p[(Kk + 4) >> 1] = Sk), (0 | (Jk = (Jk + 3) | 0)) < (0 | Qk);

                                                                              );
                                                                          if ((0 | Lk) == (0 | (Mk = (Mk + 1) | 0))) break;
                                                                      }
                                                                      for (Kk = q[(a + 892) >> 2], Mk = q[(a + 896) >> 2], Pk = q[(a + 1196) >> 2], Ik = 0; ; ) {
                                                                          if (1 <= (0 | (Nk = q[((Jk = Ik << 2) + Kk) >> 2])))
                                                                              for (
                                                                                  Nk = ((Jk = (Pk + (q[(Jk + Mk) >> 2] << 2)) | 0) + (Nk << 3)) | 0, Jk = (Jk + 4) | 0;
                                                                                  (u[Jk >> 2] = x(1) - u[Jk >> 2]), (Jk = (Jk + 8) | 0) >>> 0 < Nk >>> 0;

                                                                              );
                                                                          if ((0 | Lk) == (0 | (Ik = (Ik + 1) | 0))) break;
                                                                      }
                                                                      break a;
                                                                  }
                                                                  (q[(4 + Ok) >> 2] = Kk), (q[Ok >> 2] = 5), Y(4, 2023, Ok);
                                                              }
                                                              a = 0;
                                                          }
                                                          return (L = (32 + Ok) | 0), a;
                                                      })(a)
                                                    : ((q[(20 + dj) >> 2] = 1621), (q[(16 + dj) >> 2] = 2305), Y(4, 1294, (16 + dj) | 0), 0)
                                                : ((q[(4 + dj) >> 2] = 1444), (q[dj >> 2] = 2305), Y(4, 1294, dj), 0)),
                                            (L = (48 + dj) | 0),
                                            0 | a
                                        );
                                    },
                                    l: function (a, cj, dj, ej) {
                                        var fj;
                                        (cj |= 0),
                                            (dj |= 0),
                                            (ej |= 0),
                                            (L = fj = (L + -64) | 0),
                                            (a |= 0)
                                                ? cj
                                                    ? dj
                                                        ? ej
                                                            ? ((a = q[(q[a >> 2] + 708) >> 2]),
                                                              (q[cj >> 2] = q[(a + 12) >> 2]),
                                                              (q[(cj + 4) >> 2] = q[(a + 16) >> 2]),
                                                              (q[dj >> 2] = q[(a + 4) >> 2]),
                                                              (q[(dj + 4) >> 2] = q[(a + 8) >> 2]),
                                                              (q[ej >> 2] = q[a >> 2]))
                                                            : ((q[(52 + fj) >> 2] = 1995), (q[(48 + fj) >> 2] = 2325), Y(4, 1294, (48 + fj) | 0))
                                                        : ((q[(36 + fj) >> 2] = 1903), (q[(32 + fj) >> 2] = 2325), Y(4, 1294, (32 + fj) | 0))
                                                    : ((q[(20 + fj) >> 2] = 1819), (q[(16 + fj) >> 2] = 2325), Y(4, 1294, (16 + fj) | 0))
                                                : ((q[(4 + fj) >> 2] = 1740), (q[fj >> 2] = 2325), Y(4, 1294, fj)),
                                            (L = (64 + fj) | 0);
                                    },
                                    m: xa,
                                    n: wa,
                                    o: function (a) {
                                        var bj;
                                        (L = bj = (L - 16) | 0), (a |= 0) ? ua(a) : ((q[(4 + bj) >> 2] = 1740), (q[bj >> 2] = 2387), Y(4, 1294, bj)), (L = (16 + bj) | 0);
                                    },
                                    p: function (a) {
                                        var aj;
                                        return (L = aj = (L - 16) | 0), (a = (a |= 0) ? q[(a + 540) >> 2] : ((q[(4 + aj) >> 2] = 1740), (q[aj >> 2] = 2402), Y(4, 1294, aj), -1)), (L = (16 + aj) | 0), 0 | a;
                                    },
                                    q: function (a) {
                                        var $i;
                                        return (L = $i = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 916) >> 2] : ((q[(4 + $i) >> 2] = 1740), (q[$i >> 2] = 2423), Y(4, 1294, $i), 0)), (L = (16 + $i) | 0), 0 | a;
                                    },
                                    r: function (a) {
                                        var _i;
                                        return (L = _i = (L - 16) | 0), (a = (a |= 0) ? q[(a + 548) >> 2] : ((q[(4 + _i) >> 2] = 1740), (q[_i >> 2] = 2442), Y(4, 1294, _i), 0)), (L = (16 + _i) | 0), 0 | a;
                                    },
                                    s: function (a) {
                                        var Zi;
                                        return (L = Zi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 928) >> 2] : ((q[(4 + Zi) >> 2] = 1740), (q[Zi >> 2] = 2463), Y(4, 1294, Zi), 0)), (L = (16 + Zi) | 0), 0 | a;
                                    },
                                    t: function (a) {
                                        var Yi;
                                        return (L = Yi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 924) >> 2] : ((q[(4 + Yi) >> 2] = 1740), (q[Yi >> 2] = 2492), Y(4, 1294, Yi), 0)), (L = (16 + Yi) | 0), 0 | a;
                                    },
                                    u: function (a) {
                                        var Xi;
                                        return (L = Xi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 932) >> 2] : ((q[(4 + Xi) >> 2] = 1740), (q[Xi >> 2] = 2521), Y(4, 1294, Xi), 0)), (L = (16 + Xi) | 0), 0 | a;
                                    },
                                    v: function (a) {
                                        var Wi;
                                        return (L = Wi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 552) >> 2] : ((q[(4 + Wi) >> 2] = 1740), (q[Wi >> 2] = 2550), Y(4, 1294, Wi), 0)), (L = (16 + Wi) | 0), 0 | a;
                                    },
                                    w: function (a) {
                                        var Vi;
                                        return (L = Vi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 936) >> 2] : ((q[(4 + Vi) >> 2] = 1740), (q[Vi >> 2] = 2572), Y(4, 1294, Vi), 0)), (L = (16 + Vi) | 0), 0 | a;
                                    },
                                    x: function (a) {
                                        var Ui;
                                        return (L = Ui = (L - 16) | 0), (a = (a |= 0) ? q[(a + 4) >> 2] : ((q[(4 + Ui) >> 2] = 1740), (q[Ui >> 2] = 2595), Y(4, 1294, Ui), -1)), (L = (16 + Ui) | 0), 0 | a;
                                    },
                                    y: function (a) {
                                        var Ti;
                                        return (L = Ti = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 712) >> 2] : ((q[(4 + Ti) >> 2] = 1740), (q[Ti >> 2] = 2611), Y(4, 1294, Ti), 0)), (L = (16 + Ti) | 0), 0 | a;
                                    },
                                    z: function (a) {
                                        var Si;
                                        return (L = Si = (L - 16) | 0), (a = (a |= 0) ? q[(a + 52) >> 2] : ((q[(4 + Si) >> 2] = 1740), (q[Si >> 2] = 2625), Y(4, 1294, Si), 0)), (L = (16 + Si) | 0), 0 | a;
                                    },
                                    A: function (a) {
                                        var Ri;
                                        return (L = Ri = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 740) >> 2] : ((q[(4 + Ri) >> 2] = 1740), (q[Ri >> 2] = 2645), Y(4, 1294, Ri), 0)), (L = (16 + Ri) | 0), 0 | a;
                                    },
                                    B: function (a) {
                                        var Qi;
                                        return (L = Qi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 332) >> 2] : ((q[(4 + Qi) >> 2] = 1740), (q[Qi >> 2] = 2673), Y(4, 1294, Qi), -1)), (L = (16 + Qi) | 0), 0 | a;
                                    },
                                    C: function (a) {
                                        var Pi;
                                        return (L = Pi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 832) >> 2] : ((q[(4 + Pi) >> 2] = 1740), (q[Pi >> 2] = 2693), Y(4, 1294, Pi), 0)), (L = (16 + Pi) | 0), 0 | a;
                                    },
                                    D: function (a) {
                                        var Oi;
                                        return (L = Oi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 888) >> 2] : ((q[(4 + Oi) >> 2] = 1740), (q[Oi >> 2] = 2711), Y(4, 1294, Oi), 0)), (L = (16 + Oi) | 0), 0 | a;
                                    },
                                    E: function (a) {
                                        var Ni;
                                        return (L = Ni = (L - 16) | 0), (a = (a |= 0) ? q[(a + 432) >> 2] : ((q[(4 + Ni) >> 2] = 1740), (q[Ni >> 2] = 2739), Y(4, 1294, Ni), 0)), (L = (16 + Ni) | 0), 0 | a;
                                    },
                                    F: function (a) {
                                        var Mi;
                                        return (L = Mi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 884) >> 2] : ((q[(4 + Mi) >> 2] = 1740), (q[Mi >> 2] = 2766), Y(4, 1294, Mi), 0)), (L = (16 + Mi) | 0), 0 | a;
                                    },
                                    G: function (a) {
                                        var Li;
                                        return (L = Li = (L - 16) | 0), (a = (a |= 0) ? q[(a + 440) >> 2] : ((q[(4 + Li) >> 2] = 1740), (q[Li >> 2] = 2795), Y(4, 1294, Li), 0)), (L = (16 + Li) | 0), 0 | a;
                                    },
                                    H: function (a) {
                                        var Ki;
                                        return (L = Ki = (L - 16) | 0), (a = (a |= 0) ? q[(a + 436) >> 2] : ((q[(4 + Ki) >> 2] = 1740), (q[Ki >> 2] = 2820), Y(4, 1294, Ki), 0)), (L = (16 + Ki) | 0), 0 | a;
                                    },
                                    I: function (a) {
                                        var Ji;
                                        return (L = Ji = (L - 16) | 0), (a = (a |= 0) ? q[(a + 448) >> 2] : ((q[(4 + Ji) >> 2] = 1740), (q[Ji >> 2] = 2847), Y(4, 1294, Ji), 0)), (L = (16 + Ji) | 0), 0 | a;
                                    },
                                    J: function (a) {
                                        var Ii;
                                        return (L = Ii = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 912) >> 2] : ((q[(4 + Ii) >> 2] = 1740), (q[Ii >> 2] = 2871), Y(4, 1294, Ii), 0)), (L = (16 + Ii) | 0), 0 | a;
                                    },
                                    K: function (a) {
                                        var Hi;
                                        return (L = Hi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 844) >> 2] : ((q[(4 + Hi) >> 2] = 1740), (q[Hi >> 2] = 2896), Y(4, 1294, Hi), 0)), (L = (16 + Hi) | 0), 0 | a;
                                    },
                                    L: function (a) {
                                        var Gi;
                                        return (L = Gi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 892) >> 2] : ((q[(4 + Gi) >> 2] = 1740), (q[Gi >> 2] = 2916), Y(4, 1294, Gi), 0)), (L = (16 + Gi) | 0), 0 | a;
                                    },
                                    M: function (a) {
                                        var qi;
                                        return (L = qi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 444) >> 2] : ((q[(4 + qi) >> 2] = 1740), (q[qi >> 2] = 2943), Y(4, 1294, qi), 0)), (L = (16 + qi) | 0), 0 | a;
                                    },
                                    N: function (a) {
                                        var pi;
                                        return (L = pi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 836) >> 2] : ((q[(4 + pi) >> 2] = 1740), (q[pi >> 2] = 2973), Y(4, 1294, pi), 0)), (L = (16 + pi) | 0), 0 | a;
                                    },
                                    O: function (a) {
                                        var oi;
                                        return (L = oi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 904) >> 2] : ((q[(4 + oi) >> 2] = 1740), (q[oi >> 2] = 2997), Y(4, 1294, oi), 0)), (L = (16 + oi) | 0), 0 | a;
                                    },
                                    P: function (a) {
                                        var ni;
                                        return (L = ni = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 840) >> 2] : ((q[(4 + ni) >> 2] = 1740), (q[ni >> 2] = 3023), Y(4, 1294, ni), 0)), (L = (16 + ni) | 0), 0 | a;
                                    },
                                    Q: function (a) {
                                        var mi;
                                        return (L = mi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 452) >> 2] : ((q[(4 + mi) >> 2] = 1740), (q[mi >> 2] = 3045), Y(4, 1294, mi), 0)), (L = (16 + mi) | 0), 0 | a;
                                    },
                                    R: function (a) {
                                        var li;
                                        return (L = li = (L - 16) | 0), (a = (a |= 0) ? q[(a + 456) >> 2] : ((q[(4 + li) >> 2] = 1740), (q[li >> 2] = 3074), Y(4, 1294, li), 0)), (L = (16 + li) | 0), 0 | a;
                                    },
                                    S: function (a) {
                                        var ki;
                                        return (L = ki = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 876) >> 2] : ((q[(4 + ki) >> 2] = 1740), (q[ki >> 2] = 3101), Y(4, 1294, ki), 0)), (L = (16 + ki) | 0), 0 | a;
                                    },
                                    T: function (a) {
                                        var ji;
                                        (L = ji = (L - 16) | 0), (a |= 0) ? (q[(a + 428) >> 2] = 1) : ((q[(4 + ji) >> 2] = 1740), (q[ji >> 2] = 3133), Y(4, 1294, ji)), (L = (16 + ji) | 0);
                                    },
                                    U: function (a) {
                                        var ii;
                                        return (L = ii = (L - 16) | 0), (a = (a |= 0) ? q[(a + 640) >> 2] : ((q[(4 + ii) >> 2] = 1740), (q[ii >> 2] = 3162), Y(4, 1294, ii), 0)), (L = (16 + ii) | 0), 0 | a;
                                    },
                                    V: function (a) {
                                        var hi;
                                        return (L = hi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 636) >> 2] : ((q[(4 + hi) >> 2] = 1740), (q[hi >> 2] = 3187), Y(4, 1294, hi), 0)), (L = (16 + hi) | 0), 0 | a;
                                    },
                                    W: function (a) {
                                        var Cc;
                                        return oa((12 + (L = Cc = (L - 16) | 0)) | 0, 64, (a |= 0)), (L = (16 + Cc) | 0), q[(12 + Cc) >> 2];
                                    },
                                    X: function (a) {
                                        var Ln,
                                            Jn,
                                            Kn = 0;
                                        return (L = Jn = (L - 16) | 0), !(a |= 0) || oa((12 + Jn) | 0, 16, (Ln = xa(a))) || (Kn = wa(a, q[(12 + Jn) >> 2], Ln)) || (pa(q[(12 + Jn) >> 2]), (Kn = 0)), (L = (16 + Jn) | 0), 0 | Kn;
                                    },
                                    Y: function (a) {
                                        return 0 | qa((a |= 0));
                                    },
                                    Z: function (a) {
                                        pa((a |= 0));
                                    },
                                    _: function (a) {
                                        var rn;
                                        oa((12 + (L = rn = (L - 16) | 0)) | 0, 64, (a |= 0)), pa(q[(12 + rn) >> 2]), (L = (16 + rn) | 0);
                                    },
                                    $: function () {
                                        return 0 | L;
                                    },
                                    aa: function (a) {
                                        return 0 | (L = (L - (0 | a)) & -16);
                                    },
                                    ba: function (a) {
                                        L = 0 | a;
                                    },
                                    ca: function (a) {
                                        return (
                                            0 |
                                            ((a = 0 | (a |= 0)),
                                            (P = 0 | N()) < (a = (P + (a |= 0)) | 0) &&
                                                a < 65536 &&
                                                ((a = new ArrayBuffer(w(a, 65536))),
                                                (S = new global.Int8Array(a)).set(o),
                                                (o = S),
                                                (o = new global.Int8Array(a)),
                                                (p = new global.Int16Array(a)),
                                                (q = new global.Int32Array(a)),
                                                (r = new global.Uint8Array(a)),
                                                (s = new global.Uint16Array(a)),
                                                (t = new global.Uint32Array(a)),
                                                (u = new global.Float32Array(a)),
                                                (v = new global.Float64Array(a)),
                                                (buffer = a),
                                                (m.buffer = a)),
                                            P)
                                        );
                                        var S, P;
                                    },
                                    da: function (a, Tk) {
                                        n[(a |= 0)]((Tk |= 0));
                                    },
                                }
                            );
                            function X(a, b, c) {
                                var e,
                                    f,
                                    d = 0;
                                if (c)
                                    for (;;) {
                                        if (((c = (c + -1) | 0), a >>> 0 < (d = ((e = (a + b) | 0) - 1) | 0) >>> 0)) for (; (f = r[0 | a]), (o[0 | a] = r[0 | d]), (o[0 | d] = f), (a = (a + 1) | 0) >>> 0 < (d = (d + -1) | 0) >>> 0; );
                                        if (((a = e), !c)) break;
                                    }
                            }
                            function Y(a, b, c) {
                                var g;
                                (L = g = (L - 272) | 0), t[1812] > a >>> 0 || ((a = q[1813]) && (Ka((16 + g) | 0, b, (q[(12 + g) >> 2] = c)), n[a]((16 + g) | 0))), (L = (272 + g) | 0);
                            }
                            function Z(a, b, c) {
                                32 & r[0 | a] ||
                                    !(function (a, Gl, Pm) {
                                        var Qm = 0,
                                            Rm = 0,
                                            Sm = 0;
                                        a: {
                                            if (!(Qm = q[(Pm + 16) >> 2])) {
                                                if (
                                                    (function (a) {
                                                        var Pm;
                                                        return (
                                                            (Pm = r[(a + 74) | 0]),
                                                            (o[(a + 74) | 0] = (Pm + -1) | Pm),
                                                            8 & (Pm = q[a >> 2])
                                                                ? ((q[a >> 2] = 32 | Pm), 1)
                                                                : ((q[(a + 4) >> 2] = 0), (q[(a + 8) >> 2] = 0), (Pm = q[(a + 44) >> 2]), (q[(a + 28) >> 2] = Pm), (q[(a + 20) >> 2] = Pm), (q[(a + 16) >> 2] = Pm + q[(a + 48) >> 2]), 0)
                                                        );
                                                    })(Pm)
                                                )
                                                    break a;
                                                Qm = q[(Pm + 16) >> 2];
                                            }
                                            if ((Qm - (Sm = q[(Pm + 20) >> 2])) >>> 0 < Gl >>> 0) return n[q[(Pm + 36) >> 2]](Pm, a, Gl);
                                            b: if (!(o[(Pm + 75) | 0] < 0)) {
                                                for (Qm = Gl; ; ) {
                                                    if (!(Rm = Qm)) break b;
                                                    if (10 == r[((Qm = (Rm + -1) | 0) + a) | 0]) break;
                                                }
                                                if (n[q[(Pm + 36) >> 2]](Pm, a, Rm) >>> 0 < Rm >>> 0) break a;
                                                (Gl = (Gl - Rm) | 0), (a = (a + Rm) | 0), (Sm = q[(Pm + 20) >> 2]);
                                            }
                                            $(Sm, a, Gl), (q[(Pm + 20) >> 2] = q[(Pm + 20) >> 2] + Gl);
                                        }
                                    })(b, c, a);
                            }
                            function _(a, b, c, h, i) {
                                var k, l, j;
                                if (((L = j = (L - 256) | 0), !((73728 & i) | ((0 | c) <= (0 | h))))) {
                                    if ((ca(j, b, (k = (i = (c - h) | 0) >>> 0 < 256) ? i : 256), (b = a), (l = j), !k)) {
                                        for (c = (c - h) | 0; Z(a, j, 256), 255 < (i = (i + -256) | 0) >>> 0; );
                                        i = 255 & c;
                                    }
                                    Z(b, l, i);
                                }
                                L = (256 + j) | 0;
                            }
                            function $(a, b, c) {
                                var h,
                                    i = 0;
                                if (8192 <= c >>> 0) I(0 | a, 0 | b, 0 | c);
                                else {
                                    if (((h = (a + c) | 0), 3 & (a ^ b)))
                                        if (h >>> 0 < 4) c = a;
                                        else if ((i = (h - 4) | 0) >>> 0 < a >>> 0) c = a;
                                        else
                                            for (
                                                c = a;
                                                (o[0 | c] = r[0 | b]), (o[(c + 1) | 0] = r[(b + 1) | 0]), (o[(c + 2) | 0] = r[(b + 2) | 0]), (o[(c + 3) | 0] = r[(b + 3) | 0]), (b = (b + 4) | 0), (c = (c + 4) | 0) >>> 0 <= i >>> 0;

                                            );
                                    else {
                                        b: if ((0 | c) < 1) c = a;
                                        else if (3 & a)
                                            for (c = a; ; ) {
                                                if (((o[0 | c] = r[0 | b]), (b = (b + 1) | 0), h >>> 0 <= (c = (c + 1) | 0) >>> 0)) break b;
                                                if (!(3 & c)) break;
                                            }
                                        else c = a;
                                        if (!((a = -4 & h) >>> 0 < 64 || (i = (a + -64) | 0) >>> 0 < c >>> 0))
                                            for (
                                                ;
                                                (q[c >> 2] = q[b >> 2]),
                                                    (q[(c + 4) >> 2] = q[(b + 4) >> 2]),
                                                    (q[(c + 8) >> 2] = q[(b + 8) >> 2]),
                                                    (q[(c + 12) >> 2] = q[(b + 12) >> 2]),
                                                    (q[(c + 16) >> 2] = q[(b + 16) >> 2]),
                                                    (q[(c + 20) >> 2] = q[(b + 20) >> 2]),
                                                    (q[(c + 24) >> 2] = q[(b + 24) >> 2]),
                                                    (q[(c + 28) >> 2] = q[(b + 28) >> 2]),
                                                    (q[(c + 32) >> 2] = q[(b + 32) >> 2]),
                                                    (q[(c + 36) >> 2] = q[(b + 36) >> 2]),
                                                    (q[(c + 40) >> 2] = q[(b + 40) >> 2]),
                                                    (q[(c + 44) >> 2] = q[(b + 44) >> 2]),
                                                    (q[(c + 48) >> 2] = q[(b + 48) >> 2]),
                                                    (q[(c + 52) >> 2] = q[(b + 52) >> 2]),
                                                    (q[(c + 56) >> 2] = q[(b + 56) >> 2]),
                                                    (q[(c + 60) >> 2] = q[(b + 60) >> 2]),
                                                    (b = (b - -64) | 0),
                                                    (c = (c - -64) | 0) >>> 0 <= i >>> 0;

                                            );
                                        if (!(a >>> 0 <= c >>> 0)) for (; (q[c >> 2] = q[b >> 2]), (b = (b + 4) | 0), (c = (c + 4) | 0) >>> 0 < a >>> 0; );
                                    }
                                    if (c >>> 0 < h >>> 0) for (; (o[0 | c] = r[0 | b]), (b = (b + 1) | 0), (0 | h) != (0 | (c = (c + 1) | 0)); );
                                }
                            }
                            function aa(a) {
                                var b, c;
                                return x((b = a * a) * b * (c = b * a) * (2718311493989822e-21 * b - 0.00019839334836096632) + (c * (0.008333329385889463 * b - 0.16666666641626524) + a));
                            }
                            function ba(a) {
                                var m;
                                return x(-0.499999997251031 * (a *= a) + 1 + 0.04166662332373906 * (m = a * a) + a * m * (2439044879627741e-20 * a - 0.001388676377460993));
                            }
                            function ca(a, n, p) {
                                var r, s, t, u;
                                if (
                                    p &&
                                    ((o[((r = (a + p) | 0) - 1) | 0] = n),
                                    (o[0 | a] = n),
                                    !(
                                        p >>> 0 < 3 ||
                                        ((o[(r - 2) | 0] = n), (o[(a + 1) | 0] = n), (o[(r - 3) | 0] = n), (o[(a + 2) | 0] = n), p >>> 0 < 7) ||
                                        ((o[(r - 4) | 0] = n), (o[(a + 3) | 0] = n), p >>> 0 < 9) ||
                                        ((s = ((r = (0 - a) & 3) + a) | 0), (n = w(255 & n, 16843009)), (q[s >> 2] = n), (q[((r = ((p = (p - r) & -4) + s) | 0) - 4) >> 2] = n), p >>> 0 < 9) ||
                                        ((q[(8 + s) >> 2] = n), (q[(4 + s) >> 2] = n), (q[(r - 8) >> 2] = n), (q[(r - 12) >> 2] = n), p >>> 0 < 25) ||
                                        ((q[(24 + s) >> 2] = n),
                                        (q[(20 + s) >> 2] = n),
                                        (q[(16 + s) >> 2] = n),
                                        (q[(12 + s) >> 2] = n),
                                        (q[(r - 16) >> 2] = n),
                                        (q[(r - 20) >> 2] = n),
                                        (q[(r - 24) >> 2] = n),
                                        (q[(r - 28) >> 2] = n),
                                        (p = (p - (u = (4 & s) | 24)) | 0) >>> 0 < 32)
                                    ))
                                )
                                    for (
                                        t = r = n, n = (s + u) | 0;
                                        (q[(n + 24) >> 2] = t),
                                            (q[(n + 28) >> 2] = r),
                                            (q[(n + 16) >> 2] = t),
                                            (q[(n + 20) >> 2] = r),
                                            (q[(n + 8) >> 2] = t),
                                            (q[(n + 12) >> 2] = r),
                                            (q[n >> 2] = t),
                                            (q[(n + 4) >> 2] = r),
                                            (n = (n + 32) | 0),
                                            31 < (p = (p + -32) | 0) >>> 0;

                                    );
                                return a;
                            }
                            function da(a, n) {
                                var p;
                                if (a >>> 0 < (n = (((a + n) | 0) - 1) | 0) >>> 0) for (; (p = r[0 | a]), (o[0 | a] = r[0 | n]), (o[0 | n] = p), (a = (a + 1) | 0) >>> 0 < (n = (n + -1) | 0) >>> 0; );
                            }
                            function ea(a) {
                                var n,
                                    o = N();
                                return (a = ((n = q[2224]) + a) | 0) >>> 0 <= (o << 16) >>> 0 || J(0 | a) ? ((q[2224] = a), n) : ((q[2094] = 48), -1);
                            }
                            function fa(a, v, y, z, B, C, D) {
                                var H,
                                    I,
                                    K,
                                    N,
                                    Q,
                                    R,
                                    S,
                                    O,
                                    P,
                                    J,
                                    E = 0,
                                    F = x(0),
                                    G = x(0),
                                    M = x(0);
                                if ((x(0), x(0), x(0), x(0), (L = J = (L - 16) | 0), 1 <= (0 | a)))
                                    for (R = (w(a, 12) + v) | 0; ; ) {
                                        if (1 <= (0 | (I = q[(v + 4) >> 2])))
                                            for (
                                                S = ((a = q[(v + 8) >> 2]) + w(I, 48)) | 0, I = ((H = q[v >> 2] << 4) + D) | 0, K = ((8 | H) + D) | 0, H = ((4 | H) + D) | 0;
                                                (E = q[(a + 8) >> 2]) &&
                                                    ((O = (E + -1) | 0) >>> 0 <= 1
                                                        ? ((P = ((q[(a + 4) >> 2] << 2) + y) | 0),
                                                          (E = q[(P + (q[(a + 12) >> 2] << 2)) >> 2] << 2),
                                                          (F = u[(E + C) >> 2]),
                                                          (Q = u[(B + E) >> 2]),
                                                          (G = u[(z + E) >> 2]),
                                                          O - 1
                                                              ? ((M = G),
                                                                (G = u[(a + 20) >> 2]),
                                                                (u[I >> 2] = u[I >> 2] + x(u[(a + 44) >> 2] * x(M * G))),
                                                                (u[H >> 2] = u[H >> 2] + x(x(Q * G) * u[(a + 44) >> 2])),
                                                                (u[K >> 2] = u[K >> 2] + x(x(F * G) * u[(a + 44) >> 2])))
                                                              : ((E = q[((q[(a + 16) >> 2] << 2) + P) >> 2] << 2),
                                                                (O = u[(E + C) >> 2]),
                                                                (P = u[(B + E) >> 2]),
                                                                (M = G),
                                                                (G = u[(a + 20) >> 2]),
                                                                (N = u[(a + 24) >> 2]),
                                                                (u[I >> 2] = u[I >> 2] + x(u[(a + 44) >> 2] * x(x(M * G) + x(u[(z + E) >> 2] * N)))),
                                                                (u[H >> 2] = u[H >> 2] + x(x(x(Q * G) + x(P * N)) * u[(a + 44) >> 2])),
                                                                (u[K >> 2] = u[K >> 2] + x(x(x(F * G) + x(O * N)) * u[(a + 44) >> 2]))))
                                                        : ((q[J >> 2] = E), Y(4, 1024, J))),
                                                    (a = (a + 48) | 0) >>> 0 < S >>> 0;

                                            );
                                        if (
                                            ((a = ((q[v >> 2] << 4) + D) | 0),
                                            (F = u[a >> 2]),
                                            (u[a >> 2] = F < x(0) ? x(0) : x(A(F, x(1)))),
                                            (F = u[(a + 4) >> 2]),
                                            (u[(a + 4) >> 2] = F < x(0) ? x(0) : x(A(F, x(1)))),
                                            (F = u[(a + 8) >> 2]),
                                            (u[(a + 8) >> 2] = F < x(0) ? x(0) : x(A(F, x(1)))),
                                            !((v = (v + 12) | 0) >>> 0 < R >>> 0))
                                        )
                                            break;
                                    }
                                L = (16 + J) | 0;
                            }
                            function ga(a, q, v) {
                                var y,
                                    z,
                                    x = 0;
                                if (((1 == (0 | q)) & (a >>> 0 < 0)) | (q >>> 0 < 1)) x = a;
                                else for (; (y = cd((x = dd(a, q, 10)), (z = M), 10)), (o[0 | (v = (v + -1) | 0)] = (a - y) | 48), (y = ((9 == (0 | q)) & (4294967295 < a >>> 0)) | (9 < q >>> 0)), (a = x), (q = z), y; );
                                if (x) for (; (o[0 | (v = (v + -1) | 0)] = (x - w((a = ((x >>> 0) / 10) | 0), 10)) | 48), (q = 9 < x >>> 0), (x = a), q; );
                                return v;
                            }
                            function ha(a) {
                                return (a + -48) >>> 0 < 10;
                            }
                            function ia(a) {
                                var q;
                                return (q = La(a, 64)) ? (q - a) | 0 : 64;
                            }
                            function ja(a, v) {
                                var w = 0;
                                return (
                                    1024 <= (0 | v)
                                        ? ((a *= 898846567431158e293), (v = (0 | (w = (v + -1023) | 0)) < 1024 ? w : ((a *= 898846567431158e293), (((0 | v) < 3069 ? v : 3069) + -2046) | 0)))
                                        : -1023 < (0 | v) || ((a *= 22250738585072014e-324), (v = -1023 < (0 | (w = (v + 1022) | 0)) ? w : ((a *= 22250738585072014e-324), ((-3066 < (0 | v) ? v : -3066) + 2044) | 0))),
                                    f(0, 0),
                                    f(1, (v + 1023) << 20),
                                    a * +g()
                                );
                            }
                            function ka(a, v) {
                                var A = 0,
                                    C = a,
                                    B = v >>> 0 <= 31 ? ((A = q[(a + 4) >> 2]), q[a >> 2]) : ((A = q[a >> 2]), (q[(a + 4) >> 2] = A), (v = (v + -32) | (q[a >> 2] = 0)), 0);
                                (q[C >> 2] = B << v), (q[(a + 4) >> 2] = (A << v) | (B >>> (32 - v)));
                            }
                            function la(a, v, D, V, W) {
                                var X,
                                    Y = 0,
                                    Z = 0,
                                    _ = 0;
                                (L = X = (L - 240) | 0), (Y = q[v >> 2]), (q[(232 + X) >> 2] = Y), (v = q[(v + 4) >> 2]), (q[X >> 2] = a), (Z = 1);
                                a: {
                                    b: {
                                        c: {
                                            if (((q[(236 + X) >> 2] = v) || 1 != (0 | Y)) && ((Y = (a - q[((D << 2) + W) >> 2]) | 0), !((0 | n[5](Y, a)) < 1))) {
                                                for (_ = !V; ; ) {
                                                    e: {
                                                        if (((v = Y), !(!_ | ((0 | D) < 2)))) {
                                                            if (((V = q[((((D << 2) + W) | 0) - 8) >> 2]), -1 < (0 | n[5]((Y = (a + -4) | 0), v)))) break e;
                                                            if (-1 < (0 | n[5]((Y - V) | 0, v))) break e;
                                                        }
                                                        if (((q[((Z << 2) + X) >> 2] = v), (Z = (Z + 1) | 0), ma((232 + X) | 0, (a = Oa((232 + X) | 0))), (D = (a + D) | 0), !q[(236 + X) >> 2] && 1 == q[(232 + X) >> 2])) break b;
                                                        if (((_ = 1), (Y = ((a = v) - q[((D << 2) + W) >> 2]) | (V = 0)), 0 < (0 | n[5](Y, q[X >> 2])))) continue;
                                                        break c;
                                                    }
                                                    break;
                                                }
                                                v = a;
                                                break b;
                                            }
                                            v = a;
                                        }
                                        if (V) break a;
                                    }
                                    Na(X, Z), ta(v, D, W);
                                }
                                L = (240 + X) | 0;
                            }
                            function ma(a, v) {
                                var D = 0,
                                    V = a,
                                    L = v >>> 0 <= 31 ? ((D = q[a >> 2]), q[(a + 4) >> 2]) : ((D = q[(a + 4) >> 2]), (q[(a + 4) >> 2] = 0), (q[a >> 2] = D), (v = (v + -32) | 0), 0);
                                (q[(V + 4) >> 2] = L >>> v), (q[a >> 2] = (L << (32 - v)) | (D >>> v));
                            }
                            function na(a, v) {
                                var W = r[(a + 4) | 0];
                                (q[v >> 2] = q[(a + 64) >> 2] + a),
                                    (q[(v + 4) >> 2] = q[(a + 68) >> 2] + a),
                                    (q[(v + 8) >> 2] = q[(a + 72) >> 2] + a),
                                    (q[(v + 12) >> 2] = q[(a + 76) >> 2] + a),
                                    (q[(v + 16) >> 2] = q[(a + 80) >> 2] + a),
                                    (q[(v + 20) >> 2] = q[(a + 84) >> 2] + a),
                                    (q[(v + 24) >> 2] = q[(a + 88) >> 2] + a),
                                    (q[(v + 28) >> 2] = q[(a + 92) >> 2] + a),
                                    (q[(v + 32) >> 2] = q[(a + 96) >> 2] + a),
                                    (q[(v + 36) >> 2] = q[(a + 100) >> 2] + a),
                                    (q[(v + 40) >> 2] = q[(a + 104) >> 2] + a),
                                    (q[(v + 44) >> 2] = q[(a + 108) >> 2] + a),
                                    (q[(v + 48) >> 2] = q[(a + 112) >> 2] + a),
                                    (q[(v + 52) >> 2] = q[(a + 116) >> 2] + a),
                                    (q[(v + 56) >> 2] = q[(a + 120) >> 2] + a),
                                    (q[(v + 60) >> 2] = q[(a + 124) >> 2] + a),
                                    (q[(v - -64) >> 2] = q[(a + 128) >> 2] + a),
                                    (q[(v + 68) >> 2] = q[(a + 132) >> 2] + a),
                                    (q[(v + 72) >> 2] = q[(a + 136) >> 2] + a),
                                    (q[(v + 76) >> 2] = q[(a + 140) >> 2] + a),
                                    (q[(v + 80) >> 2] = q[(a + 144) >> 2] + a),
                                    (q[(v + 84) >> 2] = q[(a + 148) >> 2] + a),
                                    (q[(v + 92) >> 2] = q[(a + 152) >> 2] + a),
                                    (q[(v + 96) >> 2] = q[(a + 156) >> 2] + a),
                                    (q[(v + 100) >> 2] = q[(a + 160) >> 2] + a),
                                    (q[(v + 108) >> 2] = q[(a + 164) >> 2] + a),
                                    (q[(v + 112) >> 2] = q[(a + 168) >> 2] + a),
                                    (q[(v + 116) >> 2] = q[(a + 172) >> 2] + a),
                                    (q[(v + 124) >> 2] = q[(a + 176) >> 2] + a),
                                    (q[(v + 128) >> 2] = q[(a + 180) >> 2] + a),
                                    (q[(v + 132) >> 2] = q[(a + 184) >> 2] + a),
                                    (q[(v + 136) >> 2] = q[(a + 188) >> 2] + a),
                                    (q[(v + 140) >> 2] = q[(a + 192) >> 2] + a),
                                    (q[(v + 144) >> 2] = q[(a + 196) >> 2] + a),
                                    (q[(v + 148) >> 2] = q[(a + 200) >> 2] + a),
                                    (q[(v + 152) >> 2] = q[(a + 204) >> 2] + a),
                                    (q[(v + 156) >> 2] = q[(a + 208) >> 2] + a),
                                    (q[(v + 164) >> 2] = q[(a + 212) >> 2] + a),
                                    (q[(v + 168) >> 2] = q[(a + 216) >> 2] + a),
                                    (q[(v + 172) >> 2] = q[(a + 220) >> 2] + a),
                                    (q[(v + 176) >> 2] = q[(a + 224) >> 2] + a),
                                    (q[(v + 180) >> 2] = q[(a + 228) >> 2] + a),
                                    (q[(v + 184) >> 2] = q[(a + 232) >> 2] + a),
                                    (q[(v + 188) >> 2] = q[(a + 236) >> 2] + a),
                                    (q[(v + 192) >> 2] = q[(a + 240) >> 2] + a),
                                    (q[(v + 196) >> 2] = q[(a + 244) >> 2] + a),
                                    (q[(v + 200) >> 2] = q[(a + 248) >> 2] + a),
                                    (q[(v + 204) >> 2] = q[(a + 252) >> 2] + a),
                                    (q[(v + 208) >> 2] = q[(a + 256) >> 2] + a),
                                    (q[(v + 212) >> 2] = q[(a + 260) >> 2] + a),
                                    (q[(v + 216) >> 2] = q[(a + 264) >> 2] + a),
                                    (q[(v + 220) >> 2] = q[(a + 268) >> 2] + a),
                                    (q[(v + 224) >> 2] = q[(a + 272) >> 2] + a),
                                    (q[(v + 228) >> 2] = q[(a + 276) >> 2] + a),
                                    (q[(v + 232) >> 2] = q[(a + 280) >> 2] + a),
                                    (q[(v + 236) >> 2] = q[(a + 284) >> 2] + a),
                                    (q[(v + 244) >> 2] = q[(a + 288) >> 2] + a),
                                    (q[(v + 248) >> 2] = q[(a + 292) >> 2] + a),
                                    (q[(v + 272) >> 2] = q[(a + 296) >> 2] + a),
                                    (q[(v + 276) >> 2] = q[(a + 300) >> 2] + a),
                                    (q[(v + 280) >> 2] = q[(a + 304) >> 2] + a),
                                    (q[(v + 292) >> 2] = q[(a + 308) >> 2] + a),
                                    (q[(v + 296) >> 2] = q[(a + 312) >> 2] + a),
                                    (q[(v + 300) >> 2] = q[(a + 316) >> 2] + a),
                                    (q[(v + 304) >> 2] = q[(a + 320) >> 2] + a),
                                    (q[(v + 308) >> 2] = q[(a + 324) >> 2] + a),
                                    (q[(v + 312) >> 2] = q[(a + 328) >> 2] + a),
                                    (q[(v + 316) >> 2] = q[(a + 332) >> 2] + a),
                                    (q[(v + 328) >> 2] = q[(a + 336) >> 2] + a),
                                    (q[(v + 332) >> 2] = q[(a + 340) >> 2] + a),
                                    (q[(v + 336) >> 2] = q[(a + 344) >> 2] + a),
                                    (q[(v + 348) >> 2] = q[(a + 348) >> 2] + a),
                                    (q[(v + 360) >> 2] = q[(a + 352) >> 2] + a),
                                    (q[(v + 364) >> 2] = q[(a + 356) >> 2] + a),
                                    (q[(v + 368) >> 2] = q[(a + 360) >> 2] + a),
                                    (q[(v + 352) >> 2] = q[(a + 364) >> 2] + a),
                                    (q[(v + 356) >> 2] = q[(a + 368) >> 2] + a),
                                    (q[(v + 488) >> 2] = q[(a + 372) >> 2] + a),
                                    (q[(v + 492) >> 2] = q[(a + 376) >> 2] + a),
                                    (q[(v + 496) >> 2] = q[(a + 380) >> 2] + a),
                                    (q[(v + 500) >> 2] = q[(a + 384) >> 2] + a),
                                    (q[(v + 504) >> 2] = q[(a + 388) >> 2] + a),
                                    (q[(v + 508) >> 2] = q[(a + 392) >> 2] + a),
                                    (q[(v + 512) >> 2] = q[(a + 396) >> 2] + a),
                                    (q[(v + 516) >> 2] = q[(a + 400) >> 2] + a),
                                    (q[(v + 520) >> 2] = q[(a + 404) >> 2] + a),
                                    (q[(v + 524) >> 2] = q[(a + 408) >> 2] + a),
                                    (q[(v + 528) >> 2] = q[(a + 412) >> 2] + a),
                                    (q[(v + 532) >> 2] = q[(a + 416) >> 2] + a),
                                    (q[(v + 536) >> 2] = q[(a + 420) >> 2] + a),
                                    (q[(v + 540) >> 2] = q[(a + 424) >> 2] + a),
                                    (q[(v + 544) >> 2] = q[(a + 428) >> 2] + a),
                                    (q[(v + 548) >> 2] = q[(a + 432) >> 2] + a),
                                    (q[(v + 552) >> 2] = q[(a + 436) >> 2] + a),
                                    (q[(v + 556) >> 2] = q[(a + 440) >> 2] + a),
                                    (q[(v + 560) >> 2] = q[(a + 444) >> 2] + a),
                                    (q[(v + 564) >> 2] = q[(a + 448) >> 2] + a),
                                    (q[(v + 568) >> 2] = q[(a + 452) >> 2] + a),
                                    (q[(v + 572) >> 2] = q[(a + 456) >> 2] + a),
                                    (q[(v + 576) >> 2] = q[(a + 460) >> 2] + a),
                                    (q[(v + 580) >> 2] = q[(a + 464) >> 2] + a),
                                    W >>> 0 < 2 ||
                                        ((q[(v + 104) >> 2] = q[(a + 468) >> 2] + a), W >>> 0 < 4) ||
                                        ((q[(v + 260) >> 2] = q[(a + 472) >> 2] + a),
                                        (q[(v + 264) >> 2] = q[(a + 476) >> 2] + a),
                                        (q[(v + 268) >> 2] = q[(a + 480) >> 2] + a),
                                        (q[(v + 88) >> 2] = q[(a + 484) >> 2] + a),
                                        (q[(v + 120) >> 2] = q[(a + 488) >> 2] + a),
                                        (q[(v + 160) >> 2] = q[(a + 492) >> 2] + a),
                                        (q[(v + 584) >> 2] = q[(a + 496) >> 2] + a),
                                        (q[(v + 588) >> 2] = q[(a + 500) >> 2] + a),
                                        (q[(v + 592) >> 2] = q[(a + 504) >> 2] + a),
                                        (q[(v + 596) >> 2] = q[(a + 508) >> 2] + a),
                                        (q[(v + 600) >> 2] = q[(a + 512) >> 2] + a),
                                        (q[(v + 604) >> 2] = q[(a + 516) >> 2] + a),
                                        (q[(v + 240) >> 2] = q[(a + 520) >> 2] + a),
                                        (q[(v + 252) >> 2] = q[(a + 524) >> 2] + a),
                                        (q[(v + 256) >> 2] = q[(a + 528) >> 2] + a),
                                        (q[(v + 372) >> 2] = q[(a + 532) >> 2] + a),
                                        (q[(v + 376) >> 2] = q[(a + 536) >> 2] + a),
                                        (q[(v + 380) >> 2] = q[(a + 540) >> 2] + a),
                                        (q[(v + 384) >> 2] = q[(a + 544) >> 2] + a),
                                        (q[(v + 388) >> 2] = q[(a + 548) >> 2] + a),
                                        (q[(v + 392) >> 2] = q[(a + 552) >> 2] + a),
                                        (q[(v + 396) >> 2] = q[(a + 556) >> 2] + a),
                                        (q[(v + 400) >> 2] = q[(a + 560) >> 2] + a),
                                        (q[(v + 416) >> 2] = q[(a + 564) >> 2] + a),
                                        (q[(v + 420) >> 2] = q[(a + 568) >> 2] + a),
                                        (q[(v + 424) >> 2] = q[(a + 572) >> 2] + a),
                                        (q[(v + 440) >> 2] = q[(a + 576) >> 2] + a),
                                        (q[(v + 444) >> 2] = q[(a + 580) >> 2] + a),
                                        (q[(v + 448) >> 2] = q[(a + 584) >> 2] + a),
                                        (q[(v + 464) >> 2] = q[(a + 588) >> 2] + a),
                                        (q[(v + 468) >> 2] = q[(a + 592) >> 2] + a),
                                        (q[(v + 472) >> 2] = q[(a + 596) >> 2] + a),
                                        (q[(v + 476) >> 2] = q[(a + 600) >> 2] + a),
                                        (q[(v + 480) >> 2] = q[(a + 604) >> 2] + a),
                                        (q[(v + 484) >> 2] = q[(a + 608) >> 2] + a),
                                        4 != (0 | W) &&
                                            ((q[(v + 284) >> 2] = q[(a + 612) >> 2] + a),
                                            (q[(v + 288) >> 2] = q[(a + 616) >> 2] + a),
                                            (q[(v + 320) >> 2] = q[(a + 620) >> 2] + a),
                                            (q[(v + 324) >> 2] = q[(a + 624) >> 2] + a),
                                            (q[(v + 340) >> 2] = q[(a + 628) >> 2] + a),
                                            (q[(v + 344) >> 2] = q[(a + 632) >> 2] + a),
                                            (q[(v + 404) >> 2] = q[(a + 636) >> 2] + a),
                                            (q[(v + 408) >> 2] = q[(a + 640) >> 2] + a),
                                            (q[(v + 412) >> 2] = q[(a + 644) >> 2] + a),
                                            (q[(v + 428) >> 2] = q[(a + 648) >> 2] + a),
                                            (q[(v + 432) >> 2] = q[(a + 652) >> 2] + a),
                                            (q[(v + 436) >> 2] = q[(a + 656) >> 2] + a),
                                            (q[(v + 452) >> 2] = q[(a + 660) >> 2] + a),
                                            (q[(v + 456) >> 2] = q[(a + 664) >> 2] + a),
                                            (q[(v + 460) >> 2] = q[(a + 668) >> 2] + a)));
                            }
                            function oa(a, v, $) {
                                var aa = 0;
                                a: {
                                    if (8 == (0 | v)) v = qa($);
                                    else {
                                        if (
                                            ((aa = 28),
                                            (3 & v) |
                                                (1 !=
                                                    (0 |
                                                        (function (a) {
                                                            for (var ap = 0, bp = 0; (bp = ap), a; ) (a &= a - 1), (ap = (ap + 1) | 0);
                                                            return bp;
                                                        })(v >>> 2))))
                                        )
                                            break a;
                                        if (((aa = 48), (-64 - v) >>> 0 < $ >>> 0)) break a;
                                        v = (function (a, Tk) {
                                            var tl,
                                                ul,
                                                ol = 0,
                                                rl = 0,
                                                sl = 0;
                                            if (((rl = a >>> 0 > (ol = 16) ? a : 16) + -1) & rl) for (; (ol = (a = ol) << 1), a >>> 0 < rl >>> 0; );
                                            else a = rl;
                                            return (-64 - a) >>> 0 <= Tk >>> 0
                                                ? ((q[2094] = 48), 0)
                                                : (ol = qa((12 + (((rl = Tk >>> 0 < 11 ? 16 : (Tk + 11) & -8) + a) | 0)) | 0))
                                                ? ((Tk = (ol + -8) | 0),
                                                  ol & (a + -1)
                                                      ? ((sl = ((-8 & (ul = q[(tl = (ol + -4) | 0) >> 2])) - (ol = ((a = 15 < ((ol = (((((a + ol) | 0) - 1) & (0 - a)) - 8) | 0) - Tk) >>> 0 ? ol : (a + ol) | 0) - Tk) | 0)) | 0),
                                                        3 & ul
                                                            ? ((q[(a + 4) >> 2] = sl | (1 & q[(a + 4) >> 2]) | 2),
                                                              (q[(4 + (sl = (a + sl) | 0)) >> 2] = 1 | q[(4 + sl) >> 2]),
                                                              (q[tl >> 2] = ol | (1 & q[tl >> 2]) | 2),
                                                              (q[(a + 4) >> 2] = 1 | q[(a + 4) >> 2]),
                                                              za(Tk, ol))
                                                            : ((Tk = q[Tk >> 2]), (q[(a + 4) >> 2] = sl), (q[a >> 2] = Tk + ol)))
                                                      : (a = Tk),
                                                  3 & (Tk = q[(a + 4) >> 2]) &&
                                                      ((ol = -8 & Tk) >>> 0 <= (rl + 16) >>> 0 ||
                                                          ((q[(a + 4) >> 2] = rl | (1 & Tk) | 2), (q[((Tk = (a + rl) | 0) + 4) >> 2] = 3 | (rl = (ol - rl) | 0)), (q[(4 + (ol = (a + ol) | 0)) >> 2] = 1 | q[(ol + 4) >> 2]), za(Tk, rl))),
                                                  (a + 8) | 0)
                                                : 0;
                                        })(16 < v >>> 0 ? v : 16, $);
                                    }
                                    if (!v) return 1;
                                    (q[a >> 2] = v), (aa = 0);
                                }
                                return aa;
                            }
                            function pa(a) {
                                var da,
                                    v = 0,
                                    $ = 0,
                                    ba = 0,
                                    ca = 0,
                                    ea = 0,
                                    fa = 0,
                                    ha = 0;
                                a: if (a) {
                                    da = ((ba = (a + -8) | 0) + (a = -8 & ($ = q[(a + -4) >> 2]))) | 0;
                                    b: if (!(1 & $)) {
                                        if (!(3 & $)) break a;
                                        if ((ba = (ba - ($ = q[ba >> 2])) | 0) >>> 0 < t[2099]) break a;
                                        if (((a = (a + $) | 0), q[2100] != (0 | ba)))
                                            if ($ >>> 0 <= 255) (ca = q[(ba + 8) >> 2]), ($ >>>= 3), (0 | (v = q[(ba + 12) >> 2])) == (0 | ca) ? ((ha = q[2095] & fd($)), (q[2095] = ha)) : ((q[(ca + 12) >> 2] = v), (q[(v + 8) >> 2] = ca));
                                            else {
                                                if (((fa = q[(ba + 24) >> 2]), (0 | ba) != (0 | ($ = q[(ba + 12) >> 2])))) (v = q[(ba + 8) >> 2]), (q[(v + 12) >> 2] = $), (q[($ + 8) >> 2] = v);
                                                else if ((v = (v = q[(ca = (ba + 20) | 0) >> 2]) || q[(ca = (ba + 16) | 0) >> 2])) {
                                                    for (; (ea = ca), (v = q[(ca = (($ = v) + 20) | 0) >> 2]) || ((ca = ($ + 16) | 0), (v = q[($ + 16) >> 2])); );
                                                    q[ea >> 2] = 0;
                                                } else $ = 0;
                                                if (fa) {
                                                    ca = q[(ba + 28) >> 2];
                                                    e: {
                                                        if (q[(v = (8684 + (ca << 2)) | 0) >> 2] == (0 | ba)) {
                                                            if ((q[v >> 2] = $)) break e;
                                                            (ha = q[2096] & fd(ca)), (q[2096] = ha);
                                                            break b;
                                                        }
                                                        if (!(q[(fa + (q[(fa + 16) >> 2] == (0 | ba) ? 16 : 20)) >> 2] = $)) break b;
                                                    }
                                                    (q[($ + 24) >> 2] = fa), (v = q[(ba + 16) >> 2]) && ((q[($ + 16) >> 2] = v), (q[(v + 24) >> 2] = $)), (v = q[(ba + 20) >> 2]) && ((q[($ + 20) >> 2] = v), (q[(v + 24) >> 2] = $));
                                                }
                                            }
                                        else if (3 == (3 & ($ = q[(4 + da) >> 2]))) return (q[2097] = a), (q[(4 + da) >> 2] = -2 & $), (q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a);
                                    }
                                    if (!(da >>> 0 <= ba >>> 0) && 1 & ($ = q[(4 + da) >> 2])) {
                                        f: {
                                            if (!(2 & $)) {
                                                if (q[2101] == (0 | da)) {
                                                    if (((q[2101] = ba), (a = (q[2098] + a) | 0), (q[2098] = a), (q[(ba + 4) >> 2] = 1 | a), q[2100] != (0 | ba))) break a;
                                                    return (q[2097] = 0), (q[2100] = 0);
                                                }
                                                if (q[2100] == (0 | da)) return (q[2100] = ba), (a = (q[2097] + a) | 0), (q[2097] = a), (q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a);
                                                a = ((-8 & $) + a) | 0;
                                                g: if ($ >>> 0 <= 255)
                                                    ($ >>>= 3), (0 | (v = q[(8 + da) >> 2])) == (0 | (ca = q[(12 + da) >> 2])) ? ((ha = q[2095] & fd($)), (q[2095] = ha)) : ((q[(v + 12) >> 2] = ca), (q[(ca + 8) >> 2] = v));
                                                else {
                                                    if (((fa = q[(24 + da) >> 2]), (0 | da) != (0 | ($ = q[(12 + da) >> 2])))) (v = q[(8 + da) >> 2]), (q[(v + 12) >> 2] = $), (q[($ + 8) >> 2] = v);
                                                    else if ((v = (v = q[(ca = (20 + da) | 0) >> 2]) || q[(ca = (16 + da) | 0) >> 2])) {
                                                        for (; (ea = ca), (v = q[(ca = (($ = v) + 20) | 0) >> 2]) || ((ca = ($ + 16) | 0), (v = q[($ + 16) >> 2])); );
                                                        q[ea >> 2] = 0;
                                                    } else $ = 0;
                                                    if (fa) {
                                                        ca = q[(28 + da) >> 2];
                                                        j: {
                                                            if (q[(v = (8684 + (ca << 2)) | 0) >> 2] == (0 | da)) {
                                                                if ((q[v >> 2] = $)) break j;
                                                                (ha = q[2096] & fd(ca)), (q[2096] = ha);
                                                                break g;
                                                            }
                                                            if (!(q[(fa + (q[(fa + 16) >> 2] == (0 | da) ? 16 : 20)) >> 2] = $)) break g;
                                                        }
                                                        (q[($ + 24) >> 2] = fa), (v = q[(16 + da) >> 2]) && ((q[($ + 16) >> 2] = v), (q[(v + 24) >> 2] = $)), (v = q[(20 + da) >> 2]) && ((q[($ + 20) >> 2] = v), (q[(v + 24) >> 2] = $));
                                                    }
                                                }
                                                if (((q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a), q[2100] != (0 | ba))) break f;
                                                return (q[2097] = a);
                                            }
                                            (q[(4 + da) >> 2] = -2 & $), (q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a);
                                        }
                                        if (a >>> 0 <= 255)
                                            return (
                                                ($ = (8420 + ((a >>>= 3) << 3)) | 0),
                                                (a = (v = q[2095]) & (a = 1 << a) ? q[($ + 8) >> 2] : ((q[2095] = a | v), $)),
                                                (q[($ + 8) >> 2] = ba),
                                                (q[(a + 12) >> 2] = ba),
                                                (q[(ba + 12) >> 2] = $),
                                                (q[(ba + 8) >> 2] = a)
                                            );
                                        (q[(ba + 16) >> 2] = 0),
                                            (v = q[(ba + 20) >> 2] = 0),
                                            (ca = a >>> 8) &&
                                                ((v = 31),
                                                16777215 < a >>> 0 ||
                                                    ((v = ca),
                                                    (v =
                                                        (28 +
                                                            (((v = ((((v = (v <<= ca = ((ca + 1048320) >>> 16) & 8) << (fa = ((v + 520192) >>> 16) & 4)) << (ea = ((v + 245760) >>> 16) & 2)) >>> 15) - (ea | ca | fa)) | 0) << 1) |
                                                                ((a >>> (v + 21)) & 1))) |
                                                        0))),
                                            (ea = (8684 + ((q[(($ = ba) + 28) >> 2] = v) << 2)) | 0);
                                        m: if ((ca = q[2096]) & ($ = 1 << v)) {
                                            (ca = a << (31 == (0 | v) ? 0 : (25 - (v >>> 1)) | 0)), ($ = q[ea >> 2]);
                                            n: {
                                                for (;;) {
                                                    if ((-8 & q[((v = $) + 4) >> 2]) == (0 | a)) break n;
                                                    if ((($ = ca >>> 29), (ca <<= 1), !($ = q[(16 + (ea = (v + (4 & $)) | 0)) >> 2]))) break;
                                                }
                                                (q[(ea + 16) >> 2] = ba), (q[(ba + 12) >> 2] = ba), (q[(ba + 24) >> 2] = v), (q[(ba + 8) >> 2] = ba);
                                                break m;
                                            }
                                            (a = q[(v + 8) >> 2]), (q[(a + 12) >> 2] = ba), (q[(v + 8) >> 2] = ba), (q[(ba + 24) >> 2] = 0), (q[(ba + 12) >> 2] = v), (q[(ba + 8) >> 2] = a);
                                        } else (q[2096] = $ | ca), (q[ea >> 2] = ba), (q[(ba + 12) >> 2] = ba), (q[(ba + 24) >> 2] = ea), (q[(ba + 8) >> 2] = ba);
                                        if (((a = (q[2103] + -1) | 0), !(q[2103] = a))) {
                                            for (ba = 8836; (ba = ((a = q[ba >> 2]) + 8) | 0), a; );
                                            q[2103] = -1;
                                        }
                                    }
                                }
                            }
                            function qa(a) {
                                var sa,
                                    ia = 0,
                                    ja = 0,
                                    ka = 0,
                                    la = 0,
                                    ma = 0,
                                    na = 0,
                                    oa = 0,
                                    pa = 0,
                                    qa = 0,
                                    ra = 0,
                                    ua = 0;
                                L = sa = (L - 16) | 0;
                                a: {
                                    b: {
                                        c: {
                                            d: {
                                                e: {
                                                    f: {
                                                        g: {
                                                            h: {
                                                                i: {
                                                                    j: {
                                                                        k: {
                                                                            if (a >>> 0 <= 244) {
                                                                                if (3 & (ia = (ma = q[2095]) >>> (a = (na = a >>> 0 < 11 ? 16 : (a + 11) & -8) >>> 3))) {
                                                                                    (a = ((ia = q[(8428 + (la = (ja = (a + (1 & (-1 ^ ia))) | 0) << 3)) >> 2]) + 8) | 0),
                                                                                        (0 | (ka = q[(ia + 8) >> 2])) == (0 | (la = (la + 8420) | 0))
                                                                                            ? ((ua = fd(ja) & ma), (q[2095] = ua))
                                                                                            : ((q[(ka + 12) >> 2] = la), (q[(la + 8) >> 2] = ka)),
                                                                                        (q[(ia + 4) >> 2] = 3 | (ja <<= 3)),
                                                                                        (q[(4 + (ia = (ia + ja) | 0)) >> 2] = 1 | q[(ia + 4) >> 2]);
                                                                                    break a;
                                                                                }
                                                                                if (na >>> 0 <= (pa = q[2097]) >>> 0) break k;
                                                                                if (ia) {
                                                                                    (ja = ia = ((a = (((0 - (a = ((0 - (ja = 2 << a)) | ja) & (ia << a))) & a) - 1) | 0) >>> 12) & 16),
                                                                                        (ia =
                                                                                            q[
                                                                                                (8428 +
                                                                                                    (ka =
                                                                                                        (ja =
                                                                                                            (((ja = (ja |= ia = ((a >>>= ia) >>> 5) & 8) | (ia = ((a >>>= ia) >>> 2) & 4) | (ia = ((a >>>= ia) >>> 1) & 2)) |
                                                                                                                (ia = ((a >>>= ia) >>> 1) & 1)) +
                                                                                                                (a >>> ia)) |
                                                                                                            0) << 3)) >>
                                                                                                    2
                                                                                            ]),
                                                                                        (0 | (a = q[(ia + 8) >> 2])) == (0 | (ka = (ka + 8420) | 0)) ? ((ma = fd(ja) & ma), (q[2095] = ma)) : ((q[(a + 12) >> 2] = ka), (q[(ka + 8) >> 2] = a)),
                                                                                        (a = (ia + 8) | 0),
                                                                                        (q[(ia + 4) >> 2] = 3 | na),
                                                                                        (q[(4 + (oa = (ia + na) | 0)) >> 2] = 1 | (la = ((ja <<= 3) - na) | 0)),
                                                                                        (q[(ia + ja) >> 2] = la),
                                                                                        pa &&
                                                                                            ((ia = (8420 + ((ja = pa >>> 3) << 3)) | 0),
                                                                                            (ka = q[2100]),
                                                                                            (ja = (ja = 1 << ja) & ma ? q[(ia + 8) >> 2] : ((q[2095] = ja | ma), ia)),
                                                                                            (q[(ia + 8) >> 2] = ka),
                                                                                            (q[(ja + 12) >> 2] = ka),
                                                                                            (q[(ka + 12) >> 2] = ia),
                                                                                            (q[(ka + 8) >> 2] = ja)),
                                                                                        (q[2100] = oa),
                                                                                        (q[2097] = la);
                                                                                    break a;
                                                                                }
                                                                                if (!(ra = q[2096])) break k;
                                                                                for (
                                                                                    ja = ia = ((a = ((ra & (0 - ra)) - 1) | 0) >>> 12) & 16,
                                                                                        ia =
                                                                                            q[
                                                                                                (8684 +
                                                                                                    ((((ja = (ja |= ia = ((a >>>= ia) >>> 5) & 8) | (ia = ((a >>>= ia) >>> 2) & 4) | (ia = ((a >>>= ia) >>> 1) & 2)) |
                                                                                                        (ia = ((a >>>= ia) >>> 1) & 1)) +
                                                                                                        (a >>> ia)) <<
                                                                                                        2)) >>
                                                                                                    2
                                                                                            ],
                                                                                        ka = ((-8 & q[(ia + 4) >> 2]) - na) | 0,
                                                                                        ja = ia;
                                                                                    (a = (a = q[(ja + 16) >> 2]) || q[(ja + 20) >> 2]);

                                                                                )
                                                                                    (ka = (ja = (la = ((-8 & q[(a + 4) >> 2]) - na) | 0) >>> 0 < ka >>> 0) ? la : ka), (ia = ja ? a : ia), (ja = a);
                                                                                if (((qa = q[(ia + 24) >> 2]), (0 | (la = q[(ia + 12) >> 2])) != (0 | ia))) {
                                                                                    (a = q[(ia + 8) >> 2]), (q[(a + 12) >> 2] = la), (q[(la + 8) >> 2] = a);
                                                                                    break b;
                                                                                }
                                                                                if (!(a = q[(ja = (ia + 20) | 0) >> 2])) {
                                                                                    if (!(a = q[(ia + 16) >> 2])) break j;
                                                                                    ja = (ia + 16) | 0;
                                                                                }
                                                                                for (; (oa = ja), (a = q[(ja = ((la = a) + 20) | 0) >> 2]) || ((ja = (la + 16) | 0), (a = q[(la + 16) >> 2])); );
                                                                                q[oa >> 2] = 0;
                                                                                break b;
                                                                            }
                                                                            if (((na = -1), !(4294967231 < a >>> 0) && ((na = -8 & (ia = (a + 11) | 0)), (pa = q[2096])))) {
                                                                                (ja = (0 - na) | 0),
                                                                                    (ma = 0),
                                                                                    (ia >>>= 8) &&
                                                                                        ((ma = 31),
                                                                                        16777215 < na >>> 0 ||
                                                                                            (ma =
                                                                                                (28 +
                                                                                                    (((a =
                                                                                                        ((((ma = (ia <<= ka = ((ia + 1048320) >>> 16) & 8) << (a = ((ia + 520192) >>> 16) & 4)) << (ia = ((ma + 245760) >>> 16) & 2)) >>> 15) -
                                                                                                            (ia | a | ka)) |
                                                                                                        0) <<
                                                                                                        1) |
                                                                                                        ((na >>> (a + 21)) & 1))) |
                                                                                                0));
                                                                                q: {
                                                                                    r: {
                                                                                        if ((ka = q[(8684 + (ma << 2)) >> 2]))
                                                                                            for (ia = na << (31 == (0 | ma) ? 0 : (25 - (ma >>> 1)) | 0), a = 0; ; ) {
                                                                                                if (!(ja >>> 0 <= (oa = ((-8 & q[(ka + 4) >> 2]) - na) | 0) >>> 0 || ((la = ka), (ja = oa)))) {
                                                                                                    (ja = 0), (a = ka);
                                                                                                    break r;
                                                                                                }
                                                                                                if (
                                                                                                    ((oa = q[(ka + 20) >> 2]),
                                                                                                    (ka = q[(16 + ((((ia >>> 29) & 4) + ka) | 0)) >> 2]),
                                                                                                    (a = oa && (0 | oa) != (0 | ka) ? oa : a),
                                                                                                    (ia <<= 0 != (0 | ka)),
                                                                                                    !ka)
                                                                                                )
                                                                                                    break;
                                                                                            }
                                                                                        else a = 0;
                                                                                        if (!(a | la)) {
                                                                                            if (!(a = ((0 - (a = 2 << ma)) | a) & pa)) break k;
                                                                                            (ka = ia = ((a = ((a & (0 - a)) - 1) | 0) >>> 12) & 16),
                                                                                                (a =
                                                                                                    q[
                                                                                                        (8684 +
                                                                                                            ((((ka = (ka |= ia = ((a >>>= ia) >>> 5) & 8) | (ia = ((a >>>= ia) >>> 2) & 4) | (ia = ((a >>>= ia) >>> 1) & 2)) |
                                                                                                                (ia = ((a >>>= ia) >>> 1) & 1)) +
                                                                                                                (a >>> ia)) <<
                                                                                                                2)) >>
                                                                                                            2
                                                                                                    ]);
                                                                                        }
                                                                                        if (!a) break q;
                                                                                    }
                                                                                    for (
                                                                                        ;
                                                                                        (ja = (ia = (ka = ((-8 & q[(a + 4) >> 2]) - na) | 0) >>> 0 < ja >>> 0) ? ka : ja),
                                                                                            (la = ia ? a : la),
                                                                                            (a = (ia = q[(a + 16) >> 2]) || q[(a + 20) >> 2]);

                                                                                    );
                                                                                }
                                                                                if (!(!la | (ja >>> 0 >= (q[2097] - na) >>> 0))) {
                                                                                    if (((oa = q[(la + 24) >> 2]), (0 | la) != (0 | (ia = q[(la + 12) >> 2])))) {
                                                                                        (a = q[(la + 8) >> 2]), (q[(a + 12) >> 2] = ia), (q[(ia + 8) >> 2] = a);
                                                                                        break c;
                                                                                    }
                                                                                    if (!(a = q[(ka = (la + 20) | 0) >> 2])) {
                                                                                        if (!(a = q[(la + 16) >> 2])) break i;
                                                                                        ka = (la + 16) | 0;
                                                                                    }
                                                                                    for (; (ma = ka), (a = q[(ka = ((ia = a) + 20) | 0) >> 2]) || ((ka = (ia + 16) | 0), (a = q[(ia + 16) >> 2])); );
                                                                                    q[ma >> 2] = 0;
                                                                                    break c;
                                                                                }
                                                                            }
                                                                        }
                                                                        if (na >>> 0 <= (ia = q[2097]) >>> 0) {
                                                                            (a = q[2100]),
                                                                                16 <= (ja = (ia - na) | 0) >>> 0
                                                                                    ? ((q[2097] = ja), (q[2100] = ka = (a + na) | 0), (q[(ka + 4) >> 2] = 1 | ja), (q[(a + ia) >> 2] = ja), (q[(a + 4) >> 2] = 3 | na))
                                                                                    : ((q[2100] = 0), (q[2097] = 0), (q[(a + 4) >> 2] = 3 | ia), (q[(4 + (ia = (a + ia) | 0)) >> 2] = 1 | q[(ia + 4) >> 2])),
                                                                                (a = (a + 8) | 0);
                                                                            break a;
                                                                        }
                                                                        if (na >>> 0 < (ka = q[2098]) >>> 0) {
                                                                            (q[2098] = ia = (ka - na) | 0), (a = q[2101]), (q[2101] = ja = (a + na) | 0), (q[(ja + 4) >> 2] = 1 | ia), (q[(a + 4) >> 2] = 3 | na), (a = (a + 8) | 0);
                                                                            break a;
                                                                        }
                                                                        if (
                                                                            (ja =
                                                                                (ma =
                                                                                    ((ja = la = (na + 47) | (a = 0)) +
                                                                                        (ia = q[2213]
                                                                                            ? q[2215]
                                                                                            : ((q[2216] = -1),
                                                                                              (q[2217] = -1),
                                                                                              (q[2214] = 4096),
                                                                                              (q[2215] = 4096),
                                                                                              (q[2213] = ((12 + sa) & -16) ^ 1431655768),
                                                                                              (q[2218] = 0),
                                                                                              (q[2206] = 0),
                                                                                              4096))) |
                                                                                    0) & (oa = (0 - ia) | 0)) >>>
                                                                                0 <=
                                                                            na >>> 0
                                                                        )
                                                                            break a;
                                                                        if ((ia = q[2205]) && ((qa = ((pa = q[2203]) + ja) | 0) >>> 0 <= pa >>> 0) | (ia >>> 0 < qa >>> 0)) break a;
                                                                        if (4 & r[8824]) break f;
                                                                        v: {
                                                                            w: {
                                                                                if ((ia = q[2101]))
                                                                                    for (a = 8828; ; ) {
                                                                                        if (((pa = q[a >> 2]) + q[(a + 4) >> 2]) >>> 0 > ia >>> 0 && pa >>> 0 <= ia >>> 0) break w;
                                                                                        if (!(a = q[(a + 8) >> 2])) break;
                                                                                    }
                                                                                if (-1 == (0 | (ia = ea(0)))) break g;
                                                                                if (((ma = ja), ((ma = (ka = ((a = q[2214]) + -1) | 0) & ia ? (((ja - ia) | 0) + ((ia + ka) & (0 - a))) | 0 : ma) >>> 0 <= na >>> 0) | (2147483646 < ma >>> 0)))
                                                                                    break g;
                                                                                if ((a = q[2205]) && ((oa = ((ka = q[2203]) + ma) | 0) >>> 0 <= ka >>> 0) | (a >>> 0 < oa >>> 0)) break g;
                                                                                if ((0 | ia) != (0 | (a = ea(ma)))) break v;
                                                                                break e;
                                                                            }
                                                                            if (2147483646 < (ma = oa & (ma - ka)) >>> 0) break g;
                                                                            if ((0 | (ia = ea(ma))) == ((q[a >> 2] + q[(a + 4) >> 2]) | 0)) break h;
                                                                            a = ia;
                                                                        }
                                                                        if (!(((na + 48) >>> 0 <= ma >>> 0) | (2147483646 < ma >>> 0) | (-1 == (0 | (ia = a))))) {
                                                                            if (2147483646 < (a = ((a = q[2215]) + ((la - ma) | 0)) & (0 - a)) >>> 0) break e;
                                                                            if (-1 != (0 | ea(a))) {
                                                                                ma = (a + ma) | 0;
                                                                                break e;
                                                                            }
                                                                            ea((0 - ma) | 0);
                                                                            break g;
                                                                        }
                                                                        if (-1 != (0 | ia)) break e;
                                                                        break g;
                                                                    }
                                                                    la = 0;
                                                                    break b;
                                                                }
                                                                ia = 0;
                                                                break c;
                                                            }
                                                            if (-1 != (0 | ia)) break e;
                                                        }
                                                        q[2206] = 4 | q[2206];
                                                    }
                                                    if (2147483646 < ja >>> 0) break d;
                                                    if (((ia = ea(ja)), ((a = ea(0)) >>> 0 <= ia >>> 0) | (-1 == (0 | ia)) | (-1 == (0 | a)))) break d;
                                                    if ((ma = (a - ia) | 0) >>> 0 <= (na + 40) >>> 0) break d;
                                                }
                                                (a = (q[2203] + ma) | 0), (q[2203] = a) >>> 0 > t[2204] && (q[2204] = a);
                                                x: {
                                                    y: {
                                                        z: {
                                                            if ((ja = q[2101])) {
                                                                for (a = 8828; ; ) {
                                                                    if ((((ka = q[a >> 2]) + (la = q[(a + 4) >> 2])) | 0) == (0 | ia)) break z;
                                                                    if (!(a = q[(a + 8) >> 2])) break;
                                                                }
                                                                break y;
                                                            }
                                                            for (
                                                                ((a = q[2099]) >>> 0 <= ia >>> 0 && a) || (q[2099] = ia), a = 0, q[2208] = ma, q[2207] = ia, q[2103] = -1, q[2104] = q[2213], q[2210] = 0;
                                                                (q[(8428 + (ja = a << 3)) >> 2] = ka = (ja + 8420) | 0), (q[(ja + 8432) >> 2] = ka), 32 != (0 | (a = (a + 1) | 0));

                                                            );
                                                            (q[2098] = ka = ((a = (ma + -40) | 0) - (ja = (ia + 8) & 7 ? (-8 - ia) & 7 : 0)) | 0),
                                                                (q[2101] = ja = (ia + ja) | 0),
                                                                (q[(ja + 4) >> 2] = 1 | ka),
                                                                (q[(4 + ((a + ia) | 0)) >> 2] = 40),
                                                                (q[2102] = q[2217]);
                                                            break x;
                                                        }
                                                        if (!((8 & r[(a + 12) | 0]) | (ia >>> 0 <= ja >>> 0) | (ja >>> 0 < ka >>> 0))) {
                                                            (q[(a + 4) >> 2] = la + ma),
                                                                (q[2101] = ia = ((a = (ja + 8) & 7 ? (-8 - ja) & 7 : 0) + ja) | 0),
                                                                (ka = (q[2098] + ma) | 0),
                                                                (q[2098] = a = (ka - a) | 0),
                                                                (q[(ia + 4) >> 2] = 1 | a),
                                                                (q[(4 + ((ja + ka) | 0)) >> 2] = 40),
                                                                (q[2102] = q[2217]);
                                                            break x;
                                                        }
                                                    }
                                                    ia >>> 0 < (la = q[2099]) >>> 0 && ((q[2099] = ia), (la = 0)), (ka = (ia + ma) | 0), (a = 8828);
                                                    A: {
                                                        B: {
                                                            C: {
                                                                D: {
                                                                    E: {
                                                                        F: {
                                                                            for (; (0 | ka) != q[a >> 2]; ) if (!(a = q[(a + 8) >> 2])) break F;
                                                                            if (!(8 & r[(a + 12) | 0])) break E;
                                                                        }
                                                                        for (a = 8828; ; ) {
                                                                            if ((ka = q[a >> 2]) >>> 0 <= ja >>> 0 && ja >>> 0 < (la = (ka + q[(a + 4) >> 2]) | 0) >>> 0) break D;
                                                                            a = q[(a + 8) >> 2];
                                                                        }
                                                                    }
                                                                    if (
                                                                        ((q[a >> 2] = ia),
                                                                        (q[(a + 4) >> 2] = q[(a + 4) >> 2] + ma),
                                                                        (q[(4 + (qa = (((ia + 8) & 7 ? (-8 - ia) & 7 : 0) + ia) | 0)) >> 2] = 3 | na),
                                                                        (a = ((((ia = (ka + ((ka + 8) & 7 ? (-8 - ka) & 7 : 0)) | 0) - qa) | 0) - na) | 0),
                                                                        (oa = (na + qa) | 0),
                                                                        (0 | ia) == (0 | ja))
                                                                    ) {
                                                                        (q[2101] = oa), (a = (q[2098] + a) | 0), (q[2098] = a), (q[(oa + 4) >> 2] = 1 | a);
                                                                        break B;
                                                                    }
                                                                    if (q[2100] == (0 | ia)) {
                                                                        (q[2100] = oa), (a = (q[2097] + a) | 0), (q[2097] = a), (q[(oa + 4) >> 2] = 1 | a), (q[(a + oa) >> 2] = a);
                                                                        break B;
                                                                    }
                                                                    if (1 == (3 & (ja = q[(ia + 4) >> 2]))) {
                                                                        ra = -8 & ja;
                                                                        G: if (ja >>> 0 <= 255)
                                                                            (la = ja >>> 3),
                                                                                (ja = q[(ia + 8) >> 2]),
                                                                                (0 | (ka = q[(ia + 12) >> 2])) == (0 | ja) ? ((ua = q[2095] & fd(la)), (q[2095] = ua)) : ((q[(ja + 12) >> 2] = ka), (q[(ka + 8) >> 2] = ja));
                                                                        else {
                                                                            if (((pa = q[(ia + 24) >> 2]), (0 | (ma = q[(ia + 12) >> 2])) != (0 | ia))) (ja = q[(ia + 8) >> 2]), (q[(ja + 12) >> 2] = ma), (q[(ma + 8) >> 2] = ja);
                                                                            else if ((na = (na = q[(ka = (ia + 20) | 0) >> 2]) || q[(ka = (ia + 16) | 0) >> 2])) {
                                                                                for (; (ja = ka), (na = q[(ka = ((ma = na) + 20) | 0) >> 2]) || ((ka = (ma + 16) | 0), (na = q[(ma + 16) >> 2])); );
                                                                                q[ja >> 2] = 0;
                                                                            } else ma = 0;
                                                                            if (pa) {
                                                                                ja = q[(ia + 28) >> 2];
                                                                                J: {
                                                                                    if (q[(ka = (8684 + (ja << 2)) | 0) >> 2] == (0 | ia)) {
                                                                                        if ((q[ka >> 2] = ma)) break J;
                                                                                        (ua = q[2096] & fd(ja)), (q[2096] = ua);
                                                                                        break G;
                                                                                    }
                                                                                    if (!(q[(pa + (q[(pa + 16) >> 2] == (0 | ia) ? 16 : 20)) >> 2] = ma)) break G;
                                                                                }
                                                                                (q[(ma + 24) >> 2] = pa),
                                                                                    (ja = q[(ia + 16) >> 2]) && ((q[(ma + 16) >> 2] = ja), (q[(ja + 24) >> 2] = ma)),
                                                                                    (ja = q[(ia + 20) >> 2]) && ((q[(ma + 20) >> 2] = ja), (q[(ja + 24) >> 2] = ma));
                                                                            }
                                                                        }
                                                                        (ia = (ia + ra) | 0), (a = (a + ra) | 0);
                                                                    }
                                                                    if (((q[(ia + 4) >> 2] = -2 & q[(ia + 4) >> 2]), (q[(oa + 4) >> 2] = 1 | a), (q[(a + oa) >> 2] = a) >>> 0 <= 255)) {
                                                                        (a = (8420 + ((ia = a >>> 3) << 3)) | 0),
                                                                            (ia = (ja = q[2095]) & (ia = 1 << ia) ? q[(a + 8) >> 2] : ((q[2095] = ia | ja), a)),
                                                                            (q[(a + 8) >> 2] = oa),
                                                                            (q[(ia + 12) >> 2] = oa),
                                                                            (q[(oa + 12) >> 2] = a),
                                                                            (q[(oa + 8) >> 2] = ia);
                                                                        break B;
                                                                    }
                                                                    if (
                                                                        ((ia = 0),
                                                                        (ka = a >>> 8) &&
                                                                            ((ia = 31),
                                                                            16777215 < a >>> 0 ||
                                                                                (ia =
                                                                                    (28 +
                                                                                        (((ia =
                                                                                            ((((na = (ka <<= la = ((ka + 1048320) >>> 16) & 8) << (ia = ((ka + 520192) >>> 16) & 4)) << (ka = ((na + 245760) >>> 16) & 2)) >>> 15) -
                                                                                                (ka | ia | la)) |
                                                                                            0) <<
                                                                                            1) |
                                                                                            ((a >>> (ia + 21)) & 1))) |
                                                                                    0)),
                                                                        (q[((ja = oa) + 28) >> 2] = ia),
                                                                        (q[(oa + 16) >> 2] = 0),
                                                                        (ja = (8684 + (ia << 2)) | (q[(oa + 20) >> 2] = 0)),
                                                                        (ka = q[2096]) & (la = 1 << ia))
                                                                    ) {
                                                                        for (ka = a << (31 == (0 | ia) ? 0 : (25 - (ia >>> 1)) | 0), ia = q[ja >> 2]; ; ) {
                                                                            if ((-8 & q[((ja = ia) + 4) >> 2]) == (0 | a)) break C;
                                                                            if (((ia = ka >>> 29), (ka <<= 1), !(ia = q[(16 + (la = ((4 & ia) + ja) | 0)) >> 2]))) break;
                                                                        }
                                                                        q[(la + 16) >> 2] = oa;
                                                                    } else (q[2096] = ka | la), (q[ja >> 2] = oa);
                                                                    (q[(oa + 24) >> 2] = ja), (q[(oa + 12) >> 2] = oa), (q[(oa + 8) >> 2] = oa);
                                                                    break B;
                                                                }
                                                                for (
                                                                    q[2098] = oa = ((a = (ma + -40) | 0) - (ka = (ia + 8) & 7 ? (-8 - ia) & 7 : 0)) | 0,
                                                                        q[2101] = ka = (ia + ka) | 0,
                                                                        q[(ka + 4) >> 2] = 1 | oa,
                                                                        q[(4 + ((a + ia) | 0)) >> 2] = 40,
                                                                        q[2102] = q[2217],
                                                                        q[((ka = (a = (((la + ((la + -39) & 7 ? (39 - la) & 7 : 0)) | 0) - 47) | 0) >>> 0 < (ja + 16) >>> 0 ? ja : a) + 4) >> 2] = 27,
                                                                        a = q[2210],
                                                                        q[(ka + 16) >> 2] = q[2209],
                                                                        q[(ka + 20) >> 2] = a,
                                                                        a = q[2208],
                                                                        q[(ka + 8) >> 2] = q[2207],
                                                                        q[(ka + 12) >> 2] = a,
                                                                        q[2209] = ka + 8,
                                                                        q[2208] = ma,
                                                                        q[2207] = ia,
                                                                        a = (ka + 24) | (q[2210] = 0);
                                                                    (q[(a + 4) >> 2] = 7), (ia = (a + 8) | 0), (a = (a + 4) | 0), ia >>> 0 < la >>> 0;

                                                                );
                                                                if ((0 | ja) == (0 | ka)) break x;
                                                                if (((q[(ka + 4) >> 2] = -2 & q[(ka + 4) >> 2]), (q[(ja + 4) >> 2] = 1 | (la = (ka - ja) | 0)), (q[ka >> 2] = la) >>> 0 <= 255)) {
                                                                    (a = (8420 + ((ia = la >>> 3) << 3)) | 0),
                                                                        (ia = (ka = q[2095]) & (ia = 1 << ia) ? q[(a + 8) >> 2] : ((q[2095] = ia | ka), a)),
                                                                        (q[(a + 8) >> 2] = ja),
                                                                        (q[(ia + 12) >> 2] = ja),
                                                                        (q[(ja + 12) >> 2] = a),
                                                                        (q[(ja + 8) >> 2] = ia);
                                                                    break x;
                                                                }
                                                                if (
                                                                    ((q[(ja + 16) >> 2] = 0),
                                                                    (a = q[(ja + 20) >> 2] = 0),
                                                                    (ka = la >>> 8) &&
                                                                        ((a = 31),
                                                                        16777215 < la >>> 0 ||
                                                                            (a =
                                                                                (28 +
                                                                                    (((a =
                                                                                        ((((oa = (ka <<= ma = ((ka + 1048320) >>> 16) & 8) << (a = ((ka + 520192) >>> 16) & 4)) << (ka = ((oa + 245760) >>> 16) & 2)) >>> 15) - (ka | a | ma)) |
                                                                                        0) <<
                                                                                        1) |
                                                                                        ((la >>> (a + 21)) & 1))) |
                                                                                0)),
                                                                    (ia = (8684 + ((q[((ia = ja) + 28) >> 2] = a) << 2)) | 0),
                                                                    (ka = q[2096]) & (ma = 1 << a))
                                                                ) {
                                                                    for (a = la << (31 == (0 | a) ? 0 : (25 - (a >>> 1)) | 0), ia = q[ia >> 2]; ; ) {
                                                                        if ((0 | la) == (-8 & q[((ka = ia) + 4) >> 2])) break A;
                                                                        if (((ia = a >>> 29), (a <<= 1), !(ia = q[(16 + (ma = (ka + (4 & ia)) | 0)) >> 2]))) break;
                                                                    }
                                                                    (q[(ma + 16) >> 2] = ja), (q[(ja + 24) >> 2] = ka);
                                                                } else (q[2096] = ka | ma), (q[ia >> 2] = ja), (q[(ja + 24) >> 2] = ia);
                                                                (q[(ja + 12) >> 2] = ja), (q[(ja + 8) >> 2] = ja);
                                                                break x;
                                                            }
                                                            (a = q[(ja + 8) >> 2]), (q[(a + 12) >> 2] = oa), (q[(ja + 8) >> 2] = oa), (q[(oa + 24) >> 2] = 0), (q[(oa + 12) >> 2] = ja), (q[(oa + 8) >> 2] = a);
                                                        }
                                                        a = (qa + 8) | 0;
                                                        break a;
                                                    }
                                                    (a = q[(ka + 8) >> 2]), (q[(a + 12) >> 2] = ja), (q[(ka + 8) >> 2] = ja), (q[(ja + 24) >> 2] = 0), (q[(ja + 12) >> 2] = ka), (q[(ja + 8) >> 2] = a);
                                                }
                                                if (!((a = q[2098]) >>> 0 <= na >>> 0)) {
                                                    (q[2098] = ia = (a - na) | 0), (a = q[2101]), (q[2101] = ja = (a + na) | 0), (q[(ja + 4) >> 2] = 1 | ia), (q[(a + 4) >> 2] = 3 | na), (a = (a + 8) | 0);
                                                    break a;
                                                }
                                            }
                                            (q[2094] = 48), (a = 0);
                                            break a;
                                        }
                                        Q: if (oa) {
                                            a = q[(la + 28) >> 2];
                                            R: {
                                                if (q[(ka = (8684 + (a << 2)) | 0) >> 2] == (0 | la)) {
                                                    if ((q[ka >> 2] = ia)) break R;
                                                    (pa = fd(a) & pa), (q[2096] = pa);
                                                    break Q;
                                                }
                                                if (!(q[(oa + (q[(oa + 16) >> 2] == (0 | la) ? 16 : 20)) >> 2] = ia)) break Q;
                                            }
                                            (q[(ia + 24) >> 2] = oa), (a = q[(la + 16) >> 2]) && ((q[(ia + 16) >> 2] = a), (q[(a + 24) >> 2] = ia)), (a = q[(la + 20) >> 2]) && ((q[(ia + 20) >> 2] = a), (q[(a + 24) >> 2] = ia));
                                        }
                                        S: if (ja >>> 0 <= 15) (q[(la + 4) >> 2] = 3 | (a = (ja + na) | 0)), (q[(4 + (a = (a + la) | 0)) >> 2] = 1 | q[(a + 4) >> 2]);
                                        else if (((q[(la + 4) >> 2] = 3 | na), (q[(4 + (ka = (la + na) | 0)) >> 2] = 1 | ja), (q[(ja + ka) >> 2] = ja) >>> 0 <= 255))
                                            (a = (8420 + ((ia = ja >>> 3) << 3)) | 0),
                                                (ia = (ja = q[2095]) & (ia = 1 << ia) ? q[(a + 8) >> 2] : ((q[2095] = ia | ja), a)),
                                                (q[(a + 8) >> 2] = ka),
                                                (q[(ia + 12) >> 2] = ka),
                                                (q[(ka + 12) >> 2] = a),
                                                (q[(ka + 8) >> 2] = ia);
                                        else {
                                            (a = 0),
                                                (na = ja >>> 8) &&
                                                    ((a = 31),
                                                    16777215 < ja >>> 0 ||
                                                        (a =
                                                            (28 +
                                                                (((a = ((((oa = (na <<= ma = ((na + 1048320) >>> 16) & 8) << (a = ((na + 520192) >>> 16) & 4)) << (na = ((oa + 245760) >>> 16) & 2)) >>> 15) - (na | a | ma)) | 0) << 1) |
                                                                    ((ja >>> (a + 21)) & 1))) |
                                                            0)),
                                                (q[((ia = ka) + 28) >> 2] = a),
                                                (q[(ka + 16) >> 2] = 0),
                                                (ia = (8684 + (a << 2)) | (q[(ka + 20) >> 2] = 0));
                                            V: {
                                                if ((na = 1 << a) & pa) {
                                                    for (a = ja << (31 == (0 | a) ? 0 : (25 - (a >>> 1)) | 0), na = q[ia >> 2]; ; ) {
                                                        if ((-8 & q[((ia = na) + 4) >> 2]) == (0 | ja)) break V;
                                                        if (((na = a >>> 29), (a <<= 1), !(na = q[(16 + (ma = ((4 & na) + ia) | 0)) >> 2]))) break;
                                                    }
                                                    q[(ma + 16) >> 2] = ka;
                                                } else (q[2096] = na | pa), (q[ia >> 2] = ka);
                                                (q[(ka + 24) >> 2] = ia), (q[(ka + 12) >> 2] = ka), (q[(ka + 8) >> 2] = ka);
                                                break S;
                                            }
                                            (a = q[(ia + 8) >> 2]), (q[(a + 12) >> 2] = ka), (q[(ia + 8) >> 2] = ka), (q[(ka + 24) >> 2] = 0), (q[(ka + 12) >> 2] = ia), (q[(ka + 8) >> 2] = a);
                                        }
                                        a = (la + 8) | 0;
                                        break a;
                                    }
                                    X: if (qa) {
                                        a = q[(ia + 28) >> 2];
                                        Y: {
                                            if (q[(ja = (8684 + (a << 2)) | 0) >> 2] == (0 | ia)) {
                                                if ((q[ja >> 2] = la)) break Y;
                                                (ua = fd(a) & ra), (q[2096] = ua);
                                                break X;
                                            }
                                            if (!(q[(qa + (q[(qa + 16) >> 2] == (0 | ia) ? 16 : 20)) >> 2] = la)) break X;
                                        }
                                        (q[(la + 24) >> 2] = qa), (a = q[(ia + 16) >> 2]) && ((q[(la + 16) >> 2] = a), (q[(a + 24) >> 2] = la)), (a = q[(ia + 20) >> 2]) && ((q[(la + 20) >> 2] = a), (q[(a + 24) >> 2] = la));
                                    }
                                    ka >>> 0 <= 15
                                        ? ((q[(ia + 4) >> 2] = 3 | (a = (ka + na) | 0)), (q[(4 + (a = (a + ia) | 0)) >> 2] = 1 | q[(a + 4) >> 2]))
                                        : ((q[(ia + 4) >> 2] = 3 | na),
                                          (q[(4 + (na = (ia + na) | 0)) >> 2] = 1 | ka),
                                          (q[(ka + na) >> 2] = ka),
                                          pa &&
                                              ((a = (8420 + ((ja = pa >>> 3) << 3)) | 0),
                                              (la = q[2100]),
                                              (ja = (ja = 1 << ja) & ma ? q[(a + 8) >> 2] : ((q[2095] = ja | ma), a)),
                                              (q[(a + 8) >> 2] = la),
                                              (q[(ja + 12) >> 2] = la),
                                              (q[(la + 12) >> 2] = a),
                                              (q[(la + 8) >> 2] = ja)),
                                          (q[2100] = na),
                                          (q[2097] = ka)),
                                        (a = (ia + 8) | 0);
                                }
                                return (L = (16 + sa) | 0), a;
                            }
                            function ra(a, va, wa, xa, ya, za, Aa) {
                                var Qa,
                                    Ta,
                                    Ba,
                                    Ca = 0,
                                    Da = 0,
                                    Fa = 0,
                                    Ia = 0,
                                    Ja = 0,
                                    Ka = 0,
                                    Ma = 0,
                                    Na = 0,
                                    Oa = 0,
                                    Pa = 0,
                                    Ra = 0,
                                    Sa = 0;
                                (q[(76 + (L = Ba = (L - 80) | 0)) >> 2] = va), (Ta = (55 + Ba) | 0), (Qa = (56 + Ba) | 0), (va = 0);
                                a: {
                                    b: {
                                        c: for (;;) {
                                            (0 | Oa) < 0 || (Oa = ((2147483647 - Oa) | 0) < (0 | va) ? ((q[2094] = 61), -1) : (va + Oa) | 0);
                                            e: {
                                                f: {
                                                    g: {
                                                        h: {
                                                            i: {
                                                                j: {
                                                                    k: {
                                                                        l: {
                                                                            m: {
                                                                                n: {
                                                                                    o: {
                                                                                        p: {
                                                                                            q: {
                                                                                                if (((Ia = q[(76 + Ba) >> 2]), (Fa = r[0 | (va = Ia)]))) {
                                                                                                    for (;;) {
                                                                                                        r: {
                                                                                                            s: {
                                                                                                                t: if ((Ca = 255 & Fa)) {
                                                                                                                    if (37 != (0 | Ca)) break s;
                                                                                                                    for (Fa = va; ; ) {
                                                                                                                        if (37 != r[(va + 1) | 0]) break t;
                                                                                                                        if (((q[(76 + Ba) >> 2] = Ca = (va + 2) | 0), (Fa = (Fa + 1) | 0), (Da = r[(va + 2) | 0]), (va = Ca), 37 != (0 | Da)))
                                                                                                                            break;
                                                                                                                    }
                                                                                                                } else Fa = va;
                                                                                                                if (((va = (Fa - Ia) | 0), a && Z(a, Ia, va), va)) continue c;
                                                                                                                (Pa = -1),
                                                                                                                    (Ja = !ha(o[(q[(76 + (Ca = Ba)) >> 2] + (Fa = 1)) | 0])),
                                                                                                                    (va = q[(76 + Ba) >> 2]),
                                                                                                                    Ja | (36 != r[(va + 2) | 0]) || ((Pa = (o[(va + 1) | 0] + -48) | 0), (Ra = 1), (Fa = 3)),
                                                                                                                    (q[(Ca + 76) >> 2] = va = (Fa + va) | 0);
                                                                                                                u: if (31 < (Da = ((Ma = o[(Fa = 0) | va]) + -32) | 0) >>> 0) Ca = va;
                                                                                                                else if (((Ca = va), 75913 & (Da = 1 << Da)))
                                                                                                                    for (;;) {
                                                                                                                        if (((q[(76 + Ba) >> 2] = Ca = (va + 1) | 0), (Fa |= Da), 31 < (Da = ((Ma = o[(va + 1) | 0]) + -32) | 0) >>> 0))
                                                                                                                            break u;
                                                                                                                        if (((va = Ca), !(75913 & (Da = 1 << Da)))) break;
                                                                                                                    }
                                                                                                                if (42 == (0 | Ma)) {
                                                                                                                    if (((Ja = Ba), ha(o[(Ca + 1) | 0]) && ((va = q[(76 + Ba) >> 2]), 36 == r[(va + 2) | 0])))
                                                                                                                        (q[((((o[(va + 1) | 0] << 2) + ya) | 0) - 192) >> 2] = 10),
                                                                                                                            (Na = q[((((o[(va + 1) | 0] << 3) + xa) | 0) - 384) >> 2]),
                                                                                                                            (Ra = 1),
                                                                                                                            (va = (va + 3) | 0);
                                                                                                                    else {
                                                                                                                        if (Ra) break b;
                                                                                                                        (Na = Ra = 0), a && ((va = q[wa >> 2]), (q[wa >> 2] = va + 4), (Na = q[va >> 2])), (va = (q[(76 + Ba) >> 2] + 1) | 0);
                                                                                                                    }
                                                                                                                    (q[(Ja + 76) >> 2] = va), -1 < (0 | Na) || ((Na = (0 - Na) | 0), (Fa |= 8192));
                                                                                                                } else {
                                                                                                                    if ((0 | (Na = Ha((76 + Ba) | 0))) < 0) break b;
                                                                                                                    va = q[(76 + Ba) >> 2];
                                                                                                                }
                                                                                                                if (((Da = -1), 46 == r[0 | va]))
                                                                                                                    if (42 == r[(va + 1) | 0])
                                                                                                                        if (ha(o[(va + 2) | 0]) && ((va = q[(76 + Ba) >> 2]), 36 == r[(va + 3) | 0]))
                                                                                                                            (q[((((o[(va + 2) | 0] << 2) + ya) | 0) - 192) >> 2] = 10),
                                                                                                                                (Da = q[((((o[(va + 2) | 0] << 3) + xa) | 0) - 384) >> 2]),
                                                                                                                                (q[(76 + Ba) >> 2] = va = (va + 4) | 0);
                                                                                                                        else {
                                                                                                                            if (Ra) break b;
                                                                                                                            (Da = a ? ((va = q[wa >> 2]), (q[wa >> 2] = va + 4), q[va >> 2]) : 0),
                                                                                                                                (va = (q[(76 + Ba) >> 2] + 2) | 0),
                                                                                                                                (q[(76 + Ba) >> 2] = va);
                                                                                                                        }
                                                                                                                    else (q[(76 + Ba) >> 2] = va + 1), (Da = Ha((76 + Ba) | 0)), (va = q[(76 + Ba) >> 2]);
                                                                                                                for (Ca = 0; ; ) {
                                                                                                                    if (((Sa = Ca), (Ka = -1), 57 < (o[0 | va] + -65) >>> 0)) break a;
                                                                                                                    if (
                                                                                                                        ((q[(76 + Ba) >> 2] = Ma = (va + 1) | 0),
                                                                                                                        (Ca = o[0 | va]),
                                                                                                                        (va = Ma),
                                                                                                                        !(((Ca = r[(3327 + ((Ca + w(Sa, 58)) | 0)) | 0]) + -1) >>> 0 < 8))
                                                                                                                    )
                                                                                                                        break;
                                                                                                                }
                                                                                                                if (!Ca) break a;
                                                                                                                A: {
                                                                                                                    B: {
                                                                                                                        C: {
                                                                                                                            if (19 == (0 | Ca)) {
                                                                                                                                if ((0 | Pa) <= -1) break C;
                                                                                                                                break a;
                                                                                                                            }
                                                                                                                            if ((0 | Pa) < 0) break B;
                                                                                                                            (q[((Pa << 2) + ya) >> 2] = Ca),
                                                                                                                                (Ca = q[(4 + (va = ((Pa << 3) + xa) | 0)) >> 2]),
                                                                                                                                (q[(64 + Ba) >> 2] = q[va >> 2]),
                                                                                                                                (q[(68 + Ba) >> 2] = Ca);
                                                                                                                        }
                                                                                                                        if (((va = 0), a)) break A;
                                                                                                                        continue c;
                                                                                                                    }
                                                                                                                    if (!a) break e;
                                                                                                                    Ga((64 + Ba) | 0, Ca, wa, Aa), (Ma = q[(76 + Ba) >> 2]);
                                                                                                                }
                                                                                                                if (
                                                                                                                    ((Ja = -65537 & Fa),
                                                                                                                    (Fa = 8192 & Fa ? Ja : Fa),
                                                                                                                    (Pa = 3360),
                                                                                                                    (Ca = Qa),
                                                                                                                    (va = o[(Ma + -1) | (Ka = 0)]),
                                                                                                                    (Ma = ((va = Sa && 3 == (15 & va) ? -33 & va : va) + -88) | 0) >>> 0 <= 32)
                                                                                                                )
                                                                                                                    break r;
                                                                                                                D: {
                                                                                                                    E: {
                                                                                                                        F: {
                                                                                                                            G: {
                                                                                                                                if (6 < (Ja = (va + -65) | 0) >>> 0) {
                                                                                                                                    if (83 != (0 | va)) break f;
                                                                                                                                    if (!Da) break G;
                                                                                                                                    Ca = q[(64 + Ba) >> 2];
                                                                                                                                    break E;
                                                                                                                                }
                                                                                                                                switch ((Ja - 1) | 0) {
                                                                                                                                    case 1:
                                                                                                                                        break F;
                                                                                                                                    case 0:
                                                                                                                                    case 2:
                                                                                                                                        break f;
                                                                                                                                    default:
                                                                                                                                        break q;
                                                                                                                                }
                                                                                                                            }
                                                                                                                            _(a, 32, Na, (va = 0), Fa);
                                                                                                                            break D;
                                                                                                                        }
                                                                                                                        (q[(12 + Ba) >> 2] = 0),
                                                                                                                            (q[(8 + Ba) >> 2] = q[(64 + Ba) >> 2]),
                                                                                                                            (q[(64 + Ba) >> 2] = 8 + Ba),
                                                                                                                            (Da = -1),
                                                                                                                            (Ca = (8 + Ba) | 0);
                                                                                                                    }
                                                                                                                    va = 0;
                                                                                                                    H: {
                                                                                                                        for (;;) {
                                                                                                                            if (!(Ia = q[Ca >> 2])) break H;
                                                                                                                            if ((Ja = (0 | (Ia = Ea((4 + Ba) | 0, Ia))) < 0) | ((Da - va) >>> 0 < Ia >>> 0)) break;
                                                                                                                            if (((Ca = (Ca + 4) | 0), !((va = (va + Ia) | 0) >>> 0 < Da >>> 0))) break H;
                                                                                                                        }
                                                                                                                        if (((Ka = -1), Ja)) break a;
                                                                                                                    }
                                                                                                                    if ((_(a, 32, Na, va, Fa), va))
                                                                                                                        for (Da = 0, Ca = q[(64 + Ba) >> 2]; ; ) {
                                                                                                                            if (!(Ia = q[Ca >> 2])) break D;
                                                                                                                            if ((0 | va) < (0 | (Da = ((Ia = Ea((4 + Ba) | 0, Ia)) + Da) | 0))) break D;
                                                                                                                            if ((Z(a, (4 + Ba) | 0, Ia), (Ca = (Ca + 4) | 0), !(Da >>> 0 < va >>> 0))) break;
                                                                                                                        }
                                                                                                                    else va = 0;
                                                                                                                }
                                                                                                                _(a, 32, Na, va, 8192 ^ Fa), (va = (0 | va) < (0 | Na) ? Na : va);
                                                                                                                continue c;
                                                                                                            }
                                                                                                            (q[(76 + Ba) >> 2] = Ca = (va + 1) | 0), (Fa = r[(va + 1) | 0]), (va = Ca);
                                                                                                            continue;
                                                                                                        }
                                                                                                        break;
                                                                                                    }
                                                                                                    switch ((Ma - 1) | 0) {
                                                                                                        case 28:
                                                                                                            break i;
                                                                                                        case 21:
                                                                                                            break j;
                                                                                                        case 23:
                                                                                                            break l;
                                                                                                        case 22:
                                                                                                            break m;
                                                                                                        case 11:
                                                                                                        case 16:
                                                                                                            break n;
                                                                                                        case 10:
                                                                                                            break o;
                                                                                                        case 26:
                                                                                                            break p;
                                                                                                        case 8:
                                                                                                        case 12:
                                                                                                        case 13:
                                                                                                        case 14:
                                                                                                            break q;
                                                                                                        case 0:
                                                                                                        case 1:
                                                                                                        case 2:
                                                                                                        case 3:
                                                                                                        case 4:
                                                                                                        case 5:
                                                                                                        case 6:
                                                                                                        case 7:
                                                                                                        case 9:
                                                                                                        case 15:
                                                                                                        case 17:
                                                                                                        case 18:
                                                                                                        case 19:
                                                                                                        case 20:
                                                                                                        case 24:
                                                                                                        case 25:
                                                                                                        case 27:
                                                                                                        case 29:
                                                                                                        case 30:
                                                                                                            break f;
                                                                                                        default:
                                                                                                            break k;
                                                                                                    }
                                                                                                }
                                                                                                if (((Ka = Oa), a)) break a;
                                                                                                if (!Ra) break e;
                                                                                                for (va = 1; ; ) {
                                                                                                    if ((a = q[((va << 2) + ya) >> 2])) {
                                                                                                        if ((Ga(((va << 3) + xa) | 0, a, wa, Aa), 10 != (0 | (va = (va + (Ka = 1)) | 0)))) continue;
                                                                                                        break a;
                                                                                                    }
                                                                                                    break;
                                                                                                }
                                                                                                if (((Ka = 1), 9 < va >>> 0)) break a;
                                                                                                if (((Ka = -1), q[((va << 2) + ya) >> 2])) break a;
                                                                                                for (; !q[(((va = (va + 1) | 0) << 2) + ya) >> 2] && 10 != (0 | va); );
                                                                                                Ka = va >>> 0 < 10 ? -1 : 1;
                                                                                                break a;
                                                                                            }
                                                                                            va = 0 | n[za](a, v[(64 + Ba) >> 3], Na, Da, Fa, va);
                                                                                            continue;
                                                                                        }
                                                                                        (Ca = (va = La((Ia = (va = q[(64 + Ba) >> 2]) || 3370), Da)) || (Da + Ia) | 0), (Fa = Ja), (Da = va ? (va - Ia) | 0 : Da);
                                                                                        break f;
                                                                                    }
                                                                                    (o[(55 + Ba) | 0] = q[(64 + Ba) >> 2]), (Da = 1), (Ia = Ta), (Fa = Ja);
                                                                                    break f;
                                                                                }
                                                                                if (((va = Ja = q[(68 + Ba) >> 2]), (Ia = q[(64 + Ba) >> 2]), (0 | va) < -1 || ((0 | va) <= -1 && !(4294967295 < Ia >>> 0)))) {
                                                                                    (va = (0 - ((va + (0 < Ia >>> 0)) | 0)) | 0), (q[(64 + Ba) >> 2] = Ia = (0 - Ia) | 0), (q[(68 + Ba) >> 2] = va), (Ka = 1), (Pa = 3360);
                                                                                    break h;
                                                                                }
                                                                                if (2048 & Fa) {
                                                                                    (Ka = 1), (Pa = 3361);
                                                                                    break h;
                                                                                }
                                                                                Pa = (Ka = 1 & Fa) ? 3362 : 3360;
                                                                                break h;
                                                                            }
                                                                            if (
                                                                                ((Ia = (function (a, Gl, Pm) {
                                                                                    if (a | Gl) for (; (o[0 | (Pm = (Pm + -1) | 0)] = (7 & a) | 48), (a = ((7 & Gl) << 29) | (a >>> 3)) | (Gl >>>= 3); );
                                                                                    return Pm;
                                                                                })(q[(64 + Ba) >> 2], q[(68 + Ba) >> 2], Qa)),
                                                                                !(8 & Fa))
                                                                            )
                                                                                break g;
                                                                            Da = (0 | (va = (Qa - Ia) | 0)) < (0 | Da) ? Da : (va + 1) | 0;
                                                                            break g;
                                                                        }
                                                                        (Da = 8 < Da >>> 0 ? Da : 8), (Fa |= 8), (va = 120);
                                                                    }
                                                                    if (
                                                                        ((Ia = (function (a, Gl, Pm, Qm) {
                                                                            if (a | Gl) for (; (o[0 | (Pm = (Pm + -1) | 0)] = r[(3856 + (15 & a)) | 0] | Qm), (a = ((15 & Gl) << 28) | (a >>> 4)) | (Gl >>>= 4); );
                                                                            return Pm;
                                                                        })(q[(64 + Ba) >> 2], q[(68 + Ba) >> 2], Qa, 32 & va)),
                                                                        !(8 & Fa) | !(q[(64 + Ba) >> 2] | q[(68 + Ba) >> 2]))
                                                                    )
                                                                        break g;
                                                                    (Pa = (3360 + (va >>> 4)) | 0), (Ka = 2);
                                                                    break g;
                                                                }
                                                                if (7 < (Ca = 255 & Sa) >>> (va = 0)) continue;
                                                                switch ((Ca - 1) | 0) {
                                                                    default:
                                                                    case 0:
                                                                        q[q[(64 + Ba) >> 2] >> 2] = Oa;
                                                                        continue;
                                                                    case 1:
                                                                        (Ca = q[(64 + Ba) >> 2]), (q[Ca >> 2] = Oa), (q[(Ca + 4) >> 2] = Oa >> 31);
                                                                        continue;
                                                                    case 2:
                                                                        p[q[(64 + Ba) >> 2] >> 1] = Oa;
                                                                        continue;
                                                                    case 3:
                                                                        o[q[(64 + Ba) >> 2]] = Oa;
                                                                        continue;
                                                                    case 5:
                                                                        q[q[(64 + Ba) >> 2] >> 2] = Oa;
                                                                        continue;
                                                                    case 4:
                                                                        continue;
                                                                    case 6:
                                                                }
                                                                (Ca = q[(64 + Ba) >> 2]), (q[Ca >> 2] = Oa), (q[(Ca + 4) >> 2] = Oa >> 31);
                                                                continue;
                                                            }
                                                            (Ia = q[(64 + Ba) >> 2]), (va = q[(68 + Ba) >> 2]), (Pa = 3360);
                                                        }
                                                        Ia = ga(Ia, va, Qa);
                                                    }
                                                    (Fa = -1 < (0 | Da) ? -65537 & Fa : Fa),
                                                        (Da = !!((Ja = va = q[(68 + Ba) >> 2]) | (Ma = q[(64 + Ba) >> 2])) | Da ? ((0 | (va = (!(Ja | Ma) + ((Qa - Ia) | 0)) | 0)) < (0 | Da) ? Da : va) : ((Ia = Qa), 0));
                                                }
                                                _(a, 32, (va = (0 | Na) < (0 | (Ca = ((Da = (0 | Da) < (0 | (Ja = (Ca - Ia) | 0)) ? Ja : Da) + Ka) | 0)) ? Ca : Na), Ca, Fa),
                                                    Z(a, Pa, Ka),
                                                    _(a, 48, va, Ca, 65536 ^ Fa),
                                                    _(a, 48, Da, Ja, 0),
                                                    Z(a, Ia, Ja),
                                                    _(a, 32, va, Ca, 8192 ^ Fa);
                                                continue;
                                            }
                                            break;
                                        }
                                        Ka = 0;
                                        break a;
                                    }
                                    Ka = -1;
                                }
                                return (L = (80 + Ba) | 0), Ka;
                            }
                            function sa(a) {
                                var ya,
                                    va = 0,
                                    wa = 0,
                                    xa = 0,
                                    za = 0,
                                    xa = 4,
                                    wa = 1439;
                                a: if ((va = r[0 | a])) {
                                    for (; !((0 | (ya = r[0 | wa])) != (0 | va) || !(xa = (xa + -1) | 0) | !ya); ) if (((wa = (wa + 1) | 0), (va = r[(a + 1) | 0]), (a = (a + 1) | 0), !va)) break a;
                                    za = va;
                                }
                                return ((255 & za) - r[0 | wa]) | 0;
                            }
                            function ta(a, Aa, Ea) {
                                var La,
                                    Ga,
                                    Ha = 0,
                                    Ua = 0,
                                    Va = 0;
                                (q[(L = Ga = (L - 240) | 0) >> 2] = a), (Ua = 1);
                                a: if (!((0 | Aa) < 2))
                                    for (Ha = a; ; ) {
                                        if (((Ha = ((La = (Ha + -4) | 0) - q[(((Va = (Aa + -2) | 0) << 2) + Ea) >> 2]) | 0), 0 <= (0 | n[5](a, Ha)) && -1 < (0 | n[5](a, La)))) break a;
                                        if (((a = ((Ua << 2) + Ga) | 0), 0 <= (0 | n[5](Ha, La)) ? ((q[a >> 2] = Ha), (Va = (Aa + -1) | 0)) : (Ha = q[a >> 2] = La), (Ua = (Ua + 1) | 0), (0 | Va) < 2)) break a;
                                        (a = q[Ga >> 2]), (Aa = Va);
                                    }
                                Na(Ga, Ua), (L = (240 + Ga) | 0);
                            }
                            function ua(a) {
                                var Ea,
                                    _a,
                                    Aa = 0;
                                if (
                                    (x(0),
                                    (function (a) {
                                        var Hg, Ig;
                                        q[(a + 428) >> 2] &&
                                            ((Ig = q[(a + 332) >> 2]),
                                            $(q[(a + 460) >> 2], q[(a + 436) >> 2], (Hg = Ig << 2)),
                                            $(q[(a + 464) >> 2], q[(a + 440) >> 2], Hg),
                                            $(q[(a + 468) >> 2], q[(a + 448) >> 2], Hg),
                                            r[(q[a >> 2] + 4) | 0] < 4 || ($(q[(a + 472) >> 2], q[(a + 452) >> 2], (Hg = Ig << 4)), $(q[(a + 476) >> 2], q[(a + 456) >> 2], Hg)));
                                    })(a),
                                    (function (a) {
                                        var he,
                                            ie,
                                            je,
                                            ce = 0,
                                            de = x(0),
                                            ee = x(0),
                                            fe = 0,
                                            ge = x(0);
                                        x(0), x(0);
                                        if (1 <= (0 | (fe = q[a >> 2])))
                                            for (
                                                je = ((ce = q[(a + 4) >> 2]) + w(fe, 52)) | 0, a = q[(a + 12) >> 2];
                                                (de = u[a >> 2]),
                                                    u[(ce + 44) >> 2] !=
                                                    (de = (he = q[(ce + 16) >> 2])
                                                        ? ((ee = de),
                                                          (de = u[(ce + 4) >> 2]),
                                                          (ge = u[(ce + 12) >> 2]),
                                                          (ee = x(x(ee - de) / ge)),
                                                          (ie = x(C(ee))),
                                                          (fe = x(y(ie)) < x(2147483648) ? ~~ie : -2147483648),
                                                          x(de + x(ge * x(ee - x(0 | fe)))))
                                                        : ((ge = u[(ce + 4) >> 2]), (ee = u[(ce + 8) >> 2]), de < ge ? ge : ee < de ? ee : de))
                                                        ? ((u[(ce + 44) >> 2] = de), (q[(ce + 48) >> 2] = 1))
                                                        : (q[(ce + 48) >> 2] = 0),
                                                    he || (u[a >> 2] = de),
                                                    (a = (a + 4) | 0),
                                                    (ce = (ce + 52) | 0) >>> 0 < je >>> 0;

                                            );
                                    })((a + 540) | 0),
                                    (function (a) {
                                        var Td,
                                            Ud,
                                            Zd,
                                            $d,
                                            ae,
                                            be,
                                            Od = 0,
                                            Pd = 0,
                                            Qd = x(0),
                                            Rd = 0,
                                            Sd = x(0),
                                            Vd = (x(0), x(0), 0),
                                            Wd = x(0),
                                            Xd = 0,
                                            Yd = 0,
                                            _d = 0;
                                        x(0);
                                        if (1 <= (0 | (Rd = q[(a + 540) >> 2])))
                                            for (ae = ((Vd = q[(a + 544) >> 2]) + w(Rd, 52)) | 0, be = q[(a + 644) >> 2]; ; ) {
                                                a: if (!(q[Vd >> 2] || (0 | (Rd = q[(Vd + 32) >> 2])) < 1))
                                                    if (((Zd = ((a = q[(Vd + 28) >> 2]) + w(Rd, 28)) | 0), ($d = u[(Vd + 24) >> 2]), (Ud = u[(Vd + 20) >> 2]), (Td = u[(Vd + 44) >> 2]), be))
                                                        for (;;) {
                                                            Wd = x((Yd = 0));
                                                            h: {
                                                                i: {
                                                                    j: {
                                                                        if ((0 | (Pd = q[a >> 2])) < 1) Od = Rd = 0;
                                                                        else if (((Xd = q[(a + 4) >> 2]), (Sd = u[Xd >> 2]), (Qd = x(Sd - Ud)), 1 == (0 | Pd))) (Rd = ((Td < x(Ud + Sd)) ^ 1) | ((Qd < Td) ^ 1)), (Od = 0);
                                                                        else {
                                                                            if (Td < Qd) {
                                                                                (Rd = 1), (Od = 0);
                                                                                break i;
                                                                            }
                                                                            if (((Rd = 0), Td < x(Ud + Sd))) Od = 0;
                                                                            else {
                                                                                if (((Od = 1), (Qd = u[(Xd + 4) >> 2]), !(Td < x(Ud + Qd))))
                                                                                    for (;;) {
                                                                                        if ((0 | Pd) == (0 | (Od = (Od + 1) | 0))) break j;
                                                                                        if (((Sd = Qd), (Qd = u[(Xd + (Od << 2)) >> 2]), Td < x(Ud + Qd))) break;
                                                                                    }
                                                                                x(Qd - Ud) < Td || ((Od = (Od + -1) | 0), (Qd = x(Qd - Sd)) < $d) || (Wd = x(x(Td - Sd) / Qd));
                                                                            }
                                                                        }
                                                                        if (Rd) break i;
                                                                        if (((Xd = Pd = 1), q[(a + 16) >> 2])) break h;
                                                                        break i;
                                                                    }
                                                                    (Od = (Pd + -1) | 0), (Rd = 1);
                                                                }
                                                                (Xd = ((Pd = (Sd = u[(a + 12) >> 2]) != Wd) & ((Wd == x(0)) | (Sd == x(0)))) | (q[(a + 8) >> 2] != (0 | Od))), (Yd = Rd);
                                                            }
                                                            if (((q[(a + 20) >> 2] = Xd), (q[(a + 24) >> 2] = Pd), (u[(a + 12) >> 2] = Wd), (q[(a + 16) >> 2] = Yd), (q[(a + 8) >> 2] = Od), !((a = (a + 28) | 0) >>> 0 < Zd >>> 0))) break;
                                                        }
                                                    else {
                                                        if (!q[(Vd + 48) >> 2]) for (;;) if (((q[(a + 20) >> 2] = 0), !((a = (a + 28) | (q[(a + 24) >> 2] = 0)) >>> 0 < Zd >>> 0))) break a;
                                                        for (;;) {
                                                            Wd = x((Yd = 0));
                                                            b: {
                                                                c: {
                                                                    d: {
                                                                        e: if (!(((Pd = 0) | (Od = q[(Xd = a) >> 2])) < 1)) {
                                                                            if (((Rd = q[(a + 4) >> 2]), (Sd = u[Rd >> 2]), (Qd = x(Sd - Ud)), 1 != (0 | Od))) {
                                                                                if (!(Td < Qd)) {
                                                                                    if (((Pd = 0), Td < x(Ud + Sd))) break e;
                                                                                    Pd = 1;
                                                                                    f: if (((Qd = u[(Rd + 4) >> 2]), !(Td < x(Ud + Qd)))) {
                                                                                        for (Od = (Od + -1) | 0; (Sd = Qd), (0 | Od) != (0 | Pd); ) if (((Qd = u[(Rd + ((Pd = (Pd + 1) | 0) << 2)) >> 2]), Td < x(Ud + Qd))) break f;
                                                                                        Rd = 1;
                                                                                        break c;
                                                                                    }
                                                                                    if (((Rd = 0), x(Qd - Ud) < Td)) {
                                                                                        Od = Pd;
                                                                                        break d;
                                                                                    }
                                                                                    if (((Od = (Pd + -1) | 0), (Qd = x(Qd - Sd)) < $d)) break d;
                                                                                    Wd = x(x(Td - Sd) / Qd);
                                                                                    break d;
                                                                                }
                                                                                (Rd = 1), (Od = 0);
                                                                                break c;
                                                                            }
                                                                            Pd = ((Td < x(Ud + Sd)) ^ 1) | ((Qd < Td) ^ 1);
                                                                        }
                                                                        (Rd = Pd), (Od = 0);
                                                                    }
                                                                    if (!Rd && ((_d = Pd = 1), q[(a + 16) >> 2])) break b;
                                                                }
                                                                (Yd = Rd), (_d = ((Pd = (Sd = u[(a + 12) >> 2]) != Wd) & ((Wd == x(0)) | (Sd == x(0)))) | (q[(a + 8) >> 2] != (0 | Od)));
                                                            }
                                                            if (((q[(Xd + 20) >> 2] = _d), (q[(a + 24) >> 2] = Pd), (u[(a + 12) >> 2] = Wd), (q[(a + 16) >> 2] = Yd), (q[(a + 8) >> 2] = Od), !((a = (a + 28) | 0) >>> 0 < Zd >>> 0))) break;
                                                        }
                                                    }
                                                if (!((Vd = (Vd + 52) | 0) >>> 0 < ae >>> 0)) break;
                                            }
                                    })(a),
                                    (function (a) {
                                        var od,
                                            pd,
                                            qd,
                                            rd,
                                            sd,
                                            hd = 0,
                                            id = x(0),
                                            jd = 0,
                                            kd = 0,
                                            ld = x(0),
                                            md = 0,
                                            nd = x(0);
                                        x(0);
                                        if (!(r[(q[a >> 2] + 4) | 0] < 4 || (0 | (hd = q[(a + 540) >> 2])) < 1))
                                            for (rd = ((md = q[(a + 544) >> 2]) + w(hd, 52)) | 0, sd = q[(a + 644) >> 2]; ; ) {
                                                b: if (1 == q[md >> 2] && !((0 | (hd = q[(md + 40) >> 2])) < 1))
                                                    if (((pd = ((a = q[(md + 36) >> 2]) + w(hd, 28)) | 0), (od = u[(md + 44) >> 2]), sd))
                                                        for (;;) {
                                                            nd = x((hd = 0));
                                                            d: if (!((0 | (kd = q[a >> 2])) < 2 || ((jd = q[(a + 4) >> 2]), od <= (id = u[jd >> 2])))) {
                                                                hd = 1;
                                                                e: if (!(od < (ld = u[(jd + 4) >> 2]))) {
                                                                    for (; (id = ld), (0 | kd) != (0 | (hd = (hd + 1) | 0)); ) if (od < (ld = u[(jd + (hd << 2)) >> 2])) break e;
                                                                    hd = (kd + -1) | 0;
                                                                    break d;
                                                                }
                                                                (nd = x(x(od - id) / x(ld - id))), (hd = (hd + -1) | 0);
                                                            }
                                                            if (
                                                                ((id = u[(a + 16) >> 2]),
                                                                (u[(a + 16) >> 2] = nd),
                                                                (kd = q[(a + 12) >> 2]),
                                                                (q[(a + 12) >> 2] = hd),
                                                                (q[(a + 24) >> 2] = jd = id != nd),
                                                                (q[(a + 20) >> 2] = (jd & ((nd == x(0)) | (id == x(0)))) | ((0 | hd) != (0 | kd))),
                                                                !((a = (a + 28) | 0) >>> 0 < pd >>> 0))
                                                            )
                                                                break;
                                                        }
                                                    else {
                                                        if (!q[(md + 48) >> 2]) for (;;) if (((q[(a + 20) >> 2] = 0), !((a = (a + 28) | (q[(a + 24) >> 2] = 0)) >>> 0 < pd >>> 0))) break b;
                                                        for (;;) {
                                                            nd = x((kd = 0));
                                                            c: if (!((0 | (qd = q[a >> 2])) < 2 || ((jd = q[(a + 4) >> 2]), od <= (id = u[jd >> 2])))) {
                                                                if (((hd = 1), !(od < (ld = u[(jd + 4) >> 2]))))
                                                                    for (kd = (qd + -1) | 0; ; ) {
                                                                        if (((id = ld), (0 | hd) == (0 | kd))) break c;
                                                                        if (od < (ld = u[(jd + ((hd = (hd + 1) | 0) << 2)) >> 2])) break;
                                                                    }
                                                                (nd = x(x(od - id) / x(ld - id))), (kd = (hd + -1) | 0);
                                                            }
                                                            if (
                                                                ((id = u[(a + 16) >> 2]),
                                                                (u[(a + 16) >> 2] = nd),
                                                                (hd = q[(a + 12) >> 2]),
                                                                (q[(a + 12) >> 2] = kd),
                                                                (q[(a + 24) >> 2] = jd = id != nd),
                                                                (q[(a + 20) >> 2] = (jd & ((nd == x(0)) | (id == x(0)))) | ((0 | hd) != (0 | kd))),
                                                                !((a = (a + 28) | 0) >>> 0 < pd >>> 0))
                                                            )
                                                                break;
                                                        }
                                                    }
                                                if (!((md = (md + 52) | 0) >>> 0 < rd >>> 0)) break;
                                            }
                                    })(a),
                                    (function (a) {
                                        var Fd,
                                            Gd,
                                            Jd,
                                            Kd,
                                            Ld,
                                            Md,
                                            Nd,
                                            td = 0,
                                            ud = 0,
                                            vd = 0,
                                            wd = 0,
                                            xd = 0,
                                            yd = 0,
                                            zd = 0,
                                            Ad = x(0),
                                            Bd = 0,
                                            Dd = 0,
                                            Ed = 0,
                                            Hd = 0,
                                            Id = 0;
                                        if (1 <= (0 | (ud = q[(a + 564) >> 2])))
                                            for (Md = ((xd = q[(a + 568) >> 2]) + w(ud, 36)) | 0, Kd = q[(a + 644) >> 2]; ; ) {
                                                a: {
                                                    if (!(yd = ((vd = wd = ud = 0) | (Gd = q[(xd + 4) >> 2])) < 1))
                                                        for (Bd = q[xd >> 2], a = Hd = 0; ; ) {
                                                            if (((td = q[(Bd + (a << 2)) >> 2]), q[(td + 16) >> 2])) {
                                                                (td = 1), (Id = 0);
                                                                break a;
                                                            }
                                                            if (((vd = vd || q[(td + 24) >> 2]), (ud = ud || q[(td + 20) >> 2]), (wd = ((u[(td + 12) >> 2] != x(0)) + wd) | 0), (0 | Gd) == (0 | (a = (a + 1) | 0)))) break;
                                                        }
                                                    if (((td = 0), (Hd = Kd ? 1 : vd) | (Id = Kd ? 1 : ud) && ((q[(xd + 12) >> 2] = Bd = 1 << wd), 31 != (0 | wd)))) {
                                                        for (
                                                            ud = q[(xd + 20) >> 2],
                                                                Ld = q[xd >> 2],
                                                                vd = ((a = q[(xd + 16) >> 2]) + (zd = Bd << 2)) | 0,
                                                                vd = ca(a, 0, (4 + (((-1 ^ a) + ((a = (a + 4) | 0) >>> 0 < vd >>> 0 ? vd : a)) | 0)) & -4),
                                                                zd = (ud + zd) | 0,
                                                                a = ud;
                                                            (q[a >> 2] = 1065353216), (a = (a + 4) | 0) >>> 0 < zd >>> 0;

                                                        );
                                                        if (!yd) {
                                                            if (((yd = 0), (zd = td = 1), wd))
                                                                for (;;) {
                                                                    if (((wd = q[((yd << 2) + Ld) >> 2]), (Dd = q[(wd + 8) >> 2]), (Ed = w(Dd, td)), (Ad = u[(wd + 12) >> 2]) != x((a = 0)))) {
                                                                        for (
                                                                            q[vd >> 2] = Ed + q[vd >> 2], u[ud >> 2] = x(x(1) - Ad) * u[ud >> 2], Dd = w((Dd + (a = 1)) | 0, td);
                                                                            (Ad = u[(wd + 12) >> 2]),
                                                                                (Nd = q[(Jd = ((Fd = a << 2) + vd) | 0) >> 2]),
                                                                                (q[Jd >> 2] = Nd + ((Jd = a & zd) ? Dd : Ed)),
                                                                                (u[(Fd = (ud + Fd) | 0) >> 2] = (Jd ? Ad : x(x(1) - Ad)) * u[Fd >> 2]),
                                                                                (0 | Bd) != (0 | (a = (a + 1) | 0));

                                                                        );
                                                                        zd <<= 1;
                                                                    } else for (; (q[(Dd = (vd + (a << 2)) | 0) >> 2] = Ed + q[Dd >> 2]), (0 | Bd) != (0 | (a = (a + 1) | 0)); );
                                                                    if (((td = w(q[wd >> 2], td)), (0 | Gd) == (0 | (yd = (yd + 1) | 0)))) break;
                                                                }
                                                            else
                                                                for (;;) {
                                                                    if (((wd = q[((yd << 2) + Ld) >> 2]), (zd = w(q[(wd + 8) >> 2], td)), (Ad = u[(wd + 12) >> 2]) != x((a = 0))))
                                                                        (q[vd >> 2] = zd + q[vd >> 2]), (u[ud >> 2] = x(x(1) - Ad) * u[ud >> 2]);
                                                                    else for (; (q[(Ed = (vd + (a << 2)) | 0) >> 2] = zd + q[Ed >> 2]), (0 | Bd) != (0 | (a = (a + 1) | 0)); );
                                                                    if (((td = w(q[wd >> 2], td)), (0 | Gd) == (0 | (yd = (yd + 1) | 0)))) break;
                                                                }
                                                            td = 0;
                                                        }
                                                    }
                                                }
                                                if (((q[(xd + 32) >> 2] = td), (q[(xd + 24) >> 2] = Id), (q[(xd + 28) >> 2] = Hd), !((xd = (xd + 36) | 0) >>> 0 < Md >>> 0))) break;
                                            }
                                    })(a),
                                    (function (a) {
                                        var dd,
                                            ed,
                                            fd,
                                            gd,
                                            Tc = x(0),
                                            Uc = 0,
                                            Vc = 0,
                                            Wc = 0,
                                            Xc = 0,
                                            Yc = 0,
                                            Zc = x(0),
                                            _c = x(0),
                                            $c = x(0),
                                            ad = 0,
                                            bd = 0,
                                            cd = 0;
                                        if (!(r[(q[a >> 2] + 4) | 0] < 4 || (0 | (Uc = q[(a + 588) >> 2])) < 1))
                                            for (gd = ((Wc = q[(a + 592) >> 2]) + w(Uc, 48)) | 0, dd = q[(a + 644) >> 2]; ; ) {
                                                if (((a = q[Wc >> 2]), (bd = dd ? 1 : q[(a + 20) >> 2]) | (cd = dd ? 1 : q[(a + 24) >> 2]))) {
                                                    c: {
                                                        d: {
                                                            (Yc = Wc), (Xc = q[(a + 8) >> 2]), (Uc = q[(a + 12) >> 2]), (Tc = u[(a + 16) >> 2]), (a = (0 | Xc) != (0 | Uc));
                                                            e: {
                                                                if (Tc != x(0)) {
                                                                    if (((a = (Uc + 1) | 0), (0 | Uc) == (0 | Xc))) {
                                                                        (q[(Wc + 8) >> 2] = bd = 1), (Tc = x(x(1) - Tc)), (cd = 1);
                                                                        break e;
                                                                    }
                                                                    a = (0 | a) == (0 | Xc) ? 1 : 2;
                                                                }
                                                                if (((q[(Yc + 8) >> 2] = a), !cd)) break d;
                                                                a = Uc;
                                                            }
                                                            (u[(Wc + 24) >> 2] = Tc), (u[(Wc + 20) >> 2] = x(1) - Tc);
                                                            break c;
                                                        }
                                                        (cd = 0), (a = Uc);
                                                    }
                                                    bd ? ((q[(Wc + 12) >> 2] = a), (q[(Wc + 16) >> 2] = a + 1)) : (bd = 0);
                                                } else bd = cd = 0;
                                                g: if ((0 | (ed = q[(Wc + 36) >> 2])) < 1) $c = x(1);
                                                else {
                                                    if (((fd = q[(Wc + 40) >> 2]), (a = 0), ($c = x(1)), !dd))
                                                        for (;;) {
                                                            h: {
                                                                i: {
                                                                    if (((Uc = q[((a << 2) + fd) >> 2]), (Vc = q[Uc >> 2]))) {
                                                                        if (!q[(Vc + 48) >> 2]) {
                                                                            Tc = u[(Uc + 16) >> 2];
                                                                            break h;
                                                                        }
                                                                        if ((0 | (Xc = q[(Uc + 12) >> 2])) < 1) {
                                                                            (Tc = x(1)), (u[(Uc + 16) >> 2] = 1);
                                                                            break h;
                                                                        }
                                                                        if (((ad = q[(Uc + 8) >> 2]), 1 != (0 | Xc) && ((Zc = u[(Vc + 44) >> 2]), (Yc = q[(Uc + 4) >> 2]), !(Zc <= (_c = u[Yc >> 2]))))) break i;
                                                                        (Tc = u[ad >> 2]), (u[(Uc + 16) >> 2] = Tc);
                                                                        break h;
                                                                    }
                                                                    (q[(Uc + 16) >> 2] = 1065353216), (Tc = x(1));
                                                                    break h;
                                                                }
                                                                Vc = 1;
                                                                j: if (!(Zc < (Tc = u[(Yc + 4) >> 2]))) {
                                                                    for (; (_c = Tc), (0 | Xc) != (0 | (Vc = (Vc + 1) | 0)); ) if (Zc < (Tc = u[(Yc + (Vc << 2)) >> 2])) break j;
                                                                    (Tc = u[(((ad + (Xc << 2)) | 0) - 4) >> 2]), (u[(Uc + 16) >> 2] = Tc);
                                                                    break h;
                                                                }
                                                                (Yc = Uc), (Tc = x(x(Zc - _c) / x(Tc - _c))), (Tc = x(x(Tc * u[(Uc = (ad + (Vc << 2)) | 0) >> 2]) + x(u[(Uc + -4) >> 2] * x(x(1) - Tc)))), (u[(Yc + 16) >> 2] = Tc);
                                                            }
                                                            if ((($c = $c < Tc ? $c : Tc), (0 | ed) == (0 | (a = (a + 1) | 0)))) break g;
                                                        }
                                                    for (;;) {
                                                        (Uc = q[((a << 2) + fd) >> 2]), (Vc = q[Uc >> 2]), (Tc = x(1));
                                                        l: if (Vc && ((ad = q[(Uc + 12) >> 2]), (Tc = x(1)), !((0 | ad) < 1)) && ((Xc = q[(Uc + 8) >> 2]), (Tc = u[Xc >> 2]), 1 != (0 | ad))) {
                                                            m: {
                                                                if (((Zc = u[(Vc + 44) >> 2]), (Yc = q[(Uc + 4) >> 2]), Zc <= (_c = u[Yc >> 2]))) {
                                                                    Tc = u[Xc >> 2];
                                                                    break l;
                                                                }
                                                                if (((Vc = 1), !(Zc < (Tc = u[(Yc + 4) >> 2])))) {
                                                                    for (; (_c = Tc), (0 | ad) != (0 | (Vc = (Vc + 1) | 0)); ) if (Zc < (Tc = u[(Yc + (Vc << 2)) >> 2])) break m;
                                                                    Tc = u[(((Xc + (ad << 2)) | 0) - 4) >> 2];
                                                                    break l;
                                                                }
                                                            }
                                                            (Tc = x(x(Zc - _c) / x(Tc - _c))), (Tc = x(x(Tc * u[(Vc = (Xc + (Vc << 2)) | 0) >> 2]) + x(u[(Vc + -4) >> 2] * x(x(1) - Tc))));
                                                        }
                                                        if ((($c = $c < (u[(Uc + 16) >> 2] = Tc) ? $c : Tc), (0 | ed) == (0 | (a = (a + 1) | 0)))) break;
                                                    }
                                                }
                                                if (((q[(Wc + 32) >> 2] = cd), (q[(Wc + 28) >> 2] = bd), (u[(Wc + 44) >> 2] = $c), !((Wc = (Wc + 48) | 0) >>> 0 < gd >>> 0))) break;
                                            }
                                    })(a),
                                    1 <= (0 | (Ea = q[(a + 4) >> 2])))
                                )
                                    for (Ea = ((Aa = q[(a + 52) >> 2]) + (Ea << 2)) | 0; (_a = u[Aa >> 2]), (u[Aa >> 2] = _a < x(0) ? x(0) : x(A(_a, x(1)))), (Aa = (Aa + 4) | 0) >>> 0 < Ea >>> 0; );
                                !(function (a) {
                                    var Ce,
                                        De,
                                        Ee,
                                        Ae = 0,
                                        Be = 0;
                                    if (1 <= (0 | (Be = q[(a + 4) >> 2])))
                                        for (
                                            Ee = ((Ae = q[(a + 8) >> 2]) + w(Be, 12)) | 0, a = Ce = q[(a + 40) >> 2];
                                            (Be = 0),
                                                q[(Ae + 8) >> 2] && ((De = q[(Ae + 4) >> 2]), (!q[((De << 2) + Ce) >> 2] && -1 != (0 | De)) || (Be = !q[(q[Ae >> 2] + 32) >> 2])),
                                                (q[a >> 2] = Be),
                                                (a = (a + 4) | 0),
                                                (Ae = (Ae + 12) | 0) >>> 0 < Ee >>> 0;

                                        );
                                })(a),
                                    (function (a) {
                                        var og,
                                            sg,
                                            tg,
                                            ug,
                                            vg,
                                            wg,
                                            xg,
                                            mg = 0,
                                            ng = 0,
                                            pg = 0,
                                            qg = 0,
                                            rg = 0;
                                        if (1 <= (0 | (sg = q[(a + 4) >> 2])))
                                            for (ug = q[(a + 8) >> 2], tg = q[a >> 2], vg = q[(tg + 724) >> 2]; ; ) {
                                                if (
                                                    ((og = q[(w(qg, 12) + ug) >> 2]),
                                                    (q[(og + 28) >> 2] || q[(og + 24) >> 2]) && ((q[((mg = qg << 2) + q[(a + 28) >> 2]) >> 2] = q[(og + 12) >> 2]), q[(og + 24) >> 2]) && !((0 | (pg = q[(og + 12) >> 2])) < 1))
                                                )
                                                    for (
                                                        pg = ((ng = q[(og + 16) >> 2]) + (pg << 2)) | 0, wg = q[(mg + vg) >> 2], mg = (q[(a + 36) >> 2] + (rg << 2)) | 0, xg = q[(tg + 976) >> 2];
                                                        (q[mg >> 2] = q[(((q[ng >> 2] + wg) << 2) + xg) >> 2]), (mg = (mg + 4) | 0), (ng = (ng + 4) | 0) >>> 0 < pg >>> 0;

                                                    );
                                                if (q[(og + 28) >> 2] && !((0 | (mg = q[(og + 12) >> 2])) < 1))
                                                    for (pg = ((ng = q[(og + 20) >> 2]) + (mg << 2)) | 0, mg = (q[(a + 32) >> 2] + (rg << 2)) | 0; (q[mg >> 2] = q[ng >> 2]), (mg = (mg + 4) | 0), (ng = (ng + 4) | 0) >>> 0 < pg >>> 0; );
                                                if (((rg = (q[(og + 8) >> 2] + rg) | 0), (0 | sg) == (0 | (qg = (qg + 1) | 0)))) break;
                                            }
                                    })(a),
                                    n[q[1816]]((a + 12) | 0, q[(a + 36) >> 2], q[(a + 44) >> 2], q[(a + 40) >> 2]),
                                    (function (a) {
                                        var ue,
                                            ve,
                                            we,
                                            xe,
                                            ye,
                                            ze,
                                            re = 0,
                                            se = 0,
                                            te = 0;
                                        if (1 <= (0 | (te = q[(a + 304) >> 2])))
                                            for (
                                                we = ((re = q[(a + 308) >> 2]) + (te << 5)) | 0, xe = q[(a + 264) >> 2], ye = q[(a + 144) >> 2], ze = q[(a + 40) >> 2], te = ve = q[(a + 312) >> 2];
                                                (ue = te),
                                                    (se = 0),
                                                    (a = se =
                                                        !q[(re + 28) >> 2] || (-1 != (0 | (a = q[(re + 4) >> 2])) && ((se = 0), !q[((a << 2) + ze) >> 2])) || (-1 != (0 | (a = q[(re + 8) >> 2])) && ((se = 0), !q[((a << 2) + ve) >> 2]))
                                                            ? se
                                                            : !q[(q[re >> 2] + 32) >> 2]),
                                                    (q[ue >> 2] = a),
                                                    (ue = q[(re + 12) >> 2]) >>> 0 <= 1 ? (ue - 1 ? (q[((q[(re + 16) >> 2] << 2) + ye) >> 2] = a) : (q[((q[(re + 16) >> 2] << 2) + xe) >> 2] = a)) : Y(4, 1372, 0),
                                                    (te = (te + 4) | 0),
                                                    (re = (re + 32) | 0) >>> 0 < we >>> 0;

                                            );
                                    })(a),
                                    (function (a) {
                                        var dg,
                                            eg,
                                            fg,
                                            gg,
                                            hg,
                                            ig,
                                            jg,
                                            kg,
                                            lg,
                                            Rf = 0,
                                            Sf = 0,
                                            Tf = 0,
                                            Uf = 0,
                                            Vf = 0,
                                            Wf = 0,
                                            Xf = 0,
                                            Yf = 0,
                                            Zf = 0,
                                            _f = 0,
                                            $f = 0,
                                            ag = 0,
                                            bg = 0,
                                            cg = 0,
                                            Vf = q[a >> 2];
                                        if (1 <= (0 | (Yf = q[(a + 56) >> 2]))) {
                                            for (Zf = q[(a + 60) >> 2], _f = q[(Vf + 1052) >> 2], $f = q[(Vf + 784) >> 2]; ; ) {
                                                if (
                                                    ((Rf = q[(Zf + w(Wf, 24)) >> 2]),
                                                    (q[(Rf + 28) >> 2] || q[(Rf + 24) >> 2]) && ((q[((Sf = Wf << 2) + q[(a + 80) >> 2]) >> 2] = q[(Rf + 12) >> 2]), q[(Rf + 24) >> 2]) && !((0 | (Uf = q[(Rf + 12) >> 2])) < 1))
                                                )
                                                    for (
                                                        ag = ((Tf = q[(Rf + 16) >> 2]) + (Uf << 2)) | 0, bg = q[(Sf + $f) >> 2], Sf = ((Uf = Xf << 2) + q[(a + 92) >> 2]) | 0, Uf = (Uf + q[(a + 88) >> 2]) | 0;
                                                        (cg = (bg + q[Tf >> 2]) << 2),
                                                            (q[Sf >> 2] = _f + (q[(cg + q[(Vf + 984) >> 2]) >> 2] << 2)),
                                                            (q[Uf >> 2] = q[(cg + q[(Vf + 980) >> 2]) >> 2]),
                                                            (Uf = (Uf + 4) | 0),
                                                            (Sf = (Sf + 4) | 0),
                                                            (Tf = (Tf + 4) | 0) >>> 0 < ag >>> 0;

                                                    );
                                                if (q[(Rf + 28) >> 2] && !((0 | (Sf = q[(Rf + 12) >> 2])) < 1))
                                                    for (Uf = ((Tf = q[(Rf + 20) >> 2]) + (Sf << 2)) | 0, Sf = (q[(a + 84) >> 2] + (Xf << 2)) | 0; (q[Sf >> 2] = q[Tf >> 2]), (Sf = (Sf + 4) | 0), (Tf = (Tf + 4) | 0) >>> 0 < Uf >>> 0; );
                                                if (((Xf = (q[(Rf + 8) >> 2] + Xf) | 0), (0 | Yf) == (0 | (Wf = (Wf + 1) | 0)))) break;
                                            }
                                            Vf = q[a >> 2];
                                        }
                                        if (!(r[(Vf + 4) | 0] < 4 || (0 | (bg = q[(a + 56) >> 2])) < 1))
                                            for (cg = q[(Vf + 792) >> 2], dg = q[(a + 60) >> 2], Tf = Xf = 0; ; ) {
                                                if (((Wf = q[(w(Tf, 24) + dg) >> 2]), q[(Wf + 24) >> 2] && !((0 | (Rf = q[(Wf + 12) >> 2])) < 1)))
                                                    for (
                                                        eg = ((Sf = q[(Wf + 16) >> 2]) + (Rf << 2)) | 0,
                                                            fg = q[(cg + (Tf << 2)) >> 2],
                                                            Uf = ((Rf = Xf << 2) + q[(a + 96) >> 2]) | 0,
                                                            Yf = (Rf + q[(a + 100) >> 2]) | 0,
                                                            Zf = (Rf + q[(a + 104) >> 2]) | 0,
                                                            _f = (Rf + q[(a + 108) >> 2]) | 0,
                                                            $f = (Rf + q[(a + 112) >> 2]) | 0,
                                                            ag = (Rf + q[(a + 116) >> 2]) | 0,
                                                            gg = q[(Vf + 1308) >> 2],
                                                            hg = q[(Vf + 1304) >> 2],
                                                            ig = q[(Vf + 1300) >> 2],
                                                            jg = q[(Vf + 1296) >> 2],
                                                            kg = q[(Vf + 1292) >> 2],
                                                            lg = q[(Vf + 1288) >> 2];
                                                        (Rf = (q[Sf >> 2] + fg) << 2),
                                                            (q[Uf >> 2] = q[(Rf + lg) >> 2]),
                                                            (q[Yf >> 2] = q[(Rf + kg) >> 2]),
                                                            (q[Zf >> 2] = q[(Rf + jg) >> 2]),
                                                            (q[_f >> 2] = q[(Rf + ig) >> 2]),
                                                            (q[$f >> 2] = q[(Rf + hg) >> 2]),
                                                            (q[ag >> 2] = q[(Rf + gg) >> 2]),
                                                            (ag = (ag + 4) | 0),
                                                            ($f = ($f + 4) | 0),
                                                            (_f = (_f + 4) | 0),
                                                            (Zf = (Zf + 4) | 0),
                                                            (Yf = (Yf + 4) | 0),
                                                            (Uf = (Uf + 4) | 0),
                                                            (Sf = (Sf + 4) | 0) >>> 0 < eg >>> 0;

                                                    );
                                                if (((Xf = (q[(Wf + 8) >> 2] + Xf) | 0), (0 | bg) == (0 | (Tf = (Tf + 1) | 0)))) break;
                                            }
                                    })(a),
                                    (function (a) {
                                        var uf = 0,
                                            vf = 0,
                                            xf = 0,
                                            yf = 0,
                                            zf = 0,
                                            Af = 0,
                                            Bf = 0,
                                            Cf = 0,
                                            Df = 0,
                                            Ef = 0,
                                            Ff = 0,
                                            Gf = 0,
                                            Hf = 0,
                                            If = 0,
                                            Jf = 0,
                                            Kf = 0,
                                            Lf = 0,
                                            Mf = 0,
                                            Nf = 0,
                                            Of = 0,
                                            Pf = 0,
                                            Qf = q[(a + 168) >> 2],
                                            wf = q[a >> 2];
                                        if (1 <= (0 | (Hf = q[(a + 164) >> 2])))
                                            for (Jf = q[(wf + 816) >> 2]; ; ) {
                                                if (((xf = q[(w(Bf, 12) + Qf) >> 2]), (q[(xf + 28) >> 2] || q[(xf + 24) >> 2]) && ((q[((Cf = Bf << 2) + q[(a + 188) >> 2]) >> 2] = q[(xf + 12) >> 2]), q[(xf + 24) >> 2]))) {
                                                    if (((vf = q[(xf + 16) >> 2]), (If = q[(Cf + Jf) >> 2]), 1 <= (0 | (uf = q[(xf + 12) >> 2]))))
                                                        for (
                                                            Kf = (vf + (uf << 2)) | 0,
                                                                yf = ((uf = Af << 2) + q[(a + 200) >> 2]) | 0,
                                                                Df = (uf + q[(a + 204) >> 2]) | 0,
                                                                Ef = (uf + q[(a + 208) >> 2]) | 0,
                                                                Ff = (uf + q[(a + 212) >> 2]) | 0,
                                                                Gf = (uf + q[(a + 196) >> 2]) | 0,
                                                                Lf = q[(wf + 996) >> 2],
                                                                Mf = q[(wf + 1012) >> 2],
                                                                Nf = q[(wf + 1008) >> 2],
                                                                Of = q[(wf + 1004) >> 2],
                                                                Pf = q[(wf + 1e3) >> 2],
                                                                uf = vf;
                                                            (zf = (If + q[uf >> 2]) << 2),
                                                                (q[yf >> 2] = q[(zf + Pf) >> 2]),
                                                                (q[Df >> 2] = q[(zf + Of) >> 2]),
                                                                (q[Ef >> 2] = q[(zf + Nf) >> 2]),
                                                                (q[Ff >> 2] = q[(zf + Mf) >> 2]),
                                                                (q[Gf >> 2] = q[(zf + Lf) >> 2]),
                                                                (Gf = (Gf + 4) | 0),
                                                                (Ff = (Ff + 4) | 0),
                                                                (Ef = (Ef + 4) | 0),
                                                                (Df = (Df + 4) | 0),
                                                                (yf = (yf + 4) | 0),
                                                                (uf = (uf + 4) | 0) >>> 0 < Kf >>> 0;

                                                        );
                                                    (uf = (If + q[vf >> 2]) << 2), (q[(Cf + q[(a + 288) >> 2]) >> 2] = q[(uf + q[(wf + 1016) >> 2]) >> 2]), (q[(Cf + q[(a + 292) >> 2]) >> 2] = q[(uf + q[(wf + 1020) >> 2]) >> 2]);
                                                }
                                                if (q[(xf + 28) >> 2] && !((0 | (vf = q[(xf + 12) >> 2])) < 1))
                                                    for (vf = ((uf = q[(xf + 20) >> 2]) + (vf << 2)) | 0, yf = (q[(a + 192) >> 2] + (Af << 2)) | 0; (q[yf >> 2] = q[uf >> 2]), (yf = (yf + 4) | 0), (uf = (uf + 4) | 0) >>> 0 < vf >>> 0; );
                                                if (((Af = (q[(xf + 8) >> 2] + Af) | 0), (0 | Hf) == (0 | (Bf = (Bf + 1) | 0)))) break;
                                            }
                                        if (!(r[(wf + 4) | 0] < 4 || (0 | (Cf = q[(a + 164) >> 2])) < 1))
                                            for (If = q[(wf + 824) >> 2], Af = xf = 0; ; ) {
                                                if (((zf = q[(w(Af, 12) + Qf) >> 2]), q[(zf + 24) >> 2] && !((0 | (uf = q[(zf + 12) >> 2])) < 1)))
                                                    for (
                                                        Hf = ((yf = q[(zf + 16) >> 2]) + (uf << 2)) | 0,
                                                            Jf = q[(If + (Af << 2)) >> 2],
                                                            Df = ((vf = xf << 2) + q[(a + 216) >> 2]) | 0,
                                                            Ef = (vf + q[(a + 220) >> 2]) | 0,
                                                            Ff = (vf + q[(a + 224) >> 2]) | 0,
                                                            Gf = (vf + q[(a + 228) >> 2]) | 0,
                                                            uf = (vf + q[(a + 232) >> 2]) | 0,
                                                            Bf = (vf + q[(a + 236) >> 2]) | 0,
                                                            Kf = q[(wf + 1308) >> 2],
                                                            Lf = q[(wf + 1304) >> 2],
                                                            Mf = q[(wf + 1300) >> 2],
                                                            Nf = q[(wf + 1296) >> 2],
                                                            Of = q[(wf + 1292) >> 2],
                                                            Pf = q[(wf + 1288) >> 2];
                                                        (vf = (Jf + q[yf >> 2]) << 2),
                                                            (q[Df >> 2] = q[(vf + Pf) >> 2]),
                                                            (q[Ef >> 2] = q[(vf + Of) >> 2]),
                                                            (q[Ff >> 2] = q[(vf + Nf) >> 2]),
                                                            (q[Gf >> 2] = q[(vf + Mf) >> 2]),
                                                            (q[uf >> 2] = q[(vf + Lf) >> 2]),
                                                            (q[Bf >> 2] = q[(vf + Kf) >> 2]),
                                                            (Bf = (Bf + 4) | 0),
                                                            (uf = (uf + 4) | 0),
                                                            (Gf = (Gf + 4) | 0),
                                                            (Ff = (Ff + 4) | 0),
                                                            (Ef = (Ef + 4) | 0),
                                                            (Df = (Df + 4) | 0),
                                                            (yf = (yf + 4) | 0) >>> 0 < Hf >>> 0;

                                                    );
                                                if (((xf = (q[(zf + 8) >> 2] + xf) | 0), (0 | Cf) == (0 | (Af = (Af + 1) | 0)))) break;
                                            }
                                    })(a),
                                    (function (a) {
                                        var wk,
                                            ok = 0,
                                            pk = 0,
                                            qk = 0,
                                            rk = 0,
                                            sk = 0,
                                            tk = 0,
                                            uk = 0,
                                            vk = 0,
                                            ok = (a - -64) | 0;
                                        if (
                                            (n[q[1815]](ok, q[(a + 88) >> 2], q[(a + 148) >> 2], q[(a + 144) >> 2]),
                                            n[q[1817]](ok, q[(a + 92) >> 2], q[(a + 152) >> 2], q[(q[a >> 2] + 796) >> 2], 2, q[(a + 144) >> 2]),
                                            !(
                                                r[(q[a >> 2] + 4) | 0] < 4 ||
                                                (n[q[1815]](ok, q[(a + 96) >> 2], q[(a + 120) >> 2], q[(a + 144) >> 2]),
                                                n[q[1815]](ok, q[(a + 100) >> 2], q[(a + 124) >> 2], q[(a + 144) >> 2]),
                                                n[q[1815]](ok, q[(a + 104) >> 2], q[(a + 128) >> 2], q[(a + 144) >> 2]),
                                                n[q[1815]](ok, q[(a + 108) >> 2], q[(a + 132) >> 2], q[(a + 144) >> 2]),
                                                n[q[1815]](ok, q[(a + 112) >> 2], q[(a + 136) >> 2], q[(a + 144) >> 2]),
                                                n[q[1815]](ok, q[(a + 116) >> 2], q[(a + 140) >> 2], q[(a + 144) >> 2]),
                                                (0 | (tk = q[(a + 56) >> 2])) < 1)
                                            ))
                                        ) {
                                            for (
                                                uk = q[(a + 128) >> 2], vk = q[(a + 124) >> 2], wk = q[(a + 120) >> 2], pk = q[(a + 156) >> 2], ok = 0;
                                                (q[((qk = rk << 2) + pk) >> 2] = q[((sk = ok << 2) + wk) >> 2]),
                                                    (q[(pk + (4 | qk)) >> 2] = q[(sk + vk) >> 2]),
                                                    (q[(pk + (8 | qk)) >> 2] = q[(sk + uk) >> 2]),
                                                    (rk = (rk + 4) | 0),
                                                    (0 | tk) != (0 | (ok = (ok + 1) | 0));

                                            );
                                            for (
                                                pk = q[(a + 160) >> 2], sk = q[(a + 140) >> 2], uk = q[(a + 136) >> 2], vk = q[(a + 132) >> 2], ok = a = 0;
                                                (q[((rk = a << 2) + pk) >> 2] = q[((qk = ok << 2) + vk) >> 2]),
                                                    (q[(pk + (4 | rk)) >> 2] = q[(qk + uk) >> 2]),
                                                    (q[(pk + (8 | rk)) >> 2] = q[(qk + sk) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (0 | tk) != (0 | (ok = (ok + 1) | 0));

                                            );
                                        }
                                    })(a),
                                    (function (a) {
                                        var nk,
                                            fk = 0,
                                            gk = 0,
                                            hk = 0,
                                            ik = 0,
                                            jk = 0,
                                            kk = 0,
                                            lk = 0,
                                            mk = 0,
                                            fk = (a + 172) | 0;
                                        if (
                                            (n[q[1815]](fk, q[(a + 196) >> 2], q[(a + 268) >> 2], q[(a + 264) >> 2]),
                                            n[q[1815]](fk, q[(a + 200) >> 2], q[(a + 284) >> 2], q[(a + 264) >> 2]),
                                            n[q[1815]](fk, q[(a + 204) >> 2], q[(a + 276) >> 2], q[(a + 264) >> 2]),
                                            n[q[1815]](fk, q[(a + 208) >> 2], q[(a + 280) >> 2], q[(a + 264) >> 2]),
                                            n[q[1815]](fk, q[(a + 212) >> 2], q[(a + 272) >> 2], q[(a + 264) >> 2]),
                                            !(
                                                r[(q[a >> 2] + 4) | 0] < 4 ||
                                                (n[q[1815]](fk, q[(a + 216) >> 2], q[(a + 240) >> 2], q[(a + 264) >> 2]),
                                                n[q[1815]](fk, q[(a + 220) >> 2], q[(a + 244) >> 2], q[(a + 264) >> 2]),
                                                n[q[1815]](fk, q[(a + 224) >> 2], q[(a + 248) >> 2], q[(a + 264) >> 2]),
                                                n[q[1815]](fk, q[(a + 228) >> 2], q[(a + 252) >> 2], q[(a + 264) >> 2]),
                                                n[q[1815]](fk, q[(a + 232) >> 2], q[(a + 256) >> 2], q[(a + 264) >> 2]),
                                                n[q[1815]](fk, q[(a + 236) >> 2], q[(a + 260) >> 2], q[(a + 264) >> 2]),
                                                (0 | (kk = q[(a + 164) >> 2])) < 1)
                                            ))
                                        ) {
                                            for (
                                                lk = q[(a + 248) >> 2], mk = q[(a + 244) >> 2], nk = q[(a + 240) >> 2], gk = q[(a + 296) >> 2], fk = 0;
                                                (q[((hk = ik << 2) + gk) >> 2] = q[((jk = fk << 2) + nk) >> 2]),
                                                    (q[(gk + (4 | hk)) >> 2] = q[(jk + mk) >> 2]),
                                                    (q[(gk + (8 | hk)) >> 2] = q[(jk + lk) >> 2]),
                                                    (ik = (ik + 4) | 0),
                                                    (0 | kk) != (0 | (fk = (fk + 1) | 0));

                                            );
                                            for (
                                                gk = q[(a + 300) >> 2], jk = q[(a + 260) >> 2], lk = q[(a + 256) >> 2], mk = q[(a + 252) >> 2], fk = a = 0;
                                                (q[((ik = a << 2) + gk) >> 2] = q[((hk = fk << 2) + mk) >> 2]),
                                                    (q[(gk + (4 | ik)) >> 2] = q[(hk + lk) >> 2]),
                                                    (q[(gk + (8 | ik)) >> 2] = q[(hk + jk) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (0 | kk) != (0 | (fk = (fk + 1) | 0));

                                            );
                                        }
                                    })(a),
                                    (function (a) {
                                        var oe,
                                            pe,
                                            qe,
                                            le = 0,
                                            me = 0,
                                            ne = 0;
                                        if (1 <= (0 | (me = q[(a + 332) >> 2])))
                                            for (
                                                oe = ((le = q[(a + 336) >> 2]) + w(me, 20)) | 0, pe = q[(a + 312) >> 2], qe = q[(a + 40) >> 2], a = q[(a + 424) >> 2];
                                                (me = 0),
                                                    q[(le + 12) >> 2] &&
                                                        ((ne = q[(le + 4) >> 2]), q[((ne << 2) + qe) >> 2] || -1 == (0 | ne)) &&
                                                        ((ne = q[(le + 8) >> 2]), q[((ne << 2) + pe) >> 2] || -1 == (0 | ne)) &&
                                                        (me = !q[(q[le >> 2] + 32) >> 2]),
                                                    (q[a >> 2] = me),
                                                    (a = (a + 4) | 0),
                                                    (le = (le + 20) | 0) >>> 0 < oe >>> 0;

                                            );
                                    })(a),
                                    (function (a) {
                                        var mf,
                                            nf,
                                            of,
                                            pf,
                                            qf,
                                            rf,
                                            sf,
                                            tf,
                                            Ye = 0,
                                            Ze = 0,
                                            _e = 0,
                                            $e = 0,
                                            af = 0,
                                            bf = 0,
                                            cf = 0,
                                            df = 0,
                                            ef = 0,
                                            ff = 0,
                                            gf = 0,
                                            hf = 0,
                                            jf = 0,
                                            kf = 0,
                                            lf = 0,
                                            $e = q[a >> 2];
                                        if (1 <= (0 | (ff = q[(a + 332) >> 2]))) {
                                            for (gf = q[(a + 336) >> 2], hf = q[($e + 1052) >> 2], jf = q[($e + 856) >> 2]; ; ) {
                                                if (
                                                    ((Ye = q[(gf + w(cf, 20)) >> 2]),
                                                    (q[(Ye + 28) >> 2] || q[(Ye + 24) >> 2]) && ((q[((Ze = cf << 2) + q[(a + 356) >> 2]) >> 2] = q[(Ye + 12) >> 2]), q[(Ye + 24) >> 2]) && !((0 | (af = q[(Ye + 12) >> 2])) < 1))
                                                )
                                                    for (
                                                        kf = ((_e = q[(Ye + 16) >> 2]) + (af << 2)) | 0,
                                                            lf = q[(Ze + jf) >> 2],
                                                            Ze = ((bf = df << 2) + q[(a + 372) >> 2]) | 0,
                                                            af = (bf + q[(a + 364) >> 2]) | 0,
                                                            bf = (bf + q[(a + 368) >> 2]) | 0;
                                                        (ef = (lf + q[_e >> 2]) << 2),
                                                            (q[Ze >> 2] = hf + (q[(ef + q[($e + 1040) >> 2]) >> 2] << 2)),
                                                            (q[af >> 2] = q[(ef + q[($e + 1032) >> 2]) >> 2]),
                                                            (q[bf >> 2] = q[(ef + q[($e + 1036) >> 2]) >> 2]),
                                                            (bf = (bf + 4) | 0),
                                                            (af = (af + 4) | 0),
                                                            (Ze = (Ze + 4) | 0),
                                                            (_e = (_e + 4) | 0) >>> 0 < kf >>> 0;

                                                    );
                                                if (q[(Ye + 28) >> 2] && !((0 | (Ze = q[(Ye + 12) >> 2])) < 1))
                                                    for (af = ((_e = q[(Ye + 20) >> 2]) + (Ze << 2)) | 0, Ze = (q[(a + 360) >> 2] + (df << 2)) | 0; (q[Ze >> 2] = q[_e >> 2]), (Ze = (Ze + 4) | 0), (_e = (_e + 4) | 0) >>> 0 < af >>> 0; );
                                                if (((df = (q[(Ye + 8) >> 2] + df) | 0), (0 | ff) == (0 | (cf = (cf + 1) | 0)))) break;
                                            }
                                            $e = q[a >> 2];
                                        }
                                        if (!(r[($e + 4) | 0] < 4 || (0 | (jf = q[(a + 332) >> 2])) < 1))
                                            for (kf = q[($e + 864) >> 2], lf = q[(a + 336) >> 2], _e = df = 0; ; ) {
                                                if (((cf = q[(lf + w(_e, 20)) >> 2]), q[(cf + 24) >> 2] && !((0 | (Ye = q[(cf + 12) >> 2])) < 1)))
                                                    for (
                                                        mf = ((Ze = q[(cf + 16) >> 2]) + (Ye << 2)) | 0,
                                                            nf = q[(kf + (_e << 2)) >> 2],
                                                            af = ((Ye = df << 2) + q[(a + 376) >> 2]) | 0,
                                                            bf = (Ye + q[(a + 380) >> 2]) | 0,
                                                            ef = (Ye + q[(a + 384) >> 2]) | 0,
                                                            ff = (Ye + q[(a + 388) >> 2]) | 0,
                                                            gf = (Ye + q[(a + 392) >> 2]) | 0,
                                                            hf = (Ye + q[(a + 396) >> 2]) | 0,
                                                            of = q[($e + 1308) >> 2],
                                                            pf = q[($e + 1304) >> 2],
                                                            qf = q[($e + 1300) >> 2],
                                                            rf = q[($e + 1296) >> 2],
                                                            sf = q[($e + 1292) >> 2],
                                                            tf = q[($e + 1288) >> 2];
                                                        (Ye = (q[Ze >> 2] + nf) << 2),
                                                            (q[af >> 2] = q[(Ye + tf) >> 2]),
                                                            (q[bf >> 2] = q[(Ye + sf) >> 2]),
                                                            (q[ef >> 2] = q[(Ye + rf) >> 2]),
                                                            (q[ff >> 2] = q[(Ye + qf) >> 2]),
                                                            (q[gf >> 2] = q[(Ye + pf) >> 2]),
                                                            (q[hf >> 2] = q[(Ye + of) >> 2]),
                                                            (hf = (hf + 4) | 0),
                                                            (gf = (gf + 4) | 0),
                                                            (ff = (ff + 4) | 0),
                                                            (ef = (ef + 4) | 0),
                                                            (bf = (bf + 4) | 0),
                                                            (af = (af + 4) | 0),
                                                            (Ze = (Ze + 4) | 0) >>> 0 < mf >>> 0;

                                                    );
                                                if (((df = (q[(cf + 8) >> 2] + df) | 0), (0 | jf) == (0 | (_e = (_e + 1) | 0)))) break;
                                            }
                                    })(a),
                                    (function (a) {
                                        var ek,
                                            tj = 0,
                                            vj = 0,
                                            wj = 0,
                                            $j = 0,
                                            ak = 0,
                                            bk = 0,
                                            ck = 0,
                                            dk = 0,
                                            tj = (a + 340) | 0;
                                        if (
                                            (n[q[1815]](tj, q[(a + 364) >> 2], q[(a + 448) >> 2], q[(a + 424) >> 2]),
                                            n[q[1816]](tj, q[(a + 368) >> 2], q[(a + 440) >> 2], q[(a + 424) >> 2]),
                                            n[q[1817]](tj, q[(a + 372) >> 2], q[(a + 444) >> 2], q[(q[a >> 2] + 892) >> 2], 2, q[(a + 424) >> 2]),
                                            !(
                                                r[(q[a >> 2] + 4) | 0] < 4 ||
                                                (n[q[1815]](tj, q[(a + 376) >> 2], q[(a + 400) >> 2], q[(a + 424) >> 2]),
                                                n[q[1815]](tj, q[(a + 380) >> 2], q[(a + 404) >> 2], q[(a + 424) >> 2]),
                                                n[q[1815]](tj, q[(a + 384) >> 2], q[(a + 408) >> 2], q[(a + 424) >> 2]),
                                                n[q[1815]](tj, q[(a + 388) >> 2], q[(a + 412) >> 2], q[(a + 424) >> 2]),
                                                n[q[1815]](tj, q[(a + 392) >> 2], q[(a + 416) >> 2], q[(a + 424) >> 2]),
                                                n[q[1815]](tj, q[(a + 396) >> 2], q[(a + 420) >> 2], q[(a + 424) >> 2]),
                                                (0 | (bk = q[(a + 332) >> 2])) < 1)
                                            ))
                                        ) {
                                            for (
                                                ck = q[(a + 408) >> 2], dk = q[(a + 404) >> 2], ek = q[(a + 400) >> 2], vj = q[(a + 452) >> 2], tj = 0;
                                                (q[((wj = $j << 2) + vj) >> 2] = q[((ak = tj << 2) + ek) >> 2]),
                                                    (q[(vj + (4 | wj)) >> 2] = q[(ak + dk) >> 2]),
                                                    (q[(vj + (8 | wj)) >> 2] = q[(ak + ck) >> 2]),
                                                    ($j = ($j + 4) | 0),
                                                    (0 | bk) != (0 | (tj = (tj + 1) | 0));

                                            );
                                            for (
                                                vj = q[(a + 456) >> 2], ak = q[(a + 420) >> 2], ck = q[(a + 416) >> 2], dk = q[(a + 412) >> 2], tj = a = 0;
                                                (q[(($j = a << 2) + vj) >> 2] = q[((wj = tj << 2) + dk) >> 2]),
                                                    (q[(vj + (4 | $j)) >> 2] = q[(wj + ck) >> 2]),
                                                    (q[(vj + (8 | $j)) >> 2] = q[(wj + ak) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (0 | bk) != (0 | (tj = (tj + 1) | 0));

                                            );
                                        }
                                    })(a),
                                    (function (a) {
                                        var Oe,
                                            Se,
                                            Te,
                                            Ue,
                                            Ve,
                                            We,
                                            Xe,
                                            Me = 0,
                                            Ne = 0,
                                            Pe = 0,
                                            Qe = 0,
                                            Re = 0;
                                        if (1 <= (0 | (Se = q[(a + 500) >> 2])))
                                            for (Ue = q[(a + 504) >> 2], Te = q[a >> 2], Ve = q[(Te + 1252) >> 2]; ; ) {
                                                if (
                                                    ((Oe = q[(w(Qe, 24) + Ue) >> 2]),
                                                    (q[(Oe + 28) >> 2] || q[(Oe + 24) >> 2]) && ((q[((Me = Qe << 2) + q[(a + 524) >> 2]) >> 2] = q[(Oe + 12) >> 2]), q[(Oe + 24) >> 2]) && !((0 | (Pe = q[(Oe + 12) >> 2])) < 1))
                                                )
                                                    for (
                                                        Pe = ((Ne = q[(Oe + 16) >> 2]) + (Pe << 2)) | 0, We = q[(Me + Ve) >> 2], Me = (q[(a + 532) >> 2] + (Re << 2)) | 0, Xe = q[(Te + 1284) >> 2];
                                                        (q[Me >> 2] = q[(((q[Ne >> 2] + We) << 2) + Xe) >> 2]), (Me = (Me + 4) | 0), (Ne = (Ne + 4) | 0) >>> 0 < Pe >>> 0;

                                                    );
                                                if (q[(Oe + 28) >> 2] && !((0 | (Me = q[(Oe + 12) >> 2])) < 1))
                                                    for (Pe = ((Ne = q[(Oe + 20) >> 2]) + (Me << 2)) | 0, Me = (q[(a + 528) >> 2] + (Re << 2)) | 0; (q[Me >> 2] = q[Ne >> 2]), (Me = (Me + 4) | 0), (Ne = (Ne + 4) | 0) >>> 0 < Pe >>> 0; );
                                                if (((Re = (q[(Oe + 8) >> 2] + Re) | 0), (0 | Se) == (0 | (Qe = (Qe + 1) | 0)))) break;
                                            }
                                    })(a),
                                    n[q[1815]]((a + 508) | 0, q[(a + 532) >> 2], q[(a + 536) >> 2], 0),
                                    (function (a) {
                                        var Ck,
                                            Dk,
                                            Ek,
                                            Fk,
                                            Gk,
                                            Hk,
                                            xk = x(0),
                                            yk = 0,
                                            zk = 0,
                                            Ak = 0,
                                            Bk = 0;
                                        x(0);
                                        if (((L = Ck = (L - 16) | 0), (Ak = q[a >> 2]), !(r[(Ak + 4) | 0] < 5 || (0 | (Bk = q[(a + 596) >> 2])) < 1)))
                                            for (Fk = ((zk = q[(a + 600) >> 2]) + w(Bk, 12)) | 0, Gk = q[(a + 44) >> 2], Bk = q[(Ak + 976) >> 2]; ; ) {
                                                if (((Ak = ((q[zk >> 2] << 2) + Gk) | 0), (xk = x(q[Ak >> 2])), 1 <= (0 | (yk = q[(zk + 4) >> 2]))))
                                                    for (
                                                        Hk = ((a = q[(zk + 8) >> 2]) + w(yk, 48)) | 0;
                                                        (yk = q[(a + 8) >> 2]) &&
                                                            ((Dk = (yk + -1) | 0) >>> 0 <= 1
                                                                ? ((yk = q[(a + 4) >> 2]),
                                                                  (Ek = u[(Bk + ((yk + q[(a + 12) >> 2]) << 2)) >> 2]),
                                                                  (xk = x(
                                                                      Dk - 1
                                                                          ? xk + x(u[(a + 44) >> 2] * x(Ek * u[(a + 20) >> 2]))
                                                                          : xk + x(u[(a + 44) >> 2] * x(x(Ek * u[(a + 20) >> 2]) + x(u[(Bk + ((yk + q[(a + 16) >> 2]) << 2)) >> 2] * u[(a + 24) >> 2])))
                                                                  )))
                                                                : ((q[Ck >> 2] = yk), Y(4, 1024, Ck))),
                                                            (a = (a + 48) | 0) >>> 0 < Hk >>> 0;

                                                    );
                                                if (
                                                    ((xk = (xk = x(xk + x(0.0010000000474974513))) < x(0) ? x(0) : x(A(xk, x(1e3)))),
                                                    (a = x(y(xk)) < x(2147483648) ? ~~xk : -2147483648),
                                                    (q[Ak >> 2] = a),
                                                    !((zk = (zk + 12) | 0) >>> 0 < Fk >>> 0))
                                                )
                                                    break;
                                            }
                                        L = (16 + Ck) | 0;
                                    })(a),
                                    (function (a) {
                                        var kj,
                                            lj,
                                            mj,
                                            nj,
                                            oj,
                                            pj,
                                            qj,
                                            rj,
                                            sj,
                                            cj = 0,
                                            ej = 0,
                                            gj = 0,
                                            hj = 0,
                                            ij = 0,
                                            jj = x(0);
                                        if (
                                            ((L = kj = (L - 16) | 0),
                                            (cj = q[a >> 2]),
                                            !(r[(cj + 4) | 0] < 4 || (va(a, q[(a + 604) >> 2], q[(a + 608) >> 2], q[(cj + 984) >> 2], q[(a + 152) >> 2], q[(cj + 796) >> 2]), (ej = q[a >> 2]), r[(ej + 4) | 0] < 5)))
                                        ) {
                                            if (((gj = q[(a + 608) >> 2]), (oj = q[(ej + 992) >> 2]), (pj = q[(ej + 988) >> 2]), 1 <= (0 | (cj = q[(a + 604) >> 2])))) {
                                                for (qj = (w(cj, 12) + gj) | 0, rj = q[(a + 148) >> 2], lj = q[(ej + 980) >> 2]; ; ) {
                                                    if (((mj = ((q[gj >> 2] << 2) + rj) | 0), (ij = q[mj >> 2]), 1 <= (0 | (hj = q[(gj + 4) >> 2]))))
                                                        for (
                                                            sj = ((cj = q[(gj + 8) >> 2]) + w(hj, 48)) | 0;
                                                            (hj = q[(cj + 8) >> 2]) &&
                                                                ((nj = (hj + -1) | 0) >>> 0 <= 1
                                                                    ? ((hj = q[(cj + 4) >> 2]),
                                                                      (jj = u[(((hj + q[(cj + 12) >> 2]) << 2) + lj) >> 2]),
                                                                      j(
                                                                          x(
                                                                              nj - 1
                                                                                  ? x(u[(cj + 44) >> 2] * x(jj * u[(cj + 20) >> 2])) + (f(0, ij), k())
                                                                                  : x(u[(cj + 44) >> 2] * x(x(jj * u[(cj + 20) >> 2]) + x(u[(((hj + q[(cj + 16) >> 2]) << 2) + lj) >> 2] * u[(cj + 24) >> 2]))) + (f(0, ij), k())
                                                                          )
                                                                      ),
                                                                      (ij = b[0]))
                                                                    : ((q[kj >> 2] = hj), Y(4, 1024, kj))),
                                                                (cj = (cj + 48) | 0) >>> 0 < sj >>> 0;

                                                        );
                                                    if ((f(0, ij), (jj = k()), (u[mj >> 2] = jj < x(0) ? x(0) : x(A(jj, x(1)))), !((gj = (gj + 12) | 0) >>> 0 < qj >>> 0))) break;
                                                }
                                                (gj = q[(a + 608) >> 2]), (cj = q[(a + 604) >> 2]);
                                            }
                                            fa(cj, gj, pj, q[(ej + 1288) >> 2], q[(ej + 1292) >> 2], q[(ej + 1296) >> 2], q[(a + 156) >> 2]),
                                                fa(q[(a + 604) >> 2], q[(a + 608) >> 2], oj, q[(ej + 1300) >> 2], q[(ej + 1304) >> 2], q[(ej + 1308) >> 2], q[(a + 160) >> 2]);
                                        }
                                        L = (16 + kj) | 0;
                                    })(a),
                                    (function (a) {
                                        var yi,
                                            ri = 0,
                                            si = 0,
                                            ti = 0,
                                            ui = 0,
                                            vi = 0,
                                            wi = x(0),
                                            xi = 0,
                                            zi = 0,
                                            Ai = 0,
                                            Bi = 0,
                                            Ci = 0,
                                            Di = 0,
                                            Ei = 0,
                                            Fi = 0;
                                        if (((L = yi = (L - 80) | 0), (vi = q[a >> 2]), !(r[(vi + 4) | 0] < 5))) {
                                            if (((Di = q[(vi + 1028) >> 2]), (Ei = q[(vi + 1024) >> 2]), (ti = si = q[(a + 616) >> 2]), !((0 | (ri = q[(a + 612) >> 2])) < 1))) {
                                                for (zi = (w(ri, 12) + si) | 0, Ai = q[(a + 276) >> 2], xi = q[(vi + 1004) >> 2]; ; ) {
                                                    if (((Bi = (Ai + (q[si >> 2] << 2)) | 0), (ti = q[Bi >> 2]), 1 <= (0 | (ui = q[(si + 4) >> 2]))))
                                                        for (
                                                            Fi = ((ri = q[(si + 8) >> 2]) + w(ui, 48)) | 0;
                                                            (ui = q[(ri + 8) >> 2]) &&
                                                                ((Ci = (ui + -1) | 0) >>> 0 <= 1
                                                                    ? ((ui = q[(ri + 4) >> 2]),
                                                                      (wi = u[(xi + ((ui + q[(ri + 12) >> 2]) << 2)) >> 2]),
                                                                      j(
                                                                          x(
                                                                              Ci - 1
                                                                                  ? x(u[(ri + 44) >> 2] * x(wi * u[(ri + 20) >> 2])) + (f(0, ti), k())
                                                                                  : x(u[(ri + 44) >> 2] * x(x(wi * u[(ri + 20) >> 2]) + x(u[(xi + ((ui + q[(ri + 16) >> 2]) << 2)) >> 2] * u[(ri + 24) >> 2]))) + (f(0, ti), k())
                                                                          )
                                                                      ),
                                                                      (ti = b[0]))
                                                                    : ((q[(64 + yi) >> 2] = ui), Y(4, 1024, (64 + yi) | 0))),
                                                                (ri = (ri + 48) | 0) >>> 0 < Fi >>> 0;

                                                        );
                                                    if (((q[Bi >> 2] = ti), !((si = (si + 12) | 0) >>> 0 < zi >>> 0))) break;
                                                }
                                                if (((ti = si = q[(a + 616) >> 2]), !((0 | (ri = q[(a + 612) >> 2])) < 1))) {
                                                    for (zi = (w(ri, 12) + si) | 0, Ai = q[(a + 280) >> 2], xi = q[(q[a >> 2] + 1008) >> 2]; ; ) {
                                                        if (((Bi = (Ai + (q[si >> 2] << 2)) | 0), (ti = q[Bi >> 2]), 1 <= (0 | (ui = q[(si + 4) >> 2]))))
                                                            for (
                                                                Fi = ((ri = q[(si + 8) >> 2]) + w(ui, 48)) | 0;
                                                                (ui = q[(ri + 8) >> 2]) &&
                                                                    ((Ci = (ui + -1) | 0) >>> 0 <= 1
                                                                        ? ((ui = q[(ri + 4) >> 2]),
                                                                          (wi = u[(xi + ((ui + q[(ri + 12) >> 2]) << 2)) >> 2]),
                                                                          j(
                                                                              x(
                                                                                  Ci - 1
                                                                                      ? x(u[(ri + 44) >> 2] * x(wi * u[(ri + 20) >> 2])) + (f(0, ti), k())
                                                                                      : x(u[(ri + 44) >> 2] * x(x(wi * u[(ri + 20) >> 2]) + x(u[(xi + ((ui + q[(ri + 16) >> 2]) << 2)) >> 2] * u[(ri + 24) >> 2]))) + (f(0, ti), k())
                                                                              )
                                                                          ),
                                                                          (ti = b[0]))
                                                                        : ((q[(48 + yi) >> 2] = ui), Y(4, 1024, (48 + yi) | 0))),
                                                                    (ri = (ri + 48) | 0) >>> 0 < Fi >>> 0;

                                                            );
                                                        if (((q[Bi >> 2] = ti), !((si = (si + 12) | 0) >>> 0 < zi >>> 0))) break;
                                                    }
                                                    if (((ti = si = q[(a + 616) >> 2]), !((0 | (ri = q[(a + 612) >> 2])) < 1))) {
                                                        for (zi = (w(ri, 12) + si) | 0, Ai = q[(a + 268) >> 2], xi = q[(q[a >> 2] + 996) >> 2]; ; ) {
                                                            if (((Bi = (Ai + (q[si >> 2] << 2)) | 0), (ti = q[Bi >> 2]), 1 <= (0 | (ui = q[(si + 4) >> 2]))))
                                                                for (
                                                                    Fi = ((ri = q[(si + 8) >> 2]) + w(ui, 48)) | 0;
                                                                    (ui = q[(ri + 8) >> 2]) &&
                                                                        ((Ci = (ui + -1) | 0) >>> 0 <= 1
                                                                            ? ((ui = q[(ri + 4) >> 2]),
                                                                              (wi = u[(xi + ((ui + q[(ri + 12) >> 2]) << 2)) >> 2]),
                                                                              j(
                                                                                  x(
                                                                                      Ci - 1
                                                                                          ? x(u[(ri + 44) >> 2] * x(wi * u[(ri + 20) >> 2])) + (f(0, ti), k())
                                                                                          : x(u[(ri + 44) >> 2] * x(x(wi * u[(ri + 20) >> 2]) + x(u[(xi + ((ui + q[(ri + 16) >> 2]) << 2)) >> 2] * u[(ri + 24) >> 2]))) + (f(0, ti), k())
                                                                                  )
                                                                              ),
                                                                              (ti = b[0]))
                                                                            : ((q[(32 + yi) >> 2] = ui), Y(4, 1024, (32 + yi) | 0))),
                                                                        (ri = (ri + 48) | 0) >>> 0 < Fi >>> 0;

                                                                );
                                                            if ((f(0, ti), (wi = k()), (u[Bi >> 2] = wi < x(0) ? x(0) : x(A(wi, x(1)))), !((si = (si + 12) | 0) >>> 0 < zi >>> 0))) break;
                                                        }
                                                        (ri = q[(a + 612) >> 2]), (ti = q[(a + 616) >> 2]);
                                                    }
                                                }
                                            }
                                            if (
                                                (fa(ri, ti, Ei, q[(vi + 1288) >> 2], q[(vi + 1292) >> 2], q[(vi + 1296) >> 2], q[(a + 296) >> 2]),
                                                fa(q[(a + 612) >> 2], q[(a + 616) >> 2], Di, q[(vi + 1300) >> 2], q[(vi + 1304) >> 2], q[(vi + 1308) >> 2], q[(a + 300) >> 2]),
                                                !((0 | (ri = q[(a + 612) >> 2])) < 1))
                                            ) {
                                                for (ui = ((si = q[(a + 616) >> 2]) + w(ri, 12)) | 0, Di = q[(a + 284) >> 2], vi = q[(q[a >> 2] + 1e3) >> 2]; ; ) {
                                                    if (((Ei = (Di + (q[si >> 2] << 2)) | 0), (ti = q[Ei >> 2]), 1 <= (0 | (xi = q[(si + 4) >> 2]))))
                                                        for (
                                                            zi = ((ri = q[(si + 8) >> 2]) + w(xi, 48)) | 0;
                                                            (xi = q[(ri + 8) >> 2]) &&
                                                                ((Ai = (xi + -1) | 0) >>> 0 <= 1
                                                                    ? ((xi = q[(ri + 4) >> 2]),
                                                                      (wi = u[(vi + ((xi + q[(ri + 12) >> 2]) << 2)) >> 2]),
                                                                      j(
                                                                          x(
                                                                              Ai - 1
                                                                                  ? x(u[(ri + 44) >> 2] * x(wi * u[(ri + 20) >> 2])) + (f(0, ti), k())
                                                                                  : x(u[(ri + 44) >> 2] * x(x(wi * u[(ri + 20) >> 2]) + x(u[(vi + ((xi + q[(ri + 16) >> 2]) << 2)) >> 2] * u[(ri + 24) >> 2]))) + (f(0, ti), k())
                                                                          )
                                                                      ),
                                                                      (ti = b[0]))
                                                                    : ((q[(16 + yi) >> 2] = xi), Y(4, 1024, (16 + yi) | 0))),
                                                                (ri = (ri + 48) | 0) >>> 0 < zi >>> 0;

                                                        );
                                                    if ((f(0, ti), (wi = k()), (u[Ei >> 2] = wi < x(-3600) ? x(-3600) : x(A(wi, x(3600)))), !((si = (si + 12) | 0) >>> 0 < ui >>> 0))) break;
                                                }
                                                if (!((0 | (ri = q[(a + 612) >> 2])) < 1))
                                                    for (xi = ((si = q[(a + 616) >> 2]) + w(ri, 12)) | 0, ui = q[(a + 272) >> 2], a = q[(q[a >> 2] + 1012) >> 2]; ; ) {
                                                        if (((Di = (ui + (q[si >> 2] << 2)) | 0), (ti = q[Di >> 2]), 1 <= (0 | (vi = q[(si + 4) >> 2]))))
                                                            for (
                                                                Ei = ((ri = q[(si + 8) >> 2]) + w(vi, 48)) | 0;
                                                                (vi = q[(ri + 8) >> 2]) &&
                                                                    ((zi = (vi + -1) | 0) >>> 0 <= 1
                                                                        ? ((vi = q[(ri + 4) >> 2]),
                                                                          (wi = u[(a + ((vi + q[(ri + 12) >> 2]) << 2)) >> 2]),
                                                                          j(
                                                                              x(
                                                                                  zi - 1
                                                                                      ? x(u[(ri + 44) >> 2] * x(wi * u[(ri + 20) >> 2])) + (f(0, ti), k())
                                                                                      : x(u[(ri + 44) >> 2] * x(x(wi * u[(ri + 20) >> 2]) + x(u[(a + ((vi + q[(ri + 16) >> 2]) << 2)) >> 2] * u[(ri + 24) >> 2]))) + (f(0, ti), k())
                                                                              )
                                                                          ),
                                                                          (ti = b[0]))
                                                                        : ((q[yi >> 2] = vi), Y(4, 1024, yi))),
                                                                    (ri = (ri + 48) | 0) >>> 0 < Ei >>> 0;

                                                            );
                                                        if ((f(0, ti), (wi = k()), (u[Di >> 2] = wi < x(9999999747378752e-20) ? x(9999999747378752e-20) : x(A(wi, x(100)))), !((si = (si + 12) | 0) >>> 0 < xi >>> 0))) break;
                                                    }
                                            }
                                        }
                                        L = (80 + yi) | 0;
                                    })(a),
                                    (function (a) {
                                        var Zh,
                                            di,
                                            ei,
                                            fi,
                                            gi,
                                            Sh = 0,
                                            Uh = 0,
                                            Vh = 0,
                                            Wh = 0,
                                            Xh = x(0),
                                            Yh = 0,
                                            _h = 0,
                                            $h = 0,
                                            ai = 0,
                                            bi = 0,
                                            ci = 0;
                                        x(0);
                                        if (
                                            ((L = Zh = (L - 32) | 0),
                                            (Vh = q[a >> 2]),
                                            !(r[(Vh + 4) | 0] < 4 || (va(a, q[(a + 620) >> 2], q[(a + 624) >> 2], q[(Vh + 1040) >> 2], q[(a + 444) >> 2], q[(Vh + 892) >> 2]), (Yh = q[a >> 2]), r[(Yh + 4) | 0] < 5)))
                                        ) {
                                            if (((fi = q[(Yh + 1048) >> 2]), (gi = q[(Yh + 1044) >> 2]), (Vh = Wh = q[(a + 624) >> 2]), !((0 | (Sh = q[(a + 620) >> 2])) < 1))) {
                                                for (bi = (w(Sh, 12) + Wh) | 0, ci = q[(a + 440) >> 2], _h = q[(Yh + 1036) >> 2]; ; ) {
                                                    if (((Vh = (ci + (q[Wh >> 2] << 2)) | 0), (Xh = x(q[Vh >> 2])), 1 <= (0 | (Uh = q[(Wh + 4) >> 2]))))
                                                        for (
                                                            $h = ((Sh = q[(Wh + 8) >> 2]) + w(Uh, 48)) | 0;
                                                            (Uh = q[(Sh + 8) >> 2]) &&
                                                                ((ai = (Uh + -1) | 0) >>> 0 <= 1
                                                                    ? ((Uh = q[(Sh + 4) >> 2]),
                                                                      (di = u[(_h + ((Uh + q[(Sh + 12) >> 2]) << 2)) >> 2]),
                                                                      (Xh = x(
                                                                          ai - 1
                                                                              ? Xh + x(u[(Sh + 44) >> 2] * x(di * u[(Sh + 20) >> 2]))
                                                                              : Xh + x(u[(Sh + 44) >> 2] * x(x(di * u[(Sh + 20) >> 2]) + x(u[(_h + ((Uh + q[(Sh + 16) >> 2]) << 2)) >> 2] * u[(Sh + 24) >> 2])))
                                                                      )))
                                                                    : ((q[(16 + Zh) >> 2] = Uh), Y(4, 1024, (16 + Zh) | 0))),
                                                                (Sh = (Sh + 48) | 0) >>> 0 < $h >>> 0;

                                                        );
                                                    if (
                                                        ((Xh = (Xh = x(Xh + x(0.0010000000474974513))) < x(0) ? x(0) : x(A(Xh, x(1e3)))),
                                                        (Sh = x(y(Xh)) < x(2147483648) ? ~~Xh : -2147483648),
                                                        (q[Vh >> 2] = Sh),
                                                        !((Wh = (Wh + 12) | 0) >>> 0 < bi >>> 0))
                                                    )
                                                        break;
                                                }
                                                if (((Vh = Wh = q[(a + 624) >> 2]), !((0 | (Sh = q[(a + 620) >> 2])) < 1))) {
                                                    for (bi = (w(Sh, 12) + Wh) | 0, ci = q[(a + 448) >> 2], _h = q[(q[a >> 2] + 1032) >> 2]; ; ) {
                                                        if ((($h = (ci + (q[Wh >> 2] << 2)) | 0), (Vh = q[$h >> 2]), 1 <= (0 | (Uh = q[(Wh + 4) >> 2]))))
                                                            for (
                                                                ai = ((Sh = q[(Wh + 8) >> 2]) + w(Uh, 48)) | 0;
                                                                (Uh = q[(Sh + 8) >> 2]) &&
                                                                    ((ei = (Uh + -1) | 0) >>> 0 <= 1
                                                                        ? ((Uh = q[(Sh + 4) >> 2]),
                                                                          (Xh = u[(_h + ((Uh + q[(Sh + 12) >> 2]) << 2)) >> 2]),
                                                                          j(
                                                                              x(
                                                                                  ei - 1
                                                                                      ? x(u[(Sh + 44) >> 2] * x(Xh * u[(Sh + 20) >> 2])) + (f(0, Vh), k())
                                                                                      : x(u[(Sh + 44) >> 2] * x(x(Xh * u[(Sh + 20) >> 2]) + x(u[(_h + ((Uh + q[(Sh + 16) >> 2]) << 2)) >> 2] * u[(Sh + 24) >> 2]))) + (f(0, Vh), k())
                                                                              )
                                                                          ),
                                                                          (Vh = b[0]))
                                                                        : ((q[Zh >> 2] = Uh), Y(4, 1024, Zh))),
                                                                    (Sh = (Sh + 48) | 0) >>> 0 < ai >>> 0;

                                                            );
                                                        if ((f(0, Vh), (Xh = k()), (u[$h >> 2] = Xh < x(0) ? x(0) : x(A(Xh, x(1)))), !((Wh = (Wh + 12) | 0) >>> 0 < bi >>> 0))) break;
                                                    }
                                                    (Sh = q[(a + 620) >> 2]), (Vh = q[(a + 624) >> 2]);
                                                }
                                            }
                                            fa(Sh, Vh, gi, q[(Yh + 1288) >> 2], q[(Yh + 1292) >> 2], q[(Yh + 1296) >> 2], q[(a + 452) >> 2]),
                                                fa(q[(a + 620) >> 2], q[(a + 624) >> 2], fi, q[(Yh + 1300) >> 2], q[(Yh + 1304) >> 2], q[(Yh + 1308) >> 2], q[(a + 456) >> 2]);
                                        }
                                        L = (32 + Zh) | 0;
                                    })(a),
                                    (function (a) {
                                        var Og,
                                            Pg,
                                            Qg,
                                            Rg,
                                            Sg,
                                            Tg,
                                            Jg = 0,
                                            Kg = 0,
                                            Lg = 0,
                                            Mg = 0,
                                            Ng = x(0);
                                        if (((L = Og = (L - 16) | 0), (Kg = q[a >> 2]), !(r[(Kg + 4) | 0] < 5 || (0 | (Mg = q[(a + 628) >> 2])) < 1)))
                                            for (Rg = ((Lg = q[(a + 632) >> 2]) + w(Mg, 12)) | 0, Sg = q[(a + 536) >> 2], Mg = q[(Kg + 1284) >> 2]; ; ) {
                                                if (((Pg = ((q[Lg >> 2] << 2) + Sg) | 0), (Kg = q[Pg >> 2]), 1 <= (0 | (Jg = q[(Lg + 4) >> 2]))))
                                                    for (
                                                        Tg = ((a = q[(Lg + 8) >> 2]) + w(Jg, 48)) | 0;
                                                        (Jg = q[(a + 8) >> 2]) &&
                                                            ((Qg = (Jg + -1) | 0) >>> 0 <= 1
                                                                ? ((Jg = q[(a + 4) >> 2]),
                                                                  (Ng = u[(Mg + ((Jg + q[(a + 12) >> 2]) << 2)) >> 2]),
                                                                  j(
                                                                      x(
                                                                          Qg - 1
                                                                              ? x(u[(a + 44) >> 2] * x(Ng * u[(a + 20) >> 2])) + (f(0, Kg), k())
                                                                              : x(u[(a + 44) >> 2] * x(x(Ng * u[(a + 20) >> 2]) + x(u[(Mg + ((Jg + q[(a + 16) >> 2]) << 2)) >> 2] * u[(a + 24) >> 2]))) + (f(0, Kg), k())
                                                                      )
                                                                  ),
                                                                  (Kg = b[0]))
                                                                : ((q[Og >> 2] = Jg), Y(4, 1024, Og))),
                                                            (a = (a + 48) | 0) >>> 0 < Tg >>> 0;

                                                    );
                                                if ((f(0, Kg), (Ng = k()), (u[Pg >> 2] = Ng < x(0) ? x(0) : x(A(Ng, x(1)))), !((Lg = (Lg + 12) | 0) >>> 0 < Rg >>> 0))) break;
                                            }
                                        L = (16 + Og) | 0;
                                    })(a),
                                    (function (a) {
                                        var Nh,
                                            Qh,
                                            jh = 0,
                                            Lh = 0,
                                            Mh = 0,
                                            Oh = x(0),
                                            Ph = 0;
                                        if (1 <= (0 | (jh = q[(a + 4) >> 2])))
                                            for (
                                                Qh = ((Lh = q[(a + 8) >> 2]) + w(jh, 12)) | 0, jh = q[(a + 40) >> 2], Mh = q[(a + 52) >> 2], a = Nh = q[(a + 48) >> 2];
                                                q[jh >> 2] && ((Oh = u[Mh >> 2]), (u[a >> 2] = Oh), -1 != (0 | (Ph = q[(Lh + 4) >> 2]))) && (u[a >> 2] = Oh * u[((Ph << 2) + Nh) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (Mh = (Mh + 4) | 0),
                                                    (jh = (jh + 4) | 0),
                                                    (Lh = (Lh + 12) | 0) >>> 0 < Qh >>> 0;

                                            );
                                    })(a),
                                    (function (a) {
                                        var ih,
                                            fh = 0,
                                            gh = 0,
                                            hh = 0;
                                        if (1 <= (0 | (ih = q[(a + 304) >> 2])))
                                            for (fh = q[(a + 308) >> 2], gh = q[(a + 312) >> 2]; q[gh >> 2] && n[q[(fh + 20) >> 2]](a, hh), (gh = (gh + 4) | 0), (fh = (fh + 32) | 0), (0 | ih) != (0 | (hh = (hh + 1) | 0)); );
                                    })(a),
                                    (function (a) {
                                        var Wg,
                                            Xg,
                                            $g,
                                            dh,
                                            eh,
                                            Ug = 0,
                                            Vg = 0,
                                            Yg = (x(0), x(0), 0),
                                            Zg = 0,
                                            _g = 0,
                                            ah = (x(0), 0),
                                            bh = 0,
                                            ch = 0;
                                        if (1 <= (0 | (Ug = q[(a + 332) >> 2])))
                                            for (
                                                bh = ((Vg = q[(a + 336) >> 2]) + w(Ug, 20)) | 0, ch = q[(a + 308) >> 2], ah = q[(a + 316) >> 2], eh = q[(a + 48) >> 2], Ug = q[(a + 448) >> 2], Yg = q[(a + 444) >> 2], _g = q[(a + 424) >> 2];
                                                q[_g >> 2] &&
                                                    (-1 != (0 | (Zg = q[(Vg + 4) >> 2])) && (u[Ug >> 2] = u[((Zg << 2) + eh) >> 2] * u[Ug >> 2]), -1 != (0 | (Zg = q[(Vg + 8) >> 2]))) &&
                                                    ((u[Ug >> 2] = u[(ah + (Zg << 2)) >> 2] * u[Ug >> 2]), (dh = q[Yg >> 2]), n[q[(24 + ((ch + (Zg << 5)) | 0)) >> 2]](a, Zg, dh, dh, q[(Vg + 16) >> 2])),
                                                    (Yg = (Yg + 4) | 0),
                                                    (Ug = (Ug + 4) | 0),
                                                    (_g = (_g + 4) | 0),
                                                    (Vg = (Vg + 20) | 0) >>> 0 < bh >>> 0;

                                            );
                                        if (!(r[(q[a >> 2] + 4) | 0] < 4 || (0 | (Ug = q[(a + 332) >> 2])) < 1))
                                            for (
                                                Zg = ((Yg = q[(a + 336) >> 2]) + w(Ug, 20)) | 0, bh = q[(a + 328) >> 2], ch = q[(a + 324) >> 2], Vg = q[(a + 452) >> 2], Ug = q[(a + 456) >> 2], _g = q[(a + 424) >> 2];
                                                q[_g >> 2] &&
                                                    -1 != (0 | (a = q[(Yg + 8) >> 2])) &&
                                                    ((a = ((ah = a << 4) + ch) | 0),
                                                    (Wg = x(u[Vg >> 2] * u[a >> 2])),
                                                    (u[Vg >> 2] = Wg),
                                                    (Xg = x(u[(Vg + 4) >> 2] * u[(a + 4) >> 2])),
                                                    (u[(Vg + 4) >> 2] = Xg),
                                                    ($g = u[(a + 8) >> 2]),
                                                    (q[(Vg + 12) >> 2] = 1065353216),
                                                    (u[(Vg + 4) >> 2] = Xg < x(0) ? x(0) : x(A(Xg, x(1)))),
                                                    (u[Vg >> 2] = Wg < x(0) ? x(0) : x(A(Wg, x(1)))),
                                                    (Wg = x($g * u[(Vg + 8) >> 2])),
                                                    (u[(Vg + 8) >> 2] = Wg < x(0) ? x(0) : x(A(Wg, x(1)))),
                                                    (Wg = u[Ug >> 2]),
                                                    (Xg = u[(a = (bh + ah) | 0) >> 2]),
                                                    (Wg = x(x(Wg + Xg) - x(Wg * Xg))),
                                                    (u[Ug >> 2] = Wg),
                                                    (Xg = u[(Ug + 4) >> 2]),
                                                    ($g = u[(a + 4) >> 2]),
                                                    (Xg = x(x(Xg + $g) - x(Xg * $g))),
                                                    (u[(Ug + 4) >> 2] = Xg),
                                                    ($g = u[(a + 8) >> 2]),
                                                    (q[(Ug + 12) >> 2] = 1065353216),
                                                    (u[(Ug + 4) >> 2] = Xg < x(0) ? x(0) : x(A(Xg, x(1)))),
                                                    (u[Ug >> 2] = Wg < x(0) ? x(0) : x(A(Wg, x(1)))),
                                                    (Wg = u[(Ug + 8) >> 2]),
                                                    (Wg = x(x($g + Wg) - x(Wg * $g))),
                                                    (u[(Ug + 8) >> 2] = Wg < x(0) ? x(0) : x(A(Wg, x(1))))),
                                                    (Ug = (Ug + 16) | 0),
                                                    (Vg = (Vg + 16) | 0),
                                                    (_g = (_g + 4) | 0),
                                                    (Yg = (Yg + 20) | 0) >>> 0 < Zg >>> 0;

                                            );
                                    })(a),
                                    (function (a) {
                                        var Mn,
                                            Nn,
                                            Pn,
                                            Lo,
                                            Mo,
                                            No,
                                            Oo,
                                            Po,
                                            Qo,
                                            Ro,
                                            So,
                                            To,
                                            Uo,
                                            Vo,
                                            Wo,
                                            Xo,
                                            Yo,
                                            Zo,
                                            _o,
                                            $o,
                                            On = 0;
                                        x(0), x(0), x(0), x(0), x(0), x(0), x(0);
                                        if (1 <= (0 | (Po = q[(a + 500) >> 2])))
                                            for (_o = q[(a + 536) >> 2], Qo = q[(a + 444) >> 2], $o = q[(a + 504) >> 2]; ; ) {
                                                if (((a = (w(On, 24) + $o) | 0), 0 < (0 | (Ro = q[(a + 12) >> 2]))))
                                                    for (
                                                        Pn = u[((On << 2) + _o) >> 2], So = q[(a + 20) >> 2], To = q[(a + 16) >> 2], Uo = q[((q[(a + 4) >> 2] << 2) + Qo) >> 2], Vo = q[((q[(a + 8) >> 2] << 2) + Qo) >> 2], a = 0;
                                                        (Wo = u[(((Mn = 1 | a) << 2) + To) >> 2]),
                                                            (Nn = (s[((a << 1) + So) >> 1] << 3) & 262136),
                                                            (Lo = u[(Xo = ((4 | Nn) + Uo) | 0) >> 2]),
                                                            (Mn = (s[((Mn << 1) + So) >> 1] << 3) & 262136),
                                                            (Mo = u[(Yo = ((4 | Mn) + Vo) | 0) >> 2]),
                                                            (No = u[(Nn = (Nn + Uo) | 0) >> 2]),
                                                            (Zo = u[((a << 2) + To) >> 2]),
                                                            (Oo = u[(Mn = (Mn + Vo) | 0) >> 2]),
                                                            (u[Nn >> 2] = No + x(Pn * x(Zo * x(Oo - No)))),
                                                            (u[Xo >> 2] = Lo + x(Pn * x(Zo * x(Mo - Lo)))),
                                                            (u[Mn >> 2] = Oo + x(Pn * x(Wo * x(No - Oo)))),
                                                            (u[Yo >> 2] = Mo + x(Pn * x(Wo * x(Lo - Mo)))),
                                                            (0 | (a = (a + 2) | 0)) < (0 | Ro);

                                                    );
                                                if (!((0 | (On = (On + 1) | 0)) < (0 | Po))) break;
                                            }
                                    })(a),
                                    n[q[1818]](a),
                                    (function (a) {
                                        var Oc,
                                            Pc,
                                            Rc,
                                            Sc,
                                            Ec = 0,
                                            Fc = 0,
                                            Gc = 0,
                                            Hc = 0,
                                            Ic = 0,
                                            Jc = 0,
                                            Kc = 0,
                                            Lc = 0,
                                            Mc = 0,
                                            Nc = 0,
                                            Qc = 0;
                                        if (!((0 | (Oc = q[(a + 480) >> 2])) < 1)) {
                                            for (Hc = ((Pc = q[(a + 484) >> 2]) + w(Oc, 28)) | 0, Kc = q[(a + 424) >> 2], Lc = q[(a + 40) >> 2], Ic = q[(a + 44) >> 2], Qc = q[(a + 440) >> 2], Ec = Pc; ; ) {
                                                if (1 <= (0 | (Jc = q[(Ec + 4) >> 2])))
                                                    for (
                                                        Nc = (Ec + 20) | 0, Mc = q[(Ec + 12) >> 2], Fc = 0;
                                                        (Rc = q[(4 + (Gc = (Mc + (Fc << 4)) | 0)) >> 2] << 2),
                                                            (Gc = 1 == q[(Sc = Gc) >> 2]),
                                                            (q[(Sc + 12) >> 2] = q[(q[((Gc ? Lc : Kc) + Rc) >> 2] ? ((Gc ? Ic : Qc) + Rc) | 0 : Nc) >> 2]),
                                                            (0 | (Fc = (Fc + 1) | 0)) < (0 | Jc);

                                                    );
                                                if (!((Ec = (Ec + 28) | 0) >>> 0 < Hc >>> 0)) break;
                                            }
                                            if (!((0 | Oc) < 1))
                                                for (Qc = q[(a + 436) >> 2], Lc = 0; ; ) {
                                                    if (((Hc = (w(Lc, 28) + Pc) | 0), !(q[((Kc = Hc) + 24) >> 2] < 1))) {
                                                        for (Gc = q[(a + 488) >> 2], Fc = 0; (q[(Gc + (Fc << 2)) >> 2] = -1), (0 | (Fc = (Fc + 1) | 0)) < (0 | (Ec = q[(Kc + 24) >> 2])); );
                                                        if (!((0 | Ec) < 1)) for (Ec = q[(a + 496) >> 2], Fc = 0; (q[(Ec + (Fc << 2)) >> 2] = -1), (0 | (Fc = (Fc + 1) | 0)) < q[(Kc + 24) >> 2]; );
                                                    }
                                                    if (!(q[(Hc + 4) >> 2] < 1)) {
                                                        for (Ic = q[(a + 492) >> 2], Fc = 0; (q[(Ic + (Fc << 2)) >> 2] = -1), (0 | (Fc = (Fc + 1) | 0)) < (0 | (Ec = q[(Hc + 4) >> 2])); );
                                                        if (!((0 | Ec) < 1))
                                                            for (
                                                                Jc = q[(Hc + 12) >> 2], Nc = q[(a + 496) >> 2], Fc = 0;
                                                                (Mc = (q[(12 + ((Jc + (Fc << 4)) | 0)) >> 2] - q[(Hc + 20) >> 2]) << 2),
                                                                    (Ec = -1 == (0 | (Ec = q[(Gc = (Mc + Nc) | 0) >> 2])) ? (Mc + q[(a + 488) >> 2]) | 0 : (Ic + (Ec << 2)) | 0),
                                                                    (q[Ec >> 2] = Fc),
                                                                    (0 | (Fc = ((q[Gc >> 2] = Fc) + 1) | 0)) < q[(Hc + 4) >> 2];

                                                            );
                                                    }
                                                    if (1 <= (0 | (Ec = q[(Kc + 24) >> 2])))
                                                        for (Ic = q[(Hc + 8) >> 2], Nc = q[(a + 488) >> 2], Jc = 0; ; ) {
                                                            if (-1 != (0 | (Fc = q[(Nc + (Jc << 2)) >> 2]))) {
                                                                for (
                                                                    Mc = q[(a + 492) >> 2], Gc = q[(Hc + 12) >> 2];
                                                                    (Ic =
                                                                        ((Ec =
                                                                            1 == q[(Ec = (Gc + (Fc << 4)) | 0) >> 2]
                                                                                ? ((Ec = (w(q[(Ec + 8) >> 2], 28) + Pc) | 0), (q[(Ec + 8) >> 2] = Ic), q[Ec >> 2])
                                                                                : ((q[(Qc + (q[(Ec + 4) >> 2] << 2)) >> 2] = Ic), 1)) +
                                                                            Ic) |
                                                                        0),
                                                                        (0 | Fc) < (0 | (Ec = q[(Mc + (Fc << 2)) >> 2])) && -1 != (0 | (Fc = Ec));

                                                                );
                                                                Ec = q[(Kc + 24) >> 2];
                                                            }
                                                            if (!((0 | (Jc = (Jc + 1) | 0)) < (0 | Ec))) break;
                                                        }
                                                    if ((0 | Oc) == (0 | (Lc = (Lc + 1) | 0))) break;
                                                }
                                        }
                                    })(a),
                                    (function (a) {
                                        var yg = 0,
                                            zg = 0,
                                            Ag = 0,
                                            Bg = 0,
                                            Dg = 0,
                                            Eg = x(0),
                                            Fg = 0,
                                            Gg = 0,
                                            Cg = q[(a + 332) >> 2];
                                        if (q[(a + 644) >> 2]) {
                                            if (!(((q[(a + 428) >> 2] = 0) | Cg) < 1))
                                                for (
                                                    ;
                                                    (yg = 126),
                                                        (Fg = (q[(a + 432) >> 2] + Ag) | 0),
                                                        !q[((zg = Ag << 2) + q[(a + 424) >> 2]) >> 2] | (u[(zg + q[(a + 448) >> 2]) >> 2] == x(0)) || (yg = 127),
                                                        (o[0 | Fg] = yg),
                                                        (0 | Cg) != (0 | (Ag = (Ag + 1) | 0));

                                                );
                                        } else if (q[(a + 428) >> 2]) {
                                            if (((yg = r[(q[a >> 2] + 4) | 0]), !(((q[(a + 428) >> 2] = 0) | Cg) < 1)))
                                                if (4 <= yg >>> 0)
                                                    for (
                                                        ;
                                                        (Eg = u[((yg = Ag << 2) + q[(a + 448) >> 2]) >> 2]),
                                                            (Bg = q[(yg + q[(a + 424) >> 2]) >> 2]),
                                                            (zg = (Eg != x(0)) & (0 != (0 | Bg))),
                                                            (Fg = (q[(a + 432) >> 2] + Ag) | 0),
                                                            (zg = (0 | zg) == (1 & o[0 | Fg]) ? zg : 2 | zg),
                                                            (zg = Eg != u[(yg + q[(a + 468) >> 2]) >> 2] ? 4 | zg : zg),
                                                            (zg = q[(yg + q[(a + 440) >> 2]) >> 2] == q[(yg + q[(a + 464) >> 2]) >> 2] ? zg : 8 | zg),
                                                            (yg = q[(yg + q[(a + 436) >> 2]) >> 2] == q[(yg + q[(a + 460) >> 2]) >> 2] ? zg : 16 | zg),
                                                            (yg = Bg ? 32 | yg : yg),
                                                            (Bg = ((zg = Gg << 2) + q[(a + 452) >> 2]) | 0),
                                                            (Dg = (zg + q[(a + 472) >> 2]) | 0),
                                                            ((u[Bg >> 2] != u[Dg >> 2]) | (u[(Bg + 4) >> 2] != u[(Dg + 4) >> 2]) | ((u[(Bg + 8) >> 2] != u[(Dg + 8) >> 2]) | (u[(Bg + 12) >> 2] != u[(Dg + 12) >> 2])) ||
                                                                ((Bg = (zg + q[(a + 456) >> 2]) | 0),
                                                                (zg = (zg + q[(a + 476) >> 2]) | 0),
                                                                (u[Bg >> 2] != u[zg >> 2]) | (u[(Bg + 4) >> 2] != u[(zg + 4) >> 2]) | (u[(Bg + 8) >> 2] != u[(zg + 8) >> 2])) ||
                                                                u[(Bg + 12) >> 2] != u[(zg + 12) >> 2]) &&
                                                                (yg |= 64),
                                                            (o[0 | Fg] = yg),
                                                            (Gg = (Gg + 4) | 0),
                                                            (0 | Cg) != (0 | (Ag = (Ag + 1) | 0));

                                                    );
                                                else
                                                    for (
                                                        ;
                                                        (Eg = u[((yg = Ag << 2) + q[(a + 448) >> 2]) >> 2]),
                                                            (Bg = q[(yg + q[(a + 424) >> 2]) >> 2]),
                                                            (zg = (Eg != x(0)) & (0 != (0 | Bg))),
                                                            (Dg = (q[(a + 432) >> 2] + Ag) | 0),
                                                            (zg = (0 | zg) == (1 & o[0 | Dg]) ? zg : 2 | zg),
                                                            (zg = Eg != u[(yg + q[(a + 468) >> 2]) >> 2] ? 4 | zg : zg),
                                                            (zg = q[(yg + q[(a + 440) >> 2]) >> 2] == q[(yg + q[(a + 464) >> 2]) >> 2] ? zg : 8 | zg),
                                                            (yg = q[(yg + q[(a + 436) >> 2]) >> 2] == q[(yg + q[(a + 460) >> 2]) >> 2] ? zg : 16 | zg),
                                                            (o[0 | Dg] = Bg ? 32 | yg : yg),
                                                            (0 | Cg) != (0 | (Ag = (Ag + 1) | 0));

                                                    );
                                        } else if (!((0 | Cg) < 1))
                                            for (
                                                ;
                                                !q[((yg = Ag << 2) + q[(a + 424) >> 2]) >> 2] | (u[(yg + q[(a + 448) >> 2]) >> 2] == x(0))
                                                    ? ((yg = (q[(a + 432) >> 2] + Ag) | 0), (o[0 | yg] = 254 & r[0 | yg]))
                                                    : ((yg = (q[(a + 432) >> 2] + Ag) | 0), (o[0 | yg] = 1 | r[0 | yg])),
                                                    (0 | Cg) != (0 | (Ag = (Ag + 1) | 0));

                                            );
                                    })(a),
                                    (q[(a + 644) >> 2] = 0);
                            }
                            function va(a, Wa, Xa, Ya, Za, $a) {
                                var fb,
                                    gb,
                                    hb,
                                    jb,
                                    kb,
                                    cb,
                                    db,
                                    ab = 0,
                                    bb = 0,
                                    eb = 0,
                                    ib = 0;
                                if (((L = cb = (L - 32) | 0), 1 <= (0 | Wa)))
                                    for (kb = (w(Wa, 12) + Xa) | 0; ; ) {
                                        if (!((0 | (ab = q[(Xa + 4) >> 2])) < 1))
                                            if (((fb = ((Wa = q[(Xa + 8) >> 2]) + w(ab, 48)) | 0), (ab = q[Xa >> 2] << 2), 1 <= (0 | (db = q[(ab + $a) >> 2]))))
                                                for (db <<= 1, gb = q[(q[a >> 2] + 1052) >> 2], hb = q[(Za + ab) >> 2]; ; ) {
                                                    b: if ((ab = q[(Wa + 8) >> 2])) {
                                                        c: {
                                                            if ((bb = (ab + -1) | 0) >>> 0 <= 1) {
                                                                if (((ab = ((q[(Wa + 4) >> 2] << 2) + Ya) | 0), (ib = ((q[(ab + (q[(Wa + 12) >> 2] << 2)) >> 2] << 2) + gb) | 0), bb - 1)) break c;
                                                                for (
                                                                    eb = ((q[(ab + (q[(Wa + 16) >> 2] << 2)) >> 2] << 2) + gb) | 0, ab = 0;
                                                                    (u[(jb = ((bb = ab << 2) + hb) | 0) >> 2] = u[jb >> 2] + x(u[(Wa + 44) >> 2] * x(x(u[(bb + ib) >> 2] * u[(Wa + 20) >> 2]) + x(u[(bb + eb) >> 2] * u[(Wa + 24) >> 2])))),
                                                                        (0 | db) != (0 | (ab = (ab + 1) | 0));

                                                                );
                                                                break b;
                                                            }
                                                            (q[cb >> 2] = ab), Y(4, 1024, cb);
                                                            break b;
                                                        }
                                                        for (ab = 0; (u[(eb = ((bb = ab << 2) + hb) | 0) >> 2] = u[eb >> 2] + x(u[(Wa + 44) >> 2] * x(u[(bb + ib) >> 2] * u[(Wa + 20) >> 2]))), (0 | db) != (0 | (ab = (ab + 1) | 0)); );
                                                    }
                                                    if (!((Wa = (Wa + 48) | 0) >>> 0 < fb >>> 0)) break;
                                                }
                                            else for (; 3 <= (ab = q[(Wa + 8) >> 2]) >>> 0 && ((q[(16 + cb) >> 2] = ab), Y(4, 1024, (16 + cb) | 0)), (Wa = (Wa + 48) | 0) >>> 0 < fb >>> 0; );
                                        if (!((Xa = (Xa + 12) | 0) >>> 0 < kb >>> 0)) break;
                                    }
                                L = (32 + cb) | 0;
                            }
                            function wa(a, Wa, Xa) {
                                var Ya;
                                (Wa |= 0), (Xa |= 0), (L = Ya = (L + -64) | 0);
                                a: {
                                    if ((a |= 0))
                                        if (Wa)
                                            if (((Wa + 15) & -16) != (0 | Wa)) (q[(52 + Ya) >> 2] = 1522), (q[(48 + Ya) >> 2] = 2361), Y(4, 1294, (48 + Ya) | 0);
                                            else {
                                                if (
                                                    (Wa = (function (a, Gl, Hl) {
                                                        var lm,
                                                            Zl = 0,
                                                            fm = 0,
                                                            gm = 0,
                                                            mm = 0,
                                                            nm = 0,
                                                            om = 0,
                                                            pm = 0,
                                                            qm = 0,
                                                            rm = 0,
                                                            sm = 0,
                                                            tm = 0,
                                                            um = 0,
                                                            vm = 0,
                                                            wm = x(0),
                                                            xm = 0,
                                                            ym = 0,
                                                            zm = 0,
                                                            Am = 0,
                                                            Bm = 0;
                                                        if ((ca((16 + (L = lm = (L - 576) | 0)) | 0, 0, 560), Fa(a, (16 + lm) | 0, (12 + lm) | 0), (mm = q[(12 + lm) >> 2]) >>> 0 <= Hl >>> 0)) {
                                                            if (
                                                                ((Zl = ((fm = ca(Gl, 0, mm)) + q[(16 + lm) >> 2]) | 0),
                                                                (q[(Zl + 8) >> 2] = fm + q[(20 + lm) >> 2]),
                                                                (q[(Zl + 40) >> 2] = fm + q[(24 + lm) >> 2]),
                                                                (q[(Zl + 44) >> 2] = fm + q[(28 + lm) >> 2]),
                                                                (q[(Zl + 48) >> 2] = fm + q[(32 + lm) >> 2]),
                                                                (q[(Zl + 52) >> 2] = fm + q[(36 + lm) >> 2]),
                                                                (q[(Zl + 16) >> 2] = fm + q[(40 + lm) >> 2]),
                                                                (q[(Zl + 24) >> 2] = fm + q[(44 + lm) >> 2]),
                                                                (q[(Zl + 28) >> 2] = fm + q[(48 + lm) >> 2]),
                                                                (q[(Zl + 32) >> 2] = fm + q[(52 + lm) >> 2]),
                                                                (q[(Zl + 36) >> 2] = fm + q[(56 + lm) >> 2]),
                                                                (Gl = q[(a + 704) >> 2]),
                                                                (q[(Zl + 308) >> 2] = fm + q[(60 + lm) >> 2]),
                                                                (q[(Zl + 312) >> 2] = fm + q[(64 + lm) >> 2]),
                                                                (q[(Zl + 316) >> 2] = fm + q[(68 + lm) >> 2]),
                                                                (q[(Zl + 320) >> 2] = fm + q[(72 + lm) >> 2]),
                                                                (q[(Zl + 324) >> 2] = fm + q[(76 + lm) >> 2]),
                                                                (q[(Zl + 328) >> 2] = fm + q[(80 + lm) >> 2]),
                                                                (q[(Zl + 60) >> 2] = fm + q[(84 + lm) >> 2]),
                                                                (q[(Zl + 144) >> 2] = fm + q[(88 + lm) >> 2]),
                                                                (q[(Zl + 148) >> 2] = fm + q[(92 + lm) >> 2]),
                                                                (Hl = (fm + q[(96 + lm) >> 2]) | 0),
                                                                (q[(Zl + 152) >> 2] = Hl),
                                                                !((0 | (mm = q[(Gl + 8) >> 2])) < 1) && ((Gl = (fm + q[(100 + lm) >> 2]) | 0), (q[Hl >> 2] = Gl), 1 != (0 | mm)))
                                                            )
                                                                for (
                                                                    Hl = 1;
                                                                    (Gl = (((15 + (q[(q[(a + 796) >> 2] + (gm << 2)) >> 2] << 3)) & -16) + Gl) | 0),
                                                                        (q[(q[(Zl + 152) >> 2] + (Hl << 2)) >> 2] = Gl),
                                                                        (0 | mm) != (0 | (Hl = ((gm = Hl) + 1) | 0));

                                                                );
                                                            if (
                                                                ((q[(Zl + 156) >> 2] = fm + q[(104 + lm) >> 2]),
                                                                (q[(Zl + 160) >> 2] = fm + q[(108 + lm) >> 2]),
                                                                (q[(Zl + 68) >> 2] = fm + q[(112 + lm) >> 2]),
                                                                (q[(Zl + 76) >> 2] = fm + q[(116 + lm) >> 2]),
                                                                (q[(Zl + 80) >> 2] = fm + q[(120 + lm) >> 2]),
                                                                (q[(Zl + 84) >> 2] = fm + q[(124 + lm) >> 2]),
                                                                (q[(Zl + 88) >> 2] = fm + q[(128 + lm) >> 2]),
                                                                (q[(Zl + 92) >> 2] = fm + q[(132 + lm) >> 2]),
                                                                (q[(Zl + 96) >> 2] = fm + q[(136 + lm) >> 2]),
                                                                (q[(Zl + 100) >> 2] = fm + q[(140 + lm) >> 2]),
                                                                (q[(Zl + 104) >> 2] = fm + q[(144 + lm) >> 2]),
                                                                (q[(Zl + 108) >> 2] = fm + q[(148 + lm) >> 2]),
                                                                (q[(Zl + 112) >> 2] = fm + q[(152 + lm) >> 2]),
                                                                (q[(Zl + 116) >> 2] = fm + q[(156 + lm) >> 2]),
                                                                (q[(Zl + 120) >> 2] = fm + q[(160 + lm) >> 2]),
                                                                (q[(Zl + 124) >> 2] = fm + q[(164 + lm) >> 2]),
                                                                (q[(Zl + 128) >> 2] = fm + q[(168 + lm) >> 2]),
                                                                (q[(Zl + 132) >> 2] = fm + q[(172 + lm) >> 2]),
                                                                (q[(Zl + 136) >> 2] = fm + q[(176 + lm) >> 2]),
                                                                (q[(Zl + 140) >> 2] = fm + q[(180 + lm) >> 2]),
                                                                (q[(Zl + 168) >> 2] = fm + q[(184 + lm) >> 2]),
                                                                (q[(Zl + 264) >> 2] = fm + q[(188 + lm) >> 2]),
                                                                (q[(Zl + 268) >> 2] = fm + q[(192 + lm) >> 2]),
                                                                (q[(Zl + 272) >> 2] = fm + q[(196 + lm) >> 2]),
                                                                (q[(Zl + 276) >> 2] = fm + q[(200 + lm) >> 2]),
                                                                (q[(Zl + 280) >> 2] = fm + q[(204 + lm) >> 2]),
                                                                (q[(Zl + 284) >> 2] = fm + q[(208 + lm) >> 2]),
                                                                (q[(Zl + 288) >> 2] = fm + q[(212 + lm) >> 2]),
                                                                (q[(Zl + 292) >> 2] = fm + q[(216 + lm) >> 2]),
                                                                (q[(Zl + 296) >> 2] = fm + q[(220 + lm) >> 2]),
                                                                (q[(Zl + 300) >> 2] = fm + q[(224 + lm) >> 2]),
                                                                (q[(Zl + 176) >> 2] = fm + q[(228 + lm) >> 2]),
                                                                (q[(Zl + 184) >> 2] = fm + q[(232 + lm) >> 2]),
                                                                (q[(Zl + 188) >> 2] = fm + q[(236 + lm) >> 2]),
                                                                (q[(Zl + 192) >> 2] = fm + q[(240 + lm) >> 2]),
                                                                (q[(Zl + 196) >> 2] = fm + q[(244 + lm) >> 2]),
                                                                (q[(Zl + 200) >> 2] = fm + q[(248 + lm) >> 2]),
                                                                (q[(Zl + 204) >> 2] = fm + q[(252 + lm) >> 2]),
                                                                (q[(Zl + 208) >> 2] = fm + q[(256 + lm) >> 2]),
                                                                (q[(Zl + 212) >> 2] = fm + q[(260 + lm) >> 2]),
                                                                (q[(Zl + 216) >> 2] = fm + q[(264 + lm) >> 2]),
                                                                (q[(Zl + 220) >> 2] = fm + q[(268 + lm) >> 2]),
                                                                (q[(Zl + 224) >> 2] = fm + q[(272 + lm) >> 2]),
                                                                (q[(Zl + 228) >> 2] = fm + q[(276 + lm) >> 2]),
                                                                (q[(Zl + 232) >> 2] = fm + q[(280 + lm) >> 2]),
                                                                (q[(Zl + 236) >> 2] = fm + q[(284 + lm) >> 2]),
                                                                (q[(Zl + 240) >> 2] = fm + q[(288 + lm) >> 2]),
                                                                (q[(Zl + 244) >> 2] = fm + q[(292 + lm) >> 2]),
                                                                (q[(Zl + 248) >> 2] = fm + q[(296 + lm) >> 2]),
                                                                (q[(Zl + 252) >> 2] = fm + q[(300 + lm) >> 2]),
                                                                (q[(Zl + 256) >> 2] = fm + q[(304 + lm) >> 2]),
                                                                (q[(Zl + 260) >> 2] = fm + q[(308 + lm) >> 2]),
                                                                (Gl = q[(a + 704) >> 2]),
                                                                (q[(Zl + 336) >> 2] = fm + q[(312 + lm) >> 2]),
                                                                (q[(Zl + 424) >> 2] = fm + q[(316 + lm) >> 2]),
                                                                (q[(Zl + 432) >> 2] = fm + q[(320 + lm) >> 2]),
                                                                (q[(Zl + 436) >> 2] = fm + q[(324 + lm) >> 2]),
                                                                (q[(Zl + 440) >> 2] = fm + q[(328 + lm) >> 2]),
                                                                (Hl = (fm + q[(332 + lm) >> 2]) | 0),
                                                                (q[(Zl + 444) >> 2] = Hl),
                                                                !((0 | (mm = q[(Gl + 16) >> 2])) < 1) && ((gm = (fm + q[(336 + lm) >> 2]) | 0), (q[Hl >> 2] = gm), (Hl = 1) != (0 | mm)))
                                                            )
                                                                for (
                                                                    Gl = 0;
                                                                    (gm = (((15 + (q[(q[(a + 892) >> 2] + (Gl << 2)) >> 2] << 3)) & -16) + gm) | 0),
                                                                        (q[(q[(Zl + 444) >> 2] + (Hl << 2)) >> 2] = gm),
                                                                        (0 | mm) != (0 | (Hl = ((Gl = Hl) + 1) | 0));

                                                                );
                                                            if (
                                                                ((q[(Zl + 448) >> 2] = fm + q[(340 + lm) >> 2]),
                                                                (q[(Zl + 452) >> 2] = fm + q[(344 + lm) >> 2]),
                                                                (q[(Zl + 456) >> 2] = fm + q[(348 + lm) >> 2]),
                                                                (q[(Zl + 460) >> 2] = fm + q[(352 + lm) >> 2]),
                                                                (q[(Zl + 464) >> 2] = fm + q[(356 + lm) >> 2]),
                                                                (q[(Zl + 468) >> 2] = fm + q[(360 + lm) >> 2]),
                                                                (q[(Zl + 472) >> 2] = fm + q[(364 + lm) >> 2]),
                                                                (q[(Zl + 476) >> 2] = fm + q[(368 + lm) >> 2]),
                                                                (q[(Zl + 344) >> 2] = fm + q[(372 + lm) >> 2]),
                                                                (q[(Zl + 352) >> 2] = fm + q[(376 + lm) >> 2]),
                                                                (q[(Zl + 356) >> 2] = fm + q[(380 + lm) >> 2]),
                                                                (q[(Zl + 360) >> 2] = fm + q[(384 + lm) >> 2]),
                                                                (q[(Zl + 364) >> 2] = fm + q[(388 + lm) >> 2]),
                                                                (q[(Zl + 368) >> 2] = fm + q[(392 + lm) >> 2]),
                                                                (q[(Zl + 372) >> 2] = fm + q[(396 + lm) >> 2]),
                                                                (q[(Zl + 376) >> 2] = fm + q[(400 + lm) >> 2]),
                                                                (q[(Zl + 380) >> 2] = fm + q[(404 + lm) >> 2]),
                                                                (q[(Zl + 384) >> 2] = fm + q[(408 + lm) >> 2]),
                                                                (q[(Zl + 388) >> 2] = fm + q[(412 + lm) >> 2]),
                                                                (q[(Zl + 392) >> 2] = fm + q[(416 + lm) >> 2]),
                                                                (q[(Zl + 396) >> 2] = fm + q[(420 + lm) >> 2]),
                                                                (q[(Zl + 400) >> 2] = fm + q[(424 + lm) >> 2]),
                                                                (q[(Zl + 404) >> 2] = fm + q[(428 + lm) >> 2]),
                                                                (q[(Zl + 408) >> 2] = fm + q[(432 + lm) >> 2]),
                                                                (q[(Zl + 412) >> 2] = fm + q[(436 + lm) >> 2]),
                                                                (q[(Zl + 416) >> 2] = fm + q[(440 + lm) >> 2]),
                                                                (q[(Zl + 420) >> 2] = fm + q[(444 + lm) >> 2]),
                                                                (Gl = q[(448 + lm) >> 2]),
                                                                (Hl = q[(452 + lm) >> 2]),
                                                                (q[(Zl + 552) >> 2] = fm + q[(456 + lm) >> 2]),
                                                                (q[(Zl + 548) >> 2] = Hl + fm),
                                                                (q[(Zl + 544) >> 2] = Gl + fm),
                                                                (q[(Zl + 560) >> 2] = fm + q[(460 + lm) >> 2]),
                                                                (Gl = q[(a + 704) >> 2]),
                                                                (pm = (fm + q[(464 + lm) >> 2]) | 0),
                                                                (q[(Zl + 568) >> 2] = pm),
                                                                1 <= (0 | (om = q[(Gl + 48) >> 2])))
                                                            )
                                                                for (
                                                                    gm = (fm + q[(468 + lm) >> 2]) | 0, Gl = (fm + q[(472 + lm) >> 2]) | 0, nm = (fm + q[(476 + lm) >> 2]) | 0, qm = q[(a + 1072) >> 2], Hl = 0;
                                                                    (mm = (pm + w(Hl, 36)) | 0),
                                                                        (q[(mm + 20) >> 2] = nm),
                                                                        (q[(mm + 16) >> 2] = Gl),
                                                                        (q[mm >> 2] = gm),
                                                                        (gm = (((mm = q[(qm + (Hl << 2)) >> 2]) << 2) + gm) | 0),
                                                                        (nm = ((mm = (1 << mm) << 2) + nm) | 0),
                                                                        (Gl = (Gl + mm) | 0),
                                                                        (0 | om) != (0 | (Hl = (Hl + 1) | 0));

                                                                );
                                                            if (((Gl = q[(a + 704) >> 2]), (mm = (fm + q[(516 + lm) >> 2]) | 0), (q[(Zl + 484) >> 2] = mm), 1 <= (0 | (Gl = q[(Gl + 72) >> 2]))))
                                                                for (
                                                                    gm = (fm + q[(520 + lm) >> 2]) | 0, nm = q[(a + 1212) >> 2], Hl = 0;
                                                                    (q[(12 + ((mm + w(Hl, 28)) | 0)) >> 2] = gm), (gm = ((q[(nm + (Hl << 2)) >> 2] << 4) + gm) | 0), (0 | Gl) != (0 | (Hl = (Hl + 1) | 0));

                                                                );
                                                            (q[(Zl + 488) >> 2] = fm + q[(524 + lm) >> 2]),
                                                                (q[(Zl + 492) >> 2] = fm + q[(528 + lm) >> 2]),
                                                                (q[(Zl + 496) >> 2] = fm + q[(532 + lm) >> 2]),
                                                                (q[(Zl + 504) >> 2] = fm + q[(536 + lm) >> 2]),
                                                                (q[(Zl + 536) >> 2] = fm + q[(540 + lm) >> 2]),
                                                                (q[(Zl + 512) >> 2] = fm + q[(544 + lm) >> 2]),
                                                                (q[(Zl + 520) >> 2] = fm + q[(548 + lm) >> 2]),
                                                                (q[(Zl + 524) >> 2] = fm + q[(552 + lm) >> 2]),
                                                                (q[(Zl + 528) >> 2] = fm + q[(556 + lm) >> 2]),
                                                                (q[(Zl + 532) >> 2] = fm + q[(560 + lm) >> 2]);
                                                            c: {
                                                                if (4 <= (om = r[(a + 4) | 0]) >>> 0) {
                                                                    if (
                                                                        ((q[(Zl + 576) >> 2] = fm + q[(480 + lm) >> 2]),
                                                                        (q[(Zl + 584) >> 2] = fm + q[(484 + lm) >> 2]),
                                                                        (Gl = q[(a + 704) >> 2]),
                                                                        (Hl = q[(492 + lm) >> 2]),
                                                                        (mm = (fm + q[(488 + lm) >> 2]) | 0),
                                                                        (q[(Zl + 592) >> 2] = mm),
                                                                        1 <= (0 | (Gl = q[(Gl + 104) >> 2])))
                                                                    )
                                                                        for (
                                                                            gm = (Hl + fm) | 0, nm = q[(a + 1104) >> 2], Hl = 0;
                                                                            (q[(40 + ((mm + w(Hl, 48)) | 0)) >> 2] = gm), (gm = ((q[(nm + (Hl << 2)) >> 2] << 2) + gm) | 0), (0 | Gl) != (0 | (Hl = (Hl + 1) | 0));

                                                                        );
                                                                    (q[(Zl + 608) >> 2] = fm + q[(500 + lm) >> 2]), (q[(Zl + 624) >> 2] = fm + q[(508 + lm) >> 2]);
                                                                } else {
                                                                    if (
                                                                        ((Gl = q[(572 + lm) >> 2]),
                                                                        (Hl = q[(568 + lm) >> 2]),
                                                                        (q[(Zl + 636) >> 2] = fm + q[(564 + lm) >> 2]),
                                                                        (q[(Zl + 640) >> 2] = Hl + fm),
                                                                        q[(q[(a + 704) >> 2] + 20) >> 2] < 1)
                                                                    )
                                                                        break c;
                                                                    for (mm = (Gl + fm) | 0, pm = 0; ; ) {
                                                                        e: {
                                                                            if ((0 | (gm = q[((Gl = pm << 2) + q[(a + 952) >> 2]) >> 2])) <= 0) Gl = (Gl + q[(Zl + 636) >> 2]) | 0;
                                                                            else {
                                                                                for (
                                                                                    nm = (gm + (Hl = q[(Gl + q[(a + 948) >> 2]) >> 2])) | 0, qm = q[(a + 1060) >> 2], gm = 0;
                                                                                    (gm = (q[(qm + (Hl << 2)) >> 2] + gm) | 0), (0 | (Hl = (Hl + 1) | 0)) < (0 | nm);

                                                                                );
                                                                                if (((Gl = (Gl + q[(Zl + 636) >> 2]) | 0), (Hl = mm), gm)) break e;
                                                                            }
                                                                            Hl = gm = 0;
                                                                        }
                                                                        if (((q[Gl >> 2] = Hl), (mm = ((gm << 2) + mm) | 0), !((0 | (pm = (pm + 1) | 0)) < q[(q[(a + 704) >> 2] + 20) >> 2]))) break;
                                                                    }
                                                                }
                                                                om >>> 0 < 5 || ((q[(Zl + 600) >> 2] = fm + q[(496 + lm) >> 2]), (q[(Zl + 616) >> 2] = fm + q[(504 + lm) >> 2]), (q[(Zl + 632) >> 2] = fm + q[(512 + lm) >> 2]));
                                                            }
                                                            (q[(Zl + 644) >> 2] = 1), (q[Zl >> 2] = a), (q[(Zl + 648) >> 2] = 1 & o[(q[(a + 708) >> 2] + 20) | 0]), (fm = q[(a + 704) >> 2]), (pm = q[(fm + 20) >> 2]);
                                                            g: if (!((0 | (q[(Zl + 540) >> 2] = pm)) < 1)) {
                                                                if (
                                                                    ((Gl = (pm + -1) | 0),
                                                                    (qm = q[(a + 952) >> 2]),
                                                                    (rm = q[(a + 940) >> 2]),
                                                                    (sm = q[(a + 932) >> 2]),
                                                                    (tm = q[(a + 936) >> 2]),
                                                                    (um = q[(a + 924) >> 2]),
                                                                    (vm = q[(a + 928) >> 2]),
                                                                    (xm = q[(Zl + 552) >> 2]),
                                                                    (zm = q[(Zl + 544) >> 2]),
                                                                    om >>> 0 < 4)
                                                                )
                                                                    for (;;)
                                                                        if (
                                                                            ((Hl = (zm + w(Gl, 52)) | 0),
                                                                            (gm = ((mm = Gl << 2) + vm) | (q[Hl >> 2] = 0)),
                                                                            (q[(Hl + 4) >> 2] = q[gm >> 2]),
                                                                            (q[(Hl + 8) >> 2] = q[(nm = (mm + um) | 0) >> 2]),
                                                                            (u[(Hl + 12) >> 2] = u[nm >> 2] - u[gm >> 2]),
                                                                            (q[(Hl + 16) >> 2] = q[(mm + tm) >> 2]),
                                                                            (q[(Hl + 44) >> 2] = q[(gm = (mm + sm) | 0) >> 2]),
                                                                            (wm = Aa(x(q[(mm + rm) >> 2]))),
                                                                            (u[(Hl + 20) >> 2] = wm),
                                                                            (u[(Hl + 24) >> 2] = wm * x(1.5)),
                                                                            (ym = q[(mm + qm) >> 2]),
                                                                            (nm = 0),
                                                                            (nm = (q[(Hl + 32) >> 2] = ym) ? (q[(Zl + 560) >> 2] + w(q[(mm + q[(a + 948) >> 2]) >> 2], 28)) | 0 : nm),
                                                                            (q[(Hl + 48) >> 2] = 1),
                                                                            (q[(Hl + 28) >> 2] = nm),
                                                                            (q[(mm + xm) >> 2] = q[gm >> 2]),
                                                                            (Hl = 0 < (0 | Gl)),
                                                                            (Gl = (Gl + -1) | 0),
                                                                            !Hl)
                                                                        )
                                                                            break g;
                                                                for (
                                                                    ym = q[(a + 960) >> 2], Bm = q[(a + 944) >> 2];
                                                                    (Hl = (zm + w(Gl, 52)) | 0),
                                                                        (q[Hl >> 2] = q[((gm = Gl << 2) + Bm) >> 2]),
                                                                        (q[(Hl + 4) >> 2] = q[(mm = (gm + vm) | 0) >> 2]),
                                                                        (q[(Hl + 8) >> 2] = q[(nm = (gm + um) | 0) >> 2]),
                                                                        (u[(Hl + 12) >> 2] = u[nm >> 2] - u[mm >> 2]),
                                                                        (q[(Hl + 16) >> 2] = q[(gm + tm) >> 2]),
                                                                        (q[(Hl + 44) >> 2] = q[(Am = (gm + sm) | 0) >> 2]),
                                                                        (wm = Aa(x(q[(gm + rm) >> 2]))),
                                                                        (u[(Hl + 20) >> 2] = wm),
                                                                        (u[(Hl + 24) >> 2] = wm * x(1.5)),
                                                                        (nm = q[(gm + qm) >> 2]),
                                                                        (q[(Hl + 32) >> 2] = nm),
                                                                        (q[(Hl + 28) >> 2] = nm ? (q[(Zl + 560) >> 2] + w(q[(gm + q[(a + 948) >> 2]) >> 2], 28)) | 0 : 0),
                                                                        (mm = q[(gm + ym) >> 2]),
                                                                        (mm = (q[(Hl + 40) >> 2] = mm) ? (q[(Zl + 584) >> 2] + w(q[(gm + q[(a + 956) >> 2]) >> 2], 28)) | 0 : 0),
                                                                        (q[(Hl + 48) >> 2] = 1),
                                                                        (q[(Hl + 36) >> 2] = mm),
                                                                        (q[(gm + xm) >> 2] = q[Am >> 2]),
                                                                        (Hl = 0 < (0 | Gl)),
                                                                        (Gl = (Gl + -1) | 0),
                                                                        Hl;

                                                                );
                                                            }
                                                            if (
                                                                (4 <= om >>> 0 ? ((q[(Zl + 548) >> 2] = q[(a + 944) >> 2]), (mm = a)) : (ca(q[(Zl + 548) >> 2], 0, pm << 2), (mm = q[Zl >> 2]), (fm = q[(mm + 704) >> 2])),
                                                                (gm = q[(fm + 52) >> 2]),
                                                                1 <= (0 | (q[(Zl + 556) >> 2] = gm)))
                                                            )
                                                                for (
                                                                    Hl = q[(mm + 1056) >> 2], nm = q[(mm + 1192) >> 2], pm = q[(mm + 1060) >> 2], om = q[(Zl + 560) >> 2];
                                                                    (Gl = (om + w((gm = (gm + -1) | 0), 28)) | 0),
                                                                        (q[Gl >> 2] = q[((qm = gm << 2) + pm) >> 2]),
                                                                        (qm = q[(Hl + qm) >> 2]),
                                                                        (q[(Gl + 24) >> 2] = 1),
                                                                        (q[(Gl + 16) >> 2] = 0),
                                                                        (q[(Gl + 20) >> 2] = 1),
                                                                        (q[(Gl + 8) >> 2] = 0),
                                                                        (q[(Gl + 12) >> 2] = 0),
                                                                        (q[(Gl + 4) >> 2] = nm + (qm << 2)),
                                                                        0 < (0 | gm);

                                                                );
                                                            if (((gm = q[(fm + 48) >> 2]), 1 <= (0 | (q[(Zl + 564) >> 2] = gm)))) {
                                                                for (;;) {
                                                                    if (((Gl = (q[(Zl + 568) >> 2] + w((gm = (gm + -1) | 0), 36)) | 0), (nm = q[((fm = gm << 2) + q[(mm + 1072) >> 2]) >> 2]), 1 <= (0 | (q[(Gl + 4) >> 2] = nm))))
                                                                        for (
                                                                            Hl = 0;
                                                                            (q[(q[Gl >> 2] + (Hl << 2)) >> 2] = q[(Zl + 560) >> 2] + w(q[(q[(mm + 1064) >> 2] + ((q[(fm + q[(mm + 1068) >> 2]) >> 2] + Hl) << 2)) >> 2], 28)),
                                                                                (0 | nm) != (0 | (Hl = (Hl + 1) | 0));

                                                                        );
                                                                    if (((q[(Gl + 24) >> 2] = 1), (q[(Gl + 28) >> 2] = 1), (q[(Gl + 8) >> 2] = 1 << nm), !(0 < (0 | gm)))) break;
                                                                }
                                                                (mm = q[Zl >> 2]), (fm = q[(mm + 704) >> 2]);
                                                            }
                                                            if (((Gl = q[fm >> 2]), (0 | (q[(Zl + 4) >> 2] = Gl)) < 1)) Hl = 0;
                                                            else {
                                                                for (
                                                                    qm = q[(mm + 732) >> 2],
                                                                        rm = q[(mm + 736) >> 2],
                                                                        sm = q[(mm + 740) >> 2],
                                                                        nm = q[(mm + 720) >> 2],
                                                                        tm = q[(Zl + 52) >> 2],
                                                                        pm = q[(Zl + 568) >> 2],
                                                                        um = q[(Zl + 8) >> 2],
                                                                        gm = Gl;
                                                                    (om = (um + w((gm = (gm + -1) | 0), 12)) | 0),
                                                                        (q[om >> 2] = pm + w(q[((Hl = gm << 2) + nm) >> 2], 36)),
                                                                        (q[(om + 4) >> 2] = q[(Hl + sm) >> 2]),
                                                                        (q[(om + 8) >> 2] = q[(Hl + rm) >> 2]),
                                                                        (u[(Hl + tm) >> 2] = q[(Hl + qm) >> 2] ? x(1) : x(0)),
                                                                        0 < (0 | gm);

                                                                );
                                                                for (
                                                                    om = q[(Zl + 16) >> 2], Hl = 0;
                                                                    (gm = q[(8 + ((pm + w(q[((qm = (Gl = (Gl + -1) | 0) << 2) + nm) >> 2], 36)) | 0)) >> 2]), (Hl = (Hl + (q[(om + qm) >> 2] = gm)) | 0), 0 < (0 | Gl);

                                                                );
                                                                Gl = q[(Zl + 4) >> 2];
                                                            }
                                                            if (((q[(Zl + 12) >> 2] = Gl), (q[(Zl + 20) >> 2] = Hl), (Gl = q[(fm + 4) >> 2]), 1 <= (0 | (q[(Zl + 304) >> 2] = Gl)))) {
                                                                for (
                                                                    ;
                                                                    (Hl = (q[(Zl + 308) >> 2] + ((Gl = (Gl + -1) | 0) << 5)) | 0),
                                                                        (q[Hl >> 2] = q[(Zl + 568) >> 2] + w(q[((gm = Gl << 2) + q[(mm + 752) >> 2]) >> 2], 36)),
                                                                        (q[(Hl + 4) >> 2] = q[(gm + q[(mm + 764) >> 2]) >> 2]),
                                                                        (q[(Hl + 8) >> 2] = q[(gm + q[(mm + 768) >> 2]) >> 2]),
                                                                        (nm = q[(gm + q[(mm + 772) >> 2]) >> 2]),
                                                                        (q[(Hl + 12) >> 2] = nm),
                                                                        (fm = q[(gm + q[(mm + 776) >> 2]) >> 2]),
                                                                        (q[(Hl + 16) >> 2] = fm),
                                                                        (q[(Hl + 28) >> 2] = q[(gm + q[(mm + 760) >> 2]) >> 2]),
                                                                        nm >>> 0 <= 1
                                                                            ? nm - 1
                                                                                ? ((q[(20 + ((q[(Zl + 60) >> 2] + w(fm, 24)) | 0)) >> 2] = Gl), (q[(Hl + 24) >> 2] = 1), (q[(Hl + 20) >> 2] = 2))
                                                                                : ((q[(8 + ((q[(Zl + 168) >> 2] + w(fm, 12)) | 0)) >> 2] = Gl), (q[(Hl + 24) >> 2] = 3), (q[(Hl + 20) >> 2] = 4))
                                                                            : Y(4, 1179, 0),
                                                                        0 < (0 | Gl);

                                                                );
                                                                (mm = q[Zl >> 2]), (fm = q[(mm + 704) >> 2]);
                                                            }
                                                            gm = q[(fm + 8) >> 2];
                                                            k: if (!((0 | (q[(Zl + 56) >> 2] = gm)) < 1)) {
                                                                if (
                                                                    ((Hl = (gm + -1) | 0),
                                                                    (pm = q[(mm + 796) >> 2]),
                                                                    (om = q[(mm + 804) >> 2]),
                                                                    (qm = q[(mm + 800) >> 2]),
                                                                    (rm = q[(mm + 780) >> 2]),
                                                                    (sm = q[(Zl + 568) >> 2]),
                                                                    (tm = q[(Zl + 60) >> 2]),
                                                                    r[(mm + 4) | 0] < 2)
                                                                )
                                                                    for (;;)
                                                                        if (
                                                                            ((Gl = (tm + w(Hl, 24)) | 0),
                                                                            (q[Gl >> 2] = sm + w(q[((nm = Hl << 2) + rm) >> 2], 36)),
                                                                            (q[(Gl + 4) >> 2] = q[(nm + qm) >> 2]),
                                                                            (q[(Gl + 8) >> 2] = q[(nm + om) >> 2]),
                                                                            (nm = q[(nm + pm) >> 2]),
                                                                            (q[(Gl + 12) >> 2] = 0),
                                                                            (q[(Gl + 16) >> 2] = nm),
                                                                            (Gl = 0 < (0 | Hl)),
                                                                            (Hl = (Hl + -1) | 0),
                                                                            !Gl)
                                                                        )
                                                                            break k;
                                                                for (
                                                                    um = q[(mm + 808) >> 2];
                                                                    (Gl = (tm + w(Hl, 24)) | 0),
                                                                        (q[Gl >> 2] = sm + w(q[((nm = Hl << 2) + rm) >> 2], 36)),
                                                                        (q[(Gl + 4) >> 2] = q[(nm + qm) >> 2]),
                                                                        (q[(Gl + 8) >> 2] = q[(nm + om) >> 2]),
                                                                        (q[(Gl + 16) >> 2] = q[(nm + pm) >> 2]),
                                                                        (q[(Gl + 12) >> 2] = q[(nm + um) >> 2]),
                                                                        (Gl = 0 < (0 | Hl)),
                                                                        (Hl = (Hl + -1) | 0),
                                                                        Gl;

                                                                );
                                                            }
                                                            if (((Hl = q[(fm + 12) >> 2]), 1 <= (0 | (q[(Zl + 164) >> 2] = Hl))))
                                                                for (
                                                                    nm = q[(mm + 828) >> 2], pm = q[(mm + 812) >> 2], om = q[(Zl + 568) >> 2], qm = q[(Zl + 168) >> 2], Gl = Hl;
                                                                    (rm = (qm + w((Gl = (Gl + -1) | 0), 12)) | 0), (q[rm >> 2] = om + w(q[((sm = Gl << 2) + pm) >> 2], 36)), (q[(rm + 4) >> 2] = q[(nm + sm) >> 2]), 0 < (0 | Gl);

                                                                );
                                                            if (((Gl = 0) | gm) < 1) nm = 0;
                                                            else {
                                                                for (
                                                                    pm = q[(Zl + 68) >> 2], om = q[(Zl + 60) >> 2], nm = 0;
                                                                    (Hl = q[(q[(om + w((gm = (gm + -1) | 0), 24)) >> 2] + 8) >> 2]), (nm = ((q[(pm + (gm << 2)) >> 2] = Hl) + nm) | 0), 0 < (0 | gm);

                                                                );
                                                                (Hl = q[(Zl + 164) >> 2]), (gm = q[(Zl + 56) >> 2]);
                                                            }
                                                            if (((q[(Zl + 64) >> 2] = gm), (q[(Zl + 72) >> 2] = nm), (gm = Zl), 1 <= (0 | Hl))) {
                                                                for (
                                                                    pm = q[(Zl + 176) >> 2], om = q[(Zl + 168) >> 2];
                                                                    (nm = q[(q[(om + w((Hl = (Hl + -1) | 0), 12)) >> 2] + 8) >> 2]), (Gl = (Gl + (q[(pm + (Hl << 2)) >> 2] = nm)) | 0), 0 < (0 | Hl);

                                                                );
                                                                Hl = q[(Zl + 164) >> 2];
                                                            }
                                                            if (((q[(gm + 172) >> 2] = Hl), (q[(Zl + 180) >> 2] = Gl), (nm = q[(fm + 16) >> 2]), 1 <= (0 | (q[(Zl + 332) >> 2] = nm)))) {
                                                                for (
                                                                    qm = q[(mm + 872) >> 2],
                                                                        rm = q[(mm + 892) >> 2],
                                                                        sm = q[(mm + 880) >> 2],
                                                                        tm = q[(mm + 876) >> 2],
                                                                        pm = q[(mm + 852) >> 2],
                                                                        om = q[(Zl + 568) >> 2],
                                                                        um = q[(Zl + 336) >> 2],
                                                                        Gl = nm;
                                                                    (Hl = (um + w((Gl = (Gl + -1) | 0), 20)) | 0),
                                                                        (q[Hl >> 2] = om + w(q[((gm = Gl << 2) + pm) >> 2], 36)),
                                                                        (q[(Hl + 4) >> 2] = q[(gm + tm) >> 2]),
                                                                        (q[(Hl + 8) >> 2] = q[(gm + sm) >> 2]),
                                                                        (q[(Hl + 16) >> 2] = q[(gm + rm) >> 2]),
                                                                        (q[(Hl + 12) >> 2] = q[(gm + qm) >> 2]),
                                                                        0 < (0 | Gl);

                                                                );
                                                                for (
                                                                    gm = q[(Zl + 344) >> 2], Hl = 0;
                                                                    (Gl = q[(8 + ((om + w(q[((qm = (nm = (nm + -1) | 0) << 2) + pm) >> 2], 36)) | 0)) >> 2]), (Hl = ((q[(gm + qm) >> 2] = Gl) + Hl) | 0), 0 < (0 | nm);

                                                                );
                                                                if (((q[(Zl + 348) >> 2] = Hl), (nm = q[(Zl + 332) >> 2]), !((0 | (q[(Zl + 340) >> 2] = nm)) < 1)))
                                                                    for (
                                                                        Hl = nm << 2, gm = q[(Zl + 456) >> 2], pm = q[(Zl + 452) >> 2];
                                                                        (q[((om = (Gl = (Hl + -4) | 0) << 2) + pm) >> 2] = 1065353216),
                                                                            (q[((qm = ((Hl <<= 2) - 4) | 0) + pm) >> 2] = 1065353216),
                                                                            (q[(rm = ((Hl = (Hl + -12) | 0) + pm) | 0) >> 2] = 1065353216),
                                                                            (q[(rm + 4) >> 2] = 1065353216),
                                                                            (q[(gm + om) >> 2] = 0),
                                                                            (q[(gm + qm) >> 2] = 1065353216),
                                                                            (q[(Hl = (Hl + gm) | 0) >> 2] = 0),
                                                                            (q[(Hl + 4) >> 2] = 0),
                                                                            (Hl = Gl),
                                                                            0 < (0 | (nm = (nm + -1) | 0));

                                                                    );
                                                            } else (q[(Zl + 340) >> 2] = nm), (q[(Zl + 348) >> 2] = 0);
                                                            if (((nm = q[(fm + 72) >> 2]), 1 <= (0 | (q[(Zl + 480) >> 2] = nm))))
                                                                for (qm = q[(mm + 1208) >> 2], rm = q[(mm + 1224) >> 2], sm = q[(mm + 1220) >> 2], tm = q[(mm + 1216) >> 2], um = q[(mm + 1212) >> 2], vm = q[(Zl + 484) >> 2], gm = 0; ; ) {
                                                                    if (
                                                                        ((Gl = (vm + w(gm, 28)) | 0),
                                                                        (pm = q[((Hl = gm << 2) + um) >> 2]),
                                                                        (q[(Gl + 4) >> 2] = pm),
                                                                        (q[Gl >> 2] = q[(Hl + tm) >> 2]),
                                                                        (om = q[(Hl + sm) >> 2]),
                                                                        (q[(Gl + 16) >> 2] = om),
                                                                        (xm = q[(Hl + rm) >> 2]),
                                                                        (q[(Gl + 20) >> 2] = xm),
                                                                        (q[(Gl + 8) >> 2] = 0),
                                                                        (q[(Gl + 24) >> 2] = 1 + ((om - xm) | 0)),
                                                                        1 <= (0 | pm))
                                                                    )
                                                                        for (
                                                                            xm = q[(Hl + qm) >> 2], zm = q[(Gl + 12) >> 2], ym = q[(mm + 1236) >> 2], Bm = q[(mm + 1228) >> 2], Am = q[(mm + 1232) >> 2], Hl = 0;
                                                                            (q[(4 + (Gl = (zm + (Hl << 4)) | 0)) >> 2] = q[((om = (Hl + xm) << 2) + Am) >> 2]),
                                                                                (q[Gl >> 2] = q[(om + Bm) >> 2]),
                                                                                (om = q[(om + ym) >> 2]),
                                                                                (q[(Gl + 12) >> 2] = 0),
                                                                                (q[(Gl + 8) >> 2] = om),
                                                                                (0 | pm) != (0 | (Hl = (Hl + 1) | 0));

                                                                        );
                                                                    if ((0 | nm) == (0 | (gm = (gm + 1) | 0))) break;
                                                                }
                                                            if (((Hl = q[(fm + 80) >> 2]), (0 | (q[(Zl + 500) >> 2] = Hl)) < 1)) gm = 0;
                                                            else {
                                                                for (
                                                                    om = q[(mm + 1280) >> 2],
                                                                        qm = q[(mm + 1268) >> 2],
                                                                        rm = q[(mm + 1276) >> 2],
                                                                        sm = q[(mm + 1272) >> 2],
                                                                        tm = q[(mm + 1264) >> 2],
                                                                        um = q[(mm + 1260) >> 2],
                                                                        nm = q[(mm + 1248) >> 2],
                                                                        pm = q[(Zl + 568) >> 2],
                                                                        vm = q[(Zl + 504) >> 2];
                                                                    (Gl = (vm + w((Hl = (Hl + -1) | 0), 24)) | 0),
                                                                        (q[Gl >> 2] = pm + w(q[((gm = Hl << 2) + nm) >> 2], 36)),
                                                                        (q[(Gl + 4) >> 2] = q[(gm + um) >> 2]),
                                                                        (q[(Gl + 8) >> 2] = q[(gm + tm) >> 2]),
                                                                        (q[(Gl + 12) >> 2] = q[(gm + sm) >> 2]),
                                                                        (gm = q[(gm + qm) >> 2]),
                                                                        (q[(Gl + 20) >> 2] = om + (gm << 1)),
                                                                        (q[(Gl + 16) >> 2] = rm + (gm << 2)),
                                                                        0 < (0 | Hl);

                                                                );
                                                                if ((0 | (Hl = q[(Zl + 500) >> 2])) < 1) gm = 0;
                                                                else {
                                                                    for (
                                                                        om = q[(Zl + 512) >> 2], gm = 0;
                                                                        (Gl = q[(8 + ((pm + w(q[((qm = (Hl = (Hl + -1) | 0) << 2) + nm) >> 2], 36)) | 0)) >> 2]), (gm = ((q[(om + qm) >> 2] = Gl) + gm) | 0), 0 < (0 | Hl);

                                                                    );
                                                                    Hl = q[(Zl + 500) >> 2];
                                                                }
                                                            }
                                                            (q[(Zl + 508) >> 2] = Hl), (q[(Zl + 516) >> 2] = gm);
                                                            o: if (4 <= r[(a + 4) | 0]) {
                                                                if (!((nm = r[(mm + 4) | 0]) >>> 0 < 4)) {
                                                                    if (((Hl = q[(fm + 120) >> 2]), 1 <= (0 | (q[(Zl + 572) >> 2] = Hl)))) {
                                                                        for (
                                                                            om = q[(mm + 1172) >> 2], qm = q[(Zl + 576) >> 2];
                                                                            (nm =
                                                                                (0 | (fm = q[((Gl = (Hl = (Hl + -1) | 0) << 2) + om) >> 2])) < 0
                                                                                    ? (fm = pm = gm = 0)
                                                                                    : ((gm = ((nm = q[(Gl + q[(mm + 1176) >> 2]) >> 2] << 2) + q[(mm + 1188) >> 2]) | 0),
                                                                                      (pm = q[(Gl + q[(mm + 1180) >> 2]) >> 2]),
                                                                                      (fm = (q[(Zl + 544) >> 2] + w(fm, 52)) | 0),
                                                                                      (nm + q[(mm + 1184) >> 2]) | 0)),
                                                                                (Gl = (qm + w(Hl, 20)) | 0),
                                                                                (q[(Gl + 12) >> 2] = pm),
                                                                                (q[(Gl + 8) >> 2] = gm),
                                                                                (q[(Gl + 4) >> 2] = nm),
                                                                                (q[Gl >> 2] = fm),
                                                                                0 < (0 | Hl);

                                                                        );
                                                                        if (((mm = q[Zl >> 2]), (nm = r[(mm + 4) | 0]) >>> 0 < 4)) break o;
                                                                    }
                                                                    if (((fm = q[(mm + 704) >> 2]), (gm = q[(fm + 100) >> 2]), 1 <= (0 | (q[(Zl + 580) >> 2] = gm))))
                                                                        for (
                                                                            pm = q[(mm + 1084) >> 2], om = q[(mm + 1076) >> 2], qm = q[(mm + 1192) >> 2], rm = q[(mm + 1080) >> 2], sm = q[(Zl + 584) >> 2];
                                                                            (Gl = (sm + w((gm = (gm + -1) | 0), 28)) | 0),
                                                                                (q[Gl >> 2] = q[((Hl = gm << 2) + rm) >> 2]),
                                                                                (q[(Gl + 4) >> 2] = qm + (q[(Hl + om) >> 2] << 2)),
                                                                                (Hl = q[(Hl + pm) >> 2]),
                                                                                (q[(Gl + 20) >> 2] = 1),
                                                                                (q[(Gl + 24) >> 2] = 1),
                                                                                (q[(Gl + 12) >> 2] = 0),
                                                                                (q[(Gl + 16) >> 2] = 0),
                                                                                (q[(Gl + 8) >> 2] = Hl),
                                                                                0 < (0 | gm);

                                                                        );
                                                                    if (((gm = q[(fm + 104) >> 2]), 1 <= (0 | (q[(Zl + 588) >> 2] = gm)))) {
                                                                        for (;;) {
                                                                            if (
                                                                                ((Gl = (q[(Zl + 592) >> 2] + w((gm = (gm + -1) | 0), 48)) | 0),
                                                                                (q[Gl >> 2] = q[(Zl + 584) >> 2] + w(q[((nm = gm << 2) + q[(mm + 1088) >> 2]) >> 2], 28)),
                                                                                (Hl = q[(nm + q[(mm + 1092) >> 2]) >> 2]),
                                                                                (q[(Gl + 28) >> 2] = 1),
                                                                                (q[(Gl + 32) >> 2] = 1),
                                                                                (q[(Gl + 8) >> 2] = 0),
                                                                                (q[(Gl + 4) >> 2] = Hl),
                                                                                (fm = q[(nm + q[(mm + 1104) >> 2]) >> 2]),
                                                                                1 <= (0 | (q[(Gl + 36) >> 2] = fm)))
                                                                            )
                                                                                for (
                                                                                    Hl = 0;
                                                                                    (q[(q[(Gl + 40) >> 2] + (Hl << 2)) >> 2] = q[(Zl + 576) >> 2] + w(q[(q[(mm + 1168) >> 2] + ((q[(nm + q[(mm + 1100) >> 2]) >> 2] + Hl) << 2)) >> 2], 20)),
                                                                                        (0 | fm) != (0 | (Hl = (Hl + 1) | 0));

                                                                                );
                                                                            if (!(1 <= (0 | gm))) break;
                                                                        }
                                                                        (mm = q[Zl >> 2]), (nm = r[(mm + 4) | 0]);
                                                                    }
                                                                    if (!(nm >>> 0 < 4)) {
                                                                        if (((nm = q[(a + 704) >> 2]), (Hl = q[(nm + 108) >> 2]), 1 <= (0 | (q[(Zl + 604) >> 2] = Hl))))
                                                                            for (
                                                                                fm = q[(a + 1124) >> 2], pm = q[(a + 1128) >> 2], om = q[(a + 1120) >> 2], qm = q[(Zl + 592) >> 2], rm = q[(Zl + 608) >> 2];
                                                                                (Gl = (rm + w((Hl = (Hl + -1) | 0), 12)) | 0),
                                                                                    (q[Gl >> 2] = q[((gm = Hl << 2) + om) >> 2]),
                                                                                    (q[(Gl + 4) >> 2] = q[(gm + pm) >> 2]),
                                                                                    (q[(Gl + 8) >> 2] = qm + w(q[(fm + gm) >> 2], 48)),
                                                                                    0 < (0 | Hl);

                                                                            );
                                                                        if (((Hl = q[(nm + 112) >> 2]), 1 <= (0 | (q[(Zl + 620) >> 2] = Hl))))
                                                                            for (
                                                                                nm = q[(a + 1148) >> 2], fm = q[(a + 1152) >> 2], pm = q[(a + 1144) >> 2], om = q[(Zl + 592) >> 2], qm = q[(Zl + 624) >> 2];
                                                                                (Gl = (qm + w((Hl = (Hl + -1) | 0), 12)) | 0),
                                                                                    (q[Gl >> 2] = q[((gm = Hl << 2) + pm) >> 2]),
                                                                                    (q[(Gl + 4) >> 2] = q[(fm + gm) >> 2]),
                                                                                    (q[(Gl + 8) >> 2] = om + w(q[(gm + nm) >> 2], 48)),
                                                                                    0 < (0 | Hl);

                                                                            );
                                                                        if (
                                                                            ((gm = q[(mm + 1192) >> 2]),
                                                                            (Gl = q[(q[(mm + 704) >> 2] + 20) >> 2]),
                                                                            (q[(Zl + 640) >> 2] = q[(mm + 972) >> 2]),
                                                                            (nm = q[(mm + 964) >> 2]),
                                                                            (q[(Zl + 636) >> 2] = nm),
                                                                            !((0 | Gl) < (Hl = 1)) && ((q[nm >> 2] = gm + (q[q[(mm + 968) >> 2] >> 2] << 2)), 1 != (0 | Gl)))
                                                                        )
                                                                            for (; (q[((nm = Hl << 2) + q[(Zl + 636) >> 2]) >> 2] = gm + (q[(nm + q[(mm + 968) >> 2]) >> 2] << 2)), (0 | Gl) != (0 | (Hl = (Hl + 1) | 0)); );
                                                                    }
                                                                }
                                                            } else if (!(q[(fm + 20) >> 2] < 1))
                                                                for (fm = 0; ; ) {
                                                                    if (((gm = q[((pm = fm << 2) + q[(Zl + 636) >> 2]) >> 2]), 1 <= ((Gl = 0) | (Hl = q[(pm + q[(mm + 952) >> 2]) >> 2]))))
                                                                        for (rm = (Hl + (om = q[(pm + q[(mm + 948) >> 2]) >> 2])) | 0, sm = q[(mm + 1060) >> 2], tm = q[(mm + 1056) >> 2]; ; ) {
                                                                            if (1 <= (0 | (qm = q[((Hl = om << 2) + sm) >> 2])))
                                                                                for (um = (qm + (nm = q[(Hl + tm) >> 2])) | 0, vm = q[(mm + 1192) >> 2]; ; ) {
                                                                                    (qm = (gm + (Gl << 2)) | 0), (wm = u[(vm + (nm << 2)) >> 2]), (Hl = gm);
                                                                                    q: {
                                                                                        if (0 < (0 | Gl))
                                                                                            for (;;) {
                                                                                                if (u[Hl >> 2] == wm) break q;
                                                                                                if (!((Hl = (Hl + 4) | 0) >>> 0 < qm >>> 0)) break;
                                                                                            }
                                                                                        (u[qm >> 2] = wm), (Gl = (Gl + 1) | 0);
                                                                                    }
                                                                                    if (!((0 | (nm = (nm + 1) | 0)) < (0 | um))) break;
                                                                                }
                                                                            if (!((0 | (om = (om + 1) | 0)) < (0 | rm))) break;
                                                                        }
                                                                    if (
                                                                        ((function (a, rn) {
                                                                            var sn,
                                                                                In,
                                                                                vn = 0,
                                                                                wn = 0,
                                                                                Hn = 0;
                                                                            (q[(8 + (L = sn = (L - 208) | 0)) >> 2] = 1), (q[(12 + sn) >> 2] = 0);
                                                                            a: if ((In = rn << 2)) {
                                                                                for (
                                                                                    q[(16 + sn) >> 2] = 4, Hn = rn = q[(20 + sn) >> 2] = 4, vn = 2;
                                                                                    (rn = (((Hn + 4) | 0) + (wn = rn)) | 0), (q[(((16 + sn) | 0) + (vn << 2)) >> 2] = rn), (vn = (vn + 1) | 0), (Hn = wn), rn >>> 0 < In >>> 0;

                                                                                );
                                                                                if ((wn = (((a + In) | 0) - 4) | 0) >>> 0 <= a >>> 0) rn = vn = 1;
                                                                                else
                                                                                    for (
                                                                                        rn = vn = 1;
                                                                                        (rn =
                                                                                            3 == (3 & vn)
                                                                                                ? (ta(a, rn, (16 + sn) | 0), ma((8 + sn) | 0, 2), (rn + 2) | 0)
                                                                                                : (t[(((16 + sn) | 0) + ((Hn = (rn + -1) | 0) << 2)) >> 2] >= (wn - a) >>> 0
                                                                                                      ? la(a, (8 + sn) | 0, rn, 0, (16 + sn) | 0)
                                                                                                      : ta(a, rn, (16 + sn) | 0),
                                                                                                  1 == (0 | rn) ? (ka((8 + sn) | 0, 1), 0) : (ka((8 + sn) | 0, Hn), 1))),
                                                                                            (vn = 1 | q[(8 + sn) >> 2]),
                                                                                            (q[(8 + sn) >> 2] = vn),
                                                                                            (a = (a + 4) | 0) >>> 0 < wn >>> 0;

                                                                                    );
                                                                                for (la(a, (8 + sn) | 0, rn, 0, (16 + sn) | 0); ; ) {
                                                                                    e: {
                                                                                        f: {
                                                                                            g: {
                                                                                                if (!((1 != (0 | rn)) | (1 != (0 | vn)))) {
                                                                                                    if (q[(12 + sn) >> 2]) break g;
                                                                                                    break a;
                                                                                                }
                                                                                                if (1 < (0 | rn)) break f;
                                                                                            }
                                                                                            ma((8 + sn) | 0, (wn = Oa((8 + sn) | 0))), (vn = q[(8 + sn) >> 2]), (rn = (rn + wn) | 0);
                                                                                            break e;
                                                                                        }
                                                                                        ka((8 + sn) | 0, 2),
                                                                                            (q[(8 + sn) >> 2] = 7 ^ q[(8 + sn) >> 2]),
                                                                                            ma((8 + sn) | 0, 1),
                                                                                            la(((Hn = (a + -4) | 0) - q[(((16 + sn) | 0) + ((wn = (rn + -2) | 0) << 2)) >> 2]) | 0, (8 + sn) | 0, (rn + -1) | 0, 1, (16 + sn) | 0),
                                                                                            ka((8 + sn) | 0, 1),
                                                                                            (vn = 1 | q[(8 + sn) >> 2]),
                                                                                            (q[(8 + sn) >> 2] = vn),
                                                                                            la(Hn, (8 + sn) | 0, wn, 1, (16 + sn) | 0),
                                                                                            (rn = wn);
                                                                                    }
                                                                                    a = (a + -4) | 0;
                                                                                }
                                                                            }
                                                                            L = (208 + sn) | 0;
                                                                        })(gm, Gl),
                                                                        (q[(pm + q[(Zl + 640) >> 2]) >> 2] = Gl),
                                                                        !((0 | (fm = (fm + 1) | 0)) < q[(q[(mm + 704) >> 2] + 20) >> 2]))
                                                                    )
                                                                        break;
                                                                }
                                                            if (!((r[(a + 4) | 0] < 5) | (r[(q[Zl >> 2] + 4) | 0] < 4))) {
                                                                if (((Gl = q[(a + 704) >> 2]), (Hl = q[(Gl + 128) >> 2]), 1 <= (0 | (q[(Zl + 596) >> 2] = Hl))))
                                                                    for (
                                                                        nm = q[(a + 1112) >> 2], fm = q[(a + 1116) >> 2], pm = q[(a + 1108) >> 2], om = q[(Zl + 592) >> 2], qm = q[(Zl + 600) >> 2];
                                                                        (mm = (qm + w((Hl = (Hl + -1) | 0), 12)) | 0),
                                                                            (q[mm >> 2] = q[((gm = Hl << 2) + pm) >> 2]),
                                                                            (q[(mm + 4) >> 2] = q[(fm + gm) >> 2]),
                                                                            (q[(mm + 8) >> 2] = om + w(q[(gm + nm) >> 2], 48)),
                                                                            0 < (0 | Hl);

                                                                    );
                                                                if (((Hl = q[(Gl + 132) >> 2]), 1 <= (0 | (q[(Zl + 612) >> 2] = Hl))))
                                                                    for (
                                                                        nm = q[(a + 1136) >> 2], fm = q[(a + 1140) >> 2], pm = q[(a + 1132) >> 2], om = q[(Zl + 592) >> 2], qm = q[(Zl + 616) >> 2];
                                                                        (mm = (qm + w((Hl = (Hl + -1) | 0), 12)) | 0),
                                                                            (q[mm >> 2] = q[((gm = Hl << 2) + pm) >> 2]),
                                                                            (q[(mm + 4) >> 2] = q[(fm + gm) >> 2]),
                                                                            (q[(mm + 8) >> 2] = om + w(q[(gm + nm) >> 2], 48)),
                                                                            0 < (0 | Hl);

                                                                    );
                                                                if (((Hl = q[(Gl + 136) >> 2]), !((0 | (q[(Zl + 628) >> 2] = Hl)) < 1)))
                                                                    for (
                                                                        mm = q[(a + 1160) >> 2], gm = q[(a + 1164) >> 2], nm = q[(a + 1156) >> 2], fm = q[(Zl + 592) >> 2], pm = q[(Zl + 632) >> 2];
                                                                        (a = (pm + w((Hl = (Hl + -1) | 0), 12)) | 0),
                                                                            (q[a >> 2] = q[((Gl = Hl << 2) + nm) >> 2]),
                                                                            (q[(a + 4) >> 2] = q[(Gl + gm) >> 2]),
                                                                            (q[(a + 8) >> 2] = fm + w(q[(Gl + mm) >> 2], 48)),
                                                                            0 < (0 | Hl);

                                                                    );
                                                            }
                                                            ua(Zl);
                                                        }
                                                        return (L = (576 + lm) | 0), Zl;
                                                    })(a, Wa, Xa))
                                                )
                                                    break a;
                                                (q[(36 + Ya) >> 2] = 2209), (q[(32 + Ya) >> 2] = 2361), Y(4, 1294, (32 + Ya) | 0);
                                            }
                                        else (q[(20 + Ya) >> 2] = 1444), (q[(16 + Ya) >> 2] = 2361), Y(4, 1294, (16 + Ya) | 0);
                                    else (q[(4 + Ya) >> 2] = 2132), (q[Ya >> 2] = 2361), Y(4, 1294, Ya);
                                    Wa = 0;
                                }
                                return (L = (64 + Ya) | 0), 0 | Wa;
                            }
                            function xa(a) {
                                var Wa;
                                return (
                                    (L = Wa = (L - 16) | 0),
                                    (a = (a |= 0)
                                        ? (function (a) {
                                              var Gl;
                                              return ca((16 + (L = Gl = (L - 576) | 0)) | 0, 0, 560), Fa(a, (16 + Gl) | 0, (12 + Gl) | 0), (L = (576 + Gl) | 0), q[(12 + Gl) >> 2];
                                          })(a)
                                        : ((q[(4 + Wa) >> 2] = 2132), (q[Wa >> 2] = 2343), Y(4, 1294, Wa), 0)),
                                    (L = (16 + Wa) | 0),
                                    0 | a
                                );
                            }
                            function ya(a) {
                                var Xa = r[(a + 4) | 0];
                                X(q[(a + 704) >> 2], 4, 64),
                                    da(q[(a + 708) >> 2], 4),
                                    da((q[(a + 708) >> 2] + 4) | 0, 4),
                                    da((q[(a + 708) >> 2] + 8) | 0, 4),
                                    da((q[(a + 708) >> 2] + 12) | 0, 4),
                                    da((q[(a + 708) >> 2] + 16) | 0, 4),
                                    da((q[(a + 708) >> 2] + 20) | 0, 1),
                                    X(q[(a + 720) >> 2], 4, q[q[(a + 704) >> 2] >> 2]),
                                    X(q[(a + 724) >> 2], 4, q[q[(a + 704) >> 2] >> 2]),
                                    X(q[(a + 728) >> 2], 4, q[q[(a + 704) >> 2] >> 2]),
                                    X(q[(a + 732) >> 2], 4, q[q[(a + 704) >> 2] >> 2]),
                                    X(q[(a + 736) >> 2], 4, q[q[(a + 704) >> 2] >> 2]),
                                    X(q[(a + 740) >> 2], 4, q[q[(a + 704) >> 2] >> 2]),
                                    X(q[(a + 752) >> 2], 4, q[(q[(a + 704) >> 2] + 4) >> 2]),
                                    X(q[(a + 756) >> 2], 4, q[(q[(a + 704) >> 2] + 4) >> 2]),
                                    X(q[(a + 760) >> 2], 4, q[(q[(a + 704) >> 2] + 4) >> 2]),
                                    X(q[(a + 764) >> 2], 4, q[(q[(a + 704) >> 2] + 4) >> 2]),
                                    X(q[(a + 768) >> 2], 4, q[(q[(a + 704) >> 2] + 4) >> 2]),
                                    X(q[(a + 772) >> 2], 4, q[(q[(a + 704) >> 2] + 4) >> 2]),
                                    X(q[(a + 776) >> 2], 4, q[(q[(a + 704) >> 2] + 4) >> 2]),
                                    X(q[(a + 780) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]),
                                    X(q[(a + 784) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]),
                                    X(q[(a + 788) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]),
                                    X(q[(a + 796) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]),
                                    X(q[(a + 800) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]),
                                    X(q[(a + 804) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]),
                                    X(q[(a + 812) >> 2], 4, q[(q[(a + 704) >> 2] + 12) >> 2]),
                                    X(q[(a + 816) >> 2], 4, q[(q[(a + 704) >> 2] + 12) >> 2]),
                                    X(q[(a + 820) >> 2], 4, q[(q[(a + 704) >> 2] + 12) >> 2]),
                                    X(q[(a + 828) >> 2], 4, q[(q[(a + 704) >> 2] + 12) >> 2]),
                                    X(q[(a + 852) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 856) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 860) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 868) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 872) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 876) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 880) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 884) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 888) >> 2], 1, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 892) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 896) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 900) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 904) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 908) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 912) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                    X(q[(a + 924) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                    X(q[(a + 928) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                    X(q[(a + 932) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                    X(q[(a + 936) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                    X(q[(a + 940) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                    X(q[(a + 948) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                    X(q[(a + 952) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                    X(q[(a + 976) >> 2], 4, q[(q[(a + 704) >> 2] + 24) >> 2]),
                                    X(q[(a + 980) >> 2], 4, q[(q[(a + 704) >> 2] + 28) >> 2]),
                                    X(q[(a + 984) >> 2], 4, q[(q[(a + 704) >> 2] + 28) >> 2]),
                                    X(q[(a + 996) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                    X(q[(a + 1e3) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                    X(q[(a + 1004) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                    X(q[(a + 1008) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                    X(q[(a + 1012) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                    X(q[(a + 1016) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                    X(q[(a + 1020) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                    X(q[(a + 1032) >> 2], 4, q[(q[(a + 704) >> 2] + 36) >> 2]),
                                    X(q[(a + 1036) >> 2], 4, q[(q[(a + 704) >> 2] + 36) >> 2]),
                                    X(q[(a + 1040) >> 2], 4, q[(q[(a + 704) >> 2] + 36) >> 2]),
                                    X(q[(a + 1052) >> 2], 4, q[(q[(a + 704) >> 2] + 40) >> 2]),
                                    X(q[(a + 1064) >> 2], 4, q[(q[(a + 704) >> 2] + 44) >> 2]),
                                    X(q[(a + 1068) >> 2], 4, q[(q[(a + 704) >> 2] + 48) >> 2]),
                                    X(q[(a + 1072) >> 2], 4, q[(q[(a + 704) >> 2] + 48) >> 2]),
                                    X(q[(a + 1056) >> 2], 4, q[(q[(a + 704) >> 2] + 52) >> 2]),
                                    X(q[(a + 1060) >> 2], 4, q[(q[(a + 704) >> 2] + 52) >> 2]),
                                    X(q[(a + 1192) >> 2], 4, q[(q[(a + 704) >> 2] + 56) >> 2]),
                                    X(q[(a + 1196) >> 2], 4, q[(q[(a + 704) >> 2] + 60) >> 2]),
                                    X(q[(a + 1200) >> 2], 2, q[(q[(a + 704) >> 2] + 64) >> 2]),
                                    X(q[(a + 1204) >> 2], 4, q[(q[(a + 704) >> 2] + 68) >> 2]),
                                    X(q[(a + 1208) >> 2], 4, q[(q[(a + 704) >> 2] + 72) >> 2]),
                                    X(q[(a + 1212) >> 2], 4, q[(q[(a + 704) >> 2] + 72) >> 2]),
                                    X(q[(a + 1216) >> 2], 4, q[(q[(a + 704) >> 2] + 72) >> 2]),
                                    X(q[(a + 1220) >> 2], 4, q[(q[(a + 704) >> 2] + 72) >> 2]),
                                    X(q[(a + 1224) >> 2], 4, q[(q[(a + 704) >> 2] + 72) >> 2]),
                                    X(q[(a + 1228) >> 2], 4, q[(q[(a + 704) >> 2] + 76) >> 2]),
                                    X(q[(a + 1232) >> 2], 4, q[(q[(a + 704) >> 2] + 76) >> 2]),
                                    X(q[(a + 1236) >> 2], 4, q[(q[(a + 704) >> 2] + 76) >> 2]),
                                    X(q[(a + 1248) >> 2], 4, q[(q[(a + 704) >> 2] + 80) >> 2]),
                                    X(q[(a + 1252) >> 2], 4, q[(q[(a + 704) >> 2] + 80) >> 2]),
                                    X(q[(a + 1256) >> 2], 4, q[(q[(a + 704) >> 2] + 80) >> 2]),
                                    X(q[(a + 1260) >> 2], 4, q[(q[(a + 704) >> 2] + 80) >> 2]),
                                    X(q[(a + 1264) >> 2], 4, q[(q[(a + 704) >> 2] + 80) >> 2]),
                                    X(q[(a + 1268) >> 2], 4, q[(q[(a + 704) >> 2] + 80) >> 2]),
                                    X(q[(a + 1272) >> 2], 4, q[(q[(a + 704) >> 2] + 80) >> 2]),
                                    X(q[(a + 1276) >> 2], 4, q[(q[(a + 704) >> 2] + 84) >> 2]),
                                    X(q[(a + 1280) >> 2], 2, q[(q[(a + 704) >> 2] + 84) >> 2]),
                                    X(q[(a + 1284) >> 2], 4, q[(q[(a + 704) >> 2] + 88) >> 2]),
                                    Xa >>> 0 < 2 ||
                                        (X(q[(a + 808) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]), Xa >>> 0 < 4) ||
                                        (X(q[(a + 968) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                        X(q[(a + 972) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                        X(q[(a + 792) >> 2], 4, q[(q[(a + 704) >> 2] + 8) >> 2]),
                                        X(q[(a + 824) >> 2], 4, q[(q[(a + 704) >> 2] + 12) >> 2]),
                                        X(q[(a + 864) >> 2], 4, q[(q[(a + 704) >> 2] + 16) >> 2]),
                                        X(q[(a + 1288) >> 2], 4, q[(q[(a + 704) >> 2] + 92) >> 2]),
                                        X(q[(a + 1292) >> 2], 4, q[(q[(a + 704) >> 2] + 92) >> 2]),
                                        X(q[(a + 1296) >> 2], 4, q[(q[(a + 704) >> 2] + 92) >> 2]),
                                        X(q[(a + 1300) >> 2], 4, q[(q[(a + 704) >> 2] + 96) >> 2]),
                                        X(q[(a + 1304) >> 2], 4, q[(q[(a + 704) >> 2] + 96) >> 2]),
                                        X(q[(a + 1308) >> 2], 4, q[(q[(a + 704) >> 2] + 96) >> 2]),
                                        X(q[(a + 944) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                        X(q[(a + 956) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                        X(q[(a + 960) >> 2], 4, q[(q[(a + 704) >> 2] + 20) >> 2]),
                                        X(q[(a + 1076) >> 2], 4, q[(q[(a + 704) >> 2] + 100) >> 2]),
                                        X(q[(a + 1080) >> 2], 4, q[(q[(a + 704) >> 2] + 100) >> 2]),
                                        X(q[(a + 1084) >> 2], 4, q[(q[(a + 704) >> 2] + 100) >> 2]),
                                        X(q[(a + 1088) >> 2], 4, q[(q[(a + 704) >> 2] + 104) >> 2]),
                                        X(q[(a + 1092) >> 2], 4, q[(q[(a + 704) >> 2] + 104) >> 2]),
                                        X(q[(a + 1096) >> 2], 4, q[(q[(a + 704) >> 2] + 104) >> 2]),
                                        X(q[(a + 1100) >> 2], 4, q[(q[(a + 704) >> 2] + 104) >> 2]),
                                        X(q[(a + 1104) >> 2], 4, q[(q[(a + 704) >> 2] + 104) >> 2]),
                                        X(q[(a + 1120) >> 2], 4, q[(q[(a + 704) >> 2] + 108) >> 2]),
                                        X(q[(a + 1124) >> 2], 4, q[(q[(a + 704) >> 2] + 108) >> 2]),
                                        X(q[(a + 1128) >> 2], 4, q[(q[(a + 704) >> 2] + 108) >> 2]),
                                        X(q[(a + 1144) >> 2], 4, q[(q[(a + 704) >> 2] + 112) >> 2]),
                                        X(q[(a + 1148) >> 2], 4, q[(q[(a + 704) >> 2] + 112) >> 2]),
                                        X(q[(a + 1152) >> 2], 4, q[(q[(a + 704) >> 2] + 112) >> 2]),
                                        X(q[(a + 1168) >> 2], 4, q[(q[(a + 704) >> 2] + 116) >> 2]),
                                        X(q[(a + 1172) >> 2], 4, q[(q[(a + 704) >> 2] + 120) >> 2]),
                                        X(q[(a + 1176) >> 2], 4, q[(q[(a + 704) >> 2] + 120) >> 2]),
                                        X(q[(a + 1180) >> 2], 4, q[(q[(a + 704) >> 2] + 120) >> 2]),
                                        X(q[(a + 1184) >> 2], 4, q[(q[(a + 704) >> 2] + 124) >> 2]),
                                        X(q[(a + 1188) >> 2], 4, q[(q[(a + 704) >> 2] + 124) >> 2]),
                                        4 != (0 | Xa) &&
                                            (X(q[(a + 988) >> 2], 4, q[(q[(a + 704) >> 2] + 28) >> 2]),
                                            X(q[(a + 992) >> 2], 4, q[(q[(a + 704) >> 2] + 28) >> 2]),
                                            X(q[(a + 1024) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                            X(q[(a + 1028) >> 2], 4, q[(q[(a + 704) >> 2] + 32) >> 2]),
                                            X(q[(a + 1044) >> 2], 4, q[(q[(a + 704) >> 2] + 36) >> 2]),
                                            X(q[(a + 1048) >> 2], 4, q[(q[(a + 704) >> 2] + 36) >> 2]),
                                            X(q[(a + 1108) >> 2], 4, q[(q[(a + 704) >> 2] + 128) >> 2]),
                                            X(q[(a + 1112) >> 2], 4, q[(q[(a + 704) >> 2] + 128) >> 2]),
                                            X(q[(a + 1116) >> 2], 4, q[(q[(a + 704) >> 2] + 128) >> 2]),
                                            X(q[(a + 1132) >> 2], 4, q[(q[(a + 704) >> 2] + 132) >> 2]),
                                            X(q[(a + 1136) >> 2], 4, q[(q[(a + 704) >> 2] + 132) >> 2]),
                                            X(q[(a + 1140) >> 2], 4, q[(q[(a + 704) >> 2] + 132) >> 2]),
                                            X(q[(a + 1156) >> 2], 4, q[(q[(a + 704) >> 2] + 136) >> 2]),
                                            X(q[(a + 1160) >> 2], 4, q[(q[(a + 704) >> 2] + 136) >> 2]),
                                            X(q[(a + 1164) >> 2], 4, q[(q[(a + 704) >> 2] + 136) >> 2])));
                            }
                            function za(a, Za) {
                                var $a = 0,
                                    lb = 0,
                                    mb = 0,
                                    ob = 0,
                                    pb = 0,
                                    rb = 0,
                                    nb = (a + Za) | 0;
                                a: {
                                    b: if (!(1 & ($a = q[(a + 4) >> 2]))) {
                                        if (!(3 & $a)) break a;
                                        if (((Za = (($a = q[a >> 2]) + Za) | 0), (0 | (a = (a - $a) | 0)) != q[2100]))
                                            if ($a >>> 0 <= 255)
                                                (mb = $a >>> 3), ($a = q[(a + 8) >> 2]), (0 | (lb = q[(a + 12) >> 2])) == (0 | $a) ? ((rb = q[2095] & fd(mb)), (q[2095] = rb)) : ((q[($a + 12) >> 2] = lb), (q[(lb + 8) >> 2] = $a));
                                            else {
                                                if (((pb = q[(a + 24) >> 2]), (0 | ($a = q[(a + 12) >> 2])) != (0 | a))) (lb = q[(a + 8) >> 2]), (q[(lb + 12) >> 2] = $a), (q[($a + 8) >> 2] = lb);
                                                else if ((mb = (mb = q[(lb = (a + 20) | 0) >> 2]) || q[(lb = (a + 16) | 0) >> 2])) {
                                                    for (; (ob = lb), (mb = q[(lb = (($a = mb) + 20) | 0) >> 2]) || ((lb = ($a + 16) | 0), (mb = q[($a + 16) >> 2])); );
                                                    q[ob >> 2] = 0;
                                                } else $a = 0;
                                                if (pb) {
                                                    lb = q[(a + 28) >> 2];
                                                    e: {
                                                        if (q[(mb = (8684 + (lb << 2)) | 0) >> 2] == (0 | a)) {
                                                            if ((q[mb >> 2] = $a)) break e;
                                                            (rb = q[2096] & fd(lb)), (q[2096] = rb);
                                                            break b;
                                                        }
                                                        if (!(q[(pb + (q[(pb + 16) >> 2] == (0 | a) ? 16 : 20)) >> 2] = $a)) break b;
                                                    }
                                                    (q[($a + 24) >> 2] = pb), (lb = q[(a + 16) >> 2]) && ((q[($a + 16) >> 2] = lb), (q[(lb + 24) >> 2] = $a)), (lb = q[(a + 20) >> 2]) && ((q[($a + 20) >> 2] = lb), (q[(lb + 24) >> 2] = $a));
                                                }
                                            }
                                        else if (3 == (3 & ($a = q[(4 + nb) >> 2]))) return (q[2097] = Za), (q[(4 + nb) >> 2] = -2 & $a), (q[(a + 4) >> 2] = 1 | Za), (q[nb >> 2] = Za);
                                    }
                                    f: {
                                        if (!(2 & ($a = q[(4 + nb) >> 2]))) {
                                            if (q[2101] == (0 | nb)) {
                                                if (((q[2101] = a), (Za = (q[2098] + Za) | 0), (q[2098] = Za), (q[(a + 4) >> 2] = 1 | Za), q[2100] != (0 | a))) break a;
                                                return (q[2097] = 0), (q[2100] = 0);
                                            }
                                            if (q[2100] == (0 | nb)) return (q[2100] = a), (Za = (q[2097] + Za) | 0), (q[2097] = Za), (q[(a + 4) >> 2] = 1 | Za), (q[(a + Za) >> 2] = Za);
                                            Za = ((-8 & $a) + Za) | 0;
                                            g: if ($a >>> 0 <= 255)
                                                (mb = $a >>> 3), ($a = q[(8 + nb) >> 2]), (0 | (lb = q[(12 + nb) >> 2])) == (0 | $a) ? ((rb = q[2095] & fd(mb)), (q[2095] = rb)) : ((q[($a + 12) >> 2] = lb), (q[(lb + 8) >> 2] = $a));
                                            else {
                                                if (((pb = q[(24 + nb) >> 2]), (0 | nb) != (0 | ($a = q[(12 + nb) >> 2])))) (lb = q[(8 + nb) >> 2]), (q[(lb + 12) >> 2] = $a), (q[($a + 8) >> 2] = lb);
                                                else if ((mb = (mb = q[(lb = (20 + nb) | 0) >> 2]) || q[(lb = (16 + nb) | 0) >> 2])) {
                                                    for (; (ob = lb), (mb = q[(lb = (($a = mb) + 20) | 0) >> 2]) || ((lb = ($a + 16) | 0), (mb = q[($a + 16) >> 2])); );
                                                    q[ob >> 2] = 0;
                                                } else $a = 0;
                                                if (pb) {
                                                    lb = q[(28 + nb) >> 2];
                                                    j: {
                                                        if (q[(mb = (8684 + (lb << 2)) | 0) >> 2] == (0 | nb)) {
                                                            if ((q[mb >> 2] = $a)) break j;
                                                            (rb = q[2096] & fd(lb)), (q[2096] = rb);
                                                            break g;
                                                        }
                                                        if (!(q[(pb + (q[(pb + 16) >> 2] == (0 | nb) ? 16 : 20)) >> 2] = $a)) break g;
                                                    }
                                                    (q[($a + 24) >> 2] = pb),
                                                        (lb = q[(16 + nb) >> 2]) && ((q[($a + 16) >> 2] = lb), (q[(lb + 24) >> 2] = $a)),
                                                        (lb = q[(20 + nb) >> 2]) && ((q[($a + 20) >> 2] = lb), (q[(lb + 24) >> 2] = $a));
                                                }
                                            }
                                            if (((q[(a + 4) >> 2] = 1 | Za), (q[(a + Za) >> 2] = Za), q[2100] != (0 | a))) break f;
                                            return (q[2097] = Za);
                                        }
                                        (q[(4 + nb) >> 2] = -2 & $a), (q[(a + 4) >> 2] = 1 | Za), (q[(a + Za) >> 2] = Za);
                                    }
                                    if (Za >>> 0 <= 255)
                                        return (
                                            (Za = (8420 + (($a = Za >>> 3) << 3)) | 0),
                                            ($a = (lb = q[2095]) & ($a = 1 << $a) ? q[(Za + 8) >> 2] : ((q[2095] = $a | lb), Za)),
                                            (q[(Za + 8) >> 2] = a),
                                            (q[($a + 12) >> 2] = a),
                                            (q[(a + 12) >> 2] = Za),
                                            (q[(a + 8) >> 2] = $a)
                                        );
                                    (q[(a + 16) >> 2] = 0),
                                        ($a = q[(a + 20) >> 2] = 0),
                                        (mb = Za >>> 8) &&
                                            (($a = 31),
                                            16777215 < Za >>> 0 ||
                                                ($a =
                                                    (28 +
                                                        ((($a = ((((nb = (mb <<= ob = ((mb + 1048320) >>> 16) & 8) << ($a = ((mb + 520192) >>> 16) & 4)) << (mb = ((245760 + nb) >>> 16) & 2)) >>> 15) - (mb | $a | ob)) | 0) << 1) |
                                                            ((Za >>> ($a + 21)) & 1))) |
                                                    0)),
                                        (mb = (8684 + ((q[((lb = a) + 28) >> 2] = $a) << 2)) | 0);
                                    m: {
                                        if ((lb = q[2096]) & (ob = 1 << $a)) {
                                            for (lb = Za << (31 == (0 | $a) ? 0 : (25 - ($a >>> 1)) | 0), $a = q[mb >> 2]; ; ) {
                                                if ((-8 & q[((mb = $a) + 4) >> 2]) == (0 | Za)) break m;
                                                if ((($a = lb >>> 29), (lb <<= 1), !($a = q[(16 + (ob = (mb + (4 & $a)) | 0)) >> 2]))) break;
                                            }
                                            q[(ob + 16) >> 2] = a;
                                        } else (q[2096] = lb | ob), (q[mb >> 2] = a);
                                        return (q[(a + 24) >> 2] = mb), (q[(a + 12) >> 2] = a), (q[(a + 8) >> 2] = a);
                                    }
                                    (Za = q[(mb + 8) >> 2]), (q[(Za + 12) >> 2] = a), (q[(mb + 8) >> 2] = a), (q[(a + 24) >> 2] = 0), (q[(a + 12) >> 2] = mb), (q[(a + 8) >> 2] = Za);
                                }
                            }
                            function Aa(a) {
                                var vb,
                                    xb,
                                    yb,
                                    Ab,
                                    Bb,
                                    Cb,
                                    sb,
                                    wb,
                                    Za = x(0),
                                    tb = (x(0), 0),
                                    ub = 0,
                                    zb = (x(0), x(0), x(0), x(0), 0);
                                x(0), x(0);
                                a: {
                                    b: {
                                        if ((j(a), (ub = 2147483647 & (tb = b[0])))) {
                                            if (!(ub >>> 0 < 2139095041)) return x(x(0.10000000149011612) + a);
                                            if (1065353216 == (0 | ub)) return x(-1 < (0 | tb) ? 0.10000000149011612 : 10);
                                            if (2139095040 == (0 | ub)) return x(-1 < (0 | tb) ? 0 : -a);
                                            if (1073741824 == (0 | tb)) return x(0.010000000707805157);
                                            if (1056964608 == (0 | tb)) return x(0.3162277638912201);
                                            if (1291845633 <= ub >>> 0) return x((0 | tb) < 0 ? H : 0);
                                            if (
                                                ((vb = u[1709]),
                                                (wb = x(x(1.600000023841858) - vb)),
                                                (xb = x(x(1) / x(vb + x(1.600000023841858)))),
                                                f(0, -4096 & (j((sb = x(wb * xb))), b[0])),
                                                (Za = k()),
                                                (yb = x(Za * Za)),
                                                (Bb = u[1713]),
                                                (vb = x(xb * x(x(wb - x((Ab = Za) * x(3.099609375))) - x(Za * x(x(1.600000023841858) - x(x(3.099609375) - vb)))))),
                                                (xb = x(x(sb + Za) * vb)),
                                                (Za = x(sb * sb)),
                                                (wb = x(
                                                    xb +
                                                        x(
                                                            x(Za * Za) *
                                                                x(
                                                                    x(
                                                                        Za * x(x(Za * x(x(Za * x(x(Za * x(x(Za * x(0.20697501301765442)) + x(0.23066075146198273))) + x(0.2727281153202057))) + x(0.3333333432674408))) + x(0.4285714328289032))
                                                                    ) + x(0.6000000238418579)
                                                                )
                                                        )
                                                )),
                                                f(0, -4096 & (j(x(x(yb + x(3)) + wb)), b[0])),
                                                (Za = k()),
                                                (xb = x(Ab * Za)),
                                                (sb = x(x(vb * Za) + x(sb * x(wb - x(x(Za + x(-3)) - yb))))),
                                                f(0, -4096 & (j(x(xb + sb)), b[0])),
                                                (Za = k()),
                                                (vb = x(Za * x(0.9619140625))),
                                                (yb = x(u[1711] + x(x(x(sb - x(Za - xb)) * x(0.9617967009544373)) + x(Za * x(-0.00011736857413779944))))),
                                                f(0, -4096 & (j(x(x(Bb + x(vb + yb)) + x(-4))), b[0])),
                                                (sb = k()),
                                                f(0, -4096 & tb),
                                                (wb = k()),
                                                (Za = x(sb * wb)),
                                                (a = x(x(x(yb - x(x(x(sb - x(-4)) - Bb) - vb)) * a) + x(x(a - wb) * sb))),
                                                j((sb = x(Za + a))),
                                                1124073473 <= (0 | (tb = b[0])))
                                            )
                                                break b;
                                            d: {
                                                if ((ub = 1124073472) == (0 | tb)) {
                                                    if (x(a + x(4.299566569443414e-8)) > x(sb - Za)) break b;
                                                } else {
                                                    if (((ub = 2147483647 & tb), !(((a <= x(sb - Za)) ^ 1) | (-1021968384 != (0 | tb))) | (1125515265 <= ub >>> 0))) break a;
                                                    if (ub >>> 0 < 1056964609) break d;
                                                }
                                                (zb = ((8388607 & (ub = ((8388608 >>> ((ub >>> 23) - 126)) + tb) | 0)) | 8388608) >>> (150 - (Cb = (ub >>> 23) & 255))),
                                                    (zb = (0 | tb) < 0 ? (0 - zb) | 0 : zb),
                                                    (Za = x(Za - (f(0, ub & (-8388608 >> (Cb - 127))), k()))),
                                                    j(x(a + Za)),
                                                    (tb = b[0]);
                                            }
                                            f(0, -32768 & tb),
                                                (sb = k()),
                                                (vb = x(sb * x(0.693145751953125))),
                                                (sb = x(x(sb * x(14286065379565116e-22)) + x(x(a - x(sb - Za)) * x(0.6931471824645996)))),
                                                (a = x(vb + sb)),
                                                (Za = x(a * a)),
                                                (Za = x(
                                                    a - x(Za * x(x(Za * x(x(Za * x(x(Za * x(x(Za * x(4.138136944220605e-8)) + x(-16533901998627698e-22))) + x(661375597701408e-19))) + x(-0.0027777778450399637))) + x(0.1666666716337204)))
                                                )),
                                                (Ab = x(x(a * Za) / x(Za + x(-2)))),
                                                (Za = x(sb - x(a - vb))),
                                                (a =
                                                    (0 | (tb = 0 | (j((a = x(x(a - x(Ab - x(Za + x(a * Za)))) + x(1)))), b[0] + (zb << 23)))) <= 8388607
                                                        ? (function (a, Tk) {
                                                              var vl = 0;
                                                              return (
                                                                  128 <= (0 | Tk)
                                                                      ? ((a = x(a * x(17014118346046923e22))),
                                                                        (Tk = (0 | (vl = (Tk + -127) | 0)) < 128 ? vl : ((a = x(a * x(17014118346046923e22))), (((0 | Tk) < 381 ? Tk : 381) + -254) | 0)))
                                                                      : -127 < (0 | Tk) ||
                                                                        ((a = x(a * x(11754943508222875e-54))),
                                                                        (Tk = -127 < (0 | (vl = (Tk + 126) | 0)) ? vl : ((a = x(a * x(11754943508222875e-54))), ((-378 < (0 | Tk) ? Tk : -378) + 252) | 0))),
                                                                  x(a * (f(0, (1065353216 + (Tk << 23)) | 0), k()))
                                                              );
                                                          })(a, zb)
                                                        : (f(0, tb), k())),
                                                (a = x(x(1) * a));
                                        } else a = x(1);
                                        return a;
                                    }
                                    return x(H);
                                }
                                return x(0);
                            }
                            function Ba(a, Db) {
                                var Jb,
                                    Eb,
                                    Gb,
                                    Fb = 0,
                                    Hb = 0,
                                    Ib = x(0);
                                if ((j(Db), !((Gb = 2147483647 & (Eb = b[0])) >>> 0 <= 2139095040 && (j(a), (Fb = 2147483647 & (Hb = b[0])) >>> 0 < 2139095041)))) return x(a + Db);
                                if (1065353216 == (0 | Eb)) return Ca(a);
                                Eb = (Jb = (Eb >>> 30) & 2) | (Hb >>> 31);
                                b: {
                                    c: {
                                        d: {
                                            e: {
                                                if (!Fb) {
                                                    switch ((Eb - 2) | 0) {
                                                        case 0:
                                                            break e;
                                                        case 1:
                                                            break;
                                                        default:
                                                            break d;
                                                    }
                                                    return x(-3.1415927410125732);
                                                }
                                                if (2139095040 != (0 | Gb)) {
                                                    if (!Gb | !(Fb >>> 0 <= (218103808 + Gb) >>> 0 && 2139095040 != (0 | Fb))) break b;
                                                    if (((a = Ib = (Fb + 218103808) >>> 0 < Gb >>> 0 && ((Ib = x(0)), Jb) ? Ib : Ca(x(y(x(a / Db))))), Eb >>> 0 <= 2)) {
                                                        switch ((Eb - 1) | 0) {
                                                            case 0:
                                                                return x(-a);
                                                            case 1:
                                                                break;
                                                            default:
                                                                break d;
                                                        }
                                                        return x(x(3.1415927410125732) - x(a + x(8.742277657347586e-8)));
                                                    }
                                                    return x(x(a + x(8.742277657347586e-8)) + x(-3.1415927410125732));
                                                }
                                                if (2139095040 == (0 | Fb)) break c;
                                                return u[(6816 + (Eb << 2)) >> 2];
                                            }
                                            a = x(3.1415927410125732);
                                        }
                                        return a;
                                    }
                                    return u[(6800 + (Eb << 2)) >> 2];
                                }
                                return x((0 | Hb) < 0 ? -1.5707963705062866 : 1.5707963705062866);
                            }
                            function Ca(a) {
                                x(0);
                                var Kb,
                                    Nb,
                                    Ob,
                                    Db,
                                    Mb,
                                    Lb = 0;
                                x(0), x(0), j(a);
                                a: {
                                    if (1283457024 <= (Db = 2147483647 & (Mb = b[0])) >>> 0) {
                                        if (2139095040 < Db >>> 0) break a;
                                        return x((0 | Mb) < 0 ? -1.570796251296997 : 1.570796251296997);
                                    }
                                    b: {
                                        if (Db >>> 0 <= 1054867455) {
                                            if (((Lb = -1), 964689920 <= Db >>> 0)) break b;
                                            break a;
                                        }
                                        (a = x(y(a))),
                                            (Lb =
                                                Db >>> 0 <= 1066926079
                                                    ? Db >>> 0 <= 1060110335
                                                        ? ((a = x(x(x(a + a) + x(-1)) / x(a + x(2)))), 0)
                                                        : ((a = x(x(a + x(-1)) / x(a + x(1)))), 1)
                                                    : Db >>> 0 <= 1075576831
                                                    ? ((a = x(x(a + x(-1.5)) / x(x(a * x(1.5)) + x(1)))), 2)
                                                    : ((a = x(x(-1) / a)), 3));
                                    }
                                    if (
                                        ((Db = Lb),
                                        (Nb = x(a * a)),
                                        (Kb = x(Nb * Nb)),
                                        (Ob = x(Kb * x(x(Kb * x(-0.106480173766613)) + x(-0.19999158382415771)))),
                                        (Kb = x(Nb * x(x(Kb * x(x(Kb * x(0.06168760731816292)) + x(0.14253635704517365))) + x(0.333333283662796)))),
                                        (0 | Db) <= -1)
                                    )
                                        return x(a - x(a * x(Ob + Kb)));
                                    (a = x(u[(6768 + (Db <<= 2)) >> 2] - x(x(x(a * x(Ob + Kb)) - u[(6784 + Db) >> 2]) - a))), (a = (0 | Mb) < 0 ? x(-a) : a);
                                }
                                return a;
                            }
                            function Da(a, Pb) {
                                var Ub,
                                    Sb,
                                    Tb,
                                    Qb = 0,
                                    Rb = 0;
                                return (
                                    (L = Sb = (L - 16) | 0),
                                    j(a),
                                    (Qb = 2147483647 & (Tb = b[0])) >>> 0 <= 1305022426
                                        ? ((v[Pb >> 3] = (Ub = +a) + -1.5707963109016418 * (Rb = 0.6366197723675814 * Ub + 6755399441055744 - 6755399441055744) + -1.5893254773528196e-8 * Rb), (Qb = y(Rb) < 2147483648 ? ~~Rb : -2147483648))
                                        : 2139095040 <= Qb >>> 0
                                        ? ((v[Pb >> 3] = x(a - a)), (Qb = 0))
                                        : ((Ub = Qb),
                                          (v[(8 + Sb) >> 3] = (f(0, (Ub - ((Qb = ((Qb >>> 23) - 150) | 0) << 23)) | 0), k())),
                                          (Qb = (function (a, Gl, Hl) {
                                              var Ll,
                                                  Ql,
                                                  Ul,
                                                  Vl,
                                                  Xl,
                                                  Yl,
                                                  Il = 0,
                                                  Jl = 0,
                                                  Kl = 0,
                                                  Ml = 0,
                                                  Nl = 0,
                                                  Ol = 0,
                                                  Pl = 0,
                                                  Rl = 0,
                                                  Sl = 0,
                                                  Tl = 0,
                                                  Wl = 0;
                                              if (((L = Ll = (L - 560) | 0), (Pl = ((Jl = Hl) + w((Ul = 0 < (0 | (Hl = (((Hl + -3) | 0) / 24) | 0)) ? Hl : 0), -24)) | 0), 0 <= (0 | (Ql = q[980]))))
                                                  for (Jl = (Ql + 1) | 0, Hl = Ul; (v[(((320 + Ll) | 0) + (Kl << 3)) >> 3] = (0 | Hl) < 0 ? 0 : +q[(3936 + (Hl << 2)) >> 2]), (Hl = (Hl + 1) | 0), (0 | Jl) != (0 | (Kl = (Kl + 1) | 0)); );
                                              for (Nl = (Pl + -24) | 0, Jl = 0; ; ) {
                                                  for (Il = Hl = 0; (Il += v[((Hl << 3) + a) >> 3] * v[(((320 + Ll) | 0) + ((Jl - Hl) << 3)) >> 3]), 1 != (0 | (Hl = (Hl + 1) | 0)); );
                                                  if (((v[((Jl << 3) + Ll) >> 3] = Il), (Hl = (0 | Jl) < (0 | Ql)), (Jl = (Jl + 1) | 0), !Hl)) break;
                                              }
                                              (Yl = (23 - Nl) | 0), (Vl = (24 - Nl) | 0), (Jl = Ql);
                                              a: {
                                                  for (;;) {
                                                      if (((Il = v[((Jl << 3) + Ll) >> 3]), !(Sl = ((Hl = 0) | (Kl = Jl)) < 1)))
                                                          for (
                                                              ;
                                                              (Ol = (((480 + Ll) | 0) + (Hl << 2)) | 0),
                                                                  (Rl = Il),
                                                                  (Ml = y((Il *= 5.960464477539063e-8)) < 2147483648 ? ~~Il : -2147483648),
                                                                  (Ml = y((Rl += -16777216 * (Il = 0 | Ml))) < 2147483648 ? ~~Rl : -2147483648),
                                                                  (q[Ol >> 2] = Ml),
                                                                  (Il = v[(((Kl = (Kl + -1) | 0) << 3) + Ll) >> 3] + Il),
                                                                  (0 | Jl) != (0 | (Hl = (Hl + 1) | 0));

                                                          );
                                                      (Il = ja(Il, Nl)), (Il = (Il += -8 * C(0.125 * Il)) - (0 | (Ol = y(Il) < 2147483648 ? ~~Il : -2147483648)));
                                                      e: {
                                                          f: {
                                                              g: {
                                                                  if ((Wl = (0 | Nl) < 1)) {
                                                                      if (Nl) break g;
                                                                      Ml = q[(476 + (((Jl << 2) + Ll) | 0)) >> 2] >> 23;
                                                                  } else (Ml = q[(476 + (Kl = ((Jl << 2) + Ll) | 0)) >> 2]), (Tl = Kl), (Kl = (Ml - ((Hl = Ml >> Vl) << Vl)) | 0), (Ol = (Hl + Ol) | 0), (Ml = (q[(Tl + 476) >> 2] = Kl) >> Yl);
                                                                  if ((0 | Ml) < 1) break e;
                                                                  break f;
                                                              }
                                                              if (((Ml = 2), !(0.5 <= Il))) {
                                                                  Ml = 0;
                                                                  break e;
                                                              }
                                                          }
                                                          if (((Kl = Hl = 0), !Sl))
                                                              for (;;) {
                                                                  (Sl = q[(Xl = (((480 + Ll) | 0) + (Hl << 2)) | 0) >> 2]), (Tl = 16777215);
                                                                  i: {
                                                                      j: {
                                                                          if (!Kl) {
                                                                              if (!Sl) break j;
                                                                              (Tl = 16777216), (Kl = 1);
                                                                          }
                                                                          q[Xl >> 2] = Tl - Sl;
                                                                          break i;
                                                                      }
                                                                      Kl = 0;
                                                                  }
                                                                  if ((0 | Jl) == (0 | (Hl = (Hl + 1) | 0))) break;
                                                              }
                                                          Wl || 1 < (Hl = (Nl + -1) | 0) >>> 0 || (q[(476 + (Hl = ((Jl << 2) + Ll) | 0)) >> 2] = Hl - 1 ? 8388607 & q[(Hl + 476) >> 2] : 4194303 & q[(Hl + 476) >> 2]),
                                                              (Ol = (Ol + 1) | 0),
                                                              2 == (0 | Ml) && ((Il = 1 - Il), (Ml = 2), Kl) && (Il -= ja(1, Nl));
                                                      }
                                                      if (0 != Il) break;
                                                      if (!(((Kl = 0) | (Hl = Jl)) <= (0 | Ql))) {
                                                          for (; (Kl = q[(((480 + Ll) | 0) + ((Hl = (Hl + -1) | 0) << 2)) >> 2] | Kl), (0 | Ql) < (0 | Hl); );
                                                          if (Kl) {
                                                              for (Pl = Nl; (Pl = (Pl + -24) | 0), !q[(((480 + Ll) | 0) + ((Jl = (Jl + -1) | 0) << 2)) >> 2]; );
                                                              break a;
                                                          }
                                                      }
                                                      for (Hl = 1; (Hl = ((Kl = Hl) + 1) | 0), !q[(((480 + Ll) | 0) + ((Ql - Kl) << 2)) >> 2]; );
                                                      for (Kl = (Jl + Kl) | 0; ; ) {
                                                          for (
                                                              Jl = Ol = (Jl + 1) | 0, v[(((320 + Ll) | 0) + (Ol << 3)) >> 3] = q[(3936 + ((Ul + Jl) << 2)) >> 2], Il = Hl = 0;
                                                              (Il += v[((Hl << 3) + a) >> 3] * v[(((320 + Ll) | 0) + ((Ol - Hl) << 3)) >> 3]), 1 != (0 | (Hl = (Hl + 1) | 0));

                                                          );
                                                          if (((v[((Jl << 3) + Ll) >> 3] = Il), !((0 | Jl) < (0 | Kl)))) break;
                                                      }
                                                      Jl = Kl;
                                                  }
                                                  16777216 <= (Il = ja(Il, (0 - Nl) | 0))
                                                      ? ((a = (((480 + Ll) | 0) + (Jl << 2)) | 0),
                                                        (Rl = Il),
                                                        (Hl = y((Il *= 5.960464477539063e-8)) < 2147483648 ? ~~Il : -2147483648),
                                                        (Kl = y((Il = Rl + -16777216 * (0 | Hl))) < 2147483648 ? ~~Il : -2147483648),
                                                        (q[a >> 2] = Kl),
                                                        (Jl = (Jl + 1) | 0))
                                                      : ((Hl = y(Il) < 2147483648 ? ~~Il : -2147483648), (Pl = Nl)),
                                                      (q[(((480 + Ll) | 0) + (Jl << 2)) >> 2] = Hl);
                                              }
                                              if (((Il = ja(1, Pl)), !((0 | Jl) <= -1))) {
                                                  for (Hl = Jl; (v[((Hl << 3) + Ll) >> 3] = Il * +q[(((480 + Ll) | 0) + (Hl << 2)) >> 2]), (Il *= 5.960464477539063e-8), (a = 0 < (0 | Hl)), (Hl = (Hl + -1) | 0), a; );
                                                  if (!((0 | Jl) <= -1))
                                                      for (Hl = Jl; ; ) {
                                                          for (
                                                              Nl = (Jl - (a = Hl)) | 0, Hl = Il = 0;
                                                              (Il += v[(6704 + (Hl << 3)) >> 3] * v[(((a + Hl) << 3) + Ll) >> 3]), !((0 | Ql) <= (0 | Hl)) && ((Pl = Hl >>> 0 < Nl >>> 0), (Hl = (Hl + 1) | 0), Pl);

                                                          );
                                                          if (((v[(((160 + Ll) | 0) + (Nl << 3)) >> 3] = Il), (Hl = (a + -1) | 0), !(0 < (0 | a)))) break;
                                                      }
                                              }
                                              if (0 <= (Jl | (Il = 0))) for (; (Il += v[(((160 + Ll) | 0) + (Jl << 3)) >> 3]), (a = 0 < (0 | Jl)), (Jl = (Jl + -1) | 0), a; );
                                              return (v[Gl >> 3] = Ml ? -Il : Il), (L = (560 + Ll) | 0), 7 & Ol;
                                          })((8 + Sb) | 0, Sb, Qb)),
                                          (Rb = v[Sb >> 3]),
                                          (0 | Tb) <= -1 ? ((v[Pb >> 3] = -Rb), (Qb = (0 - Qb) | 0)) : (v[Pb >> 3] = Rb)),
                                    (L = (16 + Sb) | 0),
                                    Qb
                                );
                            }
                            function Ea(a, Pb) {
                                return a
                                    ? (function (a, Gl) {
                                          a: {
                                              if (a) {
                                                  if (Gl >>> 0 <= 127) break a;
                                                  if (q[q[1797] >> 2]) {
                                                      if (Gl >>> 0 <= 2047) return (o[(a + 1) | 0] = (63 & Gl) | 128), (o[0 | a] = (Gl >>> 6) | 192), 2;
                                                      if (!(57344 != (-8192 & Gl) && 55296 <= Gl >>> 0)) return (o[(a + 2) | 0] = (63 & Gl) | 128), (o[0 | a] = (Gl >>> 12) | 224), (o[(a + 1) | 0] = ((Gl >>> 6) & 63) | 128), 3;
                                                      if ((Gl + -65536) >>> 0 <= 1048575)
                                                          return (o[(a + 3) | 0] = (63 & Gl) | 128), (o[0 | a] = (Gl >>> 18) | 240), (o[(a + 2) | 0] = ((Gl >>> 6) & 63) | 128), (o[(a + 1) | 0] = ((Gl >>> 12) & 63) | 128), 4;
                                                  } else if (57216 == (-128 & Gl)) break a;
                                                  (q[2094] = 25), (a = -1);
                                              } else a = 1;
                                              return a;
                                          }
                                          return (o[0 | a] = Gl), 1;
                                      })(a, Pb)
                                    : 0;
                            }
                            function Fa(a, Pb, Wb) {
                                var fc,
                                    gc,
                                    Xb = 0,
                                    Yb = 0,
                                    Zb = 0,
                                    _b = 0,
                                    $b = 0,
                                    ac = 0,
                                    bc = 0,
                                    cc = 0,
                                    dc = 0,
                                    ec = r[(a + 4) | 0];
                                if (((q[Pb >> 2] = 652), (Yb = q[(a + 704) >> 2]), 1 <= (0 | (_b = q[Yb >> 2])))) {
                                    for ($b = q[(a + 720) >> 2], bc = q[(a + 1072) >> 2]; (Zb = ((1 << q[(bc + (q[($b + (Xb << 2)) >> 2] << 2)) >> 2]) + Zb) | 0), (0 | _b) != (0 | (Xb = (Xb + 1) | 0)); );
                                    Xb = Zb << 2;
                                }
                                if (
                                    ((q[(Pb + 4) >> 2] = w(_b, 12)),
                                    (q[(Pb + 8) >> 2] = q[Yb >> 2] << 2),
                                    (q[(Pb + 12) >> 2] = q[Yb >> 2] << 2),
                                    (q[(Pb + 16) >> 2] = q[Yb >> 2] << 2),
                                    (q[(Pb + 20) >> 2] = q[Yb >> 2] << 2),
                                    (Zb = q[Yb >> 2]),
                                    (q[(Pb + 28) >> 2] = Xb),
                                    (q[(Pb + 24) >> 2] = Zb << 2),
                                    (Zb = q[Yb >> 2]),
                                    (q[(Pb + 40) >> 2] = Xb),
                                    (q[(Pb + 36) >> 2] = Xb),
                                    (q[(Pb + 32) >> 2] = Zb << 2),
                                    (q[(Pb + 44) >> 2] = q[(Yb + 4) >> 2] << 5),
                                    (q[(Pb + 48) >> 2] = q[(Yb + 4) >> 2] << 2),
                                    (q[(Pb + 52) >> 2] = q[(Yb + 4) >> 2] << 2),
                                    (q[(Pb + 56) >> 2] = q[(Yb + 4) >> 2] << 2),
                                    (q[(Pb + 60) >> 2] = q[(Yb + 4) >> 2] << 4),
                                    (q[(Pb + 64) >> 2] = q[(Yb + 4) >> 2] << 4),
                                    1 <= ((Xb = 0) | (_b = q[(Yb + 8) >> 2])))
                                ) {
                                    for (
                                        $b = q[(a + 780) >> 2], bc = q[(a + 1072) >> 2], dc = q[(a + 796) >> 2], Zb = 0;
                                        (ac = (((15 + (q[((cc = Xb << 2) + dc) >> 2] << 3)) & -16) + ac) | 0), (Zb = ((1 << q[(bc + (q[($b + cc) >> 2] << 2)) >> 2]) + Zb) | 0), (0 | _b) != (0 | (Xb = (Xb + 1) | 0));

                                    );
                                    Xb = Zb << 2;
                                }
                                if (
                                    ((q[(Pb + 68) >> 2] = w(_b, 24)),
                                    (q[(Pb + 72) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    (q[(Pb + 76) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    (Zb = q[(Yb + 8) >> 2]),
                                    (q[(Pb + 84) >> 2] = ac),
                                    (q[(Pb + 80) >> 2] = Zb << 2),
                                    (q[(Pb + 88) >> 2] = q[(Yb + 8) >> 2] << 4),
                                    (q[(Pb + 92) >> 2] = q[(Yb + 8) >> 2] << 4),
                                    (Zb = q[(Yb + 8) >> 2]),
                                    (q[(Pb + 100) >> 2] = Xb),
                                    (q[(Pb + 96) >> 2] = Zb << 2),
                                    (Zb = q[(Yb + 8) >> 2]),
                                    (q[(Pb + 140) >> 2] = Xb),
                                    (q[(Pb + 136) >> 2] = Xb),
                                    (q[(Pb + 132) >> 2] = Xb),
                                    (q[(Pb + 128) >> 2] = Xb),
                                    (q[(Pb + 124) >> 2] = Xb),
                                    (q[(Pb + 120) >> 2] = Xb),
                                    (q[(Pb + 116) >> 2] = Xb),
                                    (q[(Pb + 112) >> 2] = Xb),
                                    (q[(Pb + 108) >> 2] = Xb),
                                    (q[(Pb + 104) >> 2] = Zb << 2),
                                    (q[(Pb + 144) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    (q[(Pb + 148) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    (q[(Pb + 152) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    (q[(Pb + 156) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    (q[(Pb + 160) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    (q[(Pb + 164) >> 2] = q[(Yb + 8) >> 2] << 2),
                                    1 <= ((Xb = ac = 0) | (_b = q[(Yb + 12) >> 2])))
                                ) {
                                    for ($b = q[(a + 812) >> 2], bc = q[(a + 1072) >> 2], Zb = 0; (Zb = ((1 << q[(bc + (q[($b + (Xb << 2)) >> 2] << 2)) >> 2]) + Zb) | 0), (0 | _b) != (0 | (Xb = (Xb + 1) | 0)); );
                                    Xb = Zb << 2;
                                }
                                if (
                                    ((q[(Pb + 168) >> 2] = w(_b, 12)),
                                    (q[(Pb + 172) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 176) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 180) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 184) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 188) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 192) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 196) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 200) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 204) >> 2] = q[(Yb + 12) >> 2] << 4),
                                    (q[(Pb + 208) >> 2] = q[(Yb + 12) >> 2] << 4),
                                    (Zb = q[(Yb + 12) >> 2]),
                                    (q[(Pb + 216) >> 2] = Xb),
                                    (q[(Pb + 212) >> 2] = Zb << 2),
                                    (Zb = q[(Yb + 12) >> 2]),
                                    (q[(Pb + 268) >> 2] = Xb),
                                    (q[(Pb + 264) >> 2] = Xb),
                                    (q[(Pb + 260) >> 2] = Xb),
                                    (q[(Pb + 256) >> 2] = Xb),
                                    (q[(Pb + 252) >> 2] = Xb),
                                    (q[(Pb + 248) >> 2] = Xb),
                                    (q[(Pb + 244) >> 2] = Xb),
                                    (q[(Pb + 240) >> 2] = Xb),
                                    (q[(Pb + 236) >> 2] = Xb),
                                    (q[(Pb + 232) >> 2] = Xb),
                                    (q[(Pb + 228) >> 2] = Xb),
                                    (q[(Pb + 224) >> 2] = Xb),
                                    (q[(Pb + 220) >> 2] = Zb << 2),
                                    (q[(Pb + 272) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 276) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 280) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 284) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 288) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    (q[(Pb + 292) >> 2] = q[(Yb + 12) >> 2] << 2),
                                    1 <= ((Xb = 0) | (Zb = q[(Yb + 16) >> 2])))
                                ) {
                                    for (
                                        $b = q[(a + 852) >> 2], bc = q[(a + 1072) >> 2], dc = q[(a + 892) >> 2], _b = 0;
                                        (ac = (((15 + (q[((cc = Xb << 2) + dc) >> 2] << 3)) & -16) + ac) | 0), (_b = ((1 << q[(bc + (q[($b + cc) >> 2] << 2)) >> 2]) + _b) | 0), (0 | Zb) != (0 | (Xb = (Xb + 1) | 0));

                                    );
                                    Xb = _b << 2;
                                }
                                if (
                                    ((q[(Pb + 296) >> 2] = w(Zb, 20)),
                                    (q[(Pb + 300) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 304) >> 2] = q[(Yb + 16) >> 2]),
                                    (q[(Pb + 308) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 312) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (Zb = q[(Yb + 16) >> 2]),
                                    (q[(Pb + 320) >> 2] = ac),
                                    (q[(Pb + 316) >> 2] = Zb << 2),
                                    (q[(Pb + 324) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 328) >> 2] = q[(Yb + 16) >> 2] << 4),
                                    (q[(Pb + 332) >> 2] = q[(Yb + 16) >> 2] << 4),
                                    (q[(Pb + 336) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 340) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 344) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 348) >> 2] = q[(Yb + 16) >> 2] << 4),
                                    (q[(Pb + 352) >> 2] = q[(Yb + 16) >> 2] << 4),
                                    (Zb = q[(Yb + 16) >> 2]),
                                    (q[(Pb + 360) >> 2] = Xb),
                                    (q[(Pb + 356) >> 2] = Zb << 2),
                                    (Zb = q[(Yb + 16) >> 2]),
                                    (q[(Pb + 404) >> 2] = Xb),
                                    (q[(Pb + 400) >> 2] = Xb),
                                    (q[(Pb + 396) >> 2] = Xb),
                                    (q[(Pb + 392) >> 2] = Xb),
                                    (q[(Pb + 388) >> 2] = Xb),
                                    (q[(Pb + 384) >> 2] = Xb),
                                    (q[(Pb + 380) >> 2] = Xb),
                                    (q[(Pb + 376) >> 2] = Xb),
                                    (q[(Pb + 372) >> 2] = Xb),
                                    (q[(Pb + 368) >> 2] = Xb),
                                    (q[(Pb + 364) >> 2] = Zb << 2),
                                    (q[(Pb + 408) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 412) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 416) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 420) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 424) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    (q[(Pb + 428) >> 2] = q[(Yb + 16) >> 2] << 2),
                                    ($b = q[(a + 704) >> 2]),
                                    (q[(Pb + 432) >> 2] = w(q[($b + 20) >> 2], 52)),
                                    (q[(Pb + 436) >> 2] = ec >>> (Xb = _b = 0) <= 3 ? q[($b + 20) >> 2] << 2 : 0),
                                    (q[(Pb + 440) >> 2] = q[($b + 20) >> 2] << 2),
                                    (q[(Pb + 444) >> 2] = w(q[($b + 52) >> 2], 28)),
                                    1 <= (0 | (Yb = q[($b + 48) >> 2])))
                                ) {
                                    for (Zb = q[(a + 1072) >> 2], ac = 0; (ac = ((bc = q[(Zb + (Xb << 2)) >> 2]) + ac) | 0), (_b = ((1 << bc) + _b) | 0), (0 | Yb) != (0 | (Xb = (Xb + 1) | 0)); );
                                    (Xb = _b << 2), (_b = ac << 2);
                                }
                                if (
                                    ((q[(Pb + 460) >> 2] = Xb),
                                    (q[(Pb + 456) >> 2] = Xb),
                                    (q[(Pb + 452) >> 2] = _b),
                                    (q[(Pb + 448) >> 2] = w(Yb, 36)),
                                    (q[(Pb + 500) >> 2] = w(q[($b + 72) >> 2], 28)),
                                    1 <= ((ac = Xb = Zb = 0) | (bc = q[($b + 72) >> 2])))
                                ) {
                                    for (
                                        dc = q[(a + 1224) >> 2], cc = q[(a + 1220) >> 2], gc = q[(a + 1212) >> 2], _b = 0;
                                        (_b = (0 | (fc = (q[((Yb = ac << 2) + cc) >> 2] - q[(Yb + dc) >> 2]) | 0)) < (0 | _b) ? _b : (1 + fc) | 0),
                                            (Xb = (0 | Xb) < (0 | (Yb = q[(Yb + gc) >> 2])) ? Yb : Xb),
                                            (0 | bc) != (0 | (ac = (ac + 1) | 0));

                                    );
                                    (ac = Xb << 2), (Xb = _b << 2);
                                }
                                if (((Yb = q[($b + 76) >> 2]), (q[(Pb + 516) >> 2] = Xb), (q[(Pb + 512) >> 2] = ac), (q[(Pb + 508) >> 2] = Xb), (q[(Pb + 504) >> 2] = Yb << 4), 1 <= (0 | (Yb = q[($b + 80) >> 2])))) {
                                    for (Zb = q[(a + 1248) >> 2], ac = q[(a + 1072) >> 2], _b = Xb = 0; (_b = ((1 << q[(ac + (q[(Zb + (Xb << 2)) >> 2] << 2)) >> 2]) + _b) | 0), (0 | Yb) != (0 | (Xb = (Xb + 1) | 0)); );
                                    Zb = _b << 2;
                                }
                                if (
                                    ((q[(Pb + 520) >> 2] = w(Yb, 24)),
                                    (q[(Pb + 524) >> 2] = q[($b + 80) >> 2] << 2),
                                    (Yb = q[($b + 80) >> 2]),
                                    (q[(Pb + 532) >> 2] = Zb),
                                    (q[(Pb + 528) >> 2] = Yb << 2),
                                    (Yb = q[($b + 80) >> 2]),
                                    (q[(Pb + 544) >> 2] = Zb),
                                    (q[(Pb + 540) >> 2] = Zb),
                                    (q[(Pb + 536) >> 2] = Yb << 2),
                                    (Yb = Pb),
                                    4 <= ec >>> 0)
                                ) {
                                    if (((q[(Pb + 464) >> 2] = w(q[($b + 120) >> 2], 20)), (q[(Pb + 468) >> 2] = w(q[($b + 100) >> 2], 28)), (Zb = Pb), 1 <= ((Xb = ac = 0) | (bc = q[($b + 104) >> 2])))) {
                                        for (a = q[(a + 1104) >> 2], _b = 0; (_b = (q[(a + (Xb << 2)) >> 2] + _b) | 0), (0 | bc) != (0 | (Xb = (Xb + 1) | 0)); );
                                        a = _b << 2;
                                    } else a = 0;
                                    (q[(Zb + 476) >> 2] = a), (q[(Pb + 472) >> 2] = w(bc, 48)), (q[(Pb + 484) >> 2] = w(q[($b + 108) >> 2], 12)), (a = q[($b + 112) >> 2]), (q[(Pb + 552) >> 2] = 0), (q[(Pb + 492) >> 2] = w(a, 12)), (a = 0);
                                } else {
                                    if ((0 | (ac = q[($b + 20) >> 2])) < 1) _b = 0;
                                    else
                                        for (bc = q[(a + 1060) >> 2], dc = q[(a + 952) >> 2], a = q[(a + 948) >> 2], Zb = _b = 0; ; ) {
                                            if (1 <= (0 | (cc = q[((Xb = Zb << 2) + dc) >> 2]))) for (cc = ((Xb = (bc + (q[(a + Xb) >> 2] << 2)) | 0) + (cc << 2)) | 0; (_b = (q[Xb >> 2] + _b) | 0), (Xb = (Xb + 4) | 0) >>> 0 < cc >>> 0; );
                                            if ((0 | ac) == (0 | (Zb = (Zb + 1) | 0))) break;
                                        }
                                    (q[(Pb + 552) >> 2] = ac << 2), (ac = q[($b + 20) >> 2] << 2), (a = _b << 2);
                                }
                                for (
                                    q[(Yb + 556) >> 2] = a,
                                        q[(Pb + 548) >> 2] = ac,
                                        4 < ec >>> 0 && ((q[(Pb + 480) >> 2] = w(q[($b + 128) >> 2], 12)), (q[(Pb + 488) >> 2] = w(q[($b + 132) >> 2], 12)), (q[(Pb + 496) >> 2] = w(q[($b + 136) >> 2], 12))),
                                        Xb = _b = 0;
                                    (Xb = ((((Yb = q[(a = ((_b << 2) + Pb) | 0) >> 2]) + 15) & -16) + (q[a >> 2] = Xb)) | 0), 140 != (0 | (_b = (_b + 1) | 0));

                                );
                                q[Wb >> 2] = Xb;
                            }
                            function Ga(a, Pb, Wb, hc) {
                                a: {
                                    if (!(20 < Pb >>> 0 || 9 < (Pb = (Pb + -9) | 0) >>> 0)) {
                                        switch ((Pb - 1) | 0) {
                                            default:
                                                return (Pb = q[Wb >> 2]), (q[Wb >> 2] = Pb + 4), (q[a >> 2] = q[Pb >> 2]);
                                            case 0:
                                                return (Pb = q[Wb >> 2]), (q[Wb >> 2] = Pb + 4), (Pb = q[Pb >> 2]), (q[a >> 2] = Pb), (q[(a + 4) >> 2] = Pb >> 31);
                                            case 1:
                                                return (Pb = q[Wb >> 2]), (q[Wb >> 2] = Pb + 4), (q[a >> 2] = q[Pb >> 2]), (q[(a + 4) >> 2] = 0);
                                            case 3:
                                                return (Pb = q[Wb >> 2]), (q[Wb >> 2] = Pb + 4), (Pb = p[Pb >> 1]), (q[a >> 2] = Pb), (q[(a + 4) >> 2] = Pb >> 31);
                                            case 4:
                                                return (Pb = q[Wb >> 2]), (q[Wb >> 2] = Pb + 4), (q[a >> 2] = s[Pb >> 1]), (q[(a + 4) >> 2] = 0);
                                            case 5:
                                                return (Pb = q[Wb >> 2]), (q[Wb >> 2] = Pb + 4), (Pb = o[0 | Pb]), (q[a >> 2] = Pb), (q[(a + 4) >> 2] = Pb >> 31);
                                            case 6:
                                                return (Pb = q[Wb >> 2]), (q[Wb >> 2] = Pb + 4), (q[a >> 2] = r[0 | Pb]), (q[(a + 4) >> 2] = 0);
                                            case 2:
                                            case 7:
                                                break a;
                                            case 8:
                                        }
                                        n[hc](a, Wb);
                                    }
                                    return;
                                }
                                (Pb = (q[Wb >> 2] + 7) & -8), (q[Wb >> 2] = Pb + 8), (Wb = q[(Pb + 4) >> 2]), (q[a >> 2] = q[Pb >> 2]), (q[(a + 4) >> 2] = Wb);
                            }
                            function Ha(a) {
                                var Pb,
                                    hc,
                                    Wb = 0;
                                if (ha(o[q[a >> 2]])) for (; (Pb = q[a >> 2]), (hc = o[0 | Pb]), (q[a >> 2] = Pb + 1), (Wb = (((w(Wb, 10) + hc) | 0) - 48) | 0), ha(o[(Pb + 1) | 0]); );
                                return Wb;
                            }
                            function Ia(a, ic, jc, kc, lc) {
                                var oc, mc;
                                (q[(204 + (L = mc = (L - 208) | 0)) >> 2] = jc),
                                    ca((160 + mc) | (jc = 0), 0, 40),
                                    (q[(200 + mc) >> 2] = q[(204 + mc) >> 2]),
                                    (0 | ra(0, ic, (200 + mc) | 0, (80 + mc) | 0, (160 + mc) | 0, kc, lc)) < 0 ||
                                        ((jc = 0 <= q[(a + 76) >> 2] ? 1 : jc),
                                        (jc = q[a >> 2]),
                                        o[(a + 74) | 0] <= 0 && (q[a >> 2] = -33 & jc),
                                        (oc = 32 & jc),
                                        q[(a + 48) >> 2]
                                            ? ra(a, ic, (200 + mc) | 0, (80 + mc) | 0, (160 + mc) | 0, kc, lc)
                                            : ((q[(a + 48) >> 2] = 80),
                                              (q[(a + 16) >> 2] = 80 + mc),
                                              (q[(a + 28) >> 2] = mc),
                                              (q[(a + 20) >> 2] = mc),
                                              (jc = q[(a + 44) >> 2]),
                                              ra(a, ic, (200 + (q[(a + 44) >> 2] = mc)) | 0, (80 + mc) | 0, (160 + mc) | 0, kc, lc),
                                              jc && (n[q[(a + 36) >> 2]](a, 0, 0), (q[(a + 48) >> 2] = 0), (q[(a + 44) >> 2] = jc), (q[(a + 28) >> 2] = 0), (q[(a + 16) >> 2] = 0), (q[(a + 20) >> 2] = 0))),
                                        (q[a >> 2] = q[a >> 2] | oc)),
                                    (L = (208 + mc) | 0);
                            }
                            function Ka(a, ic, pc) {
                                var rc, qc;
                                $((8 + (L = qc = (L - 160) | 0)) | 0, 3216, 144),
                                    (q[(52 + qc) >> 2] = a),
                                    (q[(28 + qc) >> 2] = a),
                                    (q[(56 + qc) >> 2] = rc = (rc = (-2 - a) | 0) >>> 0 < 256 ? rc : 256),
                                    (q[(36 + qc) >> 2] = a = (a + rc) | 0),
                                    (q[(24 + qc) >> 2] = a),
                                    Ia((8 + qc) | 0, ic, pc, 11, 12),
                                    rc && ((a = q[(28 + qc) >> 2]), (o[(a - ((0 | a) == q[(24 + qc) >> 2])) | 0] = 0)),
                                    (L = (160 + qc) | 0);
                            }
                            function La(a, ic) {
                                var sc,
                                    tc,
                                    pc = 0,
                                    pc = 0 != (0 | ic);
                                a: {
                                    b: {
                                        c: {
                                            d: if (!(!ic | !(3 & a)))
                                                for (;;) {
                                                    if (!r[0 | a]) break c;
                                                    if (((a = (a + 1) | 0), (pc = 0 != (0 | (ic = (ic + -1) | 0))), !ic)) break d;
                                                    if (!(3 & a)) break;
                                                }
                                            if (!pc) break b;
                                        }
                                        if (!r[0 | a]) break a;
                                        e: {
                                            if (4 <= ic >>> 0) {
                                                for (pc = ((pc = (ic + -4) | 0) - (sc = -4 & pc)) | 0, sc = (4 + ((a + sc) | 0)) | 0; ; ) {
                                                    if ((-1 ^ (tc = q[a >> 2])) & (tc + -16843009) & -2139062144) break e;
                                                    if (((a = (a + 4) | 0), !(3 < (ic = (ic + -4) | 0) >>> 0))) break;
                                                }
                                                (ic = pc), (a = sc);
                                            }
                                            if (!ic) break b;
                                        }
                                        for (;;) {
                                            if (!r[0 | a]) break a;
                                            if (((a = (a + 1) | 0), !(ic = (ic + -1) | 0))) break;
                                        }
                                    }
                                    return 0;
                                }
                                return a;
                            }
                            function Ma(a) {
                                var uc,
                                    ic = 0;
                                if (!a) return 32;
                                if (!(1 & a)) for (; (ic = (ic + 1) | 0), (uc = 2 & a), (a >>>= 1), !uc; );
                                return ic;
                            }
                            function Na(a, vc) {
                                var zc,
                                    Ac,
                                    Bc,
                                    yc,
                                    wc = 0,
                                    xc = 0,
                                    xc = 4;
                                L = yc = (L - 256) | 0;
                                a: if (!((0 | vc) < 2))
                                    for (wc = q[(Bc = ((vc << 2) + a) | 0) >> 2] = yc; ; ) {
                                        for (
                                            $(wc, q[a >> 2], (zc = xc >>> 0 < 256 ? xc : 256)), wc = 0;
                                            $(q[(Ac = ((wc << 2) + a) | 0) >> 2], q[(((wc = (wc + 1) | 0) << 2) + a) >> 2], zc), (q[Ac >> 2] = q[Ac >> 2] + zc), (0 | vc) != (0 | wc);

                                        );
                                        if (!(xc = (xc - zc) | 0)) break a;
                                        wc = q[Bc >> 2];
                                    }
                                L = (256 + yc) | 0;
                            }
                            function Oa(a) {
                                return Ma((q[a >> 2] + -1) | 0) || ((a = Ma(q[(a + 4) >> 2])) ? (a + 32) | 0 : 0);
                            }
                            function $c(a, ap) {
                                (ap |= 0), (b[0] = a |= 0), (b[1] = ap);
                            }
                            function cd(a, ap, bp) {
                                return (function (a, ap, bp) {
                                    var fp,
                                        dp,
                                        cp,
                                        ep,
                                        gp = w((dp = bp >>> 16), (cp = a >>> 16));
                                    return (
                                        (a = ((65535 & (cp = (((fp = w((ep = 65535 & bp), (a &= 65535))) >>> 16) + w(cp, ep)) | 0)) + w(a, dp)) | 0),
                                        (M = (((((gp + w(ap, bp)) | 0) + (cp >>> 16)) | 0) + (a >>> 16)) | 0),
                                        (65535 & fp) | (a << 16)
                                    );
                                })(a, ap, bp);
                            }
                            function dd(a, ap, bp) {
                                return (function (a, ap, bp) {
                                    var op,
                                        np,
                                        hp = 0,
                                        ip = 0,
                                        jp = 0,
                                        kp = 0,
                                        lp = 0,
                                        mp = 0,
                                        pp = 0;
                                    a: {
                                        b: {
                                            c: {
                                                d: {
                                                    e: {
                                                        if (!(ip = ap)) return $c(((ap = a) - w((a = ((a >>> 0) / (bp >>> 0)) | 0), bp)) | 0, 0), (M = 0), a;
                                                        if ((hp = bp)) {
                                                            if (!((kp = (hp + -1) | 0) & hp)) break e;
                                                            lp = (0 - (kp = (((z(hp) + 33) | 0) - z(ip)) | 0)) | 0;
                                                            break c;
                                                        }
                                                        if (!a) return $c(0, (ip - w((a = ((ip >>> 0) / 0) | 0), 0)) | 0), (M = 0), a;
                                                        if ((hp = (32 - z(ip)) | 0) >>> 0 < 31) break d;
                                                        break b;
                                                    }
                                                    if (($c(a & kp, 0), 1 == (0 | hp))) break a;
                                                    return (
                                                        (bp = 31 & (hp = hp ? (31 - z((hp + -1) ^ hp)) | 0 : 32)),
                                                        (a = 32 <= (63 & hp) >>> 0 ? ((ip = 0), ap >>> bp) : ((ip = ap >>> bp), ((((1 << bp) - 1) & ap) << (32 - bp)) | (a >>> bp))),
                                                        (M = ip),
                                                        a
                                                    );
                                                }
                                                (kp = (hp + 1) | 0), (lp = (63 - hp) | 0);
                                            }
                                            if (
                                                ((hp = ap),
                                                (jp = 31 & (ip = 63 & kp)),
                                                (jp = 32 <= ip >>> 0 ? ((ip = 0), hp >>> jp) : ((ip = hp >>> jp), ((((1 << jp) - 1) & hp) << (32 - jp)) | (a >>> jp))),
                                                (hp = 31 & (lp &= 63)),
                                                32 <= lp >>> 0 ? ((ap = a << hp), (a = 0)) : ((ap = (((1 << hp) - 1) & (a >>> (32 - hp))) | (ap << hp)), (a <<= hp)),
                                                kp)
                                            )
                                                for (
                                                    (lp = (bp + (hp = -1)) | 0) >>> 0 < 4294967295 && (hp = 0);
                                                    (jp = ((np = mp = (jp << 1) | (ap >>> 31)) - (op = bp & (mp = (hp - (((ip = (ip << 1) | (jp >>> 31)) + (lp >>> 0 < mp >>> 0)) | 0)) >> 31))) | 0),
                                                        (ip = (ip - (np >>> 0 < op >>> 0)) | 0),
                                                        (ap = (ap << 1) | (a >>> 31)),
                                                        (a = pp | (a << 1)),
                                                        (pp = mp &= 1),
                                                        (kp = (kp + -1) | 0);

                                                );
                                            return $c(jp, ip), (M = (ap << 1) | (a >>> 31)), mp | (a << 1);
                                        }
                                        $c(a, ap), (ap = a = 0);
                                    }
                                    return (M = ap), a;
                                })(a, ap, bp);
                            }
                            function fd(a) {
                                var qp;
                                return (((-1 >>> (qp = 31 & a)) & -2) << qp) | (((-1 << (a = (0 - a) & 31)) & -2) >>> a);
                            }
                            function N() {
                                return (buffer.byteLength / 65536) | 0;
                            }
                        })(H, I, J),
                    };
                }
                (l = null), b.wasmBinary && (F = b.wasmBinary);
                var WebAssembly = {},
                    F = [];
                "object" != typeof WebAssembly && E("no native wasm support detected");
                var I,
                    J = new (function (a) {
                        var c = Array(16);
                        return (
                            (c.grow = function () {
                                17 <= c.length && B("Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."), c.push(null);
                            }),
                            (c.set = function (a, e) {
                                c[a] = e;
                            }),
                            (c.get = function (a) {
                                return c[a];
                            }),
                            c
                        );
                    })(),
                    K = !1;
                function assert(a, c) {
                    a || B("Assertion failed: " + c);
                }
                var buffer,
                    M,
                    L,
                    N,
                    ha = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                function ia(a, c, d) {
                    var e = c + d;
                    for (d = c; a[d] && !(e <= d); ) ++d;
                    if (16 < d - c && a.subarray && ha) return ha.decode(a.subarray(c, d));
                    for (e = ""; c < d; ) {
                        var g,
                            m,
                            f = a[c++];
                        128 & f
                            ? ((g = 63 & a[c++]),
                              192 == (224 & f)
                                  ? (e += String.fromCharCode(((31 & f) << 6) | g))
                                  : ((m = 63 & a[c++]),
                                    (f = 224 == (240 & f) ? ((15 & f) << 12) | (g << 6) | m : ((7 & f) << 18) | (g << 12) | (m << 6) | (63 & a[c++])) < 65536
                                        ? (e += String.fromCharCode(f))
                                        : ((f -= 65536), (e += String.fromCharCode(55296 | (f >> 10), 56320 | (1023 & f))))))
                            : (e += String.fromCharCode(f));
                    }
                    return e;
                }
                function ja(a, c) {
                    return a ? ia(L, a, c) : "";
                }
                function ka(a) {
                    return 0 < a % 65536 && (a += 65536 - (a % 65536)), a;
                }
                function la(a) {
                    (buffer = a),
                        (b.HEAP8 = M = new Int8Array(a)),
                        (b.HEAP16 = new Int16Array(a)),
                        (b.HEAP32 = N = new Int32Array(a)),
                        (b.HEAPU8 = L = new Uint8Array(a)),
                        (b.HEAPU16 = new Uint16Array(a)),
                        (b.HEAPU32 = new Uint32Array(a)),
                        (b.HEAPF32 = new Float32Array(a)),
                        (b.HEAPF64 = new Float64Array(a));
                }
                "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
                var G = b.TOTAL_MEMORY || 16777216;
                function O(a) {
                    for (; 0 < a.length; ) {
                        var d,
                            c = a.shift();
                        "function" == typeof c ? c() : "number" == typeof (d = c.fa) ? (void 0 === c.ea ? b.dynCall_v(d) : b.dynCall_vi(d, c.ea)) : d(void 0 === c.ea ? null : c.ea);
                    }
                }
                (I =
                    b.wasmMemory ||
                    new (function () {
                        return {
                            buffer: new ArrayBuffer((G / 65536) * 65536),
                            grow: function (a) {
                                return ca(a);
                            },
                        };
                    })()) && (buffer = I.buffer),
                    buffer.byteLength,
                    la(buffer),
                    (N[2224] = 5251968);
                var ra,
                    ma = [],
                    na = [],
                    oa = [],
                    pa = [],
                    P =
                        ((Math.imul && -5 === Math.imul(4294967295, 5)) ||
                            (Math.imul = function (a, c) {
                                var d = 65535 & a,
                                    e = 65535 & c;
                                return (d * e + (((a >>> 16) * e + d * (c >>> 16)) << 16)) | 0;
                            }),
                        Math.fround ||
                            ((ra = new Float32Array(1)),
                            (Math.fround = function (a) {
                                return (ra[0] = a), ra[0];
                            })),
                        Math.clz32 ||
                            (Math.clz32 = function (a) {
                                var c = 32,
                                    d = a >> 16;
                                return d && ((c -= 16), (a = d)), (d = a >> 8) && ((c -= 8), (a = d)), (d = a >> 4) && ((c -= 4), (a = d)), (d = a >> 2) && ((c -= 2), (a = d)), a >> 1 ? c - 2 : c - a;
                            }),
                        Math.trunc ||
                            (Math.trunc = function (a) {
                                return a < 0 ? Math.ceil(a) : Math.floor(a);
                            }),
                        0),
                    Q = null,
                    U = null;
                function B(a) {
                    throw (b.onAbort && b.onAbort(a), D(a), E(a), (K = !0), "abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
                }
                (b.preloadedImages = {}), (b.preloadedAudios = {});
                var V = "data:application/octet-stream;base64,";
                function W(a) {
                    return String.prototype.startsWith ? a.startsWith(V) : 0 === a.indexOf(V);
                }
                var X = "_em_module.wasm";
                function ta() {
                    try {
                        if (F) return new Uint8Array(F);
                        var a = z(X);
                        if (a) return a;
                        if (w) return w(X);
                        throw "both async and sync fetching of the wasm failed";
                    } catch (c) {
                        B(c);
                    }
                }
                W(X) || ((t = X), (X = b.locateFile ? b.locateFile(t, u) : u + t)),
                    na.push({
                        fa: function () {
                            va();
                        },
                    });
                var wa = [null, [], []],
                    xa = !1;
                function C(a) {
                    for (var c = [], d = 0; d < a.length; d++) {
                        var e = a[d];
                        255 < e && (xa && assert(!1, "Character code " + e + " (" + String.fromCharCode(e) + ")  at offset " + d + " not in 0x00-0xFF."), (e &= 255)), c.push(String.fromCharCode(e));
                    }
                    return c.join("");
                }
                var ya =
                    "function" == typeof atob
                        ? atob
                        : function (a) {
                              var c = "",
                                  d = 0;
                              a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
                              do {
                                  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),
                                      f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),
                                      g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),
                                      m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),
                                      e = (e << 2) | (f >> 4),
                                      f = ((15 & f) << 4) | (g >> 2),
                                      h = ((3 & g) << 6) | m;
                              } while (((c += String.fromCharCode(e)), 64 !== g && (c += String.fromCharCode(f)), 64 !== m && (c += String.fromCharCode(h)), d < a.length));
                              return c;
                          };
                function z(a) {
                    if (W(a)) {
                        if (((a = a.slice(V.length)), "boolean" == typeof r && r)) {
                            try {
                                var c = Buffer.from(a, "base64");
                            } catch (g) {
                                c = new Buffer(a, "base64");
                            }
                            var d = new Uint8Array(c.buffer, c.byteOffset, c.byteLength);
                        } else
                            try {
                                for (var e = ya(a), f = new Uint8Array(e.length), c = 0; c < e.length; ++c) f[c] = e.charCodeAt(c);
                                d = f;
                            } catch (g) {
                                throw Error("Converting base64 string to bytes failed.");
                            }
                        return d;
                    }
                }
                var Y,
                    H = {
                        a: function (a, c, d) {
                            L.set(L.subarray(c, c + d), a);
                        },
                        b: function (a) {
                            if (2147418112 < a) return !1;
                            for (var c = Math.max(M.length, 16777216); c < a; ) c = c <= 536870912 ? ka(2 * c) : Math.min(ka((3 * c + 2147483648) / 4), 2147418112);
                            a: {
                                try {
                                    I.grow((c - buffer.byteLength + 65535) >> 16), la(I.buffer);
                                    var d = 1;
                                    break a;
                                } catch (e) {}
                                d = void 0;
                            }
                            return !!d;
                        },
                        c: function (a, c, d, e) {
                            try {
                                for (var f = 0, g = 0; g < d; g++) {
                                    for (var m = N[(c + 8 * g) >> 2], h = N[(c + (8 * g + 4)) >> 2], A = 0; A < h; A++) {
                                        var R = L[m + A],
                                            S = wa[a];
                                        0 === R || 10 === R ? ((1 === a ? D : E)(ia(S, 0)), (S.length = 0)) : S.push(R);
                                    }
                                    f += h;
                                }
                                return (N[e >> 2] = f), 0;
                            } catch (T) {
                                return ("undefined" != typeof FS && T instanceof FS.ga) || B(T), T.ha;
                            }
                        },
                        memory: I,
                        table: J,
                    },
                    u = (function () {
                        function a(a) {
                            (b.asm = a.exports), P--, b.monitorRunDependencies && b.monitorRunDependencies(P), 0 == P && (null !== Q && (clearInterval(Q), (Q = null)), U) && ((a = U), (U = null), a());
                        }
                        function c(c) {
                            a(c.instance);
                        }
                        function d(a) {
                            (F || (!p && !q) || "function" != typeof fetch
                                ? new Promise(function (a) {
                                      a(ta());
                                  })
                                : fetch(X, { credentials: "same-origin" })
                                      .then(function (a) {
                                          if (a.ok) return a.arrayBuffer();
                                          throw "failed to load wasm binary file at '" + X + "'";
                                      })
                                      .catch(ta)
                            )
                                .then(function () {
                                    return {
                                        then: function (a) {
                                            a({ instance: new da() });
                                        },
                                    };
                                })
                                .then(a, function (a) {
                                    E("failed to asynchronously prepare wasm: " + a), B(a);
                                });
                        }
                        var e = { env: H, wasi_unstable: H };
                        if ((P++, b.monitorRunDependencies && b.monitorRunDependencies(P), b.instantiateWasm))
                            try {
                                return b.instantiateWasm(e, a);
                            } catch (f) {
                                return E("Module.instantiateWasm callback failed with error: " + f), !1;
                            }
                        return (
                            F || "function" != typeof WebAssembly.instantiateStreaming || W(X) || "function" != typeof fetch
                                ? d(c)
                                : fetch(X, { credentials: "same-origin" }).then(function (a) {
                                      return WebAssembly.instantiateStreaming(a, e).then(c, function (a) {
                                          E("wasm streaming compile failed: " + a), E("falling back to ArrayBuffer instantiation"), d(c);
                                      });
                                  }),
                            {}
                        );
                    })(),
                    va =
                        ((b.asm = u),
                        (b.___wasm_call_ctors = function () {
                            return b.asm.d.apply(null, arguments);
                        })),
                    Aa =
                        ((b._csmGetLogFunction = function () {
                            return b.asm.e.apply(null, arguments);
                        }),
                        (b._csmGetVersion = function () {
                            return b.asm.f.apply(null, arguments);
                        }),
                        (b._csmGetLatestMocVersion = function () {
                            return b.asm.g.apply(null, arguments);
                        }),
                        (b._csmGetMocVersion = function () {
                            return b.asm.h.apply(null, arguments);
                        }),
                        (b._csmHasMocConsistency = function () {
                            return b.asm.i.apply(null, arguments);
                        }),
                        (b._csmSetLogFunction = function () {
                            return b.asm.j.apply(null, arguments);
                        }),
                        (b._csmReviveMocInPlace = function () {
                            return b.asm.k.apply(null, arguments);
                        }),
                        (b._csmReadCanvasInfo = function () {
                            return b.asm.l.apply(null, arguments);
                        }),
                        (b._csmGetSizeofModel = function () {
                            return b.asm.m.apply(null, arguments);
                        }),
                        (b._csmInitializeModelInPlace = function () {
                            return b.asm.n.apply(null, arguments);
                        }),
                        (b._csmUpdateModel = function () {
                            return b.asm.o.apply(null, arguments);
                        }),
                        (b._csmGetParameterCount = function () {
                            return b.asm.p.apply(null, arguments);
                        }),
                        (b._csmGetParameterIds = function () {
                            return b.asm.q.apply(null, arguments);
                        }),
                        (b._csmGetParameterTypes = function () {
                            return b.asm.r.apply(null, arguments);
                        }),
                        (b._csmGetParameterMinimumValues = function () {
                            return b.asm.s.apply(null, arguments);
                        }),
                        (b._csmGetParameterMaximumValues = function () {
                            return b.asm.t.apply(null, arguments);
                        }),
                        (b._csmGetParameterDefaultValues = function () {
                            return b.asm.u.apply(null, arguments);
                        }),
                        (b._csmGetParameterValues = function () {
                            return b.asm.v.apply(null, arguments);
                        }),
                        (b._csmGetParameterRepeats = function () {
                            return b.asm.w.apply(null, arguments);
                        }),
                        (b._csmGetPartCount = function () {
                            return b.asm.x.apply(null, arguments);
                        }),
                        (b._csmGetPartIds = function () {
                            return b.asm.y.apply(null, arguments);
                        }),
                        (b._csmGetPartOpacities = function () {
                            return b.asm.z.apply(null, arguments);
                        }),
                        (b._csmGetPartParentPartIndices = function () {
                            return b.asm.A.apply(null, arguments);
                        }),
                        (b._csmGetDrawableCount = function () {
                            return b.asm.B.apply(null, arguments);
                        }),
                        (b._csmGetDrawableIds = function () {
                            return b.asm.C.apply(null, arguments);
                        }),
                        (b._csmGetDrawableConstantFlags = function () {
                            return b.asm.D.apply(null, arguments);
                        }),
                        (b._csmGetDrawableDynamicFlags = function () {
                            return b.asm.E.apply(null, arguments);
                        }),
                        (b._csmGetDrawableTextureIndices = function () {
                            return b.asm.F.apply(null, arguments);
                        }),
                        (b._csmGetDrawableDrawOrders = function () {
                            return b.asm.G.apply(null, arguments);
                        }),
                        (b._csmGetDrawableRenderOrders = function () {
                            return b.asm.H.apply(null, arguments);
                        }),
                        (b._csmGetDrawableOpacities = function () {
                            return b.asm.I.apply(null, arguments);
                        }),
                        (b._csmGetDrawableMaskCounts = function () {
                            return b.asm.J.apply(null, arguments);
                        }),
                        (b._csmGetDrawableMasks = function () {
                            return b.asm.K.apply(null, arguments);
                        }),
                        (b._csmGetDrawableVertexCounts = function () {
                            return b.asm.L.apply(null, arguments);
                        }),
                        (b._csmGetDrawableVertexPositions = function () {
                            return b.asm.M.apply(null, arguments);
                        }),
                        (b._csmGetDrawableVertexUvs = function () {
                            return b.asm.N.apply(null, arguments);
                        }),
                        (b._csmGetDrawableIndexCounts = function () {
                            return b.asm.O.apply(null, arguments);
                        }),
                        (b._csmGetDrawableIndices = function () {
                            return b.asm.P.apply(null, arguments);
                        }),
                        (b._csmGetDrawableMultiplyColors = function () {
                            return b.asm.Q.apply(null, arguments);
                        }),
                        (b._csmGetDrawableScreenColors = function () {
                            return b.asm.R.apply(null, arguments);
                        }),
                        (b._csmGetDrawableParentPartIndices = function () {
                            return b.asm.S.apply(null, arguments);
                        }),
                        (b._csmResetDrawableDynamicFlags = function () {
                            return b.asm.T.apply(null, arguments);
                        }),
                        (b._csmGetParameterKeyCounts = function () {
                            return b.asm.U.apply(null, arguments);
                        }),
                        (b._csmGetParameterKeyValues = function () {
                            return b.asm.V.apply(null, arguments);
                        }),
                        (b._csmMallocMoc = function () {
                            return b.asm.W.apply(null, arguments);
                        }),
                        (b._csmMallocModelAndInitialize = function () {
                            return b.asm.X.apply(null, arguments);
                        }),
                        (b._csmMalloc = function () {
                            return b.asm.Y.apply(null, arguments);
                        }),
                        (b._csmFree = function () {
                            return b.asm.Z.apply(null, arguments);
                        }),
                        (b._csmInitializeAmountOfMemory = function () {
                            return b.asm._.apply(null, arguments);
                        }),
                        (b.stackSave = function () {
                            return b.asm.$.apply(null, arguments);
                        })),
                    Ba = (b.stackAlloc = function () {
                        return b.asm.aa.apply(null, arguments);
                    }),
                    Ca = (b.stackRestore = function () {
                        return b.asm.ba.apply(null, arguments);
                    }),
                    ca = (b.__growWasmMemory = function () {
                        return b.asm.ca.apply(null, arguments);
                    });
                function Z() {
                    function a() {
                        if (!Y && ((Y = !0), !K)) {
                            if ((O(na), O(oa), b.onRuntimeInitialized && b.onRuntimeInitialized(), b.postRun))
                                for ("function" == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length; ) {
                                    var a = b.postRun.shift();
                                    pa.unshift(a);
                                }
                            O(pa);
                        }
                    }
                    if (!(0 < P)) {
                        if (b.preRun)
                            for ("function" == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length; )
                                !(function () {
                                    var a = b.preRun.shift();
                                    ma.unshift(a);
                                })();
                        O(ma),
                            0 < P ||
                                (b.setStatus
                                    ? (b.setStatus("Running..."),
                                      setTimeout(function () {
                                          setTimeout(function () {
                                              b.setStatus("");
                                          }, 1),
                                              a();
                                      }, 1))
                                    : a());
                    }
                }
                if (
                    ((b.dynCall_vi = function () {
                        return b.asm.da.apply(null, arguments);
                    }),
                    (b.asm = u),
                    (b.ccall = function (a, c, d, e) {
                        var f = {
                                string: function (a) {
                                    var c = 0;
                                    if (null != a && 0 !== a) {
                                        var d = 1 + (a.length << 2),
                                            e = (c = Ba(d)),
                                            f = L;
                                        if (0 < d) {
                                            for (var d = e + d - 1, g = 0; g < a.length; ++g) {
                                                var k = a.charCodeAt(g);
                                                if ((k = 55296 <= k && k <= 57343 ? (65536 + ((1023 & k) << 10)) | (1023 & a.charCodeAt(++g)) : k) <= 127) {
                                                    if (d <= e) break;
                                                    f[e++] = k;
                                                } else {
                                                    if (k <= 2047) {
                                                        if (d <= e + 1) break;
                                                        f[e++] = 192 | (k >> 6);
                                                    } else {
                                                        if (k <= 65535) {
                                                            if (d <= e + 2) break;
                                                            f[e++] = 224 | (k >> 12);
                                                        } else {
                                                            if (d <= e + 3) break;
                                                            (f[e++] = 240 | (k >> 18)), (f[e++] = 128 | ((k >> 12) & 63));
                                                        }
                                                        f[e++] = 128 | ((k >> 6) & 63);
                                                    }
                                                    f[e++] = 128 | (63 & k);
                                                }
                                            }
                                            f[e] = 0;
                                        }
                                    }
                                    return c;
                                },
                                array: function (a) {
                                    var c = Ba(a.length);
                                    return M.set(a, c), c;
                                },
                            },
                            g = (function (a) {
                                var c = b["_" + a];
                                return assert(c, "Cannot call unknown function " + a + ", make sure it is exported"), c;
                            })(a),
                            m = [];
                        if (((a = 0), e))
                            for (var h = 0; h < e.length; h++) {
                                var A = f[d[h]];
                                A ? (0 === a && (a = Aa()), (m[h] = A(e[h]))) : (m[h] = e[h]);
                            }
                        return (
                            (d = (function (a) {
                                return "string" === c ? ja(a) : "boolean" === c ? !!a : a;
                            })((d = g.apply(null, m)))),
                            0 !== a && Ca(a),
                            d
                        );
                    }),
                    (b.UTF8ToString = ja),
                    (b.addFunction = function (a, c) {
                        var d = J.length;
                        try {
                            J.grow(1);
                        } catch (e) {
                            if (!e instanceof RangeError) throw e;
                            throw "Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.";
                        }
                        try {
                            J.set(d, a);
                        } catch (e) {
                            if (!e instanceof TypeError) throw e;
                            assert(void 0 !== c, "Missing signature argument to addFunction"), J.set(d, a);
                        }
                        return d;
                    }),
                    (b.then = function (a) {
                        var c;
                        return (
                            Y
                                ? a(b)
                                : ((c = b.onRuntimeInitialized),
                                  (b.onRuntimeInitialized = function () {
                                      c && c(), a(b);
                                  })),
                            b
                        );
                    }),
                    (U = function Da() {
                        Y || Z(), Y || (U = Da);
                    }),
                    (b.run = Z),
                    b.preInit)
                )
                    for ("function" == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length; ) b.preInit.pop()();
                return Z(), _em_module;
            }),
        _em =
            ("object" == typeof exports && "object" == typeof module
                ? (module.exports = _em_module)
                : "function" == typeof define && define.amd
                ? define([], function () {
                      return _em_module;
                  })
                : "object" == typeof exports && (exports._em_module = _em_module),
            _em_module());
})((Live2DCubismCore = Live2DCubismCore || {}));