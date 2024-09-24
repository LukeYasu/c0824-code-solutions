'use strict';
let finalObject = {
  total: 0,
  odds: [],
  even: [],
  range: [],
  average: 0,
};
function getRangeReport(start, end) {
  let total = 0;
  const iterations = end - start + 1;
  for (let i = 0; i < iterations; i++) {
    let startTotal = start + i;
    total += startTotal;
  }
  finalObject.total = total;
  let odd = [];
  for (let i = 0; i < iterations; i++) {
    let startOdd = start + i;
    if (startOdd % 2 !== 0) {
      odd.push(startOdd);
    }
  }
  finalObject.odds = odd;
  let even = [];
  for (let i = 0; i < iterations; i++) {
    let startEven = start + i;
    if (startEven % 2 === 0) {
      even.push(startEven);
    }
  }
  finalObject.even = even;
  let range = [];
  let totalNums = 0;
  for (let i = 0; i < iterations; i++) {
    let startRange = start + i;
    range.push(startRange);
    totalNums++;
  }
  finalObject.range = range;
  const average = total / totalNums;
  finalObject.average = average;
  return finalObject;
}
getRangeReport(2, 10);
