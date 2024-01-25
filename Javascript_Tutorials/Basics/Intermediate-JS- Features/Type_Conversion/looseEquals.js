/**
 * Loose Equals
In previous lessons we discussed strict equals ===. We know that this operator compares two values and returns whether or not they are the same.

For instance:

console.log(3 === 3); // true
console.log("apple" === "orange"); // false
When the values are different types, the === operator will always evaluate to false:

console.log("2" === 2); // false
However, the loose equals == comparison operator will attempt type conversion to compare values!

console.log("2" == 2); // true
 Many discourage the use of == in general. For one thing it is less performant because it requires changing a value's type. Additionally, it can lead to confusing results in some cases where type conversion is unexpected. 

 Your Goal: Is Loosely Equal?
Return true if a and b are loosely equal to each other. If not, return false.
 */

function looseEquals(a, b) {
  if (a == b) return true;
  else return false;
}
