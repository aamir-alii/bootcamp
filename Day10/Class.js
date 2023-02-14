// task 1
// class Student {
//     constructor (name, rollNo){
//         this.name = name;
//         this.rollNo = rollNo;
//     }

// }

// const std1 = new Student('John', 2);

// task 2

class Student {
    constructor (name, rollNo,cellNo, adress){
        this.name = name;
        this.rollNo = rollNo;
        this.cellNo = cellNo;
        this.adress = adress;
    }
    displayInfo = _ => console.log(`Name: ${this.name} Roll No: ${this.rollNo} Cell No: ${this.cellNo} Adress: ${this.adress} `)
}

// const sam = new Student("Sam", 1, +9212345, 'Lahore' )
// const john = new Student("John", 2, +923564856, "Karachi")
// sam.displayInfo();
// john.displayInfo();

// task 3

class Triangle {
    constructor (base, opposite, hyp) {
        this.base = base;
        this.opposite = opposite;
        this.hyp = hyp;
    }
    getArea = _ => 1/2 * this.base * this.hyp;
    getPerameter = _ => this.base + this.opposite + this.hyp; 
}

const tri = new Triangle(3,4,5)
console.log(tri.getArea());
console.log(tri.getPerameter());

// task 4

class Employee {
    constructor(name, year, salary, adress){
        this.name = name;
        this.year = year;
        this.salary = salary;
        this.adress = adress;
    }
    displayInfo = _ => {
        console.log(`Name: ${this.name} Year: ${this.year} Salary: ${this.salary} Address: ${this.year}`)
    }
}

const robbert = new Employee("Robert", 1994, "64C- WallsStreat");
const sam = new Employee("Sam", 2000, "68D- WallsStreat")
const jhon = new Employee("John", 1999, "26B- WallsStreat")
robbert.displayInfo();
sam.displayInfo();
jhon.displayInfo();

// Task 5:

class Bank {
    #balance
    constructor  (balance) {
        this.#balance = balance;
    }
    getBalance = name => {
        if(name === 'Ali'){
            return console.log(this.#balance);
        }
        console.log("You are not authorized!");
    }
}

const ali = new Bank(2000)
ali.getBalance('Ali')
ali.getBalance("Ahmad")