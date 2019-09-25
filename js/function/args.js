test = function() {
  return {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
  }
}

let x = test()

console.log(x)

let {a, b} = test()

console.log(a)
console.log(b)
//console.log(c)

test2 = function({a2, b2}) {
  console.log(a2)
  console.log(b2)
}

test2({a2: 'aaa2'})
