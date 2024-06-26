const arr = [5, 8, 2, 4, 10];

const max = arr.reduce((accumulator, currentValue, index, array) => {
  return Math.max(accumulator, currentValue);
});

const min = arr.reduce((accumulator, currentValue, index, array) => {
  return Math.min(accumulator, currentValue);
});

console.log(max);
console.log(min);
