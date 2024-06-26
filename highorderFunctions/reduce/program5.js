const arrays = [
  [1, 2],
  [1, 3],
  [2, 3],
];

const v = arrays.reduce((a, c, i) => {
  c.forEach((value) => {
    if (a[value]) {
      a[value]++;
    } else {
      a[value] = 1;
    }
  });
  return a;
}, {});

console.log(v);
