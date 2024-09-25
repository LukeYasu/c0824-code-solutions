'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const saleNum = prices.map((originalNumber) => ({
  price: `$${originalNumber}`,
  salePrice: `$${originalNumber / 2}`,
}));
console.log('map() salePrice: ', saleNum);
const fullPrice = prices.map((originalNumber) => `$${originalNumber}`);
console.log('map() fullPrice: ', fullPrice);
