'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let charsOfLast = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (length > string.length) {
      return string;
    }
    charsOfLast += string[i];
  }
  return charsOfLast;
}
