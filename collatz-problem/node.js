console.time('処理時間')
let count = 0

for (let i = 2; i <= 10000; i++) {
  x = i
  // console.log(x)
  while (x != 1) {
    if (x % 2 == 0) {
      x = a(x)
    } else {
      x = b(x)
    }
    count++
  }
}
console.timeEnd('処理時間')
console.log('count:' + count)

function a (n) {
  return n / 2
}

function b (n) {
  return n * 3 + 1
}
