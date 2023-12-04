"use strict";
/*
Implement a function that accepts 3 integer values a, b, c.
The function should return true if a triangle
can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTriangle = void 0;
const isTriangle = (a, b, c) => a + b > c && b + c > a && a + c > b;
exports.isTriangle = isTriangle;
console.log((0, exports.isTriangle)(1, 2, 1));
