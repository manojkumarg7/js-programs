// n JavaScript, sort() sorts arrays lexicographically (by converting elements
// to strings and comparing strings by their Unicode code points). That's why when sorting
//  numbers, it's common to provide a comparison function to ensure numerical sorting.
//  Without a comparison function, sorting numbers as strings may lead to unexpected results,
//   as you've encountered.

// To sort numbers properly, you can provide a comparison function to sort():

const a = [23, 44, 56, 1, 2, 8];
console.log(a.sort((a, b) => a - b).reverse());
