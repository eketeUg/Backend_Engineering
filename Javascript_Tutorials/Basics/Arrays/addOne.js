/**
 * IMPORTANT NOTE
 * Reference
When storing an object in a variable we are storing a reference to the object. You can think of it as a lookup for the value (not the value itself).

This is tough to explain, so maybe a couple examples will help!

Let's first consider primary values like numbers.

let a = 3;
let b = a;
So far both a and b are 3. What if we changed a?

a = 10;
console.log(a); // 10
console.log(b); // 3
 Notice how a changed to 10 and b stayed 3. This is an important point!

When we assign b = a we are assigning the value inside a to b. This does not link a with b in any way. It simply copies the value 3 into b. This is how assignment works with all primitive values.

 For a list of all primitives see this MDN reference. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types

Contrarily, with objects we assign by reference. Let's see an example:

let a = [1,2,3];
let b = a;
 Now b also stores [1,2,3]. What if we changed the first element in a?

a[0] = 5;
console.log(a); // [5,2,3]
console.log(b); // [5,2,3]
Ah, look b also changed! This is because b stores a reference to the same array that a stores a reference to.

 Take a moment and think about how this would differ from primitive values. In the first example with numbers we changed b and that did not change a.

When we use the word const with an array or an object, JavaScript does not care whether we change a value inside of the data structure.

 An important thing to note: arrays are objects. So when we talk about properties of an object, you can extend those to arrays as well.

Be aware that the const keyword will stop us from changing the reference!

const arr = [1,2,3];
arr[0] = 5;
 This is okay!

const arr = [1,2,3];
arr = [5,6,7];
 This is no good. JavaScript will throw a TypeError: Assignment to constant variable.


 */
const a = [1, 2, 3, 4];
function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
}

console.log(addOne(a));
console.log(a);
