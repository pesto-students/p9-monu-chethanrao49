function hasPath(graph, start, end) {
  const visited = new Set();
  const queue = [start];
  
  while (queue.length > 0) {
    const current = queue.shift();
    
    if (current === end) {
      return true;
    }
    
    visited.add(current);
    
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
  
  return false;
}

const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

console.log(hasPath(graph, 0, 3)); // Output: true
console.log(hasPath(graph, 3, 0)); // Output: false

