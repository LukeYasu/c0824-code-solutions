'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const finalArray = [];
  for (let i = 0; i < words.length; i++) {
    finalArray.push(words[i] + suffix);
  }
  return finalArray;
}
