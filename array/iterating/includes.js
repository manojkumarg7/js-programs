const a = [1, 2, 3, 45, 6, 7, 8];

var b = a.includes(45);

console.log(b);

// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
