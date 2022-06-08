class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    // [newNode.next, this.head] = [this.head, newNode];
    [this.head, newNode.next] = [newNode, this.head];
    this.length++;
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);  //create the new node
    let currentNode = this.head;  //we need to test if we are at the tail
    if (currentNode === null) this.head = newNode;
    else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    // else {
    //   for (let i = 0; i < this.length; i++) {
    //     if (currentNode.next === null) {
    //       currentNode.next = newNode;
    //     } else {
    //       currentNode = currentNode.next;
    //     };
    //   }
    // }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
