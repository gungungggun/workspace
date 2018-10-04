const redis = require('redis'),
    client = redis.createClient()

client.on('error', (err) => {
  console.log('Error ' + err)
  if (err) {
    client.end(true)
  }
})
