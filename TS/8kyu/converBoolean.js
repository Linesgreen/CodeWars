"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolToWord = void 0;
/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
const boolToWord = (bool) => bool ? 'Yes' : 'No';
exports.boolToWord = boolToWord;
console.log((0, exports.boolToWord)(false));
