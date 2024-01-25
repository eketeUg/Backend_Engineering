/**
 * New Keyword: Super
Let's continue with the example from the previous stage. We have a Shape class and a Rectangle class that extends it.

If we wanted to add new properties to our rectangle, we could do so in the constructor:

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.height = 10;
        this.width = 5;
    }
}
Notice the use of the keyword super. When invoked, this calls the constructor on Shape.

 Subclasses must call super before accessing this inside the constructor or JavaScript will throw a reference error.

Now Rectangle will have properties from both constructors:

const rectangle = new Rectangle();

console.log(rectangle.position.x); // 0
console.log(rectangle.height); // 10
console.log(rectangle.width); // 5
 Your Goal: Add Rage
Add a rage property to the Warrior. The value of rage will start at 0.

const warrior = new Warrior();

console.log(warrior.rage); // 0
 */

class Hero {
  constructor() {
    this.health = 50;
  }
  takeDamage(num) {
    this.health -= num;
  }
}

class Warrior extends Hero {
  constructor() {
    super();
    this.rage = 0;
  }
}

const warrior = new Warrior();

console.log(warrior.rage); // 0
