function loop(i) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(i)
      resolve(i+1)
    }, 100);
  }).then(function(count) {
    if (count > 10) {
    } else {
      loop(count)
    }
  })
}

loop(0)
