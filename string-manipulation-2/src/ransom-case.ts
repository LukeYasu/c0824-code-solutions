/* exported ransomCase */
function ransomCase(string: string): string {
  let stringRansom = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      stringRansom += string[i].toLowerCase();
    } else {
      stringRansom += string[i].toUpperCase();
    }
  }
  return stringRansom;
}
