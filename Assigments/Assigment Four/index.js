// Question 1: Create shape class
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

// const square = new Shape('Square', 4, 5);
// square.calcPerimeter();
// const triangle = new Shape('Triangle',3,3);
// triangle.calcPerimeter();

// Question 2: 
class Player {
    static allRuns = 0;
    static getAllRuns = _ => this.allRuns;
    
    constructor (pId, pName = "", pRuns = 0, pDOB = "1/1/1970", pShirtNumber = 0) {
        this.pId = pId;
        this.pName = pName;
        this.pRuns = pRuns;
        this.pDOB = pDOB;
        this.pShirtNumber = pShirtNumber;
        Player.allRuns += pRuns;
    }

    displayInfo = _ => `id: ${this.pId} Name: ${this.pName} Runs: ${this.pRuns} Date of Birth: ${this.pDOB} Shirt Nubmer: ${this.pShirtNumber}`;
    
    getRuns = _ => this.pRuns

    addRuns = runs => {
        this.pRuns += runs
        Player.allRuns += runs;
    }

}

// const player = new Player(1,"Ahmad", 100,'1-1-1998', 56);
// const p2 = new Player(2, 'Ali', 400, '2-10-1990',12)
// player.addRuns(200)
// console.log(player.displayInfo());
// console.log(Player.getAllRuns()) // output: 800



// Question 3: 

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
]

library.forEach(book => console.log(`Author: ${book.author} Name: ${book.title} Reading Status: ${book.readingStatus}`));

// Quesiton 4: Bank Account

class Account {
    #accountId
    #accountTitle
    #balance
    #emailId

    // Setter Methods
    setId = id => {
        this.#accountId = id;
    }

    setTitle = title => {
        this.#accountTitle = title;
    }

    setBalance = balance => {
        this.#balance = balance;
    }

    setEmail = email => {
        this.#emailId = email;
    }

    // Getter Methods

    getId = id => this.#accountId

    getTitle = title => this.#accountTitle

    getBalance = balance => this.#balance

    getEmail = email => this.#emailId

    depositAmount = amount => {
        this.#balance += amount;
        console.log("Balance: " , this.#balance);
    }

    withdrawAmount = amount => {
        if (amount > this.#balance)
            return console.log("Insufficient Funds!")
        this.#balance -= amount;
        console.log("Balance: " , this.#balance);
    }
}

const acc1 = new Account();
acc1.setId(1)
acc1.setTitle("Ali")
acc1.setBalance(1000)
acc1.setEmail("example@example.com");
console.log(acc1.getId()); // 1
console.log(acc1.getTitle()); // Ali
console.log(acc1.getBalance()); // 1000
console.log(acc1.getEmail()); // example@example.com
acc1.depositAmount(2000) // 3000
acc1.withdrawAmount(2000); // 1000
acc1.withdrawAmount(2000) // Insufficient Funds!
