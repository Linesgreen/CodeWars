"use strict";
class Square {
    constructor(size) {
        this.size = size;
    }
    area() {
        return this.size * this.size;
    }
    perimeter() {
        return 4 * this.size;
    }
}
class Circle {
    constructor(size) {
        this.size = size;
    }
    area() {
        return Math.PI * (this.size * this.size);
    }
    perimeter() {
        return 2 * this.size * Math.PI;
    }
}
