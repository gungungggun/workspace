let AWS = require('aws-sdk')
let documentClient = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
  var param = {
    TableName: "mock",
    Key: {
      id: '1'
    }
  }
  documentClient.get(param, (err, data) => {
    console.log(JSON.stringify(data))
    console.log(err)
    callback(null, data.Items)
  })
}
