/**
 * PIXI JS Extra JS (Original: https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/extra.min.js)
 * (Author) 2025 ImDuck42
 * 
 * Changes made by ImDuck42:
 * - Added `this.cornerRadius` property to the HitAreaFrames class (aliased as `r`).
 * - Modified the `_render` method in HitAreaFrames to use `this.drawRoundedRect` 
 *   instead of `this.drawRect` to display hitboxes with rounded corners.
 * - Changed this.normaColor/activeColor to 9199359(#8c5eff) and 16738263(#ff67d7) respectively
 * - Changed TextStyle fill color to #ff67d7
*/
var __pow = Math.pow;
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("@pixi/graphics"), require("@pixi/text"), require("@pixi/math"))
        : "function" == typeof define && define.amd
            ? define(["exports", "@pixi/graphics", "@pixi/text", "@pixi/math"], e)
            : e((((t = "undefined" != typeof globalThis ? globalThis : t || self).PIXI = t.PIXI || {}), (t.PIXI.live2d = t.PIXI.live2d || {})), t.PIXI, t.PIXI, t.PIXI);
})(this, function (t, e, i, s) {
    "use strict";
    const o = new s.Rectangle();
    class r extends e.Graphics {
        constructor() {
            super(),
                (this.initialized = !1),
                (this.texts = []),
                (this.strokeWidth = 4),
                (this.normalColor = 9199359), // #8c5eff
                (this.activeColor = 16738263),  // #ff67d7
                (this.interactive = !0),
                (this.cornerRadius = 25); // Added: Default corner radius of 25px
            this.on("added", this.init).on("pointermove", this.onPointerMove);
        }
        init() {
            const t = this.parent.internalModel,
                e_style = new i.TextStyle({ fontSize: 24, fill: "#ff67d7", stroke: "#000000", strokeThickness: 4 }); // Renamed 'e' to 'e_style' for clarity
            this.texts = Object.keys(t.hitAreas).map((hitAreaName) => { // Renamed 't' (inner) to 'hitAreaName'
                const s_text = new i.Text(hitAreaName, e_style); // Renamed 's' to 's_text'
                return (s_text.visible = !1), this.addChild(s_text), s_text;
            });
        }
        onPointerMove(t_event) { // Renamed 't' to 't_event'
            const e_hitResult = this.parent.hitTest(t_event.data.global.x, t_event.data.global.y); // Renamed 'e' to 'e_hitResult'
            this.texts.forEach((text_obj) => { // Renamed 't' (inner) to 'text_obj'
                text_obj.visible = e_hitResult.includes(text_obj.text);
            });
        }
        _render(t_renderer) { // Renamed 't' to 't_renderer'
            const e_model = this.parent.internalModel, // Renamed 'e' to 'e_model'
                i_scale = 1 / Math.sqrt(__pow(this.transform.worldTransform.a, 2) + __pow(this.transform.worldTransform.b, 2)); // Renamed 'i' to 'i_scale'
            this.texts.forEach((text_obj) => { // Renamed 't' (inner) to 'text_obj'
                this.lineStyle({ width: this.strokeWidth * i_scale, color: text_obj.visible ? this.activeColor : this.normalColor });
                const s_bounds = e_model.getDrawableBounds(e_model.hitAreas[text_obj.text].index, o), // Renamed 's' to 's_bounds'
                    r_transform = e_model.localTransform; // Renamed 'r' (inner) to 'r_transform'
                (s_bounds.x = s_bounds.x * r_transform.a + r_transform.tx),
                    (s_bounds.y = s_bounds.y * r_transform.d + r_transform.ty),
                    (s_bounds.width = s_bounds.width * r_transform.a),
                    (s_bounds.height = s_bounds.height * r_transform.d),
                    // Modified: Use drawRoundedRect
                    this.drawRoundedRect(s_bounds.x, s_bounds.y, s_bounds.width, s_bounds.height, this.cornerRadius),
                    (text_obj.x = s_bounds.x + this.strokeWidth * i_scale),
                    (text_obj.y = s_bounds.y + this.strokeWidth * i_scale),
                    text_obj.scale.set(i_scale);
            }),
                super._render(t_renderer),
                this.clear();
        }
    }
    (t.HitAreaFrames = r), Object.defineProperties(t, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
});