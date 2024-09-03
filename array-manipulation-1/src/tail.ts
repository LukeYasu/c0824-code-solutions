/* exported tail */
function tail(array: unknown[]): unknown {
  const tailArr = [];
  for (let i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }
  return tailArr;
}
