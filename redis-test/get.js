const redis = require('redis'),
    client = redis.createClient()

client.on('error', (err) => {
  console.log('Error ' + err)
})

client.get('node-key', (err, reply) => {
  console.log(reply)
  client.end(true)
})

