console.log("Your code goes here...");

function add(n1: number, n2: number) {
  // using javascript to check types
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Incorrect Input type");
  //   }
  return n1 + n2;
}

const number1 = 6;
const number2 = 2.5;

const result = add(number1, number2);
console.log(result);
