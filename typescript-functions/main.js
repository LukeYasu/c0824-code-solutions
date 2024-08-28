'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
function greet(name) {
  return `Hey ${name}!`;
}
const getArea = (width, height) => width * height;
const getFirstName = (person) => {
  return person.firstName;
};
const getLastElement = (array) => {
  return array[array.length - 1];
};
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  convertMinutesToSeconds(3),
  greet('George'),
  getArea(3, 4),
  getFirstName({ firstName: 'Manny', lastName: 'Paqiao' }),
  getLastElement([1, 2, 3, 4, 5]),
  callOtherFunction(convertMinutesToSeconds, 8)
);
