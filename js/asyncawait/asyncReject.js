async function b1 () {
  throw 'b1'
}

function b2 () {
  return new Promise((resolve, reject) => {
    reject('b2')
  })
}

console.log(b1())
console.log(b2())
