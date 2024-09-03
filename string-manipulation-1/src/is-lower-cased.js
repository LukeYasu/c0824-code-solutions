'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  if (word.toLocaleLowerCase() === word) {
    return true;
  }
  return false;
}
