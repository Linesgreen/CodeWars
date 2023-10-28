declare let ICuboid: {
    new (length: number): ICuboid;
}

interface ICuboid {
    /** Length of the cube */
    length: number;
    /** Surface area of the cube */
    surfaceArea: number;
    /** Volume of the cube */
    volume: number;
}

export class Cube implements ICuboid {
    constructor(public length : number) {}
    set surfaceArea (number : number) {
        this.length = Math.sqrt(number/6);
    }
     set volume(number : number) {
         this.length =Math.cbrt(number)
     }
     get volume() {
        return Math.pow(this.length, 3);
    }
    get surfaceArea () {
        return (this.length * this.length) * 6
    }

}

let cube = new Cube(2);
console.log(cube.length)
console.log(cube.surfaceArea)
console.log(cube.volume)

cube.surfaceArea = 54;
console.log(cube.length)
console.log(cube.surfaceArea)
console.log(cube.volume)

cube.volume = 1000;
console.log(cube.length)
console.log(cube.surfaceArea)
console.log(cube.volume)