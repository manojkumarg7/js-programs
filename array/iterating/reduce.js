// ChatGPT
// In JavaScript, when you pass a function as an argument to another function, you typically pass just the function name without parentheses. This is because you're passing a reference to the function itself, not the result of calling the function.

// In your code, when you call reduce and pass myFunction as an argument, you don't include parentheses after myFunction. You pass the function reference, not the result of calling myFunction.

// So, your code should look like this:

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// example 2

const num = [1, 6, 4, 3, 5, 6];
function test(initailValue, value, index, array) {
  return (initailValue += value);
}

const total = num.reduce(test);
console.log(total);
