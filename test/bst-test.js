
import tree from '../js/bst'
import test from 'ava'

test('Tree size', t => {
  const x = tree()
  t.is(x.size(), 0)
  x.add(1)
  t.is(x.size(), 1)

  x.add(2).add(3)

  t.is(x.size(), 3)
})

test('Tree add/isEqual', t => {
  const x = tree()
  const y = tree()

  x.add(1).add(2)
  y.add(1).add(2)

  t.ok(x.isEqual(
    y
  ))

  y.add(3)

  t.notOk(x.isEqual(
    y
  ))
})

test('Tree remove', t => {
  const x = tree()
  x.add(1).add(2).add(4).add(15).add(3)

  x.remove(15)
  t.is(x.size(), 4)

  x.remove(5)
  t.is(x.size(), 4)

  x.remove(3)
  t.is(x.size(), 3)
})

test('Tree search', t => {
  const x = tree()
  x.add(1).add(2)

  t.ok(x.search(2))
  t.notOk(x.search(3))
})

// not a full test of the correct ordering
// but at least tests that the traversal visits all nodes
test('Tree traversals', t => {
  const x = tree()
  const y = tree()

  x.add(1).add(2).add(3).add(4)
  y.add(1).add(2).add(3).add(4)

  let size = 0
  x.inOrderTraversal(() => size++)
  t.is(size, y.size())

  size = 0
  x.postOrderTraversal(() => size++)
  t.is(size, y.size())
})
