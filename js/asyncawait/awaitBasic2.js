function wait () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(5)
    }, 1000)
  })
}

async function result () {
  let result1 = await wait()

  console.log('===start===')
  for (let i = 1; i < result1; i++) {
    console.log(i)
  }
  console.log('===end===')
}

result()
