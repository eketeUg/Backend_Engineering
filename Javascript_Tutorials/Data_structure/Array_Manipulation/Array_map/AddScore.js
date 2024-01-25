/**
 * Mapping Over Objects
Map isn't just for arrays of numbers. We can use map with other types as well, such as objects!

Let's say we had some users:

const users = [
    { name: 'Corey', loggedIn: true },
    { name: 'Anna', loggedIn: false }
];
And we wanted to created a new array of users with everyone logged out:

const loggedOutUsers = users.map(function(user) {
    return {
        name: user.name,
        loggedIn: false
    }
});
 This will result in a new array with two new user objects with the same names, both of which have the value false for loggedIn.

 Your Goal: Add Score
Given an array of players, add 10 to their score. Return a new array with these additional points.

Each player will be an object with the following two properties:

id - a number uniquely identifying the player
score - a number representing the player's points
Example:

const a = addScore([
    { id: 0, score: 5 },
    { id: 1, score: 20 }
]); 

console.log(a); // [{id: 0, score: 15},{id: 0, score: 30}]

 */

const actual = addScore([
  { id: 1, score: 5 },
  { id: 3, score: 10 },
  { id: 2, score: 15 },
]);

function addScore(players) {
  return players.map((x) => {
    return { id: x.id, score: x.score + 10 };
  });
}

console.log(actual);
