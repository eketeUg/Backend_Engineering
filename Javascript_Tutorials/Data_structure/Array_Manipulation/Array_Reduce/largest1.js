/**
 * Largest Positive
You'll notice that your code has not changed from the last stage. We're going to build on what you just learned!

In this stage, let's take the largest positive number. If we don't find any positive numbers, simply return 1. There's an easy way to do this in reduce, called setting the initial value. Let's see it in an illustration:

Largest Positive

 Notice how we're providing an initial value to our iterations.

In the reduce function the initial value goes in as the second argument:

[-1,-2,-4].reduce(function() {
    // reduce logic

}, 1 /* <--- initial value )
 Your Goal: Add the initial value
Just like the illustration above, we want our initial value to be 1. This way, if there are no positive values we will just return 1.
 */

// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
  }, 1); //1 here is set as the initial value
}

console.log(largest([-8, -10, 1, -9, -5, 1]));
