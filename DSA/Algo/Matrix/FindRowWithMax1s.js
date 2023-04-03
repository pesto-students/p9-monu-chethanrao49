function findMaxOnesRow(matrix) {
  let maxOnesRow = 0;
  let maxOnesCount = 0;

  // Loop through each row in the matrix
  for (let i = 0; i < matrix.length; i++) {
    let onesCount = 0;

    // Loop through each element in the row
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        onesCount++;
      }
    }

    // If this row has more 1's than the previous max, update maxOnesRow and maxOnesCount
    if (onesCount > maxOnesCount) {
      maxOnesRow = i;
      maxOnesCount = onesCount;
    }
  }

  return maxOnesRow;
}

const matrix = [
  [0, 1, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
const maxOnesRow = findMaxOnesRow(matrix);
console.log(maxOnesRow); // Output: 1
