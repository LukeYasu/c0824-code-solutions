/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): any {
  const valuesArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesArr.push(values[i]);
    }
  }
  return valuesArr;
}
