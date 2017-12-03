let arr = [4, 2, 9, 0, 5, 1, 7, 5]
let sort = arr.sort()
console.log(sort) // [0, 1, 2, 4, 5, 5, 7, 9]
console.log(arr) // [0, 1, 2, 4, 5, 5, 7, 9]

let arr2 = [4, 2, 9, 0, 5, 5, 1, 7]
let sort2 = arr2.sort((a, b) => {
  if (a < b) return 1
  if (a > b) return -1
  return 0
})
console.log(sort2) // [9, 7, 5, 5, 4, 2, 1, 0]
console.log(arr2) // [9, 7, 5, 5, 4, 2, 1, 0]

let arr3 = [4, 2, 9, 0, 5, 5, 1, 7]
let sort3 = arr3.sort((a, b) => {
  return b - a
})
console.log(sort3) // [9, 7, 5, 5, 4, 2, 1, 0]
console.log(arr3) // [9, 7, 5, 5, 4, 2, 1, 0]

let arr4 = [4, 2, 9, 0, 5, 5, 1, 7]
let sort4 = arr4.sort((a, b) => {
  if (b === 0) return 1
  return b - a
})
console.log(sort4) // [0, 9, 7, 5, 5, 4, 2, 1]
console.log(arr4) // [0, 9, 7, 5, 5, 4, 2, 1]
