import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Bob');

takeAChance('Lucas')
  .then((winMessage) => console.log(winMessage))
  .catch((loseMessage) => console.log(loseMessage));
