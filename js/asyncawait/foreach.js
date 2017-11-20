let arr = [1, 2, 3, 4, 5]
let sequence = Promise.resolve()

const aaa = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, Math.floor( Math.random() * 50 ) + 50)
  })
}

arr.forEach((e) => {
  sequence = sequence
  .then(() => {
    return e
  })
  .then(aaa(e))
  .then((res) => {
    console.log(res)
  })
})
