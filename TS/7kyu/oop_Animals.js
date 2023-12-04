"use strict";
class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
        this.name = name;
        this.age = age;
        this.status = status;
    }
}
class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
        this.name = name;
        this.age = age;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}
class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.name = name;
        this.age = age;
        this.status = status;
        this.master = master;
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}
let ctopussy = new Animal("Octopussy", 2, 8, 'octopus', "I'm suffering a sting");
let shark = new Shark("Biba", 3, "Alive and well");
let cat = new Cat("Shasta", 16, "Playing with a ball of yarn");
let dog = new Dog("Bona", 0, "Serving his master", "Vlad");
console.log(shark);
console.log(shark.introduce());
console.log(cat);
console.log(cat.introduce());
console.log(dog);
console.log(dog.introduce());
console.log(dog.greetMaster());
