/**
 * Then... What?
Now we will implement handling Asynchronous Behavior!

We want our then callback to be resolved after something happens asynchronously. Let's take a look at what we're trying to accomplish from the outside:

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        // after half a second we resolve with 42
        resolve(42);
    }, 500);
});

pact.then((value) => {
    // after resolve is called, 42 is passed here
    console.log(value); // 42
});
Seem like a big jump in functionality? Don't be intimidated, you're already almost there! 


Asynchronous Behavior
Let's take a look at some simple asynchronous behavior:

setTimeout(() => {
    console.log(2);
}, 500);

console.log(1);
 There are two calls to console.log functions setup. Which will happen first? 

The answer:

1
// ...half a second later...
2
This is because setTimeout schedules this function to be called later! We can think of asynchronous as anything that may happen later.

This could be an HTTP request, or a user interaction:

getResourceFromServer().then(() => {
    // do something after we asynchronously get a resource
});

confirmDialog("Are you sure?").then(() => {
    // do something after the user confirms they are sure
});


 Your Goal: Resolve Callback
Let's ensure that resolve calls the .then callback with the resolve value!

In the last stage, we passed two functions to the executor function. The first of these functions is the resolve function. This function should invoke the callback function passed into the then function.

 We're going to need to set a class member variable in our then function that will store the function for later.
 */

class Pact {
  // a fn is a function passed into out
  constructor(fn) {
    const resolve = (value) => {
      // invokes the callbackfunction passed to then function passing value to it
      this.fn(value);
    };
    const reject = () => {};
    fn(resolve, reject);
  }
  // add methods to return on the instance
  then(fn) {
    // fn is a callbacl function. which will create a class member variable and store it (this.fn = fn), so it can be accessed by the resolve function
    this.fn = fn;
  }
  catch() {}
}

const pact = new Pact((resolve, reject) => {
  console.log(typeof resolve); // function
  console.log(typeof reject); // function
});
