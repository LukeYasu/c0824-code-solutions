'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  }
  return false;
}
