const AWS = require('aws-sdk')
const dc = new AWS.DynamoDB.DocumentClient({
  region: 'ap-northeast-1',
  endpoint: new AWS.Endpoint('http://localhost:8000')
})

/*
let param = {
  TableName: 'mock1',
  KeyConditionExpression: '#id = :id',
  ExpressionAttributeValues: {
    ':id': '0001'
  },
  ExpressionAttributeNames: {
    '#id': 'id'
  }
}
*/

let param = {
  TableName: 'mock2',
  KeyConditionExpression: '#id = :id AND #type = :type',
  ExpressionAttributeValues: {
    ':id': '0001',
    ':type': 'A'
  },
  ExpressionAttributeNames: {
    '#id': 'id',
    '#type': 'type'
  }
}

dc.query(param, (err, data) => {
  console.log(data)
  console.log(err)
})
