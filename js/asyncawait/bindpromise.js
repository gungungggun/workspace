
a = () => {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}

b = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 2)
    }, 100)
  })
}

c = (x) => {
  return new Promise((resolve, reject) => {
    resolve(x + 3)
  })
}

// だめなやつ
a().then(res1 => {
  console.log(res1)
  b(res1).then(res2 => {
    console.log(res2)
    c(res2).then(res3 => {
      console.log(res3)
    })
  })
})

// いいやつ
a()
  .then(b.bind(null))
  .then(c.bind(null))
  .then(res => {
    console.log(res)
  })
