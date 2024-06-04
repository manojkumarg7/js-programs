//1 . console
//1 . debugger
//1 . source Tab
// 4.de bugger in vs code 
// when api callls
// 1.network tab 20-300 fine 400-front end bug 500-backend

// function isEven(num) {
//   let isEven;
//   if (num % 2 == 0) {
//     isEven = true;
//   } else {
//     isEven = false;
//   }

//   return isEven;
// }

// console.log(isEven(4));

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("end");

const changeBtn = document.getElementById("changeText");
const textTochange = document.getElementById("myText");

changeBtn.addEventListener("click", function () {
  debugger;
  textTochange.innerText = "like this video";
});

