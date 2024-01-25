/**
 * Sharing Functionality
We're moving on to a new shape: Circle! You can find the definition started in your Circle.js tab.

Circle will be similar to Shape. The only addition is a new radius property. Since these prototypes will be so similar, we'll invoke Shape in our Circle function.

 Your Goal: Complete the Circle Function
In Circle.js, you'll need to do two things:

Pass the arguments to Shape via call.
 Notice we are binding Circle with this using call. This way when Shape is invoked, it will store x and y on the Circle instance!

Store radius on our Circle instance. You can do this exactly how we stored position on the Shape class.
The final result behavior should be:

const circle = new Circle(5,10,15);

console.log(circle.position.x); // 5
console.log(circle.position.y); // 10
console.log(circle.radius); // 15
 */

// Our Shape "Constructor"
function Shape(x, y) {
  this.position = { x, y };

  Shape.prototype.move = function (x, y) {
    this.position.x += x;
    this.position.y += y;
  };
}

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.radius = radius;
}

const circle = new Circle(5, 10, 15);

console.log(circle.position.x); // 5
console.log(circle.position.y); // 10
console.log(circle.radius); // 15
