/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let wordsCapitalized = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      wordsCapitalized += string[i].toUpperCase();
    } else if (string[i - 1] === ' ') {
      wordsCapitalized += string[i].toUpperCase();
    } else if (/[a-zA-Z]/.test(string[i]) !== true) {
      wordsCapitalized += string[i];
    } else {
      wordsCapitalized += string[i].toLowerCase();
    }
  }
  return wordsCapitalized;
}
