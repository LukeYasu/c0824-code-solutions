'use strict';
/* exported countdown */
function countdown(num) {
  const countdownArr = [];
  const intialNum = num;
  for (let i = 0; i <= intialNum; i++) {
    countdownArr.push(num);
    num -= 1;
  }
  return countdownArr;
}
