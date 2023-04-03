function findPair(matrix, targetPair) {
  // Iterate over each element in the matrix and compare it with the target pair
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // If the current element matches the target pair, return its position
      if (matrix[i][j].toString() === targetPair.toString()) {
        return [i, j];
      }
    }
  }
  // If the target pair is not found, return null
  return null;
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const targetPair = [2, 3];
console.log(findPair(matrix, targetPair)); // Output: [0, 2]
