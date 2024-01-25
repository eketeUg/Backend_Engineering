/**
 * Your Goal: Find Unique Elements
Write a function that will take an array of numbers and return a new array that only contains unique numbers.

I will  use indexOf() method to check if an element is contained in an array
 */
const a = [1, 2, 2, 3, 4, 3];
function unique(array) {
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const isContained = uniqueArray.indexOf(element) >= 0; // this checks if such element is existing already in the new array
    // console.log(isContained);

    if (!isContained) {
      // if it is not existing, it is then pushed to the uniqueArray
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}
console.log(unique(a));
