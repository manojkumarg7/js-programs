const numbers = [1, 2, 3,66, 4, 5];

const h = numbers.reduce((intialvalue, currntvalue, index, array) => {
  return intialvalue + currntvalue;
});

console.log(h);

// maximum value

const m = numbers.reduce((i, c) => {
  const k = i > c ? i : c;
  return k;
});

console.log(m);
