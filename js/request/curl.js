const request = require('request')

let url = 'https://github.com'

request.get({
    url: url
  }, (err, res, body) => {
    console.log(body)
  }
)
