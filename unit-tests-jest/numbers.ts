/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  const evenNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNum.push(numbers[i]);
    }
  }
  return evenNum;
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  return '$' + amount.toFixed(2);
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  const divideNum = [];
  for (let i = 0; i < numbers.length; i++) {
    divideNum.push(numbers[i] / divisor);
  }
  return divideNum;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'number') obj[key] = Number(value) * multiplier;
  });
  return obj;
}
