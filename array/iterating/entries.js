// entries

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  console.log(x);
}

// keys
const fruitsL = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruitsL.keys();

let text = "";
for (let x of keys) {
  console.log(x);
}
