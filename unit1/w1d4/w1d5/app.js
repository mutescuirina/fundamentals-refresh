

let orange = true;
let peeled = Boolean;



const takeOutOrange = () => {
    if (orange === true) {
        return "The orange is out of the fridge!"
    } else {
        return " Go get an orange from the fridge"
    }
}
console.log(takeOutOrange());
//we now have the orange///



//write a function that checks if the orange is pilled
 const isPeeled = (rind) => {
     if ( rind === 0) {
         //instead of the console.log just return in
         console.log('its ready to eat');
     } else {
         //instead of the console.log you have to create a peeling function
         console.log('it is not ready, you have to peel it')
     }
 }
 isPeeled(5);



