/**
 * Creating a Promise
In the last couple stages, we learned how to handle a returned promise. In this stage we create a promise!

Most modern JavaScript environments have a built-in Promise object that can be use to create a new Promise:

const promise = new Promise(function(resolve, reject) {
    resolve('resolve successful!');
});
 The function provided to the promise is called an executor function. This function is called immediately and typically will be set to resolve after something asynchronous has happened.

 You can find documentation for Promise on MDN.

promise.then(function(message) {
    console.log(message);
});
 See a more practical example of using a promise in Details.

 Executor Function
The function passed to Promise is called the executor function.

new Promise(function executor(resolve, reject) {
    // inside the executor function 
    // we can either resolve or reject
    if(success) {
        resolve();
    }
    else {
        reject();
    }
});
 You can see the executor function in the above example is named. This function is called immediately once the promise is created.

Inside this function we can resolve, which will call all functions wired as callbacks in the promise then method.

Alternatively, we can reject, which will call functions wired as callbacks in the promise catch method.

 Both resolve and reject can take arguments that will be passed directly to the then and catch callbacks respectively.

File System Example
Let's see an example where we wrap a callback function in a promise! 

const promise = new Promise(function(resolve, reject) {
    fs.readFile("abc.txt", function(err, contents) {
        if(err) {
            // something bad happened, reject with the err
            reject(err);
        }
        else {
            // success! resolve the promise with the contents
            resolve(contents);
        }
    });
});
 We are reading a file from the file system and wrapping the callback to create a promise.

If there is an error, we'll reject the promise, which is caught by a catch callback:

promise.catch(function(err) {
    console.error('something went very wrong!', err);
});
Otherwise, we'll resolve the promise with the contents of the file:

promise.then(function(fileContents) {
    console.log(fileContents);
});


 Your Goal: Return a Resolved Promise
Within the timer function, return a new resolved promise.

 There is no need to do anything inside the executor function other than invoke the resolve function.
 */

function timer() {
  // creating a new promise instance
  const promise = new Promise((resolve, reject) => {
    resolve();
  });
  return promise; //the promise
}
