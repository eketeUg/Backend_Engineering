/**
 * Call-Site
Without explicitly setting this with call or apply, there are a few rules that dictate what this will be for a function.

These rules depend on how the function is called. Let's take a look at a function defined as an object's property:

const obj = {
    value: 2,
    getValue: function() {
        return this.value;
    }
}
 Depending on how we call getValue, the result could be very different:

console.log( obj.getValue() ); // 2
We called the function by accessing it on the object's property. The this keyword is implictly bound to the object it is being called on.

Let's see another example using the same obj:

const fn = obj.getValue;

console.log( fn() ); // undefined
Whoops! 

In this second example, this is not the obj itself. It is actually the global this. Without being called directly on the object, this is not bound at all!

 The place where the function is called is generally referred to as the call-site of the function. If the function is not otherwise bound, it will determine the value of this.

 Your Goal: Add Get Name
Add a function getName to the obj that will retrieve the name when it is called on an object.

For example:

const name = obj.getName();

console.log(name); // Bob
 */

const obj = {
  name: "Bob",
  getName: function () {
    return obj.name;
  },
};

const name = obj.getName();

console.log(name); // Bob
