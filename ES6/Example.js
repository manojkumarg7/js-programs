// Object Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { firstName, lastName, age, eyeColor } = person;

// Array Destructuring

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const [Banana, Orange, Apple, Mango] = fruits;

// The Spread (...) Operator

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

// Default Parameter Values

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5);

// Function Rest Parameter

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// Arrow function
