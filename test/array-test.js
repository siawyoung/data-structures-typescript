
import array from '../js/array'
import test from 'ava'

test('Array append', t => {
  const x = array()
  x.append(1).append(2)
  t.ok(x.isEqual(
    [1,2]
  ))
})

test('Array get', t => {
  const x = array()
  x.append(1)
  t.same(x.get(0), 1)
  x.append(2)
  t.same(x.get(1), 2)
})

test('Array length', t => {
  const x = array()
  x.append(1)
  t.same(x.length(), 1)
  x.append(2)
  t.same(x.length(), 2)
})

test('Array insert', t => {
  const x = array()
  x.append(1)
  x.append(3)
  x.insert(2, 1)
  t.ok(x.isEqual(
    [1,2,3]
  ))
})

test('Array pop', t => {
  const x = array()
  x.append(1)
  x.append(2)
  t.same(x.pop(), 2)
  t.ok(x.isEqual(
    [1]
  ))
})

test('Array remove', t => {
  const x = array()
  x.append(1)
  x.append(2)
  x.append(3)
  t.same(x.remove(1), 2)
  t.ok(x.isEqual(
    [1,3]
  ))
})

test('Array isEqual', t => {
  const x = array()
  const y = array()
  x.append(1)
  y.append(1)
  t.ok(x.isEqual(
    y
  ))
  y.append(2)
  t.notOk(x.isEqual(
    y
  ))
})
