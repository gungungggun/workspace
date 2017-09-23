let AWS = require('aws-sdk')
let documentClient = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
  let put = {
    "TableName": "mock",
    "Item": {
      "id": "6",
      "date": "00l0edo0ewo",
      "age": 30,
      "bool": false
    }
  }
  documentClient.put(put, (err, data) => {
    console.log(err)
  })
}
