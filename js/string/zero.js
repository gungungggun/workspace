const zero = ('000' + 566).slice(-4)
console.log(zero)

const ss = ('0'.repeat(4) + '566').slice(-4)
console.log(ss)

const aa = '566'.padStart(4, '0')
console.log(aa)
