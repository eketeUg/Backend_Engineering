/**
 * 
Guard Operator
We learned that || can be referred to as the Logical OR operator or the default operator.

Similarily, the && operator can be referred to as the Logical AND operator or the guard operator!

We can use the operator to guard against run-time exceptions (or errors) when dealing with falsey values. 

Let's see some examples:

const user = { name: 'bob' }
console.log(user && user.name); // bob

const user2 = undefined;
console.log(user2 && user2.name); // undefined
Notice how in the first example we successfully retrieve the user's name, while the second example returns undefined.

In the second example, if we tried to retrieve this property directly, we would hit a run-time exception:

const user2 = undefined;
console.log(user2.name);
Trying to log user2.name right here would result in an uncaught error: Uncaught TypeError: Cannot read property 'name' of undefined.

 Uncaught errors are bad! They'll stop our code execution. This could result in some really ugly errors for users.

 Your Goal: Guard it
The function friendName currently retrieves the name property from the friend.

The problem is, sometimes friend is undefined. When this is the case, let's return undefined without throwing an exception.
 */

function friendName(friend) {
  return friend && friend.name;
}

console.log(friendName());
