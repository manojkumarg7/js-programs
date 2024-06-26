const sentence = "I love JavaScript because JavaScript is awesome and fun.";

const wordCount = sentence.split(" ").reduce((accumulator, word) => {
  if (accumulator[word]) {
    accumulator[word]++;
  } else {
    accumulator[word] = 1;
  }
  return accumulator;
}, {});

console.log("Word count :", wordCount);
/* Output:
{
  "I": 1,
  "love": 1,
  "JavaScript": 2,
  "because": 1,
  "is": 1,
  "awesome": 1,
  "and": 1,
  "fun.": 1
}
*/
