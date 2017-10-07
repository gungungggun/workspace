let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = arr.reduce((p, c) => p + c)
console.log(result) // 45

let result2 = 0
arr.forEach((e) => {
  result2 += e
})
console.log(result2) // 45
