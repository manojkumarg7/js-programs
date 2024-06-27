const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

const valuesArray = Object.values(person);

console.log(valuesArray);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

// Using forEach to iterate over values
Object.values(person1).forEach((value) => {
  console.log(value);
});
