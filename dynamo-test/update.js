const AWS = require('aws-sdk')
const dc = new AWS.DynamoDB.DocumentClient({
  region: 'ap-northeast-1',
  endpoint: new AWS.Endpoint('http://localhost:8000')
})

/*
let param = {
  TableName: 'mock1',
  Key: {
    id: '0005'
  },
  UpdateExpression: 'set #name = :name, #age = :age',
  ExpressionAttributeValues: {
    ':name': 'Goro',
    ':age': 15
  },
  ExpressionAttributeNames: {
    '#name': 'name',
    '#age': 'age'
  }
}
*/

let param = {
  TableName: 'mock2',
  Key: {
    id: '0001',
    type: 'A'
  },
  UpdateExpression: 'set #name = :name, #age = :age',
  ExpressionAttributeValues: {
    ':name': 'Ichiro',
    ':age': 20
  },
  ExpressionAttributeNames: {
    '#name': 'name',
    '#age': 'age'
  }
}

dc.update(param, (err, data) => {
  console.log(data)
  console.log(err)
})
