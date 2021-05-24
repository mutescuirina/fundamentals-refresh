//JavaScript Reps

    //Write a for loop that will log the numbers 1 through 20.

        for (i = 0; i <= 10; i++){
            // console.log(i);
        }
    //Write a for loop that will log only the even numb ers in 0 through 200. 
        for (i = 0; i <=200; i+=2) {
            // console.log(i);
        }
    // 1. Write a javascript application that logs all numbers from 1 - 100.
        
        for (i = 0; i <= 100; i++) {
            // console.log(i);
            
        let checkForThree = i % 3;
        let checkForFive = i % 5;
        //If a number is divisible by 3 log "Fizz" instead of the number.

            if
            ((checkForThree === 0) && (checkForFive === 0)) {
                console.log("FizzBuzz")
            } else if(checkForFive === 0) {
                console.log('Buzz')
            } else if(checkForThree === 0)  {
                console.log("Fizz")
            } else {
                console.log(i)
            }
        }

