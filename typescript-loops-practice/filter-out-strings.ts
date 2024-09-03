/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof 'string') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
