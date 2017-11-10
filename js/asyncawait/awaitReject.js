function wait (x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x > 0) {
        resolve(1)
      } else {
        reject('エラー')
      }
    }, 1000)
  })
}

async function result () {
  try {
    let result1 = await wait(0)
    console.log(result1)
  } catch (err) {
    console.log(err)
  }
}

result()
