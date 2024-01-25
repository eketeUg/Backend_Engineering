/**
 * 
NOT Operator
The final logical operator we will discuss is the ! operator. Commonly referred to as the NOT or negation operator.

This operator will flip true and false:

console.log(!true); // false
console.log(!false); // true
It will also flip truthy and falsey values:

console.log(!2); // false
console.log(!undefined); // true
 If you apply the negation operator to a truthy or falsey value twice, you'll wind up with the corresponding boolean value. Since 2 is a truthy value, !!2 will evaluate to true.

 Your Goal: Car Crossing the Bridge
There's a river that runs right between two towns. In order for cars to cross the river, we built a bridge!

XOR

Trouble is, there's only room for 1 car to cross the bridge at a time. This means that if both cars were to be crossing at the same time, neither would be able to cross.

Complete the carCrossing function to return true if and only if one car is crossing.

 The logical term for this situation is an "Exclusive OR". In other words, it is only true if exactly 1 of the terms are true.
 */

function carCrossing(aCrossing, bCrossing) {
  if (aCrossing && !bCrossing) {
    return true;
  } else if (!aCrossing && bCrossing) {
    return true;
  } else if (aCrossing && bCrossing) {
    return false;
  } else {
    return false;
  }
}
