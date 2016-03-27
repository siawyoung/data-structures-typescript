
import stack from '../js/stack'
import test from 'ava'

test('Stack push/size', t => {
  const x = stack()
  x.push(1)
  t.is(x.size(), 1)
})

test('Stack isEqual', t => {
  const x = stack()
  const y = stack()

  x.push(1)
  y.push(1)
  t.ok(x.isEqual(
    y
  ))
  y.push(2)
  t.notOk(x.isEqual(
    y
  ))

})

test('Stack pop', t => {
  const x = stack()
  x.push(1)
  t.is(x.size(), 1)
  t.is(x.pop(), 1)
  t.is(x.size(), 0)
})

test('Stack peek', t => {
  const x = stack()
  x.push(1).push(2)
  t.is(x.peek(), 2)
})