const arr = [1, 2, 3, 4, 5];

const res = arr.reduce((acc, currV) => {
  const v = acc + currV;
  return v;
}, 0);
console.log(res);
