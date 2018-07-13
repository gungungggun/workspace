var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

const id = ''

var params = {screen_name: 'nodejs'};
client.get('statuses/show/' + id, params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets.extended_entities.media[0].video_info.variants[0]);
  }
});
