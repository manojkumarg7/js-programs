// Method 1: Using Regular Function Syntax
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName()); // Outputs: "John Doe"

// 2 Method 2: Using ES6 Arrow Function Syntax

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: () => {
    return `${person.firstName} ${person1.lastName}`;
  },
};

console.log(person.fullName()); // Outputs: "John Doe"

// 3 Method 3: Method Shorthand (ES6)

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person2.fullName()); // Outputs: "John Doe"
