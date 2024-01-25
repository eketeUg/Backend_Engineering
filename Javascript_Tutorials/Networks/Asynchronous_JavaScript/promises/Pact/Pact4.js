/**
 *  Your Goal: Multiple Callbacks
Our Pact class wouldn't be complete if we couldn't wire up multiple .then and .catch callbacks!

Let's give it a shot. So we're trying accomplish this:

let pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 100);
});
pact.then((val) => {
    console.log(val); // 42
});
pact.then((val) => {
    console.log(val); // 42
});
We also want to do the same for catch and reject:

let pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        reject(42);
    }, 100);
});
pact.catch((val) => {
    console.log(val); // 42
});
pact.catch((val) => {
    console.log(val); // 42
});
 This could be a bit of a tricky re-factor. Instead of storing one function with catch and reject, we'll want to be able to hold any number of functions and callback each of them with the resolve/reject value. How do we hold multiple values? 
 */

class Pact {
  // a fn is a function passed into out
  constructor(fn) {
    this.thenCallbacks = [];
    this.errCallbacks = [];
    const resolve = (value) => {
      // invokes all the callbackfunction passed to then function passing value to each
      this.thenCallbacks.forEach((fn) => {
        return fn(value);
      });
    };
    const reject = (value) => {
      // invokes all the callbackfunction passed to catch function passing value to each
      this.errCallbacks.forEach((errFn) => {
        return errFn(value);
      });
    };
    fn(resolve, reject);
  }
  // add methods to return on the instance
  then(fn) {
    // fn is a callbacl function. which will create a class member variable and store it (this.fn = fn), so it can be accessed by the resolve function

    if (typeof fn == "function") {
      this.thenCallbacks.push(fn);
    }
  }
  catch(errCb) {
    if (typeof errCb == "function") {
      this.errCallbacks.push(errCb);
    }
  }
}

let pact = new Pact((resolve, reject) => {
  setTimeout(() => {
    reject(42);
  }, 100);
});
pact.catch((val) => {
  console.log(val); // 42
});
pact.catch((val) => {
  console.log(val); // 42
});
pact.catch((val) => {
  console.log(val); // 42
});
pact.catch((val) => {
  console.log(val); // 42
});
