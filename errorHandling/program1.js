// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
}

//2
try {
  let obj = {};
  console.log(obj.property); // Accessing undefined property
} catch (error) {
  console.log("Error:", error.message);
}
//3
try {
  let regex = new RegExp("["); // Unclosed character class
} catch (error) {
  console.log("Error:", error.message);
}

//4
try {
  let arr = [1, 2, 3];
  console.log(arr[5]); // Accessing index out of bounds
} catch (error) {
  console.log("Error:", error.message);
}

//5
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
}

// throw
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  throw new Error("Cannot divide by zero");
}

try {
  console.log("hello try");
  throw new Error('A jjejj');
} catch (err) {
 console.log(err);
} finally {
 console.log("I will run anyway");
}
