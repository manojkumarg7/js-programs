// initialzing Array

const language = ["kannada", "english", "telugu"];

console.log(language);

// create  array by using new keyword

const games = new Array();
games[0] = "footbal";
games[1] = "cricket";
console.log(games);

// Array constructor
const sport = new Array("manoj", "kiran", "alllok");

console.log(sport);

// ES6  Destructuring array

// Example array
const colors = ["red", "green", "blue"];

// Destructuring array
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor); // Output: 'blue'
