function longestSubstringWithoutRepeatingCharacters(s) {
  const n = s.length;
  const seen = new Map();
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    if (seen.has(s[i])) {
      start = Math.max(start, seen.get(s[i]) + 1);
    }
    seen.set(s[i], i);
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

// Example usage:
const s = "abcabcbb";
const result = longestSubstringWithoutRepeatingCharacters(s);
console.log(result); // Output: 3
