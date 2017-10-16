asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async Hello world');
      // reject('error')
    }, 20)
  })
}

asyncFunction().then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error)
});
