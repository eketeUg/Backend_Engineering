/**
 * Subclasses
It is possible to create subclasses that extend or inherit behavior from their parent class.

 Underneath the hood, extend uses the prototype chain. Refer to the prototype lesson to understand the difference between prototypal inheritance and classical inheritance.

Let's see an example of extending a class:

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    
}
In Rectangle, we can add functionality that only pertains to a rectangle without changing our definition of Shape.

Meanwhile Rectangle inherits the position property from Shape:

const rect = new Rectangle();

console.log(rect.position.x); // 0
console.log(rect.position.y); // 0
 Your Goal: Extend Hero
In the new file, Warrior.js, modify the Warrior to extend the Hero class.

No need to add anything to Warrior just yet, simply extend the class for now!
 */

class Hero {
  constructor() {
    this.health = 50;
  }
  takeDamage(num) {
    this.health -= num;
  }
}

class Warrior extends Hero {}
