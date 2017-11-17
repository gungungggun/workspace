
a = () => {
  return new Promise((resolve, reject) => {
    console.log(1)
    resolve(1)
  })
}

b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2)
      resolve(2)
    }, 100)
  })
}

c = () => {
  return new Promise((resolve, reject) => {
    console.log(3)
    resolve(3)
  })
}

d = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(4)
      resolve(4)
    }, 100)
  })
}

e = () => {
  return new Promise((resolve, reject) => {
    console.log(5)
    resolve(5)
  })
}

Promise.all([a(), b(), c(), d(), e()])
  .then((res) => {
    console.log('----')
    console.log(res)
    console.log('OK')
  })
