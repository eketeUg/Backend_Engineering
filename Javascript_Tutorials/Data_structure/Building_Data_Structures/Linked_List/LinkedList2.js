/**
 * Add Last
In the last stage, we added a node to the front of the list. Now it's time to add one to the back of the list. As you might imagine, this one is a bit trickier.

We can divide it into the same two scenarios again:

No Existing Head Node
If there is no existing head node, this actually works just the same as the addFirst logic.

Since there's no other nodes, whether you are adding first or last boils down to the same logic… A new head node:

No Head

Existing Head Node
It's a bit trickier with an existing head node. Let's say we have a list of size 2:

Add Last

We need to start at the head and continue down the list until we reach a point in the list where there is no next node. Once we reach this point, we set the next to our new node.

 Your Goal: Add Last
Create a method addLast on LinkedList which takes a node and adds it to the end of our linked list.


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
  addLast(node) {
    let lastNode = this.head; // setting the lastNode variable as a refrence to the head
    if (lastNode == null) {
      // adding the first node
      this.head = node;
      //   this.head.next = node; //the next node will be pointing to itself
      return;
    } else {
      if (lastNode) {
        while (lastNode.next) {
          // while the node.next is not null else it will break when it get to the last node that dont have a next value
          lastNode = lastNode.next; // this set the last node to the followeing node
        }
      }
      lastNode.next = node; // setting the last node next as
      return;
    }
  }
}

const linkedList = new LinkedList();

linkedList.addLast(new Node(1));

console.log(linkedList.head.data); // 1

linkedList.addLast(new Node(2));

console.log(linkedList.head.data); // 1
linkedList.addLast(new Node(3));

console.log(linkedList.head.data);
console.log(linkedList.head.next.data); // 2
console.log(linkedList.head.next);
