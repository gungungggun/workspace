let arr = [
 {
    "name": "Tanaka",
    "score": 80
  },
  {
    "name": "Sasaki",
    "score": 85
  },
  {
    "name": "Sato",
    "score": 72
  }
]
let sort = arr.sort()
console.log(arr)
console.log(sort)

let sort2 = arr.sort((a, b) => {
  return a.score - b.score
})
console.log(arr)
console.log(sort2)
