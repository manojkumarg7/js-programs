// The filter() method creates a new array with array elements that pass a test.

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
const x = 0;
const numbers = [45, 4, 9, 16, 25];

const over18 = (x) => x >= 5;

console.log(numbers.filter(over18));

// example 2
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];
const olderThan30 = users.filter((user) => user.age > 30);
console.log(olderThan30); // Output: [{ id: 3, name: 'Bob', age: 35 }]

// 3
const a = [1, 2, 2, 3, 4, 5];

const uniqueArray = a.filter((item, index) => a.indexOf(item) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
