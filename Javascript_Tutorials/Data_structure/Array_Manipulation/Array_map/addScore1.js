/**
 * Array Map Index
When using map, we also get access to the position of the element in our function.

[10, 20, 30].map(function(el, i) {
    console.log(i);
});
This will log 0, 1, and 2 which are the indexes for 10, 20 and 30 respectively.

One way that we can use the index is when we want to modify an element based on it's position.

 Your Goal: Add 10 to the First 3 Players
Let's modify our addScore function to only add 10 points to the first 3 players.

Be careful on this one! The index passed into our function will be zero-based, which means it starts at 0. Also, be sure to always return something inside the mapped function or the element will be undefined.

 */
const actual = addScore([
  { id: 1, score: 5 },
  { id: 3, score: 10 },
  { id: 2, score: 15 },
  { id: 4, score: 5 },
  { id: 5, score: 10 },
  { id: 7, score: 15 },
]);

function addScore(players) {
  return players.map((x, i) => {
    return { id: x.id, score: i < 3 ? x.score + 10 : x.score };
  });
}

console.log(actual);
