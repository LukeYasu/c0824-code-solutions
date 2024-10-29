import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

export function isIsogram(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    const string = str.toLowerCase().split('');
    string.splice(i, 1);
    if (string.join('').includes(str[i])) {
      return false;
    }
  }
  return true;
}

describe('Isogram', () => {
  it('returns true as a isogram', () => {
    expect(isIsogram('isogram')).toStrictEqual(true);
  });
});

describe('evenNumbers', () => {
  it('Returns a new array that contains only the even numbers in the given array.', () => {
    expect(evenNumbers([1, 4, 5, 10, 0])).toStrictEqual([4, 10, 0]);
  });
});
describe('toDollars', () => {
  it('Returns a number formatted in dollars and cents.', () => {
    expect(toDollars(3)).toBe('$3.00');
  });
});
describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array.', () => {
    expect(divideBy([2, 4, 6], 2)).toStrictEqual([1, 2, 3]);
  });
});
describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number. Key names are arbitrary.', () => {
    expect(multiplyBy({ key: 5, x: 'string' }, 2)).toEqual({ key: 10 });
  });
});
