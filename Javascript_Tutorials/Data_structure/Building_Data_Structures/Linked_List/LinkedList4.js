/**
 * Remove At
Okay, time for the trickiest method yet! It's going to be like linked-list surgery. 

We will need to remove a node from the list and then stitch the node before it to the node it was pointing to!

Let's again consider multiple scenarios:

Remove the Head Node
If we're removing the node at index 0 (the head node), we can simply set the new head node to the next node that the original head node was pointing to.

If the original head node had no next reference, the head reference becomes null. This is an empty list, so it works! 
If the original head node had a next reference, it would become the new head node, which is exactly what we want! 
Removing a Non-Head Node
If we're removing a node in between other nodes, we will need to connect the previous node to the next node:

Connect

Once we make this connection, we've successfully removed the node from the linked list!

 Your Goal: Remove At
Add a method removeAt on LinkedList.

This method will take a number index and remove the node in the list corresponding to that index position.
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

  indexOf(node) {
    let lastNode = this.head; // setting the lastNode variable as a refrence to the head
    let index = 0;
    if (lastNode === node) {
      // the head node will always have the index of 0
      return index;
    } else {
      if (lastNode) {
        while (lastNode !== node) {
          // if the last node matches with the node, this will break and return the index value
          index++; // this increments the index value after each loop, if the node we are searching for is not matched yet
          lastNode = lastNode.next; // this set the lastNode to the next folowing node
        }
        return index;
      }
    }
  }

  removeAt(index) {
    let lastNode = this.head; // setting lastNode as refrence to head
    if (lastNode === null) {
      // if the head is null it is an empty list so returns
      return;
    }
    // if the  index is zero, it sets the head as the next and delete the head
    else if (index === 0) {
      this.head = lastNode.next;
      return;
    } else {
      // traversing through the linked lists
      if (lastNode) {
        let indexOf = this.indexOf(lastNode); // this calls the indexOf() method

        // while the next node is not null, keep traversing
        while (lastNode.next) {
          if (index - 1 !== indexOf) {
            lastNode = lastNode.next;
          }
          lastNode.next = lastNode.next.next;
          return;
        }
      }
    }
  }
}
