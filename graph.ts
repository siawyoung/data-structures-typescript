
import * as _ from 'lodash'

interface graphType {
  addNode(item: any): void
  removeNode(item: any): void
  addEdge(n1: any, n2: any): void
  removeEdge(n1: any, n2: any): void
  traverseDFS(node: any, fn: (item: any) => void ): void
  traverseBFS(node: any, fn: (item: any) => void ): void
}

const graph = () => {
  const prototype: graphType = {

    addNode(item) {
      this.nodes.push(item)
      this.edges[item] = []
    },

    removeNode(item) {
      this.nodes = this.nodes.filter(node => {
        return node != item
      })

      while (this.edges[item].length) {
        let adjacentNode = this.edges[item].pop()
        this.removeEdge(item, adjacentNode)
      }
    },

    addEdge(n1, n2) {
      this.edges[n1].push(n2)
      this.edges[n2].push(n1)
      this.numberOfEdges++
    },

    removeEdge(n1, n2) {
      if (this.edges[n1]) {
        this.edges[n1] = this.edges[n1].filter(node => {
          return node != n2
        })
      }
      if (this.edges[n2]) {
        this.edges[n2] = this.edges[n2].filter(node => {
          return node != n1
        })
      }
    },

    traverseDFS(node, fn) {

      if (this.nodes.indexOf(node) === -1) {
        throw new Error('Node not in graph')
      }

      const _dfs = (node, visitedNodes, fn) => {
        visitedNodes[node] = true
        if (this.edges[node] !== undefined) {
          fn(node)
        }
        this.edges[node].forEach(adjNode => {
          if (!visitedNodes[adjNode]) {
            this._dfs(adjNode, visitedNodes, fn)
          }
        })
      }

      _dfs(node, {}, fn)

    },

    traverseBFS(node, fn) {

      if (this.nodes.indexOf(node) === -1) {
        throw new Error('Node not in graph')
      }

      const queue = [node]
      const visitedNodes = {}
      visitedNodes[node] = true

      while (queue.length) {
        let currNode = queue.shift()
        fn(currNode)
        this.edges[currNode].forEach(adjNode => {
          if (!visitedNodes[adjNode]) {
            visitedNodes[adjNode] = true
            queue.push(adjNode)
          }
        })
      }
    }
  }

  return Object.assign(Object.create(prototype), {
    nodes: [],
    edges: {},
    numberOfEdges: 0
  })
}

export default graph
