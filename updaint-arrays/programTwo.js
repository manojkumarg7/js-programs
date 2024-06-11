// 1. Direct Property Assignment
const person = { name: "Alice", age: 25 };
person.name = "Bob";
person.age = 26;

// 2 2. Using the Spread Operator--------------------------
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, name: "Bob", age: 26 };

// 3. Using Object.assign-----------------------------
const person = { name: "Alice", age: 25 };
const updatedPerson1 = Object.assign({}, person, { name: "Bob", age: 26 });

// 4. Using Object.defineProperty------------------

const person = { name: "Alice", age: 25 };
Object.defineProperty(person, "name", { value: "Bob", writable: true });
Object.defineProperty(person, "age", { value: 26, writable: true });

// 5. Using Object Methods

const person = {
  name: "Alice",
  age: 25,
  updateName(newName) {
    this.name = newName;
  },
  updateAge(newAge) {
    this.age = newAge;
  },
};
person.updateName("Bob");
person.updateAge(26);

//  Using Functional Programming Techniques-----------------

const person = { name: "Alice", age: 25 };

function updatePerson(person, updates) {
  return { ...person, ...updates };
}

const updatedPersoni = updatePerson(person, { name: "Bob", age: 26 });

//   7. Using Object.fromEntries--------------------
const person = { name: "Alice", age: 25 };

function updatePerson(person, updates) {
  return { ...person, ...updates };
}

const updatedPersonp = updatePerson(person, { name: "Bob", age: 26 });

// 8. Using Third-Party Libraries-------------------

const _ = require("lodash");
const person = { name: "Alice", age: 25, address: { city: "Wonderland" } };

const updatedPersonk = _.merge({}, person, {
  name: "Bob",
  address: { city: "New Wonderland" },
});

// const _ = require('lodash');
const person = { name: "Alice", age: 25, address: { city: "Wonderland" } };

const updatedPersonl = _.merge({}, person, {
  name: "Bob",
  address: { city: "New Wonderland" },
});

// 10. Using JSON Methods

const person = { name: "Alice", age: 25, address: { city: "Wonderland" } };
const updatedPersonm = JSON.parse(JSON.stringify(person));
updatedPerson.name = "Bob";
updatedPerson.age = 26;
