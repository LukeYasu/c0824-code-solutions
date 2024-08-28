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
const getLastElement = (array: any[]): any[] => {
  return array[array.length - 1];
};

function callOtherFunction(otherFunction: Function, params: unknown): any {
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
