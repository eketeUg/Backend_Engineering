/**
 * Either Not Both
Write a function eitherNotBoth that takes in a number and returns true if the the number is divisible by either 3 or 5, but not both. Return false otherwise
 */

function eitherNotBoth(num) {
  let divisibleBy3 = num % 3; // if it is divisible the modulus operator will evaluate to 0, which is falsey value, so in the if state I used !not operator to check it both 3 and 5 divides it
  let divisibleBy5 = num % 5;
  if (!divisibleBy3 && !divisibleBy5) return false;
  else if (divisibleBy3 || divisibleBy5) return true;
  return false;
}
console.log(eitherNotBoth(30));
