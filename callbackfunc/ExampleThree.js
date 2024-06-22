// Example using multiple callbacks and error handling
function performTask(input, successCallback, errorCallback) {
  if (input === "success") {
    successCallback("Task succeeded.");
  } else {
    errorCallback(new Error("Task failed."));
  }
}

// Success callback function
function onSuccess(message) {
  console.log(message);
}

// Error callback function
function onError(error) {
  console.error(error);
}

// Using performTask with success and error callbacks
performTask("success", onSuccess, onError); // Output: Task succeeded.
performTask("failure", onSuccess, onError); // Output: Error: Task failed.
