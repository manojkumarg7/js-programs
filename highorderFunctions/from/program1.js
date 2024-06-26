const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

const newArra = Array.from(arrayLike);

console.log(newArra);

// 2

const str = "hello";
const charArray = Array.from(str);
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

// 3

const set = new Set([1, 2, 3]);
const arrayFromSet = Array.from(set, (x) => x * 2);
console.log(arrayFromSet); // Output: [2, 4, 6]
