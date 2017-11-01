function loop(i) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(i)
      resolve(i+1)
    }, Math.floor( Math.random() * 50 ) + 50)
  }).then(function(count) {
    if (count > 10) {
    } else {
      loop(count)
    }
  })
}

loop(0)
