const colors: string[] = ['red', 'white', 'blue'];
const students: string[] = ['lebron', 'martha', 'peter', 'john'];
const numberOfStudents: number = students.length;
const lastIndex: number = students.length - 1;
const lastStudent: string = students[lastIndex];
console.log('color 1:', colors[0]);
console.log('color 2:', colors[1]);
console.log('color 3:', colors[2]);
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

colors[2] = 'green';

console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);
console.log(`there are ${numberOfStudents} students in this class.`);
console.log(`the last student in the class is ${lastStudent}`);
console.log('the value of students:', students);
console.log('typeof students:', typeof students);
