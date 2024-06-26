// !! (Double Logical NOT)
// Purpose: The !! operator converts a value to its boolean equivalent.

// Usage: It applies ! twice to coerce any value to a boolean.

// Behavior:

// Converts any truthy value to true.
// Converts any falsy value to false.

let userInput = "hello";
if (!!userInput) {
  console.log("User input is valid.");
} else {
  console.log("User input is empty or falsy.");
}

// 2
function isValid(value) {
  return !!value;
}

console.log(isValid("hello")); // true
console.log(isValid(0)); // false
