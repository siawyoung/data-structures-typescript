
interface queueType {
  length()           : number
  enqueue(item: any) : queueType
  dequeue(item: any) : any
  peek()             : any
}

const queue = () => {
  const prototype: queueType = {
    length() {
      return this._queue.length
    },

    enqueue(item) {
      this._queue.push(item)
      return this
    },

    dequeue(item) {
      if (this.length() <= 0) {
        throw new Error('Queue is empty')
      }
      return this._queue.shift()
    },

    peek() {
      if (this.length() <= 0) {
        throw new Error('Queue is empty')
      }
      return this._queue[0]
    }
  }

  return Object.assign(Object.create(prototype), { _queue: [] })
}

export default queue
