let arr = [5, 3, 8, 1, 4, 9, 2, 7];
let k = 3;

// Find the kth maximum element
let sortedArr = arr.sort((a, b) => b - a); // sort in descending order
let kthMax = sortedArr[k - 1];

console.log(kthMax); // Output: 5

// Find the kth minimum element
sortedArr = arr.sort((a, b) => a - b); // sort in ascending order
let kthMin = sortedArr[k - 1];

console.log(kthMin); // Output: 3
