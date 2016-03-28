var proto = {
  a: function() {
    return this.b
  },
  c() {
    return this.b
  }
}

x = Object.assign(Object.create(proto), {b: 2})
console.log(x)
console.log(x.a())
console.log(x.c())

var thing = {
  data: 1,
  left: {
    data: 2,
    left: 5,
    right: {
      data: 10,
      left: null,
      right: {
        data: 12,
        left: null,
        right: {
          data: 14,
          left: {
            data: 12,
            left: null,
            right: null
          },
          right: {
            data: 14,
            left: null,
            right: null
          }
        }
      }
    }
  },
  right: {
    data: 1,
    left: null,
    right: null
  }
}

var thing2 = {
  data: 1,
  left: {
    data: 2,
    left: 5,
    right: {
      data: 10,
      left: null,
      right: {
        data: 12,
        left: null,
        right: {
          data: 14,
          left: {
            data: 12,
            left: null,
            right: null
          },
          right: {
            data: 14,
            left: null,
            right: null
          }
        }
      }
    }
  },
  right: {
    data: 1,
    left: null,
    right: null
  }
}

var isEqual = function(x, y) {

  if (!x || !y) {
    return false
  }

  if (x.data === y.data) {

    if (!x.left && !y.left && !x.right && !y.right) {
      return true
    } else if (x.left && y.left && x.right && y.right) {
      return isEqual(x.left, y.left) && isEqual(x.right, y.right)
    } else if (x.left && y.left && !x.right && !y.right) {
      return isEqual(x.left, y.left)
    } else if (!x.left && !y.left && x.right && y.right) {
      return isEqual(x.right, y.right)
    } else {
      return false
    }

  } else {
    return false
  }

}

console.log(isEqual(thing, thing2));