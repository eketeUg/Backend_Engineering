/**
 * Your Goal: Complete the Function hasOne
Complete the function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.
 */

function hasOne(array) {
  let one;
  let nOne;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      one = true;
    } else {
      nOne = true;
    }
  }
  if (one === true) {
    return true;
  } else return false;
}

console.log(hasOne([2, 3, 4]));
