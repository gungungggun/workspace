const redis = require('redis'),
    client = redis.createClient()

client.on('error', (err) => {
  console.log('Error ' + err)
  client.end(true)
})

client.del('node-key', (e,r) => {
  console.log(e)
  console.log(r)
  client.end(true)
})

