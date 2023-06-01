function searchMatrix(matrix, target) {
  // Loop through each row in the matrix
  for (let i = 0; i < matrix.length; i++) {
    // Loop through each element in the row
    for (let j = 0; j < matrix[i].length; j++) {
      // If the current element matches the target, return true
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  // If the target element was not found, return false
  return false;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const target = 5;
const found = searchMatrix(matrix, target);
console.log(found); // Output: true
