var AWS = require('aws-sdk')
var documentClient = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
    documentClient.put({
        "TableName": "mock",
        "Item": {
          "id": "6",
          "date": "00l0edo0ewo",
          "age": 30,
          "bool": false
        }
    }, function( err, data ) {
        console.log(err)
    })
};
