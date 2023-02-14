// Question One
// {
//   var library = [
//     {
//       author: "Bill Gates",
//       title: "The Road Ahead",
//       readingStatus: true,
//     },
//     {
//       author: "Steve Jobs",
//       title: "Walter Isaacson",
//       readingStatus: true,
//     },
//     {
//       author: "Suzanne Collins",
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       readingStatus: false,
//     },
//   ];

//   library.forEach((book) =>
//     console.log(
//       `Author: ${book.author} Name: ${book.title} Reading Status: ${book.readingStatus}`
//     )
//   );
// }
// Question Two
// {
//   class Employee {
//     #ID;
//     #name;
//     #department;
//     #salary;

//     // setter functions

//     /**
//      * @param {Number} id
//      */
//     set setID(id) {
//       this.#ID = id;
//       // for chainging purposes
//       return this;
//     }

//     /**
//      * @param {String} name
//      */
//     set setName(name) {
//       this.#name = name;
//       // for chainging purposes
//       return this;
//     }

//     /**
//      * @param {Number} salary
//      */
//     set setSalary(salary) {
//       this.#salary = salary;
//       // for chainging purposes
//       return this;
//     }
//     /**
//      * @param {String} department
//      */
//     set setDepartment(department) {
//       this.#department = department;
//       // for chainging purposes
//       return this;
//     }

//     // getter Funcitons

//     get getID() {
//       return this.#ID;
//     }

//     get getName() {
//       return this.#name;
//     }

//     get getSalary() {
//       return this.#salary;
//     }

//     get getDepartment() {
//       return this.#department;
//     }
//   }

//   // Employee 1
//   const ali = new Employee();
//   ali.setID = 1;
//   ali.setDepartment = "App Development";
//   ali.setName = "Ali";
//   ali.setSalary = 50000;
//   console.log(
//     `ID: ${ali.getID} Name: ${ali.getName} Salary: ${ali.getSalary} Department: ${ali.getDepartment}`
//   );

//   // Employe 2
//   const ahmad = new Employee();
//   ahmad.setID = 2;
//   ahmad.setDepartment = "Web Develpment";
//   ahmad.setName = "Ahmad";
//   ahmad.setSalary = 40000;
//   console.log(
//     `ID: ${ahmad.getID} Name: ${ahmad.getName} Salary: ${ahmad.getSalary} Department: ${ahmad.getDepartment}`
//   );

//   // Employe 3
//   const john = new Employee();
//   john.setID = 3;
//   john.setDepartment = "Desktop App Develpment";
//   john.setName = "John";
//   john.setSalary = 300000;
//   console.log(
//     `ID: ${john.getID} Name: ${john.getName} Salary: ${john.getSalary} Department: ${john.getDepartment}`
//   );
// }

// Question 3
{
  fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      const members = data.members;
      members.forEach((member) => {
        console.log(
          `Name: ${member.name} Age: ${member.age} Secret Identity: ${member.secretIdentity} Powers: ${member.powers}`
        );
      });
      let [lastMember] = members.slice(-1);
      let lastMemberStringfy = JSON.stringify(lastMember);
      console.log(lastMemberStringfy);
    });
}
