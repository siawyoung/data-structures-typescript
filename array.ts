
import * as _ from 'lodash'

interface arrayType {
  _array                           : Array<any>
  length()                         : number
  get(index: number)               : any
  append(item: any)                : arrayType
  insert(item: any, index: number) : arrayType
  pop()                            : any
  remove(index: number)            : any
  isEqual(any)                     : boolean
}

const array = () => {

  const prototype: arrayType = {

    _array: [],

    length() {
      return this._array.length
    },

    get(index) {
      if (0 > index || index >= this.length()) {
        throw new Error('Array index out of bounds')
      }
      return this._array[index]
    },

    append(item) {
      if (item) {
        this._array.push(item)
      }
      return this
    },

    insert(item, index) {
      if (0 > index || index > this.length()) {
        throw new Error('Array index out of bounds')
      }
      this._array.splice(index, 0, item)
      return this
    },

    pop() {
      if (this.length() <= 0) {
        throw new Error('Array is empty')
      }
      return this._array.pop()
    },

    remove(index) {
      if (0 > index || index >= this.length()) {
        throw new RangeError()
      }
      return this._array.splice(index, 1)[0]
    },

    isEqual(item) {
      return _.isEqual(this._array, item._array) || _.isEqual(this._array, item)
    }
  }

  return Object.create(prototype)

}

export default array
