/**
 * Class Syntax
Classes can be defined using the class keyword, followed by its name and curly braces {}. Inside these curly braces we can define methods. These methods can be custom or a constructor.

The constructor is a special function that is called only once per new instance:

class Hello {
    constructor() {
        console.log('hello!');
    }
}

const h1 = new Hello(); // hello!
const h2 = new Hello(); // hello!
Both h1 and h2 are instances of Hello. When an instance is created, the constructor function is called.

A constructor is a great place to initialize properties on a class instance. We can do so by using the this keyword, which is the instance:

class Team {
    constructor() {
        this.sport = "soccer";
    } 
}

const t1 = new Team();
console.log(t1.sport); // soccer
The sport property is stored on the instance of Team, initialized to "soccer".

 Your Goal: Hero Health
Within your constructor function, add a health property to a hero instance and set it to 50.

When creating a new hero, it should work like this:

const hero = new Hero();

console.log(hero.health); // 50

 */
class Hero {
  constructor() {
    this.health = 50;
  }
}

const hero = new Hero();

console.log(hero.health); // 50
