/**
 * Map Callback
Now, let's write our own map function! We'll want to take an array and run some function over each element, replacing that element with the function's return value.

For example:

const newArray = map([1,2,3], (x) => {
    return x * 2;
});

console.log(newArray); // [2,4,6]
 Your Goal: Complete the Map Function
Map each element in the array to its new value returned by the callback function.

Just like the previous stage, you'll want to run a function on each element in the array. Only this time you'll need to create a new array which you'll return at the end of the map iteration.
 */

function map(arr, callback) {
  let newArr = arr.map((elem) => {
    return callback(elem);
  });
  return newArr;
}

const newArray = map([1, 2, 3], (x) => {
  return x * 2;
});

console.log(newArray); // [2,4,6]
