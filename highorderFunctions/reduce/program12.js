// 11. Checking if All Elements Satisfy a Condition
const arr = [10, 20, 30, 40, 50];

const allGreaterThanFive = arr.reduce((accumulator, currentValue) => {
  return accumulator && currentValue > 5;
}, true);

console.log("All elements greater than 5:", allGreaterThanFive); // Output: All elements greater than 5: true
