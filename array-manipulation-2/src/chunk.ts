/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const newArr = [];
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(array[i]);
    if (tempArr.length >= size || i + 1 >= array.length) {
      newArr.push(tempArr);
      tempArr = [];
    }
  }
  return newArr;
}
