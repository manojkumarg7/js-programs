// Counting Occurrences of Elements in an Array

const arr = [1, 2, 1, 3, 2, 1, 4, 5, 4];

const p = arr.reduce((acc, cuu) => {
  if (acc[cuu]) {
    acc[cuu]++;
  } else {
    acc[cuu] = 1;
  }
  return acc;
}, {});

console.log(p);