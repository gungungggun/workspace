function wait () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

async function result () {
  let result1 = await wait()
  console.log(result1)

  let result2 = wait()
  console.log(result2)

  wait().then(result3 => {
    console.log(result3)
  })
}

result()
