// Define a function to check if a given year is a leap year
function leapyear(year) {
  // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

// Test the function with various years and log the results to the console
console.log(leapyear(2016)); // Expected output: true
console.log(leapyear(2000)); // Expected output: true
console.log(leapyear(1700)); // Expected output: false
console.log(leapyear(1800)); // Expected output: false
console.log(leapyear(100)); // Expected output: false
