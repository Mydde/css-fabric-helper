"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fabric = function (cssObject, callback) {
    return new Promise((resolve, reject) => {
        if (cssObject.length === 0) {
            reject('String, Please! e.g. "for your information"');
            return callback('String, Please! e.g. "for your information"');
        }
    });
};
exports.default = fabric;
