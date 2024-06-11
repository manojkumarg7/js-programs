// Simple Pure Function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// Pure Function with Arrays

// Practical Usage of Pure Functions

function incrementArray(arr) {
  return arr.map((num) => num + 1);
}

const nums = [1, 2, 3];
console.log(incrementArray(nums)); // [2, 3, 4]
console.log(nums); // [1, 2, 3] (original array is not modified)

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

function sayHello(j) {
  return j.map((user) => user.name);
}

const a = sayHello(users);
console.log(a);
