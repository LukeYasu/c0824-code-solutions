/* exported firstChars */
function firstChars(length: number, string: string): string {
  let charsOfLength = '';
  for (let i = 0; i < length; i++) {
    if (string[i] === undefined) {
      break;
    }
    charsOfLength += string[i];
  }

  return charsOfLength;
}
