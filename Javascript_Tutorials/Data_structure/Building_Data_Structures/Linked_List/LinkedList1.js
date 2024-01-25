/**
 * Add First
Now it's time to create a method for adding a node to the front of the linked list. This node will become the new head node.

For implementing this we can break it into two scenarios:

No Existing Head Node
The first scenario is when we have no existing head node.

This scenario is pretty simple. We just need to set the new node as the head on the LinkedList:

No Head

Existing Head Node
The second scenario is when there is an existing head node.

This scenario is a bit more complicated. We need to do 2 things.

First we need to set the next of this new node to the current head:

Existing Head

Second we need to set the head to the new node we added to the front:

Set Head

 In this example the original head node does not have a next node.

If it did, would we need to change it? 

Nope! This will work fine, the rest of the list can stay connected the way it was previously.

 Your Goal: Add First Method
Write a method called addFirst on LinkedList. This method will take a node and add it to the front of the linked list.

Example of adding a node:

const linkedList = new LinkedList();

linkedList.addFirst( new Node(1) );

console.log(linkedList.head.data); // 1

linkedList.addFirst( new Node(2) );

console.log(linkedList.head.data); // 2
console.log(linkedList.head.next.data); // 1
 To accomplish this you will need to modify both the linked list's head and the node's next property.

 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.node = []; // this is an empty array to store the nodes
  }

  addFirst(node) {
    if (this.head == null) {
      // adding the first node
      this.head = node;
      //   this.head.next = node; //the next node will be pointing to itself
      return;
    }
    // to add subsequent nodes
    node.next = this.head; // this point the new node to the initial head
    this.head = node; // setting the new node as the head
    return;
  }
}

const linkedList = new LinkedList();

linkedList.addFirst(new Node(1));

console.log(linkedList.head.data); // 1

linkedList.addFirst(new Node(2));

console.log(linkedList.head.data); // 2
// console.log(linkedList.head.next.data); // 1
console.log(linkedList.head.next.data);
