/**
 * Filtering Strings
We can measure a string's size by using the string method length:

const size = "abc".length;

console.log(size); // 3
 Your Goal: Keep Short Strings
Given an array of strings, keep only the strings whose length is at most 3.

An example:

const result = shortStrings([
    'abc',
    'a',
    'apples',
    'television'
]);

console.log(result); // ['abc', 'a']
 */

function shortStrings(array) {
  return array.filter((x) => {
    return x.length <= 3;
  });
}
