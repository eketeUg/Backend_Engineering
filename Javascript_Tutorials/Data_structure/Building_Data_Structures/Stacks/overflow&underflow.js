/**
 * Overflow & Underflow
Have you ever heard of a Stack Overflow? Maybe the popular FAQ site or perhaps you've encountered the infamous recursive call stack error!

Either way, the term refers to a condition where the maximum memory size of the stack is exceeded:

Stack Overflow

Once the stack has reached it's max size, any attempt to push on to it will result in an overflow.

Similarily, if we try to pop when the we have no elements, can you imagine what that might be called?

Stack Underflow

An Underflow! Of course!


Recursive Call Stack Error
When dealing with recursion, you may run into the case where the Call Stack overflows.

This could be as simple as:

function myFunction() {
    myFunction();
}
// make the initial call
myFunction();
After that initial call, this program will never terminate. Eventually the call stack will overflow because it will run out of memory to hold where to return program execution to.

 Your Goal: Throw Errors
Ok, let's throw errors for stack overflows and underflows within our Stack class.

If executing push will exceed the MAX_STACK_SIZE, throw an Error.
MAX_STACK_SIZE is a number value. The number of elements in the items array cannot exceed this number.

If a pop is attempted on a stack with zero elements, throw an Error.
 To throw an Error, you can throw new Error("any error message"). For more on errors, you can refer back to the Exceptions lesson or the MDN documentation.
 */

const { MAX_STACK_SIZE } = require("./config");

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    if (this.items.length < MAX_STACK_SIZE) {
      this.items.push(item);
      return this.items;
    }
    throw new Error("has exceeded MAX_STACK_SIZE, overflow");
  }
  pop() {
    if (this.items.length !== 0) {
      return this.items.pop();
    }
    throw new Error("undeflow, the array is empty");
  }
  isEmpty() {}
  peek() {}
}
