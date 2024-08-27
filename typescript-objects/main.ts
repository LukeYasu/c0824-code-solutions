interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}
interface Pet {
  name?: string;
  kind?: string;
}
const student: StudentProps = {
  firstName: 'Lucas',
  lastName: 'Yasumura',
  age: 21,
};
const vehicle: Vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2011,
};
const pet: Pet = {
  kind: 'cat',
  name: 'momo',
};
const fullName: string = `${student.firstName} ${student.lastName}`;
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
