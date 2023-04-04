function findDuplicateChars(str) {
  const freq = {};
  const duplicates = [];

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char in freq) {
    if (freq[char] > 1) {
      duplicates.push(char);
    }
  }

  return duplicates;
}

// Example usage:
const str = "Hello, world!";
console.log(findDuplicateChars(str)); // Output: ['l', 'o']
