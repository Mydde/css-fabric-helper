"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_helper_1 = __importDefault(require("./fabric-helper"));
/* brd u _ 6
md 3
lg 4
b _ 4 */
// txt-h2
// txt-sm-h2
// pad-r
// pad-t
// pad-l-2
// pad-sm-b-2
// pad-sm-t-3
const c = "c";
const cssObject = {
    txt: "h6",
    grid: ["h", "wrap"],
    border: {
        grey: {
            sm: { bottom: 2, top: 3 },
            xxl: { bottom: 1, left: 2 },
        },
        sm: { bottom: 2, top: 3 },
        xxl: { bottom: 1, left: 2 },
    },
    padding: [
        "right",
        "top",
        { left: 2 },
        {
            sm: { bottom: 2, top: 3 },
            xxl: { bottom: 1, left: 2 },
        },
    ],
};
const fde = {
    md: { pad: "" },
};
console.log(fabric_helper_1.default(cssObject));
exports.default = fabric_helper_1.default;
