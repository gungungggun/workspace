function wait (v) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(v)
    }, 1000)
  })
}

async function result () {
  [result1, result2, result3] = await Promise.all([
    wait(1),
    wait(2),
    wait(3)
  ])
  console.log(result1 + result2 + result3)
}

result()
