// console.error()
console.error("This is an error message.");
console.error(new Error("Something went wrong!"));

// 3. console.warn()

console.warn("This is a warning message.");

// 4. console.info()

console.info("This is an informational message.");

// 5. console.debug()

console.debug("This is a debug message.");

// 6. console.table()

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];
console.table(users);

// 7. console.group() and console.groupEnd()

console.group("User Details");
console.log("Name: Alice");
console.log("Age: 25");

// 8
const user = {
  id: 1,
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

const b = [1, 2, 3, 4, 5];
console.dir(b);
console.dir(user);
console.log(user);

// 9

