/* exported compact */
function compact(array: unknown[]): unknown[] {
  const compactArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== false) {
      if (array[i] !== null) {
        if (!Number.isNaN(array[i])) {
          if (array[i] !== 0) {
            if (array[i] !== '') {
              if (array[i] !== undefined) {
                compactArr.push(array[i]);
              }
            }
          }
        }
      }
    }
  }
  return compactArr;
}
