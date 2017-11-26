let a = ["a", "aa", "aaa"]
let b = ["b", "bb", "bbb"]

let c = a.concat(b)
console.log(c)

Array.prototype.push.apply(a, b)
console.log(a)
