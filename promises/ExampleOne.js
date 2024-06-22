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
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe", age: 30 };
      resolve(data);
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.department = "Engineering";
      resolve(data);
    }, 500);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedData = { ...data, status: "Saved" };
      resolve(savedData);
    }, 800);
  });
}

fetchData()
  .then((data) => processData(data))
  .then((processedData) => saveData(processedData))
  .then((savedData) => {
    console.log("Data saved successfully:", savedData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
