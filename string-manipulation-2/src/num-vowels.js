'use strict';
/* exported numVowels */
function numVowels(string) {
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        vowelsCount += 1;
    }
  }
  return vowelsCount;
}
