'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let charsSwapped = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      charsSwapped += string[secondIndex];
    } else if (i === secondIndex) {
      charsSwapped += string[firstIndex];
    } else {
      charsSwapped += string[i];
    }
  }
  return charsSwapped;
}
