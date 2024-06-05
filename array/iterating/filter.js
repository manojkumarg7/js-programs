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

// 4 Filter Out Odd Numbers:

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const k = num.filter((v, i) => v % 2 == 0);

console.log(k);

// 5 Filter Strings Longer Than 5 Characters:
const words = ["apple", "banana", "kiwi", "strawberry", "orange"];
const res = words.filter((v, i) => v.length >= 5);
console.log(res);

// 6  Filter Out Null and Undefined Values:

const mixedValues = [1, null, "hello", undefined, 5, null, "world"];

const mixed = mixedValues.filter((v, i) => v !== null && v !== undefined);

console.log(mixed);

// 7

// Filter Prime Numbers:
const numberso = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var a1 = numberso.filter((v, i) => {
  for (let i = 2; i < Math.sqrt(v); i++) {
    if (v % i === 0) {
      return false;
    }
  }
  return v > 1;
});
console.log(a1);

// 8
const users1 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const r = users1.filter((v, i) => v.age <= 30);
console.log(r);

// 9
// Filter Out Elements Not Starting with a Specific Letter:

const fruits = ["apple", "banana", "kiwi", "orange", "strawberry"];
const q = fruits.filter((v, i) => v.startsWith("a"));
console.log(q);

// 10 Filter Out Elements by Index:
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const m = numbers2.filter((v, i) => i % 2 === 0);
console.log(m);

// Filter Out Elements Based on Type:
const mixedArray = [1, "apple", true, null, undefined, 5, "orange", false];
const numbersOnly = mixedArray.filter((item) => typeof item === "string");
console.log(numbersOnly);
