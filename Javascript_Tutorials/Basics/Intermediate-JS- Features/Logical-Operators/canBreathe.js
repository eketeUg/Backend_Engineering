/**
 * 
AND Operator
Another important logical operator is &&, which is called Logical AND:

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
 Notice that both values must be true for the expression to evaluate to true. We need this to be true AND that to be true as well.

We can, of course, do the same thing with variables:

let a = true;
let b = true;

console.log(a && b); // true

b = false;

console.log(a && b); // false
console.log(b && a); // false
 Your Goal: Go Scuba Diving!
We're going Scuba Diving! 

We need a function that can determine if the diver can breathe. The function canBreathe will be passed three boolean values:

isConnected - Is true if the diver connected to the tank
hasOxygen - Is true if the tank has oxygen
aboveWater - Is true if the diver is still above water
If the diver is still aboveWater, they can breathe regardless of the tank connection and oxygen:

canBreathe(false, false, true); // true
canBreathe(true, false, true); // true
canBreathe(true, true, true); // true
If they are not aboveWater, they need to be connected to the tank and the tank needs oxygen in order to breathe:

canBreathe(true, false, false); // false
canBreathe(true, true, false); // true
 */

function canBreathe(isConnected, hasOxygen, aboveWater) {
  if (aboveWater) {
    return true;
  } else if (isConnected && hasOxygen && !aboveWater) {
    return true;
  }
  return false;
}

console.log(canBreathe(false, false, true)); // true
console.log(canBreathe(true, false, true)); // true
console.log(canBreathe(true, true, true)); // true

console.log(canBreathe(true, false, false)); // false
console.log(canBreathe(true, true, false)); // true
