function isValidBST(root) {
  return validate(root, null, null);
}

function validate(node, min, max) {
  if (!node) {
    return true;
  }
  
  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
    return false;
  }
  
  return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}

const tree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: {
      val: 8,
      left: null,
      right: null
    }
  }
};

console.log(isValidBST(tree)); // Output: true
