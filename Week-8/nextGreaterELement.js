class NextGreaterElement {
  constructor(arr) {
    this.arr = arr;
    this.stack = [];
    this.result = new Array(arr.length).fill(-1);
  }

  solve() {
    for (let i = 0; i < this.arr.length; i++) {
      while (this.stack.length > 0 && this.arr[i] > this.arr[this.stack[this.stack.length - 1]]) {
        let index = this.stack.pop();
        this.result[index] = this.arr[i];
      }
      this.stack.push(i);
    }
    return this.result;
  }
}

const nge = new NextGreaterElement([1, 3, 2, 4]);
const result = nge.solve(); // [3, 4, 4, -1]
console.log(result);
