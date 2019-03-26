const a = [...Array(10).keys()]
console.log(a)

const b = [...Array(10).keys()].map(i => ++i)
console.log(b)

const c = [...Array(10).keys()].map(i => i * 0.5)
console.log(c)
