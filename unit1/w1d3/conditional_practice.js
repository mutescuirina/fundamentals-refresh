// //chose an M&M//
// let isMMColorGreen = true;

// //Decide what to do based on the color//
// if (isMMColorGreen){
// console.log('No thank you!')}
// else 
// { console.log('Yum!');
// }

// //another example//
// const isPartyTonight = true;
// const miniGolfCoupon = true;
// const saleAtTheMall = true;
// if (isPartyTonight) {
//     console.log("we are going to party like is 1999")
// } else if(miniGolfCoupon) { console.log("Hole in one! Woo!") } else {
//     console.log("I love cooking cookies");

// }
// //- `!` **not** sometimes called a `bang`: changes Boolean value to its opposite.//

// let hungry = true;
// let thirsty = false;

// console.log(hungry);
// console.log(thirsty);
// console.log(!hungry);
// console.log(!thirsty);


// //Another use case for toggling would be determining whose turn it is in a game. Let's say you are playing a game of chess against a computer//

// //start with the players turn//
// let playerTurn = true;
// console.log("It is the player's turn", playerTurn);
// //true = false//
// playerTurn = !playerTurn;
// console.log("It is the player's turn", playerTurn);
// //false = true//
// playerTurn = !playerTurn;
// console.log("It is the player's turn", playerTurn);

//Practice thruthiness and falsiness

// console.log(!!1);//true//
// console.log(!!0);//true//
// console.log(!!-1);//true//
// console.log(!![]);//true//
// console.log(!!{});//true//
// console.log(!!null);//false//
// console.log(!!"");//false//

//Equality operators//

// console.log(1 == 1) //true//
// console.log("beans" == "beans")//true//
// console.log(5+5*3 == ((5+5)*3))//true//
// console.log(9 !== false) //true//
// console.log(NaN == NaN)//false//

// let mmColor = 'blue'
// if(mmColor ==='green') {
//     console.log('Eiw! I am hurling this gross green M&M across the room.')
// } else {
//     console.log('Yum! M&Ms are so tasty!')
// }


// ## Comparison Operators//

// console.log("A" > "a")//false//

// "b" > "a"//false//

// 12 > "12"//false//

// 12 >= "12"//false//


// `'a' > 'b'`; //false//

// `'z' > 'abc'`
// => true

//Logical operators

// let username = ''

// let user = username || 'Bob Bobby Bob';
// console.log(user);

//### Boolean order of evaluation//

//Order of evaluation matters! When you have a complex statement, be sure to remember the order things will be evaluated//

// console.log(!false && true)//true//
// console.log(false || true) //true//

// const a = true;
// const b = false;
// console.log(a && a == b)//false//
// console.log(!true || !false && !false)//true//
// console.log(8 > 1 && true || false)//true//

//## Modulo//
//_Modulus as conditionals_//

//The **modulo** operator (also referred to as modulus) is represented as a `%` in JavaScript. The Modulo returns the remainder of Euclidean division (Don't worry! It's not as scary as it sounds! Let's investigate together!)//

// console.log(4 % 2)//0

if (5 % 2 === 0) {
    console.log('number is even')
}

if (5 % 2 !== 0) {
    console.log('number is odd')
} 

if (49 % 7 === 0) {
    console.log('number is divisible by 7')
}

if (5 % 2 == 0) {
    console.log('Number is even');
} else {
    console.log('Number is odd')
}