const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// const g = arrays.flat(Infinity);
// console.log(g);

const l = arrays.reduce((accumulator, currentV) => {
  return accumulator.concat(currentV);
}, []);
