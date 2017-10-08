let arr = [7, 1, 3, 2, 10, 5, 8, 0]
arr.sort((a,b) => {
  if ( a < b ) return -1
  if ( a > b ) return 1
  return 0
})

console.log(arr)
