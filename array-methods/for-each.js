'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('for-each() In Order: ');
values.forEach((element) => console.log(element));
console.log('for-each() In Reverse: ');
let arrLen = values.length;
values.forEach((item, index, arr) => {
  console.log(arr[arrLen - 1]);
  arrLen -= 1;
});
