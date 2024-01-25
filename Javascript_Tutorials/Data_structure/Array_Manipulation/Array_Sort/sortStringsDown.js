/**
 *  Your Goal: Sort Strings Descending
Now it's time to flip the sort!

Given an array of strings, sort the strings in descending order ('c','b','a'...) and return the resulting sorted array.
 */

let actual = ["berries", "oranges", "apples", "limes", "lemons"];

function sortStringsDown(array) {
  return array.sort((a, b) => {
    return b.localeCompare(a);
  });
}

console.log(sortStringsDown(actual));
