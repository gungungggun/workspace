const jsonServer = require('json-server')
const server = jsonServer.create()

server.get('/now', (req, res) => {
  res.json({
    "now": Date.now()
  })
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})
