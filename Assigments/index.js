// Question 1 
const questionOne = () => {
    let a = 2;
    let b = 3;
    let c = 4;
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}

// Question 2:

const questionTwo = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
        console.log(year, " Leaf Year")
    else
        console.log(year ," Not a leaf year")
}

// Question 3:

const questionThree = (a,b,c) => {
    let n1 = (-1 * b) + Math.sqrt((b*b) - (4 * a * c));
    let n2 = (-1 * b) - Math.sqrt((b*b) - (4 * a * c));
    let d = 2 * a;
    let ans = [];
    console.log('sol: ',  n1/d," Or sol: ", n2/d) 
}

// Question 4: 

const questionFour = (event) => {
    event.preventDefault();
    let myNum = document.querySelector("#myNum").value;
    myNum = parseInt(myNum);
    let randomNumber = Math.ceil(Math.random()*10);
    if(myNum === randomNumber){
        alert("Good Job!")
    }else{
        alert(`You Missed!`)
    }
}

// Question 5:

const questionFive = () => {
    let a = 3; 
    let b = 1;
    let c = -1;
    if ( a > b && a > c ) {
        console.log(a);
    }
    else if ( b > a && b > c ) {
        console.log(b);
    }
    else {
        console.log( c )
    }
}

// Questio 6:

const questionSix = () => {
    
}
questionOne();
questionTwo(1971)
questionThree(2,9,-5)
questionFive()


