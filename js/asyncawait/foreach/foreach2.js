const sleep = (ms, num) => {
	return new Promise(resolve => setTimeout(() => {
    console.log('setTimeout内:' + num)
    resolve(num)
  }, ms))
}

loop = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  arr.forEach(num => {
    let r = Math.floor(Math.random() * 10) * 100
    sleep(r, num)
      .then(rnum => console.log('sleep結果:' + rnum))
  	console.log('sleep後:' + num)
  })
  console.log('end')
}

loop()
