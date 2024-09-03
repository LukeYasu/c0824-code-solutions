'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArr = [];
  let startIndex = array.length - count;
  if (startIndex < 0) {
    startIndex = 0;
  }
  for (let i = startIndex; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
