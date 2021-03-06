const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    // console.log(queue);
    let cPath = queue.shift();
    let lastNode = cPath[cPath.length - 1];

    //DO THE THING
    if (lastNode === end) return cPath;

    for (let neighbor of adjList[lastNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        // let copyPath = cPath.slice();
        // copyPath.push(neighbor);
        // queue.push(copyPath);
        queue.push([...cPath, neighbor]);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
