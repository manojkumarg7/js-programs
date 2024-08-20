function palindrome(str) {
  const v = str.split("").reverse().join("");

  if (v === str) {
    return "success";
  } else {
    return "fails";
  }
}

const result = palindrome("gadag");
console.log(result);
