/**
 * Comparing Strings
Strings have a built-in method for convienent comparison called localeCompare.

'a'.localeCompare('a'); // 0
'a'.localeCompare('b'); // -1
"apple".localeCompare("abcd"); // 1
 The localeCompare method also gives options for things like case, accent sensitivity and language. To learn more see the full documentation.

Conveniently, localeCompare returns the numerical values we need to help sort our strings! As shown above, when a string is compared to one that would come after it, the result is -1. When compared to a string that should precede it, the result is 1.

 Your Goal: Sort Strings Ascending
Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array.

 For debugging purposes, the tests will log your actual results versus the expected test results.
 */

let actual = ["berries", "oranges", "apples", "limes", "lemons"];

function sortStringsUp(array) {
  return array.sort((a, b) => {
    return a.localeCompare(b);
  });
}

console.log(sortStringsUp(actual));
