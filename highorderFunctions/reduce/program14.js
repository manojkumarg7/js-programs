// 13. Grouping and Summing Objects by a Property
const data = [
  { category: "A", value: 10 },
  { category: "B", value: 20 },
  { category: "A", value: 30 },
  { category: "B", value: 40 },
];

const groupedSum = data.reduce((accumulator, currentValue) => {
  const key = currentValue.category;
  if (!accumulator[key]) {
    accumulator[key] = 0;
  }
  accumulator[key] += currentValue.value;
  return accumulator;
}, {});

console.log("Grouped and summed:", groupedSum);
// Output: Grouped and summed: { A: 40, B: 60 }
