
interface binaryTreeNode {
  minValue(): any,
}

interface binarySearchTree {
  root()            : binaryTreeNode,
  add(item: any)    : binarySearchTree,
  search(item: any) : boolean,
  remove(item: any) : binarySearchTree,
  preOrderTraversal(fn: (item: binaryTreeNode)  => void) : void,
  inOrderTraversal(fn: (item: binaryTreeNode)   => void) : void,
  postOrderTraversal(fn: (item: binaryTreeNode) => void) : void,
  size() : number,
  isEqual(node: binarySearchTree): boolean
}

const binaryTreeNode = (item, leftItem?, rightItem?) => {

  const prototype: binaryTreeNode = {
    minValue() {
      if (this.left === null) {
        return this._data
      } else {
        return this.left.minValue()
      }
    },
  }

  return Object.assign(Object.create(prototype), {
    _data: item,
    left: leftItem || null,
    right: rightItem || null
  })
}

const tree = () => {

  const prototype: binarySearchTree = {

    root() {
      return this._root
    },

    add(item) {
      const node = binaryTreeNode(item)
      if (!this.root()) {
        this._root = node
        return this
      }

      let current = this.root()

      while (current) {
        if (node._data < current._data) {
          if (!current.left) {
            current.left = node
            break
          }
          current = current.left
        } else if (node._data > current._data) {
          if (!current.right) {
            current.right = node
            break
          }
          current = current.right
        } else {
          break
        }
      }
      return this
    },

    search(item) {
      const node = binaryTreeNode(item)

      let current = this.root()
      while (current) {
        if (current._data === node._data) {
          return true
        }
        if (current._data < node._data) {
          current = current.right
        } else {
          current = current.left
        }
      }
      return false
    },

    remove(item) {
      const _remove = (node, item) => {
        if (!node) {
          return null
        }
        if (node._data === item) {

          if (!node.left && !node.right) {
            return null
          }
          if (!node.left) {
            return node.right
          }
          if (!node.right) {
            return node.left
          }

          // if the node has 2 children
          const temp = node.right.minValue()
          node._data = temp._data
          node.right = _remove(node.right, temp)
          return node

        } else if (node._data < item) {
          node.right = _remove(node.right, item)
          return node
        } else {
          node.left = _remove(node.left, item)
          return node
        }
      }

      this._root = _remove(this.root(), item)
      return this
    },

    preOrderTraversal(fn) {
      const _preOrderTraversal = (node, fn) => {
        if (node) {
          fn(node)
          _preOrderTraversal(node.left, fn)
          _preOrderTraversal(node.right, fn)
        }
      }
      _preOrderTraversal(this.root(), fn)
    },

    inOrderTraversal(fn) {
      const _inOrderTraversal = (node, fn) => {
        if (node) {
          _inOrderTraversal(node.left, fn)
          fn(node)
          _inOrderTraversal(node.right, fn)
        }
      }
      _inOrderTraversal(this.root(), fn)
    },

    postOrderTraversal(fn) {
      const _postOrderTraversal = (node, fn) => {
        if (node) {
          _postOrderTraversal(node.left, fn)
          _postOrderTraversal(node.right, fn)
          fn(node)
        }
      }
      _postOrderTraversal(this.root(), fn)
    },

    size() {
      let size = 0
      this.preOrderTraversal(() => { size++ })
      return size
    },

    isEqual(other) {
      const _equal = (x, y) => {
        if (!x || !y) {
          return false
        }
        if (x._data === y._data) {
          if (!x.left && !y.left && !x.right && !y.right) {
            return true
          } else if (x.left && y.left && x.right && y.right) {
            return _equal(x.left, y.left) && _equal(x.right, y.right)
          } else if (x.left && y.left && !x.right && !y.right) {
            return _equal(x.left, y.left)
          } else if (!x.left && !y.left && x.right && y.right) {
            return _equal(x.right, y.right)
          } else {
            return false
          }
        } else {
          return false
        }
      }
      return _equal(this.root(), other.root())
    }
  }

  return Object.assign(Object.create(prototype), { _root: null })

}

export default tree
