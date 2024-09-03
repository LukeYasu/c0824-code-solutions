'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArr = [];
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(array[i]);
    if (tempArr.length >= size || i + 1 >= array.length) {
      newArr.push(tempArr);
      tempArr = [];
    }
  }
  return newArr;
}
