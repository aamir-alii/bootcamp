// const result = document.querySelector("#result");
// result.innerText = "Hello World!"
// result.style.fontWeight = 'bold'
// result.style.fontSize = '24px'
const myString = "Hello World!"
// console.log(myString)
const myString2 = new String("Aamir Ali");
// console.log(myString + " " + myString2)
// console.log(myString2.length)
const myString3 = `${myString2} ${myString}`
// console.log(myString3)
const myStringArr = myString.split("");
// console.log(myStringArr)
const myString4 = myString.substring(6)
// console.log(myString)
// console.log(myString.endsWith('World!'))
// console.log(myString.includes("or"))
// console.log(myString4)

const myString5 = "Hello";
const size = myString5.length;
const idx = myString.toLowerCase().indexOf(myString5.toLowerCase());
// const idx = myString.toLowerCase().indexOf("amir");
if(idx > -1){
    const m5 = size + idx;
    console.log(myString.substring(m5))
}else{
    console.log("Unable to find")
}
// console.log(myString.indexOf('Aamir'))
myString.toLowerCase().indexOf(myString5);
// split,substring,slice,indexOf,toLowerCase,

let x = '5'
let z = 4
if( !isNaN(x) && !isNaN(z))
{   
    if( typeof x === 'number' && typeof z === 'number' && x > z){
        console.log("x is greater then z");
    }else if(typeof x === 'number' && typeof z === 'number'){
        console.log('z is greater than x');
    }else{
        if(typeof x !== 'number'){
            // console.log('x is not a number')
            x = parseInt(x);
        }
        if (typeof z !== 'number') {
            // console.log('z is not a number')
            z = parseInt(z);
        }
        if( x > z){
            console.log('x is greater than z')
        }else{
            console.log('z is greater than x')
        }
    }
}else{
    console.log("NaN")
}
