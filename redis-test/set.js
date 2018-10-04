const redis = require('redis'),
    client = redis.createClient()

client.on('error', (err) => {
  console.log('Error ' + err)
})

client.set('node-key', 'node-val', (err, reply) => {
  console.log(reply)
  client.end(true)
})

