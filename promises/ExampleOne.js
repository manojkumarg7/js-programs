// 1
const promise1 = new Promise(function (resolve, reject) {
  const a = 10;
  const b = 101;
  if (a === b) {
    resolve("success");
  } else {
    reject("failed");
  }
});

promise1
  .then(function (l) {
    console.log(l);
  })
  .catch(function (err) {
    console.log(err);
  });

// 2
