/**
 * Walk Nodes
Let's create a function that will find the last node in a list of nodes.

A node will have two properties:

id: A unique identifier
next: A reference to another node
In this way, each node will point to the next one.

// given a node, we can find node2 by using next
const node2 = node.next;

// node2 has its own id and next node reference
console.log(node2); // {id: 2, next: {…}}

// we can find node3 by using next on node2
const node3 = node2.next;

// node3 also has its own id and next node reference
console.log(node3); // {id: 3, next: {…}}
At some point, there will be a node without a next!

console.log( node5.next ); // undefined
 Let's make this our base case.

 Your Goal: Base Case
Once again, we'll start with the base case.

Given a node whose next property is undefined, return the node.

const n = walk({ id: 1, next: undefined }); 

console.log(n); // { id: 1, next: undefined }
 */
function walk(node) {
  if (node.next === undefined) return node;
  return walk(node.next);
}
