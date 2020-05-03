console.red = function(str) {
  console.log('\u001b[31m'+str)
}

console.yellow = function(str) {
  console.log('\u001b[33m'+str)
}

console.red('red')
console.yellow('yellow')
