// Certainly! Let's clarify the clear differences between ! (single exclamation mark) and !!
// (double exclamation marks) in JavaScript:

// ! (Logical NOT)
// Purpose: The ! operator performs logical negation.

// Usage: It precedes a single operand and flips its boolean value.

// Behavior:

// Converts a truthy value to false.
// Converts a falsy value to true.

let isLoggedIn = false;
console.log(!isLoggedIn); // true

let userName = "";
console.log(!userName); // true

let number = 42;
console.log(!number); // false
