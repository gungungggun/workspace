let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = arr.map(e => e * 2)
console.log(result) // [2, 4, 6, 8, 10 ,12, 14, 16, 18]
console.log(arr)

let arr2 = [
  {
    "name":  "野村",
    "type": "H"
  },
  {
    "name":  "小山",
    "type": "P"
  },
  {
    "name":  "佐藤",
    "type": "J"
  },
  {
    "name":  "石田",
    "type": "U"
  },
  {
    "name":  "中田",
    "type": "J"
  }
]
let types = {
  "P": "小学校",
  "J": "中学校",
  "H": "高校",
  "U": "大学"
}
let result2 = arr2.map((e) => {
  e.type = types[e.type]
  return e
})
console.log(result2)
