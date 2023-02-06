// Question 1: age into days
const ageToDays = age => age * 365;
console.log(ageToDays(24))

// Q2: check palindrome

const isPalindrome = str => str === str.split('').reverse().join('')

console.log(isPalindrome("abbc"))

// Question 3: format number upto specified places
const formatNumber = (number, places) => number.toFixed(places);
let number = 10.3333;
console.log(formatNumber(number,3))

