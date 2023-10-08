/* Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute 
of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color // => "white" or "yellow" or "purple" or "red"*/

class Ghost {
  constructor() {
    let colors = ["white", "yellow", "purple", "red"];
    let indexRandColor = Math.floor(Math.random() * 4);
    this.color = colors[indexRandColor];
  }
}

let ghosts = new Ghost();
console.log(ghosts);
console.log(ghosts.color);

//--------------------------------------------------------------------------//

function Ghost1 () {
  colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(Math.random() * 4)];
}

let ghosts1 = new Ghost1();
console.log(ghosts1);
console.log(ghosts1.color)