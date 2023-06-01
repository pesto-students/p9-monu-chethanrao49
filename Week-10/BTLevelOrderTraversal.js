function levelOrder(root) {
  if (!root) {
    return [];
  }
  
  const queue = [root];
  const levels = [];
  
  while (queue.length > 0) {
    const size = queue.length;
    const level = [];
    
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      
      if (node.left) {
        queue.push(node.left);
      }
      
      if (node.right) {
        queue.push(node.right);
      }
    }
    
    levels.push(level);
  }
  
  return levels;
}


const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};

console.log(levelOrder(tree)); // Output: [[3], [9, 20], [15, 7]]
