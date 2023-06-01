function isAnagram(s, t) {
  // If the strings are of different lengths, they can't be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Initialize a hash table to count the characters in s
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = count[s[i]] ? count[s[i]] + 1 : 1;
  }

  // Decrement the count for each character in t
  for (let i = 0; i < t.length; i++) {
    // If a character in t is not in s, or its count in s is already 0, the strings are not anagrams
    if (!count[t[i]] || count[t[i]] === 0) {
      return false;
    }
    count[t[i]]--;
  }

  return true;
}

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t)); // true
