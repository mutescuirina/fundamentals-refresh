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
                // console.log("FizzBuzz")
            } else if(checkForFive === 0) {
                // console.log('Buzz')
            } else if(checkForThree === 0)  {
                // console.log("Fizz")
            } else {
                // console.log(i)
            }
        }

//#### Wild Wild Life
//Use the following arrays to answer the questions below (name,species ,age, hometown):
//You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);
//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);
//3. Give D'Art a second hometown by adding "Hawkins"
dart.unshift('Hawkins');
console.log(dart);
//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the `wolfy` array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
console.log(wolfy);


//#### Yell at the Ninja Turtles
//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

ninjaTurtles = ['Donatello', 'Leonardo','Raphael', 'Michaelangelo']
for (let x of ninjaTurtles) {
    console.log(x.toUpperCase());
}