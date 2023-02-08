// Task Two
class Employee {
    constructor(name, salary, hours) {
        this.name = name;
        this.salary = salary;
        this.hours = hours;
    }

    getInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Hours: ${this.hours}`);
    } 
    AddSal() {
        if (this.salary < 500) {
            this.salary += 10;
        }
    }
    AddWork() {
        if (this.hours > 6) {
            this.salary += 5;
        }
        else {
            this.salary += 0;
        }
}

}

const employee = new Employee("John", 10000, 5);
employee.getInfo();
employee.AddSal();
employee.AddWork();
employee.getInfo();


