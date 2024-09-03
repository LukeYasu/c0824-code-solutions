/* exported oddOrEven */
function oddOrEven(number: number[]): string[] {
  const stringArr = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      stringArr.push('even');
    } else {
      stringArr.push('odd');
    }
  }
  return stringArr;
}
