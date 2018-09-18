const sleep = require('sleep');

Array.prototype.awaitForEach = async function(fn){
	for(const [k, v] of Object.entries(this)){
		await fn(v, k, this)
	}
}

let arr = [1, 2, 3]

loop = async () => {
  await arr.awaitForEach(async e => {
	  await sleep.sleep(1)
	  console.log(e, Date.now())
  })
  console.log("end", Date.now())
}

loop()
