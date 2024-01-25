/**
 * There is a method on strings called indexOf that will help us find the first index of a string.
 * If the index is not found, indexOf will return a -1
 * 
 * 
 *  Although not as often used, it is interesting to note that there is also a lastIndexOf function on strings. This works as expected, it finds the last occurrence of the string and returns its index. look up https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
 * 
 * 
 * task: Find the First X
In the string argument find the index of the first lower-case "x" and return it.
 */

function findFirstX(string) {
  return string.indexOf("x");
}
