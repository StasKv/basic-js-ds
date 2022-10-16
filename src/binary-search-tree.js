const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class ABinarySearchTree {

  constructor (data) {
    this.route = null;
  }
  
  root() {


    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add( /*data*/) {
  }

  has(/* data */) {
  }

  find(/* data */) {
  }

  remove(/* data */) {
  }

  min() {

  }

  max() {

  }
}



//node .\binary-search-tree.js

/*class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}*/

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.treeRoot) {
      return (this.treeRoot = newNode);
    }
    let current = this.treeRoot;
    while (current) {
      if (newNode.data > current.data) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      }
    }
  }

  has(data) {
    const newNode = new Node(data);
    if (!this.treeRoot) {
      return false;
    }
    let current = this.treeRoot;
    while (current) {
      if (current.data === newNode.data) {
        return true;
      } else if (current.data > newNode.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    const newNode = new Node(data);
    if (!this.treeRoot) {
      return null;
    }
    let current = this.treeRoot;
    while (current) {
      if (current.data === newNode.data) {
        return current;
      } else if (current.data > newNode.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        console.log(node)
        if (!node.left && !node.right) {
          console.log(node);
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (node.left && node.right) {
          let leftMaxNode = node.left;
          while (leftMaxNode.right) {
            leftMaxNode = leftMaxNode.right;
          }
          node.data = leftMaxNode.data;
          console.log(node.right)
          node.left = removeNode(node.left, leftMaxNode.data);
          return node;
        }
      }
    }
  }
  /*    const newNode = new Node(data);
    if (!this.treeRoot) {
      return null;
    }
    let current = this.treeRoot;
    let maxLeftNode = null;
    let previousNode
    while (current) {
      
      if (current.data === newNode.data) {
        if (!current.left && !current.right) {
          current = null;
          console.log(current)
          return
        }
        if (!current.left) {
          return current = current.right;
        }
        if (!current.right) {
          return current = current.left;
        }
        if (current.left && current.right) {
          console.log('here too')
          maxLeftNode = current.left;
          previousNode = current;
          while (maxLeftNode.right) {
            previousNode = maxLeftNode;
            console.log(previousNode)
            maxLeftNode = maxLeftNode.right;
          }
          current.data = maxLeftNode.data;
          console.log(maxLeftNode.right)
          if (current.data === previousNode.right.data) {
            console.log('rigth here')
            previousNode.right = null;
          } else {
            console.log('left here')
            previousNode.left = null;
          }
          return;
        }
      } else if (current.data > newNode.data) {
        current = current.left;
      } else {
        current = current.right;
        console.log('here'+ current)
      }
    }
    */

  min() {
    if (!this.treeRoot) {
      return null;
    }
    let current = this.treeRoot;
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }
    let current = this.treeRoot;
    while (current.right) {
      current = current.right
    }
    return current.data
  }
}

/*let MyBinarySearchTree = new BinarySearchTree();
MyBinarySearchTree.add(15);
MyBinarySearchTree.add(5);
MyBinarySearchTree.add(7);
MyBinarySearchTree.add(6);
MyBinarySearchTree.add(8);
MyBinarySearchTree.add(2);
MyBinarySearchTree.add(3);
MyBinarySearchTree.add(1);
MyBinarySearchTree.add(19);
MyBinarySearchTree.add(16);
MyBinarySearchTree.add(22);
MyBinarySearchTree.remove(7);
console.log(MyBinarySearchTree);
console.log(MyBinarySearchTree.min());
console.log(MyBinarySearchTree.max());*/

module.exports = {
  BinarySearchTree
};