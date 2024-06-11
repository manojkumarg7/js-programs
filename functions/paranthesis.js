// Function to be called
function greet(name) {
  return `Hello, ${name}!`;
}

// Higher-order function that takes a greeting message as a parameter
function processGreeting(message) {
  // Directly working with the passed message
  return `Processed message: ${message}`;
}

// Calling the function and passing the result (with parentheses)
const result = processGreeting(greet("Alice"));
console.log(result); // "Processed message: Hello, Alice!"
