// task four
class Car {
    constructor(name, make, color, speed) {
        this.name = name;
        this.make = make;
        this.color = color;
        this.speed = speed;
    }

    setName(name) {
        this.name = name;
    }

    setMake(make) {
        this.make = make;
    }

    setColor(color) {
        this.color = color;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    print() {
        console.log(this.name + " " + this.make + " " + this.color + " " + this.speed);
    }
}
let car = new Car("BMW", "Ford", "red", 120);
car.print();
car.setName("ALTO");
car.setMake("XYZ");
car.setColor("Blue");
car.setSpeed(180);
car.print();
console.log(car.name);
console.log(car.make);
console.log(car.color);
console.log(car.speed);
