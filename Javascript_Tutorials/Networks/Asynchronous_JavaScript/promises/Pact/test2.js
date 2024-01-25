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
          const result = fn(value);
          if (result instanceof Pact) {
            result.then((val) => resolve(val));
            result.catch((err) => reject(err));
          }
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
      const pact = new Pact((resolve, reject) => {
        if (this.resolved) {
          const result = fn(this.resolveValue);
          if (result instanceof Pact) {
            result.then((val) => resolve(val));
            result.catch((err) => reject(err));
          } else {
            resolve(result);
          }
        } else {
          this.thenCallbacks.push((value) => {
            const result = fn(value);
            if (result instanceof Pact) {
              result.then((val) => resolve(val));
              result.catch((err) => reject(err));
            } else {
              resolve(result);
            }
          });
        }
      });
      return pact;
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
