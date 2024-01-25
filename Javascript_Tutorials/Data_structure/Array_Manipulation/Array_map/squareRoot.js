/**
 * Mapping a Function
In the last stage, we created an anonymous function to use in the map function.

We can do the same thing with functions that we have previously defined:

function addOne(x) {
    return x + 1;
}

const result = [1,2,3].map(addOne);

console.log(result); // [2,3,4]
As well as built-in JavaScript functions:

const absolutes = [-1, 1, -2, 2].map(Math.abs);

console.log(absolutes); // [1,1,2,2]
Here Math.abs returns the absolute value of each element in the array.

 Be careful when passing a function to map. It will pass multiple arguments to your function which may cause it to behave unexpectedly!

 Your Goal: Take the Square Root
Using the squareRoot function, map each element in the array arr to its square root. Return the new array.

const result = squareRoot([2,4,9]);

console.log( result ); [1,2,3]
 */

function squareRoot(arr) {
  return arr.map((x) => {
    return Math.sqrt(x);
  });
}

const result = squareRoot([2, 4, 9]);

console.log(result);
[1, 2, 3];
