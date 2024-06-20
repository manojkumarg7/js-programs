let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data from an API)
  setTimeout(() => {
    let success = true; // Simulate success or failure
    if (success) {
      resolve("Data successfully fetched!"); // Resolve with a value
    } else {
      reject("Error fetching data."); // Reject with an error
    }
  }, 2000); // Simulate delay of 2 seconds
});

myPromise
  .then((result) => {
    console.log(result); // Output: Data successfully fetched!
  })
  .catch((error) => {
    console.error(error); // Output: Error fetching data.
  });
