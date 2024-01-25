/**
 * Asynchronous Executor
The purpose of the executor function is to wrap some asynchronous action and provide callbacks for the result.

const p1 = new Promise(function executor(resolve, reject) {
    runAnimation(function() {
        resolve();
    });
});
The runAnimation only accepts one callback function after the animation is complete.

By wrapping this in a promise, we create a new object p1 which can be used to wire up many callbacks with then:

p1.then(function() {
    showDialog();
});
p1.then(function() {
    removeAnimation();
});
 These two then callbacks can be wired up in different places in the program, allowing us to separate concerns more easily.

 Your Goal: Asynchronous Timer
Let's modify the timer executor function to resolve after one second.

You can run code after one second by using a timeout:

setTimeout(function() {
    // do something in here
}, 1000);
 */

function timer() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // do something in here
      resolve();
    }, 1000);
  });
}
