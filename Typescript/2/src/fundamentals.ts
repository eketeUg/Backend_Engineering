/**
 * Official TypeScript Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 *
 *
 * CORE Types in Typescript
 * string
 * number
 * boolean
 * object
 * array
 * tuple // fixed length array
 * enums // enumerated global constant identifier
 */

/**
 * other Types in Typescript
 * any
 * Union (accepting two types of types e.g number | string)
 * type aliases: Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
 * For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
To:

type User = { name: string; age: number };

 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
 */
// primitives types in typescript

let sales: number = 123_121_267;
let course: string = "Typesccript";
let is_published: boolean = true;

let level; // typscript infers this as an any type
level = 1;
level = "ugo";

/** arrays **/
let numbers: number[] = [1, 2, 3]; // number arrays
let names: string[] = ["emma", "ugo", "Ekete"]; // string arrays
let mixed: any[] = [1, "emma", 4]; // mixed arrays

/** Tuple */
let user: [number, string] = [1, "Emma"];

/** Enums */
enum Size {
  Small = 1,
  Medium, // typescript will automtically set the value to 2
  Large, // typescript will automtically set the value to 3
}

enum Roles {
  Admin,
  User,
  Guest,
}
let user1: Roles = Roles.Admin;
console.log(user1);

/** Functions */
function calculateTax(income: number): number {
  if (income < 50_00) {
    return income * 1.2;
  }
  return income * 1.3;
}

// passing default values to parameter, you can also overide the deafult value when calling the function

function calculateTax1(income = 50): number {
  if (income < 50_00) {
    return income * 1.2;
  }
  return income * 1.3;
}

/**Objects */
let employee: {
  readonly id: number; // readonly modify allows a propery to be readonly
  name: string;
  retire: (date: Date) => void; // void is the return type when you dont want to return any value
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

/** Type Aliases */
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employe1: Employee = {
  id: 2,
  name: "Emma",
  retire: (date: Date) => {
    console.log(date);
  },
};

/**Union types */

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

/**Intersection types */
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

/**Literal types */
type Quantity = 50;
let quantity: Quantity = 50;

/**Nullable types */
function great(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

great(null);

/** Optional chaining */
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// optional property access operator (?.method)
console.log(customer?.birthday?.getFullYear());

//optional element access operator
// customers?.[0]

//optional call
let log: any = null;
log?.("a");
