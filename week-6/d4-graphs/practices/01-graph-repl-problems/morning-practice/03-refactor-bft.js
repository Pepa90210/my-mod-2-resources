const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // Paste your previous code here and refactor it
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    const results = [];

    while (queue.length) {
        let currentNode = queue.shift();

        results.push(currentNode);

        for (let i = 0; i < adjList[currentNode].length; i++) {
            let newNode = adjList[currentNode][i];
            if (!visited.has(newNode)) {
                visited.add(newNode);
                queue.push(newNode);
            }
        }
    }
    console.log(results);
}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]
