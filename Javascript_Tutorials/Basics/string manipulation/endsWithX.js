/**
 * NB :  Since the character indexing is 0 based, the length value will actually be 1 greater than the last character index.
 * 
 *  Your Goal: Complete Ends With X
Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if it is, false if not.
 */

function endsWithX(string) {
  const index = string.length - 1;
  if (string[index].toLowerCase() === "x") {
    return true;
  } else {
    return false;
  }
}

// OR

function endsWithX(string) {
  const index = string.length - 1;
  if (string.charAt(index).toLowerCase() === "x") {
    return true;
  } else {
    return false;
  }
}
