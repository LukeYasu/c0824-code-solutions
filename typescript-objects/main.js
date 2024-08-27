'use strict';
const student = {
  firstName: 'Lucas',
  lastName: 'Yasumura',
  age: 21,
};
const vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2011,
};
const pet = {
  kind: 'cat',
  name: 'momo',
};
const fullName = `${student.firstName} ${student.lastName}`;
student.livesInIrvine = false;
student.previousOccupation = 'boba shop kitchen shift lead';
delete pet.kind;
delete pet.name;
console.log('full name:', fullName);
console.log('student:', student);
console.log('typeof student:', typeof student);
console.log('value of vehicle["color"]:', (vehicle['color'] = 'grey'));
console.log(
  'value of vehicle["isConvertible"]:',
  (vehicle['isConvertible'] = false)
);
console.log('vehicle:', vehicle);
console.log('pet:', pet);
console.log('typeof pet:', typeof pet);
