'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let revWord = '';
  for (let i = word.length; i > 0; i--) {
    revWord += word[i - 1];
  }
  return revWord;
}
