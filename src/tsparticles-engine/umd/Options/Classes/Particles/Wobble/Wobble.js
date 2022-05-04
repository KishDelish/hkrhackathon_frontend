(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../../Utils/NumberUtils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Wobble = void 0;
    const NumberUtils_1 = require("../../../../Utils/NumberUtils");
    class Wobble {
        constructor() {
            this.distance = 5;
            this.enable = false;
            this.speed = 50;
        }
        load(data) {
            if (!data) {
                return;
            }
            if (data.distance !== undefined) {
                this.distance = (0, NumberUtils_1.setRangeValue)(data.distance);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = (0, NumberUtils_1.setRangeValue)(data.speed);
            }
        }
    }
    exports.Wobble = Wobble;
});
