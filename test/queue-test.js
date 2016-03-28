
import queue from '../js/queue'
import test from 'ava'

test('Queue length/enqueue', t => {
  const x = queue()
  t.is(x.length(), 0)
  x.enqueue(1)
  t.is(x.length(), 1)
  x.enqueue(2).enqueue(3)
  t.is(x.length(), 3)
})

test('Queue dequeue', t => {
  const x = queue()
  x.enqueue(1).enqueue(2)
  t.is(x.length(), 2)
  t.is(x.dequeue(), 1)
  t.is(x.length(), 1)
})

test('Queue peek', t => {
  const x = queue()
  x.enqueue(1).enqueue(2)
  t.is(x.peek(), 1)
})