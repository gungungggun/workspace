let AWS = require('aws-sdk')
let dynamo = new AWS.DynamoDB()

exports.handler = (event, context, callback) => {
  var param = {
    TableName: "mock"
  }
  dynamo.scan(param, (err, data) => {
    console.log(JSON.stringify(data))
    console.log(err)
    callback(null, data.Items)
  })
}
