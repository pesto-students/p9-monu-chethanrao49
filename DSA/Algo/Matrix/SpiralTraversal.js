// Spiral traversal on a matrix refers to visiting the elements of a matrix in a spiral pattern, starting from the top-left corner and moving towards the center in a clockwise direction.

// Here's an algorithm that can be used to traverse a matrix in a spiral pattern:

// Initialize variables:
// top as the index of the first row
// bottom as the index of the last row
// left as the index of the first column
// right as the index of the last column
// dir as the current direction of traversal (right, down, left, or up)
// While top <= bottom and left <= right:
// If dir is "right":
// Traverse the elements of the top row from left to right
// Increment top by 1
// Change dir to "down"
// If dir is "down":
// Traverse the elements of the right column from top to bottom
// Decrement right by 1
// Change dir to "left"
// If dir is "left":
// Traverse the elements of the bottom row from right to left
// Decrement bottom by 1
// Change dir to "up"
// If dir is "up":
// Traverse the elements of the left column from bottom to top
// Increment left by 1
// Change dir to "right"
// Return the visited elements in the order they were traversed.
// Here's the JavaScript code to implement this algorithm:

function spiralTraversal(matrix) {
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  let dir = "right";
  let result = [];

  while (top <= bottom && left <= right) {
    if (dir === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      dir = "down";
    } else if (dir === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      dir = "left";
    } else if (dir === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      dir = "up";
    } else if (dir === "up") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      dir = "right";
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralTraversal(matrix));
