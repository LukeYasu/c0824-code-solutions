/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const newArr = [];
  for (let i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
