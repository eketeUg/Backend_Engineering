/**
 * Then and Catch
Let's build our own Promise Library called Pact. 

As you can see in your Pact.js file, we've started you out with a Pact class.

Examples
Here are some of examples of promises using catch and then, so you have an idea of what we're trying to build!

const promise = new Promise((resolve, reject) => {
    // some asynchronous code here
});

promise.then(() => {
    // this function will be executed 
    // when the resolve function is called
})

promise.catch(() => {
    // this function will be executed
    // when the reject function is called
})
If we call resolve inside the promise executor function:

const promise = new Promise((resolve, reject) => {
    resolve(42);
});
The then function is invoked with 42:

promise.then((val) => {
    console.log(val); // 42
})
Similarly, if the reject function is invoked the catch function will be invoked with the value passed into reject!




 Your Goal: Add the Methods
Your first task is to create two class methods catch and then. These methods are used by promises to wire up callbacks.

 See examples of how these methods will be used in details.

To pass the assertions in testPact.js, you'll simply need to create the class methods catch and then on your Pact class. There is no need to implement any functionality just yet!


 */

class Pact {
  // add methods to return on the instance
  then() {}
  catch() {}
}
