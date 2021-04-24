"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playMap = function (arg) {
    const { tagRule, fabValue } = arg;
    let col = "";
    switch (typeof fabValue) {
        case "string":
        case "number":
            return (col = prefix(tagRule) + fabValue);
            break;
        default:
            return loop({ tagRule, Arr: fabValue });
            break;
    }
};
const loop = (arg) => {
    const { tagRule, Arr } = arg;
    if (Array.isArray(Arr)) {
        return loopArray({ tagRule, Arr });
    }
    else {
        return loopObject({ tagRule, Obj: Arr });
    }
};
// if [] => use prefix
const loopArray = (arg) => {
    const { tagRule, Arr } = arg;
    let red = [];
    for (const arr of Arr) {
        red.push(playMap({ tagRule, fabValue: arr }));
    }
    return red.join("   ,   ");
};
const loopObject = (arg) => {
    const { tagRule, Obj } = arg;
    let red = [];
    // stick property and value
    for (const prop of Object.keys(Obj)) {
        let value = Obj[prop];
        red.push(tagRule + "-" + playMap({ tagRule: prop, fabValue: value }));
    }
    return red.join("    |    ");
    return "-object";
};
function prefix($prefix) {
    return !$prefix ? "" : $prefix + "-";
}
const fabric = function (cssObject, options) {
    const cssOut = Object.keys(cssObject).map((fabRule, index) => {
        const fabValue = cssObject[fabRule];
        return playMap({ tagRule: fabRule, fabValue });
    });
    return cssOut;
};
exports.default = fabric;
