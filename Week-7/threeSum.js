function threeSumClosest(S, target) {
  S.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let j = i + 1;
    let k = S.length - 1;

    while (j < k) {
      const sum = S[i] + S[j] + S[k];

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return closestSum;
}

const S = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(S, target)); // Output: 2