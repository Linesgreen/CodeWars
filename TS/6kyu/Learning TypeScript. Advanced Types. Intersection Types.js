"use strict";
function intersect(first, second) {
    let result = {};
    for (let key in first) {
        if (second.hasOwnProperty(key)) {
            result[key] = first[key];
        }
    }
    return result;
}
