let moment = require('moment')

m = moment('2022-02-29')
console.log(m.isBefore()) //false

m = moment('2016-02-29')
console.log(m.isBefore()) //true
