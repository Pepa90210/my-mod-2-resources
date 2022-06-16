const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printDepthFirst(start) {
    // your code here
    let stack = [start];
    let visited = new Set();
    visited.add(start);

    while (stack.length) {
        let currentNode = stack.pop();

        console.log(currentNode);

        for (let i = 0; i < adjList[currentNode].length; i++) {
            let newNode = adjList[currentNode][i];
            if (!visited.has(newNode)) {
                visited.add(newNode);
                stack.push(newNode);
            }
        }
    }
}

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 1, 3
