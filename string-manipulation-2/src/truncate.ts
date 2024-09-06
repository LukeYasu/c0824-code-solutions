/* exported truncate */
function truncate(length: number, word: string): string {
  let newString = '';
  for (let i = 0; i < length; i++) {
    if (word[i] === undefined) {
      break;
    }
    newString += word[i];
  }
  newString += '...';
  return newString;
}
