//Loops//
//Loops allow us to do something repeatedly. We'll use for loops to build out some more control flow examples//

for ( let step = 0; step <5; step++) {
    //Runs 5 times, with values of step 0 through 4.//
    console.log('Walking east one step', step)
}

//## The Problem//
//Find the sum of all the even integers between 0 and 10//

// 1. You need to create a for loop that iterates up to 10. Then to extract the even numbers by using the modulus operator.//
// 2. Now we need a variable to hold our sum

 let evenSum = 0;

for (let i = 0; i < 10; i++) {
    // console.log(i)
    if (i % 2 === 0) {
        // console.log(i,"is an even number")
        evenSum +=i;
    }
}
console.log(evenSum);


    
