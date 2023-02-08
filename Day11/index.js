// function Human(age) {
// 	this.legs = 2;
// 	this.age = age;
// }

// function Animal(canWalk, canfly) {
// 	this.canWalk = canWalk;
// 	this.canfly = canfly;
// }

// Human.__proto__ = Animal;


// let humna = new Human(15);
// humna.canWalk = false;
// console.log(humna, humna.legs)

// class Human {
//     name;
// 	constructor(name) {
// 		// this.name = name;
// 	}

// 	toString = () => {
// 		return `My name is ${this.name}`
// 	}
// }

// let human = new Human("Amir");
// console.log(human.toString())

// function Human(name) {
// 	this.name = name;
// 	// return this;
// }

// let human = new Human("Amir");
// Human.prototype.toString = function () {
//     return `My Name is ${this.name}`
// }
// console.log(human);
// console.log(human.toString())

// class Animal {
//     constructor() {
//     if (this.constructor === Animal) {
//      throw new Error("Object of Abstract Class cannot be created");
//     }
//    }
//   }


// const obj = new Animal();
// sum two numbers

class Animal {
	#age;
	#name;

  constructor(age, name) {
		this.#age = age;
		this.#name = name;
		if (this.constructor === Animal) {
			throw new Error("Object of Abstract Class cannot be created");
		}
	}

	getAge() {
		return `\n ${this.#age} year`;
	}

	getName() {
		return this.#name;
	}

	toString() {
		return `My name is ${this.#name} and age is ${this.#age}`;
	}

	getCommuteApproch() {
		throw new Error("Please provide inpl");
	}
}

class Birds extends Animal {
	constructor(age, name) {
		super(age, name);
	}

	getCommuteApproch() {
		return "\nFly";
	}
}

const crow = new Birds(10, "crow");
console.log(crow.toString(), crow.getAge(), crow.getCommuteApproch())





































