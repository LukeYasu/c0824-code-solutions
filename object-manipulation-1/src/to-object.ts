/* exported toObject */
function toObject(keyValuePair: any[]): unknown {
  const newObj = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    newObj[keyValuePair[0]] = keyValuePair[1];
  }
  return newObj;
}
