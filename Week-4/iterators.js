let fibonacciNumber = {
  firstNum: 0,
  secondNum: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    let sum = this.firstNum + this.secondNum;
    this.firstNum = this.secondNum;
    this.secondNum = sum;
    return  { value: sum, done: sum > 10 } 
  },
};

console.log(fibonacciNumber.firstNum)
console.log(fibonacciNumber.secondNum)
for (let num of fibonacciNumber) {
  console.log(num);
}
