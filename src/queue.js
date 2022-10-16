//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
/*class Queue {

  getUnderlyingList() {

  }

  enqueue( value ) {
  }

  dequeue() {
  }
}
*/



class Queue {
  constructor() {
    this.first = null;
  }
  enqueue(value) {
    let newNode = new ListNode(value)
    if (!this.first) {
      this.first = newNode;
      return
    }
      let current = this.first;
      while (current) {
        if (!current.next) {
          current.next = newNode;
          return;
        }
        current = current.next;
      }
      current = newNode
  }

  dequeue() {
    let current = this.first
    if (current) {
      let value = current.value;
      current = current.next;
      this.first = current;
      return value;
    }
  }

  getUnderlyingList() {
    return this.first;
  }
}


module.exports = {
  Queue
};


//   npm run test test/queue.test.js