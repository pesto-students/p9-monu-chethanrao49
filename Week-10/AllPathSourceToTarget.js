function allPathsSourceTarget(graph) {
  const paths = [];

  function dfs(node, path) {
    if (node === graph.length - 1) {
      paths.push(path);
      return;
    }

    for (const neighbor of graph[node]) {
      dfs(neighbor, [...path, neighbor]);
    }
  }

  dfs(0, [0]);
  return paths;
}

const graph = [[1,2],[3],[3],[]];

console.log(allPathsSourceTarget(graph)); // Output: [[0,1,3],[0,2,3]]
