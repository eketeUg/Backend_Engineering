function numberOfPizzas(orders) {
  let totalPizzas = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].type == ORDER_TYPES.PIZZA) {
      totalPizzas += orders[i]["pizzas"];
    }
  }
  return totalPizzas;
}

const ORDER_TYPES = {
  PIZZA: 0,
  WINGS: 4,
  SALAD: 5,
};

const orders = [
  { pizzas: 3, type: ORDER_TYPES.PIZZA, extraCheese: true },
  { pizzas: 5, type: ORDER_TYPES.PIZZA, extraCheese: false },
  { pizzas: 10, type: ORDER_TYPES.PIZZA, extraCheese: true },
];

console.log(orders.length);
console.log(numberOfPizzas(orders));
