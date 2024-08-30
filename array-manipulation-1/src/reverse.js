'use strict';
/* exported reverse */
function reverse(array) {
  const reverseArr = [];
  for (let i = array.length; i > 0; i--) {
    reverseArr.push(array[i - 1]);
  }
  return reverseArr;
}
