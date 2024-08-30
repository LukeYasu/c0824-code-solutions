/* exported reverseWord */
function reverseWord(word: string): string {
  let revWord = '';
  for (let i = word.length; i > 0; i--) {
    revWord += word[i - 1];
  }
  return revWord;
}
