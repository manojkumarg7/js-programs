// Grouping Objects by a Property

const data = [
  { category: "A", value: 1 },
  { category: "B", value: 2 },
  { category: "A", value: 3 },
  { category: "B", value: 4 },
];

const gObj = data.reduce((accumulator, currentValue) => {
  // If the operand is falsy (false, 0, '', null, undefined, NaN), ! converts it to true.
  const key = currentValue.category;
  //   const key = currentValue["category"];
  if (!accumulator[key]) {
    accumulator[key] = []; // Initialize an empty array for this category
  }
  accumulator[key].push(currentValue); // Push the current object into the array
  return accumulator;
}, {});

console.log(gObj);
