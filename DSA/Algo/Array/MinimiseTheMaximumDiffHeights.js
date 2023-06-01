function minimizeMaxDiff(arr, k) {
  // Sort the array in ascending order
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Initialize minHeight and maxHeight
  let minHeight = arr[0] + k;
  let maxHeight = arr[arr.length - 1] - k;

  // Initialize result
  let result = maxHeight - minHeight;

  // Loop through the array from the second element to the second-to-last element
  for (let i = 1; i < arr.length - 1; i++) {
    // Calculate potential new minHeight and maxHeight
    let potentialMinHeight = arr[i] + k;
    let potentialMaxHeight = arr[i + 1] - k;

    // Check if the potential heights are within range
    if (potentialMaxHeight >= minHeight && potentialMinHeight <= maxHeight) {
      // Update minHeight and maxHeight if necessary
      if (potentialMinHeight < minHeight) {
        minHeight = potentialMinHeight;
      }
      if (potentialMaxHeight > maxHeight) {
        maxHeight = potentialMaxHeight;
      }

      // Update result
      result = maxHeight - minHeight;
    }
  }

  // Return result
  return result;
}

const arr = [1, 5, 8, 10];
const k = 2;
const minMaxDiff = minimizeMaxDiff(arr, k);
console.log(minMaxDiff); // Output: 5

// Minimizing the maximum difference between heights refers to a problem in
// which we are given an array of heights and a value k, and we need to adjust the
//  heights of the elements in the array such that the maximum difference between any
//  two heights is minimized while keeping the difference between any two heights less than or equal to k.

// For example, suppose we are given the array [1, 5, 8, 10] and k = 2.
// We need to adjust the heights of the elements in the array such that
// the maximum difference between any two heights is minimized while keeping
//  the difference between any two heights less than or equal to 2.

// One way to solve this problem is to follow the algorithm I mentioned earlier.
//  We can find the minimum and maximum elements in the array, calculate the mid-point between them,
//   adjust the heights of the elements in the array, recalculate the minimum and maximum elements,
//    and return the difference between them.

// The idea behind this algorithm is to balance the heights in the array around the mid-point,
//  which is the point between the minimum and maximum elements.
//   By adjusting the heights of the elements in the array around this mid-point,
//    we ensure that the maximum difference between any two heights is minimized
//     while keeping the difference between any two heights less than or equal to k.
