//## Describe why we use functions

//Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time.

//## Defining a function

// const printBoo = () => {
//     console.log("======");
//     console.log('Boo!');
//     console.log('======');
// }
// //the code will not run until you invoke it!
// // use one line of code to run multiples line of code!
// printBoo();

//

//### Exercise
// const printSum = () => {
//     console.log(10 + 10);
// }
// printSum();

// const printTriangle = () => {
//     for (i = 0; i < 5; i++) {
//         let num = "#"
//         let numIncrement = num += num;
//         let total = numIncrement + num;
//         console.log( to);
//     }
//     // console.log("#");
//     // console.log("##");
//     // console.log("###");
//     // console.log("####");
//     // console.log("#####");
// }
// printTriangle();

// function makeLine(length) {
//     var line = "";
//     for (var i = 1; i <= length; i++) {
//       for (var j = 1; j <= i; j++) {
//         line += "*";

//       }
//       line += "\n";
//     }
//     return line;
//   }
//   console.log(makeLine(5));

// const checkInputLenght = (input) => {
//     if (input.length > 10) {
//         console.log('input length is greater than 10')
//     } else {
//         console.log('input lenght is not greater that 10')
//     }

// }
// checkInputLenght('kkkkkfffffff');

// const sayName = (name) => {
//     console.log('Hello! My name is ' + name);
// }
// sayName('Irina');

// Argument vs Parameter

//The argument is the input, the parameter is how the input is represented in the function.
// const func =(PARAMETER) => {
//     //some code 
// }
// func(ARGUMENT);

//A function can take any number of parameters.

// const calculateArea = (num1, num2) => {
//     console.log(num1 * num2)
// }

// calculateArea(4,4);


//Exercises

//* Write a function called `minusOne` that takes a parameter `num`. Assuming the argument is a number, print the argument -1.

// const minusOne = (num) => {
//     console.log(num -1)
// }

// minusOne(10);
// minusOne(100);
// minusOne(Infinity);

//* Write a function `makeSentence` that takes **three** parameters and **concatenates** them into a fully formed sentence.

// const makeSentence = (word1, word2, word3) => {
//     console.log('Oh boy, do ' + word1 + word2 + word3 + 'or what?')
// }

// makeSentence('I ', 'want ', 'chimichangas ');


//**Extra**

//* Write a function called `getLastElement` that takes a parameter `arr`.
//* Invoke the function with an **array** as the argument.
//* The function should print the **last element** within the array.

// const getLastElement =(arr) => {
//     console.log(arr[arr.length - 1]);
// }

// getLastElement([1, 2, 3, 4, 5, 6]);
// getLastElement(['a', 'b', 'c']);
// getLastElement([[1, 2, 3], [4, 5, 6]]); 

//**Extra**

//* Write a function `divideThreeNums` that takes **three** parameters and prints the third parameter divided by the result of the second parameter divided by the first.

// const divideThreeNums = (pram1,pram2,pram3) => {
//     console.log(Math.floor(pram3 / (pram2 / pram1)));
// }
// divideThreeNums(10, 5, 2)
// divideThreeNums(30, 2, 9)
//

//Functions can pass information back to whatever line of code invoked them.
// const ten = () => {
//     return 10;
// }
// console.log(8 + ten());

//A function is only defined if it has a return value.

// const calculateArea = (num1, num2) => {
//     return num1 * num2
// }

// console.log(calculateArea(2,10));
// console.log(calculateArea(calculateArea(2,3), calculateArea(9,4)));


//Write a function that will **return** true if a word is a Palindrome, or will **return** false if not.
//// first you need  write a function that to splits str into an array
//    const reverseString = (str) => {
//         let splitString = str.split("");
//         let reverseArray = splitString.reverse();
//         let joinArray = reverseArray.join("");
//         return joinArray;

//     }



// const checkForPalindrome = (word) => {
//     //splits str
//     let splitWord = word.split('');
//     //reverse the new created array
//     let reverseArray = splitWord.reverse();
//     //join the reverse aray into str
//     let joinArray = reverseArray.join('');

//     if (word === joinArray) {
//         return "true"
//     }
//     else {
//         return "false"
//     }
// }
// console.log(checkForPalindrome('mad'));

//### Exercises

//* Write a function that takes two parameters (strings) and returns `true` (Boolean) if the two strings are identical, `false` if not.
const checkforIdenticalStr = (str1, str2) => {
    if (str1 === str2 ) {
        return 'true';
    } else {
        return 'false';
    }
}
console.log(checkforIdenticalStr('you','you'));

//* Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. `'123'`)
const compareThreeNums = (num1, num2, num3) => {
    let sumNums = num1 + num2 + num3; 
    let sumNumsString = sumNums.toString();

    console.log(sumNumsString);
    console.log(typeof sumNumsString)
    return sumNumsString;
    
}
compareThreeNums(2,4,6);

// const compareThreeNums = (num1,num2,num3) => {
//     let sumNums = num1 + num2 + num3;
//     let sumNumsString = sumNums.toString();

//     console.log(sumNumsString); 
//     console.log(typeof sumNumsString); 
//     return sumNumsString;
// }

// compareThreeNums(5,8,10);



//* Use your google-fu to research converting a number into a string
//* Invoke the function a couple of times with different arguments each time

