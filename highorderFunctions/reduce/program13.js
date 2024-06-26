// 12. Remove Duplicates from an Array

const arr = [1, 2, 3, 1, 2, 4, 5, 4, 3];

const res = arr.reduce((accumulator, currentValue, index, array) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(res);
