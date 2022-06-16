const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // your code here
    const queue = [start];
    const visited = new Set();
    visited.add(start)

    while (queue.length) {
        let currentNode = queue.shift();

        console.log(currentNode);

        let currentList = adjList[currentNode];

        for (let i = 0; i < currentList.length; i++) {
            if (!visited.has(currentList[i])) {
                visited.add(currentList[i]);
                queue.push(currentList[i]);
            }
        }
    }
}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                    // One possible solution:  4, 3, 5, 6, 2, 1
