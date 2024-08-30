/* exported countdown */
function countdown(num: number): number[] {
  const countdownArr = [];
  const intialNum = num;
  for (let i = 0; i <= intialNum; i++) {
    countdownArr.push(num);
    num -= 1;
  }
  return countdownArr;
}
