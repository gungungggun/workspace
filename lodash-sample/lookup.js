const _ = require('lodash')

let test = {
   aaa: {
     bbb: {
       ccc: "ok"
     }
   }
}

console.log(_.get(test, 'aaa.bbb.ccc'))
console.log(_.get(test, 'aaa.bbb.ddd'))
