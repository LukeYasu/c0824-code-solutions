/* exported getValues */
function getValues(object: Record<string, unknown>): unknown[] {
  const valuesArr: unknown[] = [];
  for (const keys in object) {
    valuesArr.push(object[keys]);
  }
  return valuesArr;
}
