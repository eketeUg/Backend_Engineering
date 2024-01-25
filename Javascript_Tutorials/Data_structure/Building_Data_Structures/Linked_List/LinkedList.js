/**
 * Linked List
Now let's work on our Linked List implementation! In this stage we'll work on the new file LinkedList.js.

We need to keep track of a head. This is the first node in the linked list.

The head will keep a reference to the next node which will keep a reference to its next node… and so on until the end of the list.

Linked List

 Your Goal: Linked List Constructor
Add a constructor function to the LinkedList in the new file LinkedList.js.

The linked list should have a head property that is set to null by default.

Example:

const linkedList = new LinkedList();

console.log(linkedList.head); // null

 */

class LinkedList {
  constructor() {
    this.head = null;
  }
}
