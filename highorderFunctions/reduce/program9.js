const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const convertArray = data.reduce((accumulator, currentValue, index, array) => {
  accumulator.push(currentValue["name"]);
  return accumulator;
}, []);

console.log(convertArray);
