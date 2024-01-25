/**
 * Strings to Numbers
In JavaScript, there are several ways to convert a string into a number. First, there is explicit conversion:

const string = "2"
console.log(Number(string)); // 2

const string = "hello"
console.log(Number(string)); // NaN
 You can also convert strings to numbers with parseInt and parseFloat. Be aware these two methods will chop off non-numeric characters at the end of the string.

And there is implicit conversion:

const string = "2";
console.log(+string); // 2

const string2 = "hello";
console.log(+string2); // NaN
You can see with the + operator the string is implicitly converted to a number.

 Best practice is to use explicit conversion in most cases. Explicit conversion will make your intentions obvious to your fellow programmers when they review/maintain your code! 

 Your Goal: Convert to Number
Given a string, convert it to a number.

If the string is not a number, return 0.

 You will be able to tell if the string is not a number if it converts to NaN. It might be helpful to know that NaN is falsey! Additionally, you can use the typeof operator.


ParseInt and ParseFloat
Strings can be converted to numbers with both parseInt and parseFloat. These functions will not only convert numbers, they will chop off any extra non-numeric characters at the end:

const result = parseInt("12px"); 

console.log(result); // 12
This only works with non-numeric characters at the end of the string. If the string starts with non-numeric characters it will return NaN:

const result = parseInt("abc123");

console.log(result); // NaN
 NaN stands for "Not A Number", and you can learn more about it in the MDN Documentation. Quite perplexingly perhaps, typeof NaN will evaluate to "number". 

A difference between the parseInt and parseFloat functions appears when working with floating point numbers:

const float = 12.24;

console.log(parseInt(float)); // 12

console.log(parseFloat(float)); // 12.24
 As might be suspected, parseFloat properly parses floating point numbers.

typeof
The typeof operator is a convenient way of checking a value's type.

It's easiest to demonstrate with a few examples:

console.log( typeof 1 ); // number
console.log( typeof "1" ); // string
console.log( typeof {} ); // object

 */

function toNumber(string) {
  const isNumber = Number(string);
  console.log(typeof isNumber);
  if (!isNumber) {
    // NaN is a falsey value
    return 0;
  }
  return isNumber;
}
console.log(toNumber("abc123"));
