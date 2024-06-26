// 14. Flatten and Calculate Product

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const product = arrays
  .reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, [])
  .reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);

console.log("Product:", product); // Output: Product: 720 (1 * 2 * 3 * 4 * 5 * 6)
