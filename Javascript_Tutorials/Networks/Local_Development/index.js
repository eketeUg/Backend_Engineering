// this is my name, feel free to use yours :)
const myName = "Emma";

const message = `Hello, ${myName}!`;

console.log(message);

// Instead of writing myName inside of the file, we can pass it from the command line using process.argv!
const message2 = `hello, ${process.argv}!`;
console.log(message2);

// process.argv is an array of all argument values. this include the path to node ans well as the the script we want to access
const message3 = `hello, ${process.argv[2]}!`;
console.log(message3);
