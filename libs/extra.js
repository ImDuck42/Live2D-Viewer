/**
 * PIXI JS Extra JS (Original: https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/extra.min.js)
 * (nc) 2025 ImDuck42
 * -- These changes have been made solely to fit my version of a Live2d viewer --
 * -- This file is heavily modified and will probably not work with other Live2d software --
 *
 * Changes made by ImDuck42:
 * - Added `this.cornerRadius` property to the HitAreaFrames class.
 * - Modified the `_render` method in HitAreaFrames to use `this.drawRoundedRect`
 *   instead of `this.drawRect` for rounded corners on hitboxes.
 * - Changed default colors to match the application's theme.
 * - Modified the `init` method to properly clear and destroy old PIXI.Text objects
 *   before creating new ones, preventing text stacking on model change.
 * - Added safety checks for parent/model existence in `onPointerMove` and `_render`.
 * - Refactored the entire file for improved readability and maintainability.
*/

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@pixi/graphics'), require('@pixi/text'), require('@pixi/math')) :
        typeof define === 'function' && define.amd ? define(['exports', '@pixi/graphics', '@pixi/text', '@pixi/math'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.PIXI = global.PIXI || {}, global.PIXI.live2d = global.PIXI.live2d || {}), global.PIXI, global.PIXI, global.PIXI));
}(this, (function(exports, PIXI_Graphics, PIXI_Text, PIXI_Math) {
    'use strict';

    const tempBounds = new PIXI_Math.Rectangle();

    class HitAreaFrames extends PIXI_Graphics.Graphics {
        constructor() {
            super();
            this.texts = [];
            this.strokeWidth = 4;
            this.normalColor = 0x8c5eff; // --accent-primary
            this.activeColor = 0xff67d7; // --accent-secondary
            this.cornerRadius = 25;      // Custom property for rounded corners
            this.interactive = true;

            this.on('added', this.init);
            this.on('pointermove', this.onPointerMove);
        }

        init() {
            // Clear any previously created text objects to prevent stacking
            this.texts.forEach(textObject => {
                if (textObject.parent === this) {
                    this.removeChild(textObject);
                }
                textObject.destroy();
            });
            this.texts = [];

            // Safety check for a valid parent model
            if (!this.parent || !this.parent.internalModel || !this.parent.internalModel.hitAreas) {
                console.warn("HitAreaFrames: Parent model or hit areas not available for initialization.");
                return;
            }

            const internalModel = this.parent.internalModel;
            const textStyle = new PIXI_Text.TextStyle({
                fontSize: 24,
                fill: "#ff67d7", // --accent-secondary
                stroke: "#000000",
                strokeThickness: 4
            });

            // Create new text objects for the current model's hit areas
            this.texts = Object.keys(internalModel.hitAreas).map(hitAreaName => {
                const textDisplay = new PIXI_Text.Text(hitAreaName, textStyle);
                textDisplay.visible = false;
                this.addChild(textDisplay);
                return textDisplay;
            });
        }

        onPointerMove(event) {
            // Safety check for parent model
            if (!this.parent || !this.parent.hitTest) {
                return;
            }

            const hitResult = this.parent.hitTest(event.data.global.x, event.data.global.y);
            this.texts.forEach(textObject => {
                textObject.visible = hitResult.includes(textObject.text);
            });
        }

        _render(renderer) {
            // Clear previous drawings before rendering new frames
            this.clear();

            // Safety check for parent model
            if (!this.parent || !this.parent.internalModel) {
                super._render(renderer);
                return;
            }

            const internalModel = this.parent.internalModel;
            const worldScale = 1 / Math.sqrt(Math.pow(this.transform.worldTransform.a, 2) + Math.pow(this.transform.worldTransform.b, 2));

            this.texts.forEach(textObject => {
                const hitAreaName = textObject.text;
                if (internalModel.hitAreas && internalModel.hitAreas[hitAreaName]) {
                    const color = textObject.visible ? this.activeColor : this.normalColor;
                    this.lineStyle({
                        width: this.strokeWidth * worldScale,
                        color: color
                    });

                    const bounds = internalModel.getDrawableBounds(internalModel.hitAreas[hitAreaName].index, tempBounds);
                    const transform = internalModel.localTransform;

                    bounds.x = bounds.x * transform.a + transform.tx;
                    bounds.y = bounds.y * transform.d + transform.ty;
                    bounds.width *= transform.a;
                    bounds.height *= transform.d;

                    // Use drawRoundedRect for rounded corners
                    this.drawRoundedRect(bounds.x, bounds.y, bounds.width, bounds.height, this.cornerRadius);

                    textObject.x = bounds.x + this.strokeWidth * worldScale;
                    textObject.y = bounds.y + this.strokeWidth * worldScale;
                    textObject.scale.set(worldScale);
                }
            });

            super._render(renderer);
        }
    }

    exports.HitAreaFrames = HitAreaFrames;
    Object.defineProperties(exports, {
        __esModule: {
            value: true
        },
        [Symbol.toStringTag]: {
            value: 'Module'
        }
    });
})));