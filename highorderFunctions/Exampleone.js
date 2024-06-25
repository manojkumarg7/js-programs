function test() {
  const arr = [1, 2, 3, 4, 5];
  const empArr = [];
  for (let i = 0; i < arr.length; i++) {
    empArr.push(arr[i]);
    empArr.push(arr[i] * 2);
  }
  return empArr;
}

var h = test();

console.log(h);
