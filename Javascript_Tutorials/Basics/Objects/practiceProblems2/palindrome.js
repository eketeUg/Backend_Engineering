/**
 * Palindrome
Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.

A palindrome is a word that is spelled the same forwards as it is backwards.

 The word pop is a palindrome.
 */

function isPalindrome(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (reverse.toLocaleLowerCase() === string.toLocaleLowerCase()) {
    return true;
  }
  return false;
}

console.log(isPalindrome("Pop"));
