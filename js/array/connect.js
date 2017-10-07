let a = [1, 2, 3]
let b = [1, 2, 3]
let c = Array.prototype.push.apply(a, b)

console.log(a)
console.log(b)
console.log(c)

let a2 = [1, 2, 3]
let b2 = [1, 2, 3]
let c2 = a2.concat(b2)
console.log(a2)
console.log(b2)
console.log(c2)
