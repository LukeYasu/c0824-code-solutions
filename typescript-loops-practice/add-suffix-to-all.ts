/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const finalArray = [];
  for (let i = 0; i < words.length; i++) {
    finalArray.push(words[i] + suffix);
  }
  return finalArray;
}
