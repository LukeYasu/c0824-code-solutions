function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
function greet(name: string): string {
  return `Hey ${name}!`;
}
const getArea = (width: number, height: number): number => width * height;

const getFirstName = (person: {
  firstName: string;
  lastName: string;
}): string => {
  return person.firstName;
};
const getLastElement = (array: unknown[]): unknown => {
  return array[array.length - 1];
};

function callOtherFunction(otherFunction: Function, params: unknown): any {
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
//
