const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.hasOwnProperty("firstName")); // true
console.log(person.hasOwnProperty("email")); // false
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
