/**
 * The Executor
The function that gets passed in to the promise constructor is often referred to as the executor function:

new Promise(function executor(resolve, reject) {
    // inside the executor function!
});
 Let's add this functionality to our Pact!

 Your Goal: Writing the Constructor
We'll need to declare a new constructor on Pact. This constructor will take an executor function as it's only argument.

The executor function should be called immediately from the constructor with two arguments of it's own, both of which are new functions.

Let's take a closer look at the executor function example and consider how we can achieve this functionality.

For Pact it should look like this:

const pact = new Pact((resolve, reject) => {
    console.log(typeof resolve); // function
    console.log(typeof reject); // function
});
 If you can make the above comments true, you'll pass the tests! You'll need to ensure that both resolve and reject are functions passed to the executor.
 */

class Pact {
  // a fn is a function passed into our constructor(a callback function or our executor function)
  constructor(fn) {
    const resolve = () => {}; // create a resolve and reject function that will be passed when executing our executor function
    const reject = () => {};
    fn(resolve, reject);
  }

  // add methods to return on the instance
  then() {}
  catch() {}
}

const pact = new Pact((resolve, reject) => {
  console.log(typeof resolve); // function
  console.log(typeof reject); // function
});
