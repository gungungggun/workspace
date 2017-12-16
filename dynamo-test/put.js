const AWS = require('aws-sdk')
const dc = new AWS.DynamoDB.DocumentClient({
  region: 'ap-northeast-1',
  endpoint: new AWS.Endpoint('http://localhost:8000')
})

let param = {
  TableName: 'mock1',
  Item: {
    id: '0005',
    name: 'Goro',
    age: 15
  }
}

dc.put(param, (err, data) => {
  console.log(data)
  console.log(err)
})

/*
const dc = new AWS.DynamoDB({
  region: 'ap-northeast-1',
  endpoint: new AWS.Endpoint('http://localhost:8000')
})

let param = {
  TableName: 'mock1',
  Item: {
    id: {
      S: '0005'
    },
    name: {
      S: 'GOOO'
    },
    age: {
      N: '10'
    }
  },
  ReturnValues: 'ALL_NEW'
}

dc.putItem(param, (err, data) => {
  console.log(data)
  console.log(err)
})
*/
