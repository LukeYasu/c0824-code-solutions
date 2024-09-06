'use strict';
/* exported truncate */
function truncate(length, word) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    if (word[i] === undefined) {
      break;
    }
    newString += word[i];
  }
  newString += '...';
  return newString;
}
