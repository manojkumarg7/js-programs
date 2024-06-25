// const arr = [1, 2, 3, 4, 5];

// const res = arr.filter((value) => {
//   const a = value > 3;
//   return a;
// });

// console.log(res);

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];

const h = users.filter((va) => va.age > 35);
console.log(h);
