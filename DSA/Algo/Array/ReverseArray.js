const arr = [1, 2, 4, 1, 6, 9];

for (i = 0; i < arr.length / 2; i++) {
  const temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

console.log("arr", arr);
