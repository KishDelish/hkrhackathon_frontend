(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParticlesDensity = void 0;
    class ParticlesDensity {
        constructor() {
            this.enable = false;
            this.area = 800;
            this.factor = 1000;
        }
        get value_area() {
            return this.area;
        }
        set value_area(value) {
            this.area = value;
        }
        load(data) {
            var _a;
            if (!data) {
                return;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
            if (area !== undefined) {
                this.area = area;
            }
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
        }
    }
    exports.ParticlesDensity = ParticlesDensity;
});