function createStack() {
    let _items = [];
    this.push = (item) => {
      _items.push(item);
    };
    this.pop = () => {
      _items.pop();
    };
  }
  const stack = new createStack();
  stack.push(10);
  stack.push(5);
  stack.pop();
  console.log(stack._items) //undefined