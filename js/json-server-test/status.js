const jsonServer = require('json-server')
const server = jsonServer.create()

server.get('/retry', (req, res) => {
  if (Math.random() > 0.8) {
    res.json({
      "status": "200"
    })
  } else {
    res.status(500).json({
      "status": "500"
    })
  }
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})
