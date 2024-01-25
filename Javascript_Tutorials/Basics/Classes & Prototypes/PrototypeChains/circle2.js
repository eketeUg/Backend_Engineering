/**
 * Linking Prototypes
What would happen if we tried to call .move function on our Circle instance like the code below?

const circle = new Circle(5,10,15);

circle.move(1,1); // what happens?
If you're not sure, you can try it out by running the test cases now! 

You'll likely see an error: TypeError: circle.move is not a function. 

Even though we use the Shape function to store the variables x and y on our Circle, we did not link to the Shape prototype!

This is where the awesome Object.create method comes in:

Circle.prototype = Object.create(Shape.prototype);
Now our Circle prototype inherits methods from the Shape Prototype! Any new circle will have a move method.

 Object.create is used to link our prototypes within the prototype chain.

 Your Goal: Link the prototypes
Use Object.create to link Circle.prototype to Shape.prototype.

This will ensure that any methods on Shape.prototype will also become available on new Circle instances. For instance, we'll be able to use circle.move(1,1); just like we did on the shape instance!

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

Circle.prototype = Object.create(Shape.prototype);

const circle = new Circle(5, 10, 15);

console.log(typeof circle.move); // what happens?
