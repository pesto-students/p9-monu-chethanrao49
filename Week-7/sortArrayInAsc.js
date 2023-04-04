function sortArray(arr) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  
  while (mid <= high) {
    switch(arr[mid]) {
      case 0:
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
        break;
    }
  }
  
  return arr;
}


const arr = [0, 2, 1, 2, 0];
console.log(sortArray(arr)); // Output: [0, 0, 1, 2, 2]