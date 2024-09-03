/* exported getIndexes */
function getIndexes(array: unknown[]): number[] {
  const arrayIndexes = [];
  for (let i = 0; i < array.length; i++) {
    arrayIndexes.push(i);
  }
  return arrayIndexes;
}
