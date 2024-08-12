const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject("promise rejected"), 1000);
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch((e) => {
    console.log("error gets because rejected " + e);
  });
