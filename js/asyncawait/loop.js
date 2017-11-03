function loop(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i)
      resolve(i+1)
    }, Math.floor( Math.random() * 50 ) + 50)
  }).then((count) => {
    if (count > 10) {
    } else {
      loop(count)
    }
  })
}

loop(0)
