// const mathfunction = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
// };

// const g = mathfunction.add(1, 2);
// console.log(g);

// 2
const mathFunctions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

const operation = "add";
const result = mathFunctions[operation](5, 3);
console.log(result); // Outputs: 8
