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
// console.log(plantee);
//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
// console.log(wolfy);
//3. Give D'Art a second hometown by adding "Hawkins"
dart.unshift('Hawkins');
// console.log(dart);
//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the `wolfy` array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
// console.log(wolfy);


//#### Yell at the Ninja Turtles
//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

ninjaTurtles = ['Donatello', 'Leonardo','Raphael', 'Michaelangelo']
for (let x of ninjaTurtles) {
    // console.log(x.toUpperCase());
}

//#### Methods, Revisited

    //Here is a list of favMovies:

    const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

    //- Console log:  the index of `Titanic`
        // console.log(favMovies[8]);

    //1. use the `.sort` method Thought question: what did this do to the array? Did it permanently alter it?
        // console.log(favMovies.sort());
        // console.log(favMovies);
        // it displays in alfabetic order and it changed the original array
    
    //2. Use the method `pop`
        // console.log(favMovies.pop());
        // console.log(favMovies);
        // it removes the last element and an array and it displays it. 

    //3. `push` "Guardians of the Galaxy"
        // console.log(favMovies.push('Guardians of the Galaxy'));
        // console.log(favMovies);
        // it add elements to the end of the array

    //4. Reverse the array
        // console.log(favMovies.reverse());
        // console.log(favMovies);
        // it reverses the order of the array and alters the original one as well

    //5. Use the `shift` method
        // console.log(favMovies.shift());
        // console.log(favMovies);
        // it removes the first element in the array

    //6. `unshift` - what does it return?
        // console.log(favMovies.unshift('My brains'));
        // console.log(favMovies);

    //7. `splice` "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
        // console.log(favMovies.indexOf('Django Unchained'));
        // favMovies.splice(3,1,"Avatar");
        // console.log(favMovies);
    // the first number indicates the index position where you want to start the splice process, then the second nuumber indicates how many items you want to remove, separated by a comma the third is a list of item you want to insert

    //8. `slice` the last half of the array (challenge yourself and try to programatically determine the middle of the array  rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
        // console.log(Math.floor(favMovies.length/2))
        // slicedArr = favMovies.slice(9);
        // console.log(slicedArr)
    //store the value of your `slice` in a variable, console.log it - Thought question: what is going on here?
        //console.log your final results
// // It did not alter the original array it just took the part we sliced from it!///////////
//     console.log(favMovies.indexOf("Ja"))

//#### Where is Waldo

//* With the following multi-dimensional array

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//* Remove Eggbert (hint look at the slice/splice method(s))
    // whereIsWaldo.splice(1,1);
    // console.log(whereIsWaldo);

//* Change "Neff" to "No One"
    // whereIsWaldo[2][0,2] = "No One";
    // console.log(whereIsWaldo);

//Access and console.log "Waldo"
    // console.log(whereIsWaldo[3][1][1]);


//#### Excited Kitten
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// for (i = 0; i <=20; i++) {
//     if (i % 2 === 0) {
//         arrItems = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."]
//          let item = arrItems[Math.floor(Math.random() * arrItems.length)];
//         // console.log("Love me, pet me! HSSSSSS!");
//         console.log(item);
//     }
   
// }

//#### Find the Median
//- Find the median number in the following `nums` array, then console.log that number.
//-  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

        // const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

        // console.log(Math.floor(nums.length/2));


//#### Return of the Closets

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];


  // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  

//#### Alien Attire
//1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

 let kristynsShoe = kristynsCloset[0];
//  console.log(kristynsShoe);
thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset[2])

//#### Dress Us Up
//1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

// for (i = 0; i <3; i++) {
//     let hisShirts = thomsCloset[0];
//     // console.log(hisShirts);
//     let hisPans = thomsCloset[1];
//     let hisAccesories = thomsCloset[2];
//     let hisShirt = hisShirts[Math.floor(Math.random() * hisShirts.length)];
//     let hisOnePants = hisPans[Math.floor(Math.random() * hisPans.length)];
//     let hisAccesory = hisAccesories[Math.floor(Math.random() * hisAccesories.length)];
//     let herOutfits = kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)];

//     if(i === 0) {
//         console.log("Fist class Kristyn will be wearing " + herOutfits + " and Thom will be wearing a " + hisShirt + "," + hisOnePants + ", and " + hisAccesory +'.');
//     }
    
//         else if (i === 1) {
//             console.log("Second class Kristyn will be wearing " + herOutfits + " and Thom will be wearing a " + hisShirt + "," + hisOnePants + ", and " + hisAccesory +'.');
//         }
//         else {
//             console.log("Third class Kristyn will be wearing " + herOutfits + " and Thom will be wearing a " + hisShirt + "," + hisOnePants + ", and " + hisAccesory +'.')
//         }
// }
//#### Dirty Laundry
//Continue looking at the closet arrays:
    //1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

    // kristynsCloset.forEach(item => console.log(item + "WHIRR: Now washing"))

    //#### Inventory
    //2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

        
    console.log(thomsCloset[0]);
    console.log(thomsCloset[1]);
    console.log(thomsCloset[2]);



