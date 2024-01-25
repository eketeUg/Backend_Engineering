/**
 * Using Promises
JavaScript is single-threaded. Because of this you will find yourself writing quite a bit of asynchronous code. This refers to writing code that will execute at some future point in time after something has happened.

Providing a callback function as an argument is a classic way of handling asynchronous code. We went over this approach in Callback Functions.

Promises provide an alternative:

const promise = getServerData();

// similar to using a callback function argument,
// except we wire up the callback using .then 
promise.then(function(data) {
    // this function is called asynchronously
    // once the server has responded with data
    console.log('got data', data);
});
 Here getServerData returns a promise.

We can call .then and provide a function that is invoked once the server data is resolved.


Single Threaded
JavaScript is single threaded. This means that only one process is run at any given time. If you had a loop that continued to run for 10 seconds, the JavaScript engine could do nothing other than run the loop until 10 seconds have expired.

This is why it's important to write our JavaScript code to be non-blocking. This means that if the code needs to wait on something else, it tells JavaScript where to return to once that is complete. This might mean waiting on user input, an animation, a timeout or a server response. During this time the engine is freed up to do whatever else it needs to do.

This is why asynchronous programming is so important in JavaScript. Especially in the browser, it's very common to write code that waits for something to happen before continuing:

When a user clicks this button, do this.
When an animation is finished, do this.
When a server responds with this information, do this.
All of these would be asynchronous actions. The "do this" part would be picked up by the engine once the first part has finished and the thread is freed up to execute the code.

Callback Function Arguments
Providing a callback function as an argument is a great way to handle asynchronous code.

The readFile function in the Node.js fs library allows us to pass a callback function:

fs.readFile("abc.txt", function(err, content) {
    if(err) {
        console.error(err);
    }
    else {
        console.log(content)
    }
});
This works pretty well! However, it can quickly get ugly when we have many callbacks.

io.readFile("other.txt", function(contents) {
    sendToServer(contents, function(response) {
        writeLog(response, function() {
            console.log('written!');
        });
    });
});
 The code continues to nest in further towards the right! Some developers lovingly refer to this as callback hell. 

Promises are quite a bit easier to pass around and return to higher-level functions:

const filePromise = readFile("other.txt");
 In this case, we can use filePromise in other functions to represent the file contents when they are ready! It makes it easier to organize code in a more readable way:

filePromise.then((contents) => {
    // do something with the file contents
});



 Your Goal: Make the Food!
We need to make some food! 

When the customer asks for food, the request function will be invoked. This function should call the function makeFood which takes food as its only argument. The function makeFood will return a promise.

 The makeFood function is imported at the top of the file from Kitchen.

Add a callback function to the .then of the makeFood promise. Once it is called the food is ready! At that point set the order isReady is true.
 */

const { makeFood } = require("./Kitchen");

class Order {
  constructor() {
    this.isReady = false;
  }
  request(food) {
    const Done = makeFood(food);

    Done.then((data) => {
      this.isReady = true;
    });
    return Done;
  }
}
