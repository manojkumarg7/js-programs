const arr = [1, 2, 3, 4, 5];

const h = arr.reduce((acc, cuv) => {
  if (acc[cuv]) {
    acc[cuv]++;
  } else {
    acc[cuv] = 1;
  }
  return acc;
}, {});

console.log(h);
