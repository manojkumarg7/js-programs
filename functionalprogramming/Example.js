// functional programmming is a form of programming in which you can pass function as a parameter to
// others functions and return them as values

function a(b) {
  b();
  return function () {
    console.log("out put from A");
  };
}

function b() {
  console.log("output from B");
}

const c = a(b);
c();

let username = () => "chinni";
console.log(username());

let subject = function () {
  return "hight order function";
};

console.log(subject());

// first class functions

let add = (num) => num + 1;

function numbers(fn, x) {
  return fn(x);
}

let result = numbers(add, 5);
console.log(result);

// how functions are objects-------------------------------
function greet() {
  console.log("Hello!");
}

// Adding a property to the function object
greet.language = "English";

console.log(greet.language); // Outputs: "English"

// high order functions --------------------------------------
// let add = (num) => num + 1;

let number = [1, 2, 3];
let res = number.map(add);
// let res = number.map((v, i, a) => (v +1));
console.log(res);
