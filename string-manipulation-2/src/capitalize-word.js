'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  let stringCaps = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      stringCaps += word[i].toUpperCase();
    } else {
      stringCaps += word[i].toLowerCase();
    }
  }
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return stringCaps;
}
