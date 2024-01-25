/**
 * Asynchronous Callback
In the last stage, we discussed how callbacks are run at a specific time when they are passed to another function. Typically, this makes them extremely useful for asynchronous programming.

For web-applications, where JavaScript is especially prevalent, asynchronous callbacks can be helpful in several scenarios:

AJAX requests to the server
Waiting for a user response
Animations
A simple example for asynchronous code is to use the web API setTimeout which will run code after a set amount of time:

setTimeout(function callback() {
    // the code to run after 1000 milliseconds
}, 1000);

// code down here runs synchronously (before the callback)
In setTimeout, we give it a callback to run after a period of time (in milliseconds). The first argument to the function is the callback and the second argument is the number of milliseconds to wait before running the callback function.

 See the full documention of setTimeout on MDN.

 Your Goal: Make Run Callback Asynchronous
Let's modify runCallback to make callbackFunction run asynchronously.

Just like the example above, use setTimeout and invoke callbackFunction 1000 milliseconds (1 second) after runCallback has been called.
 */

/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */

function runCallback(callbackFunction) {
  setTimeout(function callback() {
    callbackFunction(); // the code to run after 1000 milliseconds
  }, 1000);
}

// OR
function runCallback(callbackFunction) {
  setTimeout(() => {
    callbackFunction();
  }, 1000);
}
