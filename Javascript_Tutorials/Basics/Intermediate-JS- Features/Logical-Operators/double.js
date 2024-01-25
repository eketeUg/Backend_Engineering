/**
 * 
Default Operator
In the last stage we referred to || as the Logical OR operator.

This operator is also sometimes referred to as the default operator, due to its behavior with truthy and falsey values.

Take, for example:

console.log("" || "Something Else"); // Something Else
The empty string "" is a falsey value, so || will take the second value in this operation.

This can be pretty useful with variables! We can use this to create a default message if one is not defined:

const message = WELCOME_MESSAGE || "Hello there!";
 Here message is guaranteed a truthy value even if WELCOME_MESSAGE is empty.

And it's not just limited to empty strings either:

const age = user.age || 99;
 If user.age is undefined or 0 we will default to 99. For that matter user.age could be any falsey value and it would default to 99.

 Can you think of any other good examples for default values?

 Your Goal: Handle an Undefined
The double function here is almost complete! We also want double to be able to handle when x is undefined.

Example:

const result = double(); 

console.log(result); // 0
If no value is provided for x, return 0.

 Be careful with order of operations here! In the expression x || y * z the y * z will evaluate before x || y unless you use a parenthesis: (x || y) * z.
 */

function double(x) {
  return (x || 0) * 2;
}

const result = double();
console.log(result);
