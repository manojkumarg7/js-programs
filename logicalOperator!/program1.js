// Logical NOT (!) Operator:
// The ! operator negates the value of its operand. It converts the operand into a boolean value and then
// negates it. Here's how it works:

// If the operand is truthy (not one of false, 0, '', null, undefined, or NaN), ! converts it to false.
// If the operand is falsy (one of false, 0, '', null, undefined, or NaN), ! converts it to true.
let isOpen = false;

if (!isOpen) {
  console.log(!isOpen);
  console.log("The door is closed.");
}

let count = 0;

if (!count) {
  console.log("The count is zero."); // This will be printed because count is 0 (falsy)
}

// Checking for Undefined or Null:

let user = null;

if (!user) {
  console.log("User is not logged in."); // This will be printed because user is null (falsy)
}

let myArray = [];

if (!myArray.length) {
  console.log("The array is empty."); // This will be printed because myArray.length is 0 (falsy)
}

function hasPermission(user) {
  return user && user.role === "admin";
}

let currentUser = { role: "user" };

if (!hasPermission(currentUser)) {
  console.log("Access denied."); // This will be printed because currentUser is not an admin
}
