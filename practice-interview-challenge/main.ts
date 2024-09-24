interface objInt {
  total: number;
  odds: number[];
  even: number[];
  range: number[];
  average: number;
}

const finalObject: objInt = {
  total: 0,
  odds: [],
  even: [],
  range: [],
  average: 0,
};
function getRangeReport(start: number, end: number): objInt {
  let total = 0;
  const iterations = end - start + 1;
  for (let i = 0; i < iterations; i++) {
    const startTotal = start + i;
    total += startTotal;
  }
  finalObject.total = total;

  const odd = [];
  for (let i = 0; i < iterations; i++) {
    const startOdd = start + i;
    if (startOdd % 2 !== 0) {
      odd.push(startOdd);
    }
  }
  finalObject.odds = odd;

  const even = [];
  for (let i = 0; i < iterations; i++) {
    const startEven = start + i;
    if (startEven % 2 === 0) {
      even.push(startEven);
    }
  }
  finalObject.even = even;

  const range = [];
  let totalNums = 0;
  for (let i = 0; i < iterations; i++) {
    const startRange = start + i;
    range.push(startRange);
    totalNums++;
  }
  finalObject.range = range;

  const average = total / totalNums;
  finalObject.average = average;

  return finalObject;
}
getRangeReport(2, 10);
