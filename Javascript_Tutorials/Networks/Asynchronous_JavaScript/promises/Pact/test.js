class Pact {
  constructor(fn) {
    this.thenCallbacks = [];
    this.errCallbacks = [];
    this.resolved = false;
    this.resolveValue = null;
    const resolve = (value) => {
      this.resolved = true;
      this.resolveValue = value;
      if (this.thenCallbacks.length > 0) {
        this.thenCallbacks.forEach((fn) => {
          fn(this.resolveValue);
        });
      }
    };
    const reject = (value) => {
      this.errCallbacks.forEach((errFn) => {
        errFn(value);
      });
    };
    fn(resolve, reject);
  }
  then(fn) {
    if (typeof fn == "function") {
      if (this.resolved) {
        fn(this.resolveValue);
      } else {
        this.thenCallbacks.push(fn);
      }
      // return the instance of the Pact class
      return this;
    }
  }
  catch(errCb) {
    if (typeof errCb == "function") {
      this.errCallbacks.push(errCb);
    }
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
