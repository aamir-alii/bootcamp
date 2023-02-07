class Shape {
    constructor (name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter = _ => {
        console.log(`${this.name} has Perimeter: `, this.sides * this.sideLength);
    }
}

const square = new Shape('Square', 4, 5);
square.calcPerimeter();
const triangle = new Shape()

