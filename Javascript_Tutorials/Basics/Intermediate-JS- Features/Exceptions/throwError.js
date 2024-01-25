/** https://university.alchemy.com/course/js/intro/5d9643a909d5ed335cbf09a8/ -- exceptions explained
 * 
 * Throw an Error
There are cases in JavaScript where the language itself will throw an error. This is referred to as a run-time error.

We will dive into those scenarios on a future stage. First, let's create our own errors!

const error1 = new Error("Something bad happened!");
const error2 = Error("Something bad happened!");
 The two statements are functionally equivalent. They both return an Error object with the error message being "Something bad happened!". The message is a good place to write some details about why the error occurred that will help someone debug the issue.

 Typically you will see Error created with the new operator. In JavaScript, new is commonly used when creating a new instance of an object. We'll talk about this more in JavaScript Prototypes.

Throwing Errors
The idea of throwing and error is mentioned above. When we throw an error, we stop running the code at that point:

const a = 3;

if(a === 3) {
    throw new Error("we dont want a to be 3");
}

// <-- we never reach this line
 We should throw errors in places where we would want execution of the code to stop. We'll continue the code execution from wherever the error is caught. We'll discuss this in stage 2.

 Your Goal: Throw an Error
Time to throw your first error! Simply throw a new error inside the throwError function.

If you throw an error properly the tests will catch the error and you will pass the stage!
 */

function throwError() {
  throw new Error("this is an error");
}
console.log(throwError());
