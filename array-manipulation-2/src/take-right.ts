/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const newArr = [];
  let startIndex = array.length - count;
  if (startIndex < 0) {
    startIndex = 0;
  }
  for (let i = startIndex; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
