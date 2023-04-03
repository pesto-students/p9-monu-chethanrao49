function findJudge(N, trust) {
  const inDegree = new Array(N + 1).fill(0);
  const outDegree = new Array(N + 1).fill(0);

  for (const [a, b] of trust) {
    outDegree[a]++;
    inDegree[b]++;
  }

  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === N - 1 && outDegree[i] === 0) {
      return i;
    }
  }

  return -1;
}

const N = 4;
const trust = [[1,3],[1,4],[2,3],[2,4],[4,3]];

console.log(findJudge(N, trust)); // Output: 3
