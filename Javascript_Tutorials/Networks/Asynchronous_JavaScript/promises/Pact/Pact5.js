/**
 * 
 * Real World Example
Let's say we're building a Pizza Delivery Service. 

We know what pizza the user wants to buy, but we're not sure if we have any employees available to deliver the pizza:

function confirmPizza(driversPact) {
    confirmDialog("Are you ready to purchase?", () => {
        driversPact.then((drivers) => {
            if(drivers.length > 0) {
                // drivers available, it will be there soon!
            }
            else {
                // oof, we're quite busy at the moment
            }
        });
    });
}

// we'll imagine we have a getAvailableDrivers function
// which calls to our server for availability of deliverers
const pact = new Pact((resolve, reject) => {
    getAvailableDrivers((drivers) => {
        resolve(drivers);
    });
});

// pass the pact to our confirmPizza dialog
confirmPizza(pact);
You can see that, while we're confirming with the user whether they are ready for delivery we're also loading up how many available drivers there are.

Inside the confirm dialog callback, we can wire up a .then callback without worrying if the pact has already resolved or not. If it has, then the code will execute immediately after the user confirms. If not, it will execute as soon as we gathered the information form the server.


 * 
 *  Your Goal: Immediate Resolve
Now we're cooking. 

We're adding in features that take Pact from simply working to developer-friendly! 

One feature we'll certainly want is the ability to resolve immediately if a pact has already resolved/rejected.

Think of it this way: if you passed a pact to another piece of code, that code would expect to be able to wire up a .then callback regardless of whether the pact has resolved or not yet (check out a real-world example).

We'll want to accomplish this:

const pact = new Pact((resolve, reject) => {
    // notice this happens synchronously, no timeout!
    resolve(42);
});

pact.then((val) => {
    // this should be called immediately 
    // since pact is already resolved
    console.log(val); // 42
});
 The resolve should occur before the .then has even wired up. All .then callbacks should run immediately with the resolve value.
 */

class Pact {
  // a fn is a function passed into out
  constructor(fn) {
    this.thenCallbacks = [];
    this.errCallbacks = [];
    this.resolvedValue = null; // flag to store the promise value if resolved
    this.rejectValue = null; // flag to store the promise value if rejected
    const resolve = (value) => {
      this.resolvedValue = value; // stores the value of the resolved promise
      // invokes all the callbackfunction passed to then function passing value to each
      if (this.thenCallbacks.length > 0) {
        this.thenCallbacks.forEach((thenCb) => {
          return thenCb(value);
        });
      }
    };
    const reject = (value) => {
      // set the reject value
      this.rejectValue = value;
      // invokes all the callbackfunction passed to catch function passing value to each]
      if (this.errCallbacks.length > 0) {
        this.errCallbacks.forEach((errFn) => {
          return errFn(value);
        });
      }
    };

    fn(resolve, reject);
  }
  // add methods to return on the instance
  then(thenCb) {
    // fn is a callbacl function. which will create a class member variable and store it (this.fn = fn), so it can be accessed by the resolve function
    if (typeof thenCb == "function") {
      if (this.resolvedValue) {
        thenCb(this.resolvedValue);
      }
      this.thenCallbacks.push(thenCb);
    }
  }
  catch(errCb) {
    if (typeof errCb == "function") {
      if (this.rejectValue) {
        errCb(this.rejectValue);
      }
      this.errCallbacks.push(errCb);
    }
  }
}

const pact = new Pact((resolve, reject) => {
  // notice this happens synchronously, no timeout!
  resolve(42);
});

pact.then((val) => {
  // this should be called immediately
  // since pact is already resolved
  console.log(val); // 42
});
