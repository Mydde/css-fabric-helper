"use strict";

import FabricFn from './index';

const fabric: FabricFn = function (cssObject, callback) {
    return new Promise((resolve, reject) => {
        if (cssObject.length === 0) {
            reject('String, Please! e.g. "for your information"');
            return callback('String, Please! e.g. "for your information"');
        }
    });
}

export default fabric;