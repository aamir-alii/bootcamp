// function add(x,y){
//     if(isNaN(x) || isNaN(y)){
//         throw "Please Provide Valid argument";
//     }
//     return x+y;
// }
// try{
//     let x ;
//     let y = 10;
//     console.log(add(x,y))     
//     // console.log(12,6)  
// }catch(err){
//     console.log(err)
// }
// // console.log(add(x,y))
// // console.log(add('5',10))
// // console.log(add(2,6));
// // let x = 10;
// // try{
// //   x = x + y;
// // }
// // catch(err){
// //     console.log(err.message);
// // }
// const divide = (x,y) => {
//     return x/y;
// }
// let x = 5;
// let y = 0;
// try {
//     console.log(divides(x,y))
// }
// catch(e) {
//     // console.log("Catch")
//     console.log(e.message)
// }

// const arr = [1,5,6];
// // spread operator
// const arr2 = [...arr, 2,4]
// console.log(arr2)
// // rest operator
// console.log(...arr)
// // destructing 
// let [num,num2] = arr;
// console.log(num,num2)
// // console.log(x,y,z)
// for(let idx in arr){
//     if(arr[idx] === 6)
//         arr[idx] += 2;
// }
// arr.push(7)
// console.log(arr)


// const getEven = (arr) => {
//     if(arr && arr.length){
//         return arr.filter((elem) => !(elem % 2) );
//     }
//     return arr;
// }

// console.log(getEven([1,2,3,4,5,6,7,8,9]));
// console.log(getEven([]))


// const isPalindrome = (str) => {
//     let rev = str.split("").reverse().join("");
//     return rev === str
// }

// console.log(isPalindrome('ab'))

// let arr = [6,5,6,2,4,1]
// console.log(arr.sort((a,b) => b - a))


const countSort = (arr) => {
    let maxi = arr[0];
    let mini = arr[0];
    for (let elem in arr) {
        maxi = maxi > elem ? maxi : elem
    }
    for (let elem in arr) {
        mini = mini < elem ? mini : elem
    }
    let count = {};
    for (let i = mini; i <= maxi; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    let sortedArr = [];
    for (let i = mini; i <= maxi; i++) {
        while (count[i]) {
            sortedArr.push(i);
            count[i]--;
        }
    }

    return sortedArr;
}

// console.log(countSort([1,9,8,5,4,5,3,2,1,4,6,7,9,10,2]))
// let x = 10;
// let y = 20;
// try {
//     console.log(x+y);
// }
// catch(err) {
//     console.log(err.message)
// }
// finally {
//     console.log("code executed Successfully")
// }

// closures

function Counter() {
    let count = 0;

    this.increment = () => {
        count += 1;
        console.log(count);
    }
    this.decrement = () => {
        count -= 1;
        console.log(count)
    }
    return { increment, decrement }
}

const c1 = Counter();
c1.increment();
c1.increment();
c1.increment();
c1.decrement();

// a+b+c/2;
// sqrt(s(s-a)(s-b)(s-c))




















