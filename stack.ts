
/*

Array-based Stack

 */

import * as _ from 'lodash'

interface stackType {
  _stack          : Array<any>,
  size()          : number,
  push(item: any) : stackType,
  pop(item: any)  : any,
  peek()          : any,
  isEqual(item: stackType) : boolean
}

const stack = () => {

  const prototype: stackType = {

    _stack: [],

    size() {
      return this._stack.length
    },

    push(item) {
      if (item) {
        this._stack.push(item)
      }
      return this
    },

    pop(item) {
      if (this.size() <= 0) {
        throw new Error('Stack is empty')
      }
      return this._stack.pop()
    },

    peek() {
      if (this.size() <= 0) {
        return null
      }
      return this._stack[this._stack.length - 1]
    },

    isEqual(stack) {
      return _.isEqual(this._stack, stack._stack)
    },

  }

  return Object.create(prototype)

}

export default stack
