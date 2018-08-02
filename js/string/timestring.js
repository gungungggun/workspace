console.log(new Date().getTime())
let time = new Date().getTime().toString(16)
console.log(time)

console.log(Date.now().toString(16))

let d = new Date()
let year = d.getFullYear()
let month = ('0' + (d.getMonth() + 1)).slice(-2)
let day = ('0' + d.getDate()).slice(-2)

let date = '' + year + month + day
console.log(date)
