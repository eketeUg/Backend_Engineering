/**
 *  Your Goal: Halve 'em! 
The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

Odd numbers should be rounded up to the nearest whole number.
 */

function halfValue(numbers) {
  const halfArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 > 0) {
      let half = numbers[i] / 2 + 0.5;
      halfArray.push(half);
    } else {
      halfArray.push(numbers[i] / 2);
    }
  }
  return halfArray;
}

const arr = [11, 13, 15, 17];
const actual = halfValue(arr);
console.log(actual);
