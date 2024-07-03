let numbers = [10, 20, 30, 40, 50];

// Finding the index of the first element that is greater than 30
let index = numbers.findIndex((element) => element > 30);
console.log(index); // Output: 3 (index of the element 40)

// If no element satisfies the condition, findIndex returns -1
let index2 = numbers.findIndex((element) => element > 100);
console.log(index2); // Output: -1 (no element greater than 100)
