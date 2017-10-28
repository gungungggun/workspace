a = () => {
  return new Promise((resolve, reject) => {
    console.log(1)
    resolve()
  })
}

b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2)
      resolve()
    }, 100)
  })
}

c = () => {
  return new Promise((resolve, reject) => {
    console.log(3)
    resolve()
  })
}

d = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(4)
      resolve()
    }, 100)
  })
}

e = () => {
  return new Promise((resolve, reject) => {
    console.log(5)
    resolve()
  })
}

a().then(b)
   .then(c)
   .then(d)
   .then(e)
