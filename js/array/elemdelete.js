let arr = [1, 2, 3, 4, 5, 0, 9, 8, 7, 6]
let del = 0
arr = arr.filter((e) => {
  return (e !== del)
})
console.log(arr)

let arr2 = [
  {
    id: 'abcdefg',
    name: 'Jhon'
  },
  {
    id: 'fijklmn',
    name: 'Jack'
  },
  {
    id: 'opqrstu',
    name: 'Mary'
  },
  {
    id: 'vwxyz',
    name: 'Lucy'
  }
]
let del2 = 'opqrstu'
arr2 = arr2.filter((e) => {
  return (e.id !== del2)
})
console.log(arr2)
