/**
 * IsEmpty and Peek
You may have noticed there are a couple of helper functions in our Stack class.

First, we have the isEmpty function. This function should tell us whether or not we have elements in our items stack.

Then we have peek:

Peek

 Peek allows us to take a look at what's on the top of the stack without popping it off. This way, we know what our next element on the stack will be.

 Your Goal: Implement Helper Functions
Implement isEmpty to return a boolean if items is empty.

 For bonus points, use this method in pop to check for underflow!

Implement peek to return the top element in items without changing the array.
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
    let isEmpty = this.isEmpty();
    if (!isEmpty) {
      return this.items.pop();
    }
    throw new Error("undeflow");
  }
  isEmpty() {
    if (this.items.length !== 0) {
      return false;
    }
    return true;
  }
  peek() {
    let lastItemIndex = this.items.length - 1;
    return this.items[lastItemIndex];
  }
}
