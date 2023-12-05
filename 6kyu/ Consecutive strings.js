"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestConsec = void 0;
function longestConsec(strarr, k) {
    return strarr.reduce(function (string, fWord, index) {
        if (index > strarr.length - k) {
            return string;
        }
        var concat = fWord;
        for (var i = 1; i < k; i++) {
            concat += strarr[index + i];
        }
        if (concat.length > string.length) {
            string = concat;
        }
        return string;
    }, '');
}
exports.longestConsec = longestConsec;
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 1));
