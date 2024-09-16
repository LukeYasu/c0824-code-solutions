const books = [
  { isbn: 1234567890, title: 'Coding for Dummies', author: 'John Wick' },
  { isbn: 1234567890, title: 'How to Code', author: 'Jane Doe' },
  { isbn: 1234567890, title: 'How to Read', author: 'Tom Hanks' },
];
console.log('books: ', books);
console.log('typeof books: ', typeof books);

console.log('JSON.stringify(books): ', JSON.stringify(books));
console.log('typeof JSON.stringify(books): ', typeof JSON.stringify(books));

const students = '{"numberId": 468, "name": "Jerry Jerry"}';
console.log('students: ', students);
console.log('typeof students: ', typeof students);

console.log('JSON.parse(students): ', JSON.parse(students));
console.log('typeof JSON.parse(students): ', typeof JSON.parse(students));
