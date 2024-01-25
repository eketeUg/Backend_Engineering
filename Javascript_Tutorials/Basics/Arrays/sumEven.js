/**
 * Your Goal: Find the Sum of Even Values
Given an array, find the sum of all even values inside the array and return it.
 */

function sumEven(array) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenSum += array[i];
    } else {
      oddSum += array[i];
    }
  }
  return evenSum;
}
// this can also be achieved using array.reduce method
