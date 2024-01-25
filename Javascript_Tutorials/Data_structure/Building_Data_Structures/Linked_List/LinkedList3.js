/**
 * Index Of
Let's write an indexOf method like a regular array! It will be zero-based so the head will be 0 and every following index will be incremented by 1:

Index Of

 Need a refresher on the indexOf method? You can find more information in the MDN docs.

 Your Goal: Write Index Of
Write a method indexOf on LinkedList which takes node and returns a number index that indicates where the node is in the list.

To determine if a node is equal to another node you can simply compare them with (node1 === node2). This will evaluate to true if they are the same node.

 Technically when comparing objects, the === operator will return true if they point to same place in memory. For our purposes this will work if they refer to the same node. You can find more on the equality operators here.

Examples of using indexOf:

const node1 = new Node(4);
const node2 = new Node(3);
const linkedList = new LinkedList();

linkedList.addLast(node1); // node1 
linkedList.addLast(node2); // node1 --> node2

console.log(linkedList.indexOf(node1)); // 0
console.log(linkedList.indexOf(node2)); // 1
You can assume that the node is in the list. There is no need to handle the case where it is not found… unless you really want to! 


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
}

const node1 = new Node(4);
const node2 = new Node(3);
const node3 = new Node(2);
const node4 = new Node(1);
const node5 = new Node(5);
const node6 = new Node(6);

const linkedList = new LinkedList();

linkedList.addLast(node1); // node1
linkedList.addLast(node2); // node1 --> node2
linkedList.addFirst(node4);
linkedList.addLast(node3);
linkedList.addFirst(node6);
linkedList.addFirst(node5);

// console.log(linkedList.node);
console.log(JSON.stringify(linkedList.head));
console.log(linkedList.indexOf(node3));

// console.log(linkedList.indexOf(node1)); // 0
// console.log(linkedList.indexOf(node2)); // 1
