// 1
const fruits = ["apple", "banana", "cherry"];

const hasBanana = fruits.reduce(
  (accumulaor, currentValue) => accumulaor || currentValue === "banana",
  false
);
console.log(hasBanana);

// 2 Transforming Data into Object:

const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const dataById = data.reduce((acc, cur) => {
  acc[cur.id] = cur;
  return acc;
}, {});

console.log(dataById);

// 3
