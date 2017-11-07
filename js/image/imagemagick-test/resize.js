const fs = require('fs')
const im = require('imagemagick')

im.resize({
  srcData: fs.readFileSync('../samples/sample.png', 'binary'),
  width: 48
}, function(err, stdout, stderr){
  fs.writeFileSync('sample-resize.jpg', stdout, 'binary');
})

im.resize({
  srcData: fs.readFileSync('../samples/sample-yoko.png', 'binary'),
  width: 48
}, function(err, stdout, stderr){
  fs.writeFileSync('sample-yoko-resize.jpg', stdout, 'binary');
})

im.resize({
  srcData: fs.readFileSync('../samples/sample-tate.png', 'binary'),
  width: 48,
  height: 48
}, function(err, stdout, stderr){
  fs.writeFileSync('sample-tate-resize.jpg', stdout, 'binary');
})
