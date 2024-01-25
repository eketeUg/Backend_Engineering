/**
 * Unbound Function
In JavaScript, it is often helpful to define functions inside of other functions. In these cases, keeping track of the bound context can be quite tricky!

 You'll see this behavior quite often in asynchronous programming. Asynchronous means the code may run at a future point in time, depending on things like animations, network calls or user interaction. We'll look at this closer in Callback Functions.

Let's take a look at an example:

const YEAR = (1000 * 60 * 60 * 24 * 365);

function addYear() {
    setTimeout(function() {
        this.age++;
    }, YEAR);
}

const person = { name: 'Fred', age: 29 }

addYear.call(person);
This function should run after one year, incrementing Fred's age. However, when the function finally does run, this will not be set to the person. The function passed to setTimeout is not bound to the same this and defaults to the global this.

If we want to fix it, there are several ways:

Closure
Bind the Function
Arrow Syntax
 Be sure to check out arrow syntax! It results in a very clean solution to this problem. 

 ** Closure
A common way to fix issues with context in JavaScript is to capture the value of this inside of a function scope. Then you can refer to the new variable knowing it hasn't changed:

function addYear() {
    const that = this;
    setTimeout(function() {
        that.age++;
    }, YEAR);
}
This defines that which captures the context this within the addYear scope. Then we use that to increment age.

Bind the Function
Just as we did in stage 2, we can bind the function inside of the setTimeout. Let's see how this works:

function addYear() {
    setTimeout(function() {
        this.age++;
    }.bind(this), 1);
}
We use .bind to create a new function from the one we pass to setTimeout. This new function is bound to the same context as the addYear function itself.

Arrow Syntax
There is another way to define function expressions, referred to as "Arrow Syntax". The difference between the arrow syntax and the traditional function syntax is in behavior with this. The arrow syntax will actually capture the context of the surrounding function here:

function addYear() {
    setTimeout(() => {
        this.age++;
    }, YEAR);
}
Just by changing from function() { } to () => {}, we can fix the context issue!

 Your Goal: Fix the Context
Within the function Celebrity, a method is used to fetch the celebrity's age. The second argument to fetchAge is a callback function. The callback function will receive age as an argument.

 Unfortunately, due to the function call-site, this will be re-defined to not refer to the celebrity. Running the tests without modifying the code will result in a TypeError.

Fix this.age to refer to the same this as the function Celebrity.


 */

// const celebrities = {
//   "Will Smith": 51,
//   "Matt Damon": 49,
// };

// function fetchAge(name, cb) {
//   cb(celebrities[name]);
// }

// function Celebrity(name) {
//   this.name = name;
//   const self = this;

//   fetchAge(this.name, function (age) {
//     self.age = age;
//     console.log(self.age);
//   });
// }
// const celebrity = new Celebrity("Matt Damon");
// console.log(celebrity.age);

const celebrities = {
  "Will Smith": 51,
  "Matt Damon": 49,
};

function fetchAge(name, cb) {
  cb(celebrities[name]);
}

function Celebrity(name) {
  this.name = name;
  const that = this; // cache the `this` context

  fetchAge(this.name, function (age) {
    that.age = age; // use the cached `this` context instead of `this.age`
    console.log(that);
  });
}
const celebrity = new Celebrity("Matt Damon");
console.log(celebrity.age); // Output: 49
