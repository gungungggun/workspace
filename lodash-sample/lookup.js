const _ = require('lodash')

let test = {
   aaa: {
     bbb: {
       ccc: "ok"
     }
   }
}

if (test && test.aaa && test.aaa.ddd) {
  console.log(test.aaa.bbb.ddd)
}

console.log(_.get(test, 'aaa.bbb.ccc'))
console.log(_.get(test, 'aaa.bbb.ddd'))
console.log(_.get(test, 'aaa.ddd.eee'))
