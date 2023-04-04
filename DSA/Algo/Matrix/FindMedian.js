function findMedian(matrix) {
  // Flatten the matrix into a single array and sort it
  const flattened = matrix.flat().sort((a, b) => a - b);
  const length = flattened.length;

  // Compute the median
  if (length % 2 === 0) {
    // If the array has an even number of elements, return the average of the two middle elements
    const mid = length / 2;
    return (flattened[mid - 1] + flattened[mid]) / 2;
  } else {
    // If the array has an odd number of elements, return the middle element
    const mid = Math.floor(length / 2);
    return flattened[mid];
  }
}

// Example usage:
const matrix = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];
console.log(findMedian(matrix)); // Output: 5
