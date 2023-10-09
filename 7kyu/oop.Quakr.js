/* Background
You're modelling the interaction between 
a large number of quarks 
and have decided to create a Quark class 
so you can generate your own quark objects.

Quarks are fundamental particles and 
the only fundamental particle to experience 
all four fundamental forces.

Your task
Your Quark class should allow you to create 
quarks of any valid color 
("red", "blue", and "green") and any valid flavor 
('up', 'down', 'strange', 'charm', 'top', and 'bottom').

Every quark has the same baryon_number: 1/3.

Every quark should have an .interact() 
method that allows any quark to interact with 
another quark via the strong force. When two quarks 
interact they exchange colors. */

class Quark {
  constructor(color, flavor) {
    color === "red" || "blue" || "green" ? (this.color = color) : NaN;

    flavor === "up" || "down" || "strange" || "charm" || "top" || "bottom"
      ? (this.flavor = flavor): NaN;
      

    this.baryon_number = 1 / 3;
  }
  interact(nameQuark) {
    [this.color, nameQuark.color] = [nameQuark.color, this.color];
  }
}

let q1 = new Quark("red", "up");
let q2 = new Quark("blue", "up");

console.log("Цвет q1 кварка = " + q1.color);
console.log("Цвет q1 кварка = " + q2.color);

q1.interact(q2);
console.log("Цвет q1 кварка = " + q1.color);
console.log("Цвет q1 кварка = " + q2.color);

console.log(q1.baryon_number);


console.log(123e-1)