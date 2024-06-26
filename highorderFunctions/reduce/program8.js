const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// const v = arrays.flat(Infinity);
// const s = v.filter((v) => v > 3);
// console.log(s);

const flatArray = arrays
  .reduce((accumulator, currentValue, index, array) => {
    return accumulator.concat(currentValue);
  }, [])
  .filter((v) => v > 3);
console.log(flatArray);
