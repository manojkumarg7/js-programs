function factorial(n) {
  if (n < 0) {
    return "number should not less then 0";
  }

  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(5);
console.log(result);
