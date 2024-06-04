// Assigning to a variable:
const emptyArray = [];

// 2.
const empty = [];
empty.push(1);
empty.push(2);

// 3
function createArray() {
  return [];
}

const newArray = createArray();

// 4
// Using it as a placeholder:
function processArray(array) {
  if (array.length === 0) {
    console.log("Array is empty");
  } else {
    console.log("Array has elements:", array);
  }
}

processArray([]); // Output: Array is empty

//   5
// Mapping over an empty array:

const emptyA = [];
const result = emptyA.map((item) => item * 2);
console.log(result); // Output: []

// ----------------------
const dynamicPropertyName = "myProperty";
const obj = {
  [dynamicPropertyName]: "some value",
};

console.log(obj.myProperty); // Output: 'some value'

// 2
const key = "name";
const obj1 = {
  [key]: "John",
};

console.log(obj1.name); // Output: 'John'

// 3
const obj2 = {
  name: "John",
  age: 30,
};

const propertyName = "name";
console.log(obj2[propertyName]); // Output: 'John'

// 4
const obj4 = {
  ["first name"]: "John",
  ["last name"]: "Doe",
};

console.log(obj4["first name"]); // Output: 'John'
console.log(obj4["last name"]); // Output: 'Doe'
