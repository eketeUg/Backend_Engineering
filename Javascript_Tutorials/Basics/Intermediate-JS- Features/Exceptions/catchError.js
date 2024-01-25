/**
 * 
Catching Errors
 Imagine you want to read from a file on your computer:

const text = readFile("book");
What would you expect readFile to do if it could not read "book"?

Perhaps it could return an empty string... but how would you know if the book is actually empty? 

An empty string might indicate an empty book or an error reading the book. This is no good, it's ambiguous! 

Instead, when readFile fails it, could throw an error. We could handle this error by try-catching it.

try {
    readFile("book"); 
}
catch(ex) {
    console.log(ex); // EISDIR: illegal operation
}
The code above will try a statement. If any errors are thrown, the logic will flow into the catch block. The line console.log(ex); will only execute if an error (ex) is thrown by readFile.

 The EISDIR is thrown in Node.JS when the target is a directory when we were expecting it to be a file. So this is a very realistic example! Here are a list of common system errors.

 
 ** Goal: Catch an Error!
The argument fn is a function that will throw an error when invoked. Catch the error that is thrown when invoking fn.

The tests will pass as long as the function is called and the exception is caught.
 */

function catchError(fn) {
  try {
    fn();
  } catch (error) {
    console.log(error);
  }
}
