const fs = require('fs')
const im = require('imagemagick')

im.crop({
  srcData: fs.readFileSync('../samples/sample-yoko.png', 'binary'),
  width: 48,
  height: 48
}, function(err, stdout, stderr){
  fs.writeFileSync('sample-crop.jpg', stdout, 'binary');
})
