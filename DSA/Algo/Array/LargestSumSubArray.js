// Kadane's algorithm is an efficient algorithm to find the maximum sum subarray in an array of integers.
//  It works by iterating over the array and keeping track of the maximum sum of a subarray ending at each position.
//  The maximum of these maximum sums is the maximum sum subarray.

const findLargestSumSubarray = (arr) => {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
};

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
const largestSum = findLargestSumSubarray(arr);
console.log(largestSum); // Output: 7
