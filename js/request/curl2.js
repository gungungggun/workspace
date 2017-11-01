const https = require('https')

let options = 'https://github.com'
options.method = 'GET'
options.headers = {
  'Content-Type': 'text/html'
}

let req = https.request(options, (res) => {
  // console.log(res)
  res.on('data', (chunk) => {
    console.log('BODY: ' + chunk)
  })
})
req.end()
