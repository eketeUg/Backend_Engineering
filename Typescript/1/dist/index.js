"use strict";
// Basic Types
let id = 5;
let company = "Ug Robotech";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4];
let arr = [1, true, "hello"];
// tuple
let person = [1, "Emman", true];
// tuple Array
let employee = [
    [1, "Emma"],
    [2, "Dera"],
    [3, "Amara"],
];
// union
let id2;
id2 = "emma"; // or id2 = 100
// Enum (user defined datatype)
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
//objects
const user = { id: 1, name: "Emma" };
const user2 = {
    id: 1,
    name: "Emaa",
};
// Type Assertion
let cid = 1;
let customerId = cid;
// OR
let customerid2 = cid;
// Functions
function addNum(x, y) {
    return x + y;
    function log(message) {
        console.log(message);
    }
}
const user1 = {
    id: 1,
    name: "Ugo",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Ugo = new Person(1, "Emmanuel Ekete");
// acces modifies for class
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Ugo2 = new Person(1, "Emmanuel Ekete");
class PersonWithInterface {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// how to extend a class
class Employe extends PersonWithInterface {
    constructor(id, name, position) {
        super(id, name); // from the class it extends from
        this.position = position;
    }
}
const emp = new Employe(3, "Ekete", "Engineer");
// Generics (used to build reusable components)
// you replay the type with a placeholder that you will define later
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["emma", "ugo", "ekete"]);
