interface IGeometricFigure {
    size : number;
    area: () => number;
    perimeter: () => number;
}

class Square implements IGeometricFigure {
    constructor(public  size : number) {
    }
    area () {
        return this.size * this.size;
    }
     perimeter () {
         return 4 * this.size;
     }
}

 class Circle implements IGeometricFigure {
     constructor(public  size : number) {
     }
     area () {
         return Math.PI * (this.size * this.size)
     }
     perimeter () {
         return 2 * this.size * Math.PI
     }
}
