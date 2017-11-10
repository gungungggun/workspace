function a1 () {
  return 'a1'
}

async function a2 () {
  return 'a2'
}

function a3 () {
  return new Promise((resolve, reject) => {
    resolve('a3')
  })
}

console.log(a1())
console.log(a2())
console.log(a3())
