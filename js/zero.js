function zeroRand(num) {
  let n = (Math.floor( Math.random() * num ) + 1)
　return ('000' + n).slice(-4);
}

console.log(zeroRand(20))
