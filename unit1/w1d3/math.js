
let cartTotal = 16.07
let roundedUpCart = Math.ceil(cartTotal);
console.log
(roundedUpCart);

//create a new variable that contains the difference between the round up amount and the real cart amount//
// let donation = roundedUpCart - cartTotal
// console.log(donation)

//then to make it super easy for the customers we need to use another method called .toFixed //
let donation = (roundedUpCart - cartTotal).toFixed(2)
console.log(donation)


