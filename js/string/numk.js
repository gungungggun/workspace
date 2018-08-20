
function numk (num) {
  res = String(num)
  if (num > 1000) {
    over = res.slice(0, -3)
    under = res.slice(-3, -2)
    res = over + '.' + under + 'K'
  }
  return res
}

console.log(numk(1483))
console.log(numk(1523))
console.log(numk(12423))
