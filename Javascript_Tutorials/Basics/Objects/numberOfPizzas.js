/**
 *  To acces the content of an object,We can use the . property accessor operator or we can use brackets [] just like with arrays!
 * You can even supply a variable in the brackets []!
 * 
 *  Goal: Find the Number of Pizzas
Find the number of pizzas in an order object.

The object will look like this:

const order = {
    pizzas: 3,
    extraCheese: true,
    deliveryInstructions: "Round the back, please!",
};
 The function should take this order and retrieve the number of pizzas:

const totalPizzas = numberOfPizzas(order);
console.log( totalPizzas ); // 3
 * 
 */

function numberOfPizzas(order) {
  //   return order.pizzas;
  return order["pizzas"];
}

const order = {
  pizzas: 3,
  extraCheese: true,
  deliveryInstructions: "Round the back, please!",
};

const totalPizzas = numberOfPizzas(order);
console.log(totalPizzas); // 3
