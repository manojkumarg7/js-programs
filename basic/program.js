// 1. Write a JavaScript program to display the current day and time in the following format.

const date = new Date();

const day = date.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var h = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var prepand = h >= 12 ? " PM " : " AM ";
h = h >= 12 ? h - 12 : h;
console.log(h);
console.log(prepand);

console.log(`Today is  :  ${daylist[day]}`);
console.log(`Current Time : ${h}h-${prepand} - ${min} min - ${sec} sec`);
