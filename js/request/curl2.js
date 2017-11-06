const https = require('https')

let options = {
  host: 'github.com',
  method: 'GET',
  headers: {
    'Content-Type': 'text/html'
  }
}

let req = https.request(options, (res) => {
  // console.log(res)
  res.on('data', (chunk) => {
    console.log('BODY: ' + chunk)
  })
})
req.end()
