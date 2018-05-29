let moment = require('moment')

m = moment('2019-02-29')
console.log(m.isValid()) //false

m = moment('2020-02-29')
console.log(m.isValid()) //true

m = moment('2018-06-30')
console.log(m.isValid()) //true

m = moment('2019-06-31')
console.log(m.isValid()) //false
