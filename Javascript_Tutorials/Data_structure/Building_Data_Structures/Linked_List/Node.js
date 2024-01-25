/**
 * Linked List Node
The first step in creating a linked list is creating the node:

Node

Each node keeps a reference to the next node. If there is no next node, the value is null.

 Your Goal: Build the Node
Add a constructor function that takes one argument, data. Store data on the node instance.

Also, in the constructor, add a property next to the node instance. For now, set this property to null.

Example:

const node = new Node(4);

console.log(node.data); // 4
console.log(node.next); // null
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
