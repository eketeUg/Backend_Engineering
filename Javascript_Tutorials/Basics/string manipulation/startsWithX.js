/**
 *  Your Goal: Handle x and X
Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.
 */
function startsWithX(string) {
  if (string.charAt(0).toLowerCase() === "x") {
    return true;
  } else {
    return false;
  }
}
