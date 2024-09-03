'use strict';
/* exported initial */
function initial(array) {
  const initialArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    initialArr.push(array[i]);
  }
  return initialArr;
}
