//1. What is the difference between a parameter and an argument?
    // A parameter is a set of rules that you can write with a function and an      argument is the data that is passed with the set of rules from the parameter. 

//2.Within a function what is the difference between console.log and return. 
    //Console.log is a tool used to check that the code is doing what is intended to do where on the other side return executes the code. 

//3.Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.

// const checkPalindrome = (word) => {
//     // 1.you first have to split the word
//     let splitWord = word.split('');
//     // 2. then you have to reverse the new created array
//     let reverseArray = splitWord.reverse();
//     // 3. you have to join the letters again
//     let joinArray = reverseArray.join('').toUpperCase('');
//         // joinArray = joinArray.toUpperCase('');
//         word = word.toUpperCase('');
    
//     // check if the word is equal to reverse version
//     if(word === joinArray) {
//         return true, " the word is a Palindrome"
//     } else {
//         return false, "the word is NOT a Palindrome "
//     }
    
// }
// console.log(checkPalindrome('Radar'));
// console.log(checkPalindrome("Borscht"));

// 4.## Sum Array 

//Write a function `sumArray` that takes an **array** as an argument.
//The array should contain numbers. The function should return the sum of the numbers in the array.
//Use a _for loop_ within the function to iterate over the array and sum the contents.
//Use a variable such as 
//```javascript
//let sum = 0;
//that will **accumulate** value within the loop.
//Expected result:
// javascript
//console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21

// const sumArray = (arr) => {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//        sum += arr[i];
//     }
//     return sum
    
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

//### Step One
//Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
//_Hint:_ Check every number up to the square root. To do this, try a _for loop_.
//### Step Two
//Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
//This function can **call on** the previous `checkPrime` function.

// const checkPrime = (num) => {
//     let sqrtNum = Math.floor(Math.sqrt(num));
//     let prime = num != 1;
//     for (let i = 2; i < sqrtNum+1; i++) {
//         if (num % 1 === 0) {
//            return prime = false
          
//         } 
//     }
//     return prime
// }
// console.log(checkPrime(19));

// const printPrimes = (nums) => {
//     for ( let i = 0; i < nums;  i++) {
//         return checkPrime(i)
//     }
//     return checkPrime(i)
// }
// console.log(printPrimes(19));

//## Rock Paper Scissors
moves = ['scissors', 'rock', 'paper'];

const randomMove = () => {
    for (let i = 0; i < moves.length; i++) {
        return moves[Math.floor(Math.random() * moves.length)];
    }
}
// console.log(randomMove());
// console.log(randomMove());

const rockPaperScissors = (user, computer) => {
    user = randomMove();
    computer = randomMove();
    
    if (user === computer) {
        return 'User chose ' + user +', and the computer chose ' +  computer +'.' + ' It is a tie.'
    } else if (user === "scissors" && computer === "rock" )  {
            return 'User chose ' + user +', and the computer chose ' +  computer +'.' + " Computer has won this round!"

        } else if (user === "rock" && computer === "paper") { 
            return 'User chose ' + user +', and the computer chose ' +  computer +'.' + " Computer has won this round!"

        } else if (user === "paper" && computer === "scissors") {
            return 'User chose ' + user +', and the computer chose ' +  computer +'.' + " Computer has won this round!"
        }
            else if(user === "paper" && computer === "scissors")  {
                return 'User chose ' + user +', and the computer chose ' +  computer +'.' +  " The computer has won this round!"
            }
        
            
}
console.log(rockPaperScissors());


