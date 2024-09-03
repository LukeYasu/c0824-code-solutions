/* exported isVowel */
function isVowel(char: string): boolean {
  switch (char.toLocaleLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
