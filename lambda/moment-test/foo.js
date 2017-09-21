moment = require('moment')

exports.handler = (event, context, callback) => {
  let m = moment().format('MMMM Do YYYY, h:mm:ss a')
  callback(null, m)
}
