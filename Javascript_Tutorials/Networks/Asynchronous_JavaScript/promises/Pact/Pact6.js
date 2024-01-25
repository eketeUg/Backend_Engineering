/**
 *  Your Goal: Chaining Callbacks
Another feature of Promise is that it allows you to chain .then callbacks.

Doing so allows you to transform the result in each subsequent callback. Let's take a look at an example:

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 100);
}).then((val) => {
    console.log(val); // 42
    return val * 2;
}).then((val) => {
    console.log(val); // 84
    return val * 2;
});

pact.then((val) => {
    console.log(val); // 168
});
 Notice how the value passed into the second .then has been doubled by the first .then callback. This happens again for our third .then callback. In regards to .then and the callbacks wired up, order matters.
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
          const result = thenCb(value);
          //chect if the result is an instance of Pact
          if (result instanceof Pact) {
            result.then((val) => resolve(val));
            result.catch((err) => reject(err));
          }
        });
      }
    };
    const reject = (value) => {
      // set the reject value
      this.rejectValue = value;
      // invokes all the callbackfunction passed to catch function passing value to each]
      if (this.errCallbacks.length > 0) {
        this.errCallbacks.forEach((errFn) => {
          errFn(value);
        });
      }
    };

    fn(resolve, reject);
  }
  // add methods to return on the instance
  then(thenCb) {
    // fn is a callbacl function. which will create a class member variable and store it (this.fn = fn), so it can be accessed by the resolve function

    if (typeof thenCb == "function") {
      const pact = new Pact((resolve, reject) => {
        if (this.resolvedValue) {
          const result = thenCb(this.resolvedValue);
          if (result instanceof Pact) {
            result.then((val) => resolve(val));
            result.catch((err) => reject(err));
          } else {
            resolve(result);
          }
        }
      });
    }
    this.thenCallbacks.push((value) => {
      const result = fn(value);
      if (result instanceof Pact) {
        result.then((val) => resolve(val));
        result.catch((err) => reject(err));
      } else {
        resolve(result);
      }
    });
    return pact; // return instance of Pact
  }

  catch(errCb) {
    if (typeof errCb == "function") {
      if (this.rejectValue) {
        errCb(this.rejectValue);
      }
      this.errCallbacks.push(errCb);
    }

    return this; // return instance of Pact
  }
}

const pact = new Pact((resolve, reject) => {
  resolve(42);
});

pact
  .then((value) => {
    console.log(value); // output: 42
    return value * 2;
  })
  .then((value) => {
    console.log(value); // output: 84
    return value + 10;
  })
  .then((value) => {
    console.log(value); // output: 94
  });
