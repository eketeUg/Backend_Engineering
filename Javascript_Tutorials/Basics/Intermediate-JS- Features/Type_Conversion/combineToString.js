/**
 * To String Conversion
On the flip side, we can convert values to strings.

There are several ways to convert to a string in JavaScript. There are explicit methods:

const a = 123;

console.log(a.toString()); // "123"
console.log(String(a)); // "123"

console.log(false.toString()); // "false"
And then there are implicit conversion:

console.log(123 + ""); // "123"
console.log(true + ""); // "true"
JavaScript does its best to interpret the intention here by coercing these values to strings.

It should be noted that if the string had a number in it, they would still be added together as strings:

console.log(2 + "2"); // "22"
 Notice that the result is 22 here, not 4! The expression 2 + 2 evaluates to 4. However, when one of the values is a string, both are first converted to a string and then merged together.

 Your Goal: Combine Two Values
Given two values a and b, combine them together as strings and return the result. The values may be a number, a boolean or a string.

 All 3 of the types mentioned above have the method .toString() available.


 */

function combineToString(a, b) {
  //   return String(a + b);
  if ((typeof a && typeof b) !== "string")
    return (
      a + String(b)
    ).toString(); // this is to handle when both a and b are both numbers so it wont add the sum togther
  else return String(a + b);
}
console.log(combineToString(5, "55"));
