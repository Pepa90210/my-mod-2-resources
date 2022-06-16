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
        let copyPath = cPath.slice();
        copyPath.push(neighbor);
        queue.push(copyPath);
      }
    }
  }
  return false;
}

function degreesOfSeparation(start, end) {
  let shortestPath = aShortestPath(start, end);
  if (!shortestPath) return false;
  return shortestPath.length - 1;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
