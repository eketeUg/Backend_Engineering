/**
 * Count the Elements
Write a function countElements that takes in an array and returns an object a count of each element in the array.

const elements = ["e", "k", "e", "z", "i", "z"];
countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}
 */

function countElements(elements) {
  let elementObject = {}; // an empty object
  for (let i = 0; i < elements.length; i++) {
    if (Object.keys(elementObject).indexOf(elements[i]) >= 0) {
      // checks if any key in the object matches with the element then if so matches then increments if value by one **** Object.keys(elementObjects) returns the keys in the elementObject as an array, wich we then use the indexOf() method to check if an elemen is contained
      elementObject[elements[i]] += 1;
    } else {
      // else set the element as a key with a value of 1
      elementObject[elements[i]] = 1;
    }
  }
  return elementObject;
}

const elements = ["e", "k", "e", "z", "i", "z"];
console.log(countElements(elements));
