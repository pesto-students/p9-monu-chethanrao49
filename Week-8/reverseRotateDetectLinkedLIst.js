class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;
    leader.next = nodeToRemove.next;
    if (index === this.length - 1) {
      this.tail = leader;
    }
    this.length--;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let count = 0;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

    // Rotate the linked list by k nodes
  rotate(k) {
    if (k == 0) {
      return;
    }

    // Find the length of the linked list
    let current = this.head;
    let len = 1;
    while (current.next) {
      current = current.next;
      len++;
    }

    // If k is greater than the length of the linked list, take the modulo of k with the length
    k = k % len;

    // If k is 0, the linked list remains unchanged
    if (k == 0) {
      return;
    }

    // Move the last k nodes to the front of the linked list
    let prev = null;
    let newHead = this.head;
    current = this.head;
    for (let i = 0; i < len - k; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    newHead = current;
    while (current.next) {
      current = current.next;
    }
    current.next = this.head;
    this.head = newHead;
  }


  // Detect if there is a loop in the linked list
  detectLoop() {
    let slow = this.head;
    let fast = this.head;

    while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }

  // Print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.prepend(16);
myLinkedList.insert(2, 7);
myLinkedList.remove(2);
console.log(myLinkedList); // Output: { head: { value: 16, next: { value: 10, next: { value: 5, next: null } } }, tail: { value: 5, next: null }, length: 3 }
myLinkedList.reverse();
console.log("Reverse linked list:");
console.log(myLinkedList); // Output: { head: { value: 5, next: { value: 10, next: { value: 16, next: null } } }, tail: { value: 16, next: null }, length: 3 }

myLinkedList.rotate(2)
console.log("Rotated linked list:");
console.log(myLinkedList)


// Create a loop for testing
myLinkedList.head.next.next.next.next.next = myLinkedList.head.next.next;

myLinkedList.detectLoop(); // Output: "Loop detected"