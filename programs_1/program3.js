function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const result = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(result);
