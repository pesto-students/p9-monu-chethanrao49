class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}

function isMatchingPair(char1, char2) {
  if (char1 === "(" && char2 === ")") {
    return true;
  } else if (char1 === "[" && char2 === "]") {
    return true;
  } else if (char1 === "{" && char2 === "}") {
    return true;
  }
  return false;
}

function isBalancedParenthesis(exp) {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "(" || exp[i] === "[" || exp[i] === "{") {
      stack.push(exp[i]);
    } else if (exp[i] === ")" || exp[i] === "]" || exp[i] === "}") {
      if (stack.isEmpty() || !isMatchingPair(stack.pop(), exp[i])) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}


console.log(isBalancedParenthesis("((a+b)*[c-d])/e")); // true
console.log(isBalancedParenthesis("((a+b)*[c-d))/e")); // false
