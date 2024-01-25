/**
 * Push & Pop
Time to build a stack! A stack is a LIFO data structure. This means that when we retrieve elements from our stack, the most recently added element will be removed first.

 Let's take a closer look at LIFO in details.

Let's implement two methods, push and pop, to begin forming our stack. First let's see illustrations of both:

Push

 Push is this the only way to add elements to our stack. We add them to the "top" of the stack.

Pop

 Pop is the only way to retrieve elements from our stack. We remove the element from the top of the stack, retrieving the most recently added stack element.


LIFO
LIFO stands for Last-In-First-Out. This refers to the order in which elements move in and out of the data structure.

In a stack, you push a new element on to the top of the data structure. This element then becomes the new top element of the stack. When you pop an element from the stack, the top element is removed from the stack.

For example:

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
Notice how the elements get popped off in reverse order in a stack!

Array Methods
In JavaScript, there are two array methods, appropriately named push and pop, that function just as we would expect for our stack!

const arr = [1,2,3];

arr.push(4);

console.log(arr); // [1,2,3,4]

const top = arr.pop();

console.log(top); // 4
console.log(arr); // [1,2,3]
 Here is the MDN documentation for push and pop.





 Your Goal: Implement the Methods
In our Stack class, you can see we already have a constructor with an items array.

In the push function, let's add a new item to our items.

In the pop function, let's remove the last item from items and return it.

 Feel free to use JavaScript array methods with similar names. 
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
    return this.items;
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {}
  peek() {}
}
