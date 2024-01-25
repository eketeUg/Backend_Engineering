// Basic Types

let id: number = 5;
let company: string = "Ug Robotech";
let isPublished: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "hello"];

// tuple
let person: [number, string, boolean] = [1, "Emman", true];
// tuple Array
let employee: [number, string][] = [
  [1, "Emma"],
  [2, "Dera"],
  [3, "Amara"],
];

// union
let id2: string | number;
id2 = "emma"; // or id2 = 100

// Enum (user defined datatype)
enum Direction {
  up,
  down,
  left,
  right,
}

enum Direction2 {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

//objects
const user: {
  id: number;
  name: string;
} = { id: 1, name: "Emma" };
// OR
type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 1,
  name: "Emaa",
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
// OR
let customerid2 = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;

  function log(message: string | number): void {
    console.log(message);
  }
}

// Interfaces
interface UserInterface {
  readonly id: number; // this make id readonly and cant not be changed
  //id: number;
  name: string;
}

const user1: UserInterface = {
  id: 1,
  name: "Ugo",
};

// interface for a function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x - y;

// classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const Ugo = new Person(1, "Emmanuel Ekete");

// acces modifies for class
class Person1 {
  private id: number; // can only be accessed within the class
  protected name: string; // can be accessed within the class or any object that extends the class

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const Ugo2 = new Person(1, "Emmanuel Ekete");

// adding interfaces to class
interface PeronInterface {
  id: number;
  name: string;
  register(): string;
}

class PersonWithInterface implements PeronInterface {
  id: number; // can only be accessed within the class
  name: string; // can be accessed within the class or any object that extends the class

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// how to extend a class
class Employe extends PersonWithInterface {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); // from the class it extends from
    this.position = position;
  }
}
const emp = new Employe(3, "Ekete", "Engineer");

// Generics (used to build reusable components)
// you replay the type with a placeholder that you will define later
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["emma", "ugo", "ekete"]);
