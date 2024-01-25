// task :  Taking in some integer value n, find the factorial for that number and return it.
/* SOLUTION: There are 3 ways to write an algorithm that finds the factorial of a given number
    1. Recursion.
    2. while loop.   [return statement can also break a while loop as well as a break statement]
    3. for loop.

Note:
Recursion :
 */

//
// const getMaxCallStackSize = (i) => {
//   try {
//     return getMaxCallStackSize(++i);
//   } catch {
//     return i;
//   }
// };

// console.log(getMaxCallStackSize(0));
// let sum = 1;
// function factorialize(num) {
//   if (num === 0 || num === 1) return 1;
//   for (var i = num; i >= 1; i--) {
//     sum = sum * i;
//   }
//   return sum;
// }

// console.log(factorialize(5));

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorialize(5));
