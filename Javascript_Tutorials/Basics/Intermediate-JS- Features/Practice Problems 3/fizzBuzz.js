/**
 * Fizz Buzz
Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz" 
 */
function fizzBuzz(numbers) {
  let fizzBuzz = "";
  for (let i = 0; i < numbers.length; i++) {
    let divisibleBy3 = numbers[i] % 3;
    let divisibleBy5 = numbers[i] % 5;
    if (!divisibleBy3 && !divisibleBy5) fizzBuzz += "fizzbuzz";
    else if (!divisibleBy3) fizzBuzz += "fizz";
    else if (!divisibleBy5) fizzBuzz += "buzz";
  }
  return fizzBuzz;
}

const numbers = [1, 3, 5, 9, 11, 12, 20, 22, 25, 29];

console.log(fizzBuzz(numbers));
