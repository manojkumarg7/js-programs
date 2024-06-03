// The every() method checks if all array values pass a test.

const x = 0;
const numbers = [1, 2, 34, 4, 5, 6, 7, 8];

// arrow function
const lessThanFive = (x) => x < numbers;

if (numbers.every(lessThanFive)) {
  console.log("all are less than five");
} else {
  console.log("all are not less than five k");
}

// example 2
const array2 = [9, 3, 4, 5, 6, 8];

function test(y) {
  return y < 4;
}

const result = array2.every(test);

console.log(result);

// example 3
const array3 = [10, 20, 30, 40, 50, 60, 70];

function display(f) {
  if (f < 60) {
    return true; // Return true if f is less than 60
  } else {
    return false; // Return false if f is greater than or equal to 60
  }
}

const res = array3.every(display);

// Use the result of the condition to decide which string to return
const message = res ? "every thing ok" : "not ok";

console.log(message); // Output: not ok
