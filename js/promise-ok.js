function aaa () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2)
      resolve()
    }, 200)
  })
}

console.log(1)
aaa().then(() => {
  console.log(3)
})
