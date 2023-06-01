// Using the split() and reverse() methods:
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const str1 = "Hello, world!";
console.log(reverseString(str)); // Output: !dlrow ,olleH

// Using a for loop:
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const str = "Hello, world!";
console.log(reverseString(str)); // Output: !dlrow ,olleH
