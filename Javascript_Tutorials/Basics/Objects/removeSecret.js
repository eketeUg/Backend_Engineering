/**
 * Object References
It's an important distinction in JavaScript that objects are passed by reference!

Let's create a function that modifies an object:

function modify(object) {
    object.message = "Hello World";
}
 Let's create an object and pass it to this function:

const store = {
    name: "Seven Eleven" 
}

modify(store);

console.log(store.message); // Hello World
Look at that! The store's message has been updated. 

Inside the modify function the object argument is referencing the same memory as the store. This is what it means to pass by reference.

When the modify function updates the object, it is updated everywhere else it is referenced.

 It is always a good idea to be careful about modifying objects directly! Modifying a reference like this is referred to as a side-effect in functional programming. The function is modifying something outside of its scope, potentially leading to unexpected consequences! 


 * 
 * 
 * Edit Object Values
Sometimes it's necessary to edit the values in an object!

We can edit the value directly, similar to the syntax for retrieving values:

const person = {
    name: "James",
    age: 22
}

person.name = "Sally";
person["age"] = 30;

console.log( person.name ); // Sally
console.log( person.age ); // 30
 Just like retrieval we can use the . or [] notation.

We can also remove keys completely:

const person = { 
    name: "Bob"
}

delete person.name;

console.log( person.name ); // undefined
He lost his own name. How sad 


Goal: Remove the Secret Key
The object passed into removeSecret has a secret key that must be removed!

Set the value of this key to undefined to pass the test cases. Modify the object directly, there is no need to return it.

 */

function removeSecret(object) {
  return Object.keys.length;
}
