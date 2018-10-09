const redis = require('redis'),
    client = redis.createClient()

let main = async function() {
  client.on('error', (err) => {
    console.log('Error ' + err)
  })

  await client.zadd('ranking', 1, 'a', (err, reply) => {
  })

  await client.zadd('ranking', 2, 'b', (err, reply) => {
  })

  await client.zadd('ranking', 3, 'c', (err, reply) => {
  })

  await client.zadd('ranking', 4, 'd', (err, reply) => {
  })

  await client.zincrby('ranking', 5, 'e', (err, reply) => {
  })

  await client.zincrby('ranking', 10, 'abcde', (err, reply) => {
  })

  await client.zincrby('ranking', 1, 'a', (err, reply) => {
  })

  await client.zincrby('ranking', -1, 'b', (err, reply) => {
  })

  await client.zrange('ranking', 0, 10, (err, reply) => {
    console.log(reply)
  })

  await client.zscore('ranking', 'a', (err, reply) => {
    console.log('a:' + reply)
  })

  await client.zscore('ranking', 'b', (err, reply) => {
    console.log('b:' + reply)
  })

  await client.zscore('ranking', 'c', (err, reply) => {
    console.log('c:' + reply)
  })

  await client.zrevrank('ranking', 'a', (err, reply) => {
    console.log('a:revrank:' + reply)
  })

  await client.zrank('ranking', 'a', (err, reply) => {
    console.log('a:rank' + reply)
    client.end(true)
  })
}

main()
