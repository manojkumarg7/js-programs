const numbers = [1, 2, 3, 4, 5];

const p = numbers.every((num) => num >= 1);

console.log(p);

// Checking if all strings have length greater than 3:

const words = ["apple", "banana", "cherry", "date"];

const allWords = words.every((num) => num.length > 3);

console.log(allWords);

// Checking if all elements are even numbers:

const number = [2, 4, 6, 8, 9];

const allEVen = number.every((num) => num % 2 === 0);

console.log(allEVen);

// Checking if all elements are truthy:
const values = [true, 1, "hello", {}, []];

const alltruthyValues = values.every((n) => !!n);
console.log(alltruthyValues);

// 5
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
const allAdults = people.every((person) => person.age >= 18);
console.log(allAdults); // Output: true
