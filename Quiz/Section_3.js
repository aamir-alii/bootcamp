// Q1: Deferentiate Arrow Function and Regular function 
/*
Ans: Regular function can be define using function keyword while 
arrow function is a expression which we can store in regular variables
arrow functions were introduced in ecmascript ES6.
arrow function provide compact syntax.
arrow function doesn't have thiere own this it inherit this keyword from its parent
*/

// Q2: find odd sum

const findOddSum = _ => {
    let number = document.querySelector("#number").value;
    if(number.length < 5) return alert("digit count must be greater than 5")
    const numberArray = number.split('');
    let sum = 0;
    for(let num of numberArray) {
        num = parseInt(num)
        sum = num % 2 ? sum + num : sum;
    }
    console.log(sum)
}

// Q3: sum of interior angles of polygon // formula taken from internet

const nSidedPolygon = n => (n - 2) * 180;
console.log(nSidedPolygon(5))


// Q4:  Age Calculator

const calculate_age = dob => { 
    const dobYear = dob.getYear()
    const dobMonth = dob.getMonth()
    const dobDate = dob.getDate()
    const now = new Date();
    const currYear = now.getYear()
    const currMonth = now.getMonth()
    const currDate = now.getDate()
    let years = currYear - dobYear;
    let months;
    if(currMonth >= dobMonth){
        months = currMonth - dobMonth;
    }else{
        years--;
        months = 12 + currMonth - dobMonth;
    }
    let days;
    if(currDate >= dobDate){
        days = currDate - dobDate;
    }else{
        months--;
        days = 31 + currDate - dobDate;
        if(months < 0){
            months = 11;
            year--;
        }
    }

    console.log(`Years: ${years} Months: ${months} Days: ${days}`)
}

calculate_age(new Date(1998, 04, 01));
