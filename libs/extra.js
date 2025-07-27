/**
 * PIXI JS Extra JS (Original: https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/extra.min.js)
 * (nc) 2025 ImDuck42
 * -- These changes have been made solely to fit my version of a Live2d viewer --
 * -- This file is heavily modified and will probably not work with other Live2d software --
 * 
 * Changes made by ImDuck42:
 * - Added `this.cornerRadius` property to the HitAreaFrames class (aliased as `r`).
 * - Modified the `_render` method in HitAreaFrames to use `this.drawRoundedRect` 
 *   instead of `this.drawRect` to display hitboxes with rounded corners.
 * - Changed this.normalColor/activeColor to 9199359(#8c5eff) and 16738263(#ff67d7) respectively
 * - Changed TextStyle fill color to #ff67d7
 * - Modified the `init` method in HitAreaFrames to:
 *   - Properly clear and destroy previously created text objects (PIXI.Text instances)
 *     from its children and internal `this.texts` array before creating new ones.
 *     This prevents text labels from previous models from "stacking" on newly selected models.
 *   - Added checks for valid parent model and existing hitAreas.
 * - Added checks in `onPointerMove` and `_render` for parent/model existence to prevent errors.
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
                (this.texts = []);
            (this.strokeWidth = 4);
            (this.normalColor = 9199359); // #8c5eff
            (this.activeColor = 16738263);  // #ff67d7
            (this.interactive = !0);
            (this.cornerRadius = 25);
            this.on("added", this.init);
            this.on("pointermove", this.onPointerMove);
        }

        init() {
            // Ensure there's a parent and it's a Live2D model with an internalModel
            if (!this.parent || !this.parent.internalModel) {
                console.warn("HitAreaFrames.init() called without a valid parent model.");
                // Clear any existing texts if re-initing without a model
                this.texts.forEach(textObj => {
                    if (textObj.parent === this) this.removeChild(textObj);
                    textObj.destroy();
                });
                this.texts = [];
                return;
            }

            // 1. Clear previously created text objects (both from PIXI children and internal array)
            this.texts.forEach(textObj => {
                if (textObj.parent === this) {
                    this.removeChild(textObj);
                }
                textObj.destroy();
            });
            this.texts = []; // Reset the internal array

            const internalModel = this.parent.internalModel;
            const textStyle = new i.TextStyle({ fontSize: 24, fill: "#ff67d7", stroke: "#000000", strokeThickness: 4 });

            // 2. Populate with new text objects for the current model's hit areas
            if (internalModel.hitAreas) {
                this.texts = Object.keys(internalModel.hitAreas).map((hitAreaName) => {
                    const textDisplay = new i.Text(hitAreaName, textStyle);
                    textDisplay.visible = false;
                    this.addChild(textDisplay);
                    return textDisplay;
                });
            }
        }

        onPointerMove(t_event) {
            // Ensure parent and model exist before proceeding
            if (!this.parent || !this.parent.hitTest) return;

            const e_hitResult = this.parent.hitTest(t_event.data.global.x, t_event.data.global.y);
            this.texts.forEach((text_obj) => {
                text_obj.visible = e_hitResult.includes(text_obj.text);
            });
        }

        _render(t_renderer) {
            // Ensure parent and model exist
            if (!this.parent || !this.parent.internalModel) {
                super._render(t_renderer);
                this.clear();
                return;
            }

            const e_model = this.parent.internalModel;
            const i_scale = 1 / Math.sqrt(__pow(this.transform.worldTransform.a, 2) + __pow(this.transform.worldTransform.b, 2));

            this.texts.forEach((text_obj) => {
                if (e_model.hitAreas && e_model.hitAreas[text_obj.text]) { // Check if hit area exists in current model
                    this.lineStyle({ width: this.strokeWidth * i_scale, color: text_obj.visible ? this.activeColor : this.normalColor });
                    const s_bounds = e_model.getDrawableBounds(e_model.hitAreas[text_obj.text].index, o);
                    const r_transform = e_model.localTransform;
                    (s_bounds.x = s_bounds.x * r_transform.a + r_transform.tx),
                        (s_bounds.y = s_bounds.y * r_transform.d + r_transform.ty),
                        (s_bounds.width = s_bounds.width * r_transform.a),
                        (s_bounds.height = s_bounds.height * r_transform.d),
                        this.drawRoundedRect(s_bounds.x, s_bounds.y, s_bounds.width, s_bounds.height, this.cornerRadius),
                        (text_obj.x = s_bounds.x + this.strokeWidth * i_scale),
                        (text_obj.y = s_bounds.y + this.strokeWidth * i_scale),
                        text_obj.scale.set(i_scale);
                }
            }),
                super._render(t_renderer),
                this.clear();
        }
    }
    (t.HitAreaFrames = r), Object.defineProperties(t, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
});