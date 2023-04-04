function findPairs(arr, n) {
  let pairs = [];

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Loop through each subsequent element
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the sum of the current pair equals n
      if (arr[i] + arr[j] === n) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

const arr = [1, 2, 3, 4, 5];
const n = 7;
const pairs = findPairs(arr, n);
console.log(pairs); // Output: [[2, 5], [3, 4]]
