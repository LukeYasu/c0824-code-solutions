const heroes = [
  'Ultraman',
  'Sponge Bob',
  'Batman',
  'Thanos',
  'Michael Jackson',
  'Garfield',
  'Adam Sandler',
];
const library = [
  { title: 'How to Read', author: 'Jayson Tatum' },
  { title: 'Harry Potter', author: 'J.K. rowling' },
  { title: 'Bible', author: 'Jesus' },
];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
const randomHero = heroes[randomIndex];
const lastBook = library.pop();
const firstBook = library.shift();
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
const employee = {
  name: 'Chris Bumstead',
  age: '101',
  position: 'CEO',
};
const fullName = 'Lucas Yasumura';
const firstAndLastName = fullName.split(' ');
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
const employeeKeys = Object.keys(employee);
const employeeValues = Object.values(employee);
const employeePairs = Object.entries(employee);
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The greatest hero is: ', randomHero);
console.log('last book', lastBook);
console.log('first book', firstBook);
console.log('library', library);
console.log('first name', firstAndLastName);
console.log('say my name!', sayMyName);
console.log('employee keys', employeeKeys);
console.log('employee values', employeeValues);
console.log('employee pairs', employeePairs);
