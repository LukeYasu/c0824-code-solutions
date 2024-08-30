/* exported getWords */
function getWords(string: string): string[] {
  const wordsArr = [];
  if (string === '') {
    return [];
  }
  for (let i = 0; i < string.split(' ').length; i++) {
    wordsArr.push(string.split(' ')[i]);
  }
  return wordsArr;
}

console.log(getWords(''));
