// Define Scope restriction

//Scope is the restriction of where in your code your variables can be accessed. If you try to access a variable outside of its _scope_, it will not be defined. 

// In general you want your scope to be restricted. You only want your variables accesible to specific safe zones.

//global scope//
// const item = 'spicy meatball';

// const exampleFunction = () => {
//     console.log(item + ' within function')
// }

// exampleFunction();

// const setItem = () => {
//     const item = 'spicy meatball';
//     return item;
// }
// const getItem = () => {
//     return item;

// }
// console.log(getItem())

//## Describe how functions can call other functions

//Functions can call other functions that reside in an accessible scope. For example:

// const returnName = () => {
//     return "Matt"
// }
// const returnGreeting = () => {
//     return 'oh hai ' + returnName()
// }
// console.log(returnGreeting());

//### extra problem

//* Write a function `checkSquare` that will return **true** if a number is a **perfect square** (Check if the square root is a whole number).  Hint: use Math.sqrt() and (num % 1 == 0)

//* Write function `checkToLimit` that will loop up to an arbitrary limit brought in as a param (say, 100), and console log whether each number is a perfect square. Call upon the previously defined `checkSquare` function.

const checkSquare = (num) => {
    if (Math.sqrt(num % 3 == 0)) {
        console.log(num,'this is a perfect number');
        return true
    }  else {
        console.log(num, 'this is not a perfect number')
        return false
    }
   
}
// console.log(checkSquare(60));

const checkToLimit =(n) => {
    for (i = 1; i < n; i++){
        console.log(checkSquare(i));
    }
   
}
console.log(checkToLimit(100));



// for(var i = 0; i < 100; i++){
//     if(isPrime(i)) console.log(i);
// }

 