const arr = [10, 20, 30, 40, 50];

const res = arr.reduce((accumlator, currentValue, index, array) => {
  accumlator += currentValue;
  //   console.log(array.length - 1);
  if (index === array.length) {
    return accumlator / array.length;
  } else {
    return accumlator;
  }
  //   console.log(accumlator);
  //   console.log(currentValue);
  //   console.log(index);
  // console.log(accumlator);
}, 0);

console.log(res);
