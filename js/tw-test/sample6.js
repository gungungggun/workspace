var fs = require('fs');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

const id = '995316966062743553'

var params = {
  tweet_mode: 'extended'
};
client.get('statuses/show/' + id, params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
