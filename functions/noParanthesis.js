// Function to be passed
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Higher-order function that takes another function as a parameter
  function processGreeting(fn, name) {
    // Calling the passed function with the provided name
    return fn(name);
  }
  
  // Passing the function reference (no parentheses)
  const result = processGreeting(greet, "Alice");
  console.log(result); // "Hello, Alice!"
  