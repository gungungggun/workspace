const sleep = (ms, num) => {
	return new Promise(resolve => setTimeout(() => {
    console.log('setTimeout内:' + num)
    resolve(num)
  }, ms))
}

const each = (arr) => {
	return new Promise(resolve => {
    let count = 0
    arr.forEach(async num => {
      let r = Math.floor(Math.random() * 10) * 100
      await sleep(r, num)
        .then(rnum => {
          count += rnum
          console.log('sleep結果:' + rnum)
        })
    	console.log('sleep後:' + num)
    })
    resolve(count)
  })
}

loop = async () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  each(arr)
    .then(count => {
      console.log('end')
      console.log('count:' + count)
    })
}

loop()
