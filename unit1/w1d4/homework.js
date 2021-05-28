//1. What is the difference between a parameter and an argument?
    // A parameter is a set of rules that you can write with a function and an      argument is the data that is passed with the set of rules from the parameter. 

//2.Within a function what is the difference between console.log and return. 
    //Console.log is a tool used to check that the code is doing what is intended to do where on the other side return executes the code. 

//3.Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.

const checkPalindrome = (word) => {
    // 1.you first have to split the word
    let splitWord = word.split('');
    // 2. then you have to reverse the new created array
    let reverseArray = splitWord.reverse();
    // 3. you have to join the letters again
    let joinArray = reverseArray.join('').toUpperCase('');
        // joinArray = joinArray.toUpperCase('');
        word = word.toUpperCase('');
    
    // check if the word is equal to reverse version
    if(word === joinArray) {
        return true, " the word is a Palindrome"
    } else {
        return false, "the word is NOT a Palindrome "
    }
    
}
console.log(checkPalindrome('Radar'));
console.log(checkPalindrome("Borscht"));
