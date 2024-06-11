const a = [1, 2, 3, 4, 5, 6];
// using spread  operator
const b = [...a, 7]; // element 7 will goes last
const c = [0, ...a]; // element 0 will enter first
console.log(b);
console.log(c);
