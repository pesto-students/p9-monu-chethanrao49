function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Example usage:
const str1 = "racecar";
const str2 = "hello";
console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: false
