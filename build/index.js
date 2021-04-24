"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_helper_1 = __importDefault(require("./fabric-helper"));
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
        { top: 4, bottom: 3 },
        {
            sm: { bottom: 2, top: 2 },
            xxl: { bottom: 1, left: 2 },
        },
    ],
};
let test = fabric_helper_1.default.process(cssObject);
console.log({ test });
exports.default = fabric_helper_1.default;
