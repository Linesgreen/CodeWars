"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cube = void 0;
class Cube {
    constructor(length) {
        this.length = length;
    }
    set surfaceArea(number) {
        this.length = Math.sqrt(number / 6);
    }
    set volume(number) {
        this.length = Math.cbrt(number);
    }
    get volume() {
        return Math.pow(this.length, 3);
    }
    get surfaceArea() {
        return (this.length * this.length) * 6;
    }
}
exports.Cube = Cube;
let cube = new Cube(2);
console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);
cube.surfaceArea = 54;
console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);
cube.volume = 1000;
console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);
