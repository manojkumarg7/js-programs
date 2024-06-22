// beginner level
// In JavaScript, a callback function is a function that is passed as an
// argument to another function, with the intention of being invoked (called back) at
// a later time or under certain conditions. Callback functions are a fundamental concept
// in asynchronous programming, allowing you to define
// what should happen after an operation has completed.
function greet(name, callback) {
  console.log(`hello ${name}`);
  callback();
}

function sayGoodBye() {
  console.log("good bye");
}

greet("Manoj", sayGoodBye);
