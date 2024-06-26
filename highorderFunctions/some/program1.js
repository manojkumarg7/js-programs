// Checking if any number is greater than 10:
const numbers = [5, 8, 3, 12, 6];
const anyGreaterThanTen = numbers.some((num) => num > 10);
console.log(anyGreaterThanTen); // Output: true

// 2 Checking if any string starts with a specific letter:
const words = ["apple", "banana", "cherry"];
const startsWithB = words.some((word) => word.startsWith("b"));
console.log(startsWithB); // Output: true

// 3 Checking if any element is truthy:

const values = [0, "", false, null, "hello"];
const anyTruthy = values.some((value) => !!value);
console.log(anyTruthy); // Output: true

// 4 Checking if any object has a specific property:
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", gender: "male" },
];
const hasGenderProperty = people.some((person) =>
  person.hasOwnProperty("gender")
);
console.log(hasGenderProperty); // Output: true

// 5 Checking if any element in an array is even:
const numbers1 = [1, 3, 5, 7, 8];
const anyEven = numbers1.some((num) => num % 2 === 0);
console.log(anyEven); // Output: true

// 6 Checking if any user is logged in:
const users = [
  { username: "user1", loggedIn: false },
  { username: "user2", loggedIn: true },
  { username: "user3", loggedIn: false },
];
const anyLoggedIn = users.some((user) => user.loggedIn);
console.log(anyLoggedIn); // Output: true

// 7 Checking if any element meets a complex condition:
const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];
const anyMatch = data.some(
  (person) => person.age > 30 && person.name.startsWith("B")
);
console.log(anyMatch); // Output: false
