let arr = [1, 3, 8, 2, 4, 1, 8, 9]
let arr2 = arr.filter((x, i, a) => {
  return a.indexOf(x) === i
})
console.log(arr2)
