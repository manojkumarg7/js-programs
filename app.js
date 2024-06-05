const numbers = [10, 15, 20, 25, 30];
const average = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
const belowAverage = numbers.filter(num => num <= average);
console.log(belowAverage); // Output: [10, 15, 20]
