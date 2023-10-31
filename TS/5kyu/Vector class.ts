/* Create a Vector object that supports addition,
subtraction, dot products, and norms. So, for example:

a = new Vector([1, 2, 3])
b = new Vector([3, 4, 5])
c = new Vector([5, 6, 7, 8])

a.add(b)      # should return a new Vector([4, 6, 8])
a.subtract(b) # should return a new Vector([-2, -2, -2])
a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c)      # throws an error

If you try to add, subtract, or dot two vectors with different lengths,
you must throw an error!

Also provide:

a toString method, so that using the vectors from above,
a.toString() === '(1,2,3)'
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.

 */

class Vector {
    constructor(public components: number[]) {
    }
   private chekErro (sComponents : Vector):void {
        if(sComponents.components.length != this.components.length) {
            throw new Error("Something went wrong");
        }
    }
    add (sComponents: Vector) : Vector {
        this.chekErro(sComponents);
        const answer = this.components.map((number : number,index : number) =>  number + sComponents.components[index] );
        return new Vector(answer)
    }
    subtract(sComponents: Vector) : Vector {
        this.chekErro(sComponents);
        const answer = this.components.map((number : number,index : number) =>  number - sComponents.components[index] )
        return new Vector(answer);
    }
    dot(sComponents: Vector) : number {
        this.chekErro(sComponents);
        const answer = this.components.map((number : number,index : number) =>  number * sComponents.components[index] )
        return answer.reduce((sum, number) => sum += number)
    }
    norm() : number {
        const answer = this.components.map(number =>  Math.pow(number, 2));
        return Math.sqrt(answer.reduce((sum, number) => sum += number));
    }
    toString() : string {
        return "(" + this.components.join(",") + ")"
    }
    equals(sComponents: Vector) : boolean {
        return this.components.toString() === sComponents.components.toString();
    }
}


const a = new Vector([1, 2, 3])


console.log(a.norm());







