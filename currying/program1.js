// Normal Program

function calculateVolume(length, breadth, height) {
  return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));

// curry in js
// It is a technique in functional programming,
//  that transforms the function of multiple arguments into several functions of
//   a single argument in sequence.

function calculater(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

var a = calculater(1)(2)(3);
console.log(a);

// 2 Arrow functions

const curryMultiply = (x) => (y) => x * y;

console.log(curryMultiply(2)(4));
