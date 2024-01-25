/**
 * Array Sort
Every array created in JavaScript has access to the sort method. This method takes an optional comparison function that will determine the resulting sort order of the elements.

 Take a look at details to learn about the default behavior when a comparison function is not provided.

Let's take a look at providing a comparison function to sort numbers in ascending order (1,2,3...):

[3,2,4,1].sort(function comparison(a,b) {
    if(a < b) {
        // take a first
        return -1;
    }
    if(b < a) {
        // take b first
        return 1;
    }
    // no change is needed
    return 0;
});
The array will be sorted [1,2,3,4]. In this comparison function there are 3 possible return values:

-1 indicates a should be placed in-front of b.
1 indicates b should be placed in-front of a.
0 indicates no change in order is needed.
In fact, returning any negative value will have the same effect as returning -1 here. Any positive value will do the same as 1. This means we can shorten this function significantly:

[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
Here, if a is less than b, the result of the subtraction will be negative (placing a first). If b is less than a the result will positive (placing b first).


Default Sort Behavior
The comparison function is optional. So, what happens if we don't pass one to sort?

const result = [3, 2, 4, 1].sort();

console.log(result); // [1, 2, 3, 4]
Without a comparison function, the array elements are converted to strings and compared. Lower values are moved to the front of the array.

At this point it looks like it works pretty well for sorting ascending numbers. But wait! Let's take a look at another example:

const result = [20, 1, 2, 3].sort();

console.log(result); // [1, 2, 20, 3]
Uh-oh! 20 came before 3. Sorting numerically, we know that 3 should come first. However, you have to remember that the numbers are first converted to strings before sorting. When "20" is compared to "3", the first characters are compared and "2" comes before "3". Therefore, "20" is sorted in front of "3". Very tricky!

The default sorting is more intuitive when the elements are strings as they will be sorted as such:

const result = ['orange', 'berry', 'apple', 'cherry'].sort();

console.log(result); // ["apple", "berry", "cherry", "orange"]
In summary, when sorting numbers, rather than using the default sort functionality, you should pass in your own comparison function to guarantee a proper sort.




 Your Goal: Sort Numbers Ascending
Given an array of numbers, sort the numbers ascending (1,2,3...) and return the sorted array.
 */
const array1 = [3, 2, 4, 1];
function sortUp(array) {
  return array.sort(function compare(a, b) {
    return a - b;
  });
}

console.log(sortUp(array1));
