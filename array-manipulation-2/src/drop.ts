/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const newArr = [];
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
