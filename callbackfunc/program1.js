// basic callback function

function greet(name, callback) {
  console.log(`${name}`);
  callback();
}
function sayGoodbye() {
  console.log("say good bye");
}

greet("manoj", sayGoodbye);

// Start
//   |
//   v
// Call greet("manoj", sayGoodbye)
//   |
//   v
// Inside greet
//   |
//   v
// Print "manoj"
//   |
//   v
// Call sayGoodbye() (callback)
//   |
//   v
// Inside sayGoodbye
//   |
//   v
// Print "say good bye"
//   |
//   v
// End
