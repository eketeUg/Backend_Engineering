/**
 * Splice Index
Let's use splice to remove elements that are greater than 1:

const array = [1,2,3];
for(let i = 0; i < array.length; i++) {
    if(array[i] > 1) {
        array.splice(i, 1);
    }
}
console.log(array); // [1, 3]
 Uh-oh, A bug! 

Why is the console.log showing that array contains 1 and 3?

We should be splicing any elements that are greater than 1. Why is 3 still in our array? 

Let's break it down by iteration:

Iteration 1
Iteration #1

 The first iteration works as expected! The index points at the element 1.

We do not splice 1 because it is not greater than 1.

Iteration 2
Iteration #2

 The second iteration also works as expected!

We find that 2 is greater than 1 so we splice at index 1.

Last Iteration?
No Iteration

 Huh. Our array length is 2 and i is 2.

 Uh-oh! Our loop condition is that i < array.length, so there are no further iterations at this point. We never removed 3! 

How can we fix this? 

Counting Backwards
Let's try this again counting backwards:

const array = [1,2,3];
for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] > 1) {
        array.splice(i, 1);
    }
}
console.log(array); // [1]
 Sweet! It works as expected!

Let's take a look at the iterations.

Iteration 1
Iteration #1.

 Good so far! We point at the 3 because we are starting at the end of the array.

We remove 3 because it is greater than 1.

Iteration 2
Iteration #2

 This looks good again!

We moved the index i down by 1 and we found that 2 should also be removed. We successfully splice it at the index 1.

Iteration 3
Iteration #3

 Good again! 1 is not greater than 1, so we do not splice it.

We are left with [1] in our array, just like we expected!

Counting backwards for the win! 


 */

/**
 * challenge: Remove the Occurrences
Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.

Modify the array directly and do not return anything from this function.

An example:

const array = [1, 2, 3, 1];
removeOccurrences(array, 1);
console.log( array ); // [2, 3]
 */

function removeOccurrences(array, num) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == num) {
      array.splice(i, 1);
    }
  }
}

const array = [1, 2, 3, 1];
removeOccurrences(array, 1);
console.log(array); // [2, 3]
