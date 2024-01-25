/**
 * Looking up Characters
In JavaScript, you can look up characters in strings by index. There are two ways to do this: with charAt or square brackets ([]).

Strings use zero-based indexing. This means the index of the first character is 0 and moves up 1 for each subsequent character.

task : Complete the Function
Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
If the first character is x return true. If not, return false
 */

function startsWithX(string) {
  if (string[0] === "x") {
    return true;
  } else {
    return false;
  }
}
// OR
function startsWithX(string) {
  if (string.charAt(0) === "x") {
    return true;
  } else {
    return false;
  }
}
