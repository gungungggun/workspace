function wait (v) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(v)
    }, 1000)
  })
}

async function result () {
  let result1 = await wait(1)
  let result2 = await wait(2)
  let result3 = await wait(3)
  console.log(result1 + result2 + result3)
}

result()
