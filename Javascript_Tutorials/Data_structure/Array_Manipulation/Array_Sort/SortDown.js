/**
 * Sorting Descending
In the previous example, we sorted our array ascending:

[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
A negative result moves a in front of b. A positive result moves b in front of a. Zero keeps the order unchanged.

Sorting descending will be the opposite. We want a negative result to move b in front of a and a positive result to move a in front of b.

 Your Goal: Sort Numbers Descending
Given an array of numbers sort them in descending order and return the array.
 */

const array1 = [3, 2, 4, 1];
function sortDown(array) {
  return array.sort((a, b) => {
    return b - a;
  });
}

console.log(sortDown(array1));
