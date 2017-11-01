function loop(i) {
  setTimeout(() => {
    console.log(i)
  }, Math.floor( Math.random() * 50 ) + 50)
  if (i < 10) {
    loop(i+1)
  }
}

loop(0)
