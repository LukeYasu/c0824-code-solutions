'use strict';
/* exported getValues */
function getValues(object) {
  const valuesArr = [];
  for (const keys in object) {
    valuesArr.push(object[keys]);
  }
  return valuesArr;
}
