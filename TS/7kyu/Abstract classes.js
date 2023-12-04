"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monkey = exports.Parrot = exports.Boa = exports.Animal = void 0;
class Animal {
    /** @param {number} value The length of the animal in parrots. */
    constructor(value) {
        this.value = value;
    }
    convertTo(someone) {
        return this.value / someone.value;
    }
}
exports.Animal = Animal;
class Boa extends Animal {
    constructor() {
        super(38);
    }
}
exports.Boa = Boa;
class Parrot extends Animal {
    constructor() {
        super(1);
    }
}
exports.Parrot = Parrot;
class Monkey extends Animal {
    constructor() {
        super(38 / 5);
    }
}
exports.Monkey = Monkey;
