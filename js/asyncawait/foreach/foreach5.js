Array.prototype.awaitForEach = async function(fn){
  for(const [k, v] of Object.entries(this)){
    await fn(v, k, this)
  }
}

const sleep = (ms, num) => {
	return new Promise(resolve => setTimeout(() => {
    console.log('setTimeout内:' + num)
    resolve(num)
  }, ms))
}

loop = async () => {
  let count = 0
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  await arr.awaitForEach(async num => {
    let r = Math.floor(Math.random() * 10) * 100
    await sleep(r, num)
      .then(rnum => {
        count += rnum
        console.log('sleep結果:' + rnum)
      })
  	console.log('sleep後:' + num)
  })
  console.log('end')
  console.log('count:' + count)
}

loop()
