var crypto = require('crypto');
var md5hex = function(src){
  var md5hash = crypto.createHash('md5');
  md5hash.update(src, 'binary');
  return md5hash.digest('hex');
}

console.log(md5hex('gungun'))
if (md5hex('gungun') === '682e923a65774519c231a066a38d4238') {
 console.log('true!!!!')
}
