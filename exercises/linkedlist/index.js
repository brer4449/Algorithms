// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // // the second argument is essentially passing in the existing node as the next property to our current node
    // const node = new Node(data, this.head)
    // // this line repairs the reference to our current node vs. the head referencing the old node
    // this.head = node
    // simplified as one line
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    // this.head will always point to the first node in our list
    return this.head;
  }

  getLast() {
    // was able to do this on my own! Yahoo!
    let node = this.head;
    if (!node) {
      return null;
    } else {
      while (node) {
        if (!node.next) {
          return node;
        } else {
          node = node.next;
        }
      }
    }
  }

  clear() {
    // do NOT need to delete all the nodes or w/e, just need to cut off the "head" of the snake (ehhhh??)
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    // this solution will work even if our list only has one node
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    // just severe the connection between the second to last node and the last node
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // There are some existing nodes in the chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(idx) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === idx) {
        // if this is true, then we've found the node we're looking for
        return node;
      } else {
        counter++;
        // if the next node is the end, then node will be set to null and we'll exit the while loop
        node = node.next;
      }
    }
    // if we didn't enter the while loop, then node was null and we can just return null
    return null;
  }

  removeAt(idx) {
    if (!this.head) {
      return;
    }

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = getAt(idx - 1);
    // checking if the index is out of bounds or not
    // added the OR to check if the size of the node list minus one has a next value or not
    if (!previous || !previous.next) {
      return;
    }
    // moving where the next pointer is pointing to the one after the next one
    previous.next = previous.next.next;
  }
}

module.exports = { Node, LinkedList };
