/**
 * Recursion
A recursive function is a function that calls itself. For instance:

function countdown(n) {
    countdown(n - 1);
}
 There's some trouble with this recursive function! Can you spot it?

We can invoke it: countdown(3). This would call countdown(2), countdown(1), countdown(0), countdown(-1)… with no end in sight! 

 The results in a call stack overflow!

It's important to add a base case in a recursive function. The base case is where you stop recursing.

function countdown(n) {
    if(n === 0) {
        console.log('countdown complete!');
        return;
    }

    countdown(n - 1);
}
 Great! Our countdown stops when it reaches 0.


Call Stack
The call stack is a feature of the JavaScript language that keeps track of where the program has been so it knows where to return to!

Let's take for an example:

// save a user to our database
function saveUser(user) {
    db.save(user);
}

// update our users name in the database
function updateUserName(userId, name) {
    saveUser({ id: userId, name: name });

    console.log("User Updated");
}

updateUserName(123, "Charles");
 The function updateUserName calls saveUser. While we're inside of the function body of saveUser, the call stack will remember where to return to (first line of updateUserName). Once the function is complete it will return to log the user has been updated to the console.

The call stack keeps track of nested calls:

updateUserName(123, "Charles");
    saveUser({ id: 123, name: "Charles" });
For a recursive function our call stack will continue to add a new entry every time we call the function:

function countdown(n) {
    if(n === 0) return;

    countdown(n - 1);
}
If we called countdown(5), we would have the following entries in our call stack:

countdown(5);
    countdown(4);
        countdown(3);
            countdown(2);
                countdown(1);
Of course, if we remove the base case we could eventually run out of memory! Let's see that in action:

function countdown(n) {
    // if(n === 0) return;

    countdown(n - 1);
}
Running countdown(5) will now result in an Uncaught RangeError: Maximum call stack size exceeded!

countdown(5);
    countdown(4);
        countdown(3);
            countdown(2);
                countdown(1);
                    countdown(0);
                        countdown(-1);
                            countdown(/* n-1… */ //);
/*Save yourself the trouble! Always remember the base case. 




 Your Goal: Base Case
Let's add a base case to the function factorial. A factorial is an integer times every positive integer below it.

factorial (4); // 4 * 3 * 2 * 1 = 24
Let's start with the base case for a factorial function: 1.

Your task for this stage is simple: If n is equal to 1 return 1.

console.log( factorial(1) ); // 1

 */

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(2));
