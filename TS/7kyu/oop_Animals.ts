
interface IAnimal {
    name: string;
    age: number;
    legs: number;
    species: string;
    status: string;
    introduce: () => string;
}

class Animal implements IAnimal  {
    constructor(public name: string, public age: number, public legs: number, public species: string, public status: string) {

    }
    introduce ():string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(public name: string, public age: number, public status: string) {
        super(name, age, 0, "shark", status);
    }

}
class Cat extends Animal {
    constructor(public name: string, public age: number, public status: string) {
        super(name, age, 4, "cat", status);
    }
    introduce (): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
}
class Dog extends Animal {
    constructor(public name: string, public age: number, public status: string, public master: string) {
        super(name, age, 4, "dog", status);
        this.master = master
    }
    greetMaster () : string {
        return  `Hello ${this.master}`
    }
}




let ctopussy = new Animal("Octopussy", 2, 8, 'octopus', "I'm suffering a sting")
let shark = new Shark("Biba", 3, "Alive and well")
let cat = new Cat("Shasta",16,"Playing with a ball of yarn")
let dog = new Dog("Bona",0,"Serving his master", "Vlad")


console.log(shark);
console.log(shark.introduce());
console.log(cat);
console.log(cat.introduce());
console.log(dog);
console.log(dog.introduce());
console.log(dog.greetMaster());



