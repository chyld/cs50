// @flow

const card = process.argv[2].split('').map(n => parseInt(n)).reverse();
const sum1 = card.filter((n, i) => i % 2 === 0).reduce((a, n) => a + n);
const nums = card.filter((n, i) => i % 2 === 1).map(n => n * 2);
const sum2 = nums.reduce((a, n) => n.toString().split('').map(x => parseInt(x)).reduce((b, c) => b + c) + a, 0);
const isGood = ((sum1 + sum2) % 10) === 0;

console.log(isGood);
