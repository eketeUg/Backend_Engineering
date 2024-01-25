/**
 * 
Boolean Conversion
Just like number and string conversion, we can convert to boolean explicitly:

console.log(Boolean(2)); // true
console.log(Boolean("")); // false
 We can also use the logical NOT operator ! to convert boolean, flip the value, and ! again to flip it back. See Details.

When converting to booleans, values that are falsey are converted to false: false, 0, "", null, undefined, and NaN. All other values are converted to true.

Situations where values are implicitly converted to booleans include if conditionals:

if(3) {
    console.log('3 is truthy!');
}
This would hit the console.log because 3 is, in fact, truthy.

Not Not
The logical NOT operator (!) can be used to a flip a true to false and vice-versa.

When confronted with non-boolean values, the operator will implicitly convert it to a boolean first and then flip it:

console.log(!3); // false
console.log(!""); // true
So another way to go from a non-boolean value to its corresponding boolean value is by using the operator twice !!:

console.log(!!3); // true
console.log(!!""); // false

 Your Goal: Is it Truthy?
Given some value a return whether or not the value is truthy.

 Remember that truthy values are any value excluding falsey values: false, 0, "", null, undefined, and NaN.
 */

function isTruthy(a) {
  if (a) return a;
  else return false;
}
