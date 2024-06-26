const values = ["hello", "", "world"];
const allNonEmptyStrings = values.every(
  (value) => typeof value === "string" && value.length > 0
);
console.log(allNonEmptyStrings);

// 2
const words = ['APPLE', 'BANANA', 'CHERRY', 'DATE'];
const allUppercase = words.every(word => word === word.toUpperCase());
console.log(allUppercase); // Output: true
