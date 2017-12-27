const AWS = require('aws-sdk')
const dc = new AWS.DynamoDB.DocumentClient({
  region: 'ap-northeast-1',
  endpoint: new AWS.Endpoint('http://localhost:8000')
})

/*
let param = {
  TableName: 'mock1',
  Key: {
    id: '0001'
  },
  AttributesToGet: [
    'id',
    'name'
  ]
}
*/

let param = {
  TableName: 'mock1',
  Key: {
    id: '0001'
  },
  ProjectionExpression: 'id, #name',
  ExpressionAttributeNames: {
    '#name': 'name'
  }
}

dc.get(param, (err, data) => {
  console.log(data)
})
