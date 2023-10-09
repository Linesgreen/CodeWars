/* Define the following classes.

I. Cuboid
The object constructor for the class Cuboid 
should receive exactly three arguments in the following order: length, width, height 
and store these three values in this.length, this.width, this.height.

The class Cuboid should then have a getter surfaceArea which returns 
the surface area of the cuboid and a getter volume which returns the volume of the cuboid. 


II. Cube
class Cube is a subclass of class Cuboid. 
The constructor function of Cube should receive one argument only, 
its length, and use that value passed in to set this.length, this.width, this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)*/

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length)
    );
  }

  get volume() {
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

let cuboidik = new Cuboid(1, 2, 3);
console.log(cuboidik.height);
console.log(cuboidik.surfaceArea);

let cubik = new Cube(1);
console.log(cubik);
console.log(cubik.volume);
console.log(cubik.surfaceArea);
