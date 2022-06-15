// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
    this.count = 0;
  };

  insert(val, currentNode = this.root) {

    if (!this.root) {
      this.root = new TreeNode(val);
    } else {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left)
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right)
        }
      }
    }
    this.count++;
    return;
  };

  search(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) {
        return true;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  };


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;     //base case
    console.log(currentNode.val);  //print the value
    this.preOrderTraversal(currentNode.left); //go to left side
    this.preOrderTraversal(currentNode.right); //go to right side
    return;
  };


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;     //base case
    this.inOrderTraversal(currentNode.left); //go to left side
    console.log(currentNode.val);  //print the value
    this.inOrderTraversal(currentNode.right); //go to right side
    return;
  };


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;     //base case
    this.postOrderTraversal(currentNode.left); //go to left side
    this.postOrderTraversal(currentNode.right); //go to right side
    console.log(currentNode.val);  //print the value
    return;
  };

      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if (!this.root) return 'Empty Tree';

    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.val);

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  };

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (!this.root) return 'Empty Tree';
    let stack = []
    stack.push(this.root);

    while (stack.length > 0) {

      let node = stack.pop()
      console.log(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  };
}

module.exports = { BinarySearchTree, TreeNode };
