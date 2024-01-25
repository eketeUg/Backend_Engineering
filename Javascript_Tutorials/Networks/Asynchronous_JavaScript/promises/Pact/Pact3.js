/**
 *  Your Goal: Catch the Rejection
Let's give our Pact users the ability to handle a reject callback as well as a resolve.

Similar to our last example, except now we'll want to handle reject with catch:

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        reject(42);
    }, 500);
});

pact.catch((value) => {
    console.log(value); // 42
});
 */

class Pact {
  // a fn is a function passed into out
  constructor(fn) {
    const resolve = (value) => {
      // invokes the callbackfunction passed to then function passing value to it
      this.fn(value);
    };
    const reject = (value) => {
      // invokes the callbackfunction passed to catch function passing value to it
      this.errFn(value);
    };
    fn(resolve, reject);
  }
  // add methods to return on the instance
  then(fn) {
    // fn is a callbacl function. which will create a class member variable and store it (this.fn = fn), so it can be accessed by the resolve function
    this.fn = fn;
  }
  catch(errFn) {
    // errFn is a callback function. which will create a class member variable and store it (this.errFn = errFn), so it can be accessed by the reject function
    this.errFn = errFn;
  }
}
