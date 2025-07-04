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
            function _csm() { }
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
                    function Version() { }
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
                    function Logging() { }
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
                    function Utils() { }
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
                    function Memory() { }
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
                                        "QW4gZXJyb3Igb2NjdXJyZWQgaW4gdGhlIGludGVycG9sYXRpb24gZm9yIGJsZW5kIHNoYXBlcy4gQ29tYmluYXRpb25Db3VudCBpcyAlZC4ACgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBUaGlzIG1vYzMgc2l6ZSBpcyBpbnZhbGlkLgoAW0NTTV0gW0VdJXM6ICVzCgBbQ1NNXSBbV11Sb3RhdGlvbkRlZm9ybWVyOiBOb3QgZm91bmQgdHJhbnNmb3JtZWQgRGlyZWN0aW9uLgoAW0NTTV0gW0VdVXBkYXRlRGVmb3JtZXJIaWVyYXJjaHkoKTogVW5rbm93biBEZWZvcm1lciBUeXBlLgoAJXMKACAgAE1PQzMAImFkZHJlc3MiIGlzIG51bGwuACUwMlggAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBGaWxlVHlwZSBpcyBpbnZhbGlkLgoAImFkZHJlc3MiIGFsaWdubWVudCBpcyBpbnZhbGlkLgBbQ1NNXSBbRV1jc21IYXNNb2NDb25zaXN0ZW5jeTogVGhpcyBtb2MzIHZlciBpcyBpbnZhbGlkIFt2ZXI6JWRdLgoAInNpemUiIGlzIGludmFsaWQuAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBUaGUgQ29yZSB1bnN1cHBvcnQgbGF0ZXIgdGhhbiBtb2MzIHZlcjpbJWRdLiBUaGlzIG1vYzMgdmVyIGlzIFslZF0uCgAibW9kZWwiIGlzIGludmFsaWQuAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBIZWFkZXIgc2VjdGlvbiBpcyBpbnZhbGlkLgoAIm91dFNpemVJblBpeGVscyIgaXMgbnVsbC4AW0NTTV0gW0VdY3NtSGFzTW9jQ29uc2lzdGVuY3k6IERhdGEgc2VjdGlvbiBpcyBpbnZhbGlkLgoAIm91dE9yaWdpbkluUGl4ZWxzIiBpcyBudWxsLgBbQ1NNXSBbRV1jc21SZXZpdmVNb2NJblBsYWNlIGlzIGZhaWxlZC4gQ29ycnVwdGVkICBtb2MzIGZpbGUuCgAib3V0UGl4ZWxzUGVyVW5pdCIgaXMgbnVsbC4AW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIFRoZSBDb3JlIHVuc3VwcG9ydCBsYXRlciB0aGFuIG1vYzMgdmVyOlslZF0uIFRoaXMgbW9jMyB2ZXIgaXMgWyVkXS4KACJtb2MiIGlzIGludmFsaWQuAFtDU01dIFtFXWNzbUdldE1vY1ZlcnNpb24gaXMgZmFpbGVkLiBDb3JydXB0ZWQgbW9jMyBmaWxlLgoAInNpemUiIGlzIGludmFsaWQATGl2ZTJEIEN1YmlzbSBTREsgQ29yZSBWZXJzaW9uICVkLiVkLiVkAGNzbUdldE1vY1ZlcnNpb24AY3NtSGFzTW9jQ29uc2lzdGVuY3kAY3NtUmV2aXZlTW9jSW5QbGFjZQBjc21SZWFkQ2FudmFzSW5mbwBjc21HZXRTaXplb2ZNb2RlbABjc21Jbml0aWFsaXplTW9kZWxJblBsYWNlAGNzbVVwZGF0ZU1vZGVsAGNzbUdldFBhcmFtZXRlckNvdW50AGNzbUdldFBhcmFtZXRlcklkcwBjc21HZXRQYXJhbWV0ZXJUeXBlcwBjc21HZXRQYXJhbWV0ZXJNaW5pbXVtVmFsdWVzAGNzbUdldFBhcmFtZXRlck1heGltdW1WYWx1ZXMAY3NtR2V0UGFyYW1ldGVyRGVmYXVsdFZhbHVlcwBjc21HZXRQYXJhbWV0ZXJWYWx1ZXMAY3NtR2V0UGFydENvdW50AGNzbUdldFBhcnRJZHMAY3NtR2V0UGFydE9wYWNpdGllcwBjc21HZXRQYXJ0UGFyZW50UGFydEluZGljZXMAY3NtR2V0RHJhd2FibGVDb3VudABjc21HZXREcmF3YWJsZUlkcwBjc21HZXREcmF3YWJsZUNvbnN0YW50RmxhZ3MAY3NtR2V0RHJhd2FibGVEeW5hbWljRmxhZ3MAY3NtR2V0RHJhd2FibGVUZXh0dXJlSW5kaWNlcwBjc21HZXREcmF3YWJsZURyYXdPcmRlcnMAY3NtR2V0RHJhd2FibGVSZW5kZXJPcmRlcnMAY3NtR2V0RHJhd2FibGVPcGFjaXRpZXMAY3NtR2V0RHJhd2FibGVNYXNrQ291bnRzAGNzbUdldERyYXdhYmxlTWFza3MAY3NtR2V0RHJhd2FibGVWZXJ0ZXhDb3VudHMAY3NtR2V0RHJhd2FibGVWZXJ0ZXhQb3NpdGlvbnMAY3NtR2V0RHJhd2FibGVWZXJ0ZXhVdnMAY3NtR2V0RHJhd2FibGVJbmRleENvdW50cwBjc21HZXREcmF3YWJsZUluZGljZXMAY3NtR2V0RHJhd2FibGVNdWx0aXBseUNvbG9ycwBjc21HZXREcmF3YWJsZVNjcmVlbkNvbG9ycwBjc21HZXREcmF3YWJsZVBhcmVudFBhcnRJbmRpY2VzAGNzbVJlc2V0RHJhd2FibGVEeW5hbWljRmxhZ3MAY3NtR2V0UGFyYW1ldGVyS2V5Q291bnRzAGNzbUdldFBhcmFtZXRlcktleVZhbHVlcw=="
                                    ),
                                    scratchBuffer(3228, "Cg=="),
                                    scratchBuffer(3267, "//////8="),
                                    scratchBuffer(3336, "LSsgICAwWDB4AChudWxsKQ=="),
                                    scratchBuffer(3360, "EQAKABEREQAAAAAFAAAAAAAACQAAAAAL"),
                                    scratchBuffer(3392, "EQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERER"),
                                    scratchBuffer(3441, "Cw=="),
                                    scratchBuffer(3450, "EQAKChEREQAKAAACAAkLAAAACQALAAAL"),
                                    scratchBuffer(3499, "DA=="),
                                    scratchBuffer(3511, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"),
                                    scratchBuffer(3557, "Dg=="),
                                    scratchBuffer(3569, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"),
                                    scratchBuffer(3615, "EA=="),
                                    scratchBuffer(3627, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"),
                                    scratchBuffer(3682, "EgAAABISEgAAAAAAAAk="),
                                    scratchBuffer(3731, "Cw=="),
                                    scratchBuffer(3743, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"),
                                    scratchBuffer(3789, "DA=="),
                                    scratchBuffer(
                                        3801,
                                        "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAuAAAAAKgaAAAAAAAAAwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzphAC0JnAAQX5fANaROQBTgzkAnPQ5AItfhAAo+b0A+B87AN7/lwAPmAUAES/vAApaiwBtH20Az342AAnLJwBGT7cAnmY/AC3qXwC6J3UA5evHAD178QD3OQcAklKKAPtr6gAfsV8ACF2NADADVgB7/EYA8KtrACC8zwA29JoA46kdAF5hkQAIG+YAhZllAKAUXwCNQGgAgNj/ACdzTQAGBjEAylYVAMmocwB74mAAa4zAABnERwDNZ8MACejcAFmDKgCLdsQAphyWAESv3QAZV9EApT4FAAUH/wAzfj8AwjLoAJhP3gC7fTIAJj3DAB5r7wCf+F4ANR86AH/yygDxhx0AfJAhAGokfADVbvoAMC13ABU7QwC1FMYAwxmdAK3EwgAsTUEADABdAIZ9RgDjcS0Am8aaADNiAAC00nwAtKeXADdV1QDXPvYAoxAYAE12/ABknSoAcNerAGN8+AB6sFcAFxXnAMBJVgA71tkAp4Q4ACQjywDWincAWlQjAAAfuQDxChsAGc7fAJ8x/wBmHmoAmVdhAKz7RwB+f9gAImW3ADLoiQDmv2AA78TNAGw2CQBdP9QAFt7XAFg73gDem5IA0iIoACiG6ADiWE0AxsoyAAjjFgDgfcsAF8BQAPMdpwAY4FsALhM0AIMSYgCDSAEA9Y5bAK2wfwAe6fIASEpDABBn0wCq3dgArl9CAGphzgAKKKQA05m0AAam8gBcd38Ao8KDAGE8iACKc3gAr4xaAG/XvQAtpmMA9L/LAI2B7wAmwWcAVcpFAMrZNgAoqNIAwmGNABLJdwAEJhQAEkabAMRZxADIxUQATbKRAAAX8wDUQ60AKUnlAP3VEAAAvvwAHpTMAHDO7gATPvUA7PGAALPnwwDH+CgAkwWUAMFxPgAuCbMAC0XzAIgSnACrIHsALrWfAEeSwgB7Mi8ADFVtAHKnkABr5x8AMcuWAHkWSgBBeeIA9N+JAOiUlwDi5oQAmTGXAIjtawBfXzYAu/0OAEiatABnpGwAcXJCAI1dMgCfFbgAvOUJAI0xJQD3dDkAMAUcAA0MAQBLCGgALO5YAEeqkAB05wIAvdYkAPd9pgBuSHIAnxbvAI6UpgC0kfYA0VNRAM8K8gAgmDMA9Ut+ALJjaADdPl8AQF0DAIWJfwBVUikAN2TAAG3YEAAySDIAW0x1AE5x1ABFVG4ACwnBACr1aQAUZtUAJwedAF0EUAC0O9sA6nbFAIf5FwBJa30AHSe6AJZpKQDGzKwArRRUAJDiagCI2YkALHJQAASkvgB3B5QA8zBwAAD8JwDqcagAZsJJAGTgPQCX3YMAoz+XAEOU/QANhowAMUHeAJI5nQDdcIwAF7fnAAjfOwAVNysAXICgAFqAkwAQEZIAD+jYAGyArwDb/0sAOJAPAFkYdgBipRUAYcu7AMeJuQAQQL0A0vIEAEl1JwDrtvYA2yK7AAoUqgCJJi8AZIN2AAk7MwAOlBoAUTqqAB2jwgCv7a4AXCYSAG3CTQAtepwAwFaXAAM/gwAJ8PYAK0CMAG0xmQA5tAcADCAVANjDWwD1ksQAxq1LAE7KpQCnN80A5qk2AKuSlADdQmgAGWPeAHaM7wBoi1IA/Ns3AK6hqwDfFTEAAK6hAAz72gBkTWYA7QW3ACllMABXVr8AR/86AGr5uQB1vvMAKJPfAKuAMABmjPYABMsVAPoiBgDZ5B0APbOkAFcbjwA2zQkATkLpABO+pAAzI7UA8KoaAE9lqADSwaUACz8PAFt4zQAj+XYAe4sEAIkXcgDGplMAb27iAO/rAACbSlgAxNq3AKpmugB2z88A0QIdALHxLQCMmcEAw613AIZI2gD3XaAAxoD0AKzwLwDd7JoAP1y8ANDebQCQxx8AKtu2AKMlOgAAr5oArVOTALZXBAApLbQAS4B+ANoHpwB2qg4Ae1mhABYSKgDcty0A+uX9AInb/gCJvv0A5HZsAAap/AA+gHAAhW4VAP2H/wAoPgcAYWczACoYhgBNveoAs+evAI9tbgCVZzkAMb9bAITXSAAw3xYAxy1DACVhNQDJcM4AMMu4AL9s/QCkAKIABWzkAFrdoAAhb0cAYhLSALlchABwYUkAa1bgAJlSAQBQVTcAHtW3ADPxxAATbl8AXTDkAIUuqQAdssMAoTI2AAi3pADqsdQAFvchAI9p5AAn/3cADAOAAI1ALQBPzaAAIKWZALOi0wAvXQoAtPlCABHaywB9vtAAm9vBAKsXvQDKooEACGpcAC5VFwAnAFUAfxTwAOEHhgAUC2QAlkGNAIe+3gDa/SoAayW2AHuJNAAF8/4Aub+eAGhqTwBKKqgAT8RaAC34vADXWpgA9MeVAA1NjQAgOqYApFdfABQ/sQCAOJUAzCABAHHdhgDJ3rYAv2D1AE1lEQABB2sAjLCsALLA0ABRVUgAHvsOAJVywwCjBjsAwEA1AAbcewDgRcwATin6ANbKyADo80EAfGTeAJtk2ADZvjEApJfDAHdY1ABp48UA8NoTALo6PABGGEYAVXVfANK99QBuksYArC5dAA5E7QAcPkIAYcSHACn96QDn1vMAInzKAG+RNQAI4MUA/9eNAG5q4gCw/cYAkwjBAHxddABrrbIAzW6dAD5yewDGEWoA98+pAClz3wC1yboAtwBRAOKyDQB0uiQA5X1gAHTYigANFSwAgRgMAH5mlAABKRYAn3p2AP39vgBWRe8A2X42AOzZEwCLurkAxJf8ADGoJwDxbsMAlMU2ANioVgC0qLUAz8wOABKJLQBvVzQALFaJAJnO4wDWILkAa16qAD4qnAARX8wA/QtKAOH0+wCOO20A4oYsAOnUhAD8tKkA7+7RAC41yQAvOWEAOCFEABvZyACB/AoA+0pqAC8c2ABTtIQATpmMAFQizAAqVdwAwMbWAAsZlgAacLgAaZVkACZaYAA/Uu4AfxEPAPS1EQD8y/UANLwtADS87gDoXcwA3V5gAGeOmwCSM+8AyRe4AGFYmwDhV7wAUYPGANg+EADdcUgALRzdAK8YoQAhLEYAWfPXANl6mACeVMAAT4b6AFYG/ADlea4AiSI2ADitIgBnk9wAVeiqAIImOADK55sAUQ2kAJkzsQCp1w4AaQVIAGWy8AB/iKcAiEyXAPnRNgAhkrMAe4JKAJjPIQBAn9wA3EdVAOF0OgBn60IA/p3fAF7UXwB7Z6QAuqx6AFX2ogAriCMAQbpVAFluCAAhKoYAOUeDAInj5gDlntQASftAAP9W6QAcD8oAxVmKAJT6KwDTwcUAD8XPANtargBHxYYAhUNiACGGOwAseZQAEGGHACpMewCALBoAQ78SAIgmkAB4PIkAqMTkAOXbewDEOsIAJvTqAPdnigANkr8AZaMrAD2TsQC9fAsApFHcACfdYwBp4d0AmpQZAKgplQBozigACe20AESfIABOmMoAcIJjAH58IwAPuTIAp/WOABRW5wAh8QgAtZ0qAG9+TQClGVEAtfmrAILf1gCW3WEAFjYCAMQ6nwCDoqEAcu1tADmNegCCuKkAazJcAEYnWwAANO0A0gB3APz0VQABWU0A4HGA"
                                    ),
                                    scratchBuffer(
                                        6675,
                                        "QPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNThj7T7aD0k/Xph7P9oPyT9pN6wxaCEiM7QPFDNoIaIz2w9JP9sPSb/kyxZA5MsWwAAAAAAAAACA2w9JQNsPScAAAIA/AADAPwAAAADcz9E1AAAAAADAFT8="
                                    ),
                                    scratchBuffer(6824, "BQ=="),
                                    scratchBuffer(6836, "DQ=="),
                                    scratchBuffer(6860, "DgAAAA8AAABYHAAAAAQ="),
                                    scratchBuffer(6884, "AQ=="),
                                    scratchBuffer(6899, "Cv////8="),
                                    scratchBuffer(7156, "gCA="),
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
                                    (L = 5251744),
                                    (M = 0),
                                    (n[1] = function (a, Ln, Mn, Nn, On) {
                                        (a |= 0), (Ln |= 0), (Mn |= 0), (Nn |= 0), (On |= 0);
                                        var Wn,
                                            ko,
                                            lo,
                                            oo,
                                            qo,
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
                                            po,
                                            Pn = 0,
                                            Qn = x(0),
                                            Rn = x(0),
                                            Sn = 0,
                                            Tn = x(0),
                                            Un = x(0),
                                            Vn = x(0),
                                            Xn = x(0),
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
                                            mo = x(0),
                                            no = x(0),
                                            Jo = (x(0), x(0), x(0), x(0), x(0), x(0), x(0), x(0), x(0), 0);
                                        if (((L = po = (L - 32) | 0), 1 <= (0 | On)))
                                            for (
                                                Wn = q[(16 + ((q[(a + 308) >> 2] + (Ln << 5)) | 0)) >> 2],
                                                Pn = (q[(a + 60) >> 2] + w(Wn, 24)) | 0,
                                                Ln = ((ko = q[(Pn + 8) >> 2]) + -1) | 0,
                                                xo = ((qo = q[(Pn + 4) >> 2]) + -1) | 0,
                                                yo = uo = ((Wn = q[(q[(a + 152) >> 2] + (Wn << 2)) >> 2]) + (ko << 3)) | 0,
                                                zo = vo = (Wn + ((to = w(qo, (lo = (ko + 1) | 0))) << 3)) | 0,
                                                Ao = wo = (Wn + ((ko + to) << 3)) | 0,
                                                Io = q[(Pn + 12) >> 2],
                                                ro = x(0 | qo),
                                                so = x(0 | ko),
                                                a = 0;
                                                (Vn = u[(4 + (Pn = ((oo = a << 3) + Mn) | 0)) >> 2]),
                                                (Rn = x(Vn * ro)),
                                                (Xn = u[Pn >> 2]),
                                                (Qn = x(Xn * so)),
                                                (Pn = Vn >= x(1)),
                                                (Rn =
                                                    !((Vn < x(0)) ^ 1) || Pn | (Xn >= x(1)) | (Xn < x(0))
                                                        ? (Jo ||
                                                            ((ao = u[(4 + Ao) >> 2]),
                                                                (Bo = u[(Wn + 4) >> 2]),
                                                                (Yn = x(ao - Bo)),
                                                                (Co = u[(4 + yo) >> 2]),
                                                                (Do = u[(4 + zo) >> 2]),
                                                                (Zn = x(Co - Do)),
                                                                (bo = x(x(Yn - Zn) * x(0.5))),
                                                                (Eo = u[wo >> 2]),
                                                                (Fo = u[Wn >> 2]),
                                                                (_n = x(Eo - Fo)),
                                                                (Go = u[uo >> 2]),
                                                                (Ho = u[vo >> 2]),
                                                                ($n = x(Go - Ho)),
                                                                (co = x(x(_n - $n) * x(0.5))),
                                                                (Zn = x(x(Zn + Yn) * x(0.5))),
                                                                ($n = x(x($n + _n) * x(0.5))),
                                                                (Jo = 1),
                                                                (Yn = x(x(x(x(x(Bo + Co) + Do) + ao) * x(0.25)) - x(Yn * x(0.5)))),
                                                                (_n = x(x(x(x(x(Fo + Go) + Ho) + Eo) * x(0.25)) - x(_n * x(0.5))))),
                                                            ((Vn < x(3)) ^ 1) | ((Xn > x(-2)) ^ 1) | (((Xn < x(3)) ^ 1) | ((Vn > x(-2)) ^ 1))
                                                                ? ((u[(Nn + oo) >> 2] = x(Vn * co) + x(x(Xn * $n) + _n)), (Qn = x(Vn * bo)), x(x(Xn * Zn) + Yn))
                                                                : (Xn <= x(0)
                                                                    ? Vn <= x(0)
                                                                        ? ((Un = x(x(Vn + x(2)) * x(0.5))),
                                                                            (Tn = x(x(Xn + x(2)) * x(0.5))),
                                                                            (Qn = x(bo + bo)),
                                                                            (mo = x(Yn - Qn)),
                                                                            (Rn = x(co + co)),
                                                                            (no = x(_n - Rn)),
                                                                            (io = x(Yn - x(Zn + Zn))),
                                                                            (eo = x(io - Qn)),
                                                                            (jo = x(_n - x($n + $n))),
                                                                            (fo = x(jo - Rn)),
                                                                            (go = u[(Wn + 4) >> 2]),
                                                                            (ho = u[Wn >> 2]))
                                                                        : Pn
                                                                            ? ((Qn = x(bo * x(3))),
                                                                                (Rn = x(Yn - x(Zn + Zn))),
                                                                                (io = x(Qn + Rn)),
                                                                                (eo = x(co * x(3))),
                                                                                (fo = x(_n - x($n + $n))),
                                                                                (jo = x(eo + fo)),
                                                                                (Un = x(x(Vn + x(-1)) * x(0.5))),
                                                                                (Tn = x(x(Xn + x(2)) * x(0.5))),
                                                                                (go = x(Qn + Yn)),
                                                                                (ho = x(eo + _n)),
                                                                                (eo = x(bo + Rn)),
                                                                                (fo = x(co + fo)),
                                                                                (mo = u[(4 + zo) >> 2]),
                                                                                (no = u[vo >> 2]))
                                                                            : ((Qn = x(Yn - x(Zn + Zn))),
                                                                                (Pn = xo),
                                                                                (Sn = x(y(Rn)) < x(2147483648) ? ~~Rn : -2147483648),
                                                                                (Un = x(0 | (Pn = (0 | Sn) == (0 | qo) ? Pn : Sn))),
                                                                                (Tn = x(Un / ro)),
                                                                                (eo = x(x(Tn * bo) + Qn)),
                                                                                (ao = x(Tn * co)),
                                                                                (Tn = x(_n - x($n + $n))),
                                                                                (fo = x(ao + Tn)),
                                                                                (Vn = x(x(0 | (Sn = (Pn + 1) | 0)) / ro)),
                                                                                (io = x(x(Vn * bo) + Qn)),
                                                                                (jo = x(x(Vn * co) + Tn)),
                                                                                (Tn = x(x(Xn + x(2)) * x(0.5))),
                                                                                (Un = x(Rn - Un)),
                                                                                (Pn = (Wn + (w(Pn, lo) << 3)) | 0),
                                                                                (mo = u[(Pn + 4) >> 2]),
                                                                                (no = u[Pn >> 2]),
                                                                                (Pn = (Wn + (w(Sn, lo) << 3)) | 0),
                                                                                (go = u[(Pn + 4) >> 2]),
                                                                                (ho = u[Pn >> 2]))
                                                                    : Xn >= x(1)
                                                                        ? Vn <= x(0)
                                                                            ? ((Un = x(x(Vn + x(2)) * x(0.5))),
                                                                                (Tn = x(x(Xn + x(-1)) * x(0.5))),
                                                                                (Qn = x(bo + bo)),
                                                                                (eo = x(x(Zn + Yn) - Qn)),
                                                                                (Rn = x(co + co)),
                                                                                (fo = x(x($n + _n) - Rn)),
                                                                                (go = x(x(Zn * x(3)) + Yn)),
                                                                                (mo = x(go - Qn)),
                                                                                (ho = x(x($n * x(3)) + _n)),
                                                                                (no = x(ho - Rn)),
                                                                                (io = u[(4 + yo) >> 2]),
                                                                                (jo = u[uo >> 2]))
                                                                            : Pn
                                                                                ? ((Qn = x(bo * x(3))),
                                                                                    (io = x(Qn + x(Zn + Yn))),
                                                                                    (Rn = x(co * x(3))),
                                                                                    (jo = x(Rn + x($n + _n))),
                                                                                    (ao = Qn),
                                                                                    (Qn = x(x(Zn * x(3)) + Yn)),
                                                                                    (go = x(ao + Qn)),
                                                                                    (ao = Rn),
                                                                                    (Rn = x(x($n * x(3)) + _n)),
                                                                                    (ho = x(ao + Rn)),
                                                                                    (Un = x(x(Vn + x(-1)) * x(0.5))),
                                                                                    (Tn = x(x(Xn + x(-1)) * x(0.5))),
                                                                                    (mo = x(bo + Qn)),
                                                                                    (no = x(co + Rn)),
                                                                                    (eo = u[(4 + Ao) >> 2]),
                                                                                    (fo = u[wo >> 2]))
                                                                                : ((Qn = x(x(Zn * x(3)) + Yn)),
                                                                                    (Pn = xo),
                                                                                    (Sn = x(y(Rn)) < x(2147483648) ? ~~Rn : -2147483648),
                                                                                    (Un = x(0 | (Pn = (0 | Sn) == (0 | qo) ? Pn : Sn))),
                                                                                    (Tn = x(Un / ro)),
                                                                                    (mo = x(x(Tn * bo) + Qn)),
                                                                                    (ao = x(Tn * co)),
                                                                                    (Tn = x(x($n * x(3)) + _n)),
                                                                                    (no = x(ao + Tn)),
                                                                                    (Vn = x(x(0 | (Sn = (Pn + 1) | 0)) / ro)),
                                                                                    (go = x(x(Vn * bo) + Qn)),
                                                                                    (ho = x(x(Vn * co) + Tn)),
                                                                                    (Tn = x(x(Xn + x(-1)) * x(0.5))),
                                                                                    (Un = x(Rn - Un)),
                                                                                    (Pn = (Wn + ((w(Pn, lo) + ko) << 3)) | 0),
                                                                                    (eo = u[(Pn + 4) >> 2]),
                                                                                    (fo = u[Pn >> 2]),
                                                                                    (Pn = (Wn + ((w(Sn, lo) + ko) << 3)) | 0),
                                                                                    (io = u[(Pn + 4) >> 2]),
                                                                                    (jo = u[Pn >> 2]))
                                                                        : Vn <= x(0)
                                                                            ? ((Un = x(x(Vn + x(2)) * x(0.5))),
                                                                                (Pn = Ln),
                                                                                (Sn = x(y((Rn = Qn))) < x(2147483648) ? ~~Qn : -2147483648),
                                                                                (Qn = x(0 | (Pn = (0 | Sn) == (0 | ko) ? Pn : Sn))),
                                                                                (Tn = x(Rn - Qn)),
                                                                                (Qn = x(Qn / so)),
                                                                                (Rn = x(bo + bo)),
                                                                                (eo = x(x(x(Qn * Zn) + Yn) - Rn)),
                                                                                (ao = x(x(Qn * $n) + _n)),
                                                                                (Qn = x(co + co)),
                                                                                (fo = x(ao - Qn)),
                                                                                (Vn = x(x(0 | (Sn = (Pn + 1) | 0)) / so)),
                                                                                (mo = x(x(x(Vn * Zn) + Yn) - Rn)),
                                                                                (no = x(x(x(Vn * $n) + _n) - Qn)),
                                                                                (io = u[(4 + (Pn = (Wn + (Pn << 3)) | 0)) >> 2]),
                                                                                (jo = u[Pn >> 2]),
                                                                                (go = u[(4 + (Pn = (Wn + (Sn << 3)) | 0)) >> 2]),
                                                                                (ho = u[Pn >> 2]))
                                                                            : Pn
                                                                                ? ((ao = Rn = x(bo * x(3))),
                                                                                    (Pn = Ln),
                                                                                    (Sn = x(y(Qn)) < x(2147483648) ? ~~Qn : -2147483648),
                                                                                    (Tn = x(0 | (Pn = (0 | Sn) == (0 | ko) ? Pn : Sn))),
                                                                                    (Un = x(Tn / so)),
                                                                                    (io = x(ao + x(x(Un * Zn) + Yn))),
                                                                                    (Xn = x(co * x(3))),
                                                                                    (jo = x(Xn + x(x(Un * $n) + _n))),
                                                                                    (ao = Rn),
                                                                                    (Rn = x(x(0 | (Sn = (Pn + 1) | 0)) / so)),
                                                                                    (go = x(ao + x(x(Rn * Zn) + Yn))),
                                                                                    (ho = x(Xn + x(x(Rn * $n) + _n))),
                                                                                    (Un = x(x(Vn + x(-1)) * x(0.5))),
                                                                                    (Tn = x(Qn - Tn)),
                                                                                    (eo = u[(4 + (Pn = (Wn + ((Pn + to) << 3)) | 0)) >> 2]),
                                                                                    (fo = u[Pn >> 2]),
                                                                                    (mo = u[(4 + (Pn = (Wn + ((Sn + to) << 3)) | 0)) >> 2]),
                                                                                    (no = u[Pn >> 2]))
                                                                                : ((v[(16 + po) >> 3] = Vn), (q[po >> 2] = a), (v[(8 + po) >> 3] = Xn), Y(4, 1107, po)),
                                                                    x(Tn + Un) <= x(1)
                                                                        ? ((u[(Nn + oo) >> 2] = x(fo + x(x(no - fo) * Tn)) + x(x(jo - fo) * Un)), (Qn = x(eo + x(x(mo - eo) * Tn))), x(x(io - eo) * Un))
                                                                        : ((Qn = x(x(1) - Tn)), (Rn = x(x(1) - Un)), (u[(Nn + oo) >> 2] = x(ho + x(x(jo - ho) * Qn)) + x(x(no - ho) * Rn)), (Qn = x(go + x(x(io - go) * Qn))), x(x(mo - go) * Rn))))
                                                        : ((Pn = x(y((ao = Rn))) < x(2147483648) ? ~~Rn : -2147483648),
                                                            (Un = x(ao - x(0 | Pn))),
                                                            (Sn = x(y((Rn = Qn))) < x(2147483648) ? ~~Qn : -2147483648),
                                                            (Tn = x(Rn - x(0 | Sn))),
                                                            (Pn = (Sn + w(Pn, lo)) | 0),
                                                            Io
                                                                ? ((Qn = x(x(1) - Un)),
                                                                    (Rn = x(x(1) - Tn)),
                                                                    (Sn = (Wn + (Pn << 3)) | 0),
                                                                    (Pn = (Wn + ((Pn + lo) << 3)) | 0),
                                                                    (u[(Nn + oo) >> 2] = x(x(x(Qn * x(Rn * u[Sn >> 2])) + x(Qn * x(Tn * u[(Sn + 8) >> 2]))) + x(Un * x(Rn * u[Pn >> 2]))) + x(Un * x(Tn * u[(Pn + 8) >> 2]))),
                                                                    (Qn = x(x(x(Qn * x(Rn * u[(Sn + 4) >> 2])) + x(Qn * x(Tn * u[(Sn + 12) >> 2]))) + x(Un * x(Rn * u[(Pn + 4) >> 2])))),
                                                                    x(Un * x(Tn * u[(Pn + 12) >> 2])))
                                                                : x(Tn + Un) <= x(1)
                                                                    ? ((Qn = x(x(x(1) - Tn) - Un)),
                                                                        (Sn = (Wn + (Pn << 3)) | 0),
                                                                        (Pn = (Wn + ((Pn + lo) << 3)) | 0),
                                                                        (u[(Nn + oo) >> 2] = x(x(Qn * u[Sn >> 2]) + x(Tn * u[(Sn + 8) >> 2])) + x(Un * u[Pn >> 2])),
                                                                        (Qn = x(x(Qn * u[(Sn + 4) >> 2]) + x(Tn * u[(Sn + 12) >> 2]))),
                                                                        x(Un * u[(Pn + 4) >> 2]))
                                                                    : ((Qn = x(x(Tn + x(-1)) + Un)),
                                                                        (Sn = (Wn + ((Pn + lo) << 3)) | 0),
                                                                        (Rn = x(x(1) - Tn)),
                                                                        (Vn = x(x(1) - Un)),
                                                                        (Pn = (Wn + (Pn << 3)) | 0),
                                                                        (u[(Nn + oo) >> 2] = x(x(Qn * u[(Sn + 8) >> 2]) + x(Rn * u[Sn >> 2])) + x(Vn * u[(Pn + 8) >> 2])),
                                                                        (Qn = x(x(Qn * u[(Sn + 12) >> 2]) + x(Rn * u[(Sn + 4) >> 2]))),
                                                                        x(Vn * u[(Pn + 12) >> 2])))),
                                                (u[(4 + ((Nn + oo) | 0)) >> 2] = Qn + Rn),
                                                (0 | On) != (0 | (a = (a + 1) | 0));

                                            );
                                        L = (32 + po) | 0;
                                    }),
                                    (n[2] = function (a, mh) {
                                        (a |= 0), (mh |= 0);
                                        var Dh = 0,
                                            Eh = 0,
                                            Fh = 0,
                                            Gh = 0,
                                            Hh = 0,
                                            Ih = x(0),
                                            Jh = 0,
                                            Kh = 0,
                                            Mh = (x(0), 0),
                                            Nh = 0,
                                            Gh = q[(a + 320) >> 2],
                                            Dh = q[(a + 316) >> 2],
                                            Hh = q[(a + 308) >> 2];
                                        -1 == (0 | (Eh = q[(8 + (Fh = (Hh + (mh << 5)) | 0)) >> 2]))
                                            ? ((q[((Nh = Dh) + (Dh = mh << 2)) >> 2] = q[(q[(a + 148) >> 2] + (q[(Fh + 16) >> 2] << 2)) >> 2]), (q[(Dh + Gh) >> 2] = 1065353216))
                                            : ((Jh = q[(Fh + 16) >> 2]),
                                                (Kh = q[(q[(a + 152) >> 2] + (Jh << 2)) >> 2]),
                                                n[q[(24 + ((Hh + (Eh << 5)) | 0)) >> 2]](a, Eh, Kh, Kh, q[(16 + ((q[(a + 60) >> 2] + w(Jh, 24)) | 0)) >> 2]),
                                                (Ih = u[(q[(a + 148) >> 2] + (q[(Fh + 16) >> 2] << 2)) >> 2]),
                                                (Fh = q[(Fh + 8) >> 2] << 2),
                                                (u[((Eh = mh << 2) + Dh) >> 2] = Ih * u[(Fh + Dh) >> 2]),
                                                (q[(Eh + Gh) >> 2] = q[(Fh + Gh) >> 2])),
                                            4 <= r[(q[a >> 2] + 4) | 0] &&
                                            ((Gh = mh << 2),
                                                (Dh = (q[(a + 308) >> 2] + (mh << 5)) | 0),
                                                (Eh = q[(Dh + 16) >> 2] << 2),
                                                (Fh = q[(a + 328) >> 2]),
                                                (mh = q[(a + 324) >> 2]),
                                                -1 == (0 | (Hh = q[(Dh + 8) >> 2]))
                                                    ? ((Hh = q[(a + 156) >> 2]),
                                                        (q[((Dh = Gh << 2) + mh) >> 2] = q[(Hh + (Eh <<= 2)) >> 2]),
                                                        (q[((Jh = 4 | Dh) + mh) >> 2] = q[((Kh = 4 | Eh) + Hh) >> 2]),
                                                        (q[((Mh = 8 | Dh) + mh) >> 2] = q[(Hh + (Nh = 8 | Eh)) >> 2]),
                                                        (q[(mh + ((Gh |= 3) << 2)) >> 2] = 1065353216),
                                                        (a = q[(a + 160) >> 2]),
                                                        (q[(Dh + Fh) >> 2] = q[(a + Eh) >> 2]),
                                                        (q[(Fh + Jh) >> 2] = q[(a + Kh) >> 2]),
                                                        (q[(Fh + Mh) >> 2] = q[(a + Nh) >> 2]))
                                                    : ((Eh = ((Kh = Eh << 2) + q[(a + 156) >> 2]) | 0),
                                                        (u[(Dh = ((Jh = Gh << 2) + mh) | 0) >> 2] = u[Eh >> 2] * u[(Hh = ((Mh = Hh << 4) + mh) | 0) >> 2]),
                                                        (u[(Dh + 4) >> 2] = u[(Eh + 4) >> 2] * u[(Hh + 4) >> 2]),
                                                        (u[(Dh + 8) >> 2] = u[(Eh + 8) >> 2] * u[(Hh + 8) >> 2]),
                                                        (q[(mh + ((Gh |= 3) << 2)) >> 2] = 1065353216),
                                                        (a = (Kh + q[(a + 160) >> 2]) | 0),
                                                        (Nh = u[a >> 2]),
                                                        (Ih = u[(Dh = (Fh + Mh) | 0) >> 2]),
                                                        (u[(mh = (Fh + Jh) | 0) >> 2] = x(Nh + Ih) - x(Nh * Ih)),
                                                        (Nh = u[(a + 4) >> 2]),
                                                        (Ih = u[(Dh + 4) >> 2]),
                                                        (u[(mh + 4) >> 2] = x(Nh + Ih) - x(Nh * Ih)),
                                                        (Nh = u[(a + 8) >> 2]),
                                                        (Ih = u[(Dh + 8) >> 2]),
                                                        (u[(mh + 8) >> 2] = x(Nh + Ih) - x(Nh * Ih))),
                                                (q[(Fh + (Gh << 2)) >> 2] = 1065353216));
                                    }),
                                    (n[3] = function (a, Sm, un, xn, yn) {
                                        (a |= 0), (Sm |= 0), (un |= 0), (xn |= 0), (yn |= 0);
                                        var Dn,
                                            En,
                                            Fn,
                                            Hn,
                                            In,
                                            zn = 0,
                                            zn = (x(0), x(0), x(0), x(0), x(0), x(0), x(0), x(0), (Sm = q[(16 + ((q[(a + 308) >> 2] + (Sm << 5)) | 0)) >> 2]) << 2),
                                            Bn = (function (a) {
                                                var El,
                                                    Hl,
                                                    Fl,
                                                    Gl,
                                                    Dl = x(0);
                                                (L = Fl = (L - 16) | 0), j(a);
                                                a: if ((El = 2147483647 & (Gl = b[0])) >>> 0 <= 1061752794) (Dl = x(1)), El >>> 0 < 964689920 || (Dl = ba(+a));
                                                else if (El >>> 0 <= 1081824209)
                                                    (Hl = +a), (Dl = 1075235812 <= El >>> 0 ? x(-ba(((0 | Gl) < 0 ? 3.141592653589793 : -3.141592653589793) + Hl)) : aa((0 | Gl) <= -1 ? 1.5707963267948966 + Hl : 1.5707963267948966 - Hl));
                                                else if (El >>> 0 <= 1088565717)
                                                    Dl = 1085271520 <= El >>> 0 ? ba(+a + ((0 | Gl) < 0 ? 6.283185307179586 : -6.283185307179586)) : aa((0 | Gl) <= -1 ? -4.71238898038469 - +a : +a - 4.71238898038469);
                                                else if (((Dl = x(a - a)), !(2139095040 <= El >>> 0)))
                                                    if ((El = 3 & Da(a, (8 + Fl) | 0)) >>> 0 <= 2) {
                                                        switch ((El - 1) | 0) {
                                                            default:
                                                                Dl = ba(v[(8 + Fl) >> 3]);
                                                                break a;
                                                            case 0:
                                                                Dl = aa(-v[(8 + Fl) >> 3]);
                                                                break a;
                                                            case 1:
                                                        }
                                                        Dl = x(-ba(v[(8 + Fl) >> 3]));
                                                    } else Dl = aa(v[(8 + Fl) >> 3]);
                                                return (L = (16 + Fl) | 0), Dl;
                                            })((An = x(x(x(u[(4 + ((q[(a + 168) >> 2] + w(Sm, 12)) | 0)) >> 2] + u[(zn + q[(a + 284) >> 2]) >> 2]) * x(3.1415927410125732)) / x(180)))),
                                            Cn = u[(zn + q[(a + 272) >> 2]) >> 2],
                                            Gn = q[(zn + q[(a + 292) >> 2]) >> 2],
                                            An = (function (a) {
                                                var Vk,
                                                    Al,
                                                    Cl,
                                                    Bl = 0;
                                                (L = Al = (L - 16) | 0), j(a);
                                                a: if ((Vk = 2147483647 & (Cl = b[0])) >>> 0 <= 1061752794) Vk >>> 0 < 964689920 || (a = aa(+a));
                                                else if (Vk >>> 0 <= 1081824209)
                                                    (Bl = +a),
                                                        (a = Vk >>> 0 <= 1075235811 ? ((0 | Cl) <= -1 ? x(-ba(Bl + 1.5707963267948966)) : ba(Bl + -1.5707963267948966)) : aa(-(((0 | Cl) < 0 ? 3.141592653589793 : -3.141592653589793) + Bl)));
                                                else if (Vk >>> 0 <= 1088565717)
                                                    (Bl = +a), (a = Vk >>> 0 <= 1085271519 ? ((0 | Cl) <= -1 ? ba(Bl + 4.71238898038469) : x(-ba(Bl + -4.71238898038469))) : aa(((0 | Cl) < 0 ? 6.283185307179586 : -6.283185307179586) + Bl));
                                                else if (2139095040 <= Vk >>> 0) a = x(a - a);
                                                else if ((Vk = 3 & Da(a, (8 + Al) | 0)) >>> 0 <= 2) {
                                                    switch ((Vk - 1) | 0) {
                                                        default:
                                                            a = aa(v[(8 + Al) >> 3]);
                                                            break a;
                                                        case 0:
                                                            a = ba(v[(8 + Al) >> 3]);
                                                            break a;
                                                        case 1:
                                                    }
                                                    a = aa(-v[(8 + Al) >> 3]);
                                                } else a = x(-ba(v[(8 + Al) >> 3]));
                                                return (L = (16 + Al) | 0), a;
                                            })(An);
                                        if ((Sm = 0) < (0 | yn))
                                            for (
                                                Bn = x(Cn * Bn),
                                                En = x(Gn ? -1 : 1),
                                                Hn = x(Bn * En),
                                                Dn = q[(zn + q[(a + 288) >> 2]) >> 2] ? x(-1) : x(1),
                                                In = x(x(Cn * An) * Dn),
                                                Bn = x(Bn * Dn),
                                                Cn = x(x(Cn * x(-An)) * En),
                                                An = u[(zn + q[(a + 280) >> 2]) >> 2],
                                                En = u[(zn + q[(a + 276) >> 2]) >> 2];
                                                (zn = ((a = Sm << 3) + xn) | 0),
                                                (Dn = u[(a = (a + un) | 0) >> 2]),
                                                (Fn = u[(a + 4) >> 2]),
                                                (u[(zn + 4) >> 2] = An + x(x(In * Dn) + x(Hn * Fn))),
                                                (u[zn >> 2] = En + x(x(Bn * Dn) + x(Cn * Fn))),
                                                (0 | yn) != (0 | (Sm = (Sm + 1) | 0));

                                            );
                                    }),
                                    (n[4] = function (a, mh) {
                                        (a |= 0), (mh |= 0);
                                        var yh,
                                            zh,
                                            Ah,
                                            Bh,
                                            Ch,
                                            nh,
                                            oh = 0,
                                            ph = 0,
                                            qh = 0,
                                            rh = x(0),
                                            sh = 0,
                                            th = 0,
                                            uh = x(0),
                                            vh = 0,
                                            wh = 0,
                                            xh = 0;
                                        if ((x(0), x(0), x(0), x(0), (L = nh = (L + -64) | 0), (vh = q[(a + 320) >> 2]), (wh = q[(a + 316) >> 2]), (ph = q[(a + 308) >> 2]), -1 == (0 | (sh = q[(8 + (qh = (ph + (mh << 5)) | 0)) >> 2]))))
                                            (oh = q[(qh + 16) >> 2] << 2), (q[((ph = mh << 2) + wh) >> 2] = q[(oh + q[(a + 268) >> 2]) >> 2]), (q[(ph + vh) >> 2] = q[(oh + q[(a + 272) >> 2]) >> 2]);
                                        else {
                                            (oh = q[(qh + 16) >> 2] << 2),
                                                (xh = q[(oh + q[(a + 276) >> 2]) >> 2]),
                                                (q[(24 + nh) >> 2] = xh),
                                                (oh = q[(oh + q[(a + 280) >> 2]) >> 2]),
                                                (q[(28 + nh) >> 2] = oh),
                                                (q[(16 + nh) >> 2] = 0),
                                                (zh = 1 == q[(12 + (th = (ph + (sh << 5)) | 0)) >> 2] ? x(-10) : x(-0.10000000149011612)),
                                                (u[(20 + nh) >> 2] = zh),
                                                (q[(60 + nh) >> 2] = oh),
                                                (q[(56 + nh) >> 2] = xh),
                                                n[q[(th + 24) >> 2]](a, sh, (56 + nh) | 0, (48 + nh) | 0, 1),
                                                (rh = x(1)),
                                                (ph = 9);
                                            b: {
                                                for (; ;) {
                                                    if (
                                                        ((oh = ph),
                                                            (uh = x(rh * x(0))),
                                                            (u[(32 + nh) >> 2] = uh + u[(56 + nh) >> 2]),
                                                            (yh = x(zh * rh)),
                                                            (u[(36 + nh) >> 2] = yh + u[(60 + nh) >> 2]),
                                                            n[q[(th + 24) >> 2]](a, sh, (32 + nh) | 0, (40 + nh) | 0, 1),
                                                            (Ah = x(u[(44 + nh) >> 2] - u[(52 + nh) >> 2])),
                                                            (u[(44 + nh) >> 2] = Ah),
                                                            (Bh = x(u[(40 + nh) >> 2] - u[(48 + nh) >> 2])),
                                                            (u[(40 + nh) >> 2] = Bh),
                                                            Ah != x(0) || Bh != x(0))
                                                    ) {
                                                        (ph = q[(44 + nh) >> 2]), (q[(8 + nh) >> 2] = q[(40 + nh) >> 2]), (q[(12 + nh) >> 2] = ph);
                                                        break b;
                                                    }
                                                    if (
                                                        ((u[(32 + nh) >> 2] = u[(56 + nh) >> 2] - uh),
                                                            (u[(36 + nh) >> 2] = u[(60 + nh) >> 2] - yh),
                                                            n[q[(th + 24) >> 2]](a, sh, (32 + nh) | 0, (40 + nh) | 0, 1),
                                                            (uh = x(u[(40 + nh) >> 2] - u[(48 + nh) >> 2])),
                                                            (u[(40 + nh) >> 2] = uh),
                                                            (yh = x(u[(44 + nh) >> 2] - u[(52 + nh) >> 2])),
                                                            (u[(44 + nh) >> 2] = yh) != x(0) || uh != x(0))
                                                    ) {
                                                        (u[(12 + nh) >> 2] = -yh), (u[(8 + nh) >> 2] = -uh);
                                                        break b;
                                                    }
                                                    if (((ph = (oh + -1) | 0), (rh = x(rh * x(0.10000000149011612))), !oh)) break;
                                                }
                                                Y(3, 1311, 0);
                                            }
                                            (rh = (function (a, ji) {
                                                var ki = x(0);
                                                if ((ki = x(Ba(u[(4 + a) >> 2], u[a >> 2]) - Ba(u[(4 + ji) >> 2], u[ji >> 2]))) < x(-3.1415927410125732)) for (; (ki = x(ki + x(6.2831854820251465))) < x(-3.1415927410125732););
                                                if (ki > x(3.1415927410125732)) for (; (ki = x(ki + x(-6.2831854820251465))) > x(3.1415927410125732););
                                                return ki;
                                            })((16 + nh) | 0, (8 + nh) | 0)),
                                                n[q[(th + 24) >> 2]](a, q[(qh + 8) >> 2], (24 + nh) | 0, (24 + nh) | 0, 1),
                                                (ph = q[(qh + 16) >> 2] << 2),
                                                (q[(ph + q[(a + 276) >> 2]) >> 2] = q[(24 + nh) >> 2]),
                                                (q[(ph + q[(a + 280) >> 2]) >> 2] = q[(28 + nh) >> 2]),
                                                (oh = (ph + q[(a + 284) >> 2]) | 0),
                                                (u[oh >> 2] = u[oh >> 2] + x(x(rh * x(-180)) / x(3.1415927410125732))),
                                                (qh = q[(qh + 8) >> 2] << 2),
                                                (u[((oh = mh << 2) + wh) >> 2] = u[(ph + q[(a + 268) >> 2]) >> 2] * u[(qh + wh) >> 2]),
                                                (ph = (ph + q[(a + 272) >> 2]) | 0),
                                                (rh = x(u[ph >> 2] * u[(qh + vh) >> 2])),
                                                (u[(oh + vh) >> 2] = rh),
                                                (u[ph >> 2] = rh);
                                        }
                                        4 <= r[(q[a >> 2] + 4) | 0] &&
                                            ((oh = mh << 2),
                                                (qh = (q[(a + 308) >> 2] + (mh << 5)) | 0),
                                                (sh = q[(qh + 16) >> 2] << 2),
                                                (ph = q[(a + 328) >> 2]),
                                                (mh = q[(a + 324) >> 2]),
                                                -1 == (0 | (th = q[(qh + 8) >> 2]))
                                                    ? ((th = q[(a + 296) >> 2]),
                                                        (q[((qh = oh << 2) + mh) >> 2] = q[(th + (sh <<= 2)) >> 2]),
                                                        (q[((vh = 4 | qh) + mh) >> 2] = q[((wh = 4 | sh) + th) >> 2]),
                                                        (q[((xh = 8 | qh) + mh) >> 2] = q[(th + (Ch = 8 | sh)) >> 2]),
                                                        (q[(mh + ((oh |= 3) << 2)) >> 2] = 1065353216),
                                                        (a = q[(a + 300) >> 2]),
                                                        (q[(ph + qh) >> 2] = q[(a + sh) >> 2]),
                                                        (q[(ph + vh) >> 2] = q[(a + wh) >> 2]),
                                                        (q[(ph + xh) >> 2] = q[(a + Ch) >> 2]))
                                                    : ((sh = ((wh = sh << 2) + q[(a + 296) >> 2]) | 0),
                                                        (u[(qh = ((vh = oh << 2) + mh) | 0) >> 2] = u[sh >> 2] * u[(th = ((xh = th << 4) + mh) | 0) >> 2]),
                                                        (u[(qh + 4) >> 2] = u[(sh + 4) >> 2] * u[(th + 4) >> 2]),
                                                        (u[(qh + 8) >> 2] = u[(sh + 8) >> 2] * u[(th + 8) >> 2]),
                                                        (q[(mh + ((oh |= 3) << 2)) >> 2] = 1065353216),
                                                        (a = (wh + q[(a + 300) >> 2]) | 0),
                                                        (rh = u[a >> 2]),
                                                        (uh = u[(qh = (ph + xh) | 0) >> 2]),
                                                        (u[(mh = (ph + vh) | 0) >> 2] = x(rh + uh) - x(rh * uh)),
                                                        (rh = u[(a + 4) >> 2]),
                                                        (uh = u[(qh + 4) >> 2]),
                                                        (u[(mh + 4) >> 2] = x(rh + uh) - x(rh * uh)),
                                                        (rh = u[(a + 8) >> 2]),
                                                        (uh = u[(qh + 8) >> 2]),
                                                        (u[(mh + 8) >> 2] = x(rh + uh) - x(rh * uh))),
                                                (q[(ph + (oh << 2)) >> 2] = 1065353216)),
                                            (L = (64 + nh) | 0);
                                    }),
                                    (n[5] = function (a, Vk) {
                                        return (a |= 0), (Vk |= 0), x(0), x(0), 0 | ((a = u[a >> 2]) < (Vk = u[Vk >> 2]) ? -1 : Vk < a);
                                    }),
                                    (n[6] = function (a, vj, xj, yj) {
                                        (a |= 0), (vj |= 0), (xj |= 0), (yj |= 0);
                                        var Vj = 0,
                                            Wj = 0,
                                            Xj = x(0),
                                            Yj = 0,
                                            Zj = 0,
                                            _j = 0,
                                            $j = 0,
                                            ak = 0;
                                        if (1 <= (0 | (Yj = q[(a + 8) >> 2]))) for (_j = q[(a + 12) >> 2], Zj = q[(a + 20) >> 2]; (u[((Wj = Vj << 2) + _j) >> 2] = u[(vj + Wj) >> 2] * u[(Wj + Zj) >> 2]), (0 | (Vj = (Vj + 1) | 0)) < (0 | Yj););
                                        if (!((0 | (Yj = q[a >> 2])) < 1))
                                            if (((_j = q[(a + 4) >> 2]), yj))
                                                for (Wj = vj = 0; ;) {
                                                    if (q[yj >> 2]) {
                                                        if ((0 | (Vj = q[((Zj = vj << 2) + q[(a + 16) >> 2]) >> 2])) < 1) Xj = x(0);
                                                        else for ($j = (Vj + Wj) | 0, ak = q[(a + 12) >> 2], Xj = x(0), Vj = Wj; (Xj = x(Xj + u[(ak + (Vj << 2)) >> 2])), (0 | (Vj = (Vj + 1) | 0)) < (0 | $j););
                                                        u[(xj + Zj) >> 2] = Xj;
                                                    }
                                                    if (((yj = (yj + 4) | 0), (Wj = (q[(_j + (vj << 2)) >> 2] + Wj) | 0), !((0 | (vj = (vj + 1) | 0)) < (0 | Yj)))) break;
                                                }
                                            else
                                                for (Zj = q[(a + 16) >> 2], vj = yj = 0; ;) {
                                                    if ((0 | (Vj = q[((Wj = yj << 2) + Zj) >> 2])) <= 0) Xj = x(0);
                                                    else for ($j = (vj + Vj) | 0, ak = q[(a + 12) >> 2], Xj = x(0), Vj = vj; (Xj = x(Xj + u[(ak + (Vj << 2)) >> 2])), (0 | (Vj = (Vj + 1) | 0)) < (0 | $j););
                                                    if (((u[(xj + Wj) >> 2] = Xj), (vj = (q[(Wj + _j) >> 2] + vj) | 0), !((0 | (yj = (yj + 1) | 0)) < (0 | Yj)))) break;
                                                }
                                    }),
                                    (n[7] = function (a, vj, xj, yj) {
                                        (a |= 0), (vj |= 0), (xj |= 0), (yj |= 0);
                                        var zj = 0,
                                            Aj = x(0),
                                            Qj = 0,
                                            Rj = 0,
                                            Sj = 0,
                                            Tj = 0,
                                            Uj = 0;
                                        if (1 <= (0 | (Tj = q[(a + 8) >> 2]))) for (Rj = q[(a + 12) >> 2], Sj = q[(a + 20) >> 2]; (u[((Qj = zj << 2) + Rj) >> 2] = u[(vj + Qj) >> 2] * u[(Qj + Sj) >> 2]), (0 | (zj = (zj + 1) | 0)) < (0 | Tj););
                                        if (!((0 | (zj = q[a >> 2])) < 1))
                                            if (((Tj = q[(a + 4) >> 2]), yj))
                                                for (Qj = vj = 0; ;) {
                                                    if (q[yj >> 2]) {
                                                        if ((0 | (zj = q[((Rj = vj << 2) + q[(a + 16) >> 2]) >> 2])) < 1) Aj = x(0);
                                                        else for (Sj = (zj + Qj) | 0, Uj = q[(a + 12) >> 2], Aj = x(0), zj = Qj; (Aj = x(Aj + u[(Uj + (zj << 2)) >> 2])), (0 | (zj = (zj + 1) | 0)) < (0 | Sj););
                                                        (zj = (xj + Rj) | 0), (Aj = x(Aj + x(0.0010000000474974513))), (Rj = x(y(Aj)) < x(2147483648) ? ~~Aj : -2147483648), (q[zj >> 2] = Rj), (zj = q[a >> 2]);
                                                    }
                                                    if (((yj = (yj + 4) | 0), (Qj = (q[(Tj + (vj << 2)) >> 2] + Qj) | 0), !((0 | (vj = (vj + 1) | 0)) < (0 | zj)))) break;
                                                }
                                            else
                                                for (Rj = q[(a + 16) >> 2], vj = yj = 0; ;) {
                                                    if ((0 | (zj = q[((Qj = yj << 2) + Rj) >> 2])) <= 0) Aj = x(0);
                                                    else for (Sj = (vj + zj) | 0, Uj = q[(a + 12) >> 2], Aj = x(0), zj = vj; (Aj = x(Aj + u[(Uj + (zj << 2)) >> 2])), (0 | (zj = (zj + 1) | 0)) < (0 | Sj););
                                                    if (
                                                        ((zj = (xj + Qj) | 0),
                                                            (Aj = x(Aj + x(0.0010000000474974513))),
                                                            (Sj = x(y(Aj)) < x(2147483648) ? ~~Aj : -2147483648),
                                                            (q[zj >> 2] = Sj),
                                                            (vj = (q[(Qj + Tj) >> 2] + vj) | 0),
                                                            !((0 | (yj = (yj + 1) | 0)) < q[a >> 2]))
                                                    )
                                                        break;
                                                }
                                    }),
                                    (n[8] = function (a, vj, xj, yj, zj, Aj) {
                                        (a |= 0), (vj |= 0), (xj |= 0), (yj |= 0), (zj |= 0), (Aj |= 0);
                                        var Oj,
                                            Pj,
                                            Bj = 0,
                                            Cj = 0,
                                            Dj = 0,
                                            Ej = 0,
                                            Fj = 0,
                                            Gj = 0,
                                            Hj = 0,
                                            Ij = 0,
                                            Kj = 0,
                                            Lj = 0,
                                            Mj = x(0),
                                            Nj = 0,
                                            Jj = q[a >> 2];
                                        if (!((0 | Jj) < 1))
                                            if (((Oj = zj << 2), (Pj = q[(a + 4) >> 2]), Aj))
                                                for (; ;) {
                                                    if (
                                                        q[Aj >> 2] &&
                                                        ((Dj = q[((Bj = Ej << 2) + q[(a + 16) >> 2]) >> 2]), (Hj = q[(xj + Bj) >> 2]), (Cj = q[(yj + Bj) >> 2]), (Bj = (0 | (Ij = w(Cj, zj))) < 1) || ca(Hj, 0, w(Cj, Oj)), !(Bj | ((0 | Dj) < 1)))
                                                    )
                                                        for (Kj = (Dj + Gj) | 0, Lj = q[(a + 20) >> 2], Bj = Gj; ;) {
                                                            for (
                                                                Mj = u[((Cj = Bj << 2) + Lj) >> 2], Nj = q[(vj + Cj) >> 2], Fj = 0;
                                                                (u[(Cj = ((Dj = Fj << 2) + Hj) | 0) >> 2] = u[Cj >> 2] + x(Mj * u[(Dj + Nj) >> 2])), (0 | Ij) != (0 | (Fj = (Fj + 1) | 0));

                                                            );
                                                            if (!((0 | (Bj = (Bj + 1) | 0)) < (0 | Kj))) break;
                                                        }
                                                    if (((Aj = (Aj + 4) | 0), (Gj = (q[((Ej << 2) + Pj) >> 2] + Gj) | 0), !((0 | (Ej = (Ej + 1) | 0)) < (0 | Jj)))) break;
                                                }
                                            else
                                                for (Aj = 0; ;) {
                                                    if (
                                                        ((Dj = q[((Ej = Aj << 2) + q[(a + 16) >> 2]) >> 2]), (Hj = q[(xj + Ej) >> 2]), (Cj = q[(yj + Ej) >> 2]), (Bj = (0 | (Ij = w(Cj, zj))) < 1) || ca(Hj, 0, w(Cj, Oj)), !(Bj | ((0 | Dj) <= 0)))
                                                    )
                                                        for (Kj = (Dj + Gj) | 0, Lj = q[(a + 20) >> 2], Bj = Gj; ;) {
                                                            for (
                                                                Mj = u[((Cj = Bj << 2) + Lj) >> 2], Nj = q[(vj + Cj) >> 2], Fj = 0;
                                                                (u[(Cj = ((Dj = Fj << 2) + Hj) | 0) >> 2] = u[Cj >> 2] + x(Mj * u[(Dj + Nj) >> 2])), (0 | Ij) != (0 | (Fj = (Fj + 1) | 0));

                                                            );
                                                            if (!((0 | (Bj = (Bj + 1) | 0)) < (0 | Kj))) break;
                                                        }
                                                    if (((Gj = (q[(Ej + Pj) >> 2] + Gj) | 0), !((0 | (Aj = (Aj + 1) | 0)) < (0 | Jj)))) break;
                                                }
                                    }),
                                    (n[9] = function (a) {
                                        var Me,
                                            Ne,
                                            Oe,
                                            Ie = 0,
                                            Je = 0,
                                            Ke = 0,
                                            Le = 0;
                                        if (!(q[((a |= 0) + 648) >> 2] || (0 | (Ie = q[(a + 332) >> 2])) < 1))
                                            for (Ne = ((Je = q[(a + 336) >> 2]) + w(Ie, 20)) | 0, Ie = q[(a + 424) >> 2], Le = q[(a + 444) >> 2]; ;) {
                                                if (q[Ie >> 2] && !((0 | (Ke = q[(Je + 16) >> 2])) < (a = 1))) for (Ke <<= 1, Oe = q[Le >> 2]; (u[(Me = ((a << 2) + Oe) | 0) >> 2] = -u[Me >> 2]), (0 | (a = (a + 2) | 0)) < (0 | Ke););
                                                if (((Le = (Le + 4) | 0), (Ie = (Ie + 4) | 0), !((Je = (Je + 20) | 0) >>> 0 < Ne >>> 0))) break;
                                            }
                                    }),
                                    (n[10] = function (a, Sm, un) {
                                        var wn;
                                        return $((wn = q[(20 + (a |= 0)) >> 2]), (Sm |= 0), (Sm = (un |= 0) >>> 0 < (Sm = (q[(a + 16) >> 2] - wn) | 0) >>> 0 ? un : Sm)), (q[(a + 20) >> 2] = Sm + q[(a + 20) >> 2]), 0 | un;
                                    }),
                                    (n[11] = function (a, Il, Rm, Sm, Tm, Um) {
                                        (a |= 0), (Il = +Il), (Rm |= 0), (Sm |= 0), (Tm |= 0), (Um |= 0);
                                        var fn,
                                            qn,
                                            Zm,
                                            kn,
                                            Vm = 0,
                                            Wm = 0,
                                            Xm = 0,
                                            Ym = 0,
                                            _m = 0,
                                            $m = 0,
                                            an = 0,
                                            bn = 0,
                                            cn = 0,
                                            dn = 0,
                                            en = 0,
                                            gn = 0,
                                            hn = 0,
                                            jn = 0,
                                            mn = 0;
                                        if (
                                            ((q[(44 + (L = Zm = (L - 560) | 0)) >> 2] = 0),
                                                h(+Il),
                                                (Vm = 0 | b[1]),
                                                (qn = 4294967295 < b[0] >>> 0 ? 0 : 1),
                                                (kn = (0 | Vm) < -1 || ((0 | Vm) <= -1 && qn) ? (h((Il = -Il)), (Vm = 0 | b[1]), b[0], (jn = 1), 3840) : 2048 & Tm ? ((jn = 1), 3843) : (jn = 1 & Tm) ? 3846 : 3841),
                                                2146435072 == (2146435072 & Vm))
                                        )
                                            _(a, 32, Rm, ($m = (jn + 3) | 0), -65537 & Tm), Z(a, kn, jn), (Sm = (Um >>> 5) & 1), Z(a, Il != Il ? (Sm ? 3867 : 3871) : Sm ? 3859 : 3863, 3);
                                        else if (
                                            ((Il = (function Ja(a, ic) {
                                                var kc,
                                                    lc,
                                                    jc = 0;
                                                if ((h(+a), (jc = 0 | b[1]), (kc = 0 | b[0]), 2047 != (0 | (jc = ((lc = jc) >>> 20) & 2047)))) {
                                                    if (!jc) return (jc = ic), (ic = 0 == a ? 0 : ((a = Ja(0x10000000000000000 * a, ic)), (q[ic >> 2] + -64) | 0)), (q[jc >> 2] = ic), a;
                                                    (q[ic >> 2] = jc + -1022), f(0, 0 | kc), f(1, (-2146435073 & lc) | 1071644672), (a = +g());
                                                }
                                                return a;
                                            })(Il, (44 + Zm) | 0)),
                                                0 != (Il += Il) && (q[(44 + Zm) >> 2] = q[(44 + Zm) >> 2] + -1),
                                                (fn = (16 + Zm) | 0),
                                                97 == (0 | (qn = 32 | Um)))
                                        ) {
                                            if (((en = (dn = 32 & Um) ? (9 + kn) | 0 : kn), !(11 < Sm >>> 0) && (Vm = (12 - Sm) | 0))) {
                                                for (gn = 8; (gn *= 16), (Vm = (Vm + -1) | 0););
                                                Il = 45 == r[0 | en] ? -(gn + (-Il - gn)) : Il + gn - gn;
                                            }
                                            for (
                                                (0 | fn) == (0 | (Vm = ga((Xm = (Vm = q[(44 + Zm) >> 2]) >> 31) ^ (Vm + Xm), 0, fn))) && ((o[(15 + Zm) | 0] = 48), (Vm = (15 + Zm) | 0)),
                                                _m = 2 | jn,
                                                Xm = q[(44 + Zm) >> 2],
                                                o[0 | (cn = (Vm + -2) | 0)] = Um + 15,
                                                o[(Vm + -1) | 0] = (0 | Xm) < 0 ? 45 : 43,
                                                Vm = 8 & Tm,
                                                Wm = (16 + Zm) | 0;
                                                (Um = Wm),
                                                (bn = dn),
                                                (Xm = y(Il) < 2147483648 ? ~~Il : -2147483648),
                                                (o[0 | Wm] = bn | r[(Xm + 3824) | 0]),
                                                (1 != (((Wm = (Um + 1) | 0) - ((16 + Zm) | 0)) | 0)) | (0 == (Il = 16 * (Il - (0 | Xm))) ? !(Vm | (0 < (0 | Sm))) : 0) || ((o[(Um + 1) | 0] = 46), (Wm = (Um + 2) | 0)),
                                                0 != Il;

                                            );
                                            _(a, 32, Rm, ($m = ((Um = !Sm | ((0 | Sm) <= ((((Wm - Zm) | 0) - 18) | 0)) ? (((((fn - ((16 + Zm) | 0)) | 0) - cn) | 0) + Wm) | 0 : (2 + ((((Sm + fn) | 0) - cn) | 0)) | 0) + _m) | 0), Tm),
                                                Z(a, en, _m),
                                                _(a, 48, Rm, $m, 65536 ^ Tm),
                                                Z(a, (16 + Zm) | 0, (Sm = (Wm - ((16 + Zm) | 0)) | 0)),
                                                _(a, 48, (Um - (((Vm = Sm) + (Sm = (fn - cn) | 0)) | 0)) | 0, 0, 0),
                                                Z(a, cn, Sm);
                                        } else {
                                            for (
                                                Vm = (0 | Sm) < 0,
                                                0 == Il ? (Ym = q[(44 + Zm) >> 2]) : ((Ym = (q[(44 + Zm) >> 2] + -28) | 0), (q[(44 + Zm) >> 2] = Ym), (Il *= 268435456)),
                                                an = Vm ? 6 : Sm,
                                                Xm = dn = (0 | Ym) < 0 ? (48 + Zm) | 0 : (336 + Zm) | 0;
                                                (Xm = ((Sm = Xm) + 4) | 0), 0 != (Il = 1e9 * (Il - ((q[Sm >> 2] = Vm = (Il < 4294967296) & (0 <= Il) ? ~~Il >>> 0 : 0) >>> 0)));

                                            );
                                            if ((0 | Ym) < 1) (Vm = Xm), (Wm = dn);
                                            else
                                                for (Wm = dn; ;) {
                                                    if (((cn = (0 | Ym) < 29 ? Ym : 29), !((Vm = (Xm + -4) | 0) >>> 0 < Wm >>> 0))) {
                                                        for (
                                                            Sm = cn, bn = 0;
                                                            (mn = bn),
                                                            (bn = q[(en = Vm) >> 2]),
                                                            (_m = 31 & Sm),
                                                            (_m = 32 <= (63 & Sm) >>> ($m = 0) ? ((Ym = bn << _m), 0) : ((Ym = ((1 << _m) - 1) & (bn >>> (32 - _m))), bn << _m)),
                                                            ($m = (Ym + $m) | 0),
                                                            ($m = (bn = (mn + _m) | 0) >>> 0 < _m >>> 0 ? ($m + 1) | 0 : $m),
                                                            (mn = en),
                                                            (en = bd((bn = cd((_m = bn), $m, 1e9)), M, 1e9)),
                                                            (q[mn >> 2] = _m - en),
                                                            Wm >>> 0 <= (Vm = (Vm + -4) | 0) >>> 0;

                                                        );
                                                        (Sm = bn) && (q[(Wm = (Wm + -4) | 0) >> 2] = Sm);
                                                    }
                                                    for (; Wm >>> 0 < (Vm = Xm) >>> 0 && !q[(Xm = (Vm + -4) | 0) >> 2];);
                                                    if (((Ym = (q[(44 + Zm) >> 2] - cn) | 0), (Xm = Vm), !(0 < (0 | (q[(44 + Zm) >> 2] = Ym))))) break;
                                                }
                                            if ((0 | Ym) <= -1)
                                                for (hn = (1 + ((((an + 25) | 0) / 9) | 0)) | 0, cn = 102 == (0 | qn); ;) {
                                                    if (((bn = (0 | Ym) < -9 ? 9 : (0 - Ym) | 0), Vm >>> 0 <= Wm >>> 0)) Wm = q[Wm >> 2] ? Wm : (Wm + 4) | 0;
                                                    else {
                                                        for (en = 1e9 >>> bn, _m = (-1 << bn) ^ -1, Ym = 0, Xm = Wm; (Sm = q[Xm >> 2]), (q[Xm >> 2] = (Sm >>> bn) + Ym), (Ym = w(en, Sm & _m)), (Xm = (Xm + 4) | 0) >>> 0 < Vm >>> 0;);
                                                        (Wm = q[Wm >> 2] ? Wm : (Wm + 4) | 0), Ym && ((q[Vm >> 2] = Ym), (Vm = (Vm + 4) | 0));
                                                    }
                                                    if (((Ym = (bn + q[(44 + Zm) >> 2]) | 0), (Vm = (0 | hn) < (Vm - (Sm = cn ? dn : Wm)) >> 2 ? (Sm + (hn << 2)) | 0 : Vm), !((0 | (q[(44 + Zm) >> 2] = Ym)) < 0))) break;
                                                }
                                            if (!(Vm >>> (Xm = 0) <= Wm >>> 0 || ((Xm = w((dn - Wm) >> 2, 9)), (Sm = q[Wm >> 2]) >>> 0 < (Ym = 10)))) for (; (Xm = (Xm + 1) | 0), (Ym = w(Ym, 10)) >>> 0 <= Sm >>> 0;);
                                            if ((0 | (Sm = (((an - (102 == (0 | qn) ? 0 : Xm)) | 0) - ((103 == (0 | qn)) & (0 != (0 | an)))) | 0)) < ((w((Vm - dn) >> 2, 9) + -9) | 0)) {
                                                if ((($m = (((dn + ((Sm = ((0 | (_m = (Sm + 9216) | 0)) / 9) | 0) << 2)) | 0) - 4092) | 0), (Ym = 10), (0 | (Sm = (1 + ((_m - w(Sm, 9)) | 0)) | 0)) <= 8))
                                                    for (; (Ym = w(Ym, 10)), 9 != (0 | (Sm = (Sm + 1) | 0)););
                                                if (
                                                    ((hn = ($m + 4) | 0),
                                                        ((cn = ((en = q[$m >> 2]) - w(Ym, (_m = ((en >>> 0) / (Ym >>> 0)) | 0))) | 0) || (0 | hn) != (0 | Vm)) &&
                                                        ((gn = cn >>> 0 < (Sm = Ym >>> 1) >>> 0 ? 0.5 : (0 | Vm) == (0 | hn) && (0 | Sm) == (0 | cn) ? 1 : 1.5),
                                                            (Il = 1 & _m ? 9007199254740994 : 9007199254740992),
                                                            !jn | (45 != r[0 | kn]) || ((gn = -gn), (Il = -Il)),
                                                            (q[$m >> 2] = Sm = (en - cn) | 0),
                                                            Il + gn != Il))
                                                ) {
                                                    if (1e9 <= (q[$m >> 2] = Sm = (Sm + Ym) | 0) >>> 0)
                                                        for (; ($m = ($m + -4) | (q[$m >> 2] = 0)) >>> 0 < Wm >>> 0 && (q[(Wm = (Wm + -4) | 0) >> 2] = 0), (Sm = (q[$m >> 2] + 1) | 0), 999999999 < (q[$m >> 2] = Sm) >>> 0;);
                                                    if (((Xm = w((dn - Wm) >> 2, 9)), !((Sm = q[Wm >> 2]) >>> 0 < (Ym = 10)))) for (; (Xm = (Xm + 1) | 0), (Ym = w(Ym, 10)) >>> 0 <= Sm >>> 0;);
                                                }
                                                Vm = (Sm = ($m + 4) | 0) >>> 0 < Vm >>> 0 ? Sm : Vm;
                                            }
                                            j: {
                                                for (; ;) {
                                                    if ((cn = Vm) >>> (en = 0) <= Wm >>> 0) break j;
                                                    if (q[(Vm = (cn + -4) | 0) >> 2]) break;
                                                }
                                                en = 1;
                                            }
                                            if (103 != (0 | qn)) _m = 8 & Tm;
                                            else if (((an = (((Sm = ((0 | Xm) < (0 | (Vm = an || 1))) & (-5 < (0 | Xm))) ? -1 ^ Xm : -1) + Vm) | 0), (Um = ((Sm ? -1 : -2) + Um) | 0), !(_m = 8 & Tm))) {
                                                if (((Vm = 9), en && (_m = q[(cn + -4) >> 2]) && !((_m >>> (Vm = 0)) % (Sm = 10)))) for (; (Vm = (Vm + 1) | 0), !((_m >>> 0) % ((Sm = w(Sm, 10)) >>> 0)););
                                                (Sm = (w((cn - dn) >> 2, 9) + -9) | 0),
                                                    (an =
                                                        102 == (32 | Um)
                                                            ? ((_m = 0) | an) < (0 | (Sm = 0 < (0 | (Sm = (Sm - Vm) | 0)) ? Sm : 0))
                                                                ? an
                                                                : Sm
                                                            : ((_m = 0) | an) < (0 | (Sm = 0 < (0 | (Sm = (((Sm + Xm) | 0) - Vm) | 0)) ? Sm : 0))
                                                                ? an
                                                                : Sm);
                                            }
                                            if ((($m = 0 != (0 | (Ym = an | _m))), (Sm = a), (mn = Rm), (Vm = 0 < (0 | Xm) ? Xm : 0), 102 != (0 | (bn = 32 | Um)))) {
                                                if (((fn - (Vm = ga(((Vm = Xm >> 31) + Xm) ^ Vm, 0, fn))) | 0) <= 1) for (; (o[0 | (Vm = (Vm + -1) | 0)] = 48), ((fn - Vm) | 0) < 2;);
                                                (o[0 | (hn = (Vm + -2) | 0)] = Um), (o[(Vm + -1) | 0] = (0 | Xm) < 0 ? 45 : 43), (Vm = (fn - hn) | 0);
                                            }
                                            if ((_(Sm, 32, mn, ($m = (1 + ((Vm + (($m + ((an + jn) | 0)) | 0)) | 0)) | 0), Tm), Z(a, kn, jn), _(a, 48, Rm, $m, 65536 ^ Tm), 102 == (0 | bn))) {
                                                for (Sm = (16 + Zm) | 8, Xm = (16 + Zm) | 9, Wm = Um = dn >>> 0 < Wm >>> 0 ? dn : Wm; ;) {
                                                    if (((Vm = ga(q[Wm >> 2], 0, Xm)), (0 | Um) != (0 | Wm))) {
                                                        if (!(Vm >>> 0 <= (16 + Zm) >>> 0)) for (; (o[0 | (Vm = (Vm + -1) | 0)] = 48), (16 + Zm) >>> 0 < Vm >>> 0;);
                                                    } else (0 | Vm) == (0 | Xm) && ((o[(24 + Zm) | 0] = 48), (Vm = Sm));
                                                    if ((Z(a, Vm, (Xm - Vm) | 0), !((Wm = (Wm + 4) | 0) >>> 0 <= dn >>> 0))) break;
                                                }
                                                Ym && Z(a, 3875, 1);
                                                p: if (!(((0 | an) < 1) | (cn >>> 0 <= Wm >>> 0)))
                                                    for (; ;) {
                                                        if ((16 + Zm) >>> 0 < (Vm = ga(q[Wm >> 2], 0, Xm)) >>> 0) for (; (o[0 | (Vm = (Vm + -1) | 0)] = 48), (16 + Zm) >>> 0 < Vm >>> 0;);
                                                        if ((Z(a, Vm, (0 | an) < 9 ? an : 9), (an = (an + -9) | 0), cn >>> 0 <= (Wm = (Wm + 4) | 0) >>> 0)) break p;
                                                        if (!(0 < (0 | an))) break;
                                                    }
                                                _(a, 48, (an + 9) | 0, 9, 0);
                                            } else {
                                                q: if (!((0 | an) < 0))
                                                    for (Um = en ? cn : (Wm + 4) | 0, Sm = (16 + Zm) | 8, dn = (16 + Zm) | 9, Xm = Wm; ;) {
                                                        if (((0 | dn) == (0 | (Vm = ga(q[Xm >> 2], 0, dn))) && ((o[(24 + Zm) | 0] = 48), (Vm = Sm)), (0 | Wm) != (0 | Xm))) {
                                                            if (!(Vm >>> 0 <= (16 + Zm) >>> 0)) for (; (o[0 | (Vm = (Vm + -1) | 0)] = 48), (16 + Zm) >>> 0 < Vm >>> 0;);
                                                        } else Z(a, Vm, 1), (Vm = (Vm + 1) | 0), ((0 | an) < 1 && !_m) || Z(a, 3875, 1);
                                                        if ((Z(a, (bn = Vm), (0 | (Vm = (dn - Vm) | 0)) < (0 | an) ? Vm : an), (an = (an - Vm) | 0), Um >>> 0 <= (Xm = (Xm + 4) | 0) >>> 0)) break q;
                                                        if (!(-1 < (0 | an))) break;
                                                    }
                                                _(a, 48, (an + 18) | 0, 18, 0), Z(a, hn, (fn - hn) | 0);
                                            }
                                        }
                                        return _(a, 32, Rm, $m, 8192 ^ Tm), (L = (560 + Zm) | 0), 0 | ((0 | $m) < (0 | Rm) ? Rm : $m);
                                    }),
                                    (n[12] = function (a, Il) {
                                        a |= 0;
                                        var Am = (Il |= 0);
                                        (Il = (q[Il >> 2] + 15) & -16),
                                            (q[Am >> 2] = Il + 16),
                                            (Am = a),
                                            (a = (function (a, Il, Jl, $l) {
                                                var fm,
                                                    cm,
                                                    am = 0,
                                                    bm = 0,
                                                    dm = 0,
                                                    em = 0;
                                                return (
                                                    (L = cm = (L - 32) | 0),
                                                    (am = ((em = am = 2147483647 & $l) - 1006698496) | 0),
                                                    (bm = am = (fm = bm = dm = Jl) >>> 0 < 0 ? (am + 1) | 0 : am),
                                                    (am = (em - 1140785152) | 0),
                                                    (((0 | (am = dm >>> 0 < 0 ? (am + 1) | 0 : am)) == (0 | bm)) & (fm >>> 0 < dm >>> 0)) | (bm >>> 0 < am >>> 0)
                                                        ? ((am = ($l << 4) | (Jl >>> 28)),
                                                            (Jl = (Jl << 4) | (Il >>> 28)),
                                                            ((134217728 == (0 | (dm = Il &= 268435455))) & (1 <= a >>> 0)) | (134217728 < Il >>> 0)
                                                                ? ((am = (am + 1073741824) | 0), (a = (Jl + 1) | 0) >>> 0 < 1 && (am = (am + 1) | 0), (bm = a))
                                                                : ((am = (am - ((((bm = Jl) >>> 0 < 0) + -1073741824) | 0)) | 0), a | (134217728 ^ dm) || ((a = (bm + (1 & bm)) | 0) >>> 0 < bm >>> 0 && (am = (am + 1) | 0), (bm = a))))
                                                        : (!dm & (2147418112 == (0 | em)) ? !(a | Il) : ((2147418112 == (0 | em)) & (dm >>> 0 < 0)) | (em >>> 0 < 2147418112))
                                                            ? ((am = 2146435072),
                                                                ((1140785151 == ((bm = 0) | em)) & (4294967295 < dm >>> 0)) | (1140785151 < em >>> 0) ||
                                                                (dm = em >>> 16) >>> (am = 0) < 15249 ||
                                                                ((function (a, Il, Jl, Am, Bm, Cm) {
                                                                    var Jm,
                                                                        Km,
                                                                        Hm = 0,
                                                                        Im = 0;
                                                                    64 & Cm
                                                                        ? ((Il = 31 & (Jl = (Cm - 64) | 0)),
                                                                            (Il = 32 <= (63 & Jl) >>> 0 ? ((Jl = 0), Bm >>> Il) : ((Jl = Bm >>> Il), ((((1 << Il) - 1) & Bm) << (32 - Il)) | (Am >>> Il))),
                                                                            (Bm = Am = 0))
                                                                        : Cm &&
                                                                        ((Im = Bm),
                                                                            (Hm = 31 & (Km = (64 - Cm) | 0)),
                                                                            (Km = 32 <= (63 & Km) >>> 0 ? ((Im = Am << Hm), 0) : ((Im = (((1 << Hm) - 1) & (Am >>> (32 - Hm))) | (Im << Hm)), Am << Hm)),
                                                                            (Jm = Il),
                                                                            (Il = 31 & (Hm = Cm)),
                                                                            (Il = 32 <= (63 & Hm) >>> 0 ? ((Hm = 0), Jl >>> Il) : ((Hm = Jl >>> Il), ((((1 << Il) - 1) & Jl) << (32 - Il)) | (Jm >>> Il))),
                                                                            (Il |= Km),
                                                                            (Jl = Hm | Im),
                                                                            (Hm = Am),
                                                                            (Am = 31 & Cm),
                                                                            (Am = 32 <= (63 & Cm) >>> 0 ? ((Im = 0), Bm >>> Am) : ((Im = Bm >>> Am), ((((1 << Am) - 1) & Bm) << (32 - Am)) | (Hm >>> Am))),
                                                                            (Bm = Im)),
                                                                        (q[a >> 2] = Il),
                                                                        (q[(4 + a) >> 2] = Jl),
                                                                        (q[(8 + a) >> 2] = Am),
                                                                        (q[(12 + a) >> 2] = Bm);
                                                                })(cm, a, Il, Jl, (am = (65535 & $l) | 65536), (15361 - dm) | 0),
                                                                    (function (a, Il, Jl, Am, Bm, Cm) {
                                                                        var Fm,
                                                                            Dm,
                                                                            Em = 0;
                                                                        64 & Cm
                                                                            ? ((Am = Il),
                                                                                (Il = 31 & (Bm = (Cm + -64) | 0)),
                                                                                32 <= (63 & Bm) >>> 0 ? ((Bm = Am << Il), (Am = 0)) : ((Bm = (((1 << Il) - 1) & (Am >>> (32 - Il))) | (Jl << Il)), (Am <<= Il)),
                                                                                (Jl = Il = 0))
                                                                            : Cm &&
                                                                            ((Dm = Am),
                                                                                (Am = 31 & (Fm = Cm)),
                                                                                (Dm = 32 <= (63 & Cm) >>> 0 ? ((Em = Dm << Am), 0) : ((Em = (((1 << Am) - 1) & (Dm >>> (32 - Am))) | (Bm << Am)), Dm << Am)),
                                                                                (Am = Jl),
                                                                                (Bm = 31 & (Cm = (64 - Cm) | 0)),
                                                                                32 <= (63 & Cm) >>> 0 ? ((Cm = 0), (Am >>>= Bm)) : ((Cm = Am >>> Bm), (Am = ((((1 << Bm) - 1) & Am) << (32 - Bm)) | (Il >>> Bm))),
                                                                                (Am |= Dm),
                                                                                (Bm = Cm | Em),
                                                                                (Cm = Il),
                                                                                (Il = 31 & Fm),
                                                                                (Il = 32 <= (63 & Fm) >>> 0 ? ((Em = Cm << Il), 0) : ((Em = (((1 << Il) - 1) & (Cm >>> (32 - Il))) | (Jl << Il)), Cm << Il)),
                                                                                (Jl = Em)),
                                                                            (q[a >> 2] = Il),
                                                                            (q[(4 + a) >> 2] = Jl),
                                                                            (q[(8 + a) >> 2] = Am),
                                                                            (q[(12 + a) >> 2] = Bm);
                                                                    })((16 + cm) | 0, a, Il, Jl, am, (dm + -15233) | 0),
                                                                    (Jl = q[(4 + cm) >> 2]),
                                                                    (a = q[(8 + cm) >> 2]),
                                                                    (am = (q[(12 + cm) >> 2] << 4) | (a >>> 28)),
                                                                    (bm = (a << 4) | (Jl >>> 28)),
                                                                    ((134217728 == (0 | (Jl = a = 268435455 & Jl))) &
                                                                        (1 <= (Il = q[cm >> 2] | ((0 != (q[(16 + cm) >> 2] | q[(24 + cm) >> 2])) | (0 != (q[(20 + cm) >> 2] | q[(28 + cm) >> 2])))) >>> 0)) |
                                                                        (134217728 < a >>> 0)
                                                                        ? ((a = (bm + 1) | 0) >>> 0 < 1 && (am = (am + 1) | 0), (bm = a))
                                                                        : Il | (134217728 ^ Jl) || ((a = (bm + (1 & bm)) | 0) >>> 0 < bm >>> 0 && (am = (am + 1) | 0), (bm = a))))
                                                            : ((bm = (Jl << 4) | (Il >>> 28)), (am = (524287 & (am = ($l << 4) | (Jl >>> 28))) | 2146959360)),
                                                    (L = (32 + cm) | 0),
                                                    f(0, 0 | bm),
                                                    f(1, (-2147483648 & $l) | am),
                                                    +g()
                                                );
                                            })(q[Il >> 2], q[(Il + 4) >> 2], q[(Il + 8) >> 2], q[(Il + 12) >> 2])),
                                            (v[Am >> 3] = a);
                                    }),
                                    (n[13] = function (a) {
                                        return 0;
                                    }),
                                    (n[14] = function (a, Il, Am) {
                                        (Il |= 0), (Am |= 0);
                                        var Om,
                                            Cm,
                                            Bm = 0,
                                            Lm = 0,
                                            Mm = 0,
                                            Nm = 0;
                                        for (
                                            L = Cm = (L - 32) | 0,
                                            Bm = q[(28 + (a |= 0)) >> 2],
                                            q[(16 + Cm) >> 2] = Bm,
                                            Mm = q[(a + 20) >> 2],
                                            q[(28 + Cm) >> 2] = Am,
                                            q[(24 + Cm) >> 2] = Il,
                                            Mm = ((q[(20 + Cm) >> 2] = Il = (Mm - Bm) | 0) + Am) | 0,
                                            Nm = 2,
                                            Il = (16 + Cm) | 0;
                                            ;

                                        ) {
                                            a: {
                                                if (((Lm = (Bm = 0) | K(q[(a + 60) >> 2], 0 | Il, 0 | Nm, (12 + Cm) | 0)) && ((q[2086] = Lm), (Bm = -1)), (0 | (Bm = Bm ? (q[(12 + Cm) >> 2] = -1) : q[(12 + Cm) >> 2])) == (0 | Mm)))
                                                    (Il = q[(a + 44) >> 2]), (q[(a + 28) >> 2] = Il), (q[(a + 20) >> 2] = Il), (q[(a + 16) >> 2] = Il + q[(a + 48) >> 2]), (a = Am);
                                                else {
                                                    if (-1 < (0 | Bm)) break a;
                                                    (q[(a + 28) >> 2] = 0), (q[(a + 16) >> 2] = 0), (q[(a + 20) >> 2] = 0), (q[a >> 2] = 32 | q[a >> 2]), 2 != ((a = 0) | Nm) && (a = (Am - q[(Il + 4) >> 2]) | 0);
                                                }
                                                return (L = (32 + Cm) | 0), 0 | a;
                                            }
                                            (Lm = q[(Il + 4) >> 2]),
                                                (q[(Il = (Om = Lm >>> 0 < Bm >>> 0) ? (Il + 8) | 0 : Il) >> 2] = (Lm = (Bm - (Om ? Lm : 0)) | 0) + q[Il >> 2]),
                                                (q[(Il + 4) >> 2] = q[(Il + 4) >> 2] - Lm),
                                                (Mm = (Mm - Bm) | 0),
                                                (Nm = (Nm - Om) | 0);
                                        }
                                    }),
                                    (n[15] = function (a, Il, Am, Bm) {
                                        return (M = 0);
                                    }),
                                    {
                                        d: function () { },
                                        e: function () {
                                            return q[1805];
                                        },
                                        f: function () {
                                            return 83886080;
                                        },
                                        g: function () {
                                            return 5;
                                        },
                                        h: function (a, vj) {
                                            return (
                                                (vj |= 0), (L = vj = (L - 16) | 0), (a = (a |= 0) ? (sa(a) ? (Y(4, 2150, 0), 0) : r[(a + 4) | 0]) : ((q[(vj + 4) >> 2] = 1444), (q[vj >> 2] = 2267), Y(4, 1294, vj), 0)), (L = (vj + 16) | 0), 0 | a
                                            );
                                        },
                                        i: function (a, vj) {
                                            var wj;
                                            return (
                                                (vj |= 0),
                                                (L = wj = (L - 48) | 0),
                                                (a = (a |= 0)
                                                    ? ((a + 63) & -64) != (0 | a)
                                                        ? ((q[(36 + wj) >> 2] = 1522), (q[(32 + wj) >> 2] = 2284), Y(4, 1294, (32 + wj) | 0), 0)
                                                        : ((vj + 63) & -64) == (0 | vj) && vj
                                                            ? (function (a, Vk) {
                                                                var pl,
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
                                                                    ml = 0,
                                                                    nl = 0,
                                                                    ol = 0;
                                                                L = _k = ((pl = Xk = L) - 704) & -64;
                                                                a: if (Vk >>> 0 <= 1343) Y(4, 1235, 0);
                                                                else if (sa(a)) Y(4, 1469, 0);
                                                                else if ((Xk = r[0 | (nl = (a + 4) | 0)])) {
                                                                    if (!(6 <= Xk >>> 0)) {
                                                                        (jl = 1 == (0 | !r[(a + 5) | 0])) || (da(nl, 1), X((a - -64) | 0, 4, 160)), ca((_k - -64) | 0, 0, 640), na(a, (_k - -64) | 0), (Xk = (a + Vk) | 0), (Vk = q[(_k + 64) >> 2]);
                                                                        b: {
                                                                            c: {
                                                                                d: {
                                                                                    if (5 <= (il = r[(a + 4) | 0]) >>> 0) {
                                                                                        if ((Vk >>> 0 < a >>> 0) | (Xk >>> 0 < Vk >>> 0)) break c;
                                                                                        if ((Zk = (Vk + 256) | 0) >>> 0 < a >>> 0) break c;
                                                                                        if (Zk >>> 0 <= Xk >>> 0) break d;
                                                                                        break c;
                                                                                    }
                                                                                    if ((Vk >>> 0 < a >>> 0) | (Xk >>> 0 < Vk >>> 0)) break c;
                                                                                    if (((Zk = (Vk + 128) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0)) break c;
                                                                                }
                                                                                if (
                                                                                    !(
                                                                                        ((Yk = q[(_k + 68) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Zk >>> 0) ||
                                                                                        ((Yk = (Yk - -64) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        (0 | (dl = q[Vk >> 2])) < 0 ||
                                                                                        ((Zk = q[(_k + 72) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = ((Wk = Zk) + (Zk = dl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((al = q[(_k + 76) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < al >>> 0) | (al >>> 0 < Yk >>> 0) ||
                                                                                        ((Wk = ((dl << 6) + al) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 80) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 84) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 88) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 92) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 96) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 100) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        (0 | (Wk = q[(Vk + 4) >> 2])) < 0 ||
                                                                                        ((Zk = q[(_k + 104) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        (($k = ((Yk = Zk) + (Zk = Wk << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Yk = q[(_k + 108) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = (Yk + (Wk << 6)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 112) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 116) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 120) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 124) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 128) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 132) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 136) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        (0 | (Wk = q[(Vk + 8) >> 2])) < 0 ||
                                                                                        ((Zk = q[(_k + 140) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = ((el = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 144) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = (Zk + el) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 148) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = (Zk + el) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 156) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = (Zk + el) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 160) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = (Zk + el) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 164) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = (Zk + el) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        (0 | (Wk = q[(Vk + 12) >> 2])) < 0 ||
                                                                                        ((Zk = q[(_k + 172) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = ((fl = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 176) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = (Zk + fl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 180) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Yk = (Zk + fl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                        ((Zk = q[(_k + 188) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                        ((Wk = (Zk + fl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        (0 | (Yk = q[(Vk + 16) >> 2])) < 0 ||
                                                                                        ((Zk = q[(_k + 192) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                        (($k = ((Wk = Zk) + (Zk = Yk << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 196) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 200) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 204) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 208) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + (Yk << 6)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 212) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 216) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 220) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 228) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 232) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 236) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 240) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 244) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 248) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 252) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 256) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 260) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 264) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 268) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        ((Yk = q[(_k + 272) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                        (0 | ($k = q[(Vk + 20) >> 2])) < 0 ||
                                                                                        ((Yk = q[(_k + 276) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0) ||
                                                                                        ((gl = ((Wk = Yk) + (Yk = $k << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        ((Wk = q[(_k + 280) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        (($k = (Wk + ($k << 6)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 284) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 288) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 292) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 296) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 300) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 308) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 312) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        (0 | (gl = q[(Vk + 24) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 336) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + (gl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        (0 | (gl = q[(Vk + 28) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 340) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = ((ll = gl << 2) + Wk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        ((Wk = q[(_k + 344) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        (($k = (Wk + ll) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < $k >>> 0) ||
                                                                                        (0 | (gl = q[(Vk + 32) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 356) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < $k >>> 0) ||
                                                                                        ((gl = (($k = gl << 2) + Wk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        ((Wk = q[(_k + 360) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        ((gl = (Wk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        ((Wk = q[(_k + 364) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        ((gl = (Wk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        ((Wk = q[(_k + 368) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        ((gl = (Wk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        ((Wk = q[(_k + 372) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        ((gl = (Wk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        ((Wk = q[(_k + 376) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        ((gl = (Wk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        ((Wk = q[(_k + 380) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        ((gl = (Wk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < gl >>> 0) ||
                                                                                        (0 | (bl = q[(Vk + 36) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 392) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < gl >>> 0) ||
                                                                                        ((bl = ((gl = bl << 2) + Wk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        ((Wk = q[(_k + 396) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + gl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        ((Wk = q[(_k + 400) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + gl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 40) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 412) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 44) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 424) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 48) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 428) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = ((cl <<= 2) + Wk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        ((Wk = q[(_k + 432) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + cl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 52) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 416) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = ((cl <<= 2) + Wk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        ((Wk = q[(_k + 420) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + cl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 56) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 552) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 60) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 556) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 64) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 560) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 1)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 68) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 564) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 72) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 568) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((cl = ((bl = Wk) + (Wk = cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 572) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 576) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 580) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 584) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((bl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 76) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 588) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((cl = ((bl = cl << 2) + Wk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((Wk = q[(_k + 592) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((Wk = q[(_k + 596) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 80) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 600) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((hl = ((bl = Wk) + (Wk = cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < hl >>> 0) ||
                                                                                        ((bl = q[(_k + 604) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < hl >>> 0) ||
                                                                                        ((cl = (bl + (cl << 6)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 608) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 612) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 616) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 620) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 624) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 628) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((cl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < cl >>> 0) ||
                                                                                        ((bl = q[(_k + 632) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < cl >>> 0) ||
                                                                                        ((bl = (Wk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 84) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 636) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        ((Wk = q[(_k + 640) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((bl = (Wk + (cl << 1)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) ||
                                                                                        (0 | (cl = q[(Vk + 88) >> 2])) < 0 ||
                                                                                        ((Wk = q[(_k + 644) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0) ||
                                                                                        ((Wk = (Wk + (cl << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)
                                                                                    )
                                                                                ) {
                                                                                    if (!(il >>> 0 < 2)) {
                                                                                        if (((bl = q[(_k + 168) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < Wk >>> 0)) break c;
                                                                                        if (((Wk = (bl + el) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                        if (!(il >>> 0 < 4)) {
                                                                                            if (((bl = q[(_k + 324) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0) | (bl >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((bl = (Yk + bl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0)) break c;
                                                                                            if (((Wk = q[(_k + 328) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0)) break c;
                                                                                            if (((bl = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0)) break c;
                                                                                            if (((Wk = q[(_k + 332) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0)) break c;
                                                                                            if (((bl = (Wk + Yk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < bl >>> 0)) break c;
                                                                                            if (((Wk = q[(_k + 152) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < bl >>> 0)) break c;
                                                                                            if (((el = (Wk + el) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Wk = q[(_k + 184) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < el >>> 0)) break c;
                                                                                            if (((el = (Wk + fl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Wk = q[(_k + 224) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) | (Wk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Wk = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if ((0 | (el = q[(Vk + 92) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 648) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((el = ((Wk = el << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 652) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < el >>> 0)) break c;
                                                                                            if (((el = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 656) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Wk = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if ((0 | (el = q[(Vk + 96) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 660) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((el = ((Wk = el << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 664) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < el >>> 0)) break c;
                                                                                            if (((el = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 668) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < el >>> 0)) break c;
                                                                                            if (((Wk = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 304) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 316) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 320) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if ((0 | (Wk = q[(Vk + 100) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 436) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Wk = ((Yk = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 440) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 444) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if ((0 | (Wk = q[(Vk + 104) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 448) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Wk = ((Yk = Zk) + (Zk = Wk << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = q[(_k + 452) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = q[(_k + 456) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = q[(_k + 460) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = q[(_k + 464) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) | (Yk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if ((0 | (Wk = q[(Vk + 108) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 480) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Wk = ((Yk = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 484) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 488) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if ((0 | (Wk = q[(Vk + 112) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 504) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Wk = ((Yk = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 508) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 512) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if ((0 | (Wk = q[(Vk + 116) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 528) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Yk = (Zk + (Wk << 2)) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if ((0 | (Wk = q[(Vk + 120) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 532) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Wk = ((Yk = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 536) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 540) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0)) break c;
                                                                                            if (((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if ((0 | (Wk = q[(Vk + 124) >> 2])) < 0) break c;
                                                                                            if (((Zk = q[(_k + 544) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Yk = ((Wk <<= 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Zk = q[(_k + 548) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0)) break c;
                                                                                            if (((Wk = (Wk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0)) break c;
                                                                                        }
                                                                                    }
                                                                                    if (il >>> 0 < 5) break b;
                                                                                    if (
                                                                                        !(
                                                                                            ((Zk = q[(_k + 348) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                            ((Yk = (Zk + ll) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            ((Zk = q[(_k + 352) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Yk = (Zk + ll) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            ((Zk = q[(_k + 384) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Yk = (Zk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            ((Zk = q[(_k + 388) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Yk = (Zk + $k) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            ((Zk = q[(_k + 404) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Yk = (Zk + gl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            ((Zk = q[(_k + 408) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Yk = (Zk + gl) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            (0 | (Wk = q[(Vk + 128) >> 2])) < 0 ||
                                                                                            ((Zk = q[(_k + 468) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Wk = ((Yk = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                            ((Zk = q[(_k + 472) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                            ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                            ((Zk = q[(_k + 476) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                            ((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            (0 | (Wk = q[(Vk + 132) >> 2])) < 0 ||
                                                                                            ((Zk = q[(_k + 492) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Wk = ((Yk = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                            ((Zk = q[(_k + 496) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                            ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                            ((Zk = q[(_k + 500) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                            ((Yk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Yk >>> 0) ||
                                                                                            (0 | (Wk = q[(Vk + 136) >> 2])) < 0 ||
                                                                                            ((Zk = q[(_k + 516) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Yk >>> 0) ||
                                                                                            ((Wk = ((Yk = Wk << 2) + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                            ((Zk = q[(_k + 520) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                            ((Wk = (Yk + Zk) | 0) >>> 0 < a >>> 0) | (Xk >>> 0 < Wk >>> 0) ||
                                                                                            ((Zk = q[(_k + 524) >> 2]) >>> 0 < a >>> 0) | (Xk >>> 0 < Zk >>> 0) | (Zk >>> 0 < Wk >>> 0) ||
                                                                                            (Zk = (Yk + Zk) | 0) >>> 0 < a >>> 0
                                                                                        ) &&
                                                                                        Zk >>> 0 <= Xk >>> 0
                                                                                    )
                                                                                        break b;
                                                                                }
                                                                            }
                                                                            Y(4, 1760, 0), da(nl, 1), X((a - -64) | 0, 4, 160);
                                                                            break a;
                                                                        }
                                                                        jl || (ya(a), (o[(a + 5) | 0] = 0), (Vk = q[(_k + 64) >> 2]), (dl = q[Vk >> 2]), (al = q[(_k + 76) >> 2]), (il = r[(a + 4) | 0]));
                                                                        f: {
                                                                            if ((a = 0) < (0 | dl)) {
                                                                                for (; ;) {
                                                                                    if (63 < ia(((a << 6) + al) | 0) >>> 0) break f;
                                                                                    if ((0 | dl) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                                if (((Wk = (Vk + 48) | 0), (Xk = 0) < (0 | (a = q[Vk >> 2])))) {
                                                                                    for (Zk = q[(Vk + 48) >> 2], Yk = q[(_k + 80) >> 2]; ;) {
                                                                                        if (((0 | (al = q[(Yk + (Xk << 2)) >> 2])) < 0) | ((0 | Zk) <= (0 | al))) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (gl = (Vk + 24) | 0, Zk = q[(Vk + 24) >> 2], $k = q[(_k + 88) >> 2], dl = q[(_k + 84) >> 2], Xk = 0; ;) {
                                                                                        if ((Yk = q[((al = Xk << 2) + $k) >> 2])) {
                                                                                            if (((0 | Yk) < 0) | ((0 | Zk) < (0 | Yk))) break f;
                                                                                            if (((0 | (al = q[(al + dl) >> 2])) < 0) | ((0 | Zk) <= (0 | al))) break f;
                                                                                            if (((Yk = (Yk + al) | 0) >>> 31) | ((0 | Zk) < (0 | Yk))) break f;
                                                                                        }
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Xk = 0, Zk = q[(_k + 92) >> 2]; ;) {
                                                                                        if (1 < t[(Zk + (Xk << 2)) >> 2]) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Xk = 0, Zk = q[(_k + 96) >> 2]; ;) {
                                                                                        if (1 < t[(Zk + (Xk << 2)) >> 2]) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Xk = 0, Zk = q[(_k + 100) >> 2]; ;) {
                                                                                        if (((0 | (Yk = q[(Zk + (Xk << 2)) >> 2])) < -1) | ((0 | a) <= (0 | Yk))) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                } else gl = (Vk + 24) | 0;
                                                                            } else (gl = (Vk + 24) | 0), (Wk = (Vk + 48) | 0);
                                                                            if ((a = 0) < (0 | (Xk = q[(Vk + 4) >> 2]))) {
                                                                                for (Zk = q[(_k + 108) >> 2]; ;) {
                                                                                    if (63 < ia((Zk + (a << 6)) | 0) >>> 0) break f;
                                                                                    if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                                if ((($k = ((Zk = q[(Vk + 48) >> 2]) + -1) | 0), !(((Xk = 0) | (a = q[(Vk + 4) >> 2])) <= 0))) {
                                                                                    for (Yk = q[(_k + 112) >> 2]; ;) {
                                                                                        if (((0 | (al = q[(Yk + (Xk << 2)) >> 2])) < 0) | ((0 | Zk) <= (0 | al))) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Xk = 0, Zk = q[(_k + 116) >> 2]; ;) {
                                                                                        if (1 < t[(Zk + (Xk << 2)) >> 2]) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Xk = 0, Zk = q[(_k + 120) >> 2]; ;) {
                                                                                        if (1 < t[(Zk + (Xk << 2)) >> 2]) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Zk = q[Vk >> 2], Xk = 0, Yk = q[(_k + 124) >> 2]; ;) {
                                                                                        if (((0 | (al = q[(Yk + (Xk << 2)) >> 2])) < -1) | ((0 | Zk) <= (0 | al))) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Xk = 0, Zk = q[(_k + 128) >> 2]; ;) {
                                                                                        if (((0 | (Yk = q[(Zk + (Xk << 2)) >> 2])) < -1) | ((0 | a) <= (0 | Yk))) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Xk = 0, Zk = q[(_k + 132) >> 2]; ;) {
                                                                                        if (1 < t[(Zk + (Xk << 2)) >> 2]) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                    for (Yk = (Vk + 8) | 0, al = (Vk + 12) | 0, dl = q[(_k + 136) >> 2], Xk = 0; ;) {
                                                                                        if (1 < (fl = q[((el = Xk << 2) + Zk) >> 2]) >>> 0) break f;
                                                                                        if (((0 | (el = q[(dl + el) >> 2])) < 0) | ((0 | el) >= q[((fl - 1) | 0 ? Yk : al) >> 2])) break f;
                                                                                        if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                    }
                                                                                }
                                                                            } else $k = (q[Wk >> 2] + -1) | 0;
                                                                            if ((a = 0) < (0 | (Xk = q[(Vk + 8) >> 2]))) {
                                                                                for (Zk = q[(_k + 140) >> 2]; ;) {
                                                                                    if (((0 | (Yk = q[(Zk + (a << 2)) >> 2])) < 0) | ((0 | $k) < (0 | Yk))) break f;
                                                                                    if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                                for (ll = (Vk + 28) | 0, Zk = q[(Vk + 28) >> 2], dl = q[(_k + 148) >> 2], el = q[(_k + 144) >> 2], a = 0; ;) {
                                                                                    if ((Yk = q[((al = a << 2) + dl) >> 2])) {
                                                                                        if (((0 | Yk) < 0) | ((0 | Zk) < (0 | Yk))) break f;
                                                                                        if (((0 | (al = q[(al + el) >> 2])) < 0) | ((0 | Zk) <= (0 | al))) break f;
                                                                                        if (((Yk = (Yk + al) | 0) >>> 31) | ((0 | Zk) < (0 | Yk))) break f;
                                                                                    }
                                                                                    if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                                for (a = 0, Yk = q[(_k + 156) >> 2], al = q[(_k + 164) >> 2], dl = q[(_k + 160) >> 2]; ;) {
                                                                                    if ((0 | (el = q[((Zk = a << 2) + dl) >> 2])) < 1) break f;
                                                                                    if ((0 | (fl = q[(Zk + al) >> 2])) < 1) break f;
                                                                                    if (((0 | (Zk = q[(Yk + Zk) >> 2])) < 1) | ((0 | Zk) != (0 | w((fl + 1) | 0, (el + 1) | 0)))) break f;
                                                                                    if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                            } else ll = (Vk + 28) | 0;
                                                                            if ((a = 0) < (0 | (Yk = q[(Vk + 12) >> 2]))) {
                                                                                for (Xk = q[(_k + 172) >> 2]; ;) {
                                                                                    if (((0 | (Zk = q[(Xk + (a << 2)) >> 2])) < 0) | ((0 | $k) < (0 | Zk))) break f;
                                                                                    if ((0 | Yk) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                                for (bl = (Vk + 32) | 0, Xk = q[(Vk + 32) >> 2], $k = q[(_k + 180) >> 2], dl = q[(_k + 176) >> 2], a = 0; ;) {
                                                                                    if ((Zk = q[((al = a << 2) + $k) >> 2])) {
                                                                                        if (((0 | Zk) < 0) | ((0 | Xk) < (0 | Zk))) break f;
                                                                                        if (((0 | (al = q[(al + dl) >> 2])) < 0) | ((0 | Xk) <= (0 | al))) break f;
                                                                                        if (((Zk = (Zk + al) | 0) >>> 31) | ((0 | Xk) < (0 | Zk))) break f;
                                                                                    }
                                                                                    if ((0 | Yk) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                            } else bl = (Vk + 32) | 0;
                                                                            Zk = (Vk + 16) | 0;
                                                                            m: {
                                                                                n: {
                                                                                    if (!(((a = 0) | (Xk = q[(Vk + 16) >> 2])) <= 0)) {
                                                                                        for (Yk = q[(_k + 208) >> 2]; ;) {
                                                                                            if (63 < ia((Yk + (a << 6)) | 0) >>> 0) break f;
                                                                                            if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                        if (!(((Xk = 0) | (a = q[Zk >> 2])) <= 0)) {
                                                                                            for (Yk = q[Wk >> 2], al = q[(_k + 212) >> 2]; ;) {
                                                                                                if (((0 | ($k = q[(al + (Xk << 2)) >> 2])) < 0) | ((0 | Yk) <= (0 | $k))) break f;
                                                                                                if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                            }
                                                                                            for (nl = (Vk + 36) | 0, Yk = q[(Vk + 36) >> 2], dl = q[(_k + 220) >> 2], el = q[(_k + 216) >> 2], Xk = 0; ;) {
                                                                                                if ((al = q[(($k = Xk << 2) + dl) >> 2])) {
                                                                                                    if (((0 | al) < 0) | ((0 | Yk) < (0 | al))) break f;
                                                                                                    if (((0 | ($k = q[($k + el) >> 2])) < 0) | ((0 | Yk) <= (0 | $k))) break f;
                                                                                                    if (((al = (al + $k) | 0) >>> 31) | ((0 | Yk) < (0 | al))) break f;
                                                                                                }
                                                                                                if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                            }
                                                                                            for (Xk = 0, Yk = q[(_k + 228) >> 2]; ;) {
                                                                                                if (1 < t[(Yk + (Xk << 2)) >> 2]) break f;
                                                                                                if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                            }
                                                                                            for (Xk = 0, Yk = q[(_k + 232) >> 2]; ;) {
                                                                                                if (1 < t[(Yk + (Xk << 2)) >> 2]) break f;
                                                                                                if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                            }
                                                                                            for (Yk = q[Vk >> 2], Xk = 0, al = q[(_k + 236) >> 2]; ;) {
                                                                                                if (((0 | ($k = q[(al + (Xk << 2)) >> 2])) < -1) | ((0 | Yk) <= (0 | $k))) break f;
                                                                                                if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                            }
                                                                                            for (Yk = q[(Vk + 4) >> 2], Xk = 0, al = q[(_k + 240) >> 2]; ;) {
                                                                                                if (((0 | ($k = q[(al + (Xk << 2)) >> 2])) < -1) | ((0 | Yk) <= (0 | $k))) break f;
                                                                                                if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                            }
                                                                                            for (Yk = q[(_k + 244) >> 2], Xk = 0; ;) {
                                                                                                if (q[(Yk + (Xk << 2)) >> 2] < 0) break f;
                                                                                                if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                            }
                                                                                            break n;
                                                                                        }
                                                                                    }
                                                                                    (al = (Vk + 68) | 0), (nl = (Vk + 36) | 0);
                                                                                    break m;
                                                                                }
                                                                                for (Yk = q[(_k + 252) >> 2], Xk = 0; ;) {
                                                                                    if (q[(Yk + (Xk << 2)) >> 2] < 0) break f;
                                                                                    if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                                for (al = q[(Vk + 60) >> 2], Xk = 0, $k = q[(_k + 256) >> 2]; ;) {
                                                                                    if (((dl = (q[((dl = Xk << 2) + $k) >> 2] + (q[(Yk + dl) >> 2] << 1)) | 0) >>> 31) | ((0 | al) < (0 | dl))) break f;
                                                                                    if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                                for (Yk = q[(Vk + 64) >> 2], dl = q[(_k + 264) >> 2], el = q[(_k + 260) >> 2], Xk = 0; ;) {
                                                                                    if ((al = q[(($k = Xk << 2) + dl) >> 2])) {
                                                                                        if (((0 | al) < 0) | ((0 | Yk) < (0 | al))) break f;
                                                                                        if (((0 | ($k = q[($k + el) >> 2])) < 0) | ((0 | Yk) <= (0 | $k))) break f;
                                                                                        if (((al = (al + $k) | 0) >>> 31) | ((0 | Yk) < (0 | al))) break f;
                                                                                    }
                                                                                    if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                                for (al = (Vk + 68) | 0, Yk = q[(Vk + 68) >> 2], el = q[(_k + 272) >> 2], fl = q[(_k + 268) >> 2], Xk = 0; ;) {
                                                                                    if (($k = q[((dl = Xk << 2) + el) >> 2])) {
                                                                                        if (((0 | $k) < 0) | ((0 | Yk) < (0 | $k))) break f;
                                                                                        if (((0 | (dl = q[(dl + fl) >> 2])) < 0) | ((0 | Yk) <= (0 | dl))) break f;
                                                                                        if ((($k = ($k + dl) | 0) >>> 31) | ((0 | Yk) < (0 | $k))) break f;
                                                                                    }
                                                                                    if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            }
                                                                            p: {
                                                                                q: {
                                                                                    if (!(((a = 0) | (Xk = q[(Vk + 20) >> 2])) <= 0)) {
                                                                                        for (Yk = q[(_k + 280) >> 2]; ;) {
                                                                                            if (63 < ia((Yk + (a << 6)) | 0) >>> 0) break f;
                                                                                            if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                        if (!(((a = 0) | (Xk = q[(Vk + 20) >> 2])) <= 0)) {
                                                                                            for (Yk = q[(_k + 296) >> 2]; ;) {
                                                                                                if (1 < t[(Yk + (a << 2)) >> 2]) break f;
                                                                                                if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            for (Yk = q[(_k + 300) >> 2], a = 0; ;) {
                                                                                                if (q[(Yk + (a << 2)) >> 2] < 0) break f;
                                                                                                if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            break q;
                                                                                        }
                                                                                    }
                                                                                    a = q[(Vk + 52) >> 2];
                                                                                    break p;
                                                                                }
                                                                                for (a = q[(Vk + 52) >> 2], el = q[(_k + 312) >> 2], fl = q[(_k + 308) >> 2], $k = 0; ;) {
                                                                                    if ((Yk = q[((dl = $k << 2) + el) >> 2])) {
                                                                                        if (((0 | Yk) < 0) | ((0 | a) < (0 | Yk))) break f;
                                                                                        if (((0 | (dl = q[(dl + fl) >> 2])) < 0) | ((0 | a) <= (0 | dl))) break f;
                                                                                        if (((Yk = (Yk + dl) | 0) >>> 31) | ((0 | a) < (0 | Yk))) break f;
                                                                                    }
                                                                                    if ((0 | Xk) == (0 | ($k = ($k + 1) | 0))) break;
                                                                                }
                                                                            }
                                                                            if (((Yk = q[(Vk + 40) >> 2]), (Xk = 0) < (0 | ($k = q[(Vk + 8) >> 2]))))
                                                                                for (dl = q[(_k + 344) >> 2], el = q[(_k + 156) >> 2]; ;) {
                                                                                    if (((fl = (q[((fl = Xk << 2) + dl) >> 2] + (q[(el + fl) >> 2] << 1)) | 0) >>> 31) | ((0 | Yk) < (0 | fl))) break f;
                                                                                    if ((0 | $k) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            if ((Xk = 0) < (0 | ($k = q[bl >> 2]))) {
                                                                                for (dl = q[(_k + 376) >> 2]; ;) {
                                                                                    if (1 < t[(dl + (Xk << 2)) >> 2]) break f;
                                                                                    if ((0 | $k) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                                for (Xk = 0, dl = q[(_k + 380) >> 2]; ;) {
                                                                                    if (1 < t[(dl + (Xk << 2)) >> 2]) break f;
                                                                                    if ((0 | $k) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            }
                                                                            if ((Xk = 0) < (0 | ($k = q[Zk >> 2])))
                                                                                for (dl = q[(_k + 400) >> 2], el = q[(_k + 252) >> 2]; ;) {
                                                                                    if (((fl = (q[((fl = Xk << 2) + dl) >> 2] + (q[(el + fl) >> 2] << 1)) | 0) >>> 31) | ((0 | Yk) < (0 | fl))) break f;
                                                                                    if ((0 | $k) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            if ((Xk = 0) < (0 | (Yk = q[(Vk + 44) >> 2])))
                                                                                for (dl = q[(_k + 424) >> 2]; ;) {
                                                                                    if (((0 | (el = q[(dl + (Xk << 2)) >> 2])) < 0) | ((0 | a) <= (0 | el))) break f;
                                                                                    if ((0 | Yk) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            if (1 <= (0 | (el = q[Wk >> 2])))
                                                                                for (Xk = 0, fl = q[(_k + 432) >> 2], cl = q[(_k + 428) >> 2]; ;) {
                                                                                    if ((Wk = q[((dl = Xk << 2) + fl) >> 2])) {
                                                                                        if (((0 | Wk) < 0) | ((0 | Yk) < (0 | Wk))) break f;
                                                                                        if (((0 | (dl = q[(cl + dl) >> 2])) < 0) | ((0 | Yk) <= (0 | dl))) break f;
                                                                                        if (((Wk = (Wk + dl) | 0) >>> 31) | ((0 | Yk) < (0 | Wk))) break f;
                                                                                    }
                                                                                    if ((0 | el) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            if (1 <= (0 | a))
                                                                                for (Yk = q[(Vk + 56) >> 2], Xk = 0, el = q[(_k + 420) >> 2], fl = q[(_k + 416) >> 2]; ;) {
                                                                                    if ((Wk = q[((dl = Xk << 2) + el) >> 2])) {
                                                                                        if (((0 | Wk) < 0) | ((0 | Yk) < (0 | Wk))) break f;
                                                                                        if (((0 | (dl = q[(dl + fl) >> 2])) < 0) | ((0 | Yk) <= (0 | dl))) break f;
                                                                                        if (((Wk = (Wk + dl) | 0) >>> 31) | ((0 | Yk) < (0 | Wk))) break f;
                                                                                    }
                                                                                    if ((0 | (Xk = (Xk + 1) | 0)) == (0 | a)) break;
                                                                                }
                                                                            if ((a = 0) < (0 | (Xk = q[al >> 2])))
                                                                                for (Yk = q[(_k + 564) >> 2]; ;) {
                                                                                    if (((0 | (al = q[(Yk + (a << 2)) >> 2])) < -1) | ((0 | $k) <= (0 | al))) break f;
                                                                                    if ((0 | Xk) == (0 | (a = (a + 1) | 0))) break;
                                                                                }
                                                                            if (((a = q[(Vk + 76) >> 2]), 1 <= (0 | (al = q[(Vk + 72) >> 2]))))
                                                                                for (Xk = 0, $k = q[(_k + 572) >> 2], dl = q[(_k + 568) >> 2]; ;) {
                                                                                    if ((Yk = q[((Wk = Xk << 2) + $k) >> 2])) {
                                                                                        if (((0 | Yk) < 0) | ((0 | a) < (0 | Yk))) break f;
                                                                                        if (((0 | (Wk = q[(Wk + dl) >> 2])) < 0) | ((0 | a) <= (0 | Wk))) break f;
                                                                                        if (((Yk = (Wk + Yk) | 0) >>> 31) | ((0 | a) < (0 | Yk))) break f;
                                                                                    }
                                                                                    if ((0 | al) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            if ((Xk = 0) < (0 | a)) {
                                                                                for (Yk = q[(_k + 588) >> 2]; ;) {
                                                                                    if (1 < t[(Yk + (Xk << 2)) >> 2]) break f;
                                                                                    if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                                for (Wk = q[(_k + 592) >> 2], Xk = 0; ;) {
                                                                                    if (1 < (dl = q[(($k = Xk << 2) + Yk) >> 2]) >>> 0) break f;
                                                                                    if (((0 | ($k = q[(Wk + $k) >> 2])) < 0) | ((0 | $k) >= q[((dl - 1) | 0 ? Zk : Vk) >> 2])) break f;
                                                                                    if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                                for (Xk = 0, Yk = q[(_k + 596) >> 2]; ;) {
                                                                                    if (((0 | (Wk = q[(Yk + (Xk << 2)) >> 2])) < -1) | ((0 | al) <= (0 | Wk))) break f;
                                                                                    if ((0 | a) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                }
                                                                            }
                                                                            s: {
                                                                                if (!(((a = 0) | ($k = q[(Vk + 80) >> 2])) <= 0)) {
                                                                                    for (Xk = q[(_k + 604) >> 2]; ;) {
                                                                                        if (63 < ia((Xk + (a << 6)) | 0) >>> 0) break f;
                                                                                        if ((0 | $k) == (0 | (a = (a + 1) | 0))) break;
                                                                                    }
                                                                                    if (!(((a = 0) | ($k = q[(Vk + 80) >> 2])) <= 0)) {
                                                                                        for (Xk = q[(Vk + 48) >> 2], Yk = q[(_k + 608) >> 2]; ;) {
                                                                                            if (((0 | (al = q[(Yk + (a << 2)) >> 2])) < 0) | ((0 | Xk) <= (0 | al))) break f;
                                                                                            if ((0 | $k) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                        for (el = q[(Vk + 88) >> 2], al = q[(_k + 616) >> 2], Wk = q[(_k + 612) >> 2], a = 0; ;) {
                                                                                            if ((Xk = q[((Yk = a << 2) + al) >> 2])) {
                                                                                                if (((0 | Xk) < 0) | ((0 | el) < (0 | Xk))) break f;
                                                                                                if (((0 | (Yk = q[(Wk + Yk) >> 2])) < 0) | ((0 | el) <= (0 | Yk))) break f;
                                                                                                if (((Xk = (Xk + Yk) | 0) >>> 31) | ((0 | el) < (0 | Xk))) break f;
                                                                                            }
                                                                                            if ((0 | $k) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                        for (Zk = q[Zk >> 2], al = q[(_k + 620) >> 2], a = 0; ;) {
                                                                                            if (((0 | (Xk = q[(al + (a << 2)) >> 2])) < 0) | ((0 | Zk) <= (0 | Xk))) break f;
                                                                                            if ((0 | $k) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                        for (Wk = q[(_k + 624) >> 2], a = 0; ;) {
                                                                                            if (((0 | (Xk = q[(Wk + (a << 2)) >> 2])) < 0) | ((0 | Zk) <= (0 | Xk))) break f;
                                                                                            if ((0 | $k) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                        for (Xk = q[(Vk + 84) >> 2], dl = q[(_k + 632) >> 2], fl = q[(_k + 628) >> 2], a = 0; ;) {
                                                                                            if ((Yk = q[((cl = a << 2) + dl) >> 2])) {
                                                                                                if (((0 | Yk) < 0) | ((0 | Xk) < (0 | Yk))) break f;
                                                                                                if (((0 | (cl = q[(cl + fl) >> 2])) < 0) | ((0 | Xk) <= (0 | cl))) break f;
                                                                                                if (((Yk = (Yk + cl) | 0) >>> 31) | ((0 | Xk) < (0 | Yk))) break f;
                                                                                            }
                                                                                            if ((0 | $k) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                        for (hl = q[(_k + 640) >> 2], Xk = q[(_k + 252) >> 2], Yk = 0; ;) {
                                                                                            if (0 < (0 | (jl = q[((a = Yk << 2) + dl) >> 2])))
                                                                                                for (cl = (hl + (q[(a + fl) >> 2] << 1)) | 0, ol = q[(Xk + (q[(a + Wk) >> 2] << 2)) >> 2], kl = q[(Xk + (q[(a + al) >> 2] << 2)) >> 2], a = 0; ;) {
                                                                                                    if (((0 | ol) <= s[(cl + (2 | (ml = a << 1))) >> 1]) | ((0 | kl) <= s[(cl + ml) >> 1])) break f;
                                                                                                    if (!((0 | (a = (a + 2) | 0)) < (0 | jl))) break;
                                                                                                }
                                                                                            if ((0 | $k) == (0 | (Yk = (Yk + 1) | 0))) break;
                                                                                        }
                                                                                        break s;
                                                                                    }
                                                                                }
                                                                                (Zk = q[(Vk + 16) >> 2]), (el = q[(Vk + 88) >> 2]);
                                                                            }
                                                                            if (!((255 & il) >>> 0 < 2)) {
                                                                                if ((a = 0) < (0 | (dl = q[(Vk + 8) >> 2])))
                                                                                    for (Xk = q[(_k + 168) >> 2]; ;) {
                                                                                        if (1 < t[(Xk + (a << 2)) >> 2]) break f;
                                                                                        if ((0 | dl) == (0 | (a = (a + 1) | 0))) break;
                                                                                    }
                                                                                if (!((255 & il) >>> 0 < 4)) {
                                                                                    if (((al = q[(Vk + 56) >> 2]), 1 <= (0 | (fl = q[(Vk + 20) >> 2]))))
                                                                                        for (Wk = q[(_k + 332) >> 2], cl = q[(_k + 328) >> 2], a = 0; ;) {
                                                                                            if ((Xk = q[((Yk = a << 2) + Wk) >> 2])) {
                                                                                                if (((0 | Xk) < 0) | ((0 | al) < (0 | Xk))) break f;
                                                                                                if (((0 | (Yk = q[(Yk + cl) >> 2])) < 0) | ((0 | al) <= (0 | Yk))) break f;
                                                                                                if (((Xk = (Xk + Yk) | 0) >>> 31) | ((0 | al) < (0 | Xk))) break f;
                                                                                            }
                                                                                            if ((0 | fl) == (0 | (a = (a + 1) | 0))) break;
                                                                                        }
                                                                                    if ((0 | (a = q[(Vk + 92) >> 2])) != q[(Vk + 96) >> 2]) break f;
                                                                                    if (1 <= (0 | dl))
                                                                                        for (cl = q[(_k + 152) >> 2], Xk = 0, hl = q[(_k + 148) >> 2]; ;) {
                                                                                            if ((Yk = q[((Wk = Xk << 2) + hl) >> 2])) {
                                                                                                if (((0 | Yk) < 0) | ((0 | a) < (0 | Yk))) break f;
                                                                                                if (((0 | (Wk = q[(Wk + cl) >> 2])) < 0) | ((0 | a) <= (0 | Wk))) break f;
                                                                                                if (((Yk = (Wk + Yk) | 0) >>> 31) | ((0 | a) < (0 | Yk))) break f;
                                                                                            }
                                                                                            if ((0 | dl) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                        }
                                                                                    if (1 <= (0 | (ol = q[(Vk + 12) >> 2])))
                                                                                        for (cl = q[(_k + 184) >> 2], Xk = 0, hl = q[(_k + 180) >> 2]; ;) {
                                                                                            if ((Yk = q[((Wk = Xk << 2) + hl) >> 2])) {
                                                                                                if (((0 | Yk) < 0) | ((0 | a) < (0 | Yk))) break f;
                                                                                                if (((0 | (Wk = q[(Wk + cl) >> 2])) < 0) | ((0 | a) <= (0 | Wk))) break f;
                                                                                                if (((Yk = (Wk + Yk) | 0) >>> 31) | ((0 | a) < (0 | Yk))) break f;
                                                                                            }
                                                                                            if ((0 | ol) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                        }
                                                                                    if (1 <= (0 | Zk))
                                                                                        for (cl = q[(_k + 224) >> 2], Xk = 0, hl = q[(_k + 220) >> 2]; ;) {
                                                                                            if ((Yk = q[((Wk = Xk << 2) + hl) >> 2])) {
                                                                                                if (((0 | Yk) < 0) | ((0 | a) < (0 | Yk))) break f;
                                                                                                if (((0 | (Wk = q[(Wk + cl) >> 2])) < 0) | ((0 | a) <= (0 | Wk))) break f;
                                                                                                if (((Yk = (Wk + Yk) | 0) >>> 31) | ((0 | a) < (0 | Yk))) break f;
                                                                                            }
                                                                                            if ((0 | Zk) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                        }
                                                                                    if ((Xk = 0) < (0 | fl)) {
                                                                                        for (Yk = q[(_k + 304) >> 2]; ;) {
                                                                                            if (1 < t[(Yk + (Xk << 2)) >> 2]) break f;
                                                                                            if ((0 | fl) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                        }
                                                                                        for (Yk = q[(Vk + 100) >> 2], hl = q[(_k + 320) >> 2], jl = q[(_k + 316) >> 2], Xk = 0; ;) {
                                                                                            if ((Wk = q[((cl = Xk << 2) + hl) >> 2])) {
                                                                                                if (((0 | Wk) < 0) | ((0 | Yk) < (0 | Wk))) break f;
                                                                                                if (((0 | (cl = q[(cl + jl) >> 2])) < 0) | ((0 | Yk) <= (0 | cl))) break f;
                                                                                                if (((Wk = (Wk + cl) | 0) >>> 31) | ((0 | Yk) < (0 | Wk))) break f;
                                                                                            }
                                                                                            if ((0 | fl) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                        }
                                                                                    } else Yk = q[(Vk + 100) >> 2];
                                                                                    if (1 <= (0 | Yk)) {
                                                                                        for (cl = q[(_k + 440) >> 2], Xk = 0, jl = q[(_k + 436) >> 2]; ;) {
                                                                                            if ((Wk = q[((hl = Xk << 2) + cl) >> 2])) {
                                                                                                if (((0 | Wk) < 0) | ((0 | al) < (0 | Wk))) break f;
                                                                                                if (((0 | (hl = q[(hl + jl) >> 2])) < 0) | ((0 | al) <= (0 | hl))) break f;
                                                                                                if (((Wk = (Wk + hl) | 0) >>> 31) | ((0 | al) < (0 | Wk))) break f;
                                                                                            }
                                                                                            if ((0 | Yk) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                        }
                                                                                        for (al = q[(_k + 444) >> 2], Xk = 0; ;) {
                                                                                            if (((0 | (hl = q[((Wk = Xk << 2) + al) >> 2])) < 0) | ((0 | hl) >= q[(Wk + cl) >> 2])) break f;
                                                                                            if ((0 | Yk) == (0 | (Xk = (Xk + 1) | 0))) break;
                                                                                        }
                                                                                    }
                                                                                    if ((al = 0) < (0 | (Xk = q[(Vk + 104) >> 2]))) {
                                                                                        for (Wk = q[(_k + 448) >> 2]; ;) {
                                                                                            if (((0 | (cl = q[(Wk + (al << 2)) >> 2])) < 0) | ((0 | Yk) <= (0 | cl))) break f;
                                                                                            if ((0 | Xk) == (0 | (al = (al + 1) | 0))) break;
                                                                                        }
                                                                                        for (Wk = q[(Vk + 116) >> 2], hl = q[(_k + 464) >> 2], jl = q[(_k + 460) >> 2], Yk = 0; ;) {
                                                                                            if ((al = q[((cl = Yk << 2) + hl) >> 2])) {
                                                                                                if (((0 | al) < 0) | ((0 | Wk) < (0 | al))) break f;
                                                                                                if (((0 | (cl = q[(cl + jl) >> 2])) < 0) | ((0 | Wk) <= (0 | cl))) break f;
                                                                                                if (((al = (al + cl) | 0) >>> 31) | ((0 | Wk) < (0 | al))) break f;
                                                                                            }
                                                                                            if ((0 | Xk) == (0 | (Yk = (Yk + 1) | 0))) break;
                                                                                        }
                                                                                    } else Wk = q[(Vk + 116) >> 2];
                                                                                    if ((Yk = 0) < (0 | (cl = q[(Vk + 108) >> 2]))) {
                                                                                        for (al = q[(_k + 480) >> 2]; ;) {
                                                                                            if (((0 | (hl = q[(al + (Yk << 2)) >> 2])) < 0) | ((0 | dl) <= (0 | hl))) break f;
                                                                                            if ((0 | cl) == (0 | (Yk = (Yk + 1) | 0))) break;
                                                                                        }
                                                                                        for (hl = q[(_k + 488) >> 2], kl = q[(_k + 484) >> 2], Yk = 0; ;) {
                                                                                            if ((al = q[((dl = Yk << 2) + hl) >> 2])) {
                                                                                                if (((0 | al) < 0) | ((0 | Xk) < (0 | al))) break f;
                                                                                                if (((0 | (dl = q[(dl + kl) >> 2])) < 0) | ((0 | Xk) <= (0 | dl))) break f;
                                                                                                if (((al = (al + dl) | 0) >>> 31) | ((0 | Xk) < (0 | al))) break f;
                                                                                            }
                                                                                            if ((0 | cl) == (0 | (Yk = (Yk + 1) | 0))) break;
                                                                                        }
                                                                                        for (hl = q[ll >> 2], Yk = q[(_k + 456) >> 2], dl = q[(_k + 452) >> 2], al = 0; ;) {
                                                                                            if (((ml = q[(kl + (al << 2)) >> 2] << 2), (jl = q[(ml + Yk) >> 2]))) {
                                                                                                if (((0 | jl) < 0) | ((0 | hl) < (0 | jl))) break f;
                                                                                                if (((0 | (ml = q[(dl + ml) >> 2])) < 0) | ((0 | hl) <= (0 | ml))) break f;
                                                                                                if (((0 | (jl = (jl + ml) | 0)) < 0) | ((0 | hl) < (0 | jl))) break f;
                                                                                            }
                                                                                            if ((0 | cl) == (0 | (al = (al + 1) | 0))) break;
                                                                                        }
                                                                                    } else (Yk = q[(_k + 456) >> 2]), (dl = q[(_k + 452) >> 2]);
                                                                                    if ((al = 0) < (0 | (cl = q[(Vk + 112) >> 2]))) {
                                                                                        for (hl = q[(_k + 504) >> 2]; ;) {
                                                                                            if (((0 | (jl = q[(hl + (al << 2)) >> 2])) < 0) | ((0 | Zk) <= (0 | jl))) break f;
                                                                                            if ((0 | cl) == (0 | (al = (al + 1) | 0))) break;
                                                                                        }
                                                                                        for (kl = q[(_k + 512) >> 2], jl = q[(_k + 508) >> 2], Zk = 0; ;) {
                                                                                            if ((al = q[((hl = Zk << 2) + kl) >> 2])) {
                                                                                                if (((0 | al) < 0) | ((0 | Xk) < (0 | al))) break f;
                                                                                                if (((0 | (hl = q[(hl + jl) >> 2])) < 0) | ((0 | Xk) <= (0 | hl))) break f;
                                                                                                if (((al = (al + hl) | 0) >>> 31) | ((0 | Xk) < (0 | al))) break f;
                                                                                            }
                                                                                            if ((0 | cl) == (0 | (Zk = (Zk + 1) | 0))) break;
                                                                                        }
                                                                                        for (al = q[nl >> 2], Zk = 0; ;) {
                                                                                            if (((kl = q[(jl + (Zk << 2)) >> 2] << 2), (hl = q[(kl + Yk) >> 2]))) {
                                                                                                if (((0 | hl) < 0) | ((0 | al) < (0 | hl))) break f;
                                                                                                if (((0 | (kl = q[(dl + kl) >> 2])) < 0) | ((0 | al) <= (0 | kl))) break f;
                                                                                                if (((0 | (hl = (hl + kl) | 0)) < 0) | ((0 | al) < (0 | hl))) break f;
                                                                                            }
                                                                                            if ((0 | cl) == (0 | (Zk = (Zk + 1) | 0))) break;
                                                                                        }
                                                                                    }
                                                                                    if (((al = q[(Vk + 120) >> 2]), (Zk = 0) < (0 | Wk)))
                                                                                        for (cl = q[(_k + 528) >> 2]; ;) {
                                                                                            if (((0 | (hl = q[(cl + (Zk << 2)) >> 2])) < 0) | ((0 | al) <= (0 | hl))) break f;
                                                                                            if ((0 | (Zk = (Zk + 1) | 0)) == (0 | Wk)) break;
                                                                                        }
                                                                                    if ((Zk = 0) < (0 | al)) {
                                                                                        for (Wk = q[(_k + 532) >> 2]; ;) {
                                                                                            if (((0 | (cl = q[(Wk + (Zk << 2)) >> 2])) < -1) | ((0 | fl) <= (0 | cl))) break f;
                                                                                            if ((0 | al) == (0 | (Zk = (Zk + 1) | 0))) break;
                                                                                        }
                                                                                        for (Wk = q[(Vk + 124) >> 2], hl = q[(_k + 540) >> 2], jl = q[(_k + 536) >> 2], Zk = 0; ;) {
                                                                                            if ((fl = q[((cl = Zk << 2) + hl) >> 2])) {
                                                                                                if (((0 | fl) < 0) | ((0 | Wk) < (0 | fl))) break f;
                                                                                                if (((0 | (cl = q[(cl + jl) >> 2])) < 0) | ((0 | Wk) <= (0 | cl))) break f;
                                                                                                if (((fl = (cl + fl) | 0) >>> 31) | ((0 | Wk) < (0 | fl))) break f;
                                                                                            }
                                                                                            if ((0 | al) == (0 | (Zk = (Zk + 1) | 0))) break;
                                                                                        }
                                                                                    }
                                                                                    if (!((255 & il) >>> 0 < 5)) {
                                                                                        if ((Zk = 0) < (0 | (il = q[ll >> 2]))) {
                                                                                            for (al = q[(_k + 348) >> 2]; ;) {
                                                                                                if (((0 | (Wk = q[(al + (Zk << 2)) >> 2])) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                                if ((0 | il) == (0 | (Zk = (Zk + 1) | 0))) break;
                                                                                            }
                                                                                            for (al = q[(_k + 352) >> 2], Zk = 0; ;) {
                                                                                                if (((0 | (Wk = q[(al + (Zk << 2)) >> 2])) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                                if ((0 | il) == (0 | (Zk = (Zk + 1) | 0))) break;
                                                                                            }
                                                                                        }
                                                                                        if ((il = 0) < (0 | (Zk = q[bl >> 2]))) {
                                                                                            for (al = q[(_k + 384) >> 2]; ;) {
                                                                                                if (((0 | (Wk = q[(al + (il << 2)) >> 2])) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                                if ((0 | Zk) == (0 | (il = (il + 1) | 0))) break;
                                                                                            }
                                                                                            for (al = q[(_k + 388) >> 2], il = 0; ;) {
                                                                                                if (((0 | (Wk = q[(al + (il << 2)) >> 2])) < 0) | ((0 | a) < (0 | Wk))) break f;
                                                                                                if ((0 | Zk) == (0 | (il = (il + 1) | 0))) break;
                                                                                            }
                                                                                        }
                                                                                        if ((il = 0) < (0 | (al = q[nl >> 2]))) {
                                                                                            for (Wk = q[(_k + 404) >> 2]; ;) {
                                                                                                if (((0 | (fl = q[(Wk + (il << 2)) >> 2])) < 0) | ((0 | a) < (0 | fl))) break f;
                                                                                                if ((0 | al) == (0 | (il = (il + 1) | 0))) break;
                                                                                            }
                                                                                            for (Wk = q[(_k + 408) >> 2], il = 0; ;) {
                                                                                                if (((0 | (fl = q[(Wk + (il << 2)) >> 2])) < 0) | ((0 | a) < (0 | fl))) break f;
                                                                                                if ((0 | al) == (0 | (il = (il + 1) | 0))) break;
                                                                                            }
                                                                                        }
                                                                                        if ((a = 0) < (0 | (il = q[(Vk + 128) >> 2]))) {
                                                                                            for (al = q[Vk >> 2], Wk = q[(_k + 468) >> 2]; ;) {
                                                                                                if (((0 | (fl = q[(Wk + (a << 2)) >> 2])) < 0) | ((0 | al) <= (0 | fl))) break f;
                                                                                                if ((0 | il) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            for (ll = q[(_k + 476) >> 2], fl = q[(_k + 472) >> 2], a = 0; ;) {
                                                                                                if ((al = q[((Wk = a << 2) + ll) >> 2])) {
                                                                                                    if (((0 | al) < 0) | ((0 | Xk) < (0 | al))) break f;
                                                                                                    if (((0 | (Wk = q[(Wk + fl) >> 2])) < 0) | ((0 | Xk) <= (0 | Wk))) break f;
                                                                                                    if (((al = (Wk + al) | 0) >>> 31) | ((0 | Xk) < (0 | al))) break f;
                                                                                                }
                                                                                                if ((0 | il) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            for (al = q[gl >> 2], a = 0; ;) {
                                                                                                if (((gl = q[(fl + (a << 2)) >> 2] << 2), (Wk = q[(gl + Yk) >> 2]))) {
                                                                                                    if (((0 | Wk) < 0) | ((0 | al) < (0 | Wk))) break f;
                                                                                                    if (((0 | (gl = q[(dl + gl) >> 2])) < 0) | ((0 | al) <= (0 | gl))) break f;
                                                                                                    if (((0 | (Wk = (Wk + gl) | 0)) < 0) | ((0 | al) < (0 | Wk))) break f;
                                                                                                }
                                                                                                if ((0 | il) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                        }
                                                                                        if ((a = 0) < (0 | (il = q[(Vk + 132) >> 2]))) {
                                                                                            for (al = q[(_k + 492) >> 2]; ;) {
                                                                                                if (((0 | (Wk = q[(al + (a << 2)) >> 2])) < 0) | ((0 | ol) <= (0 | Wk))) break f;
                                                                                                if ((0 | il) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            for (gl = q[(_k + 500) >> 2], Wk = q[(_k + 496) >> 2], a = 0; ;) {
                                                                                                if ((al = q[((fl = a << 2) + gl) >> 2])) {
                                                                                                    if (((0 | al) < 0) | ((0 | Xk) < (0 | al))) break f;
                                                                                                    if (((0 | (fl = q[(Wk + fl) >> 2])) < 0) | ((0 | Xk) <= (0 | fl))) break f;
                                                                                                    if (((al = (al + fl) | 0) >>> 31) | ((0 | Xk) < (0 | al))) break f;
                                                                                                }
                                                                                                if ((0 | il) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            for (a = 0; ;) {
                                                                                                if (((fl = q[(Wk + (a << 2)) >> 2] << 2), (al = q[(fl + Yk) >> 2]))) {
                                                                                                    if (((0 | al) < 0) | ((0 | Zk) < (0 | al))) break f;
                                                                                                    if (((0 | (fl = q[(dl + fl) >> 2])) < 0) | ((0 | Zk) <= (0 | fl))) break f;
                                                                                                    if (((0 | (al = (al + fl) | 0)) < 0) | ((0 | Zk) < (0 | al))) break f;
                                                                                                }
                                                                                                if ((0 | il) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                        }
                                                                                        if (!(((a = 0) | (Vk = q[(Vk + 136) >> 2])) <= 0)) {
                                                                                            for (Zk = q[(_k + 516) >> 2]; ;) {
                                                                                                if (((0 | (il = q[(Zk + (a << 2)) >> 2])) < 0) | ((0 | $k) <= (0 | il))) break f;
                                                                                                if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            for (al = q[(_k + 524) >> 2], Zk = q[(_k + 520) >> 2], a = 0; ;) {
                                                                                                if ((_k = q[((il = a << 2) + al) >> 2])) {
                                                                                                    if (((0 | _k) < 0) | ((0 | Xk) < (0 | _k))) break f;
                                                                                                    if (((0 | (il = q[(Zk + il) >> 2])) < 0) | ((0 | Xk) <= (0 | il))) break f;
                                                                                                    if (((_k = (_k + il) | 0) >>> 31) | ((0 | Xk) < (0 | _k))) break f;
                                                                                                }
                                                                                                if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                            for (a = 0; ;) {
                                                                                                if (((_k = q[(Zk + (a << 2)) >> 2] << 2), (Xk = q[(_k + Yk) >> 2]))) {
                                                                                                    if (((0 | Xk) < 0) | ((0 | el) < (0 | Xk))) break f;
                                                                                                    if (((0 | (_k = q[(_k + dl) >> 2])) < 0) | ((0 | el) <= (0 | _k))) break f;
                                                                                                    if (((0 | (Xk = (Xk + _k) | 0)) < 0) | ((0 | el) < (0 | Xk))) break f;
                                                                                                }
                                                                                                if ((0 | Vk) == (0 | (a = (a + 1) | 0))) break;
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            return (L = pl), 1;
                                                                        }
                                                                        return Y(4, 1846, 0), (L = pl), 0;
                                                                    }
                                                                    (q[(_k + 52) >> 2] = Xk), (q[(_k + 48) >> 2] = 5), Y(4, 1640, (_k + 48) | 0);
                                                                } else (q[(_k + 32) >> 2] = Xk), Y(4, 1554, (_k + 32) | 0);
                                                                return (L = pl), 0;
                                                            })(a, vj)
                                                            : ((q[(20 + wj) >> 2] = 1621), (q[(16 + wj) >> 2] = 2284), Y(4, 1294, (16 + wj) | 0), 0)
                                                    : ((q[(4 + wj) >> 2] = 1444), (q[wj >> 2] = 2284), Y(4, 1294, wj), 0)),
                                                (L = (48 + wj) | 0),
                                                0 | a
                                            );
                                        },
                                        j: function (a) {
                                            q[1805] = a |= 0;
                                        },
                                        k: function (a, ej) {
                                            var fj;
                                            return (
                                                (ej |= 0),
                                                (L = fj = (L - 48) | 0),
                                                (a = (a |= 0)
                                                    ? ((a + 63) & -64) != (0 | a)
                                                        ? ((q[(36 + fj) >> 2] = 1522), (q[(32 + fj) >> 2] = 2305), Y(4, 1294, (32 + fj) | 0), 0)
                                                        : ((ej + 63) & -64) == (0 | ej) && ej
                                                            ? (function (a) {
                                                                var Qk,
                                                                    Tk,
                                                                    Uk,
                                                                    Uh,
                                                                    Kk = 0,
                                                                    Lk = 0,
                                                                    Mk = 0,
                                                                    Nk = 0,
                                                                    Ok = 0,
                                                                    Pk = 0,
                                                                    Rk = 0,
                                                                    Sk = 0;
                                                                (q[(24 + (L = Qk = (L - 32) | 0)) >> 2] = 0),
                                                                    (q[(16 + Qk) >> 2] = 5),
                                                                    (q[(20 + Qk) >> 2] = 0),
                                                                    Ka((16 + (L = Uh = (L - 272) | 0)) | 0, 2227, (q[(12 + Uh) >> 2] = (16 + Qk) | 0)),
                                                                    (function (a) {
                                                                        var Hc;
                                                                        (q[(L = Hc = (L - 16) | 0) >> 2] = a),
                                                                            (function (a, Il) {
                                                                                var Jl;
                                                                                (q[(12 + (L = Jl = (L - 16) | 0)) >> 2] = Il), Ia(a, 1432, Il, 0, 0), (L = (16 + Jl) | 0);
                                                                            })(q[970], Hc),
                                                                            (L = (16 + Hc) | 0);
                                                                    })((16 + Uh) | 0),
                                                                    (L = (272 + Uh) | 0);
                                                                a: {
                                                                    if (sa(a)) Y(4, 1932, 0);
                                                                    else {
                                                                        if (!(6 <= (Mk = r[(a + 4) | 0]) >>> 0)) {
                                                                            if (
                                                                                (1 != (0 | !r[(a + 5) | 0]) ? (da((a + 4) | 0, 1), X((a - -64) | 0, 4, 160), na(a, (a + 704) | (o[(a + 5) | 0] = 0)), ya(a)) : na(a, (a + 704) | 0),
                                                                                    r[7224] || ((q[1807] = 6), (o[7224] = 1), (q[1808] = 7), (q[1809] = 8), (q[1810] = 9)),
                                                                                    (Lk = q[(a + 704) >> 2]),
                                                                                    1 <= (0 | (Mk = q[(Lk + 16) >> 2])))
                                                                            ) {
                                                                                for (Sk = ((Nk = q[(a + 912) >> 2]) + (Mk << 2)) | 0, Ok = q[(a + 908) >> 2]; ;) {
                                                                                    Rk = (q[(a + 1204) >> 2] + (q[Ok >> 2] << 2)) | 0;
                                                                                    d: if (!(((Lk = 0) | (Kk = ((Mk = q[Nk >> 2]) + -1) | 0)) < 1))
                                                                                        e: for (; ;) {
                                                                                            for (; ;) {
                                                                                                if (q[(Pk = (Rk + (Lk << 2)) | 0) >> 2] <= -1) {
                                                                                                    if (
                                                                                                        ((function (a, Vk, ql) {
                                                                                                            var rl = 0,
                                                                                                                sl = 0;
                                                                                                            a: if ((0 | a) != (0 | Vk)) {
                                                                                                                if (!(a >>> 0 < (Vk + ql) >>> 0 && Vk >>> 0 < (sl = (a + ql) | 0) >>> 0)) return $(a, Vk, ql);
                                                                                                                if (((rl = 3 & (a ^ Vk)), a >>> 0 < Vk >>> 0)) {
                                                                                                                    if (!rl) {
                                                                                                                        if (3 & a)
                                                                                                                            for (; ;) {
                                                                                                                                if (!ql) break a;
                                                                                                                                if (((o[0 | a] = r[0 | Vk]), (Vk = (Vk + 1) | 0), (ql = (ql + -1) | 0), !(3 & (a = (a + 1) | 0)))) break;
                                                                                                                            }
                                                                                                                        if (!(ql >>> 0 <= 3)) {
                                                                                                                            for (rl = ql; (q[a >> 2] = q[Vk >> 2]), (Vk = (Vk + 4) | 0), (a = (a + 4) | 0), 3 < (rl = (rl + -4) | 0) >>> 0;);
                                                                                                                            ql &= 3;
                                                                                                                        }
                                                                                                                    }
                                                                                                                    if (ql) for (; (o[0 | a] = r[0 | Vk]), (a = (a + 1) | 0), (Vk = (Vk + 1) | 0), (ql = (ql + -1) | 0););
                                                                                                                } else {
                                                                                                                    if (!rl) {
                                                                                                                        if (3 & sl)
                                                                                                                            for (; ;) {
                                                                                                                                if (!ql) break a;
                                                                                                                                if (((o[0 | (rl = ((ql = (ql + -1) | 0) + a) | 0)] = r[(Vk + ql) | 0]), !(3 & rl))) break;
                                                                                                                            }
                                                                                                                        if (!(ql >>> 0 <= 3)) for (; (q[((ql = (ql + -4) | 0) + a) >> 2] = q[(Vk + ql) >> 2]), 3 < ql >>> 0;);
                                                                                                                    }
                                                                                                                    if (ql) for (; (o[((ql = (ql + -1) | 0) + a) | 0] = r[(Vk + ql) | 0]), ql;);
                                                                                                                }
                                                                                                            }
                                                                                                        })(Pk, (Pk + 4) | 0, ((-1 ^ Lk) + Mk) << 2),
                                                                                                            (0 | Lk) < (0 | (Kk = ((Mk = Kk) + -1) | 0)))
                                                                                                    )
                                                                                                        continue e;
                                                                                                    break d;
                                                                                                }
                                                                                                if (!((0 | (Lk = (Lk + 1) | 0)) < (0 | Kk))) break;
                                                                                            }
                                                                                            break;
                                                                                        }
                                                                                    if (((Lk = Nk), 0 < (0 | Mk) && (Mk = q[(Rk + (Kk << 2)) >> 2] < 0 ? Kk : Mk), (q[Lk >> 2] = Mk), (Ok = (Ok + 4) | 0), !((Nk = (Nk + 4) | 0) >>> 0 < Sk >>> 0)))
                                                                                        break;
                                                                                }
                                                                                Lk = q[(a + 704) >> 2];
                                                                            }
                                                                            if (1 <= q[Lk >> 2])
                                                                                for (Kk = 0; (q[(q[(a + 712) >> 2] + (Kk << 2)) >> 2] = q[(a + 716) >> 2] + (Kk << 6)), (Lk = q[(a + 704) >> 2]), (0 | (Kk = (Kk + 1) | 0)) < q[Lk >> 2];);
                                                                            if (1 <= q[(Lk + 4) >> 2])
                                                                                for (Kk = 0; (q[(q[(a + 744) >> 2] + (Kk << 2)) >> 2] = q[(a + 748) >> 2] + (Kk << 6)), (Lk = q[(a + 704) >> 2]), (0 | (Kk = (Kk + 1) | 0)) < q[(Lk + 4) >> 2];);
                                                                            if (1 <= q[(Lk + 16) >> 2])
                                                                                for (
                                                                                    Kk = 0;
                                                                                    (q[((Mk = Kk << 2) + q[(a + 832) >> 2]) >> 2] = q[(a + 848) >> 2] + (Kk << 6)),
                                                                                    (q[(Mk + q[(a + 836) >> 2]) >> 2] = q[(a + 1196) >> 2] + (q[(Mk + q[(a + 896) >> 2]) >> 2] << 2)),
                                                                                    (q[(Mk + q[(a + 840) >> 2]) >> 2] = q[(a + 1200) >> 2] + (q[(Mk + q[(a + 900) >> 2]) >> 2] << 1)),
                                                                                    (q[(Mk + q[(a + 844) >> 2]) >> 2] = q[(a + 1204) >> 2] + (q[(Mk + q[(a + 908) >> 2]) >> 2] << 2)),
                                                                                    (Lk = q[(a + 704) >> 2]),
                                                                                    (0 | (Kk = (Kk + 1) | 0)) < q[(Lk + 16) >> 2];

                                                                                );
                                                                            if (1 <= q[(Lk + 20) >> 2])
                                                                                for (Kk = 0; (q[(q[(a + 916) >> 2] + (Kk << 2)) >> 2] = q[(a + 920) >> 2] + (Kk << 6)), (Lk = q[(a + 704) >> 2]), (0 | (Kk = (Kk + 1) | 0)) < q[(Lk + 20) >> 2];);
                                                                            if (1 <= q[(Lk + 80) >> 2])
                                                                                for (Kk = 0; (q[(q[(a + 1240) >> 2] + (Kk << 2)) >> 2] = q[(a + 1244) >> 2] + (Kk << 6)), (Lk = q[(a + 704) >> 2]), (0 | (Kk = (Kk + 1) | 0)) < q[(Lk + 80) >> 2];);
                                                                            if (1 & o[(q[(a + 708) >> 2] + 20) | 0]) break a;
                                                                            if ((0 | (Nk = q[(Lk + 16) >> 2])) < 1) break a;
                                                                            for (Kk = q[(a + 904) >> 2], Rk = q[(a + 900) >> 2], Pk = q[(a + 1200) >> 2], Ok = 0; ;) {
                                                                                if (0 < (0 | (Sk = (q[((Mk = Ok << 2) + Kk) >> 2] + -1) | 0)))
                                                                                    for (
                                                                                        Tk = (Pk + (q[(Mk + Rk) >> 2] << 1)) | 0, Lk = 0;
                                                                                        (Uk = s[(Mk = (Tk + (Lk << 1)) | 0) >> 1]), (p[Mk >> 1] = s[(Mk + 4) >> 1]), (p[(Mk + 4) >> 1] = Uk), (0 | (Lk = (Lk + 3) | 0)) < (0 | Sk);

                                                                                    );
                                                                                if ((0 | Nk) == (0 | (Ok = (Ok + 1) | 0))) break;
                                                                            }
                                                                            for (Mk = q[(a + 892) >> 2], Ok = q[(a + 896) >> 2], Rk = q[(a + 1196) >> 2], Kk = 0; ;) {
                                                                                if (1 <= (0 | (Pk = q[((Lk = Kk << 2) + Mk) >> 2])))
                                                                                    for (
                                                                                        Pk = ((Lk = (Rk + (q[(Lk + Ok) >> 2] << 2)) | 0) + (Pk << 3)) | 0, Lk = (Lk + 4) | 0;
                                                                                        (u[Lk >> 2] = x(1) - u[Lk >> 2]), (Lk = (Lk + 8) | 0) >>> 0 < Pk >>> 0;

                                                                                    );
                                                                                if ((0 | Nk) == (0 | (Kk = (Kk + 1) | 0))) break;
                                                                            }
                                                                            break a;
                                                                        }
                                                                        (q[(4 + Qk) >> 2] = Mk), (q[Qk >> 2] = 5), Y(4, 2023, Qk);
                                                                    }
                                                                    a = 0;
                                                                }
                                                                return (L = (32 + Qk) | 0), a;
                                                            })(a)
                                                            : ((q[(20 + fj) >> 2] = 1621), (q[(16 + fj) >> 2] = 2305), Y(4, 1294, (16 + fj) | 0), 0)
                                                    : ((q[(4 + fj) >> 2] = 1444), (q[fj >> 2] = 2305), Y(4, 1294, fj), 0)),
                                                (L = (48 + fj) | 0),
                                                0 | a
                                            );
                                        },
                                        l: function (a, ej, fj, gj) {
                                            var hj;
                                            (ej |= 0),
                                                (fj |= 0),
                                                (gj |= 0),
                                                (L = hj = (L + -64) | 0),
                                                (a |= 0)
                                                    ? ej
                                                        ? fj
                                                            ? gj
                                                                ? ((a = q[(q[a >> 2] + 708) >> 2]),
                                                                    (q[ej >> 2] = q[(a + 12) >> 2]),
                                                                    (q[(ej + 4) >> 2] = q[(a + 16) >> 2]),
                                                                    (q[fj >> 2] = q[(a + 4) >> 2]),
                                                                    (q[(fj + 4) >> 2] = q[(a + 8) >> 2]),
                                                                    (q[gj >> 2] = q[a >> 2]))
                                                                : ((q[(52 + hj) >> 2] = 1995), (q[(48 + hj) >> 2] = 2325), Y(4, 1294, (48 + hj) | 0))
                                                            : ((q[(36 + hj) >> 2] = 1903), (q[(32 + hj) >> 2] = 2325), Y(4, 1294, (32 + hj) | 0))
                                                        : ((q[(20 + hj) >> 2] = 1819), (q[(16 + hj) >> 2] = 2325), Y(4, 1294, (16 + hj) | 0))
                                                    : ((q[(4 + hj) >> 2] = 1740), (q[hj >> 2] = 2325), Y(4, 1294, hj)),
                                                (L = (64 + hj) | 0);
                                        },
                                        m: xa,
                                        n: wa,
                                        o: function (a) {
                                            var dj;
                                            (L = dj = (L - 16) | 0), (a |= 0) ? ua(a) : ((q[(4 + dj) >> 2] = 1740), (q[dj >> 2] = 2387), Y(4, 1294, dj)), (L = (16 + dj) | 0);
                                        },
                                        p: function (a) {
                                            var cj;
                                            return (L = cj = (L - 16) | 0), (a = (a |= 0) ? q[(a + 540) >> 2] : ((q[(4 + cj) >> 2] = 1740), (q[cj >> 2] = 2402), Y(4, 1294, cj), -1)), (L = (16 + cj) | 0), 0 | a;
                                        },
                                        q: function (a) {
                                            var bj;
                                            return (L = bj = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 916) >> 2] : ((q[(4 + bj) >> 2] = 1740), (q[bj >> 2] = 2423), Y(4, 1294, bj), 0)), (L = (16 + bj) | 0), 0 | a;
                                        },
                                        r: function (a) {
                                            var aj;
                                            return (L = aj = (L - 16) | 0), (a = (a |= 0) ? q[(a + 548) >> 2] : ((q[(4 + aj) >> 2] = 1740), (q[aj >> 2] = 2442), Y(4, 1294, aj), 0)), (L = (16 + aj) | 0), 0 | a;
                                        },
                                        s: function (a) {
                                            var $i;
                                            return (L = $i = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 928) >> 2] : ((q[(4 + $i) >> 2] = 1740), (q[$i >> 2] = 2463), Y(4, 1294, $i), 0)), (L = (16 + $i) | 0), 0 | a;
                                        },
                                        t: function (a) {
                                            var _i;
                                            return (L = _i = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 924) >> 2] : ((q[(4 + _i) >> 2] = 1740), (q[_i >> 2] = 2492), Y(4, 1294, _i), 0)), (L = (16 + _i) | 0), 0 | a;
                                        },
                                        u: function (a) {
                                            var Zi;
                                            return (L = Zi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 932) >> 2] : ((q[(4 + Zi) >> 2] = 1740), (q[Zi >> 2] = 2521), Y(4, 1294, Zi), 0)), (L = (16 + Zi) | 0), 0 | a;
                                        },
                                        v: function (a) {
                                            var Yi;
                                            return (L = Yi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 552) >> 2] : ((q[(4 + Yi) >> 2] = 1740), (q[Yi >> 2] = 2550), Y(4, 1294, Yi), 0)), (L = (16 + Yi) | 0), 0 | a;
                                        },
                                        w: function (a) {
                                            var Xi;
                                            return (L = Xi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 4) >> 2] : ((q[(4 + Xi) >> 2] = 1740), (q[Xi >> 2] = 2572), Y(4, 1294, Xi), -1)), (L = (16 + Xi) | 0), 0 | a;
                                        },
                                        x: function (a) {
                                            var Wi;
                                            return (L = Wi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 712) >> 2] : ((q[(4 + Wi) >> 2] = 1740), (q[Wi >> 2] = 2588), Y(4, 1294, Wi), 0)), (L = (16 + Wi) | 0), 0 | a;
                                        },
                                        y: function (a) {
                                            var Vi;
                                            return (L = Vi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 52) >> 2] : ((q[(4 + Vi) >> 2] = 1740), (q[Vi >> 2] = 2602), Y(4, 1294, Vi), 0)), (L = (16 + Vi) | 0), 0 | a;
                                        },
                                        z: function (a) {
                                            var Ui;
                                            return (L = Ui = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 740) >> 2] : ((q[(4 + Ui) >> 2] = 1740), (q[Ui >> 2] = 2622), Y(4, 1294, Ui), 0)), (L = (16 + Ui) | 0), 0 | a;
                                        },
                                        A: function (a) {
                                            var Ti;
                                            return (L = Ti = (L - 16) | 0), (a = (a |= 0) ? q[(a + 332) >> 2] : ((q[(4 + Ti) >> 2] = 1740), (q[Ti >> 2] = 2650), Y(4, 1294, Ti), -1)), (L = (16 + Ti) | 0), 0 | a;
                                        },
                                        B: function (a) {
                                            var Si;
                                            return (L = Si = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 832) >> 2] : ((q[(4 + Si) >> 2] = 1740), (q[Si >> 2] = 2670), Y(4, 1294, Si), 0)), (L = (16 + Si) | 0), 0 | a;
                                        },
                                        C: function (a) {
                                            var Ri;
                                            return (L = Ri = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 888) >> 2] : ((q[(4 + Ri) >> 2] = 1740), (q[Ri >> 2] = 2688), Y(4, 1294, Ri), 0)), (L = (16 + Ri) | 0), 0 | a;
                                        },
                                        D: function (a) {
                                            var Qi;
                                            return (L = Qi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 432) >> 2] : ((q[(4 + Qi) >> 2] = 1740), (q[Qi >> 2] = 2716), Y(4, 1294, Qi), 0)), (L = (16 + Qi) | 0), 0 | a;
                                        },
                                        E: function (a) {
                                            var Pi;
                                            return (L = Pi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 884) >> 2] : ((q[(4 + Pi) >> 2] = 1740), (q[Pi >> 2] = 2743), Y(4, 1294, Pi), 0)), (L = (16 + Pi) | 0), 0 | a;
                                        },
                                        F: function (a) {
                                            var Oi;
                                            return (L = Oi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 440) >> 2] : ((q[(4 + Oi) >> 2] = 1740), (q[Oi >> 2] = 2772), Y(4, 1294, Oi), 0)), (L = (16 + Oi) | 0), 0 | a;
                                        },
                                        G: function (a) {
                                            var Ni;
                                            return (L = Ni = (L - 16) | 0), (a = (a |= 0) ? q[(a + 436) >> 2] : ((q[(4 + Ni) >> 2] = 1740), (q[Ni >> 2] = 2797), Y(4, 1294, Ni), 0)), (L = (16 + Ni) | 0), 0 | a;
                                        },
                                        H: function (a) {
                                            var Mi;
                                            return (L = Mi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 448) >> 2] : ((q[(4 + Mi) >> 2] = 1740), (q[Mi >> 2] = 2824), Y(4, 1294, Mi), 0)), (L = (16 + Mi) | 0), 0 | a;
                                        },
                                        I: function (a) {
                                            var Li;
                                            return (L = Li = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 912) >> 2] : ((q[(4 + Li) >> 2] = 1740), (q[Li >> 2] = 2848), Y(4, 1294, Li), 0)), (L = (16 + Li) | 0), 0 | a;
                                        },
                                        J: function (a) {
                                            var Ki;
                                            return (L = Ki = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 844) >> 2] : ((q[(4 + Ki) >> 2] = 1740), (q[Ki >> 2] = 2873), Y(4, 1294, Ki), 0)), (L = (16 + Ki) | 0), 0 | a;
                                        },
                                        K: function (a) {
                                            var Ji;
                                            return (L = Ji = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 892) >> 2] : ((q[(4 + Ji) >> 2] = 1740), (q[Ji >> 2] = 2893), Y(4, 1294, Ji), 0)), (L = (16 + Ji) | 0), 0 | a;
                                        },
                                        L: function (a) {
                                            var Ii;
                                            return (L = Ii = (L - 16) | 0), (a = (a |= 0) ? q[(a + 444) >> 2] : ((q[(4 + Ii) >> 2] = 1740), (q[Ii >> 2] = 2920), Y(4, 1294, Ii), 0)), (L = (16 + Ii) | 0), 0 | a;
                                        },
                                        M: function (a) {
                                            var si;
                                            return (L = si = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 836) >> 2] : ((q[(4 + si) >> 2] = 1740), (q[si >> 2] = 2950), Y(4, 1294, si), 0)), (L = (16 + si) | 0), 0 | a;
                                        },
                                        N: function (a) {
                                            var ri;
                                            return (L = ri = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 904) >> 2] : ((q[(4 + ri) >> 2] = 1740), (q[ri >> 2] = 2974), Y(4, 1294, ri), 0)), (L = (16 + ri) | 0), 0 | a;
                                        },
                                        O: function (a) {
                                            var qi;
                                            return (L = qi = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 840) >> 2] : ((q[(4 + qi) >> 2] = 1740), (q[qi >> 2] = 3e3), Y(4, 1294, qi), 0)), (L = (16 + qi) | 0), 0 | a;
                                        },
                                        P: function (a) {
                                            var pi;
                                            return (L = pi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 452) >> 2] : ((q[(4 + pi) >> 2] = 1740), (q[pi >> 2] = 3022), Y(4, 1294, pi), 0)), (L = (16 + pi) | 0), 0 | a;
                                        },
                                        Q: function (a) {
                                            var oi;
                                            return (L = oi = (L - 16) | 0), (a = (a |= 0) ? q[(a + 456) >> 2] : ((q[(4 + oi) >> 2] = 1740), (q[oi >> 2] = 3051), Y(4, 1294, oi), 0)), (L = (16 + oi) | 0), 0 | a;
                                        },
                                        R: function (a) {
                                            var ni;
                                            return (L = ni = (L - 16) | 0), (a = (a |= 0) ? q[(q[a >> 2] + 876) >> 2] : ((q[(4 + ni) >> 2] = 1740), (q[ni >> 2] = 3078), Y(4, 1294, ni), 0)), (L = (16 + ni) | 0), 0 | a;
                                        },
                                        S: function (a) {
                                            var mi;
                                            (L = mi = (L - 16) | 0), (a |= 0) ? (q[(a + 428) >> 2] = 1) : ((q[(4 + mi) >> 2] = 1740), (q[mi >> 2] = 3110), Y(4, 1294, mi)), (L = (16 + mi) | 0);
                                        },
                                        T: function (a) {
                                            var li;
                                            return (L = li = (L - 16) | 0), (a = (a |= 0) ? q[(a + 640) >> 2] : ((q[(4 + li) >> 2] = 1740), (q[li >> 2] = 3139), Y(4, 1294, li), 0)), (L = (16 + li) | 0), 0 | a;
                                        },
                                        U: function (a) {
                                            var ji;
                                            return (L = ji = (L - 16) | 0), (a = (a |= 0) ? q[(a + 636) >> 2] : ((q[(4 + ji) >> 2] = 1740), (q[ji >> 2] = 3164), Y(4, 1294, ji), 0)), (L = (16 + ji) | 0), 0 | a;
                                        },
                                        V: function (a) {
                                            var Fc;
                                            return oa((12 + (L = Fc = (L - 16) | 0)) | 0, 64, (a |= 0)), (L = (16 + Fc) | 0), q[(12 + Fc) >> 2];
                                        },
                                        W: function (a) {
                                            var Ec,
                                                Cc,
                                                Dc = 0;
                                            return (L = Cc = (L - 16) | 0), !(a |= 0) || oa((12 + Cc) | 0, 16, (Ec = xa(a))) || (Dc = wa(a, q[(12 + Cc) >> 2], Ec)) || (pa(q[(12 + Cc) >> 2]), (Dc = 0)), (L = (16 + Cc) | 0), 0 | Dc;
                                        },
                                        X: function (a) {
                                            return 0 | qa((a |= 0));
                                        },
                                        Y: function (a) {
                                            pa((a |= 0));
                                        },
                                        Z: function (a) {
                                            var Sm;
                                            oa((12 + (L = Sm = (L - 16) | 0)) | 0, 64, (a |= 0)), pa(q[(12 + Sm) >> 2]), (L = (16 + Sm) | 0);
                                        },
                                        _: function () {
                                            return 0 | L;
                                        },
                                        $: function (a) {
                                            return 0 | (L = (L - (0 | a)) & -16);
                                        },
                                        aa: function (a) {
                                            L = 0 | a;
                                        },
                                        ba: function (a) {
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
                                        ca: function (a, Vk) {
                                            n[(a |= 0)]((Vk |= 0));
                                        },
                                    }
                                );
                                function X(a, b, c) {
                                    var e,
                                        f,
                                        d = 0;
                                    if (c)
                                        for (; ;) {
                                            if (((c = (c + -1) | 0), a >>> 0 < (d = ((e = (a + b) | 0) - 1) | 0) >>> 0)) for (; (f = r[0 | a]), (o[0 | a] = r[0 | d]), (o[0 | d] = f), (a = (a + 1) | 0) >>> 0 < (d = (d + -1) | 0) >>> 0;);
                                            if (((a = e), !c)) break;
                                        }
                                }
                                function Y(a, b, c) {
                                    var g;
                                    (L = g = (L - 272) | 0), t[1804] > a >>> 0 || ((a = q[1805]) && (Ka((16 + g) | 0, b, (q[(12 + g) >> 2] = c)), n[a]((16 + g) | 0))), (L = (272 + g) | 0);
                                }
                                function Z(a, b, c) {
                                    32 & r[0 | a] ||
                                        !(function (a, Rm, Sm) {
                                            var Tm = 0,
                                                Um = 0,
                                                tn = 0;
                                            a: {
                                                if (!(Tm = q[(Sm + 16) >> 2])) {
                                                    if (
                                                        (function (a) {
                                                            var Rm;
                                                            return (
                                                                (Rm = r[(a + 74) | 0]),
                                                                (o[(a + 74) | 0] = (Rm + -1) | Rm),
                                                                8 & (Rm = q[a >> 2])
                                                                    ? ((q[a >> 2] = 32 | Rm), 1)
                                                                    : ((q[(a + 4) >> 2] = 0), (q[(a + 8) >> 2] = 0), (Rm = q[(a + 44) >> 2]), (q[(a + 28) >> 2] = Rm), (q[(a + 20) >> 2] = Rm), (q[(a + 16) >> 2] = Rm + q[(a + 48) >> 2]), 0)
                                                            );
                                                        })(Sm)
                                                    )
                                                        break a;
                                                    Tm = q[(Sm + 16) >> 2];
                                                }
                                                if ((Tm - (tn = q[(Sm + 20) >> 2])) >>> 0 < Rm >>> 0) return n[q[(Sm + 36) >> 2]](Sm, a, Rm);
                                                b: if (!(o[(Sm + 75) | 0] < 0)) {
                                                    for (Tm = Rm; ;) {
                                                        if (!(Um = Tm)) break b;
                                                        if (10 == r[((Tm = (Um + -1) | 0) + a) | 0]) break;
                                                    }
                                                    if (n[q[(Sm + 36) >> 2]](Sm, a, Um) >>> 0 < Um >>> 0) break a;
                                                    (Rm = (Rm - Um) | 0), (a = (a + Um) | 0), (tn = q[(Sm + 20) >> 2]);
                                                }
                                                $(tn, a, Rm), (q[(Sm + 20) >> 2] = q[(Sm + 20) >> 2] + Rm);
                                            }
                                        })(b, c, a);
                                }
                                function _(a, b, c, h, i) {
                                    var k, l, j;
                                    if (((L = j = (L - 256) | 0), !((73728 & i) | ((0 | c) <= (0 | h))))) {
                                        if ((ca(j, b, (k = (i = (c - h) | 0) >>> 0 < 256) ? i : 256), (b = a), (l = j), !k)) {
                                            for (c = (c - h) | 0; Z(a, j, 256), 255 < (i = (i + -256) | 0) >>> 0;);
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
                                                for (c = a; ;) {
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
                                            if (!(a >>> 0 <= c >>> 0)) for (; (q[c >> 2] = q[b >> 2]), (b = (b + 4) | 0), (c = (c + 4) | 0) >>> 0 < a >>> 0;);
                                        }
                                        if (c >>> 0 < h >>> 0) for (; (o[0 | c] = r[0 | b]), (b = (b + 1) | 0), (0 | h) != (0 | (c = (c + 1) | 0)););
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
                                    if (a >>> 0 < (n = (((a + n) | 0) - 1) | 0) >>> 0) for (; (p = r[0 | a]), (o[0 | a] = r[0 | n]), (o[0 | n] = p), (a = (a + 1) | 0) >>> 0 < (n = (n + -1) | 0) >>> 0;);
                                }
                                function ea(a) {
                                    var n,
                                        o = N();
                                    return (a = ((n = q[2216]) + a) | 0) >>> 0 <= (o << 16) >>> 0 || J(0 | a) ? ((q[2216] = a), n) : ((q[2086] = 48), -1);
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
                                        for (R = (w(a, 12) + v) | 0; ;) {
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
                                    else for (; (y = bd((x = cd(a, q, 10)), (z = M), 10)), (o[0 | (v = (v + -1) | 0)] = (a - y) | 48), (y = ((9 == (0 | q)) & (4294967295 < a >>> 0)) | (9 < q >>> 0)), (a = x), (q = z), y;);
                                    if (x) for (; (o[0 | (v = (v + -1) | 0)] = (x - w((a = ((x >>> 0) / 10) | 0), 10)) | 48), (q = 9 < x >>> 0), (x = a), q;);
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
                                                    for (_ = !V; ;) {
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
                                                                for (var $o = 0, ap = 0; (ap = $o), a;) (a &= a - 1), ($o = ($o + 1) | 0);
                                                                return ap;
                                                            })(v >>> 2))))
                                            )
                                                break a;
                                            if (((aa = 48), (-64 - v) >>> 0 < $ >>> 0)) break a;
                                            v = (function (a, Vk) {
                                                var vl,
                                                    wl,
                                                    ql = 0,
                                                    tl = 0,
                                                    ul = 0;
                                                if (((tl = a >>> 0 > (ql = 16) ? a : 16) + -1) & tl) for (; (ql = (a = ql) << 1), a >>> 0 < tl >>> 0;);
                                                else a = tl;
                                                return (-64 - a) >>> 0 <= Vk >>> 0
                                                    ? ((q[2086] = 48), 0)
                                                    : (ql = qa((12 + (((tl = Vk >>> 0 < 11 ? 16 : (Vk + 11) & -8) + a) | 0)) | 0))
                                                        ? ((Vk = (ql + -8) | 0),
                                                            ql & (a + -1)
                                                                ? ((ul = ((-8 & (wl = q[(vl = (ql + -4) | 0) >> 2])) - (ql = ((a = 15 < ((ql = (((((a + ql) | 0) - 1) & (0 - a)) - 8) | 0) - Vk) >>> 0 ? ql : (a + ql) | 0) - Vk) | 0)) | 0),
                                                                    3 & wl
                                                                        ? ((q[(a + 4) >> 2] = ul | (1 & q[(a + 4) >> 2]) | 2),
                                                                            (q[(4 + (ul = (a + ul) | 0)) >> 2] = 1 | q[(4 + ul) >> 2]),
                                                                            (q[vl >> 2] = ql | (1 & q[vl >> 2]) | 2),
                                                                            (q[(a + 4) >> 2] = 1 | q[(a + 4) >> 2]),
                                                                            za(Vk, ql))
                                                                        : ((Vk = q[Vk >> 2]), (q[(a + 4) >> 2] = ul), (q[a >> 2] = Vk + ql)))
                                                                : (a = Vk),
                                                            3 & (Vk = q[(a + 4) >> 2]) &&
                                                            ((ql = -8 & Vk) >>> 0 <= (tl + 16) >>> 0 ||
                                                                ((q[(a + 4) >> 2] = tl | (1 & Vk) | 2), (q[((Vk = (a + tl) | 0) + 4) >> 2] = 3 | (tl = (ql - tl) | 0)), (q[(4 + (ql = (a + ql) | 0)) >> 2] = 1 | q[(ql + 4) >> 2]), za(Vk, tl))),
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
                                            if ((ba = (ba - ($ = q[ba >> 2])) | 0) >>> 0 < t[2091]) break a;
                                            if (((a = (a + $) | 0), q[2092] != (0 | ba)))
                                                if ($ >>> 0 <= 255) (ca = q[(ba + 8) >> 2]), ($ >>>= 3), (0 | (v = q[(ba + 12) >> 2])) == (0 | ca) ? ((ha = q[2087] & ed($)), (q[2087] = ha)) : ((q[(ca + 12) >> 2] = v), (q[(v + 8) >> 2] = ca));
                                                else {
                                                    if (((fa = q[(ba + 24) >> 2]), (0 | ba) != (0 | ($ = q[(ba + 12) >> 2])))) (v = q[(ba + 8) >> 2]), (q[(v + 12) >> 2] = $), (q[($ + 8) >> 2] = v);
                                                    else if ((v = (v = q[(ca = (ba + 20) | 0) >> 2]) || q[(ca = (ba + 16) | 0) >> 2])) {
                                                        for (; (ea = ca), (v = q[(ca = (($ = v) + 20) | 0) >> 2]) || ((ca = ($ + 16) | 0), (v = q[($ + 16) >> 2])););
                                                        q[ea >> 2] = 0;
                                                    } else $ = 0;
                                                    if (fa) {
                                                        ca = q[(ba + 28) >> 2];
                                                        e: {
                                                            if (q[(v = (8652 + (ca << 2)) | 0) >> 2] == (0 | ba)) {
                                                                if ((q[v >> 2] = $)) break e;
                                                                (ha = q[2088] & ed(ca)), (q[2088] = ha);
                                                                break b;
                                                            }
                                                            if (!(q[(fa + (q[(fa + 16) >> 2] == (0 | ba) ? 16 : 20)) >> 2] = $)) break b;
                                                        }
                                                        (q[($ + 24) >> 2] = fa), (v = q[(ba + 16) >> 2]) && ((q[($ + 16) >> 2] = v), (q[(v + 24) >> 2] = $)), (v = q[(ba + 20) >> 2]) && ((q[($ + 20) >> 2] = v), (q[(v + 24) >> 2] = $));
                                                    }
                                                }
                                            else if (3 == (3 & ($ = q[(4 + da) >> 2]))) return (q[2089] = a), (q[(4 + da) >> 2] = -2 & $), (q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a);
                                        }
                                        if (!(da >>> 0 <= ba >>> 0) && 1 & ($ = q[(4 + da) >> 2])) {
                                            f: {
                                                if (!(2 & $)) {
                                                    if (q[2093] == (0 | da)) {
                                                        if (((q[2093] = ba), (a = (q[2090] + a) | 0), (q[2090] = a), (q[(ba + 4) >> 2] = 1 | a), q[2092] != (0 | ba))) break a;
                                                        return (q[2089] = 0), (q[2092] = 0);
                                                    }
                                                    if (q[2092] == (0 | da)) return (q[2092] = ba), (a = (q[2089] + a) | 0), (q[2089] = a), (q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a);
                                                    a = ((-8 & $) + a) | 0;
                                                    g: if ($ >>> 0 <= 255)
                                                        ($ >>>= 3), (0 | (v = q[(8 + da) >> 2])) == (0 | (ca = q[(12 + da) >> 2])) ? ((ha = q[2087] & ed($)), (q[2087] = ha)) : ((q[(v + 12) >> 2] = ca), (q[(ca + 8) >> 2] = v));
                                                    else {
                                                        if (((fa = q[(24 + da) >> 2]), (0 | da) != (0 | ($ = q[(12 + da) >> 2])))) (v = q[(8 + da) >> 2]), (q[(v + 12) >> 2] = $), (q[($ + 8) >> 2] = v);
                                                        else if ((v = (v = q[(ca = (20 + da) | 0) >> 2]) || q[(ca = (16 + da) | 0) >> 2])) {
                                                            for (; (ea = ca), (v = q[(ca = (($ = v) + 20) | 0) >> 2]) || ((ca = ($ + 16) | 0), (v = q[($ + 16) >> 2])););
                                                            q[ea >> 2] = 0;
                                                        } else $ = 0;
                                                        if (fa) {
                                                            ca = q[(28 + da) >> 2];
                                                            j: {
                                                                if (q[(v = (8652 + (ca << 2)) | 0) >> 2] == (0 | da)) {
                                                                    if ((q[v >> 2] = $)) break j;
                                                                    (ha = q[2088] & ed(ca)), (q[2088] = ha);
                                                                    break g;
                                                                }
                                                                if (!(q[(fa + (q[(fa + 16) >> 2] == (0 | da) ? 16 : 20)) >> 2] = $)) break g;
                                                            }
                                                            (q[($ + 24) >> 2] = fa), (v = q[(16 + da) >> 2]) && ((q[($ + 16) >> 2] = v), (q[(v + 24) >> 2] = $)), (v = q[(20 + da) >> 2]) && ((q[($ + 20) >> 2] = v), (q[(v + 24) >> 2] = $));
                                                        }
                                                    }
                                                    if (((q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a), q[2092] != (0 | ba))) break f;
                                                    return (q[2089] = a);
                                                }
                                                (q[(4 + da) >> 2] = -2 & $), (q[(ba + 4) >> 2] = 1 | a), (q[(a + ba) >> 2] = a);
                                            }
                                            if (a >>> 0 <= 255)
                                                return (
                                                    ($ = (8388 + ((a >>>= 3) << 3)) | 0),
                                                    (a = (v = q[2087]) & (a = 1 << a) ? q[($ + 8) >> 2] : ((q[2087] = a | v), $)),
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
                                                (ea = (8652 + ((q[(($ = ba) + 28) >> 2] = v) << 2)) | 0);
                                            m: if ((ca = q[2088]) & ($ = 1 << v)) {
                                                (ca = a << (31 == (0 | v) ? 0 : (25 - (v >>> 1)) | 0)), ($ = q[ea >> 2]);
                                                n: {
                                                    for (; ;) {
                                                        if ((-8 & q[((v = $) + 4) >> 2]) == (0 | a)) break n;
                                                        if ((($ = ca >>> 29), (ca <<= 1), !($ = q[(16 + (ea = (v + (4 & $)) | 0)) >> 2]))) break;
                                                    }
                                                    (q[(ea + 16) >> 2] = ba), (q[(ba + 12) >> 2] = ba), (q[(ba + 24) >> 2] = v), (q[(ba + 8) >> 2] = ba);
                                                    break m;
                                                }
                                                (a = q[(v + 8) >> 2]), (q[(a + 12) >> 2] = ba), (q[(v + 8) >> 2] = ba), (q[(ba + 24) >> 2] = 0), (q[(ba + 12) >> 2] = v), (q[(ba + 8) >> 2] = a);
                                            } else (q[2088] = $ | ca), (q[ea >> 2] = ba), (q[(ba + 12) >> 2] = ba), (q[(ba + 24) >> 2] = ea), (q[(ba + 8) >> 2] = ba);
                                            if (((a = (q[2095] + -1) | 0), !(q[2095] = a))) {
                                                for (ba = 8804; (ba = ((a = q[ba >> 2]) + 8) | 0), a;);
                                                q[2095] = -1;
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
                                                                                    if (3 & (ia = (ma = q[2087]) >>> (a = (na = a >>> 0 < 11 ? 16 : (a + 11) & -8) >>> 3))) {
                                                                                        (a = ((ia = q[(8396 + (la = (ja = (a + (1 & (-1 ^ ia))) | 0) << 3)) >> 2]) + 8) | 0),
                                                                                            (0 | (ka = q[(ia + 8) >> 2])) == (0 | (la = (la + 8388) | 0))
                                                                                                ? ((ua = ed(ja) & ma), (q[2087] = ua))
                                                                                                : ((q[(ka + 12) >> 2] = la), (q[(la + 8) >> 2] = ka)),
                                                                                            (q[(ia + 4) >> 2] = 3 | (ja <<= 3)),
                                                                                            (q[(4 + (ia = (ia + ja) | 0)) >> 2] = 1 | q[(ia + 4) >> 2]);
                                                                                        break a;
                                                                                    }
                                                                                    if (na >>> 0 <= (pa = q[2089]) >>> 0) break k;
                                                                                    if (ia) {
                                                                                        (ja = ia = ((a = (((0 - (a = ((0 - (ja = 2 << a)) | ja) & (ia << a))) & a) - 1) | 0) >>> 12) & 16),
                                                                                            (ia =
                                                                                                q[
                                                                                                (8396 +
                                                                                                    (ka =
                                                                                                        (ja =
                                                                                                            (((ja = (ja |= ia = ((a >>>= ia) >>> 5) & 8) | (ia = ((a >>>= ia) >>> 2) & 4) | (ia = ((a >>>= ia) >>> 1) & 2)) |
                                                                                                                (ia = ((a >>>= ia) >>> 1) & 1)) +
                                                                                                                (a >>> ia)) |
                                                                                                            0) << 3)) >>
                                                                                                2
                                                                                                ]),
                                                                                            (0 | (a = q[(ia + 8) >> 2])) == (0 | (ka = (ka + 8388) | 0)) ? ((ma = ed(ja) & ma), (q[2087] = ma)) : ((q[(a + 12) >> 2] = ka), (q[(ka + 8) >> 2] = a)),
                                                                                            (a = (ia + 8) | 0),
                                                                                            (q[(ia + 4) >> 2] = 3 | na),
                                                                                            (q[(4 + (oa = (ia + na) | 0)) >> 2] = 1 | (la = ((ja <<= 3) - na) | 0)),
                                                                                            (q[(ia + ja) >> 2] = la),
                                                                                            pa &&
                                                                                            ((ia = (8388 + ((ja = pa >>> 3) << 3)) | 0),
                                                                                                (ka = q[2092]),
                                                                                                (ja = (ja = 1 << ja) & ma ? q[(ia + 8) >> 2] : ((q[2087] = ja | ma), ia)),
                                                                                                (q[(ia + 8) >> 2] = ka),
                                                                                                (q[(ja + 12) >> 2] = ka),
                                                                                                (q[(ka + 12) >> 2] = ia),
                                                                                                (q[(ka + 8) >> 2] = ja)),
                                                                                            (q[2092] = oa),
                                                                                            (q[2089] = la);
                                                                                        break a;
                                                                                    }
                                                                                    if (!(ra = q[2088])) break k;
                                                                                    for (
                                                                                        ja = ia = ((a = ((ra & (0 - ra)) - 1) | 0) >>> 12) & 16,
                                                                                        ia =
                                                                                        q[
                                                                                        (8652 +
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
                                                                                    for (; (oa = ja), (a = q[(ja = ((la = a) + 20) | 0) >> 2]) || ((ja = (la + 16) | 0), (a = q[(la + 16) >> 2])););
                                                                                    q[oa >> 2] = 0;
                                                                                    break b;
                                                                                }
                                                                                if (((na = -1), !(4294967231 < a >>> 0) && ((na = -8 & (ia = (a + 11) | 0)), (pa = q[2088])))) {
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
                                                                                            if ((ka = q[(8652 + (ma << 2)) >> 2]))
                                                                                                for (ia = na << (31 == (0 | ma) ? 0 : (25 - (ma >>> 1)) | 0), a = 0; ;) {
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
                                                                                                        (8652 +
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
                                                                                    if (!(!la | (ja >>> 0 >= (q[2089] - na) >>> 0))) {
                                                                                        if (((oa = q[(la + 24) >> 2]), (0 | la) != (0 | (ia = q[(la + 12) >> 2])))) {
                                                                                            (a = q[(la + 8) >> 2]), (q[(a + 12) >> 2] = ia), (q[(ia + 8) >> 2] = a);
                                                                                            break c;
                                                                                        }
                                                                                        if (!(a = q[(ka = (la + 20) | 0) >> 2])) {
                                                                                            if (!(a = q[(la + 16) >> 2])) break i;
                                                                                            ka = (la + 16) | 0;
                                                                                        }
                                                                                        for (; (ma = ka), (a = q[(ka = ((ia = a) + 20) | 0) >> 2]) || ((ka = (ia + 16) | 0), (a = q[(ia + 16) >> 2])););
                                                                                        q[ma >> 2] = 0;
                                                                                        break c;
                                                                                    }
                                                                                }
                                                                            }
                                                                            if (na >>> 0 <= (ia = q[2089]) >>> 0) {
                                                                                (a = q[2092]),
                                                                                    16 <= (ja = (ia - na) | 0) >>> 0
                                                                                        ? ((q[2089] = ja), (q[2092] = ka = (a + na) | 0), (q[(ka + 4) >> 2] = 1 | ja), (q[(a + ia) >> 2] = ja), (q[(a + 4) >> 2] = 3 | na))
                                                                                        : ((q[2092] = 0), (q[2089] = 0), (q[(a + 4) >> 2] = 3 | ia), (q[(4 + (ia = (a + ia) | 0)) >> 2] = 1 | q[(ia + 4) >> 2])),
                                                                                    (a = (a + 8) | 0);
                                                                                break a;
                                                                            }
                                                                            if (na >>> 0 < (ka = q[2090]) >>> 0) {
                                                                                (q[2090] = ia = (ka - na) | 0), (a = q[2093]), (q[2093] = ja = (a + na) | 0), (q[(ja + 4) >> 2] = 1 | ia), (q[(a + 4) >> 2] = 3 | na), (a = (a + 8) | 0);
                                                                                break a;
                                                                            }
                                                                            if (
                                                                                (ja =
                                                                                    (ma =
                                                                                        ((ja = la = (na + 47) | (a = 0)) +
                                                                                            (ia = q[2205]
                                                                                                ? q[2207]
                                                                                                : ((q[2208] = -1),
                                                                                                    (q[2209] = -1),
                                                                                                    (q[2206] = 4096),
                                                                                                    (q[2207] = 4096),
                                                                                                    (q[2205] = ((12 + sa) & -16) ^ 1431655768),
                                                                                                    (q[2210] = 0),
                                                                                                    (q[2198] = 0),
                                                                                                    4096))) |
                                                                                        0) & (oa = (0 - ia) | 0)) >>>
                                                                                0 <=
                                                                                na >>> 0
                                                                            )
                                                                                break a;
                                                                            if ((ia = q[2197]) && ((qa = ((pa = q[2195]) + ja) | 0) >>> 0 <= pa >>> 0) | (ia >>> 0 < qa >>> 0)) break a;
                                                                            if (4 & r[8792]) break f;
                                                                            v: {
                                                                                w: {
                                                                                    if ((ia = q[2093]))
                                                                                        for (a = 8796; ;) {
                                                                                            if (((pa = q[a >> 2]) + q[(a + 4) >> 2]) >>> 0 > ia >>> 0 && pa >>> 0 <= ia >>> 0) break w;
                                                                                            if (!(a = q[(a + 8) >> 2])) break;
                                                                                        }
                                                                                    if (-1 == (0 | (ia = ea(0)))) break g;
                                                                                    if (((ma = ja), ((ma = (ka = ((a = q[2206]) + -1) | 0) & ia ? (((ja - ia) | 0) + ((ia + ka) & (0 - a))) | 0 : ma) >>> 0 <= na >>> 0) | (2147483646 < ma >>> 0)))
                                                                                        break g;
                                                                                    if ((a = q[2197]) && ((oa = ((ka = q[2195]) + ma) | 0) >>> 0 <= ka >>> 0) | (a >>> 0 < oa >>> 0)) break g;
                                                                                    if ((0 | ia) != (0 | (a = ea(ma)))) break v;
                                                                                    break e;
                                                                                }
                                                                                if (2147483646 < (ma = oa & (ma - ka)) >>> 0) break g;
                                                                                if ((0 | (ia = ea(ma))) == ((q[a >> 2] + q[(a + 4) >> 2]) | 0)) break h;
                                                                                a = ia;
                                                                            }
                                                                            if (!(((na + 48) >>> 0 <= ma >>> 0) | (2147483646 < ma >>> 0) | (-1 == (0 | (ia = a))))) {
                                                                                if (2147483646 < (a = ((a = q[2207]) + ((la - ma) | 0)) & (0 - a)) >>> 0) break e;
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
                                                            q[2198] = 4 | q[2198];
                                                        }
                                                        if (2147483646 < ja >>> 0) break d;
                                                        if (((ia = ea(ja)), ((a = ea(0)) >>> 0 <= ia >>> 0) | (-1 == (0 | ia)) | (-1 == (0 | a)))) break d;
                                                        if ((ma = (a - ia) | 0) >>> 0 <= (na + 40) >>> 0) break d;
                                                    }
                                                    (a = (q[2195] + ma) | 0), (q[2195] = a) >>> 0 > t[2196] && (q[2196] = a);
                                                    x: {
                                                        y: {
                                                            z: {
                                                                if ((ja = q[2093])) {
                                                                    for (a = 8796; ;) {
                                                                        if ((((ka = q[a >> 2]) + (la = q[(a + 4) >> 2])) | 0) == (0 | ia)) break z;
                                                                        if (!(a = q[(a + 8) >> 2])) break;
                                                                    }
                                                                    break y;
                                                                }
                                                                for (
                                                                    ((a = q[2091]) >>> 0 <= ia >>> 0 && a) || (q[2091] = ia), a = 0, q[2200] = ma, q[2199] = ia, q[2095] = -1, q[2096] = q[2205], q[2202] = 0;
                                                                    (q[(8396 + (ja = a << 3)) >> 2] = ka = (ja + 8388) | 0), (q[(ja + 8400) >> 2] = ka), 32 != (0 | (a = (a + 1) | 0));

                                                                );
                                                                (q[2090] = ka = ((a = (ma + -40) | 0) - (ja = (ia + 8) & 7 ? (-8 - ia) & 7 : 0)) | 0),
                                                                    (q[2093] = ja = (ia + ja) | 0),
                                                                    (q[(ja + 4) >> 2] = 1 | ka),
                                                                    (q[(4 + ((a + ia) | 0)) >> 2] = 40),
                                                                    (q[2094] = q[2209]);
                                                                break x;
                                                            }
                                                            if (!((8 & r[(a + 12) | 0]) | (ia >>> 0 <= ja >>> 0) | (ja >>> 0 < ka >>> 0))) {
                                                                (q[(a + 4) >> 2] = la + ma),
                                                                    (q[2093] = ia = ((a = (ja + 8) & 7 ? (-8 - ja) & 7 : 0) + ja) | 0),
                                                                    (ka = (q[2090] + ma) | 0),
                                                                    (q[2090] = a = (ka - a) | 0),
                                                                    (q[(ia + 4) >> 2] = 1 | a),
                                                                    (q[(4 + ((ja + ka) | 0)) >> 2] = 40),
                                                                    (q[2094] = q[2209]);
                                                                break x;
                                                            }
                                                        }
                                                        ia >>> 0 < (la = q[2091]) >>> 0 && ((q[2091] = ia), (la = 0)), (ka = (ia + ma) | 0), (a = 8796);
                                                        A: {
                                                            B: {
                                                                C: {
                                                                    D: {
                                                                        E: {
                                                                            F: {
                                                                                for (; (0 | ka) != q[a >> 2];) if (!(a = q[(a + 8) >> 2])) break F;
                                                                                if (!(8 & r[(a + 12) | 0])) break E;
                                                                            }
                                                                            for (a = 8796; ;) {
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
                                                                            (q[2093] = oa), (a = (q[2090] + a) | 0), (q[2090] = a), (q[(oa + 4) >> 2] = 1 | a);
                                                                            break B;
                                                                        }
                                                                        if (q[2092] == (0 | ia)) {
                                                                            (q[2092] = oa), (a = (q[2089] + a) | 0), (q[2089] = a), (q[(oa + 4) >> 2] = 1 | a), (q[(a + oa) >> 2] = a);
                                                                            break B;
                                                                        }
                                                                        if (1 == (3 & (ja = q[(ia + 4) >> 2]))) {
                                                                            ra = -8 & ja;
                                                                            G: if (ja >>> 0 <= 255)
                                                                                (la = ja >>> 3),
                                                                                    (ja = q[(ia + 8) >> 2]),
                                                                                    (0 | (ka = q[(ia + 12) >> 2])) == (0 | ja) ? ((ua = q[2087] & ed(la)), (q[2087] = ua)) : ((q[(ja + 12) >> 2] = ka), (q[(ka + 8) >> 2] = ja));
                                                                            else {
                                                                                if (((pa = q[(ia + 24) >> 2]), (0 | (ma = q[(ia + 12) >> 2])) != (0 | ia))) (ja = q[(ia + 8) >> 2]), (q[(ja + 12) >> 2] = ma), (q[(ma + 8) >> 2] = ja);
                                                                                else if ((na = (na = q[(ka = (ia + 20) | 0) >> 2]) || q[(ka = (ia + 16) | 0) >> 2])) {
                                                                                    for (; (ja = ka), (na = q[(ka = ((ma = na) + 20) | 0) >> 2]) || ((ka = (ma + 16) | 0), (na = q[(ma + 16) >> 2])););
                                                                                    q[ja >> 2] = 0;
                                                                                } else ma = 0;
                                                                                if (pa) {
                                                                                    ja = q[(ia + 28) >> 2];
                                                                                    J: {
                                                                                        if (q[(ka = (8652 + (ja << 2)) | 0) >> 2] == (0 | ia)) {
                                                                                            if ((q[ka >> 2] = ma)) break J;
                                                                                            (ua = q[2088] & ed(ja)), (q[2088] = ua);
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
                                                                            (a = (8388 + ((ia = a >>> 3) << 3)) | 0),
                                                                                (ia = (ja = q[2087]) & (ia = 1 << ia) ? q[(a + 8) >> 2] : ((q[2087] = ia | ja), a)),
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
                                                                                (ja = (8652 + (ia << 2)) | (q[(oa + 20) >> 2] = 0)),
                                                                                (ka = q[2088]) & (la = 1 << ia))
                                                                        ) {
                                                                            for (ka = a << (31 == (0 | ia) ? 0 : (25 - (ia >>> 1)) | 0), ia = q[ja >> 2]; ;) {
                                                                                if ((-8 & q[((ja = ia) + 4) >> 2]) == (0 | a)) break C;
                                                                                if (((ia = ka >>> 29), (ka <<= 1), !(ia = q[(16 + (la = ((4 & ia) + ja) | 0)) >> 2]))) break;
                                                                            }
                                                                            q[(la + 16) >> 2] = oa;
                                                                        } else (q[2088] = ka | la), (q[ja >> 2] = oa);
                                                                        (q[(oa + 24) >> 2] = ja), (q[(oa + 12) >> 2] = oa), (q[(oa + 8) >> 2] = oa);
                                                                        break B;
                                                                    }
                                                                    for (
                                                                        q[2090] = oa = ((a = (ma + -40) | 0) - (ka = (ia + 8) & 7 ? (-8 - ia) & 7 : 0)) | 0,
                                                                        q[2093] = ka = (ia + ka) | 0,
                                                                        q[(ka + 4) >> 2] = 1 | oa,
                                                                        q[(4 + ((a + ia) | 0)) >> 2] = 40,
                                                                        q[2094] = q[2209],
                                                                        q[((ka = (a = (((la + ((la + -39) & 7 ? (39 - la) & 7 : 0)) | 0) - 47) | 0) >>> 0 < (ja + 16) >>> 0 ? ja : a) + 4) >> 2] = 27,
                                                                        a = q[2202],
                                                                        q[(ka + 16) >> 2] = q[2201],
                                                                        q[(ka + 20) >> 2] = a,
                                                                        a = q[2200],
                                                                        q[(ka + 8) >> 2] = q[2199],
                                                                        q[(ka + 12) >> 2] = a,
                                                                        q[2201] = ka + 8,
                                                                        q[2200] = ma,
                                                                        q[2199] = ia,
                                                                        a = (ka + 24) | (q[2202] = 0);
                                                                        (q[(a + 4) >> 2] = 7), (ia = (a + 8) | 0), (a = (a + 4) | 0), ia >>> 0 < la >>> 0;

                                                                    );
                                                                    if ((0 | ja) == (0 | ka)) break x;
                                                                    if (((q[(ka + 4) >> 2] = -2 & q[(ka + 4) >> 2]), (q[(ja + 4) >> 2] = 1 | (la = (ka - ja) | 0)), (q[ka >> 2] = la) >>> 0 <= 255)) {
                                                                        (a = (8388 + ((ia = la >>> 3) << 3)) | 0),
                                                                            (ia = (ka = q[2087]) & (ia = 1 << ia) ? q[(a + 8) >> 2] : ((q[2087] = ia | ka), a)),
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
                                                                            (ia = (8652 + ((q[((ia = ja) + 28) >> 2] = a) << 2)) | 0),
                                                                            (ka = q[2088]) & (ma = 1 << a))
                                                                    ) {
                                                                        for (a = la << (31 == (0 | a) ? 0 : (25 - (a >>> 1)) | 0), ia = q[ia >> 2]; ;) {
                                                                            if ((0 | la) == (-8 & q[((ka = ia) + 4) >> 2])) break A;
                                                                            if (((ia = a >>> 29), (a <<= 1), !(ia = q[(16 + (ma = (ka + (4 & ia)) | 0)) >> 2]))) break;
                                                                        }
                                                                        (q[(ma + 16) >> 2] = ja), (q[(ja + 24) >> 2] = ka);
                                                                    } else (q[2088] = ka | ma), (q[ia >> 2] = ja), (q[(ja + 24) >> 2] = ia);
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
                                                    if (!((a = q[2090]) >>> 0 <= na >>> 0)) {
                                                        (q[2090] = ia = (a - na) | 0), (a = q[2093]), (q[2093] = ja = (a + na) | 0), (q[(ja + 4) >> 2] = 1 | ia), (q[(a + 4) >> 2] = 3 | na), (a = (a + 8) | 0);
                                                        break a;
                                                    }
                                                }
                                                (q[2086] = 48), (a = 0);
                                                break a;
                                            }
                                            Q: if (oa) {
                                                a = q[(la + 28) >> 2];
                                                R: {
                                                    if (q[(ka = (8652 + (a << 2)) | 0) >> 2] == (0 | la)) {
                                                        if ((q[ka >> 2] = ia)) break R;
                                                        (pa = ed(a) & pa), (q[2088] = pa);
                                                        break Q;
                                                    }
                                                    if (!(q[(oa + (q[(oa + 16) >> 2] == (0 | la) ? 16 : 20)) >> 2] = ia)) break Q;
                                                }
                                                (q[(ia + 24) >> 2] = oa), (a = q[(la + 16) >> 2]) && ((q[(ia + 16) >> 2] = a), (q[(a + 24) >> 2] = ia)), (a = q[(la + 20) >> 2]) && ((q[(ia + 20) >> 2] = a), (q[(a + 24) >> 2] = ia));
                                            }
                                            S: if (ja >>> 0 <= 15) (q[(la + 4) >> 2] = 3 | (a = (ja + na) | 0)), (q[(4 + (a = (a + la) | 0)) >> 2] = 1 | q[(a + 4) >> 2]);
                                            else if (((q[(la + 4) >> 2] = 3 | na), (q[(4 + (ka = (la + na) | 0)) >> 2] = 1 | ja), (q[(ja + ka) >> 2] = ja) >>> 0 <= 255))
                                                (a = (8388 + ((ia = ja >>> 3) << 3)) | 0),
                                                    (ia = (ja = q[2087]) & (ia = 1 << ia) ? q[(a + 8) >> 2] : ((q[2087] = ia | ja), a)),
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
                                                    (ia = (8652 + (a << 2)) | (q[(ka + 20) >> 2] = 0));
                                                V: {
                                                    if ((na = 1 << a) & pa) {
                                                        for (a = ja << (31 == (0 | a) ? 0 : (25 - (a >>> 1)) | 0), na = q[ia >> 2]; ;) {
                                                            if ((-8 & q[((ia = na) + 4) >> 2]) == (0 | ja)) break V;
                                                            if (((na = a >>> 29), (a <<= 1), !(na = q[(16 + (ma = ((4 & na) + ia) | 0)) >> 2]))) break;
                                                        }
                                                        q[(ma + 16) >> 2] = ka;
                                                    } else (q[2088] = na | pa), (q[ia >> 2] = ka);
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
                                                if (q[(ja = (8652 + (a << 2)) | 0) >> 2] == (0 | ia)) {
                                                    if ((q[ja >> 2] = la)) break Y;
                                                    (ua = ed(a) & ra), (q[2088] = ua);
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
                                                ((a = (8388 + ((ja = pa >>> 3) << 3)) | 0),
                                                    (la = q[2092]),
                                                    (ja = (ja = 1 << ja) & ma ? q[(a + 8) >> 2] : ((q[2087] = ja | ma), a)),
                                                    (q[(a + 8) >> 2] = la),
                                                    (q[(ja + 12) >> 2] = la),
                                                    (q[(la + 12) >> 2] = a),
                                                    (q[(la + 8) >> 2] = ja)),
                                                (q[2092] = na),
                                                (q[2089] = ka)),
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
                                            c: for (; ;) {
                                                (0 | Oa) < 0 || (Oa = ((2147483647 - Oa) | 0) < (0 | va) ? ((q[2086] = 61), -1) : (va + Oa) | 0);
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
                                                                                                        for (; ;) {
                                                                                                            r: {
                                                                                                                s: {
                                                                                                                    t: if ((Ca = 255 & Fa)) {
                                                                                                                        if (37 != (0 | Ca)) break s;
                                                                                                                        for (Fa = va; ;) {
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
                                                                                                                        for (; ;) {
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
                                                                                                                    for (Ca = 0; ;) {
                                                                                                                        if (((Sa = Ca), (Ka = -1), 57 < (o[0 | va] + -65) >>> 0)) break a;
                                                                                                                        if (
                                                                                                                            ((q[(76 + Ba) >> 2] = Ma = (va + 1) | 0),
                                                                                                                                (Ca = o[0 | va]),
                                                                                                                                (va = Ma),
                                                                                                                                !(((Ca = r[(3295 + ((Ca + w(Sa, 58)) | 0)) | 0]) + -1) >>> 0 < 8))
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
                                                                                                                            (Pa = 3336),
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
                                                                                                                            for (; ;) {
                                                                                                                                if (!(Ia = q[Ca >> 2])) break H;
                                                                                                                                if ((Ja = (0 | (Ia = Ea((4 + Ba) | 0, Ia))) < 0) | ((Da - va) >>> 0 < Ia >>> 0)) break;
                                                                                                                                if (((Ca = (Ca + 4) | 0), !((va = (va + Ia) | 0) >>> 0 < Da >>> 0))) break H;
                                                                                                                            }
                                                                                                                            if (((Ka = -1), Ja)) break a;
                                                                                                                        }
                                                                                                                        if ((_(a, 32, Na, va, Fa), va))
                                                                                                                            for (Da = 0, Ca = q[(64 + Ba) >> 2]; ;) {
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
                                                                                                    for (va = 1; ;) {
                                                                                                        if ((a = q[((va << 2) + ya) >> 2])) {
                                                                                                            if ((Ga(((va << 3) + xa) | 0, a, wa, Aa), 10 != (0 | (va = (va + (Ka = 1)) | 0)))) continue;
                                                                                                            break a;
                                                                                                        }
                                                                                                        break;
                                                                                                    }
                                                                                                    if (((Ka = 1), 9 < va >>> 0)) break a;
                                                                                                    if (((Ka = -1), q[((va << 2) + ya) >> 2])) break a;
                                                                                                    for (; !q[(((va = (va + 1) | 0) << 2) + ya) >> 2] && 10 != (0 | va););
                                                                                                    Ka = va >>> 0 < 10 ? -1 : 1;
                                                                                                    break a;
                                                                                                }
                                                                                                va = 0 | n[za](a, v[(64 + Ba) >> 3], Na, Da, Fa, va);
                                                                                                continue;
                                                                                            }
                                                                                            (Ca = (va = La((Ia = (va = q[(64 + Ba) >> 2]) || 3346), Da)) || (Da + Ia) | 0), (Fa = Ja), (Da = va ? (va - Ia) | 0 : Da);
                                                                                            break f;
                                                                                        }
                                                                                        (o[(55 + Ba) | 0] = q[(64 + Ba) >> 2]), (Da = 1), (Ia = Ta), (Fa = Ja);
                                                                                        break f;
                                                                                    }
                                                                                    if (((va = Ja = q[(68 + Ba) >> 2]), (Ia = q[(64 + Ba) >> 2]), (0 | va) < -1 || ((0 | va) <= -1 && !(4294967295 < Ia >>> 0)))) {
                                                                                        (va = (0 - ((va + (0 < Ia >>> 0)) | 0)) | 0), (q[(64 + Ba) >> 2] = Ia = (0 - Ia) | 0), (q[(68 + Ba) >> 2] = va), (Ka = 1), (Pa = 3336);
                                                                                        break h;
                                                                                    }
                                                                                    if (2048 & Fa) {
                                                                                        (Ka = 1), (Pa = 3337);
                                                                                        break h;
                                                                                    }
                                                                                    Pa = (Ka = 1 & Fa) ? 3338 : 3336;
                                                                                    break h;
                                                                                }
                                                                                if (
                                                                                    ((Ia = (function (a, Il, Rm) {
                                                                                        if (a | Il) for (; (o[0 | (Rm = (Rm + -1) | 0)] = (7 & a) | 48), (a = ((7 & Il) << 29) | (a >>> 3)) | (Il >>>= 3););
                                                                                        return Rm;
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
                                                                            ((Ia = (function (a, Il, Rm, Sm) {
                                                                                if (a | Il) for (; (o[0 | (Rm = (Rm + -1) | 0)] = r[(3824 + (15 & a)) | 0] | Sm), (a = ((15 & Il) << 28) | (a >>> 4)) | (Il >>>= 4););
                                                                                return Rm;
                                                                            })(q[(64 + Ba) >> 2], q[(68 + Ba) >> 2], Qa, 32 & va)),
                                                                                !(8 & Fa) | !(q[(64 + Ba) >> 2] | q[(68 + Ba) >> 2]))
                                                                        )
                                                                            break g;
                                                                        (Pa = (3336 + (va >>> 4)) | 0), (Ka = 2);
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
                                                                (Ia = q[(64 + Ba) >> 2]), (va = q[(68 + Ba) >> 2]), (Pa = 3336);
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
                                        for (; !((0 | (ya = r[0 | wa])) != (0 | va) || !(xa = (xa + -1) | 0) | !ya);) if (((wa = (wa + 1) | 0), (va = r[(a + 1) | 0]), (a = (a + 1) | 0), !va)) break a;
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
                                        for (Ha = a; ;) {
                                            if (((Ha = ((La = (Ha + -4) | 0) - q[(((Va = (Aa + -2) | 0) << 2) + Ea) >> 2]) | 0), 0 <= (0 | n[5](a, Ha)) && -1 < (0 | n[5](a, La)))) break a;
                                            if (((a = ((Ua << 2) + Ga) | 0), 0 <= (0 | n[5](Ha, La)) ? ((q[a >> 2] = Ha), (Va = (Aa + -1) | 0)) : (Ha = q[a >> 2] = La), (Ua = (Ua + 1) | 0), (0 | Va) < 2)) break a;
                                            (a = q[Ga >> 2]), (Aa = Va);
                                        }
                                    Na(Ga, Ua), (L = (240 + Ga) | 0);
                                }
                                function ua(a) {
                                    var Ea,
                                        $a,
                                        Aa = 0;
                                    if (
                                        (x(0),
                                            (function (a) {
                                                var Vg, Wg;
                                                q[(a + 428) >> 2] &&
                                                    ((Wg = q[(a + 332) >> 2]),
                                                        $(q[(a + 460) >> 2], q[(a + 436) >> 2], (Vg = Wg << 2)),
                                                        $(q[(a + 464) >> 2], q[(a + 440) >> 2], Vg),
                                                        $(q[(a + 468) >> 2], q[(a + 448) >> 2], Vg),
                                                        r[(q[a >> 2] + 4) | 0] < 4 || ($(q[(a + 472) >> 2], q[(a + 452) >> 2], (Vg = Wg << 4)), $(q[(a + 476) >> 2], q[(a + 456) >> 2], Vg)));
                                            })(a),
                                            (function (a) {
                                                var ke,
                                                    le,
                                                    me,
                                                    fe = 0,
                                                    ge = x(0),
                                                    he = x(0),
                                                    ie = 0,
                                                    je = x(0);
                                                x(0), x(0);
                                                if (1 <= (0 | (ie = q[a >> 2])))
                                                    for (
                                                        me = ((fe = q[(a + 4) >> 2]) + w(ie, 52)) | 0, a = q[(a + 12) >> 2];
                                                        (ge = u[a >> 2]),
                                                        u[(fe + 44) >> 2] !=
                                                            (ge = (ke = q[(fe + 16) >> 2])
                                                                ? ((he = ge),
                                                                    (ge = u[(fe + 4) >> 2]),
                                                                    (je = u[(fe + 12) >> 2]),
                                                                    (he = x(x(he - ge) / je)),
                                                                    (le = x(C(he))),
                                                                    (ie = x(y(le)) < x(2147483648) ? ~~le : -2147483648),
                                                                    x(ge + x(je * x(he - x(0 | ie)))))
                                                                : ((je = u[(fe + 4) >> 2]), (he = u[(fe + 8) >> 2]), ge < je ? je : he < ge ? he : ge))
                                                            ? ((u[(fe + 44) >> 2] = ge), (q[(fe + 48) >> 2] = 1))
                                                            : (q[(fe + 48) >> 2] = 0),
                                                        ke || (u[a >> 2] = ge),
                                                        (a = (a + 4) | 0),
                                                        (fe = (fe + 52) | 0) >>> 0 < me >>> 0;

                                                    );
                                            })((a + 540) | 0),
                                            (function (a) {
                                                var Wd,
                                                    Xd,
                                                    ae,
                                                    ce,
                                                    de,
                                                    ee,
                                                    Rd = 0,
                                                    Sd = 0,
                                                    Td = x(0),
                                                    Ud = 0,
                                                    Vd = x(0),
                                                    Yd = (x(0), x(0), 0),
                                                    Zd = x(0),
                                                    _d = 0,
                                                    $d = 0,
                                                    be = 0;
                                                x(0);
                                                if (1 <= (0 | (Ud = q[(a + 540) >> 2])))
                                                    for (de = ((Yd = q[(a + 544) >> 2]) + w(Ud, 52)) | 0, ee = q[(a + 644) >> 2]; ;) {
                                                        a: if (!(q[Yd >> 2] || (0 | (Ud = q[(Yd + 32) >> 2])) < 1))
                                                            if (((ae = ((a = q[(Yd + 28) >> 2]) + w(Ud, 28)) | 0), (ce = u[(Yd + 24) >> 2]), (Xd = u[(Yd + 20) >> 2]), (Wd = u[(Yd + 44) >> 2]), ee))
                                                                for (; ;) {
                                                                    Zd = x(($d = 0));
                                                                    h: {
                                                                        i: {
                                                                            j: {
                                                                                if ((0 | (Sd = q[a >> 2])) < 1) Rd = Ud = 0;
                                                                                else if (((_d = q[(a + 4) >> 2]), (Vd = u[_d >> 2]), (Td = x(Vd - Xd)), 1 == (0 | Sd))) (Ud = ((Wd < x(Xd + Vd)) ^ 1) | ((Td < Wd) ^ 1)), (Rd = 0);
                                                                                else {
                                                                                    if (Wd < Td) {
                                                                                        (Ud = 1), (Rd = 0);
                                                                                        break i;
                                                                                    }
                                                                                    if (((Ud = 0), Wd < x(Xd + Vd))) Rd = 0;
                                                                                    else {
                                                                                        if (((Rd = 1), (Td = u[(_d + 4) >> 2]), !(Wd < x(Xd + Td))))
                                                                                            for (; ;) {
                                                                                                if ((0 | Sd) == (0 | (Rd = (Rd + 1) | 0))) break j;
                                                                                                if (((Vd = Td), (Td = u[(_d + (Rd << 2)) >> 2]), Wd < x(Xd + Td))) break;
                                                                                            }
                                                                                        x(Td - Xd) < Wd || ((Rd = (Rd + -1) | 0), (Td = x(Td - Vd)) < ce) || (Zd = x(x(Wd - Vd) / Td));
                                                                                    }
                                                                                }
                                                                                if (Ud) break i;
                                                                                if (((_d = Sd = 1), q[(a + 16) >> 2])) break h;
                                                                                break i;
                                                                            }
                                                                            (Rd = (Sd + -1) | 0), (Ud = 1);
                                                                        }
                                                                        (_d = ((Sd = (Vd = u[(a + 12) >> 2]) != Zd) & ((Zd == x(0)) | (Vd == x(0)))) | (q[(a + 8) >> 2] != (0 | Rd))), ($d = Ud);
                                                                    }
                                                                    if (((q[(a + 20) >> 2] = _d), (q[(a + 24) >> 2] = Sd), (u[(a + 12) >> 2] = Zd), (q[(a + 16) >> 2] = $d), (q[(a + 8) >> 2] = Rd), !((a = (a + 28) | 0) >>> 0 < ae >>> 0))) break;
                                                                }
                                                            else {
                                                                if (!q[(Yd + 48) >> 2]) for (; ;) if (((q[(a + 20) >> 2] = 0), !((a = (a + 28) | (q[(a + 24) >> 2] = 0)) >>> 0 < ae >>> 0))) break a;
                                                                for (; ;) {
                                                                    Zd = x(($d = 0));
                                                                    b: {
                                                                        c: {
                                                                            d: {
                                                                                e: if (!(((Sd = 0) | (Rd = q[(_d = a) >> 2])) < 1)) {
                                                                                    if (((Ud = q[(a + 4) >> 2]), (Vd = u[Ud >> 2]), (Td = x(Vd - Xd)), 1 != (0 | Rd))) {
                                                                                        if (!(Wd < Td)) {
                                                                                            if (((Sd = 0), Wd < x(Xd + Vd))) break e;
                                                                                            Sd = 1;
                                                                                            f: if (((Td = u[(Ud + 4) >> 2]), !(Wd < x(Xd + Td)))) {
                                                                                                for (Rd = (Rd + -1) | 0; (Vd = Td), (0 | Rd) != (0 | Sd);) if (((Td = u[(Ud + ((Sd = (Sd + 1) | 0) << 2)) >> 2]), Wd < x(Xd + Td))) break f;
                                                                                                Ud = 1;
                                                                                                break c;
                                                                                            }
                                                                                            if (((Ud = 0), x(Td - Xd) < Wd)) {
                                                                                                Rd = Sd;
                                                                                                break d;
                                                                                            }
                                                                                            if (((Rd = (Sd + -1) | 0), (Td = x(Td - Vd)) < ce)) break d;
                                                                                            Zd = x(x(Wd - Vd) / Td);
                                                                                            break d;
                                                                                        }
                                                                                        (Ud = 1), (Rd = 0);
                                                                                        break c;
                                                                                    }
                                                                                    Sd = ((Wd < x(Xd + Vd)) ^ 1) | ((Td < Wd) ^ 1);
                                                                                }
                                                                                (Ud = Sd), (Rd = 0);
                                                                            }
                                                                            if (!Ud && ((be = Sd = 1), q[(a + 16) >> 2])) break b;
                                                                        }
                                                                        ($d = Ud), (be = ((Sd = (Vd = u[(a + 12) >> 2]) != Zd) & ((Zd == x(0)) | (Vd == x(0)))) | (q[(a + 8) >> 2] != (0 | Rd)));
                                                                    }
                                                                    if (((q[(_d + 20) >> 2] = be), (q[(a + 24) >> 2] = Sd), (u[(a + 12) >> 2] = Zd), (q[(a + 16) >> 2] = $d), (q[(a + 8) >> 2] = Rd), !((a = (a + 28) | 0) >>> 0 < ae >>> 0))) break;
                                                                }
                                                            }
                                                        if (!((Yd = (Yd + 52) | 0) >>> 0 < de >>> 0)) break;
                                                    }
                                            })(a),
                                            (function (a) {
                                                var rd,
                                                    sd,
                                                    td,
                                                    ud,
                                                    vd,
                                                    kd = 0,
                                                    ld = x(0),
                                                    md = 0,
                                                    nd = 0,
                                                    od = x(0),
                                                    pd = 0,
                                                    qd = x(0);
                                                x(0);
                                                if (!(r[(q[a >> 2] + 4) | 0] < 4 || (0 | (kd = q[(a + 540) >> 2])) < 1))
                                                    for (ud = ((pd = q[(a + 544) >> 2]) + w(kd, 52)) | 0, vd = q[(a + 644) >> 2]; ;) {
                                                        b: if (1 == q[pd >> 2] && !((0 | (kd = q[(pd + 40) >> 2])) < 1))
                                                            if (((sd = ((a = q[(pd + 36) >> 2]) + w(kd, 28)) | 0), (rd = u[(pd + 44) >> 2]), vd))
                                                                for (; ;) {
                                                                    qd = x((kd = 0));
                                                                    d: if (!((0 | (nd = q[a >> 2])) < 2 || ((md = q[(a + 4) >> 2]), rd <= (ld = u[md >> 2])))) {
                                                                        kd = 1;
                                                                        e: if (!(rd < (od = u[(md + 4) >> 2]))) {
                                                                            for (; (ld = od), (0 | nd) != (0 | (kd = (kd + 1) | 0));) if (rd < (od = u[(md + (kd << 2)) >> 2])) break e;
                                                                            kd = (nd + -1) | 0;
                                                                            break d;
                                                                        }
                                                                        (qd = x(x(rd - ld) / x(od - ld))), (kd = (kd + -1) | 0);
                                                                    }
                                                                    if (
                                                                        ((ld = u[(a + 16) >> 2]),
                                                                            (u[(a + 16) >> 2] = qd),
                                                                            (nd = q[(a + 12) >> 2]),
                                                                            (q[(a + 12) >> 2] = kd),
                                                                            (q[(a + 24) >> 2] = md = ld != qd),
                                                                            (q[(a + 20) >> 2] = (md & ((qd == x(0)) | (ld == x(0)))) | ((0 | kd) != (0 | nd))),
                                                                            !((a = (a + 28) | 0) >>> 0 < sd >>> 0))
                                                                    )
                                                                        break;
                                                                }
                                                            else {
                                                                if (!q[(pd + 48) >> 2]) for (; ;) if (((q[(a + 20) >> 2] = 0), !((a = (a + 28) | (q[(a + 24) >> 2] = 0)) >>> 0 < sd >>> 0))) break b;
                                                                for (; ;) {
                                                                    qd = x((nd = 0));
                                                                    c: if (!((0 | (td = q[a >> 2])) < 2 || ((md = q[(a + 4) >> 2]), rd <= (ld = u[md >> 2])))) {
                                                                        if (((kd = 1), !(rd < (od = u[(md + 4) >> 2]))))
                                                                            for (nd = (td + -1) | 0; ;) {
                                                                                if (((ld = od), (0 | kd) == (0 | nd))) break c;
                                                                                if (rd < (od = u[(md + ((kd = (kd + 1) | 0) << 2)) >> 2])) break;
                                                                            }
                                                                        (qd = x(x(rd - ld) / x(od - ld))), (nd = (kd + -1) | 0);
                                                                    }
                                                                    if (
                                                                        ((ld = u[(a + 16) >> 2]),
                                                                            (u[(a + 16) >> 2] = qd),
                                                                            (kd = q[(a + 12) >> 2]),
                                                                            (q[(a + 12) >> 2] = nd),
                                                                            (q[(a + 24) >> 2] = md = ld != qd),
                                                                            (q[(a + 20) >> 2] = (md & ((qd == x(0)) | (ld == x(0)))) | ((0 | kd) != (0 | nd))),
                                                                            !((a = (a + 28) | 0) >>> 0 < sd >>> 0))
                                                                    )
                                                                        break;
                                                                }
                                                            }
                                                        if (!((pd = (pd + 52) | 0) >>> 0 < ud >>> 0)) break;
                                                    }
                                            })(a),
                                            (function (a) {
                                                var Id,
                                                    Jd,
                                                    Md,
                                                    Nd,
                                                    Od,
                                                    Pd,
                                                    Qd,
                                                    wd = 0,
                                                    xd = 0,
                                                    yd = 0,
                                                    zd = 0,
                                                    Ad = 0,
                                                    Bd = 0,
                                                    Cd = 0,
                                                    Dd = x(0),
                                                    Ed = 0,
                                                    Gd = 0,
                                                    Hd = 0,
                                                    Kd = 0,
                                                    Ld = 0;
                                                if (1 <= (0 | (xd = q[(a + 564) >> 2])))
                                                    for (Pd = ((Ad = q[(a + 568) >> 2]) + w(xd, 36)) | 0, Nd = q[(a + 644) >> 2]; ;) {
                                                        a: {
                                                            if (!(Bd = ((yd = zd = xd = 0) | (Jd = q[(Ad + 4) >> 2])) < 1))
                                                                for (Ed = q[Ad >> 2], a = Kd = 0; ;) {
                                                                    if (((wd = q[(Ed + (a << 2)) >> 2]), q[(wd + 16) >> 2])) {
                                                                        (wd = 1), (Ld = 0);
                                                                        break a;
                                                                    }
                                                                    if (((yd = yd || q[(wd + 24) >> 2]), (xd = xd || q[(wd + 20) >> 2]), (zd = ((u[(wd + 12) >> 2] != x(0)) + zd) | 0), (0 | Jd) == (0 | (a = (a + 1) | 0)))) break;
                                                                }
                                                            if (((wd = 0), (Kd = Nd ? 1 : yd) | (Ld = Nd ? 1 : xd) && ((q[(Ad + 12) >> 2] = Ed = 1 << zd), 31 != (0 | zd)))) {
                                                                for (
                                                                    xd = q[(Ad + 20) >> 2],
                                                                    Od = q[Ad >> 2],
                                                                    yd = ((a = q[(Ad + 16) >> 2]) + (Cd = Ed << 2)) | 0,
                                                                    yd = ca(a, 0, (4 + (((-1 ^ a) + ((a = (a + 4) | 0) >>> 0 < yd >>> 0 ? yd : a)) | 0)) & -4),
                                                                    Cd = (xd + Cd) | 0,
                                                                    a = xd;
                                                                    (q[a >> 2] = 1065353216), (a = (a + 4) | 0) >>> 0 < Cd >>> 0;

                                                                );
                                                                if (!Bd) {
                                                                    if (((Bd = 0), (Cd = wd = 1), zd))
                                                                        for (; ;) {
                                                                            if (((zd = q[((Bd << 2) + Od) >> 2]), (Gd = q[(zd + 8) >> 2]), (Hd = w(Gd, wd)), (Dd = u[(zd + 12) >> 2]) != x((a = 0)))) {
                                                                                for (
                                                                                    q[yd >> 2] = Hd + q[yd >> 2], u[xd >> 2] = x(x(1) - Dd) * u[xd >> 2], Gd = w((Gd + (a = 1)) | 0, wd);
                                                                                    (Dd = u[(zd + 12) >> 2]),
                                                                                    (Qd = q[(Md = ((Id = a << 2) + yd) | 0) >> 2]),
                                                                                    (q[Md >> 2] = Qd + ((Md = a & Cd) ? Gd : Hd)),
                                                                                    (u[(Id = (xd + Id) | 0) >> 2] = (Md ? Dd : x(x(1) - Dd)) * u[Id >> 2]),
                                                                                    (0 | Ed) != (0 | (a = (a + 1) | 0));

                                                                                );
                                                                                Cd <<= 1;
                                                                            } else for (; (q[(Gd = (yd + (a << 2)) | 0) >> 2] = Hd + q[Gd >> 2]), (0 | Ed) != (0 | (a = (a + 1) | 0)););
                                                                            if (((wd = w(q[zd >> 2], wd)), (0 | Jd) == (0 | (Bd = (Bd + 1) | 0)))) break;
                                                                        }
                                                                    else
                                                                        for (; ;) {
                                                                            if (((zd = q[((Bd << 2) + Od) >> 2]), (Cd = w(q[(zd + 8) >> 2], wd)), (Dd = u[(zd + 12) >> 2]) != x((a = 0))))
                                                                                (q[yd >> 2] = Cd + q[yd >> 2]), (u[xd >> 2] = x(x(1) - Dd) * u[xd >> 2]);
                                                                            else for (; (q[(Hd = (yd + (a << 2)) | 0) >> 2] = Cd + q[Hd >> 2]), (0 | Ed) != (0 | (a = (a + 1) | 0)););
                                                                            if (((wd = w(q[zd >> 2], wd)), (0 | Jd) == (0 | (Bd = (Bd + 1) | 0)))) break;
                                                                        }
                                                                    wd = 0;
                                                                }
                                                            }
                                                        }
                                                        if (((q[(Ad + 32) >> 2] = wd), (q[(Ad + 24) >> 2] = Ld), (q[(Ad + 28) >> 2] = Kd), !((Ad = (Ad + 36) | 0) >>> 0 < Pd >>> 0))) break;
                                                    }
                                            })(a),
                                            (function (a) {
                                                var gd,
                                                    hd,
                                                    id,
                                                    jd,
                                                    Wc = x(0),
                                                    Xc = 0,
                                                    Yc = 0,
                                                    Zc = 0,
                                                    _c = 0,
                                                    $c = 0,
                                                    ad = x(0),
                                                    bd = x(0),
                                                    cd = x(0),
                                                    dd = 0,
                                                    ed = 0,
                                                    fd = 0;
                                                if (!(r[(q[a >> 2] + 4) | 0] < 4 || (0 | (Xc = q[(a + 588) >> 2])) < 1))
                                                    for (jd = ((Zc = q[(a + 592) >> 2]) + w(Xc, 48)) | 0, gd = q[(a + 644) >> 2]; ;) {
                                                        if (((a = q[Zc >> 2]), (ed = gd ? 1 : q[(a + 20) >> 2]) | (fd = gd ? 1 : q[(a + 24) >> 2]))) {
                                                            c: {
                                                                d: {
                                                                    ($c = Zc), (_c = q[(a + 8) >> 2]), (Xc = q[(a + 12) >> 2]), (Wc = u[(a + 16) >> 2]), (a = (0 | _c) != (0 | Xc));
                                                                    e: {
                                                                        if (Wc != x(0)) {
                                                                            if (((a = (Xc + 1) | 0), (0 | Xc) == (0 | _c))) {
                                                                                (q[(Zc + 8) >> 2] = ed = 1), (Wc = x(x(1) - Wc)), (fd = 1);
                                                                                break e;
                                                                            }
                                                                            a = (0 | a) == (0 | _c) ? 1 : 2;
                                                                        }
                                                                        if (((q[($c + 8) >> 2] = a), !fd)) break d;
                                                                        a = Xc;
                                                                    }
                                                                    (u[(Zc + 24) >> 2] = Wc), (u[(Zc + 20) >> 2] = x(1) - Wc);
                                                                    break c;
                                                                }
                                                                (fd = 0), (a = Xc);
                                                            }
                                                            ed ? ((q[(Zc + 12) >> 2] = a), (q[(Zc + 16) >> 2] = a + 1)) : (ed = 0);
                                                        } else ed = fd = 0;
                                                        g: if ((0 | (hd = q[(Zc + 36) >> 2])) < 1) cd = x(1);
                                                        else {
                                                            if (((id = q[(Zc + 40) >> 2]), (a = 0), (cd = x(1)), !gd))
                                                                for (; ;) {
                                                                    h: {
                                                                        i: {
                                                                            if (((Xc = q[((a << 2) + id) >> 2]), (Yc = q[Xc >> 2]))) {
                                                                                if (!q[(Yc + 48) >> 2]) {
                                                                                    Wc = u[(Xc + 16) >> 2];
                                                                                    break h;
                                                                                }
                                                                                if ((0 | (_c = q[(Xc + 12) >> 2])) < 1) {
                                                                                    (Wc = x(1)), (u[(Xc + 16) >> 2] = 1);
                                                                                    break h;
                                                                                }
                                                                                if (((dd = q[(Xc + 8) >> 2]), 1 != (0 | _c) && ((ad = u[(Yc + 44) >> 2]), ($c = q[(Xc + 4) >> 2]), !(ad <= (bd = u[$c >> 2]))))) break i;
                                                                                (Wc = u[dd >> 2]), (u[(Xc + 16) >> 2] = Wc);
                                                                                break h;
                                                                            }
                                                                            (q[(Xc + 16) >> 2] = 1065353216), (Wc = x(1));
                                                                            break h;
                                                                        }
                                                                        Yc = 1;
                                                                        j: if (!(ad < (Wc = u[($c + 4) >> 2]))) {
                                                                            for (; (bd = Wc), (0 | _c) != (0 | (Yc = (Yc + 1) | 0));) if (ad < (Wc = u[($c + (Yc << 2)) >> 2])) break j;
                                                                            (Wc = u[(((dd + (_c << 2)) | 0) - 4) >> 2]), (u[(Xc + 16) >> 2] = Wc);
                                                                            break h;
                                                                        }
                                                                        ($c = Xc), (Wc = x(x(ad - bd) / x(Wc - bd))), (Wc = x(x(Wc * u[(Xc = (dd + (Yc << 2)) | 0) >> 2]) + x(u[(Xc + -4) >> 2] * x(x(1) - Wc)))), (u[($c + 16) >> 2] = Wc);
                                                                    }
                                                                    if (((cd = cd < Wc ? cd : Wc), (0 | hd) == (0 | (a = (a + 1) | 0)))) break g;
                                                                }
                                                            for (; ;) {
                                                                (Xc = q[((a << 2) + id) >> 2]), (Yc = q[Xc >> 2]), (Wc = x(1));
                                                                l: if (Yc && ((dd = q[(Xc + 12) >> 2]), (Wc = x(1)), !((0 | dd) < 1)) && ((_c = q[(Xc + 8) >> 2]), (Wc = u[_c >> 2]), 1 != (0 | dd))) {
                                                                    m: {
                                                                        if (((ad = u[(Yc + 44) >> 2]), ($c = q[(Xc + 4) >> 2]), ad <= (bd = u[$c >> 2]))) {
                                                                            Wc = u[_c >> 2];
                                                                            break l;
                                                                        }
                                                                        if (((Yc = 1), !(ad < (Wc = u[($c + 4) >> 2])))) {
                                                                            for (; (bd = Wc), (0 | dd) != (0 | (Yc = (Yc + 1) | 0));) if (ad < (Wc = u[($c + (Yc << 2)) >> 2])) break m;
                                                                            Wc = u[(((_c + (dd << 2)) | 0) - 4) >> 2];
                                                                            break l;
                                                                        }
                                                                    }
                                                                    (Wc = x(x(ad - bd) / x(Wc - bd))), (Wc = x(x(Wc * u[(Yc = (_c + (Yc << 2)) | 0) >> 2]) + x(u[(Yc + -4) >> 2] * x(x(1) - Wc))));
                                                                }
                                                                if (((cd = cd < (u[(Xc + 16) >> 2] = Wc) ? cd : Wc), (0 | hd) == (0 | (a = (a + 1) | 0)))) break;
                                                            }
                                                        }
                                                        if (((q[(Zc + 32) >> 2] = fd), (q[(Zc + 28) >> 2] = ed), (u[(Zc + 44) >> 2] = cd), !((Zc = (Zc + 48) | 0) >>> 0 < jd >>> 0))) break;
                                                    }
                                            })(a),
                                            1 <= (0 | (Ea = q[(a + 4) >> 2])))
                                    )
                                        for (Ea = ((Aa = q[(a + 52) >> 2]) + (Ea << 2)) | 0; ($a = u[Aa >> 2]), (u[Aa >> 2] = $a < x(0) ? x(0) : x(A($a, x(1)))), (Aa = (Aa + 4) | 0) >>> 0 < Ea >>> 0;);
                                    !(function (a) {
                                        var Fe,
                                            Ge,
                                            He,
                                            De = 0,
                                            Ee = 0;
                                        if (1 <= (0 | (Ee = q[(a + 4) >> 2])))
                                            for (
                                                He = ((De = q[(a + 8) >> 2]) + w(Ee, 12)) | 0, a = Fe = q[(a + 40) >> 2];
                                                (Ee = 0),
                                                q[(De + 8) >> 2] && ((Ge = q[(De + 4) >> 2]), (!q[((Ge << 2) + Fe) >> 2] && -1 != (0 | Ge)) || (Ee = !q[(q[De >> 2] + 32) >> 2])),
                                                (q[a >> 2] = Ee),
                                                (a = (a + 4) | 0),
                                                (De = (De + 12) | 0) >>> 0 < He >>> 0;

                                            );
                                    })(a),
                                        (function (a) {
                                            var rg,
                                                vg,
                                                wg,
                                                xg,
                                                yg,
                                                zg,
                                                Ag,
                                                pg = 0,
                                                qg = 0,
                                                sg = 0,
                                                tg = 0,
                                                ug = 0;
                                            if (1 <= (0 | (vg = q[(a + 4) >> 2])))
                                                for (xg = q[(a + 8) >> 2], wg = q[a >> 2], yg = q[(wg + 724) >> 2]; ;) {
                                                    if (
                                                        ((rg = q[(w(tg, 12) + xg) >> 2]),
                                                            (q[(rg + 28) >> 2] || q[(rg + 24) >> 2]) && ((q[((pg = tg << 2) + q[(a + 28) >> 2]) >> 2] = q[(rg + 12) >> 2]), q[(rg + 24) >> 2]) && !((0 | (sg = q[(rg + 12) >> 2])) < 1))
                                                    )
                                                        for (
                                                            sg = ((qg = q[(rg + 16) >> 2]) + (sg << 2)) | 0, zg = q[(pg + yg) >> 2], pg = (q[(a + 36) >> 2] + (ug << 2)) | 0, Ag = q[(wg + 976) >> 2];
                                                            (q[pg >> 2] = q[(((q[qg >> 2] + zg) << 2) + Ag) >> 2]), (pg = (pg + 4) | 0), (qg = (qg + 4) | 0) >>> 0 < sg >>> 0;

                                                        );
                                                    if (q[(rg + 28) >> 2] && !((0 | (pg = q[(rg + 12) >> 2])) < 1))
                                                        for (sg = ((qg = q[(rg + 20) >> 2]) + (pg << 2)) | 0, pg = (q[(a + 32) >> 2] + (ug << 2)) | 0; (q[pg >> 2] = q[qg >> 2]), (pg = (pg + 4) | 0), (qg = (qg + 4) | 0) >>> 0 < sg >>> 0;);
                                                    if (((ug = (q[(rg + 8) >> 2] + ug) | 0), (0 | vg) == (0 | (tg = (tg + 1) | 0)))) break;
                                                }
                                        })(a),
                                        n[q[1808]]((a + 12) | 0, q[(a + 36) >> 2], q[(a + 44) >> 2], q[(a + 40) >> 2]),
                                        (function (a) {
                                            var xe,
                                                ye,
                                                ze,
                                                Ae,
                                                Be,
                                                Ce,
                                                ue = 0,
                                                ve = 0,
                                                we = 0;
                                            if (1 <= (0 | (we = q[(a + 304) >> 2])))
                                                for (
                                                    ze = ((ue = q[(a + 308) >> 2]) + (we << 5)) | 0, Ae = q[(a + 264) >> 2], Be = q[(a + 144) >> 2], Ce = q[(a + 40) >> 2], we = ye = q[(a + 312) >> 2];
                                                    (xe = we),
                                                    (ve = 0),
                                                    (a = ve =
                                                        !q[(ue + 28) >> 2] || (-1 != (0 | (a = q[(ue + 4) >> 2])) && ((ve = 0), !q[((a << 2) + Ce) >> 2])) || (-1 != (0 | (a = q[(ue + 8) >> 2])) && ((ve = 0), !q[((a << 2) + ye) >> 2]))
                                                            ? ve
                                                            : !q[(q[ue >> 2] + 32) >> 2]),
                                                    (q[xe >> 2] = a),
                                                    (xe = q[(ue + 12) >> 2]) >>> 0 <= 1 ? (xe - 1 ? (q[((q[(ue + 16) >> 2] << 2) + Be) >> 2] = a) : (q[((q[(ue + 16) >> 2] << 2) + Ae) >> 2] = a)) : Y(4, 1372, 0),
                                                    (we = (we + 4) | 0),
                                                    (ue = (ue + 32) | 0) >>> 0 < ze >>> 0;

                                                );
                                        })(a),
                                        (function (a) {
                                            var gg,
                                                hg,
                                                ig,
                                                jg,
                                                kg,
                                                lg,
                                                mg,
                                                ng,
                                                og,
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
                                                dg = 0,
                                                eg = 0,
                                                fg = 0,
                                                Yf = q[a >> 2];
                                            if (1 <= (0 | ($f = q[(a + 56) >> 2]))) {
                                                for (ag = q[(a + 60) >> 2], bg = q[(Yf + 1052) >> 2], cg = q[(Yf + 784) >> 2]; ;) {
                                                    if (
                                                        ((Uf = q[(ag + w(Zf, 24)) >> 2]),
                                                            (q[(Uf + 28) >> 2] || q[(Uf + 24) >> 2]) && ((q[((Vf = Zf << 2) + q[(a + 80) >> 2]) >> 2] = q[(Uf + 12) >> 2]), q[(Uf + 24) >> 2]) && !((0 | (Xf = q[(Uf + 12) >> 2])) < 1))
                                                    )
                                                        for (
                                                            dg = ((Wf = q[(Uf + 16) >> 2]) + (Xf << 2)) | 0, eg = q[(Vf + cg) >> 2], Vf = ((Xf = _f << 2) + q[(a + 92) >> 2]) | 0, Xf = (Xf + q[(a + 88) >> 2]) | 0;
                                                            (fg = (eg + q[Wf >> 2]) << 2),
                                                            (q[Vf >> 2] = bg + (q[(fg + q[(Yf + 984) >> 2]) >> 2] << 2)),
                                                            (q[Xf >> 2] = q[(fg + q[(Yf + 980) >> 2]) >> 2]),
                                                            (Xf = (Xf + 4) | 0),
                                                            (Vf = (Vf + 4) | 0),
                                                            (Wf = (Wf + 4) | 0) >>> 0 < dg >>> 0;

                                                        );
                                                    if (q[(Uf + 28) >> 2] && !((0 | (Vf = q[(Uf + 12) >> 2])) < 1))
                                                        for (Xf = ((Wf = q[(Uf + 20) >> 2]) + (Vf << 2)) | 0, Vf = (q[(a + 84) >> 2] + (_f << 2)) | 0; (q[Vf >> 2] = q[Wf >> 2]), (Vf = (Vf + 4) | 0), (Wf = (Wf + 4) | 0) >>> 0 < Xf >>> 0;);
                                                    if (((_f = (q[(Uf + 8) >> 2] + _f) | 0), (0 | $f) == (0 | (Zf = (Zf + 1) | 0)))) break;
                                                }
                                                Yf = q[a >> 2];
                                            }
                                            if (!(r[(Yf + 4) | 0] < 4 || (0 | (eg = q[(a + 56) >> 2])) < 1))
                                                for (fg = q[(Yf + 792) >> 2], gg = q[(a + 60) >> 2], Wf = _f = 0; ;) {
                                                    if (((Zf = q[(w(Wf, 24) + gg) >> 2]), q[(Zf + 24) >> 2] && !((0 | (Uf = q[(Zf + 12) >> 2])) < 1)))
                                                        for (
                                                            hg = ((Vf = q[(Zf + 16) >> 2]) + (Uf << 2)) | 0,
                                                            ig = q[(fg + (Wf << 2)) >> 2],
                                                            Xf = ((Uf = _f << 2) + q[(a + 96) >> 2]) | 0,
                                                            $f = (Uf + q[(a + 100) >> 2]) | 0,
                                                            ag = (Uf + q[(a + 104) >> 2]) | 0,
                                                            bg = (Uf + q[(a + 108) >> 2]) | 0,
                                                            cg = (Uf + q[(a + 112) >> 2]) | 0,
                                                            dg = (Uf + q[(a + 116) >> 2]) | 0,
                                                            jg = q[(Yf + 1308) >> 2],
                                                            kg = q[(Yf + 1304) >> 2],
                                                            lg = q[(Yf + 1300) >> 2],
                                                            mg = q[(Yf + 1296) >> 2],
                                                            ng = q[(Yf + 1292) >> 2],
                                                            og = q[(Yf + 1288) >> 2];
                                                            (Uf = (q[Vf >> 2] + ig) << 2),
                                                            (q[Xf >> 2] = q[(Uf + og) >> 2]),
                                                            (q[$f >> 2] = q[(Uf + ng) >> 2]),
                                                            (q[ag >> 2] = q[(Uf + mg) >> 2]),
                                                            (q[bg >> 2] = q[(Uf + lg) >> 2]),
                                                            (q[cg >> 2] = q[(Uf + kg) >> 2]),
                                                            (q[dg >> 2] = q[(Uf + jg) >> 2]),
                                                            (dg = (dg + 4) | 0),
                                                            (cg = (cg + 4) | 0),
                                                            (bg = (bg + 4) | 0),
                                                            (ag = (ag + 4) | 0),
                                                            ($f = ($f + 4) | 0),
                                                            (Xf = (Xf + 4) | 0),
                                                            (Vf = (Vf + 4) | 0) >>> 0 < hg >>> 0;

                                                        );
                                                    if (((_f = (q[(Zf + 8) >> 2] + _f) | 0), (0 | eg) == (0 | (Wf = (Wf + 1) | 0)))) break;
                                                }
                                        })(a),
                                        (function (a) {
                                            var xf = 0,
                                                yf = 0,
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
                                                Qf = 0,
                                                Rf = 0,
                                                Sf = 0,
                                                Tf = q[(a + 168) >> 2],
                                                zf = q[a >> 2];
                                            if (1 <= (0 | (Kf = q[(a + 164) >> 2])))
                                                for (Mf = q[(zf + 816) >> 2]; ;) {
                                                    if (((Af = q[(w(Ef, 12) + Tf) >> 2]), (q[(Af + 28) >> 2] || q[(Af + 24) >> 2]) && ((q[((Ff = Ef << 2) + q[(a + 188) >> 2]) >> 2] = q[(Af + 12) >> 2]), q[(Af + 24) >> 2]))) {
                                                        if (((yf = q[(Af + 16) >> 2]), (Lf = q[(Ff + Mf) >> 2]), 1 <= (0 | (xf = q[(Af + 12) >> 2]))))
                                                            for (
                                                                Nf = (yf + (xf << 2)) | 0,
                                                                Bf = ((xf = Df << 2) + q[(a + 200) >> 2]) | 0,
                                                                Gf = (xf + q[(a + 204) >> 2]) | 0,
                                                                Hf = (xf + q[(a + 208) >> 2]) | 0,
                                                                If = (xf + q[(a + 212) >> 2]) | 0,
                                                                Jf = (xf + q[(a + 196) >> 2]) | 0,
                                                                Of = q[(zf + 996) >> 2],
                                                                Pf = q[(zf + 1012) >> 2],
                                                                Qf = q[(zf + 1008) >> 2],
                                                                Rf = q[(zf + 1004) >> 2],
                                                                Sf = q[(zf + 1e3) >> 2],
                                                                xf = yf;
                                                                (Cf = (Lf + q[xf >> 2]) << 2),
                                                                (q[Bf >> 2] = q[(Cf + Sf) >> 2]),
                                                                (q[Gf >> 2] = q[(Cf + Rf) >> 2]),
                                                                (q[Hf >> 2] = q[(Cf + Qf) >> 2]),
                                                                (q[If >> 2] = q[(Cf + Pf) >> 2]),
                                                                (q[Jf >> 2] = q[(Cf + Of) >> 2]),
                                                                (Jf = (Jf + 4) | 0),
                                                                (If = (If + 4) | 0),
                                                                (Hf = (Hf + 4) | 0),
                                                                (Gf = (Gf + 4) | 0),
                                                                (Bf = (Bf + 4) | 0),
                                                                (xf = (xf + 4) | 0) >>> 0 < Nf >>> 0;

                                                            );
                                                        (xf = (Lf + q[yf >> 2]) << 2), (q[(Ff + q[(a + 288) >> 2]) >> 2] = q[(xf + q[(zf + 1016) >> 2]) >> 2]), (q[(Ff + q[(a + 292) >> 2]) >> 2] = q[(xf + q[(zf + 1020) >> 2]) >> 2]);
                                                    }
                                                    if (q[(Af + 28) >> 2] && !((0 | (yf = q[(Af + 12) >> 2])) < 1))
                                                        for (yf = ((xf = q[(Af + 20) >> 2]) + (yf << 2)) | 0, Bf = (q[(a + 192) >> 2] + (Df << 2)) | 0; (q[Bf >> 2] = q[xf >> 2]), (Bf = (Bf + 4) | 0), (xf = (xf + 4) | 0) >>> 0 < yf >>> 0;);
                                                    if (((Df = (q[(Af + 8) >> 2] + Df) | 0), (0 | Kf) == (0 | (Ef = (Ef + 1) | 0)))) break;
                                                }
                                            if (!(r[(zf + 4) | 0] < 4 || (0 | (Ff = q[(a + 164) >> 2])) < 1))
                                                for (Lf = q[(zf + 824) >> 2], Df = Af = 0; ;) {
                                                    if (((Cf = q[(w(Df, 12) + Tf) >> 2]), q[(Cf + 24) >> 2] && !((0 | (xf = q[(Cf + 12) >> 2])) < 1)))
                                                        for (
                                                            Kf = ((Bf = q[(Cf + 16) >> 2]) + (xf << 2)) | 0,
                                                            Mf = q[(Lf + (Df << 2)) >> 2],
                                                            Gf = ((yf = Af << 2) + q[(a + 216) >> 2]) | 0,
                                                            Hf = (yf + q[(a + 220) >> 2]) | 0,
                                                            If = (yf + q[(a + 224) >> 2]) | 0,
                                                            Jf = (yf + q[(a + 228) >> 2]) | 0,
                                                            xf = (yf + q[(a + 232) >> 2]) | 0,
                                                            Ef = (yf + q[(a + 236) >> 2]) | 0,
                                                            Nf = q[(zf + 1308) >> 2],
                                                            Of = q[(zf + 1304) >> 2],
                                                            Pf = q[(zf + 1300) >> 2],
                                                            Qf = q[(zf + 1296) >> 2],
                                                            Rf = q[(zf + 1292) >> 2],
                                                            Sf = q[(zf + 1288) >> 2];
                                                            (yf = (Mf + q[Bf >> 2]) << 2),
                                                            (q[Gf >> 2] = q[(yf + Sf) >> 2]),
                                                            (q[Hf >> 2] = q[(yf + Rf) >> 2]),
                                                            (q[If >> 2] = q[(yf + Qf) >> 2]),
                                                            (q[Jf >> 2] = q[(yf + Pf) >> 2]),
                                                            (q[xf >> 2] = q[(yf + Of) >> 2]),
                                                            (q[Ef >> 2] = q[(yf + Nf) >> 2]),
                                                            (Ef = (Ef + 4) | 0),
                                                            (xf = (xf + 4) | 0),
                                                            (Jf = (Jf + 4) | 0),
                                                            (If = (If + 4) | 0),
                                                            (Hf = (Hf + 4) | 0),
                                                            (Gf = (Gf + 4) | 0),
                                                            (Bf = (Bf + 4) | 0) >>> 0 < Kf >>> 0;

                                                        );
                                                    if (((Af = (q[(Cf + 8) >> 2] + Af) | 0), (0 | Ff) == (0 | (Df = (Df + 1) | 0)))) break;
                                                }
                                        })(a),
                                        (function (a) {
                                            var yk,
                                                qk = 0,
                                                rk = 0,
                                                sk = 0,
                                                tk = 0,
                                                uk = 0,
                                                vk = 0,
                                                wk = 0,
                                                xk = 0,
                                                qk = (a - -64) | 0;
                                            if (
                                                (n[q[1807]](qk, q[(a + 88) >> 2], q[(a + 148) >> 2], q[(a + 144) >> 2]),
                                                    n[q[1809]](qk, q[(a + 92) >> 2], q[(a + 152) >> 2], q[(q[a >> 2] + 796) >> 2], 2, q[(a + 144) >> 2]),
                                                    !(
                                                        r[(q[a >> 2] + 4) | 0] < 4 ||
                                                        (n[q[1807]](qk, q[(a + 96) >> 2], q[(a + 120) >> 2], q[(a + 144) >> 2]),
                                                            n[q[1807]](qk, q[(a + 100) >> 2], q[(a + 124) >> 2], q[(a + 144) >> 2]),
                                                            n[q[1807]](qk, q[(a + 104) >> 2], q[(a + 128) >> 2], q[(a + 144) >> 2]),
                                                            n[q[1807]](qk, q[(a + 108) >> 2], q[(a + 132) >> 2], q[(a + 144) >> 2]),
                                                            n[q[1807]](qk, q[(a + 112) >> 2], q[(a + 136) >> 2], q[(a + 144) >> 2]),
                                                            n[q[1807]](qk, q[(a + 116) >> 2], q[(a + 140) >> 2], q[(a + 144) >> 2]),
                                                            (0 | (vk = q[(a + 56) >> 2])) < 1)
                                                    ))
                                            ) {
                                                for (
                                                    wk = q[(a + 128) >> 2], xk = q[(a + 124) >> 2], yk = q[(a + 120) >> 2], rk = q[(a + 156) >> 2], qk = 0;
                                                    (q[((sk = tk << 2) + rk) >> 2] = q[((uk = qk << 2) + yk) >> 2]),
                                                    (q[(rk + (4 | sk)) >> 2] = q[(uk + xk) >> 2]),
                                                    (q[(rk + (8 | sk)) >> 2] = q[(uk + wk) >> 2]),
                                                    (tk = (tk + 4) | 0),
                                                    (0 | vk) != (0 | (qk = (qk + 1) | 0));

                                                );
                                                for (
                                                    rk = q[(a + 160) >> 2], uk = q[(a + 140) >> 2], wk = q[(a + 136) >> 2], xk = q[(a + 132) >> 2], qk = a = 0;
                                                    (q[((tk = a << 2) + rk) >> 2] = q[((sk = qk << 2) + xk) >> 2]),
                                                    (q[(rk + (4 | tk)) >> 2] = q[(sk + wk) >> 2]),
                                                    (q[(rk + (8 | tk)) >> 2] = q[(sk + uk) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (0 | vk) != (0 | (qk = (qk + 1) | 0));

                                                );
                                            }
                                        })(a),
                                        (function (a) {
                                            var pk,
                                                hk = 0,
                                                ik = 0,
                                                jk = 0,
                                                kk = 0,
                                                lk = 0,
                                                mk = 0,
                                                nk = 0,
                                                ok = 0,
                                                hk = (a + 172) | 0;
                                            if (
                                                (n[q[1807]](hk, q[(a + 196) >> 2], q[(a + 268) >> 2], q[(a + 264) >> 2]),
                                                    n[q[1807]](hk, q[(a + 200) >> 2], q[(a + 284) >> 2], q[(a + 264) >> 2]),
                                                    n[q[1807]](hk, q[(a + 204) >> 2], q[(a + 276) >> 2], q[(a + 264) >> 2]),
                                                    n[q[1807]](hk, q[(a + 208) >> 2], q[(a + 280) >> 2], q[(a + 264) >> 2]),
                                                    n[q[1807]](hk, q[(a + 212) >> 2], q[(a + 272) >> 2], q[(a + 264) >> 2]),
                                                    !(
                                                        r[(q[a >> 2] + 4) | 0] < 4 ||
                                                        (n[q[1807]](hk, q[(a + 216) >> 2], q[(a + 240) >> 2], q[(a + 264) >> 2]),
                                                            n[q[1807]](hk, q[(a + 220) >> 2], q[(a + 244) >> 2], q[(a + 264) >> 2]),
                                                            n[q[1807]](hk, q[(a + 224) >> 2], q[(a + 248) >> 2], q[(a + 264) >> 2]),
                                                            n[q[1807]](hk, q[(a + 228) >> 2], q[(a + 252) >> 2], q[(a + 264) >> 2]),
                                                            n[q[1807]](hk, q[(a + 232) >> 2], q[(a + 256) >> 2], q[(a + 264) >> 2]),
                                                            n[q[1807]](hk, q[(a + 236) >> 2], q[(a + 260) >> 2], q[(a + 264) >> 2]),
                                                            (0 | (mk = q[(a + 164) >> 2])) < 1)
                                                    ))
                                            ) {
                                                for (
                                                    nk = q[(a + 248) >> 2], ok = q[(a + 244) >> 2], pk = q[(a + 240) >> 2], ik = q[(a + 296) >> 2], hk = 0;
                                                    (q[((jk = kk << 2) + ik) >> 2] = q[((lk = hk << 2) + pk) >> 2]),
                                                    (q[(ik + (4 | jk)) >> 2] = q[(lk + ok) >> 2]),
                                                    (q[(ik + (8 | jk)) >> 2] = q[(lk + nk) >> 2]),
                                                    (kk = (kk + 4) | 0),
                                                    (0 | mk) != (0 | (hk = (hk + 1) | 0));

                                                );
                                                for (
                                                    ik = q[(a + 300) >> 2], lk = q[(a + 260) >> 2], nk = q[(a + 256) >> 2], ok = q[(a + 252) >> 2], hk = a = 0;
                                                    (q[((kk = a << 2) + ik) >> 2] = q[((jk = hk << 2) + ok) >> 2]),
                                                    (q[(ik + (4 | kk)) >> 2] = q[(jk + nk) >> 2]),
                                                    (q[(ik + (8 | kk)) >> 2] = q[(jk + lk) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (0 | mk) != (0 | (hk = (hk + 1) | 0));

                                                );
                                            }
                                        })(a),
                                        (function (a) {
                                            var re,
                                                se,
                                                te,
                                                oe = 0,
                                                pe = 0,
                                                qe = 0;
                                            if (1 <= (0 | (pe = q[(a + 332) >> 2])))
                                                for (
                                                    re = ((oe = q[(a + 336) >> 2]) + w(pe, 20)) | 0, se = q[(a + 312) >> 2], te = q[(a + 40) >> 2], a = q[(a + 424) >> 2];
                                                    (pe = 0),
                                                    q[(oe + 12) >> 2] &&
                                                    ((qe = q[(oe + 4) >> 2]), q[((qe << 2) + te) >> 2] || -1 == (0 | qe)) &&
                                                    ((qe = q[(oe + 8) >> 2]), q[((qe << 2) + se) >> 2] || -1 == (0 | qe)) &&
                                                    (pe = !q[(q[oe >> 2] + 32) >> 2]),
                                                    (q[a >> 2] = pe),
                                                    (a = (a + 4) | 0),
                                                    (oe = (oe + 20) | 0) >>> 0 < re >>> 0;

                                                );
                                        })(a),
                                        (function (a) {
                                            var pf,
                                                qf,
                                                rf,
                                                sf,
                                                tf,
                                                uf,
                                                vf,
                                                wf,
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
                                                mf = 0,
                                                nf = 0,
                                                of = 0,
                                                cf = q[a >> 2];
                                            if (1 <= (0 | (jf = q[(a + 332) >> 2]))) {
                                                for (kf = q[(a + 336) >> 2], lf = q[(cf + 1052) >> 2], mf = q[(cf + 856) >> 2]; ;) {
                                                    if (
                                                        (($e = q[(kf + w(ff, 20)) >> 2]),
                                                            (q[($e + 28) >> 2] || q[($e + 24) >> 2]) && ((q[((af = ff << 2) + q[(a + 356) >> 2]) >> 2] = q[($e + 12) >> 2]), q[($e + 24) >> 2]) && !((0 | (df = q[($e + 12) >> 2])) < 1))
                                                    )
                                                        for (
                                                            nf = ((bf = q[($e + 16) >> 2]) + (df << 2)) | 0,
                                                            of = q[(af + mf) >> 2],
                                                            af = ((ef = gf << 2) + q[(a + 372) >> 2]) | 0,
                                                            df = (ef + q[(a + 364) >> 2]) | 0,
                                                            ef = (ef + q[(a + 368) >> 2]) | 0;
                                                            (hf = (of + q[bf >> 2]) << 2),
                                                            (q[af >> 2] = lf + (q[(hf + q[(cf + 1040) >> 2]) >> 2] << 2)),
                                                            (q[df >> 2] = q[(hf + q[(cf + 1032) >> 2]) >> 2]),
                                                            (q[ef >> 2] = q[(hf + q[(cf + 1036) >> 2]) >> 2]),
                                                            (ef = (ef + 4) | 0),
                                                            (df = (df + 4) | 0),
                                                            (af = (af + 4) | 0),
                                                            (bf = (bf + 4) | 0) >>> 0 < nf >>> 0;

                                                        );
                                                    if (q[($e + 28) >> 2] && !((0 | (af = q[($e + 12) >> 2])) < 1))
                                                        for (df = ((bf = q[($e + 20) >> 2]) + (af << 2)) | 0, af = (q[(a + 360) >> 2] + (gf << 2)) | 0; (q[af >> 2] = q[bf >> 2]), (af = (af + 4) | 0), (bf = (bf + 4) | 0) >>> 0 < df >>> 0;);
                                                    if (((gf = (q[($e + 8) >> 2] + gf) | 0), (0 | jf) == (0 | (ff = (ff + 1) | 0)))) break;
                                                }
                                                cf = q[a >> 2];
                                            }
                                            if (!(r[(cf + 4) | 0] < 4 || (0 | (mf = q[(a + 332) >> 2])) < 1))
                                                for (nf = q[(cf + 864) >> 2], of = q[(a + 336) >> 2], bf = gf = 0; ;) {
                                                    if (((ff = q[(of + w(bf, 20)) >> 2]), q[(ff + 24) >> 2] && !((0 | ($e = q[(ff + 12) >> 2])) < 1)))
                                                        for (
                                                            pf = ((af = q[(ff + 16) >> 2]) + ($e << 2)) | 0,
                                                            qf = q[(nf + (bf << 2)) >> 2],
                                                            df = (($e = gf << 2) + q[(a + 376) >> 2]) | 0,
                                                            ef = ($e + q[(a + 380) >> 2]) | 0,
                                                            hf = ($e + q[(a + 384) >> 2]) | 0,
                                                            jf = ($e + q[(a + 388) >> 2]) | 0,
                                                            kf = ($e + q[(a + 392) >> 2]) | 0,
                                                            lf = ($e + q[(a + 396) >> 2]) | 0,
                                                            rf = q[(cf + 1308) >> 2],
                                                            sf = q[(cf + 1304) >> 2],
                                                            tf = q[(cf + 1300) >> 2],
                                                            uf = q[(cf + 1296) >> 2],
                                                            vf = q[(cf + 1292) >> 2],
                                                            wf = q[(cf + 1288) >> 2];
                                                            ($e = (q[af >> 2] + qf) << 2),
                                                            (q[df >> 2] = q[($e + wf) >> 2]),
                                                            (q[ef >> 2] = q[($e + vf) >> 2]),
                                                            (q[hf >> 2] = q[($e + uf) >> 2]),
                                                            (q[jf >> 2] = q[($e + tf) >> 2]),
                                                            (q[kf >> 2] = q[($e + sf) >> 2]),
                                                            (q[lf >> 2] = q[($e + rf) >> 2]),
                                                            (lf = (lf + 4) | 0),
                                                            (kf = (kf + 4) | 0),
                                                            (jf = (jf + 4) | 0),
                                                            (hf = (hf + 4) | 0),
                                                            (ef = (ef + 4) | 0),
                                                            (df = (df + 4) | 0),
                                                            (af = (af + 4) | 0) >>> 0 < pf >>> 0;

                                                        );
                                                    if (((gf = (q[(ff + 8) >> 2] + gf) | 0), (0 | mf) == (0 | (bf = (bf + 1) | 0)))) break;
                                                }
                                        })(a),
                                        (function (a) {
                                            var gk,
                                                vj = 0,
                                                xj = 0,
                                                yj = 0,
                                                bk = 0,
                                                ck = 0,
                                                dk = 0,
                                                ek = 0,
                                                fk = 0,
                                                vj = (a + 340) | 0;
                                            if (
                                                (n[q[1807]](vj, q[(a + 364) >> 2], q[(a + 448) >> 2], q[(a + 424) >> 2]),
                                                    n[q[1808]](vj, q[(a + 368) >> 2], q[(a + 440) >> 2], q[(a + 424) >> 2]),
                                                    n[q[1809]](vj, q[(a + 372) >> 2], q[(a + 444) >> 2], q[(q[a >> 2] + 892) >> 2], 2, q[(a + 424) >> 2]),
                                                    !(
                                                        r[(q[a >> 2] + 4) | 0] < 4 ||
                                                        (n[q[1807]](vj, q[(a + 376) >> 2], q[(a + 400) >> 2], q[(a + 424) >> 2]),
                                                            n[q[1807]](vj, q[(a + 380) >> 2], q[(a + 404) >> 2], q[(a + 424) >> 2]),
                                                            n[q[1807]](vj, q[(a + 384) >> 2], q[(a + 408) >> 2], q[(a + 424) >> 2]),
                                                            n[q[1807]](vj, q[(a + 388) >> 2], q[(a + 412) >> 2], q[(a + 424) >> 2]),
                                                            n[q[1807]](vj, q[(a + 392) >> 2], q[(a + 416) >> 2], q[(a + 424) >> 2]),
                                                            n[q[1807]](vj, q[(a + 396) >> 2], q[(a + 420) >> 2], q[(a + 424) >> 2]),
                                                            (0 | (dk = q[(a + 332) >> 2])) < 1)
                                                    ))
                                            ) {
                                                for (
                                                    ek = q[(a + 408) >> 2], fk = q[(a + 404) >> 2], gk = q[(a + 400) >> 2], xj = q[(a + 452) >> 2], vj = 0;
                                                    (q[((yj = bk << 2) + xj) >> 2] = q[((ck = vj << 2) + gk) >> 2]),
                                                    (q[(xj + (4 | yj)) >> 2] = q[(ck + fk) >> 2]),
                                                    (q[(xj + (8 | yj)) >> 2] = q[(ck + ek) >> 2]),
                                                    (bk = (bk + 4) | 0),
                                                    (0 | dk) != (0 | (vj = (vj + 1) | 0));

                                                );
                                                for (
                                                    xj = q[(a + 456) >> 2], ck = q[(a + 420) >> 2], ek = q[(a + 416) >> 2], fk = q[(a + 412) >> 2], vj = a = 0;
                                                    (q[((bk = a << 2) + xj) >> 2] = q[((yj = vj << 2) + fk) >> 2]),
                                                    (q[(xj + (4 | bk)) >> 2] = q[(yj + ek) >> 2]),
                                                    (q[(xj + (8 | bk)) >> 2] = q[(yj + ck) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (0 | dk) != (0 | (vj = (vj + 1) | 0));

                                                );
                                            }
                                        })(a),
                                        (function (a) {
                                            var Re,
                                                Ve,
                                                We,
                                                Xe,
                                                Ye,
                                                Ze,
                                                _e,
                                                Pe = 0,
                                                Qe = 0,
                                                Se = 0,
                                                Te = 0,
                                                Ue = 0;
                                            if (1 <= (0 | (Ve = q[(a + 500) >> 2])))
                                                for (Xe = q[(a + 504) >> 2], We = q[a >> 2], Ye = q[(We + 1252) >> 2]; ;) {
                                                    if (
                                                        ((Re = q[(w(Te, 24) + Xe) >> 2]),
                                                            (q[(Re + 28) >> 2] || q[(Re + 24) >> 2]) && ((q[((Pe = Te << 2) + q[(a + 524) >> 2]) >> 2] = q[(Re + 12) >> 2]), q[(Re + 24) >> 2]) && !((0 | (Se = q[(Re + 12) >> 2])) < 1))
                                                    )
                                                        for (
                                                            Se = ((Qe = q[(Re + 16) >> 2]) + (Se << 2)) | 0, Ze = q[(Pe + Ye) >> 2], Pe = (q[(a + 532) >> 2] + (Ue << 2)) | 0, _e = q[(We + 1284) >> 2];
                                                            (q[Pe >> 2] = q[(((q[Qe >> 2] + Ze) << 2) + _e) >> 2]), (Pe = (Pe + 4) | 0), (Qe = (Qe + 4) | 0) >>> 0 < Se >>> 0;

                                                        );
                                                    if (q[(Re + 28) >> 2] && !((0 | (Pe = q[(Re + 12) >> 2])) < 1))
                                                        for (Se = ((Qe = q[(Re + 20) >> 2]) + (Pe << 2)) | 0, Pe = (q[(a + 528) >> 2] + (Ue << 2)) | 0; (q[Pe >> 2] = q[Qe >> 2]), (Pe = (Pe + 4) | 0), (Qe = (Qe + 4) | 0) >>> 0 < Se >>> 0;);
                                                    if (((Ue = (q[(Re + 8) >> 2] + Ue) | 0), (0 | Ve) == (0 | (Te = (Te + 1) | 0)))) break;
                                                }
                                        })(a),
                                        n[q[1807]]((a + 508) | 0, q[(a + 532) >> 2], q[(a + 536) >> 2], 0),
                                        (function (a) {
                                            var Ek,
                                                Fk,
                                                Gk,
                                                Hk,
                                                Ik,
                                                Jk,
                                                zk = x(0),
                                                Ak = 0,
                                                Bk = 0,
                                                Ck = 0,
                                                Dk = 0;
                                            x(0);
                                            if (((L = Ek = (L - 16) | 0), (Ck = q[a >> 2]), !(r[(Ck + 4) | 0] < 5 || (0 | (Dk = q[(a + 596) >> 2])) < 1)))
                                                for (Hk = ((Bk = q[(a + 600) >> 2]) + w(Dk, 12)) | 0, Ik = q[(a + 44) >> 2], Dk = q[(Ck + 976) >> 2]; ;) {
                                                    if (((Ck = ((q[Bk >> 2] << 2) + Ik) | 0), (zk = x(q[Ck >> 2])), 1 <= (0 | (Ak = q[(Bk + 4) >> 2]))))
                                                        for (
                                                            Jk = ((a = q[(Bk + 8) >> 2]) + w(Ak, 48)) | 0;
                                                            (Ak = q[(a + 8) >> 2]) &&
                                                            ((Fk = (Ak + -1) | 0) >>> 0 <= 1
                                                                ? ((Ak = q[(a + 4) >> 2]),
                                                                    (Gk = u[(Dk + ((Ak + q[(a + 12) >> 2]) << 2)) >> 2]),
                                                                    (zk = x(
                                                                        Fk - 1
                                                                            ? zk + x(u[(a + 44) >> 2] * x(Gk * u[(a + 20) >> 2]))
                                                                            : zk + x(u[(a + 44) >> 2] * x(x(Gk * u[(a + 20) >> 2]) + x(u[(Dk + ((Ak + q[(a + 16) >> 2]) << 2)) >> 2] * u[(a + 24) >> 2])))
                                                                    )))
                                                                : ((q[Ek >> 2] = Ak), Y(4, 1024, Ek))),
                                                            (a = (a + 48) | 0) >>> 0 < Jk >>> 0;

                                                        );
                                                    if (
                                                        ((zk = (zk = x(zk + x(0.0010000000474974513))) < x(0) ? x(0) : x(A(zk, x(1e3)))),
                                                            (a = x(y(zk)) < x(2147483648) ? ~~zk : -2147483648),
                                                            (q[Ck >> 2] = a),
                                                            !((Bk = (Bk + 12) | 0) >>> 0 < Hk >>> 0))
                                                    )
                                                        break;
                                                }
                                            L = (16 + Ek) | 0;
                                        })(a),
                                        (function (a) {
                                            var mj,
                                                nj,
                                                oj,
                                                pj,
                                                qj,
                                                rj,
                                                sj,
                                                tj,
                                                uj,
                                                ej = 0,
                                                gj = 0,
                                                ij = 0,
                                                jj = 0,
                                                kj = 0,
                                                lj = x(0);
                                            if (
                                                ((L = mj = (L - 16) | 0),
                                                    (ej = q[a >> 2]),
                                                    !(r[(ej + 4) | 0] < 4 || (va(a, q[(a + 604) >> 2], q[(a + 608) >> 2], q[(ej + 984) >> 2], q[(a + 152) >> 2], q[(ej + 796) >> 2]), (gj = q[a >> 2]), r[(gj + 4) | 0] < 5)))
                                            ) {
                                                if (((ij = q[(a + 608) >> 2]), (qj = q[(gj + 992) >> 2]), (rj = q[(gj + 988) >> 2]), 1 <= (0 | (ej = q[(a + 604) >> 2])))) {
                                                    for (sj = (w(ej, 12) + ij) | 0, tj = q[(a + 148) >> 2], nj = q[(gj + 980) >> 2]; ;) {
                                                        if (((oj = ((q[ij >> 2] << 2) + tj) | 0), (kj = q[oj >> 2]), 1 <= (0 | (jj = q[(ij + 4) >> 2]))))
                                                            for (
                                                                uj = ((ej = q[(ij + 8) >> 2]) + w(jj, 48)) | 0;
                                                                (jj = q[(ej + 8) >> 2]) &&
                                                                ((pj = (jj + -1) | 0) >>> 0 <= 1
                                                                    ? ((jj = q[(ej + 4) >> 2]),
                                                                        (lj = u[(((jj + q[(ej + 12) >> 2]) << 2) + nj) >> 2]),
                                                                        j(
                                                                            x(
                                                                                pj - 1
                                                                                    ? x(u[(ej + 44) >> 2] * x(lj * u[(ej + 20) >> 2])) + (f(0, kj), k())
                                                                                    : x(u[(ej + 44) >> 2] * x(x(lj * u[(ej + 20) >> 2]) + x(u[(((jj + q[(ej + 16) >> 2]) << 2) + nj) >> 2] * u[(ej + 24) >> 2]))) + (f(0, kj), k())
                                                                            )
                                                                        ),
                                                                        (kj = b[0]))
                                                                    : ((q[mj >> 2] = jj), Y(4, 1024, mj))),
                                                                (ej = (ej + 48) | 0) >>> 0 < uj >>> 0;

                                                            );
                                                        if ((f(0, kj), (lj = k()), (u[oj >> 2] = lj < x(0) ? x(0) : x(A(lj, x(1)))), !((ij = (ij + 12) | 0) >>> 0 < sj >>> 0))) break;
                                                    }
                                                    (ij = q[(a + 608) >> 2]), (ej = q[(a + 604) >> 2]);
                                                }
                                                fa(ej, ij, rj, q[(gj + 1288) >> 2], q[(gj + 1292) >> 2], q[(gj + 1296) >> 2], q[(a + 156) >> 2]),
                                                    fa(q[(a + 604) >> 2], q[(a + 608) >> 2], qj, q[(gj + 1300) >> 2], q[(gj + 1304) >> 2], q[(gj + 1308) >> 2], q[(a + 160) >> 2]);
                                            }
                                            L = (16 + mj) | 0;
                                        })(a),
                                        (function (a) {
                                            var Ai,
                                                ti = 0,
                                                ui = 0,
                                                vi = 0,
                                                wi = 0,
                                                xi = 0,
                                                yi = x(0),
                                                zi = 0,
                                                Bi = 0,
                                                Ci = 0,
                                                Di = 0,
                                                Ei = 0,
                                                Fi = 0,
                                                Gi = 0,
                                                Hi = 0;
                                            if (((L = Ai = (L - 80) | 0), (xi = q[a >> 2]), !(r[(xi + 4) | 0] < 5))) {
                                                if (((Fi = q[(xi + 1028) >> 2]), (Gi = q[(xi + 1024) >> 2]), (vi = ui = q[(a + 616) >> 2]), !((0 | (ti = q[(a + 612) >> 2])) < 1))) {
                                                    for (Bi = (w(ti, 12) + ui) | 0, Ci = q[(a + 276) >> 2], zi = q[(xi + 1004) >> 2]; ;) {
                                                        if (((Di = (Ci + (q[ui >> 2] << 2)) | 0), (vi = q[Di >> 2]), 1 <= (0 | (wi = q[(ui + 4) >> 2]))))
                                                            for (
                                                                Hi = ((ti = q[(ui + 8) >> 2]) + w(wi, 48)) | 0;
                                                                (wi = q[(ti + 8) >> 2]) &&
                                                                ((Ei = (wi + -1) | 0) >>> 0 <= 1
                                                                    ? ((wi = q[(ti + 4) >> 2]),
                                                                        (yi = u[(zi + ((wi + q[(ti + 12) >> 2]) << 2)) >> 2]),
                                                                        j(
                                                                            x(
                                                                                Ei - 1
                                                                                    ? x(u[(ti + 44) >> 2] * x(yi * u[(ti + 20) >> 2])) + (f(0, vi), k())
                                                                                    : x(u[(ti + 44) >> 2] * x(x(yi * u[(ti + 20) >> 2]) + x(u[(zi + ((wi + q[(ti + 16) >> 2]) << 2)) >> 2] * u[(ti + 24) >> 2]))) + (f(0, vi), k())
                                                                            )
                                                                        ),
                                                                        (vi = b[0]))
                                                                    : ((q[(64 + Ai) >> 2] = wi), Y(4, 1024, (64 + Ai) | 0))),
                                                                (ti = (ti + 48) | 0) >>> 0 < Hi >>> 0;

                                                            );
                                                        if (((q[Di >> 2] = vi), !((ui = (ui + 12) | 0) >>> 0 < Bi >>> 0))) break;
                                                    }
                                                    if (((vi = ui = q[(a + 616) >> 2]), !((0 | (ti = q[(a + 612) >> 2])) < 1))) {
                                                        for (Bi = (w(ti, 12) + ui) | 0, Ci = q[(a + 280) >> 2], zi = q[(q[a >> 2] + 1008) >> 2]; ;) {
                                                            if (((Di = (Ci + (q[ui >> 2] << 2)) | 0), (vi = q[Di >> 2]), 1 <= (0 | (wi = q[(ui + 4) >> 2]))))
                                                                for (
                                                                    Hi = ((ti = q[(ui + 8) >> 2]) + w(wi, 48)) | 0;
                                                                    (wi = q[(ti + 8) >> 2]) &&
                                                                    ((Ei = (wi + -1) | 0) >>> 0 <= 1
                                                                        ? ((wi = q[(ti + 4) >> 2]),
                                                                            (yi = u[(zi + ((wi + q[(ti + 12) >> 2]) << 2)) >> 2]),
                                                                            j(
                                                                                x(
                                                                                    Ei - 1
                                                                                        ? x(u[(ti + 44) >> 2] * x(yi * u[(ti + 20) >> 2])) + (f(0, vi), k())
                                                                                        : x(u[(ti + 44) >> 2] * x(x(yi * u[(ti + 20) >> 2]) + x(u[(zi + ((wi + q[(ti + 16) >> 2]) << 2)) >> 2] * u[(ti + 24) >> 2]))) + (f(0, vi), k())
                                                                                )
                                                                            ),
                                                                            (vi = b[0]))
                                                                        : ((q[(48 + Ai) >> 2] = wi), Y(4, 1024, (48 + Ai) | 0))),
                                                                    (ti = (ti + 48) | 0) >>> 0 < Hi >>> 0;

                                                                );
                                                            if (((q[Di >> 2] = vi), !((ui = (ui + 12) | 0) >>> 0 < Bi >>> 0))) break;
                                                        }
                                                        if (((vi = ui = q[(a + 616) >> 2]), !((0 | (ti = q[(a + 612) >> 2])) < 1))) {
                                                            for (Bi = (w(ti, 12) + ui) | 0, Ci = q[(a + 268) >> 2], zi = q[(q[a >> 2] + 996) >> 2]; ;) {
                                                                if (((Di = (Ci + (q[ui >> 2] << 2)) | 0), (vi = q[Di >> 2]), 1 <= (0 | (wi = q[(ui + 4) >> 2]))))
                                                                    for (
                                                                        Hi = ((ti = q[(ui + 8) >> 2]) + w(wi, 48)) | 0;
                                                                        (wi = q[(ti + 8) >> 2]) &&
                                                                        ((Ei = (wi + -1) | 0) >>> 0 <= 1
                                                                            ? ((wi = q[(ti + 4) >> 2]),
                                                                                (yi = u[(zi + ((wi + q[(ti + 12) >> 2]) << 2)) >> 2]),
                                                                                j(
                                                                                    x(
                                                                                        Ei - 1
                                                                                            ? x(u[(ti + 44) >> 2] * x(yi * u[(ti + 20) >> 2])) + (f(0, vi), k())
                                                                                            : x(u[(ti + 44) >> 2] * x(x(yi * u[(ti + 20) >> 2]) + x(u[(zi + ((wi + q[(ti + 16) >> 2]) << 2)) >> 2] * u[(ti + 24) >> 2]))) + (f(0, vi), k())
                                                                                    )
                                                                                ),
                                                                                (vi = b[0]))
                                                                            : ((q[(32 + Ai) >> 2] = wi), Y(4, 1024, (32 + Ai) | 0))),
                                                                        (ti = (ti + 48) | 0) >>> 0 < Hi >>> 0;

                                                                    );
                                                                if ((f(0, vi), (yi = k()), (u[Di >> 2] = yi < x(0) ? x(0) : x(A(yi, x(1)))), !((ui = (ui + 12) | 0) >>> 0 < Bi >>> 0))) break;
                                                            }
                                                            (ti = q[(a + 612) >> 2]), (vi = q[(a + 616) >> 2]);
                                                        }
                                                    }
                                                }
                                                if (
                                                    (fa(ti, vi, Gi, q[(xi + 1288) >> 2], q[(xi + 1292) >> 2], q[(xi + 1296) >> 2], q[(a + 296) >> 2]),
                                                        fa(q[(a + 612) >> 2], q[(a + 616) >> 2], Fi, q[(xi + 1300) >> 2], q[(xi + 1304) >> 2], q[(xi + 1308) >> 2], q[(a + 300) >> 2]),
                                                        !((0 | (ti = q[(a + 612) >> 2])) < 1))
                                                ) {
                                                    for (wi = ((ui = q[(a + 616) >> 2]) + w(ti, 12)) | 0, Fi = q[(a + 284) >> 2], xi = q[(q[a >> 2] + 1e3) >> 2]; ;) {
                                                        if (((Gi = (Fi + (q[ui >> 2] << 2)) | 0), (vi = q[Gi >> 2]), 1 <= (0 | (zi = q[(ui + 4) >> 2]))))
                                                            for (
                                                                Bi = ((ti = q[(ui + 8) >> 2]) + w(zi, 48)) | 0;
                                                                (zi = q[(ti + 8) >> 2]) &&
                                                                ((Ci = (zi + -1) | 0) >>> 0 <= 1
                                                                    ? ((zi = q[(ti + 4) >> 2]),
                                                                        (yi = u[(xi + ((zi + q[(ti + 12) >> 2]) << 2)) >> 2]),
                                                                        j(
                                                                            x(
                                                                                Ci - 1
                                                                                    ? x(u[(ti + 44) >> 2] * x(yi * u[(ti + 20) >> 2])) + (f(0, vi), k())
                                                                                    : x(u[(ti + 44) >> 2] * x(x(yi * u[(ti + 20) >> 2]) + x(u[(xi + ((zi + q[(ti + 16) >> 2]) << 2)) >> 2] * u[(ti + 24) >> 2]))) + (f(0, vi), k())
                                                                            )
                                                                        ),
                                                                        (vi = b[0]))
                                                                    : ((q[(16 + Ai) >> 2] = zi), Y(4, 1024, (16 + Ai) | 0))),
                                                                (ti = (ti + 48) | 0) >>> 0 < Bi >>> 0;

                                                            );
                                                        if ((f(0, vi), (yi = k()), (u[Gi >> 2] = yi < x(-3600) ? x(-3600) : x(A(yi, x(3600)))), !((ui = (ui + 12) | 0) >>> 0 < wi >>> 0))) break;
                                                    }
                                                    if (!((0 | (ti = q[(a + 612) >> 2])) < 1))
                                                        for (zi = ((ui = q[(a + 616) >> 2]) + w(ti, 12)) | 0, wi = q[(a + 272) >> 2], a = q[(q[a >> 2] + 1012) >> 2]; ;) {
                                                            if (((Fi = (wi + (q[ui >> 2] << 2)) | 0), (vi = q[Fi >> 2]), 1 <= (0 | (xi = q[(ui + 4) >> 2]))))
                                                                for (
                                                                    Gi = ((ti = q[(ui + 8) >> 2]) + w(xi, 48)) | 0;
                                                                    (xi = q[(ti + 8) >> 2]) &&
                                                                    ((Bi = (xi + -1) | 0) >>> 0 <= 1
                                                                        ? ((xi = q[(ti + 4) >> 2]),
                                                                            (yi = u[(a + ((xi + q[(ti + 12) >> 2]) << 2)) >> 2]),
                                                                            j(
                                                                                x(
                                                                                    Bi - 1
                                                                                        ? x(u[(ti + 44) >> 2] * x(yi * u[(ti + 20) >> 2])) + (f(0, vi), k())
                                                                                        : x(u[(ti + 44) >> 2] * x(x(yi * u[(ti + 20) >> 2]) + x(u[(a + ((xi + q[(ti + 16) >> 2]) << 2)) >> 2] * u[(ti + 24) >> 2]))) + (f(0, vi), k())
                                                                                )
                                                                            ),
                                                                            (vi = b[0]))
                                                                        : ((q[Ai >> 2] = xi), Y(4, 1024, Ai))),
                                                                    (ti = (ti + 48) | 0) >>> 0 < Gi >>> 0;

                                                                );
                                                            if ((f(0, vi), (yi = k()), (u[Fi >> 2] = yi < x(9999999747378752e-20) ? x(9999999747378752e-20) : x(A(yi, x(100)))), !((ui = (ui + 12) | 0) >>> 0 < zi >>> 0))) break;
                                                        }
                                                }
                                            }
                                            L = (80 + Ai) | 0;
                                        })(a),
                                        (function (a) {
                                            var $h,
                                                fi,
                                                gi,
                                                hi,
                                                ii,
                                                Vh = 0,
                                                Wh = 0,
                                                Xh = 0,
                                                Yh = 0,
                                                Zh = x(0),
                                                _h = 0,
                                                ai = 0,
                                                bi = 0,
                                                ci = 0,
                                                di = 0,
                                                ei = 0;
                                            x(0);
                                            if (
                                                ((L = $h = (L - 32) | 0),
                                                    (Xh = q[a >> 2]),
                                                    !(r[(Xh + 4) | 0] < 4 || (va(a, q[(a + 620) >> 2], q[(a + 624) >> 2], q[(Xh + 1040) >> 2], q[(a + 444) >> 2], q[(Xh + 892) >> 2]), (_h = q[a >> 2]), r[(_h + 4) | 0] < 5)))
                                            ) {
                                                if (((hi = q[(_h + 1048) >> 2]), (ii = q[(_h + 1044) >> 2]), (Xh = Yh = q[(a + 624) >> 2]), !((0 | (Vh = q[(a + 620) >> 2])) < 1))) {
                                                    for (di = (w(Vh, 12) + Yh) | 0, ei = q[(a + 440) >> 2], ai = q[(_h + 1036) >> 2]; ;) {
                                                        if (((Xh = (ei + (q[Yh >> 2] << 2)) | 0), (Zh = x(q[Xh >> 2])), 1 <= (0 | (Wh = q[(Yh + 4) >> 2]))))
                                                            for (
                                                                bi = ((Vh = q[(Yh + 8) >> 2]) + w(Wh, 48)) | 0;
                                                                (Wh = q[(Vh + 8) >> 2]) &&
                                                                ((ci = (Wh + -1) | 0) >>> 0 <= 1
                                                                    ? ((Wh = q[(Vh + 4) >> 2]),
                                                                        (fi = u[(ai + ((Wh + q[(Vh + 12) >> 2]) << 2)) >> 2]),
                                                                        (Zh = x(
                                                                            ci - 1
                                                                                ? Zh + x(u[(Vh + 44) >> 2] * x(fi * u[(Vh + 20) >> 2]))
                                                                                : Zh + x(u[(Vh + 44) >> 2] * x(x(fi * u[(Vh + 20) >> 2]) + x(u[(ai + ((Wh + q[(Vh + 16) >> 2]) << 2)) >> 2] * u[(Vh + 24) >> 2])))
                                                                        )))
                                                                    : ((q[(16 + $h) >> 2] = Wh), Y(4, 1024, (16 + $h) | 0))),
                                                                (Vh = (Vh + 48) | 0) >>> 0 < bi >>> 0;

                                                            );
                                                        if (
                                                            ((Zh = (Zh = x(Zh + x(0.0010000000474974513))) < x(0) ? x(0) : x(A(Zh, x(1e3)))),
                                                                (Vh = x(y(Zh)) < x(2147483648) ? ~~Zh : -2147483648),
                                                                (q[Xh >> 2] = Vh),
                                                                !((Yh = (Yh + 12) | 0) >>> 0 < di >>> 0))
                                                        )
                                                            break;
                                                    }
                                                    if (((Xh = Yh = q[(a + 624) >> 2]), !((0 | (Vh = q[(a + 620) >> 2])) < 1))) {
                                                        for (di = (w(Vh, 12) + Yh) | 0, ei = q[(a + 448) >> 2], ai = q[(q[a >> 2] + 1032) >> 2]; ;) {
                                                            if (((bi = (ei + (q[Yh >> 2] << 2)) | 0), (Xh = q[bi >> 2]), 1 <= (0 | (Wh = q[(Yh + 4) >> 2]))))
                                                                for (
                                                                    ci = ((Vh = q[(Yh + 8) >> 2]) + w(Wh, 48)) | 0;
                                                                    (Wh = q[(Vh + 8) >> 2]) &&
                                                                    ((gi = (Wh + -1) | 0) >>> 0 <= 1
                                                                        ? ((Wh = q[(Vh + 4) >> 2]),
                                                                            (Zh = u[(ai + ((Wh + q[(Vh + 12) >> 2]) << 2)) >> 2]),
                                                                            j(
                                                                                x(
                                                                                    gi - 1
                                                                                        ? x(u[(Vh + 44) >> 2] * x(Zh * u[(Vh + 20) >> 2])) + (f(0, Xh), k())
                                                                                        : x(u[(Vh + 44) >> 2] * x(x(Zh * u[(Vh + 20) >> 2]) + x(u[(ai + ((Wh + q[(Vh + 16) >> 2]) << 2)) >> 2] * u[(Vh + 24) >> 2]))) + (f(0, Xh), k())
                                                                                )
                                                                            ),
                                                                            (Xh = b[0]))
                                                                        : ((q[$h >> 2] = Wh), Y(4, 1024, $h))),
                                                                    (Vh = (Vh + 48) | 0) >>> 0 < ci >>> 0;

                                                                );
                                                            if ((f(0, Xh), (Zh = k()), (u[bi >> 2] = Zh < x(0) ? x(0) : x(A(Zh, x(1)))), !((Yh = (Yh + 12) | 0) >>> 0 < di >>> 0))) break;
                                                        }
                                                        (Vh = q[(a + 620) >> 2]), (Xh = q[(a + 624) >> 2]);
                                                    }
                                                }
                                                fa(Vh, Xh, ii, q[(_h + 1288) >> 2], q[(_h + 1292) >> 2], q[(_h + 1296) >> 2], q[(a + 452) >> 2]),
                                                    fa(q[(a + 620) >> 2], q[(a + 624) >> 2], hi, q[(_h + 1300) >> 2], q[(_h + 1304) >> 2], q[(_h + 1308) >> 2], q[(a + 456) >> 2]);
                                            }
                                            L = (32 + $h) | 0;
                                        })(a),
                                        (function (a) {
                                            var Pg,
                                                Qg,
                                                Rg,
                                                Sg,
                                                Tg,
                                                Ug,
                                                Kg = 0,
                                                Lg = 0,
                                                Mg = 0,
                                                Ng = 0,
                                                Og = x(0);
                                            if (((L = Pg = (L - 16) | 0), (Lg = q[a >> 2]), !(r[(Lg + 4) | 0] < 5 || (0 | (Ng = q[(a + 628) >> 2])) < 1)))
                                                for (Sg = ((Mg = q[(a + 632) >> 2]) + w(Ng, 12)) | 0, Tg = q[(a + 536) >> 2], Ng = q[(Lg + 1284) >> 2]; ;) {
                                                    if (((Qg = ((q[Mg >> 2] << 2) + Tg) | 0), (Lg = q[Qg >> 2]), 1 <= (0 | (Kg = q[(Mg + 4) >> 2]))))
                                                        for (
                                                            Ug = ((a = q[(Mg + 8) >> 2]) + w(Kg, 48)) | 0;
                                                            (Kg = q[(a + 8) >> 2]) &&
                                                            ((Rg = (Kg + -1) | 0) >>> 0 <= 1
                                                                ? ((Kg = q[(a + 4) >> 2]),
                                                                    (Og = u[(Ng + ((Kg + q[(a + 12) >> 2]) << 2)) >> 2]),
                                                                    j(
                                                                        x(
                                                                            Rg - 1
                                                                                ? x(u[(a + 44) >> 2] * x(Og * u[(a + 20) >> 2])) + (f(0, Lg), k())
                                                                                : x(u[(a + 44) >> 2] * x(x(Og * u[(a + 20) >> 2]) + x(u[(Ng + ((Kg + q[(a + 16) >> 2]) << 2)) >> 2] * u[(a + 24) >> 2]))) + (f(0, Lg), k())
                                                                        )
                                                                    ),
                                                                    (Lg = b[0]))
                                                                : ((q[Pg >> 2] = Kg), Y(4, 1024, Pg))),
                                                            (a = (a + 48) | 0) >>> 0 < Ug >>> 0;

                                                        );
                                                    if ((f(0, Lg), (Og = k()), (u[Qg >> 2] = Og < x(0) ? x(0) : x(A(Og, x(1)))), !((Mg = (Mg + 12) | 0) >>> 0 < Sg >>> 0))) break;
                                                }
                                            L = (16 + Pg) | 0;
                                        })(a),
                                        (function (a) {
                                            var Qh,
                                                Th,
                                                mh = 0,
                                                Oh = 0,
                                                Ph = 0,
                                                Rh = x(0),
                                                Sh = 0;
                                            if (1 <= (0 | (mh = q[(a + 4) >> 2])))
                                                for (
                                                    Th = ((Oh = q[(a + 8) >> 2]) + w(mh, 12)) | 0, mh = q[(a + 40) >> 2], Ph = q[(a + 52) >> 2], a = Qh = q[(a + 48) >> 2];
                                                    q[mh >> 2] && ((Rh = u[Ph >> 2]), (u[a >> 2] = Rh), -1 != (0 | (Sh = q[(Oh + 4) >> 2]))) && (u[a >> 2] = Rh * u[((Sh << 2) + Qh) >> 2]),
                                                    (a = (a + 4) | 0),
                                                    (Ph = (Ph + 4) | 0),
                                                    (mh = (mh + 4) | 0),
                                                    (Oh = (Oh + 12) | 0) >>> 0 < Th >>> 0;

                                                );
                                        })(a),
                                        (function (a) {
                                            var lh,
                                                ih = 0,
                                                jh = 0,
                                                kh = 0;
                                            if (1 <= (0 | (lh = q[(a + 304) >> 2])))
                                                for (ih = q[(a + 308) >> 2], jh = q[(a + 312) >> 2]; q[jh >> 2] && n[q[(ih + 20) >> 2]](a, kh), (jh = (jh + 4) | 0), (ih = (ih + 32) | 0), (0 | lh) != (0 | (kh = (kh + 1) | 0)););
                                        })(a),
                                        (function (a) {
                                            var Zg,
                                                _g,
                                                ch,
                                                gh,
                                                hh,
                                                Xg = 0,
                                                Yg = 0,
                                                $g = (x(0), x(0), 0),
                                                ah = 0,
                                                bh = 0,
                                                dh = (x(0), 0),
                                                eh = 0,
                                                fh = 0;
                                            if (1 <= (0 | (Xg = q[(a + 332) >> 2])))
                                                for (
                                                    eh = ((Yg = q[(a + 336) >> 2]) + w(Xg, 20)) | 0, fh = q[(a + 308) >> 2], dh = q[(a + 316) >> 2], hh = q[(a + 48) >> 2], Xg = q[(a + 448) >> 2], $g = q[(a + 444) >> 2], bh = q[(a + 424) >> 2];
                                                    q[bh >> 2] &&
                                                    (-1 != (0 | (ah = q[(Yg + 4) >> 2])) && (u[Xg >> 2] = u[((ah << 2) + hh) >> 2] * u[Xg >> 2]), -1 != (0 | (ah = q[(Yg + 8) >> 2]))) &&
                                                    ((u[Xg >> 2] = u[(dh + (ah << 2)) >> 2] * u[Xg >> 2]), (gh = q[$g >> 2]), n[q[(24 + ((fh + (ah << 5)) | 0)) >> 2]](a, ah, gh, gh, q[(Yg + 16) >> 2])),
                                                    ($g = ($g + 4) | 0),
                                                    (Xg = (Xg + 4) | 0),
                                                    (bh = (bh + 4) | 0),
                                                    (Yg = (Yg + 20) | 0) >>> 0 < eh >>> 0;

                                                );
                                            if (!(r[(q[a >> 2] + 4) | 0] < 4 || (0 | (Xg = q[(a + 332) >> 2])) < 1))
                                                for (
                                                    ah = (($g = q[(a + 336) >> 2]) + w(Xg, 20)) | 0, eh = q[(a + 328) >> 2], fh = q[(a + 324) >> 2], Yg = q[(a + 452) >> 2], Xg = q[(a + 456) >> 2], bh = q[(a + 424) >> 2];
                                                    q[bh >> 2] &&
                                                    -1 != (0 | (a = q[($g + 8) >> 2])) &&
                                                    ((a = ((dh = a << 4) + fh) | 0),
                                                        (Zg = x(u[Yg >> 2] * u[a >> 2])),
                                                        (u[Yg >> 2] = Zg),
                                                        (_g = x(u[(Yg + 4) >> 2] * u[(a + 4) >> 2])),
                                                        (u[(Yg + 4) >> 2] = _g),
                                                        (ch = u[(a + 8) >> 2]),
                                                        (q[(Yg + 12) >> 2] = 1065353216),
                                                        (u[(Yg + 4) >> 2] = _g < x(0) ? x(0) : x(A(_g, x(1)))),
                                                        (u[Yg >> 2] = Zg < x(0) ? x(0) : x(A(Zg, x(1)))),
                                                        (Zg = x(ch * u[(Yg + 8) >> 2])),
                                                        (u[(Yg + 8) >> 2] = Zg < x(0) ? x(0) : x(A(Zg, x(1)))),
                                                        (Zg = u[Xg >> 2]),
                                                        (_g = u[(a = (eh + dh) | 0) >> 2]),
                                                        (Zg = x(x(Zg + _g) - x(Zg * _g))),
                                                        (u[Xg >> 2] = Zg),
                                                        (_g = u[(Xg + 4) >> 2]),
                                                        (ch = u[(a + 4) >> 2]),
                                                        (_g = x(x(_g + ch) - x(_g * ch))),
                                                        (u[(Xg + 4) >> 2] = _g),
                                                        (ch = u[(a + 8) >> 2]),
                                                        (q[(Xg + 12) >> 2] = 1065353216),
                                                        (u[(Xg + 4) >> 2] = _g < x(0) ? x(0) : x(A(_g, x(1)))),
                                                        (u[Xg >> 2] = Zg < x(0) ? x(0) : x(A(Zg, x(1)))),
                                                        (Zg = u[(Xg + 8) >> 2]),
                                                        (Zg = x(x(ch + Zg) - x(Zg * ch))),
                                                        (u[(Xg + 8) >> 2] = Zg < x(0) ? x(0) : x(A(Zg, x(1))))),
                                                    (Xg = (Xg + 16) | 0),
                                                    (Yg = (Yg + 16) | 0),
                                                    (bh = (bh + 4) | 0),
                                                    ($g = ($g + 20) | 0) >>> 0 < ah >>> 0;

                                                );
                                        })(a),
                                        (function (a) {
                                            var Ln,
                                                Mn,
                                                On,
                                                Ko,
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
                                                Nn = 0;
                                            x(0), x(0), x(0), x(0), x(0), x(0), x(0);
                                            if (1 <= (0 | (Oo = q[(a + 500) >> 2])))
                                                for (Zo = q[(a + 536) >> 2], Po = q[(a + 444) >> 2], _o = q[(a + 504) >> 2]; ;) {
                                                    if (((a = (w(Nn, 24) + _o) | 0), 0 < (0 | (Qo = q[(a + 12) >> 2]))))
                                                        for (
                                                            On = u[((Nn << 2) + Zo) >> 2], Ro = q[(a + 20) >> 2], So = q[(a + 16) >> 2], To = q[((q[(a + 4) >> 2] << 2) + Po) >> 2], Uo = q[((q[(a + 8) >> 2] << 2) + Po) >> 2], a = 0;
                                                            (Vo = u[(((Ln = 1 | a) << 2) + So) >> 2]),
                                                            (Mn = (s[((a << 1) + Ro) >> 1] << 3) & 262136),
                                                            (Ko = u[(Wo = ((4 | Mn) + To) | 0) >> 2]),
                                                            (Ln = (s[((Ln << 1) + Ro) >> 1] << 3) & 262136),
                                                            (Lo = u[(Xo = ((4 | Ln) + Uo) | 0) >> 2]),
                                                            (Mo = u[(Mn = (Mn + To) | 0) >> 2]),
                                                            (Yo = u[((a << 2) + So) >> 2]),
                                                            (No = u[(Ln = (Ln + Uo) | 0) >> 2]),
                                                            (u[Mn >> 2] = Mo + x(On * x(Yo * x(No - Mo)))),
                                                            (u[Wo >> 2] = Ko + x(On * x(Yo * x(Lo - Ko)))),
                                                            (u[Ln >> 2] = No + x(On * x(Vo * x(Mo - No)))),
                                                            (u[Xo >> 2] = Lo + x(On * x(Vo * x(Ko - Lo)))),
                                                            (0 | (a = (a + 2) | 0)) < (0 | Qo);

                                                        );
                                                    if (!((0 | (Nn = (Nn + 1) | 0)) < (0 | Oo))) break;
                                                }
                                        })(a),
                                        n[q[1810]](a),
                                        (function (a) {
                                            var Rc,
                                                Sc,
                                                Uc,
                                                Vc,
                                                Gc = 0,
                                                Ic = 0,
                                                Jc = 0,
                                                Kc = 0,
                                                Lc = 0,
                                                Mc = 0,
                                                Nc = 0,
                                                Oc = 0,
                                                Pc = 0,
                                                Qc = 0,
                                                Tc = 0;
                                            if (!((0 | (Rc = q[(a + 480) >> 2])) < 1)) {
                                                for (Kc = ((Sc = q[(a + 484) >> 2]) + w(Rc, 28)) | 0, Nc = q[(a + 424) >> 2], Oc = q[(a + 40) >> 2], Lc = q[(a + 44) >> 2], Tc = q[(a + 440) >> 2], Gc = Sc; ;) {
                                                    if (1 <= (0 | (Mc = q[(Gc + 4) >> 2])))
                                                        for (
                                                            Qc = (Gc + 20) | 0, Pc = q[(Gc + 12) >> 2], Ic = 0;
                                                            (Uc = q[(4 + (Jc = (Pc + (Ic << 4)) | 0)) >> 2] << 2),
                                                            (Jc = 1 == q[(Vc = Jc) >> 2]),
                                                            (q[(Vc + 12) >> 2] = q[(q[((Jc ? Oc : Nc) + Uc) >> 2] ? ((Jc ? Lc : Tc) + Uc) | 0 : Qc) >> 2]),
                                                            (0 | (Ic = (Ic + 1) | 0)) < (0 | Mc);

                                                        );
                                                    if (!((Gc = (Gc + 28) | 0) >>> 0 < Kc >>> 0)) break;
                                                }
                                                if (!((0 | Rc) < 1))
                                                    for (Tc = q[(a + 436) >> 2], Oc = 0; ;) {
                                                        if (((Kc = (w(Oc, 28) + Sc) | 0), !(q[((Nc = Kc) + 24) >> 2] < 1))) {
                                                            for (Jc = q[(a + 488) >> 2], Ic = 0; (q[(Jc + (Ic << 2)) >> 2] = -1), (0 | (Ic = (Ic + 1) | 0)) < (0 | (Gc = q[(Nc + 24) >> 2])););
                                                            if (!((0 | Gc) < 1)) for (Gc = q[(a + 496) >> 2], Ic = 0; (q[(Gc + (Ic << 2)) >> 2] = -1), (0 | (Ic = (Ic + 1) | 0)) < q[(Nc + 24) >> 2];);
                                                        }
                                                        if (!(q[(Kc + 4) >> 2] < 1)) {
                                                            for (Lc = q[(a + 492) >> 2], Ic = 0; (q[(Lc + (Ic << 2)) >> 2] = -1), (0 | (Ic = (Ic + 1) | 0)) < (0 | (Gc = q[(Kc + 4) >> 2])););
                                                            if (!((0 | Gc) < 1))
                                                                for (
                                                                    Mc = q[(Kc + 12) >> 2], Qc = q[(a + 496) >> 2], Ic = 0;
                                                                    (Pc = (q[(12 + ((Mc + (Ic << 4)) | 0)) >> 2] - q[(Kc + 20) >> 2]) << 2),
                                                                    (Gc = -1 == (0 | (Gc = q[(Jc = (Pc + Qc) | 0) >> 2])) ? (Pc + q[(a + 488) >> 2]) | 0 : (Lc + (Gc << 2)) | 0),
                                                                    (q[Gc >> 2] = Ic),
                                                                    (0 | (Ic = ((q[Jc >> 2] = Ic) + 1) | 0)) < q[(Kc + 4) >> 2];

                                                                );
                                                        }
                                                        if (1 <= (0 | (Gc = q[(Nc + 24) >> 2])))
                                                            for (Lc = q[(Kc + 8) >> 2], Qc = q[(a + 488) >> 2], Mc = 0; ;) {
                                                                if (-1 != (0 | (Ic = q[(Qc + (Mc << 2)) >> 2]))) {
                                                                    for (
                                                                        Pc = q[(a + 492) >> 2], Jc = q[(Kc + 12) >> 2];
                                                                        (Lc =
                                                                            ((Gc =
                                                                                1 == q[(Gc = (Jc + (Ic << 4)) | 0) >> 2]
                                                                                    ? ((Gc = (w(q[(Gc + 8) >> 2], 28) + Sc) | 0), (q[(Gc + 8) >> 2] = Lc), q[Gc >> 2])
                                                                                    : ((q[(Tc + (q[(Gc + 4) >> 2] << 2)) >> 2] = Lc), 1)) +
                                                                                Lc) |
                                                                            0),
                                                                        (0 | Ic) < (0 | (Gc = q[(Pc + (Ic << 2)) >> 2])) && -1 != (0 | (Ic = Gc));

                                                                    );
                                                                    Gc = q[(Nc + 24) >> 2];
                                                                }
                                                                if (!((0 | (Mc = (Mc + 1) | 0)) < (0 | Gc))) break;
                                                            }
                                                        if ((0 | Rc) == (0 | (Oc = (Oc + 1) | 0))) break;
                                                    }
                                            }
                                        })(a),
                                        (function (a) {
                                            var Bg = 0,
                                                Cg = 0,
                                                Dg = 0,
                                                Eg = 0,
                                                Gg = 0,
                                                Hg = x(0),
                                                Ig = 0,
                                                Jg = 0,
                                                Fg = q[(a + 332) >> 2];
                                            if (q[(a + 644) >> 2]) {
                                                if (!(((q[(a + 428) >> 2] = 0) | Fg) < 1))
                                                    for (
                                                        ;
                                                        (Bg = 126),
                                                        (Ig = (q[(a + 432) >> 2] + Dg) | 0),
                                                        !q[((Cg = Dg << 2) + q[(a + 424) >> 2]) >> 2] | (u[(Cg + q[(a + 448) >> 2]) >> 2] == x(0)) || (Bg = 127),
                                                        (o[0 | Ig] = Bg),
                                                        (0 | Fg) != (0 | (Dg = (Dg + 1) | 0));

                                                    );
                                            } else if (q[(a + 428) >> 2]) {
                                                if (((Bg = r[(q[a >> 2] + 4) | 0]), !(((q[(a + 428) >> 2] = 0) | Fg) < 1)))
                                                    if (4 <= Bg >>> 0)
                                                        for (
                                                            ;
                                                            (Hg = u[((Bg = Dg << 2) + q[(a + 448) >> 2]) >> 2]),
                                                            (Eg = q[(Bg + q[(a + 424) >> 2]) >> 2]),
                                                            (Cg = (Hg != x(0)) & (0 != (0 | Eg))),
                                                            (Ig = (q[(a + 432) >> 2] + Dg) | 0),
                                                            (Cg = (0 | Cg) == (1 & o[0 | Ig]) ? Cg : 2 | Cg),
                                                            (Cg = Hg != u[(Bg + q[(a + 468) >> 2]) >> 2] ? 4 | Cg : Cg),
                                                            (Cg = q[(Bg + q[(a + 440) >> 2]) >> 2] == q[(Bg + q[(a + 464) >> 2]) >> 2] ? Cg : 8 | Cg),
                                                            (Bg = q[(Bg + q[(a + 436) >> 2]) >> 2] == q[(Bg + q[(a + 460) >> 2]) >> 2] ? Cg : 16 | Cg),
                                                            (Bg = Eg ? 32 | Bg : Bg),
                                                            (Eg = ((Cg = Jg << 2) + q[(a + 452) >> 2]) | 0),
                                                            (Gg = (Cg + q[(a + 472) >> 2]) | 0),
                                                            ((u[Eg >> 2] != u[Gg >> 2]) | (u[(Eg + 4) >> 2] != u[(Gg + 4) >> 2]) | ((u[(Eg + 8) >> 2] != u[(Gg + 8) >> 2]) | (u[(Eg + 12) >> 2] != u[(Gg + 12) >> 2])) ||
                                                                ((Eg = (Cg + q[(a + 456) >> 2]) | 0),
                                                                    (Cg = (Cg + q[(a + 476) >> 2]) | 0),
                                                                    (u[Eg >> 2] != u[Cg >> 2]) | (u[(Eg + 4) >> 2] != u[(Cg + 4) >> 2]) | (u[(Eg + 8) >> 2] != u[(Cg + 8) >> 2])) ||
                                                                u[(Eg + 12) >> 2] != u[(Cg + 12) >> 2]) &&
                                                            (Bg |= 64),
                                                            (o[0 | Ig] = Bg),
                                                            (Jg = (Jg + 4) | 0),
                                                            (0 | Fg) != (0 | (Dg = (Dg + 1) | 0));

                                                        );
                                                    else
                                                        for (
                                                            ;
                                                            (Hg = u[((Bg = Dg << 2) + q[(a + 448) >> 2]) >> 2]),
                                                            (Eg = q[(Bg + q[(a + 424) >> 2]) >> 2]),
                                                            (Cg = (Hg != x(0)) & (0 != (0 | Eg))),
                                                            (Gg = (q[(a + 432) >> 2] + Dg) | 0),
                                                            (Cg = (0 | Cg) == (1 & o[0 | Gg]) ? Cg : 2 | Cg),
                                                            (Cg = Hg != u[(Bg + q[(a + 468) >> 2]) >> 2] ? 4 | Cg : Cg),
                                                            (Cg = q[(Bg + q[(a + 440) >> 2]) >> 2] == q[(Bg + q[(a + 464) >> 2]) >> 2] ? Cg : 8 | Cg),
                                                            (Bg = q[(Bg + q[(a + 436) >> 2]) >> 2] == q[(Bg + q[(a + 460) >> 2]) >> 2] ? Cg : 16 | Cg),
                                                            (o[0 | Gg] = Eg ? 32 | Bg : Bg),
                                                            (0 | Fg) != (0 | (Dg = (Dg + 1) | 0));

                                                        );
                                            } else if (!((0 | Fg) < 1))
                                                for (
                                                    ;
                                                    !q[((Bg = Dg << 2) + q[(a + 424) >> 2]) >> 2] | (u[(Bg + q[(a + 448) >> 2]) >> 2] == x(0))
                                                        ? ((Bg = (q[(a + 432) >> 2] + Dg) | 0), (o[0 | Bg] = 254 & r[0 | Bg]))
                                                        : ((Bg = (q[(a + 432) >> 2] + Dg) | 0), (o[0 | Bg] = 1 | r[0 | Bg])),
                                                    (0 | Fg) != (0 | (Dg = (Dg + 1) | 0));

                                                );
                                        })(a),
                                        (q[(a + 644) >> 2] = 0);
                                }
                                function va(a, Wa, Xa, Ya, Za, _a) {
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
                                        for (kb = (w(Wa, 12) + Xa) | 0; ;) {
                                            if (!((0 | (ab = q[(Xa + 4) >> 2])) < 1))
                                                if (((fb = ((Wa = q[(Xa + 8) >> 2]) + w(ab, 48)) | 0), (ab = q[Xa >> 2] << 2), 1 <= (0 | (db = q[(ab + _a) >> 2]))))
                                                    for (db <<= 1, gb = q[(q[a >> 2] + 1052) >> 2], hb = q[(Za + ab) >> 2]; ;) {
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
                                                            for (ab = 0; (u[(eb = ((bb = ab << 2) + hb) | 0) >> 2] = u[eb >> 2] + x(u[(Wa + 44) >> 2] * x(u[(bb + ib) >> 2] * u[(Wa + 20) >> 2]))), (0 | db) != (0 | (ab = (ab + 1) | 0)););
                                                        }
                                                        if (!((Wa = (Wa + 48) | 0) >>> 0 < fb >>> 0)) break;
                                                    }
                                                else for (; 3 <= (ab = q[(Wa + 8) >> 2]) >>> 0 && ((q[(16 + cb) >> 2] = ab), Y(4, 1024, (16 + cb) | 0)), (Wa = (Wa + 48) | 0) >>> 0 < fb >>> 0;);
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
                                                        (Wa = (function (a, Il, Jl) {
                                                            var jm,
                                                                $l = 0,
                                                                hm = 0,
                                                                im = 0,
                                                                km = 0,
                                                                lm = 0,
                                                                mm = 0,
                                                                nm = 0,
                                                                om = 0,
                                                                pm = 0,
                                                                qm = 0,
                                                                rm = 0,
                                                                sm = 0,
                                                                tm = 0,
                                                                um = x(0),
                                                                vm = 0,
                                                                wm = 0,
                                                                xm = 0,
                                                                ym = 0,
                                                                zm = 0;
                                                            if ((ca((16 + (L = jm = (L - 576) | 0)) | 0, 0, 560), Fa(a, (16 + jm) | 0, (12 + jm) | 0), (km = q[(12 + jm) >> 2]) >>> 0 <= Jl >>> 0)) {
                                                                if (
                                                                    (($l = ((hm = ca(Il, 0, km)) + q[(16 + jm) >> 2]) | 0),
                                                                        (q[($l + 8) >> 2] = hm + q[(20 + jm) >> 2]),
                                                                        (q[($l + 40) >> 2] = hm + q[(24 + jm) >> 2]),
                                                                        (q[($l + 44) >> 2] = hm + q[(28 + jm) >> 2]),
                                                                        (q[($l + 48) >> 2] = hm + q[(32 + jm) >> 2]),
                                                                        (q[($l + 52) >> 2] = hm + q[(36 + jm) >> 2]),
                                                                        (q[($l + 16) >> 2] = hm + q[(40 + jm) >> 2]),
                                                                        (q[($l + 24) >> 2] = hm + q[(44 + jm) >> 2]),
                                                                        (q[($l + 28) >> 2] = hm + q[(48 + jm) >> 2]),
                                                                        (q[($l + 32) >> 2] = hm + q[(52 + jm) >> 2]),
                                                                        (q[($l + 36) >> 2] = hm + q[(56 + jm) >> 2]),
                                                                        (Il = q[(a + 704) >> 2]),
                                                                        (q[($l + 308) >> 2] = hm + q[(60 + jm) >> 2]),
                                                                        (q[($l + 312) >> 2] = hm + q[(64 + jm) >> 2]),
                                                                        (q[($l + 316) >> 2] = hm + q[(68 + jm) >> 2]),
                                                                        (q[($l + 320) >> 2] = hm + q[(72 + jm) >> 2]),
                                                                        (q[($l + 324) >> 2] = hm + q[(76 + jm) >> 2]),
                                                                        (q[($l + 328) >> 2] = hm + q[(80 + jm) >> 2]),
                                                                        (q[($l + 60) >> 2] = hm + q[(84 + jm) >> 2]),
                                                                        (q[($l + 144) >> 2] = hm + q[(88 + jm) >> 2]),
                                                                        (q[($l + 148) >> 2] = hm + q[(92 + jm) >> 2]),
                                                                        (Jl = (hm + q[(96 + jm) >> 2]) | 0),
                                                                        (q[($l + 152) >> 2] = Jl),
                                                                        !((0 | (km = q[(Il + 8) >> 2])) < 1) && ((Il = (hm + q[(100 + jm) >> 2]) | 0), (q[Jl >> 2] = Il), 1 != (0 | km)))
                                                                )
                                                                    for (
                                                                        Jl = 1;
                                                                        (Il = (((15 + (q[(q[(a + 796) >> 2] + (im << 2)) >> 2] << 3)) & -16) + Il) | 0),
                                                                        (q[(q[($l + 152) >> 2] + (Jl << 2)) >> 2] = Il),
                                                                        (0 | km) != (0 | (Jl = ((im = Jl) + 1) | 0));

                                                                    );
                                                                if (
                                                                    ((q[($l + 156) >> 2] = hm + q[(104 + jm) >> 2]),
                                                                        (q[($l + 160) >> 2] = hm + q[(108 + jm) >> 2]),
                                                                        (q[($l + 68) >> 2] = hm + q[(112 + jm) >> 2]),
                                                                        (q[($l + 76) >> 2] = hm + q[(116 + jm) >> 2]),
                                                                        (q[($l + 80) >> 2] = hm + q[(120 + jm) >> 2]),
                                                                        (q[($l + 84) >> 2] = hm + q[(124 + jm) >> 2]),
                                                                        (q[($l + 88) >> 2] = hm + q[(128 + jm) >> 2]),
                                                                        (q[($l + 92) >> 2] = hm + q[(132 + jm) >> 2]),
                                                                        (q[($l + 96) >> 2] = hm + q[(136 + jm) >> 2]),
                                                                        (q[($l + 100) >> 2] = hm + q[(140 + jm) >> 2]),
                                                                        (q[($l + 104) >> 2] = hm + q[(144 + jm) >> 2]),
                                                                        (q[($l + 108) >> 2] = hm + q[(148 + jm) >> 2]),
                                                                        (q[($l + 112) >> 2] = hm + q[(152 + jm) >> 2]),
                                                                        (q[($l + 116) >> 2] = hm + q[(156 + jm) >> 2]),
                                                                        (q[($l + 120) >> 2] = hm + q[(160 + jm) >> 2]),
                                                                        (q[($l + 124) >> 2] = hm + q[(164 + jm) >> 2]),
                                                                        (q[($l + 128) >> 2] = hm + q[(168 + jm) >> 2]),
                                                                        (q[($l + 132) >> 2] = hm + q[(172 + jm) >> 2]),
                                                                        (q[($l + 136) >> 2] = hm + q[(176 + jm) >> 2]),
                                                                        (q[($l + 140) >> 2] = hm + q[(180 + jm) >> 2]),
                                                                        (q[($l + 168) >> 2] = hm + q[(184 + jm) >> 2]),
                                                                        (q[($l + 264) >> 2] = hm + q[(188 + jm) >> 2]),
                                                                        (q[($l + 268) >> 2] = hm + q[(192 + jm) >> 2]),
                                                                        (q[($l + 272) >> 2] = hm + q[(196 + jm) >> 2]),
                                                                        (q[($l + 276) >> 2] = hm + q[(200 + jm) >> 2]),
                                                                        (q[($l + 280) >> 2] = hm + q[(204 + jm) >> 2]),
                                                                        (q[($l + 284) >> 2] = hm + q[(208 + jm) >> 2]),
                                                                        (q[($l + 288) >> 2] = hm + q[(212 + jm) >> 2]),
                                                                        (q[($l + 292) >> 2] = hm + q[(216 + jm) >> 2]),
                                                                        (q[($l + 296) >> 2] = hm + q[(220 + jm) >> 2]),
                                                                        (q[($l + 300) >> 2] = hm + q[(224 + jm) >> 2]),
                                                                        (q[($l + 176) >> 2] = hm + q[(228 + jm) >> 2]),
                                                                        (q[($l + 184) >> 2] = hm + q[(232 + jm) >> 2]),
                                                                        (q[($l + 188) >> 2] = hm + q[(236 + jm) >> 2]),
                                                                        (q[($l + 192) >> 2] = hm + q[(240 + jm) >> 2]),
                                                                        (q[($l + 196) >> 2] = hm + q[(244 + jm) >> 2]),
                                                                        (q[($l + 200) >> 2] = hm + q[(248 + jm) >> 2]),
                                                                        (q[($l + 204) >> 2] = hm + q[(252 + jm) >> 2]),
                                                                        (q[($l + 208) >> 2] = hm + q[(256 + jm) >> 2]),
                                                                        (q[($l + 212) >> 2] = hm + q[(260 + jm) >> 2]),
                                                                        (q[($l + 216) >> 2] = hm + q[(264 + jm) >> 2]),
                                                                        (q[($l + 220) >> 2] = hm + q[(268 + jm) >> 2]),
                                                                        (q[($l + 224) >> 2] = hm + q[(272 + jm) >> 2]),
                                                                        (q[($l + 228) >> 2] = hm + q[(276 + jm) >> 2]),
                                                                        (q[($l + 232) >> 2] = hm + q[(280 + jm) >> 2]),
                                                                        (q[($l + 236) >> 2] = hm + q[(284 + jm) >> 2]),
                                                                        (q[($l + 240) >> 2] = hm + q[(288 + jm) >> 2]),
                                                                        (q[($l + 244) >> 2] = hm + q[(292 + jm) >> 2]),
                                                                        (q[($l + 248) >> 2] = hm + q[(296 + jm) >> 2]),
                                                                        (q[($l + 252) >> 2] = hm + q[(300 + jm) >> 2]),
                                                                        (q[($l + 256) >> 2] = hm + q[(304 + jm) >> 2]),
                                                                        (q[($l + 260) >> 2] = hm + q[(308 + jm) >> 2]),
                                                                        (Il = q[(a + 704) >> 2]),
                                                                        (q[($l + 336) >> 2] = hm + q[(312 + jm) >> 2]),
                                                                        (q[($l + 424) >> 2] = hm + q[(316 + jm) >> 2]),
                                                                        (q[($l + 432) >> 2] = hm + q[(320 + jm) >> 2]),
                                                                        (q[($l + 436) >> 2] = hm + q[(324 + jm) >> 2]),
                                                                        (q[($l + 440) >> 2] = hm + q[(328 + jm) >> 2]),
                                                                        (Jl = (hm + q[(332 + jm) >> 2]) | 0),
                                                                        (q[($l + 444) >> 2] = Jl),
                                                                        !((0 | (km = q[(Il + 16) >> 2])) < 1) && ((im = (hm + q[(336 + jm) >> 2]) | 0), (q[Jl >> 2] = im), (Jl = 1) != (0 | km)))
                                                                )
                                                                    for (
                                                                        Il = 0;
                                                                        (im = (((15 + (q[(q[(a + 892) >> 2] + (Il << 2)) >> 2] << 3)) & -16) + im) | 0),
                                                                        (q[(q[($l + 444) >> 2] + (Jl << 2)) >> 2] = im),
                                                                        (0 | km) != (0 | (Jl = ((Il = Jl) + 1) | 0));

                                                                    );
                                                                if (
                                                                    ((q[($l + 448) >> 2] = hm + q[(340 + jm) >> 2]),
                                                                        (q[($l + 452) >> 2] = hm + q[(344 + jm) >> 2]),
                                                                        (q[($l + 456) >> 2] = hm + q[(348 + jm) >> 2]),
                                                                        (q[($l + 460) >> 2] = hm + q[(352 + jm) >> 2]),
                                                                        (q[($l + 464) >> 2] = hm + q[(356 + jm) >> 2]),
                                                                        (q[($l + 468) >> 2] = hm + q[(360 + jm) >> 2]),
                                                                        (q[($l + 472) >> 2] = hm + q[(364 + jm) >> 2]),
                                                                        (q[($l + 476) >> 2] = hm + q[(368 + jm) >> 2]),
                                                                        (q[($l + 344) >> 2] = hm + q[(372 + jm) >> 2]),
                                                                        (q[($l + 352) >> 2] = hm + q[(376 + jm) >> 2]),
                                                                        (q[($l + 356) >> 2] = hm + q[(380 + jm) >> 2]),
                                                                        (q[($l + 360) >> 2] = hm + q[(384 + jm) >> 2]),
                                                                        (q[($l + 364) >> 2] = hm + q[(388 + jm) >> 2]),
                                                                        (q[($l + 368) >> 2] = hm + q[(392 + jm) >> 2]),
                                                                        (q[($l + 372) >> 2] = hm + q[(396 + jm) >> 2]),
                                                                        (q[($l + 376) >> 2] = hm + q[(400 + jm) >> 2]),
                                                                        (q[($l + 380) >> 2] = hm + q[(404 + jm) >> 2]),
                                                                        (q[($l + 384) >> 2] = hm + q[(408 + jm) >> 2]),
                                                                        (q[($l + 388) >> 2] = hm + q[(412 + jm) >> 2]),
                                                                        (q[($l + 392) >> 2] = hm + q[(416 + jm) >> 2]),
                                                                        (q[($l + 396) >> 2] = hm + q[(420 + jm) >> 2]),
                                                                        (q[($l + 400) >> 2] = hm + q[(424 + jm) >> 2]),
                                                                        (q[($l + 404) >> 2] = hm + q[(428 + jm) >> 2]),
                                                                        (q[($l + 408) >> 2] = hm + q[(432 + jm) >> 2]),
                                                                        (q[($l + 412) >> 2] = hm + q[(436 + jm) >> 2]),
                                                                        (q[($l + 416) >> 2] = hm + q[(440 + jm) >> 2]),
                                                                        (q[($l + 420) >> 2] = hm + q[(444 + jm) >> 2]),
                                                                        (Il = q[(448 + jm) >> 2]),
                                                                        (Jl = q[(452 + jm) >> 2]),
                                                                        (q[($l + 552) >> 2] = hm + q[(456 + jm) >> 2]),
                                                                        (q[($l + 548) >> 2] = Jl + hm),
                                                                        (q[($l + 544) >> 2] = Il + hm),
                                                                        (q[($l + 560) >> 2] = hm + q[(460 + jm) >> 2]),
                                                                        (Il = q[(a + 704) >> 2]),
                                                                        (nm = (hm + q[(464 + jm) >> 2]) | 0),
                                                                        (q[($l + 568) >> 2] = nm),
                                                                        1 <= (0 | (mm = q[(Il + 48) >> 2])))
                                                                )
                                                                    for (
                                                                        im = (hm + q[(468 + jm) >> 2]) | 0, Il = (hm + q[(472 + jm) >> 2]) | 0, lm = (hm + q[(476 + jm) >> 2]) | 0, om = q[(a + 1072) >> 2], Jl = 0;
                                                                        (km = (nm + w(Jl, 36)) | 0),
                                                                        (q[(km + 20) >> 2] = lm),
                                                                        (q[(km + 16) >> 2] = Il),
                                                                        (q[km >> 2] = im),
                                                                        (im = (((km = q[(om + (Jl << 2)) >> 2]) << 2) + im) | 0),
                                                                        (lm = ((km = (1 << km) << 2) + lm) | 0),
                                                                        (Il = (Il + km) | 0),
                                                                        (0 | mm) != (0 | (Jl = (Jl + 1) | 0));

                                                                    );
                                                                if (((Il = q[(a + 704) >> 2]), (km = (hm + q[(516 + jm) >> 2]) | 0), (q[($l + 484) >> 2] = km), 1 <= (0 | (Il = q[(Il + 72) >> 2]))))
                                                                    for (
                                                                        im = (hm + q[(520 + jm) >> 2]) | 0, lm = q[(a + 1212) >> 2], Jl = 0;
                                                                        (q[(12 + ((km + w(Jl, 28)) | 0)) >> 2] = im), (im = ((q[(lm + (Jl << 2)) >> 2] << 4) + im) | 0), (0 | Il) != (0 | (Jl = (Jl + 1) | 0));

                                                                    );
                                                                (q[($l + 488) >> 2] = hm + q[(524 + jm) >> 2]),
                                                                    (q[($l + 492) >> 2] = hm + q[(528 + jm) >> 2]),
                                                                    (q[($l + 496) >> 2] = hm + q[(532 + jm) >> 2]),
                                                                    (q[($l + 504) >> 2] = hm + q[(536 + jm) >> 2]),
                                                                    (q[($l + 536) >> 2] = hm + q[(540 + jm) >> 2]),
                                                                    (q[($l + 512) >> 2] = hm + q[(544 + jm) >> 2]),
                                                                    (q[($l + 520) >> 2] = hm + q[(548 + jm) >> 2]),
                                                                    (q[($l + 524) >> 2] = hm + q[(552 + jm) >> 2]),
                                                                    (q[($l + 528) >> 2] = hm + q[(556 + jm) >> 2]),
                                                                    (q[($l + 532) >> 2] = hm + q[(560 + jm) >> 2]);
                                                                c: {
                                                                    if (4 <= (mm = r[(a + 4) | 0]) >>> 0) {
                                                                        if (
                                                                            ((q[($l + 576) >> 2] = hm + q[(480 + jm) >> 2]),
                                                                                (q[($l + 584) >> 2] = hm + q[(484 + jm) >> 2]),
                                                                                (Il = q[(a + 704) >> 2]),
                                                                                (Jl = q[(492 + jm) >> 2]),
                                                                                (km = (hm + q[(488 + jm) >> 2]) | 0),
                                                                                (q[($l + 592) >> 2] = km),
                                                                                1 <= (0 | (Il = q[(Il + 104) >> 2])))
                                                                        )
                                                                            for (
                                                                                im = (Jl + hm) | 0, lm = q[(a + 1104) >> 2], Jl = 0;
                                                                                (q[(40 + ((km + w(Jl, 48)) | 0)) >> 2] = im), (im = ((q[(lm + (Jl << 2)) >> 2] << 2) + im) | 0), (0 | Il) != (0 | (Jl = (Jl + 1) | 0));

                                                                            );
                                                                        (q[($l + 608) >> 2] = hm + q[(500 + jm) >> 2]), (q[($l + 624) >> 2] = hm + q[(508 + jm) >> 2]);
                                                                    } else {
                                                                        if (
                                                                            ((Il = q[(572 + jm) >> 2]),
                                                                                (Jl = q[(568 + jm) >> 2]),
                                                                                (q[($l + 636) >> 2] = hm + q[(564 + jm) >> 2]),
                                                                                (q[($l + 640) >> 2] = Jl + hm),
                                                                                q[(q[(a + 704) >> 2] + 20) >> 2] < 1)
                                                                        )
                                                                            break c;
                                                                        for (km = (Il + hm) | 0, nm = 0; ;) {
                                                                            e: {
                                                                                if ((0 | (im = q[((Il = nm << 2) + q[(a + 952) >> 2]) >> 2])) <= 0) Il = (Il + q[($l + 636) >> 2]) | 0;
                                                                                else {
                                                                                    for (
                                                                                        lm = (im + (Jl = q[(Il + q[(a + 948) >> 2]) >> 2])) | 0, om = q[(a + 1060) >> 2], im = 0;
                                                                                        (im = (q[(om + (Jl << 2)) >> 2] + im) | 0), (0 | (Jl = (Jl + 1) | 0)) < (0 | lm);

                                                                                    );
                                                                                    if (((Il = (Il + q[($l + 636) >> 2]) | 0), (Jl = km), im)) break e;
                                                                                }
                                                                                Jl = im = 0;
                                                                            }
                                                                            if (((q[Il >> 2] = Jl), (km = ((im << 2) + km) | 0), !((0 | (nm = (nm + 1) | 0)) < q[(q[(a + 704) >> 2] + 20) >> 2]))) break;
                                                                        }
                                                                    }
                                                                    mm >>> 0 < 5 || ((q[($l + 600) >> 2] = hm + q[(496 + jm) >> 2]), (q[($l + 616) >> 2] = hm + q[(504 + jm) >> 2]), (q[($l + 632) >> 2] = hm + q[(512 + jm) >> 2]));
                                                                }
                                                                (q[($l + 644) >> 2] = 1), (q[$l >> 2] = a), (q[($l + 648) >> 2] = 1 & o[(q[(a + 708) >> 2] + 20) | 0]), (hm = q[(a + 704) >> 2]), (nm = q[(hm + 20) >> 2]);
                                                                g: if (!((0 | (q[($l + 540) >> 2] = nm)) < 1)) {
                                                                    if (
                                                                        ((Il = (nm + -1) | 0),
                                                                            (om = q[(a + 952) >> 2]),
                                                                            (pm = q[(a + 940) >> 2]),
                                                                            (qm = q[(a + 932) >> 2]),
                                                                            (rm = q[(a + 936) >> 2]),
                                                                            (sm = q[(a + 924) >> 2]),
                                                                            (tm = q[(a + 928) >> 2]),
                                                                            (vm = q[($l + 552) >> 2]),
                                                                            (xm = q[($l + 544) >> 2]),
                                                                            mm >>> 0 < 4)
                                                                    )
                                                                        for (; ;)
                                                                            if (
                                                                                ((Jl = (xm + w(Il, 52)) | 0),
                                                                                    (im = ((km = Il << 2) + tm) | (q[Jl >> 2] = 0)),
                                                                                    (q[(Jl + 4) >> 2] = q[im >> 2]),
                                                                                    (q[(Jl + 8) >> 2] = q[(lm = (km + sm) | 0) >> 2]),
                                                                                    (u[(Jl + 12) >> 2] = u[lm >> 2] - u[im >> 2]),
                                                                                    (q[(Jl + 16) >> 2] = q[(km + rm) >> 2]),
                                                                                    (q[(Jl + 44) >> 2] = q[(im = (km + qm) | 0) >> 2]),
                                                                                    (um = Aa(x(q[(km + pm) >> 2]))),
                                                                                    (u[(Jl + 20) >> 2] = um),
                                                                                    (u[(Jl + 24) >> 2] = um * x(1.5)),
                                                                                    (wm = q[(km + om) >> 2]),
                                                                                    (lm = 0),
                                                                                    (lm = (q[(Jl + 32) >> 2] = wm) ? (q[($l + 560) >> 2] + w(q[(km + q[(a + 948) >> 2]) >> 2], 28)) | 0 : lm),
                                                                                    (q[(Jl + 48) >> 2] = 1),
                                                                                    (q[(Jl + 28) >> 2] = lm),
                                                                                    (q[(km + vm) >> 2] = q[im >> 2]),
                                                                                    (Jl = 0 < (0 | Il)),
                                                                                    (Il = (Il + -1) | 0),
                                                                                    !Jl)
                                                                            )
                                                                                break g;
                                                                    for (
                                                                        wm = q[(a + 960) >> 2], zm = q[(a + 944) >> 2];
                                                                        (Jl = (xm + w(Il, 52)) | 0),
                                                                        (q[Jl >> 2] = q[((im = Il << 2) + zm) >> 2]),
                                                                        (q[(Jl + 4) >> 2] = q[(km = (im + tm) | 0) >> 2]),
                                                                        (q[(Jl + 8) >> 2] = q[(lm = (im + sm) | 0) >> 2]),
                                                                        (u[(Jl + 12) >> 2] = u[lm >> 2] - u[km >> 2]),
                                                                        (q[(Jl + 16) >> 2] = q[(im + rm) >> 2]),
                                                                        (q[(Jl + 44) >> 2] = q[(ym = (im + qm) | 0) >> 2]),
                                                                        (um = Aa(x(q[(im + pm) >> 2]))),
                                                                        (u[(Jl + 20) >> 2] = um),
                                                                        (u[(Jl + 24) >> 2] = um * x(1.5)),
                                                                        (lm = q[(im + om) >> 2]),
                                                                        (q[(Jl + 32) >> 2] = lm),
                                                                        (q[(Jl + 28) >> 2] = lm ? (q[($l + 560) >> 2] + w(q[(im + q[(a + 948) >> 2]) >> 2], 28)) | 0 : 0),
                                                                        (km = q[(im + wm) >> 2]),
                                                                        (km = (q[(Jl + 40) >> 2] = km) ? (q[($l + 584) >> 2] + w(q[(im + q[(a + 956) >> 2]) >> 2], 28)) | 0 : 0),
                                                                        (q[(Jl + 48) >> 2] = 1),
                                                                        (q[(Jl + 36) >> 2] = km),
                                                                        (q[(im + vm) >> 2] = q[ym >> 2]),
                                                                        (Jl = 0 < (0 | Il)),
                                                                        (Il = (Il + -1) | 0),
                                                                        Jl;

                                                                    );
                                                                }
                                                                if (
                                                                    (4 <= mm >>> 0 ? ((q[($l + 548) >> 2] = q[(a + 944) >> 2]), (km = a)) : (ca(q[($l + 548) >> 2], 0, nm << 2), (km = q[$l >> 2]), (hm = q[(km + 704) >> 2])),
                                                                        (im = q[(hm + 52) >> 2]),
                                                                        1 <= (0 | (q[($l + 556) >> 2] = im)))
                                                                )
                                                                    for (
                                                                        Jl = q[(km + 1056) >> 2], lm = q[(km + 1192) >> 2], nm = q[(km + 1060) >> 2], mm = q[($l + 560) >> 2];
                                                                        (Il = (mm + w((im = (im + -1) | 0), 28)) | 0),
                                                                        (q[Il >> 2] = q[((om = im << 2) + nm) >> 2]),
                                                                        (om = q[(Jl + om) >> 2]),
                                                                        (q[(Il + 24) >> 2] = 1),
                                                                        (q[(Il + 16) >> 2] = 0),
                                                                        (q[(Il + 20) >> 2] = 1),
                                                                        (q[(Il + 8) >> 2] = 0),
                                                                        (q[(Il + 12) >> 2] = 0),
                                                                        (q[(Il + 4) >> 2] = lm + (om << 2)),
                                                                        0 < (0 | im);

                                                                    );
                                                                if (((im = q[(hm + 48) >> 2]), 1 <= (0 | (q[($l + 564) >> 2] = im)))) {
                                                                    for (; ;) {
                                                                        if (((Il = (q[($l + 568) >> 2] + w((im = (im + -1) | 0), 36)) | 0), (lm = q[((hm = im << 2) + q[(km + 1072) >> 2]) >> 2]), 1 <= (0 | (q[(Il + 4) >> 2] = lm))))
                                                                            for (
                                                                                Jl = 0;
                                                                                (q[(q[Il >> 2] + (Jl << 2)) >> 2] = q[($l + 560) >> 2] + w(q[(q[(km + 1064) >> 2] + ((q[(hm + q[(km + 1068) >> 2]) >> 2] + Jl) << 2)) >> 2], 28)),
                                                                                (0 | lm) != (0 | (Jl = (Jl + 1) | 0));

                                                                            );
                                                                        if (((q[(Il + 24) >> 2] = 1), (q[(Il + 28) >> 2] = 1), (q[(Il + 8) >> 2] = 1 << lm), !(0 < (0 | im)))) break;
                                                                    }
                                                                    (km = q[$l >> 2]), (hm = q[(km + 704) >> 2]);
                                                                }
                                                                if (((Il = q[hm >> 2]), (0 | (q[($l + 4) >> 2] = Il)) < 1)) Jl = 0;
                                                                else {
                                                                    for (
                                                                        om = q[(km + 732) >> 2],
                                                                        pm = q[(km + 736) >> 2],
                                                                        qm = q[(km + 740) >> 2],
                                                                        lm = q[(km + 720) >> 2],
                                                                        rm = q[($l + 52) >> 2],
                                                                        nm = q[($l + 568) >> 2],
                                                                        sm = q[($l + 8) >> 2],
                                                                        im = Il;
                                                                        (mm = (sm + w((im = (im + -1) | 0), 12)) | 0),
                                                                        (q[mm >> 2] = nm + w(q[((Jl = im << 2) + lm) >> 2], 36)),
                                                                        (q[(mm + 4) >> 2] = q[(Jl + qm) >> 2]),
                                                                        (q[(mm + 8) >> 2] = q[(Jl + pm) >> 2]),
                                                                        (u[(Jl + rm) >> 2] = q[(Jl + om) >> 2] ? x(1) : x(0)),
                                                                        0 < (0 | im);

                                                                    );
                                                                    for (
                                                                        mm = q[($l + 16) >> 2], Jl = 0;
                                                                        (im = q[(8 + ((nm + w(q[((om = (Il = (Il + -1) | 0) << 2) + lm) >> 2], 36)) | 0)) >> 2]), (Jl = (Jl + (q[(mm + om) >> 2] = im)) | 0), 0 < (0 | Il);

                                                                    );
                                                                    Il = q[($l + 4) >> 2];
                                                                }
                                                                if (((q[($l + 12) >> 2] = Il), (q[($l + 20) >> 2] = Jl), (Il = q[(hm + 4) >> 2]), 1 <= (0 | (q[($l + 304) >> 2] = Il)))) {
                                                                    for (
                                                                        ;
                                                                        (Jl = (q[($l + 308) >> 2] + ((Il = (Il + -1) | 0) << 5)) | 0),
                                                                        (q[Jl >> 2] = q[($l + 568) >> 2] + w(q[((im = Il << 2) + q[(km + 752) >> 2]) >> 2], 36)),
                                                                        (q[(Jl + 4) >> 2] = q[(im + q[(km + 764) >> 2]) >> 2]),
                                                                        (q[(Jl + 8) >> 2] = q[(im + q[(km + 768) >> 2]) >> 2]),
                                                                        (lm = q[(im + q[(km + 772) >> 2]) >> 2]),
                                                                        (q[(Jl + 12) >> 2] = lm),
                                                                        (hm = q[(im + q[(km + 776) >> 2]) >> 2]),
                                                                        (q[(Jl + 16) >> 2] = hm),
                                                                        (q[(Jl + 28) >> 2] = q[(im + q[(km + 760) >> 2]) >> 2]),
                                                                        lm >>> 0 <= 1
                                                                            ? lm - 1
                                                                                ? ((q[(20 + ((q[($l + 60) >> 2] + w(hm, 24)) | 0)) >> 2] = Il), (q[(Jl + 24) >> 2] = 1), (q[(Jl + 20) >> 2] = 2))
                                                                                : ((q[(8 + ((q[($l + 168) >> 2] + w(hm, 12)) | 0)) >> 2] = Il), (q[(Jl + 24) >> 2] = 3), (q[(Jl + 20) >> 2] = 4))
                                                                            : Y(4, 1179, 0),
                                                                        0 < (0 | Il);

                                                                    );
                                                                    (km = q[$l >> 2]), (hm = q[(km + 704) >> 2]);
                                                                }
                                                                im = q[(hm + 8) >> 2];
                                                                k: if (!((0 | (q[($l + 56) >> 2] = im)) < 1)) {
                                                                    if (
                                                                        ((Jl = (im + -1) | 0),
                                                                            (nm = q[(km + 796) >> 2]),
                                                                            (mm = q[(km + 804) >> 2]),
                                                                            (om = q[(km + 800) >> 2]),
                                                                            (pm = q[(km + 780) >> 2]),
                                                                            (qm = q[($l + 568) >> 2]),
                                                                            (rm = q[($l + 60) >> 2]),
                                                                            r[(km + 4) | 0] < 2)
                                                                    )
                                                                        for (; ;)
                                                                            if (
                                                                                ((Il = (rm + w(Jl, 24)) | 0),
                                                                                    (q[Il >> 2] = qm + w(q[((lm = Jl << 2) + pm) >> 2], 36)),
                                                                                    (q[(Il + 4) >> 2] = q[(lm + om) >> 2]),
                                                                                    (q[(Il + 8) >> 2] = q[(lm + mm) >> 2]),
                                                                                    (lm = q[(lm + nm) >> 2]),
                                                                                    (q[(Il + 12) >> 2] = 0),
                                                                                    (q[(Il + 16) >> 2] = lm),
                                                                                    (Il = 0 < (0 | Jl)),
                                                                                    (Jl = (Jl + -1) | 0),
                                                                                    !Il)
                                                                            )
                                                                                break k;
                                                                    for (
                                                                        sm = q[(km + 808) >> 2];
                                                                        (Il = (rm + w(Jl, 24)) | 0),
                                                                        (q[Il >> 2] = qm + w(q[((lm = Jl << 2) + pm) >> 2], 36)),
                                                                        (q[(Il + 4) >> 2] = q[(lm + om) >> 2]),
                                                                        (q[(Il + 8) >> 2] = q[(lm + mm) >> 2]),
                                                                        (q[(Il + 16) >> 2] = q[(lm + nm) >> 2]),
                                                                        (q[(Il + 12) >> 2] = q[(lm + sm) >> 2]),
                                                                        (Il = 0 < (0 | Jl)),
                                                                        (Jl = (Jl + -1) | 0),
                                                                        Il;

                                                                    );
                                                                }
                                                                if (((Jl = q[(hm + 12) >> 2]), 1 <= (0 | (q[($l + 164) >> 2] = Jl))))
                                                                    for (
                                                                        lm = q[(km + 828) >> 2], nm = q[(km + 812) >> 2], mm = q[($l + 568) >> 2], om = q[($l + 168) >> 2], Il = Jl;
                                                                        (pm = (om + w((Il = (Il + -1) | 0), 12)) | 0), (q[pm >> 2] = mm + w(q[((qm = Il << 2) + nm) >> 2], 36)), (q[(pm + 4) >> 2] = q[(lm + qm) >> 2]), 0 < (0 | Il);

                                                                    );
                                                                if (((Il = 0) | im) < 1) lm = 0;
                                                                else {
                                                                    for (
                                                                        nm = q[($l + 68) >> 2], mm = q[($l + 60) >> 2], lm = 0;
                                                                        (Jl = q[(q[(mm + w((im = (im + -1) | 0), 24)) >> 2] + 8) >> 2]), (lm = ((q[(nm + (im << 2)) >> 2] = Jl) + lm) | 0), 0 < (0 | im);

                                                                    );
                                                                    (Jl = q[($l + 164) >> 2]), (im = q[($l + 56) >> 2]);
                                                                }
                                                                if (((q[($l + 64) >> 2] = im), (q[($l + 72) >> 2] = lm), (im = $l), 1 <= (0 | Jl))) {
                                                                    for (
                                                                        nm = q[($l + 176) >> 2], mm = q[($l + 168) >> 2];
                                                                        (lm = q[(q[(mm + w((Jl = (Jl + -1) | 0), 12)) >> 2] + 8) >> 2]), (Il = (Il + (q[(nm + (Jl << 2)) >> 2] = lm)) | 0), 0 < (0 | Jl);

                                                                    );
                                                                    Jl = q[($l + 164) >> 2];
                                                                }
                                                                if (((q[(im + 172) >> 2] = Jl), (q[($l + 180) >> 2] = Il), (lm = q[(hm + 16) >> 2]), 1 <= (0 | (q[($l + 332) >> 2] = lm)))) {
                                                                    for (
                                                                        om = q[(km + 872) >> 2],
                                                                        pm = q[(km + 892) >> 2],
                                                                        qm = q[(km + 880) >> 2],
                                                                        rm = q[(km + 876) >> 2],
                                                                        nm = q[(km + 852) >> 2],
                                                                        mm = q[($l + 568) >> 2],
                                                                        sm = q[($l + 336) >> 2],
                                                                        Il = lm;
                                                                        (Jl = (sm + w((Il = (Il + -1) | 0), 20)) | 0),
                                                                        (q[Jl >> 2] = mm + w(q[((im = Il << 2) + nm) >> 2], 36)),
                                                                        (q[(Jl + 4) >> 2] = q[(im + rm) >> 2]),
                                                                        (q[(Jl + 8) >> 2] = q[(im + qm) >> 2]),
                                                                        (q[(Jl + 16) >> 2] = q[(im + pm) >> 2]),
                                                                        (q[(Jl + 12) >> 2] = q[(im + om) >> 2]),
                                                                        0 < (0 | Il);

                                                                    );
                                                                    for (
                                                                        im = q[($l + 344) >> 2], Jl = 0;
                                                                        (Il = q[(8 + ((mm + w(q[((om = (lm = (lm + -1) | 0) << 2) + nm) >> 2], 36)) | 0)) >> 2]), (Jl = ((q[(im + om) >> 2] = Il) + Jl) | 0), 0 < (0 | lm);

                                                                    );
                                                                    if (((q[($l + 348) >> 2] = Jl), (lm = q[($l + 332) >> 2]), !((0 | (q[($l + 340) >> 2] = lm)) < 1)))
                                                                        for (
                                                                            Jl = lm << 2, im = q[($l + 456) >> 2], nm = q[($l + 452) >> 2];
                                                                            (q[((mm = (Il = (Jl + -4) | 0) << 2) + nm) >> 2] = 1065353216),
                                                                            (q[((om = ((Jl <<= 2) - 4) | 0) + nm) >> 2] = 1065353216),
                                                                            (q[(pm = ((Jl = (Jl + -12) | 0) + nm) | 0) >> 2] = 1065353216),
                                                                            (q[(pm + 4) >> 2] = 1065353216),
                                                                            (q[(im + mm) >> 2] = 0),
                                                                            (q[(im + om) >> 2] = 1065353216),
                                                                            (q[(Jl = (Jl + im) | 0) >> 2] = 0),
                                                                            (q[(Jl + 4) >> 2] = 0),
                                                                            (Jl = Il),
                                                                            0 < (0 | (lm = (lm + -1) | 0));

                                                                        );
                                                                } else (q[($l + 340) >> 2] = lm), (q[($l + 348) >> 2] = 0);
                                                                if (((lm = q[(hm + 72) >> 2]), 1 <= (0 | (q[($l + 480) >> 2] = lm))))
                                                                    for (om = q[(km + 1208) >> 2], pm = q[(km + 1224) >> 2], qm = q[(km + 1220) >> 2], rm = q[(km + 1216) >> 2], sm = q[(km + 1212) >> 2], tm = q[($l + 484) >> 2], im = 0; ;) {
                                                                        if (
                                                                            ((Il = (tm + w(im, 28)) | 0),
                                                                                (nm = q[((Jl = im << 2) + sm) >> 2]),
                                                                                (q[(Il + 4) >> 2] = nm),
                                                                                (q[Il >> 2] = q[(Jl + rm) >> 2]),
                                                                                (mm = q[(Jl + qm) >> 2]),
                                                                                (q[(Il + 16) >> 2] = mm),
                                                                                (vm = q[(Jl + pm) >> 2]),
                                                                                (q[(Il + 20) >> 2] = vm),
                                                                                (q[(Il + 8) >> 2] = 0),
                                                                                (q[(Il + 24) >> 2] = 1 + ((mm - vm) | 0)),
                                                                                1 <= (0 | nm))
                                                                        )
                                                                            for (
                                                                                vm = q[(Jl + om) >> 2], xm = q[(Il + 12) >> 2], wm = q[(km + 1236) >> 2], zm = q[(km + 1228) >> 2], ym = q[(km + 1232) >> 2], Jl = 0;
                                                                                (q[(4 + (Il = (xm + (Jl << 4)) | 0)) >> 2] = q[((mm = (Jl + vm) << 2) + ym) >> 2]),
                                                                                (q[Il >> 2] = q[(mm + zm) >> 2]),
                                                                                (mm = q[(mm + wm) >> 2]),
                                                                                (q[(Il + 12) >> 2] = 0),
                                                                                (q[(Il + 8) >> 2] = mm),
                                                                                (0 | nm) != (0 | (Jl = (Jl + 1) | 0));

                                                                            );
                                                                        if ((0 | lm) == (0 | (im = (im + 1) | 0))) break;
                                                                    }
                                                                if (((Jl = q[(hm + 80) >> 2]), (0 | (q[($l + 500) >> 2] = Jl)) < 1)) im = 0;
                                                                else {
                                                                    for (
                                                                        mm = q[(km + 1280) >> 2],
                                                                        om = q[(km + 1268) >> 2],
                                                                        pm = q[(km + 1276) >> 2],
                                                                        qm = q[(km + 1272) >> 2],
                                                                        rm = q[(km + 1264) >> 2],
                                                                        sm = q[(km + 1260) >> 2],
                                                                        lm = q[(km + 1248) >> 2],
                                                                        nm = q[($l + 568) >> 2],
                                                                        tm = q[($l + 504) >> 2];
                                                                        (Il = (tm + w((Jl = (Jl + -1) | 0), 24)) | 0),
                                                                        (q[Il >> 2] = nm + w(q[((im = Jl << 2) + lm) >> 2], 36)),
                                                                        (q[(Il + 4) >> 2] = q[(im + sm) >> 2]),
                                                                        (q[(Il + 8) >> 2] = q[(im + rm) >> 2]),
                                                                        (q[(Il + 12) >> 2] = q[(im + qm) >> 2]),
                                                                        (im = q[(im + om) >> 2]),
                                                                        (q[(Il + 20) >> 2] = mm + (im << 1)),
                                                                        (q[(Il + 16) >> 2] = pm + (im << 2)),
                                                                        0 < (0 | Jl);

                                                                    );
                                                                    if ((0 | (Jl = q[($l + 500) >> 2])) < 1) im = 0;
                                                                    else {
                                                                        for (
                                                                            mm = q[($l + 512) >> 2], im = 0;
                                                                            (Il = q[(8 + ((nm + w(q[((om = (Jl = (Jl + -1) | 0) << 2) + lm) >> 2], 36)) | 0)) >> 2]), (im = ((q[(mm + om) >> 2] = Il) + im) | 0), 0 < (0 | Jl);

                                                                        );
                                                                        Jl = q[($l + 500) >> 2];
                                                                    }
                                                                }
                                                                (q[($l + 508) >> 2] = Jl), (q[($l + 516) >> 2] = im);
                                                                o: if (4 <= r[(a + 4) | 0]) {
                                                                    if (!((lm = r[(km + 4) | 0]) >>> 0 < 4)) {
                                                                        if (((Jl = q[(hm + 120) >> 2]), 1 <= (0 | (q[($l + 572) >> 2] = Jl)))) {
                                                                            for (
                                                                                mm = q[(km + 1172) >> 2], om = q[($l + 576) >> 2];
                                                                                (lm =
                                                                                    (0 | (hm = q[((Il = (Jl = (Jl + -1) | 0) << 2) + mm) >> 2])) < 0
                                                                                        ? (hm = nm = im = 0)
                                                                                        : ((im = ((lm = q[(Il + q[(km + 1176) >> 2]) >> 2] << 2) + q[(km + 1188) >> 2]) | 0),
                                                                                            (nm = q[(Il + q[(km + 1180) >> 2]) >> 2]),
                                                                                            (hm = (q[($l + 544) >> 2] + w(hm, 52)) | 0),
                                                                                            (lm + q[(km + 1184) >> 2]) | 0)),
                                                                                (Il = (om + w(Jl, 20)) | 0),
                                                                                (q[(Il + 12) >> 2] = nm),
                                                                                (q[(Il + 8) >> 2] = im),
                                                                                (q[(Il + 4) >> 2] = lm),
                                                                                (q[Il >> 2] = hm),
                                                                                0 < (0 | Jl);

                                                                            );
                                                                            if (((km = q[$l >> 2]), (lm = r[(km + 4) | 0]) >>> 0 < 4)) break o;
                                                                        }
                                                                        if (((hm = q[(km + 704) >> 2]), (im = q[(hm + 100) >> 2]), 1 <= (0 | (q[($l + 580) >> 2] = im))))
                                                                            for (
                                                                                nm = q[(km + 1084) >> 2], mm = q[(km + 1076) >> 2], om = q[(km + 1192) >> 2], pm = q[(km + 1080) >> 2], qm = q[($l + 584) >> 2];
                                                                                (Il = (qm + w((im = (im + -1) | 0), 28)) | 0),
                                                                                (q[Il >> 2] = q[((Jl = im << 2) + pm) >> 2]),
                                                                                (q[(Il + 4) >> 2] = om + (q[(Jl + mm) >> 2] << 2)),
                                                                                (Jl = q[(Jl + nm) >> 2]),
                                                                                (q[(Il + 20) >> 2] = 1),
                                                                                (q[(Il + 24) >> 2] = 1),
                                                                                (q[(Il + 12) >> 2] = 0),
                                                                                (q[(Il + 16) >> 2] = 0),
                                                                                (q[(Il + 8) >> 2] = Jl),
                                                                                0 < (0 | im);

                                                                            );
                                                                        if (((im = q[(hm + 104) >> 2]), 1 <= (0 | (q[($l + 588) >> 2] = im)))) {
                                                                            for (; ;) {
                                                                                if (
                                                                                    ((Il = (q[($l + 592) >> 2] + w((im = (im + -1) | 0), 48)) | 0),
                                                                                        (q[Il >> 2] = q[($l + 584) >> 2] + w(q[((lm = im << 2) + q[(km + 1088) >> 2]) >> 2], 28)),
                                                                                        (Jl = q[(lm + q[(km + 1092) >> 2]) >> 2]),
                                                                                        (q[(Il + 28) >> 2] = 1),
                                                                                        (q[(Il + 32) >> 2] = 1),
                                                                                        (q[(Il + 8) >> 2] = 0),
                                                                                        (q[(Il + 4) >> 2] = Jl),
                                                                                        (hm = q[(lm + q[(km + 1104) >> 2]) >> 2]),
                                                                                        1 <= (0 | (q[(Il + 36) >> 2] = hm)))
                                                                                )
                                                                                    for (
                                                                                        Jl = 0;
                                                                                        (q[(q[(Il + 40) >> 2] + (Jl << 2)) >> 2] = q[($l + 576) >> 2] + w(q[(q[(km + 1168) >> 2] + ((q[(lm + q[(km + 1100) >> 2]) >> 2] + Jl) << 2)) >> 2], 20)),
                                                                                        (0 | hm) != (0 | (Jl = (Jl + 1) | 0));

                                                                                    );
                                                                                if (!(1 <= (0 | im))) break;
                                                                            }
                                                                            (km = q[$l >> 2]), (lm = r[(km + 4) | 0]);
                                                                        }
                                                                        if (!(lm >>> 0 < 4)) {
                                                                            if (((lm = q[(a + 704) >> 2]), (Jl = q[(lm + 108) >> 2]), 1 <= (0 | (q[($l + 604) >> 2] = Jl))))
                                                                                for (
                                                                                    hm = q[(a + 1124) >> 2], nm = q[(a + 1128) >> 2], mm = q[(a + 1120) >> 2], om = q[($l + 592) >> 2], pm = q[($l + 608) >> 2];
                                                                                    (Il = (pm + w((Jl = (Jl + -1) | 0), 12)) | 0),
                                                                                    (q[Il >> 2] = q[((im = Jl << 2) + mm) >> 2]),
                                                                                    (q[(Il + 4) >> 2] = q[(im + nm) >> 2]),
                                                                                    (q[(Il + 8) >> 2] = om + w(q[(hm + im) >> 2], 48)),
                                                                                    0 < (0 | Jl);

                                                                                );
                                                                            if (((Jl = q[(lm + 112) >> 2]), 1 <= (0 | (q[($l + 620) >> 2] = Jl))))
                                                                                for (
                                                                                    lm = q[(a + 1148) >> 2], hm = q[(a + 1152) >> 2], nm = q[(a + 1144) >> 2], mm = q[($l + 592) >> 2], om = q[($l + 624) >> 2];
                                                                                    (Il = (om + w((Jl = (Jl + -1) | 0), 12)) | 0),
                                                                                    (q[Il >> 2] = q[((im = Jl << 2) + nm) >> 2]),
                                                                                    (q[(Il + 4) >> 2] = q[(hm + im) >> 2]),
                                                                                    (q[(Il + 8) >> 2] = mm + w(q[(im + lm) >> 2], 48)),
                                                                                    0 < (0 | Jl);

                                                                                );
                                                                            if (
                                                                                ((im = q[(km + 1192) >> 2]),
                                                                                    (Il = q[(q[(km + 704) >> 2] + 20) >> 2]),
                                                                                    (q[($l + 640) >> 2] = q[(km + 972) >> 2]),
                                                                                    (lm = q[(km + 964) >> 2]),
                                                                                    (q[($l + 636) >> 2] = lm),
                                                                                    !((0 | Il) < (Jl = 1)) && ((q[lm >> 2] = im + (q[q[(km + 968) >> 2] >> 2] << 2)), 1 != (0 | Il)))
                                                                            )
                                                                                for (; (q[((lm = Jl << 2) + q[($l + 636) >> 2]) >> 2] = im + (q[(lm + q[(km + 968) >> 2]) >> 2] << 2)), (0 | Il) != (0 | (Jl = (Jl + 1) | 0)););
                                                                        }
                                                                    }
                                                                } else if (!(q[(hm + 20) >> 2] < 1))
                                                                    for (hm = 0; ;) {
                                                                        if (((im = q[((nm = hm << 2) + q[($l + 636) >> 2]) >> 2]), 1 <= ((Il = 0) | (Jl = q[(nm + q[(km + 952) >> 2]) >> 2]))))
                                                                            for (pm = (Jl + (mm = q[(nm + q[(km + 948) >> 2]) >> 2])) | 0, qm = q[(km + 1060) >> 2], rm = q[(km + 1056) >> 2]; ;) {
                                                                                if (1 <= (0 | (om = q[((Jl = mm << 2) + qm) >> 2])))
                                                                                    for (sm = (om + (lm = q[(Jl + rm) >> 2])) | 0, tm = q[(km + 1192) >> 2]; ;) {
                                                                                        (om = (im + (Il << 2)) | 0), (um = u[(tm + (lm << 2)) >> 2]), (Jl = im);
                                                                                        q: {
                                                                                            if (0 < (0 | Il))
                                                                                                for (; ;) {
                                                                                                    if (u[Jl >> 2] == um) break q;
                                                                                                    if (!((Jl = (Jl + 4) | 0) >>> 0 < om >>> 0)) break;
                                                                                                }
                                                                                            (u[om >> 2] = um), (Il = (Il + 1) | 0);
                                                                                        }
                                                                                        if (!((0 | (lm = (lm + 1) | 0)) < (0 | sm))) break;
                                                                                    }
                                                                                if (!((0 | (mm = (mm + 1) | 0)) < (0 | pm))) break;
                                                                            }
                                                                        if (
                                                                            ((function (a, Sm) {
                                                                                var un,
                                                                                    Kn,
                                                                                    xn = 0,
                                                                                    yn = 0,
                                                                                    Jn = 0;
                                                                                (q[(8 + (L = un = (L - 208) | 0)) >> 2] = 1), (q[(12 + un) >> 2] = 0);
                                                                                a: if ((Kn = Sm << 2)) {
                                                                                    for (
                                                                                        q[(16 + un) >> 2] = 4, Jn = Sm = q[(20 + un) >> 2] = 4, xn = 2;
                                                                                        (Sm = (((Jn + 4) | 0) + (yn = Sm)) | 0), (q[(((16 + un) | 0) + (xn << 2)) >> 2] = Sm), (xn = (xn + 1) | 0), (Jn = yn), Sm >>> 0 < Kn >>> 0;

                                                                                    );
                                                                                    if ((yn = (((a + Kn) | 0) - 4) | 0) >>> 0 <= a >>> 0) Sm = xn = 1;
                                                                                    else
                                                                                        for (
                                                                                            Sm = xn = 1;
                                                                                            (Sm =
                                                                                                3 == (3 & xn)
                                                                                                    ? (ta(a, Sm, (16 + un) | 0), ma((8 + un) | 0, 2), (Sm + 2) | 0)
                                                                                                    : (t[(((16 + un) | 0) + ((Jn = (Sm + -1) | 0) << 2)) >> 2] >= (yn - a) >>> 0
                                                                                                        ? la(a, (8 + un) | 0, Sm, 0, (16 + un) | 0)
                                                                                                        : ta(a, Sm, (16 + un) | 0),
                                                                                                        1 == (0 | Sm) ? (ka((8 + un) | 0, 1), 0) : (ka((8 + un) | 0, Jn), 1))),
                                                                                            (xn = 1 | q[(8 + un) >> 2]),
                                                                                            (q[(8 + un) >> 2] = xn),
                                                                                            (a = (a + 4) | 0) >>> 0 < yn >>> 0;

                                                                                        );
                                                                                    for (la(a, (8 + un) | 0, Sm, 0, (16 + un) | 0); ;) {
                                                                                        e: {
                                                                                            f: {
                                                                                                g: {
                                                                                                    if (!((1 != (0 | Sm)) | (1 != (0 | xn)))) {
                                                                                                        if (q[(12 + un) >> 2]) break g;
                                                                                                        break a;
                                                                                                    }
                                                                                                    if (1 < (0 | Sm)) break f;
                                                                                                }
                                                                                                ma((8 + un) | 0, (yn = Oa((8 + un) | 0))), (xn = q[(8 + un) >> 2]), (Sm = (Sm + yn) | 0);
                                                                                                break e;
                                                                                            }
                                                                                            ka((8 + un) | 0, 2),
                                                                                                (q[(8 + un) >> 2] = 7 ^ q[(8 + un) >> 2]),
                                                                                                ma((8 + un) | 0, 1),
                                                                                                la(((Jn = (a + -4) | 0) - q[(((16 + un) | 0) + ((yn = (Sm + -2) | 0) << 2)) >> 2]) | 0, (8 + un) | 0, (Sm + -1) | 0, 1, (16 + un) | 0),
                                                                                                ka((8 + un) | 0, 1),
                                                                                                (xn = 1 | q[(8 + un) >> 2]),
                                                                                                (q[(8 + un) >> 2] = xn),
                                                                                                la(Jn, (8 + un) | 0, yn, 1, (16 + un) | 0),
                                                                                                (Sm = yn);
                                                                                        }
                                                                                        a = (a + -4) | 0;
                                                                                    }
                                                                                }
                                                                                L = (208 + un) | 0;
                                                                            })(im, Il),
                                                                                (q[(nm + q[($l + 640) >> 2]) >> 2] = Il),
                                                                                !((0 | (hm = (hm + 1) | 0)) < q[(q[(km + 704) >> 2] + 20) >> 2]))
                                                                        )
                                                                            break;
                                                                    }
                                                                if (!((r[(a + 4) | 0] < 5) | (r[(q[$l >> 2] + 4) | 0] < 4))) {
                                                                    if (((Il = q[(a + 704) >> 2]), (Jl = q[(Il + 128) >> 2]), 1 <= (0 | (q[($l + 596) >> 2] = Jl))))
                                                                        for (
                                                                            lm = q[(a + 1112) >> 2], hm = q[(a + 1116) >> 2], nm = q[(a + 1108) >> 2], mm = q[($l + 592) >> 2], om = q[($l + 600) >> 2];
                                                                            (km = (om + w((Jl = (Jl + -1) | 0), 12)) | 0),
                                                                            (q[km >> 2] = q[((im = Jl << 2) + nm) >> 2]),
                                                                            (q[(km + 4) >> 2] = q[(hm + im) >> 2]),
                                                                            (q[(km + 8) >> 2] = mm + w(q[(im + lm) >> 2], 48)),
                                                                            0 < (0 | Jl);

                                                                        );
                                                                    if (((Jl = q[(Il + 132) >> 2]), 1 <= (0 | (q[($l + 612) >> 2] = Jl))))
                                                                        for (
                                                                            lm = q[(a + 1136) >> 2], hm = q[(a + 1140) >> 2], nm = q[(a + 1132) >> 2], mm = q[($l + 592) >> 2], om = q[($l + 616) >> 2];
                                                                            (km = (om + w((Jl = (Jl + -1) | 0), 12)) | 0),
                                                                            (q[km >> 2] = q[((im = Jl << 2) + nm) >> 2]),
                                                                            (q[(km + 4) >> 2] = q[(hm + im) >> 2]),
                                                                            (q[(km + 8) >> 2] = mm + w(q[(im + lm) >> 2], 48)),
                                                                            0 < (0 | Jl);

                                                                        );
                                                                    if (((Jl = q[(Il + 136) >> 2]), !((0 | (q[($l + 628) >> 2] = Jl)) < 1)))
                                                                        for (
                                                                            km = q[(a + 1160) >> 2], im = q[(a + 1164) >> 2], lm = q[(a + 1156) >> 2], hm = q[($l + 592) >> 2], nm = q[($l + 632) >> 2];
                                                                            (a = (nm + w((Jl = (Jl + -1) | 0), 12)) | 0),
                                                                            (q[a >> 2] = q[((Il = Jl << 2) + lm) >> 2]),
                                                                            (q[(a + 4) >> 2] = q[(Il + im) >> 2]),
                                                                            (q[(a + 8) >> 2] = hm + w(q[(Il + km) >> 2], 48)),
                                                                            0 < (0 | Jl);

                                                                        );
                                                                }
                                                                ua($l);
                                                            }
                                                            return (L = (576 + jm) | 0), $l;
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
                                                var Il;
                                                return ca((16 + (L = Il = (L - 576) | 0)) | 0, 0, 560), Fa(a, (16 + Il) | 0, (12 + Il) | 0), (L = (576 + Il) | 0), q[(12 + Il) >> 2];
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
                                    var _a = 0,
                                        lb = 0,
                                        mb = 0,
                                        ob = 0,
                                        pb = 0,
                                        rb = 0,
                                        nb = (a + Za) | 0;
                                    a: {
                                        b: if (!(1 & (_a = q[(a + 4) >> 2]))) {
                                            if (!(3 & _a)) break a;
                                            if (((Za = ((_a = q[a >> 2]) + Za) | 0), (0 | (a = (a - _a) | 0)) != q[2092]))
                                                if (_a >>> 0 <= 255)
                                                    (mb = _a >>> 3), (_a = q[(a + 8) >> 2]), (0 | (lb = q[(a + 12) >> 2])) == (0 | _a) ? ((rb = q[2087] & ed(mb)), (q[2087] = rb)) : ((q[(_a + 12) >> 2] = lb), (q[(lb + 8) >> 2] = _a));
                                                else {
                                                    if (((pb = q[(a + 24) >> 2]), (0 | (_a = q[(a + 12) >> 2])) != (0 | a))) (lb = q[(a + 8) >> 2]), (q[(lb + 12) >> 2] = _a), (q[(_a + 8) >> 2] = lb);
                                                    else if ((mb = (mb = q[(lb = (a + 20) | 0) >> 2]) || q[(lb = (a + 16) | 0) >> 2])) {
                                                        for (; (ob = lb), (mb = q[(lb = ((_a = mb) + 20) | 0) >> 2]) || ((lb = (_a + 16) | 0), (mb = q[(_a + 16) >> 2])););
                                                        q[ob >> 2] = 0;
                                                    } else _a = 0;
                                                    if (pb) {
                                                        lb = q[(a + 28) >> 2];
                                                        e: {
                                                            if (q[(mb = (8652 + (lb << 2)) | 0) >> 2] == (0 | a)) {
                                                                if ((q[mb >> 2] = _a)) break e;
                                                                (rb = q[2088] & ed(lb)), (q[2088] = rb);
                                                                break b;
                                                            }
                                                            if (!(q[(pb + (q[(pb + 16) >> 2] == (0 | a) ? 16 : 20)) >> 2] = _a)) break b;
                                                        }
                                                        (q[(_a + 24) >> 2] = pb), (lb = q[(a + 16) >> 2]) && ((q[(_a + 16) >> 2] = lb), (q[(lb + 24) >> 2] = _a)), (lb = q[(a + 20) >> 2]) && ((q[(_a + 20) >> 2] = lb), (q[(lb + 24) >> 2] = _a));
                                                    }
                                                }
                                            else if (3 == (3 & (_a = q[(4 + nb) >> 2]))) return (q[2089] = Za), (q[(4 + nb) >> 2] = -2 & _a), (q[(a + 4) >> 2] = 1 | Za), (q[nb >> 2] = Za);
                                        }
                                        f: {
                                            if (!(2 & (_a = q[(4 + nb) >> 2]))) {
                                                if (q[2093] == (0 | nb)) {
                                                    if (((q[2093] = a), (Za = (q[2090] + Za) | 0), (q[2090] = Za), (q[(a + 4) >> 2] = 1 | Za), q[2092] != (0 | a))) break a;
                                                    return (q[2089] = 0), (q[2092] = 0);
                                                }
                                                if (q[2092] == (0 | nb)) return (q[2092] = a), (Za = (q[2089] + Za) | 0), (q[2089] = Za), (q[(a + 4) >> 2] = 1 | Za), (q[(a + Za) >> 2] = Za);
                                                Za = ((-8 & _a) + Za) | 0;
                                                g: if (_a >>> 0 <= 255)
                                                    (mb = _a >>> 3), (_a = q[(8 + nb) >> 2]), (0 | (lb = q[(12 + nb) >> 2])) == (0 | _a) ? ((rb = q[2087] & ed(mb)), (q[2087] = rb)) : ((q[(_a + 12) >> 2] = lb), (q[(lb + 8) >> 2] = _a));
                                                else {
                                                    if (((pb = q[(24 + nb) >> 2]), (0 | nb) != (0 | (_a = q[(12 + nb) >> 2])))) (lb = q[(8 + nb) >> 2]), (q[(lb + 12) >> 2] = _a), (q[(_a + 8) >> 2] = lb);
                                                    else if ((mb = (mb = q[(lb = (20 + nb) | 0) >> 2]) || q[(lb = (16 + nb) | 0) >> 2])) {
                                                        for (; (ob = lb), (mb = q[(lb = ((_a = mb) + 20) | 0) >> 2]) || ((lb = (_a + 16) | 0), (mb = q[(_a + 16) >> 2])););
                                                        q[ob >> 2] = 0;
                                                    } else _a = 0;
                                                    if (pb) {
                                                        lb = q[(28 + nb) >> 2];
                                                        j: {
                                                            if (q[(mb = (8652 + (lb << 2)) | 0) >> 2] == (0 | nb)) {
                                                                if ((q[mb >> 2] = _a)) break j;
                                                                (rb = q[2088] & ed(lb)), (q[2088] = rb);
                                                                break g;
                                                            }
                                                            if (!(q[(pb + (q[(pb + 16) >> 2] == (0 | nb) ? 16 : 20)) >> 2] = _a)) break g;
                                                        }
                                                        (q[(_a + 24) >> 2] = pb),
                                                            (lb = q[(16 + nb) >> 2]) && ((q[(_a + 16) >> 2] = lb), (q[(lb + 24) >> 2] = _a)),
                                                            (lb = q[(20 + nb) >> 2]) && ((q[(_a + 20) >> 2] = lb), (q[(lb + 24) >> 2] = _a));
                                                    }
                                                }
                                                if (((q[(a + 4) >> 2] = 1 | Za), (q[(a + Za) >> 2] = Za), q[2092] != (0 | a))) break f;
                                                return (q[2089] = Za);
                                            }
                                            (q[(4 + nb) >> 2] = -2 & _a), (q[(a + 4) >> 2] = 1 | Za), (q[(a + Za) >> 2] = Za);
                                        }
                                        if (Za >>> 0 <= 255)
                                            return (
                                                (Za = (8388 + ((_a = Za >>> 3) << 3)) | 0),
                                                (_a = (lb = q[2087]) & (_a = 1 << _a) ? q[(Za + 8) >> 2] : ((q[2087] = _a | lb), Za)),
                                                (q[(Za + 8) >> 2] = a),
                                                (q[(_a + 12) >> 2] = a),
                                                (q[(a + 12) >> 2] = Za),
                                                (q[(a + 8) >> 2] = _a)
                                            );
                                        (q[(a + 16) >> 2] = 0),
                                            (_a = q[(a + 20) >> 2] = 0),
                                            (mb = Za >>> 8) &&
                                            ((_a = 31),
                                                16777215 < Za >>> 0 ||
                                                (_a =
                                                    (28 +
                                                        (((_a = ((((nb = (mb <<= ob = ((mb + 1048320) >>> 16) & 8) << (_a = ((mb + 520192) >>> 16) & 4)) << (mb = ((245760 + nb) >>> 16) & 2)) >>> 15) - (mb | _a | ob)) | 0) << 1) |
                                                            ((Za >>> (_a + 21)) & 1))) |
                                                    0)),
                                            (mb = (8652 + ((q[((lb = a) + 28) >> 2] = _a) << 2)) | 0);
                                        m: {
                                            if ((lb = q[2088]) & (ob = 1 << _a)) {
                                                for (lb = Za << (31 == (0 | _a) ? 0 : (25 - (_a >>> 1)) | 0), _a = q[mb >> 2]; ;) {
                                                    if ((-8 & q[((mb = _a) + 4) >> 2]) == (0 | Za)) break m;
                                                    if (((_a = lb >>> 29), (lb <<= 1), !(_a = q[(16 + (ob = (mb + (4 & _a)) | 0)) >> 2]))) break;
                                                }
                                                q[(ob + 16) >> 2] = a;
                                            } else (q[2088] = lb | ob), (q[mb >> 2] = a);
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
                                                    ((vb = u[1701]),
                                                        (wb = x(x(1.600000023841858) - vb)),
                                                        (xb = x(x(1) / x(vb + x(1.600000023841858)))),
                                                        f(0, -4096 & (j((sb = x(wb * xb))), b[0])),
                                                        (Za = k()),
                                                        (yb = x(Za * Za)),
                                                        (Bb = u[1705]),
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
                                                        (yb = x(u[1703] + x(x(x(sb - x(Za - xb)) * x(0.9617967009544373)) + x(Za * x(-0.00011736857413779944))))),
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
                                                            ? (function (a, Vk) {
                                                                var zl = 0;
                                                                return (
                                                                    128 <= (0 | Vk)
                                                                        ? ((a = x(a * x(17014118346046923e22))),
                                                                            (Vk = (0 | (zl = (Vk + -127) | 0)) < 128 ? zl : ((a = x(a * x(17014118346046923e22))), (((0 | Vk) < 381 ? Vk : 381) + -254) | 0)))
                                                                        : -127 < (0 | Vk) ||
                                                                        ((a = x(a * x(11754943508222875e-54))),
                                                                            (Vk = -127 < (0 | (zl = (Vk + 126) | 0)) ? zl : ((a = x(a * x(11754943508222875e-54))), ((-378 < (0 | Vk) ? Vk : -378) + 252) | 0))),
                                                                    x(a * (f(0, (1065353216 + (Vk << 23)) | 0), k()))
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
                                                    return u[(6784 + (Eb << 2)) >> 2];
                                                }
                                                a = x(3.1415927410125732);
                                            }
                                            return a;
                                        }
                                        return u[(6768 + (Eb << 2)) >> 2];
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
                                        (a = x(u[(6736 + (Db <<= 2)) >> 2] - x(x(x(a * x(Ob + Kb)) - u[(6752 + Db) >> 2]) - a))), (a = (0 | Mb) < 0 ? x(-a) : a);
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
                                                    (Qb = (function (a, Il, Jl) {
                                                        var Nl,
                                                            Sl,
                                                            Wl,
                                                            Xl,
                                                            Zl,
                                                            _l,
                                                            Kl = 0,
                                                            Ll = 0,
                                                            Ml = 0,
                                                            Ol = 0,
                                                            Pl = 0,
                                                            Ql = 0,
                                                            Rl = 0,
                                                            Tl = 0,
                                                            Ul = 0,
                                                            Vl = 0,
                                                            Yl = 0;
                                                        if (((L = Nl = (L - 560) | 0), (Rl = ((Ll = Jl) + w((Wl = 0 < (0 | (Jl = (((Jl + -3) | 0) / 24) | 0)) ? Jl : 0), -24)) | 0), 0 <= (0 | (Sl = q[972]))))
                                                            for (Ll = (Sl + 1) | 0, Jl = Wl; (v[(((320 + Nl) | 0) + (Ml << 3)) >> 3] = (0 | Jl) < 0 ? 0 : +q[(3904 + (Jl << 2)) >> 2]), (Jl = (Jl + 1) | 0), (0 | Ll) != (0 | (Ml = (Ml + 1) | 0)););
                                                        for (Pl = (Rl + -24) | 0, Ll = 0; ;) {
                                                            for (Kl = Jl = 0; (Kl += v[((Jl << 3) + a) >> 3] * v[(((320 + Nl) | 0) + ((Ll - Jl) << 3)) >> 3]), 1 != (0 | (Jl = (Jl + 1) | 0)););
                                                            if (((v[((Ll << 3) + Nl) >> 3] = Kl), (Jl = (0 | Ll) < (0 | Sl)), (Ll = (Ll + 1) | 0), !Jl)) break;
                                                        }
                                                        (_l = (23 - Pl) | 0), (Xl = (24 - Pl) | 0), (Ll = Sl);
                                                        a: {
                                                            for (; ;) {
                                                                if (((Kl = v[((Ll << 3) + Nl) >> 3]), !(Ul = ((Jl = 0) | (Ml = Ll)) < 1)))
                                                                    for (
                                                                        ;
                                                                        (Ql = (((480 + Nl) | 0) + (Jl << 2)) | 0),
                                                                        (Tl = Kl),
                                                                        (Ol = y((Kl *= 5.960464477539063e-8)) < 2147483648 ? ~~Kl : -2147483648),
                                                                        (Ol = y((Tl += -16777216 * (Kl = 0 | Ol))) < 2147483648 ? ~~Tl : -2147483648),
                                                                        (q[Ql >> 2] = Ol),
                                                                        (Kl = v[(((Ml = (Ml + -1) | 0) << 3) + Nl) >> 3] + Kl),
                                                                        (0 | Ll) != (0 | (Jl = (Jl + 1) | 0));

                                                                    );
                                                                (Kl = ja(Kl, Pl)), (Kl = (Kl += -8 * C(0.125 * Kl)) - (0 | (Ql = y(Kl) < 2147483648 ? ~~Kl : -2147483648)));
                                                                e: {
                                                                    f: {
                                                                        g: {
                                                                            if ((Yl = (0 | Pl) < 1)) {
                                                                                if (Pl) break g;
                                                                                Ol = q[(476 + (((Ll << 2) + Nl) | 0)) >> 2] >> 23;
                                                                            } else (Ol = q[(476 + (Ml = ((Ll << 2) + Nl) | 0)) >> 2]), (Vl = Ml), (Ml = (Ol - ((Jl = Ol >> Xl) << Xl)) | 0), (Ql = (Jl + Ql) | 0), (Ol = (q[(Vl + 476) >> 2] = Ml) >> _l);
                                                                            if ((0 | Ol) < 1) break e;
                                                                            break f;
                                                                        }
                                                                        if (((Ol = 2), !(0.5 <= Kl))) {
                                                                            Ol = 0;
                                                                            break e;
                                                                        }
                                                                    }
                                                                    if (((Ml = Jl = 0), !Ul))
                                                                        for (; ;) {
                                                                            (Ul = q[(Zl = (((480 + Nl) | 0) + (Jl << 2)) | 0) >> 2]), (Vl = 16777215);
                                                                            i: {
                                                                                j: {
                                                                                    if (!Ml) {
                                                                                        if (!Ul) break j;
                                                                                        (Vl = 16777216), (Ml = 1);
                                                                                    }
                                                                                    q[Zl >> 2] = Vl - Ul;
                                                                                    break i;
                                                                                }
                                                                                Ml = 0;
                                                                            }
                                                                            if ((0 | Ll) == (0 | (Jl = (Jl + 1) | 0))) break;
                                                                        }
                                                                    Yl || 1 < (Jl = (Pl + -1) | 0) >>> 0 || (q[(476 + (Jl = ((Ll << 2) + Nl) | 0)) >> 2] = Jl - 1 ? 8388607 & q[(Jl + 476) >> 2] : 4194303 & q[(Jl + 476) >> 2]),
                                                                        (Ql = (Ql + 1) | 0),
                                                                        2 == (0 | Ol) && ((Kl = 1 - Kl), (Ol = 2), Ml) && (Kl -= ja(1, Pl));
                                                                }
                                                                if (0 != Kl) break;
                                                                if (!(((Ml = 0) | (Jl = Ll)) <= (0 | Sl))) {
                                                                    for (; (Ml = q[(((480 + Nl) | 0) + ((Jl = (Jl + -1) | 0) << 2)) >> 2] | Ml), (0 | Sl) < (0 | Jl););
                                                                    if (Ml) {
                                                                        for (Rl = Pl; (Rl = (Rl + -24) | 0), !q[(((480 + Nl) | 0) + ((Ll = (Ll + -1) | 0) << 2)) >> 2];);
                                                                        break a;
                                                                    }
                                                                }
                                                                for (Jl = 1; (Jl = ((Ml = Jl) + 1) | 0), !q[(((480 + Nl) | 0) + ((Sl - Ml) << 2)) >> 2];);
                                                                for (Ml = (Ll + Ml) | 0; ;) {
                                                                    for (
                                                                        Ll = Ql = (Ll + 1) | 0, v[(((320 + Nl) | 0) + (Ql << 3)) >> 3] = q[(3904 + ((Wl + Ll) << 2)) >> 2], Kl = Jl = 0;
                                                                        (Kl += v[((Jl << 3) + a) >> 3] * v[(((320 + Nl) | 0) + ((Ql - Jl) << 3)) >> 3]), 1 != (0 | (Jl = (Jl + 1) | 0));

                                                                    );
                                                                    if (((v[((Ll << 3) + Nl) >> 3] = Kl), !((0 | Ll) < (0 | Ml)))) break;
                                                                }
                                                                Ll = Ml;
                                                            }
                                                            16777216 <= (Kl = ja(Kl, (0 - Pl) | 0))
                                                                ? ((a = (((480 + Nl) | 0) + (Ll << 2)) | 0),
                                                                    (Tl = Kl),
                                                                    (Jl = y((Kl *= 5.960464477539063e-8)) < 2147483648 ? ~~Kl : -2147483648),
                                                                    (Ml = y((Kl = Tl + -16777216 * (0 | Jl))) < 2147483648 ? ~~Kl : -2147483648),
                                                                    (q[a >> 2] = Ml),
                                                                    (Ll = (Ll + 1) | 0))
                                                                : ((Jl = y(Kl) < 2147483648 ? ~~Kl : -2147483648), (Rl = Pl)),
                                                                (q[(((480 + Nl) | 0) + (Ll << 2)) >> 2] = Jl);
                                                        }
                                                        if (((Kl = ja(1, Rl)), !((0 | Ll) <= -1))) {
                                                            for (Jl = Ll; (v[((Jl << 3) + Nl) >> 3] = Kl * +q[(((480 + Nl) | 0) + (Jl << 2)) >> 2]), (Kl *= 5.960464477539063e-8), (a = 0 < (0 | Jl)), (Jl = (Jl + -1) | 0), a;);
                                                            if (!((0 | Ll) <= -1))
                                                                for (Jl = Ll; ;) {
                                                                    for (
                                                                        Pl = (Ll - (a = Jl)) | 0, Jl = Kl = 0;
                                                                        (Kl += v[(6672 + (Jl << 3)) >> 3] * v[(((a + Jl) << 3) + Nl) >> 3]), !((0 | Sl) <= (0 | Jl)) && ((Rl = Jl >>> 0 < Pl >>> 0), (Jl = (Jl + 1) | 0), Rl);

                                                                    );
                                                                    if (((v[(((160 + Nl) | 0) + (Pl << 3)) >> 3] = Kl), (Jl = (a + -1) | 0), !(0 < (0 | a)))) break;
                                                                }
                                                        }
                                                        if (0 <= (Ll | (Kl = 0))) for (; (Kl += v[(((160 + Nl) | 0) + (Ll << 3)) >> 3]), (a = 0 < (0 | Ll)), (Ll = (Ll + -1) | 0), a;);
                                                        return (v[Il >> 3] = Ol ? -Kl : Kl), (L = (560 + Nl) | 0), 7 & Ql;
                                                    })((8 + Sb) | 0, Sb, Qb)),
                                                    (Rb = v[Sb >> 3]),
                                                    (0 | Tb) <= -1 ? ((v[Pb >> 3] = -Rb), (Qb = (0 - Qb) | 0)) : (v[Pb >> 3] = Rb)),
                                        (L = (16 + Sb) | 0),
                                        Qb
                                    );
                                }
                                function Ea(a, Pb) {
                                    return a
                                        ? (function (a, Il) {
                                            a: {
                                                if (a) {
                                                    if (Il >>> 0 <= 127) break a;
                                                    if (q[q[1789] >> 2]) {
                                                        if (Il >>> 0 <= 2047) return (o[(a + 1) | 0] = (63 & Il) | 128), (o[0 | a] = (Il >>> 6) | 192), 2;
                                                        if (!(57344 != (-8192 & Il) && 55296 <= Il >>> 0)) return (o[(a + 2) | 0] = (63 & Il) | 128), (o[0 | a] = (Il >>> 12) | 224), (o[(a + 1) | 0] = ((Il >>> 6) & 63) | 128), 3;
                                                        if ((Il + -65536) >>> 0 <= 1048575)
                                                            return (o[(a + 3) | 0] = (63 & Il) | 128), (o[0 | a] = (Il >>> 18) | 240), (o[(a + 2) | 0] = ((Il >>> 6) & 63) | 128), (o[(a + 1) | 0] = ((Il >>> 12) & 63) | 128), 4;
                                                    } else if (57216 == (-128 & Il)) break a;
                                                    (q[2086] = 25), (a = -1);
                                                } else a = 1;
                                                return a;
                                            }
                                            return (o[0 | a] = Il), 1;
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
                                        for ($b = q[(a + 720) >> 2], bc = q[(a + 1072) >> 2]; (Zb = ((1 << q[(bc + (q[($b + (Xb << 2)) >> 2] << 2)) >> 2]) + Zb) | 0), (0 | _b) != (0 | (Xb = (Xb + 1) | 0)););
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
                                        for ($b = q[(a + 812) >> 2], bc = q[(a + 1072) >> 2], Zb = 0; (Zb = ((1 << q[(bc + (q[($b + (Xb << 2)) >> 2] << 2)) >> 2]) + Zb) | 0), (0 | _b) != (0 | (Xb = (Xb + 1) | 0)););
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
                                        for (Zb = q[(a + 1072) >> 2], ac = 0; (ac = ((bc = q[(Zb + (Xb << 2)) >> 2]) + ac) | 0), (_b = ((1 << bc) + _b) | 0), (0 | Yb) != (0 | (Xb = (Xb + 1) | 0)););
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
                                        for (Zb = q[(a + 1248) >> 2], ac = q[(a + 1072) >> 2], _b = Xb = 0; (_b = ((1 << q[(ac + (q[(Zb + (Xb << 2)) >> 2] << 2)) >> 2]) + _b) | 0), (0 | Yb) != (0 | (Xb = (Xb + 1) | 0)););
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
                                            for (a = q[(a + 1104) >> 2], _b = 0; (_b = (q[(a + (Xb << 2)) >> 2] + _b) | 0), (0 | bc) != (0 | (Xb = (Xb + 1) | 0)););
                                            a = _b << 2;
                                        } else a = 0;
                                        (q[(Zb + 476) >> 2] = a), (q[(Pb + 472) >> 2] = w(bc, 48)), (q[(Pb + 484) >> 2] = w(q[($b + 108) >> 2], 12)), (a = q[($b + 112) >> 2]), (q[(Pb + 552) >> 2] = 0), (q[(Pb + 492) >> 2] = w(a, 12)), (a = 0);
                                    } else {
                                        if ((0 | (ac = q[($b + 20) >> 2])) < 1) _b = 0;
                                        else
                                            for (bc = q[(a + 1060) >> 2], dc = q[(a + 952) >> 2], a = q[(a + 948) >> 2], Zb = _b = 0; ;) {
                                                if (1 <= (0 | (cc = q[((Xb = Zb << 2) + dc) >> 2]))) for (cc = ((Xb = (bc + (q[(a + Xb) >> 2] << 2)) | 0) + (cc << 2)) | 0; (_b = (q[Xb >> 2] + _b) | 0), (Xb = (Xb + 4) | 0) >>> 0 < cc >>> 0;);
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
                                    if (ha(o[q[a >> 2]])) for (; (Pb = q[a >> 2]), (hc = o[0 | Pb]), (q[a >> 2] = Pb + 1), (Wb = (((w(Wb, 10) + hc) | 0) - 48) | 0), ha(o[(Pb + 1) | 0]););
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
                                    $((8 + (L = qc = (L - 160) | 0)) | 0, 3192, 144),
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
                                                    for (; ;) {
                                                        if (!r[0 | a]) break c;
                                                        if (((a = (a + 1) | 0), (pc = 0 != (0 | (ic = (ic + -1) | 0))), !ic)) break d;
                                                        if (!(3 & a)) break;
                                                    }
                                                if (!pc) break b;
                                            }
                                            if (!r[0 | a]) break a;
                                            e: {
                                                if (4 <= ic >>> 0) {
                                                    for (pc = ((pc = (ic + -4) | 0) - (sc = -4 & pc)) | 0, sc = (4 + ((a + sc) | 0)) | 0; ;) {
                                                        if ((-1 ^ (tc = q[a >> 2])) & (tc + -16843009) & -2139062144) break e;
                                                        if (((a = (a + 4) | 0), !(3 < (ic = (ic + -4) | 0) >>> 0))) break;
                                                    }
                                                    (ic = pc), (a = sc);
                                                }
                                                if (!ic) break b;
                                            }
                                            for (; ;) {
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
                                    if (!(1 & a)) for (; (ic = (ic + 1) | 0), (uc = 2 & a), (a >>>= 1), !uc;);
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
                                        for (wc = q[(Bc = ((vc << 2) + a) | 0) >> 2] = yc; ;) {
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
                                function _c(a, $o) {
                                    ($o |= 0), (b[0] = a |= 0), (b[1] = $o);
                                }
                                function bd(a, $o, ap) {
                                    return (function (a, $o, ap) {
                                        var ep,
                                            cp,
                                            bp,
                                            dp,
                                            fp = w((cp = ap >>> 16), (bp = a >>> 16));
                                        return (
                                            (a = ((65535 & (bp = (((ep = w((dp = 65535 & ap), (a &= 65535))) >>> 16) + w(bp, dp)) | 0)) + w(a, cp)) | 0),
                                            (M = (((((fp + w($o, ap)) | 0) + (bp >>> 16)) | 0) + (a >>> 16)) | 0),
                                            (65535 & ep) | (a << 16)
                                        );
                                    })(a, $o, ap);
                                }
                                function cd(a, $o, ap) {
                                    return (function (a, $o, ap) {
                                        var np,
                                            mp,
                                            gp = 0,
                                            hp = 0,
                                            ip = 0,
                                            jp = 0,
                                            kp = 0,
                                            lp = 0,
                                            op = 0;
                                        a: {
                                            b: {
                                                c: {
                                                    d: {
                                                        e: {
                                                            if (!(hp = $o)) return _c((($o = a) - w((a = ((a >>> 0) / (ap >>> 0)) | 0), ap)) | 0, 0), (M = 0), a;
                                                            if ((gp = ap)) {
                                                                if (!((jp = (gp + -1) | 0) & gp)) break e;
                                                                kp = (0 - (jp = (((z(gp) + 33) | 0) - z(hp)) | 0)) | 0;
                                                                break c;
                                                            }
                                                            if (!a) return _c(0, (hp - w((a = ((hp >>> 0) / 0) | 0), 0)) | 0), (M = 0), a;
                                                            if ((gp = (32 - z(hp)) | 0) >>> 0 < 31) break d;
                                                            break b;
                                                        }
                                                        if ((_c(a & jp, 0), 1 == (0 | gp))) break a;
                                                        return (
                                                            (ap = 31 & (gp = gp ? (31 - z((gp + -1) ^ gp)) | 0 : 32)),
                                                            (a = 32 <= (63 & gp) >>> 0 ? ((hp = 0), $o >>> ap) : ((hp = $o >>> ap), ((((1 << ap) - 1) & $o) << (32 - ap)) | (a >>> ap))),
                                                            (M = hp),
                                                            a
                                                        );
                                                    }
                                                    (jp = (gp + 1) | 0), (kp = (63 - gp) | 0);
                                                }
                                                if (
                                                    ((gp = $o),
                                                        (ip = 31 & (hp = 63 & jp)),
                                                        (ip = 32 <= hp >>> 0 ? ((hp = 0), gp >>> ip) : ((hp = gp >>> ip), ((((1 << ip) - 1) & gp) << (32 - ip)) | (a >>> ip))),
                                                        (gp = 31 & (kp &= 63)),
                                                        32 <= kp >>> 0 ? (($o = a << gp), (a = 0)) : (($o = (((1 << gp) - 1) & (a >>> (32 - gp))) | ($o << gp)), (a <<= gp)),
                                                        jp)
                                                )
                                                    for (
                                                        (kp = (ap + (gp = -1)) | 0) >>> 0 < 4294967295 && (gp = 0);
                                                        (ip = ((mp = lp = (ip << 1) | ($o >>> 31)) - (np = ap & (lp = (gp - (((hp = (hp << 1) | (ip >>> 31)) + (kp >>> 0 < lp >>> 0)) | 0)) >> 31))) | 0),
                                                        (hp = (hp - (mp >>> 0 < np >>> 0)) | 0),
                                                        ($o = ($o << 1) | (a >>> 31)),
                                                        (a = op | (a << 1)),
                                                        (op = lp &= 1),
                                                        (jp = (jp + -1) | 0);

                                                    );
                                                return _c(ip, hp), (M = ($o << 1) | (a >>> 31)), lp | (a << 1);
                                            }
                                            _c(a, $o), ($o = a = 0);
                                        }
                                        return (M = $o), a;
                                    })(a, $o, ap);
                                }
                                function ed(a) {
                                    var pp;
                                    return (((-1 >>> (pp = 31 & a)) & -2) << pp) | (((-1 << (a = (0 - a) & 31)) & -2) >>> a);
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
                        for (d = c; a[d] && !(e <= d);) ++d;
                        if (16 < d - c && a.subarray && ha) return ha.decode(a.subarray(c, d));
                        for (e = ""; c < d;) {
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
                        for (; 0 < a.length;) {
                            var d,
                                c = a.shift();
                            "function" == typeof c ? c() : "number" == typeof (d = c.ea) ? (void 0 === c.da ? b.dynCall_v(d) : b.dynCall_vi(d, c.da)) : d(void 0 === c.da ? null : c.da);
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
                        (N[2216] = 5251936);
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
                            ea: function () {
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
                                for (var c = Math.max(M.length, 16777216); c < a;) c = c <= 536870912 ? ka(2 * c) : Math.min(ka((3 * c + 2147483648) / 4), 2147418112);
                                a: {
                                    try {
                                        I.grow((c - buffer.byteLength + 65535) >> 16), la(I.buffer);
                                        var d = 1;
                                        break a;
                                    } catch (e) { }
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
                                    return ("undefined" != typeof FS && T instanceof FS.fa) || B(T), T.ga;
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
                                (b._csmGetPartCount = function () {
                                    return b.asm.w.apply(null, arguments);
                                }),
                                (b._csmGetPartIds = function () {
                                    return b.asm.x.apply(null, arguments);
                                }),
                                (b._csmGetPartOpacities = function () {
                                    return b.asm.y.apply(null, arguments);
                                }),
                                (b._csmGetPartParentPartIndices = function () {
                                    return b.asm.z.apply(null, arguments);
                                }),
                                (b._csmGetDrawableCount = function () {
                                    return b.asm.A.apply(null, arguments);
                                }),
                                (b._csmGetDrawableIds = function () {
                                    return b.asm.B.apply(null, arguments);
                                }),
                                (b._csmGetDrawableConstantFlags = function () {
                                    return b.asm.C.apply(null, arguments);
                                }),
                                (b._csmGetDrawableDynamicFlags = function () {
                                    return b.asm.D.apply(null, arguments);
                                }),
                                (b._csmGetDrawableTextureIndices = function () {
                                    return b.asm.E.apply(null, arguments);
                                }),
                                (b._csmGetDrawableDrawOrders = function () {
                                    return b.asm.F.apply(null, arguments);
                                }),
                                (b._csmGetDrawableRenderOrders = function () {
                                    return b.asm.G.apply(null, arguments);
                                }),
                                (b._csmGetDrawableOpacities = function () {
                                    return b.asm.H.apply(null, arguments);
                                }),
                                (b._csmGetDrawableMaskCounts = function () {
                                    return b.asm.I.apply(null, arguments);
                                }),
                                (b._csmGetDrawableMasks = function () {
                                    return b.asm.J.apply(null, arguments);
                                }),
                                (b._csmGetDrawableVertexCounts = function () {
                                    return b.asm.K.apply(null, arguments);
                                }),
                                (b._csmGetDrawableVertexPositions = function () {
                                    return b.asm.L.apply(null, arguments);
                                }),
                                (b._csmGetDrawableVertexUvs = function () {
                                    return b.asm.M.apply(null, arguments);
                                }),
                                (b._csmGetDrawableIndexCounts = function () {
                                    return b.asm.N.apply(null, arguments);
                                }),
                                (b._csmGetDrawableIndices = function () {
                                    return b.asm.O.apply(null, arguments);
                                }),
                                (b._csmGetDrawableMultiplyColors = function () {
                                    return b.asm.P.apply(null, arguments);
                                }),
                                (b._csmGetDrawableScreenColors = function () {
                                    return b.asm.Q.apply(null, arguments);
                                }),
                                (b._csmGetDrawableParentPartIndices = function () {
                                    return b.asm.R.apply(null, arguments);
                                }),
                                (b._csmResetDrawableDynamicFlags = function () {
                                    return b.asm.S.apply(null, arguments);
                                }),
                                (b._csmGetParameterKeyCounts = function () {
                                    return b.asm.T.apply(null, arguments);
                                }),
                                (b._csmGetParameterKeyValues = function () {
                                    return b.asm.U.apply(null, arguments);
                                }),
                                (b._csmMallocMoc = function () {
                                    return b.asm.V.apply(null, arguments);
                                }),
                                (b._csmMallocModelAndInitialize = function () {
                                    return b.asm.W.apply(null, arguments);
                                }),
                                (b._csmMalloc = function () {
                                    return b.asm.X.apply(null, arguments);
                                }),
                                (b._csmFree = function () {
                                    return b.asm.Y.apply(null, arguments);
                                }),
                                (b._csmInitializeAmountOfMemory = function () {
                                    return b.asm.Z.apply(null, arguments);
                                }),
                                (b.stackSave = function () {
                                    return b.asm._.apply(null, arguments);
                                })),
                        Ba = (b.stackAlloc = function () {
                            return b.asm.$.apply(null, arguments);
                        }),
                        Ca = (b.stackRestore = function () {
                            return b.asm.aa.apply(null, arguments);
                        }),
                        ca = (b.__growWasmMemory = function () {
                            return b.asm.ba.apply(null, arguments);
                        });
                    function Z() {
                        function a() {
                            if (!Y && ((Y = !0), !K)) {
                                if ((O(na), O(oa), b.onRuntimeInitialized && b.onRuntimeInitialized(), b.postRun))
                                    for ("function" == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length;) {
                                        var a = b.postRun.shift();
                                        pa.unshift(a);
                                    }
                                O(pa);
                            }
                        }
                        if (!(0 < P)) {
                            if (b.preRun)
                                for ("function" == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length;)
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
                            return b.asm.ca.apply(null, arguments);
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
                        for ("function" == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length;) b.preInit.pop()();
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