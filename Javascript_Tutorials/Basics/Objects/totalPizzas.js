/**
 * Goal: Accumulate the Pizza Orders
Given an array of pizza orders, return the total number of pizzas ordered.

The orders are an array of objects, each with pizzas key inside:

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
 For this example above, we'd expect 18 total pizzas:

const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 18

 */

function numberOfPizzas(orders) {
  let totalPizzas = 0;
  for (let i = 0; i < orders.length; i++) {
    totalPizzas += orders[i]["pizzas"];
    //totalPizzas += orders[i].pizzas;
  }
  return totalPizzas;
}

const orders = [{ pizzas: 3 }, { pizzas: 5 }, { pizzas: 10 }];
const totalPizzas = numberOfPizzas(orders);
console.log(totalPizzas); // 18
