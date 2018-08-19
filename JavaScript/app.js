/*Mulit - Line Comments
Are
Exactly
The same as CSS*/

//Data types in JavaScript
console.log("JavaScript");  //String
console.log(33.7);          // number
console.log(true);          // bool
console.log(null);          // Null

// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//Libraries can be called without creating an intsance..

//Math.random generates a random number between 0 and 1.
//We then multiply that number by 50, so now we have a number between 0 and 50.
//Then, Math.floor rounds the number down to the nearest whole number.
Math.floor(Math.random() * 50);
//Then, Math.ceil rounds the number up to the nearest whole number.
Math.ceil(Math.random() * 50);


//Using the Number Library..
//Check if a number is a valid integer
console.log(Number.isInteger(2017));


//
/*
--------Operators
===     equal to
!==     not equal to
&&      AND
||      OR

*/
//Example IF Statement
let moonPhase = 'full';
let isFoggyNight = false;
if (moonPhase === 'full' || isFoggyNight){
  console.log("Howl!")
}else if(moonPhase === 'mostly full' && isFoggyNight){
	console.log("Arms and legs are getting hairier")
}else if(moonPhase === 'mostly new'){
	console.log("Back on two feet")
}
else{
  console.log('Invalid moon phase');
};
// Short code "Ternary Operator"
let isNightTime = true;
//Long Hand
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
//Ternary
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
// We can use any bool expression in front of the question mark// WE MUST HAVE CODE IN THE ELSE PART
age >= 16 ? console.log('You are over 16'):console.log('You are under 16')



//Example of a switch Statement
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
};
