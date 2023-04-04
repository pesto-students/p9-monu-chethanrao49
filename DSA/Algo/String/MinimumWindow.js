function minWindow(s, t) {
  // Initialize a hash table to count the characters in t
  const tCount = {};
  for (let i = 0; i < t.length; i++) {
    tCount[t[i]] = tCount[t[i]] ? tCount[t[i]] + 1 : 1;
  }

  // Initialize two pointers to traverse the string s
  let left = 0,
    right = 0;
  let count = t.length; // count of characters in t that are still needed
  let minWindow = "";

  // Traverse the string s using the two pointers
  while (right < s.length) {
    // If the current character is in t, decrease the count
    if (tCount[s[right]] > 0) {
      count--;
    }
    // Decrease the count for the current character in tCount
    tCount[s[right]] = tCount[s[right]] ? tCount[s[right]] - 1 : -1;
    right++;

    // If all characters in t are found, try to minimize the window by moving the left pointer
    while (count === 0) {
      // Update the minimum window if it's smaller than the current one
      if (minWindow === "" || right - left < minWindow.length) {
        minWindow = s.substring(left, right);
      }

      // If the current character is in t, increase the count
      if (tCount[s[left]] === 0) {
        count++;
      }
      // Increase the count for the current character in tCount
      tCount[s[left]] = tCount[s[left]] + 1;
      left++;
    }
  }

  return minWindow;
}

const s = "ADOBECODEBANC";
const t = "ABC";
const result = minWindow(s, t);
console.log(result); // "BANC"
