function loop(i) {
  setTimeout(() => {
    console.log(i)
    if (i < 10) {
      loop(i+1)
    }
  }, Math.floor( Math.random() * 50 ) + 50)
}

loop(0)
