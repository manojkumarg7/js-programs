const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

person.address = "Dharamasagar";
person["city"] = "Banglore";
console.log(person);

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

const key = "firstName";
console.log(person2[key]); // Outputs: "John"
