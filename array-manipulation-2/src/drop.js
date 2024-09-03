'use strict';
/* exported drop */
function drop(array, count) {
  const newArr = [];
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
