class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      return "Queue is empty";
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(5);
console.log(queue.dequeue()); // Output: 5
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
console.log(queue.dequeue()); // Output: "Queue is empty"
