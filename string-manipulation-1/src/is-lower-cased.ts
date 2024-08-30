/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  if (word.toLocaleLowerCase() === word) {
    return true;
  }
  return false;
}
