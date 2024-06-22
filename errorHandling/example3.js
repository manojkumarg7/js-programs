const number = 40;
try {
  if (number > 50) {
    console.log("Success");
  } else {
    // user-defined throw statement
    throw new Error("The number is low");
  }

  // if throw executes, the below code does not execute
  console.log("hello");
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}

// 2
// Rethrow an Exception
// You can also use throw statement inside the catch block to rethrow an exception. For example,
const number1 = 5;
try {
  // user-defined throw statement
  throw new Error("This is the throw");
} catch (error) {
  console.log("An error caught");
  if (number1 + 8 > 10) {
    // statements to handle exceptions
    console.log("Error message: " + error);
    console.log("Error resolved");
  } else {
    // cannot handle the exception
    // rethrow the exception
    throw new Error("The value is low");
  }
}
