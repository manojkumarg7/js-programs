// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

// const date = new Date(year, month, day);

function firstJanuary() {
  if (date.getDay() === 1) {
    return "1st january";
  } else {
    return "not a january";
  }
}

for (var year = 2014; year <= 2050; year++) {
  const date = new Date(year, 0, 1);
  if (date.getDay() === 0) {
    console.log("1st January is being a Sunday  " + year);
  }
}
