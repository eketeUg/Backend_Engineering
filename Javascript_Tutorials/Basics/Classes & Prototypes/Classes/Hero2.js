/**
 * Methods
In addition to constructors we can define our own methods on classes:

class Team {
    constructor() {
        this.wins = 0;
        this.losses = 0;
    }
    changeRecord(isWin) {
        if(isWin) {
            this.wins++;
        }
        else {
            this.losses++;
        }
    }
}
Here changeRecord has a boolean parameter isWin that determines whether to add a win or a loss to the team's record.

 Your Goal: Take Damage method
Add a method takeDamage to the hero class. This method should take one number argument representing the damage. This number should be directly subtracted from the hero's health.

For example:

const hero = new Hero();

console.log(hero.health); // 50

hero.takeDamage(5);

console.log(hero.health); // 45
 */

class Hero {
  constructor() {
    this.health = 50;
  }
  takeDamage(num) {
    this.health -= num;
  }
}

const hero = new Hero();

console.log(hero.health); // 50

hero.takeDamage(5);

console.log(hero.health); // 45
