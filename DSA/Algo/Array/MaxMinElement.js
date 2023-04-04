const arr = [9, 10, 1, 2, 45, 8];

const maxMinElementFinder = (arr) => {
  let maxElement = arr[0];
  let minElement = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }

    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }

  return console.log("MaxElement", maxElement, "minElement", minElement);
};

maxMinElementFinder(arr);
