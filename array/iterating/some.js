// The some() method checks if some array values pass a test.

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// true or false
const numbers = [45, 4, 9, 16, 25];

function test(v) {
  return v > 46;
}

var a = numbers.some(test);
console.log(a);
