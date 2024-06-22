// intermediate level
function test(callback) {
  setTimeout(() => {
    let data = "data fetched";
    callback("manoj", data);
  });
}

function display(d, j) {
  console.log(`${j} -success-${d}`);
}

test(display);
// -------------------
// 4. Using Callbacks with Higher-Order Functions:
// Higher-order function with a callback
function processArray(array, callback) {
  const result = array.map(callback);
  return result;
}

// Callback function to double each element
function double(num) {
  return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = processArray(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
