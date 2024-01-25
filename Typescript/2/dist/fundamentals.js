"use strict";
// primitives types in typescript
let sales = 123121267;
let course = "Typesccript";
let is_published = true;
let level; // typscript infers this as an any type
level = 1;
level = "emma";
/** arrays **/
let numbers = [1, 2, 3]; // number arrays
let names = ["emma", "ugo", "Ekete"]; // string arrays
let mixed = [1, "emma", 4]; // ixed arrays
/** Tuple */
let user = [1, "Emma"];
/** Enums */
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Guest"] = 2] = "Guest";
})(Roles || (Roles = {}));
let user1 = Roles.Admin;
console.log(user1);
/** Functions */
function calculateTax(income) {
    if (income < 5000) {
        return income * 1.2;
    }
    return income * 1.3;
}
// passing default values to parameter, you can also overide the deafult value when calling the function
function calculateTax1(income = 50) {
    if (income < 5000) {
        return income * 1.2;
    }
    return income * 1.3;
}
/**Objects */
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
let employe1 = {
    id: 2,
    name: "Emma",
    retire: (date) => {
        console.log(date);
    },
};
/**Union types */
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=fundamentals.js.map