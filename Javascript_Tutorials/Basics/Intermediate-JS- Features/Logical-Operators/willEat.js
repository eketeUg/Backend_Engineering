/**
 * Logical OR
There are cases in code where we want to say "this condition" or "this other condition". If either of the conditions are true, let's do something!

It would be quite ugly to write this with if statements every time:

if(car) {
    driveToAirport();
}
else if(motorcycle) {
    driveToAirport();
}
else if(truck) {
    driveToAirport();
}
If we needed to change the driveToAirport function, we would have to change it in 3 places. 

 It's good practice to DRY up your code. This stands for Don't Repeat Yourself. You should always try to avoid code redundancy where possible!

Let's try to accomplish the same functionality with the Logical OR (||) operator:

if(car || motorcycle || truck) {
    driveToAirport();
}
Phew, much cleaner! The || operator takes two values and returns true if either boolean value is true:

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false
 Your Goal: Junk Food Time!
Can't help it sometimes, we're hungry for junk food. 

We willEat if we have pizza, donuts or cookies! 

Complete the willEat function. The three arguments will be boolean values (true or false). If any of them are true, return true.
 */

function willEat(hasPizza, hasDonuts, hasCookies) {
  if (hasCookies || hasDonuts || hasPizza) {
    return true;
  }
  return false;
}

console.log(willEat(false, false, false));
