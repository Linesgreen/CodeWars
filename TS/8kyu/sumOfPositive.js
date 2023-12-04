"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positiveSum = void 0;
function positiveSum(arr) {
    return arr.reduce((positiveSum, number) => number > 0 ? positiveSum += number : positiveSum, 0);
}
exports.positiveSum = positiveSum;
console.log(positiveSum([-1, -2, -3]));
