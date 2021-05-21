//## What is an Array?//

//- An array is a data structure and like a number or string, you can assign an array to a variable.

//- An array is a list. All list items go between square brackets

    // const arr = [];
    // console.log(arr);


//- Arrays contain `elements` separated by commas `,`

//- `Elements` can be any datatype (string, number, Boolean, another array...)
//- Usually all elements in an array are of the same datatype//

//## Type Checking

    // const num = 0;
    // const str = "strings are cool";
    // const bool = true;
    // const arr = [];

    // console.log(typeof num);
    // console.log(typeof str);
    // console.log(typeof bool);
    // console.log(Array.isArray(arr));

    // const favoriteFoods = ["romanian","asian","latin"];
    // console.log(favoriteFoods[0]);

// //## Array Method: `.length`
// //Methods are functions that are built into JavaScript that can be used on certain data types. We're going to be looking at an **array method** that will help us with iterating through an array.

    // console.log(favoriteFoods.length);

    // const numbers = [21, 18, 5, 3, 2, 1, 1];
    // numbers[2] = null
    // console.log(numbers);
    // numbers[0] *= numbers[0];
    // console.log(numbers);

    // console.log(numbers.length / 2);

    // const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];
    // console.log(list[list.length / 2]);

    // //To access the last array element://
    // console.log(list[list.length -1]);

    // const shortArray = ['first','middle','last']

    // //this will give us the last element
    // console.log(shortArray[Math.ceil(shortArray.length/2)])

    // //this will round up or down to the nearest iteger
    // console.log(shortArray[Math.round(shortArray.length/2)]);

    // //this will always round down//
    // console.log(shortArray[Math.floor(shortArray.length/2)]);

//## LOOPS: Iterate over an array//

//Let's use a for loop to iterate over all of the items in an array and print them out.

    // const kichenSink = ['dirty spoon','sponge','platewith gunk','soup','water'];

    // for (let i = 0; i < kichenSink.length; i +=2) {
    //     console.log('this is my sink', kichenSink[i]);
    // }

//### Let's Investigate :computer:
//With the following array:


    // const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch",
    //               "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

    // //* Console.log all of the elements in the array
    // for (i = 0; i < drSeuss.length; i++) {
    //     console.log('This is a book trying to be canceled', drSeuss[i]);
    // }
    // //* Console.log the odd numbered index items in the array
    // for (i = 0; i < drSeuss.length; i+=3) {
    //     console.log('This is a really odd one', drSeuss[i]);
    // }
    // //* Console.log the index number and the item of every odd numbered index items (on separate lines)
    //Awesome win!!!!!!!/////
    // for (i = 0; i < drSeuss.length; i+=3) {
    //     console.log(drSeuss[i],'The index number of this item is', drSeuss.indexOf(drSeuss[i]));
    // }

//## Using conditionals to select elements in array

//We can use **conditionals** to select elements an array.

//- Let's start with the condition of the index number. If we want to print the items in the array, but only if the index number is even:

    // const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

    // for (i = 0; i < foodSelections.length; i++) {
    //     if (i % 2 === 0) {
    //         console.log('because the index number of ',foodSelections[i],'is', foodSelections.indexOf(foodSelections[i]), 'you chose an even food selection');
    //     }
    // }
    
    //- We can add **multiple conditions** to select array elements.

//- If we want to print the items in the array, but only if the index number is even **OR 5**:
    // for (i = 0; i < foodSelections.length; i++) {
    //     if ((i % 2 === 0) || (i === 5)) {
    //         console.log(foodSelections[i]);
    //     }
    // }

//- If we want to print the items in the array, but only if the index number is divisible by 2 AND 3 (do not use `% 6`, make the right 'conditions')//

    // for (i = 0; i < foodSelections.length; i++) {
    //     if (i % 2 === 0 && i % 3 === 0) {
    //         console.log(foodSelections[i]);
    //     }
    // }


//### Let's Investigate :computer:
//With the following array

    // const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

//* Console.log the even numbered items in the array using a conditional statement.
    // for (i = 0; i < looneyTunesChars.length; i++) {
    //     if(looneyTunesChars.indexOf(looneyTunesChars[i]) % 2 === 0) {
    //         console.log(looneyTunesChars[i]);
    //     }
    // }
//* Console.log the even numbered items in the array and the item with the index of 3 using a conditional statement.
    // for (i = 0; i <looneyTunesChars.length; i++) {
    //     if (looneyTunesChars.indexOf(looneyTunesChars[i]) % 2 === 0 && looneyTunesChars.indexOf(looneyTunesChars[i]) === 3) {
    //         console.log(looneyTunesChars[i]);
    //     }
    // }
//* Console.log the odd numbered index items in the array using a conditional statement.

    // for (i =0; i < looneyTunesChars.length; i++) {
    //     if (looneyTunesChars.indexOf(looneyTunesChars[i]) % 2 !== 0) {
    //         console.log(looneyTunesChars[i],',',looneyTunesChars.indexOf(looneyTunesChars[i]));
    //     }
    // }

//**FIGURE IT OUT - Bonus!
// I got the random part to work but I get 7 returns insted of 1. It still needs work//Undate! I got one return by iterating every 7th. I am not sure this is an optimum solution//
    // for (i = 0; i < looneyTunesChars.length; i+=7) {
    //     let rand = looneyTunesChars[Math.random() * looneyTunesChars.length>>0]
    //     console.log(rand);

    // }

//#### ARRAY METHODS: Adding and Removing Elements

    let favMovies = ["Matrix", "Matix Reloaded", "Matrix Revolutions","Frozen", "Frozen 2","Tangled", "Alladin"];

    //indexOf: return the index position in the array
        // console.log(favMovies.indexOf("Frozen 2"));
    
    //push: adds new item at the end of the array and returns the new lenght
        // favMovies.push("Crazy Stupid Love")
        // console.log(favMovies);

    //pop: removes the last element of an array and returns it
        // favMovies.pop()
        // console.log(favMovies);
    //reverse: method reverses the order of the elements in an array
        // favMovies.reverse();
        // console.log(favMovies);
    //unshift: adds new item at the begining of an array and retuns the new lenght
        // favMovies.unshift("Forest Gump");
        // console.log(favMovies);
    //shift: removes the first item of an array
        // favMovies.shift();
        // console.log(favMovies)
    //splice: 



    

    

