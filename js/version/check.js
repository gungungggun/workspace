let v1 = 'v0.1.1'
let v2 = 'v0.1.2'
let v3 = 'v0.1.1'
let v4 = 'v0.1.6'
let v5 = '0.1.1'
let v6 = '0.2.1'
let v7 = 'v1.2.1'
let v8 = 'v0.1.0'
let v9 = 'v0.0.8'

check = (v1, v2) => {
  const v1s = v1.split('v')
  const v2s = v2.split('v')

  v1 = v1s[v1s.length - 1]
  v2 = v2s[v2s.length - 1]

  const v1dots = v1.split('.')
  const v2dots = v2.split('.')

  if (v1dots[0] > v2dots[0]) {
    return '>'
  } else if (v1dots[0] < v2dots[0]) {
    return '<'
  }

  if (v1dots[1] > v2dots[1]) {
    return '>'
  } else if (v1dots[1] < v2dots[1]) {
    return '<'
  }

  if (v1dots[2] > v2dots[2]) {
    return '>'
  } else if (v1dots[2] < v2dots[2]) {
    return '<'
  }

  return '='
}

console.log(v1 + ' / ' + v2)
console.log(check(v1, v2))

console.log(v1 + ' / ' + v3)
console.log(check(v1, v3))

console.log(v1 + ' / ' + v4)
console.log(check(v1, v4))

console.log(v1 + ' / ' + v5)
console.log(check(v1, v5))

console.log(v1 + ' / ' + v6)
console.log(check(v1, v6))

console.log(v1 + ' / ' + v7)
console.log(check(v1, v7))

console.log(v1 + ' / ' + v8)
console.log(check(v1, v8))

console.log(v1 + ' / ' + v9)
console.log(check(v1, v9))
