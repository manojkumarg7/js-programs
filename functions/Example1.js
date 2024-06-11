// Summary
// Passing Function Reference (No Parentheses): You pass the function itself, allowing it to be called later.
// Passing Result of Function Call (With Parentheses): You call the function immediately and pass the result.
// 1
function test() {
  return "manoj";
}

test();

// 2

function display(value) {
  return value;
}

display("good boy");

// 3
function hello(city) {
  return city;
}

function dude(name) {
  return ` ok macha ${name}`;
}

var p = dude(hello("banglore"));
console.log(p);

// 4

function print(value) {
  console.log(value);
}

function useCallback(callback) {
  return callback("hello guru how are you");
}
useCallback(print);

// 5
