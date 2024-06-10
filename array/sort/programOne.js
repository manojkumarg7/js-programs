// n JavaScript, sort() sorts arrays lexicographically (by converting elements
// to strings and comparing strings by their Unicode code points). That's why when sorting
//  numbers, it's common to provide a comparison function to ensure numerical sorting.
//  Without a comparison function, sorting numbers as strings may lead to unexpected results,
//   as you've encountered.

// To sort numbers properly, you can provide a comparison function to sort():

// sort converts elemnts into strings
const a = [23, 44, 56, 1, 2, 8];
console.log(a.sort((a, b) => a - b).reverse());

// slice
// it creates new array doesnot remove any elements
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

// splice
// Splice(start ,remove ,adding new elemnts)
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");
