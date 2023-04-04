// The Edit Distance problem is a classic algorithmic problem that asks you to find the minimum number of operations required to transform one string into another. The allowed operations are:

// Insert a character
// Delete a character
// Replace a character

function editDistance(s, t) {
  // Initialize the dynamic programming table with the base cases
  const dp = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= t.length; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = 0;
      }
    }
  }

  // Fill in the rest of the table using dynamic programming
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // deletion
            dp[i][j - 1], // insertion
            dp[i - 1][j - 1] // substitution
          );
      }
    }
  }

  // Return the final value in the table
  return dp[s.length][t.length];
}

const s = "kitten";
const t = "sitting";
console.log(editDistance(s, t)); // 3
