let now = new Date()
console.log(now)

minute = now.getMinutes()
console.log(minute)

now.setMinutes(minute + 30)
console.log(now)

console.log(Date.now())

let ut = now.getTime()
console.log(ut)
