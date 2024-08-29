/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number: number): boolean {
  if (number % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}
function startsWithJ(string: string): boolean {
  const firstLetter = string[0];
  if (firstLetter === 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person: { name: string; age: number }): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person: { name: string; age: number }): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person: {
  name: string;
  age: number;
}): boolean {
  if (person.age < 999) {
    return false;
  } else {
    return false;
  }
}
function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH > 7) {
    return 'base';
  } else {
    return 'invalid pH number';
  }
}
function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return 'Were the warner brothers!'; //  or || operator did not work
    case 'wakko':
      return 'Were the warner brothers!';
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Insidious';
    case 'musical':
      return 'High School Musical';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log('is under five: ', isUnderFive(4));
console.log('is even', isEven(2));
console.log('starts with J: ', startsWithJ('James'));
console.log(
  'is old enough to drink: ',
  isOldEnoughToDrink({ name: 'lucas', age: 21 })
);
console.log(
  'is old enough to drive: ',
  isOldEnoughToDrive({ name: 'lucas', age: 21 })
);
console.log(
  'is old enough to drink and drive: ',
  isOldEnoughToDrinkAndDrive({ name: 'lucas', age: 21 })
);
console.log('categorize acidity: ', categorizeAcidity(7));
console.log('introduce warner bro: ', introduceWarnerBro('yakko'));
console.log('recommend movie: ', recommendMovie('horror'));
