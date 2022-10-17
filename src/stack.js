//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.array = [];
  }
  push( element ) {
    this.array.push(element)
    return this.array
  }

  pop() {
    let deletedItem = this.array[this.array.length -1]
    this.array.pop()
    return deletedItem
  }

  peek() {
    return this.array[this.array.length -1]
  }
}
/*
let myStack = new Stack ()
myStack.push(5);
myStack.push(6);
myStack.push(7);
console.log(myStack.peek()) // 7);
console.log(myStack.pop()) //, 7);
console.log(myStack.peek()) //, 6);
console.log(myStack)
*/

module.exports = {
  Stack
};

// npm run test test/stack.test.js