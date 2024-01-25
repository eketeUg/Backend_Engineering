/**
 * 
This Keyword
In JavaScript, you can always access the keyword this. It is a way of defining the context of a function.

In global scope (not inside of a function), this refers to the module itself within Node.js or the window within the browser.

When it comes to functions, this can be set in a few different ways. Let's focus first on how we can explicitly set it.

function sum() {
    return this.a + this.b;
}
If we were to run sum() directly, this would be set from the global scope and likely neither a nor b would be defined.

We could instead, call the function with a specific context:

const result = sum.call({ a: 2, b: 4 });

console.log(result); // 6 
The method call is available on all JavaScript functions. The first argument we pass to call becomes this inside the function.

 Another method that manipulates a function's context is apply. To see the difference between these two methods, check out details.

 Call Versus Apply
Call and Apply are very similar methods. They both exist on every JavaScript function and they both allow you to set the context this.

The difference comes when you want to pass arguments to the function:

function totalThings(a, b, c) {
    return `There are ${a + b + c} ${this}`;
}
Let's say we wanted this string to be: "There are 15 Students". There are two ways we could go about it. We could use call:

totalThings.call("Students", 10, 3, 2);
Or we can use apply:

totalThings.apply("Students", [10, 3, 2]);
In both cases, this is set to "Students" and the arguments a, b and c are the values 10, 3 and 2 respectively.

The difference is that call takes a list of arguments, while apply takes a single array of arguments.




 Your Goal: Get Name
Create a function which retrieves the property name on this.

You can expect the property to exist. Example:

const name = thisName.call({ name: 'Ted' }); 

console.log(name); // Ted
 */

function thisName() {
  return this.name;
}

const name = thisName.apply({ name: "Ted" });

console.log(name);
