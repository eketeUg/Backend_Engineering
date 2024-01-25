/**
 * Slice allows us to pass two parameters: a start index and an end index.
The resulting string will be a sliced string between those two indexes, not including the character located at the end index.

Slice allows us to pass two parameters: a start index and an end index.
The resulting string will be a sliced string between those two indexes, not including the character located at the end index.

If the last index is not provided, slice will continue until the end of the string

Your Goal: Find the Longer Half
Let's find the longer half of the string before and after the x!

1.First, you'll need to find the lower-case x.
2. Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
3. Take the longer string and return it!

*NB : Slice works with negative arguments too!
 */

function splitAtX(string) {
  let indexX = string.indexOf("x");
  let afterX = string.slice(indexX + 1);
  let beforeX = string.slice(0, indexX);
  if (beforeX.length > afterX.length) {
    return beforeX;
  } else {
    return afterX;
  }
}



