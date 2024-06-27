// The Object.entries() method in JavaScript returns an array of a given object's own enumerable
//  string-keyed property [key, value] pairs,
//  in the same order as that provided by a for...in loop. Here’s how you can use Object.entries() effectively:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

// Using Object.entries() to iterate over key-value pairs
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

console.log(Object.entries(person));
