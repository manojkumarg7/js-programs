const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const res = data.reduce((acccumulator, currentValue, index, array) => {
  if (currentValue["age"] > 25) {
    acccumulator.push(currentValue["name"]);
  }
  return acccumulator;
}, []);

const res2 = data.reduce((accumulator, currentValue) => {
  const { age, name } = currentValue;

  // Check if the age group exists in the accumulator object
  if (!accumulator[age]) {
    accumulator[age] = []; // Initialize an empty array if it doesn't exist
  }

  accumulator[age].push(name); // Push the name into the corresponding age group array
  return accumulator;
}, {});

console.log(res);

console.log(res2);
