/**
 * Prototypes
Many programming languages have a concept of a Class. Classes are templates for creating objects called instances. Each instance will have it's own set of properties called state. The class provides initial state values and functions copied into each new instance.

JavaScript does not have classes in a traditional sense. It has prototypes. They function similarily with a few key differences! Primarily, prototypes provide a way to share properties and functions by linking objects together. This is contrary to classes which traditionally copy functionality to new instances.

 You can think of prototypes as a chain of linked objects.

 Your Goal: Complete the Shape Function
The Shape function will take two arguments: x and y. Store these values in an object position on the instance (this).

 For reference see this example. The tests will invoke Shape with the new keyword, creating an object and setting it to this within the function.

The position should have keys x and y containing the corresponding values:

const shape = new Shape(5, 10);

console.log(shape.position.x) // 5
console.log(shape.position.y) // 10
 Notice that position is an object with two keys x and y!

 */

// Our Shape "Constructor"
function Shape(x, y) {
  this.position = { x, y };
}

const shape = new Shape(5, 10);
console.log(shape.position.x); // 5
console.log(shape.position.y);
