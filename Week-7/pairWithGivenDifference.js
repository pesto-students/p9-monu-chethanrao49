function findPairWithGivenDifference(A, B) {
  const map = new Map();

  for (let i = 0; i < A.length; i++) {
    const num1 = A[i] + B;
    const num2 = A[i] - B;

    if (map.has(num1) || map.has(num2)) {
      return 1;
    }

    map.set(A[i], i);
  }

  return 0;
}

const A1 = [5, 10, 3, 2, 50, 80];
const B1 = 78;
console.log(findPairWithGivenDifference(A1, B1)); // Output: 1

const A2 = [-10, 20];
const B2 = 30;
console.log(findPairWithGivenDifference(A2, B2)); // Output: 1