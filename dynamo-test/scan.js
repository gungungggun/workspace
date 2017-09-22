var AWS = require('aws-sdk')
var dynamo = new AWS.DynamoDB()

exports.handler = (event, context, callback) => {
    dynamo.scan( {
        "TableName": "mock"
    }, function( err, data ) {
        res = data
        console.log( JSON.stringify(data) );
        console.log( err );
        callback(null, data.Items);
    })
};
