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
console.log('your minutes converted to seconds: ', convertMinutesToSeconds(3));
console.log('your greeting: ', greet('George'));
console.log('your area: ', getArea(3, 4));
console.log(
  'your first name: ',
  getFirstName({ firstName: 'Manny', lastName: 'Paqiao' })
);
console.log('the last element: ', getLastElement([1, 2, 3, 4, 5]));
console.log(
  'the result of the other function you called: ',
  callOtherFunction(convertMinutesToSeconds, 8)
);
