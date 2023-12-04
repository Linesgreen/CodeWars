"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
const pigIt = (a) => a
    .split(/\b/)
    .map((word) => (/^\w*$/).test(word) ? (word + word[0] + 'ay').slice(1) : word)
    .join("");
exports.pigIt = pigIt;
console.log((0, exports.pigIt)('Pig latin is cool'));
