/**
 * Errors
Sometimes, a promise does not resolve successfully.

For example: We want to get data from the server and the server cannot handle our request. In this case we might receive an error response code from the server.

In promises, we can handle errors with .catch:

const promise = getDataFromServer();

promise.catch((err) {
    console.error('oh no something bad happened');
});
 From the promise implementer's side, this is known as rejecting the promises, as opposed to resolving with the server data.

 Your Goal: Handle Rejection
What if the kitchen was all out of a particular ingredient? Let's be sure to catch an error from the makeFood promise.

When we need to create a new order, we'll request the food:

const order = new Order();

order.request({ burgers: 1 });
If there is an error on the request, it should be stored on the order:

console.log(order.error); // Out of buns
 Be sure to store the error on the order instance just like isReady!

 */

const { makeFood } = require("./Kitchen");

class Order {
  constructor() {
    this.isReady = false;
    this.error;
  }
  request(food) {
    const Done = makeFood(food);

    Done.then((data) => {
      // resolving promises
      this.isReady = true;
    });

    Done.catch((error) => {
      // rejecting promises
      this.error = error;
    });
    return Done;
  }
}
