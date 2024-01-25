/**
 * Map Squared
In the last stage, you defined a function to square two numbers together.

Now it's time to create a function that will map that function over an array.

 Your Goal: Modify SquaredMap.js
Given an array of elements in squaredMap, return an array with each element squared:

squaredMap([2]); // [4]
squaredMap([1,2,3]); // [1,4,9]
 */

function squared(n) {
  return n * n;
}

function squaredMap(arr) {
  return arr.map(squared);
}

console.log(squaredMap([2])); // [4]
console.log(squaredMap([1, 2, 3])); // [1,4,9]
