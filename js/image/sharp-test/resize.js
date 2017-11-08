const sharp = require('sharp')

sharp('../samples/sample.png')
  .resize(48, 48)
  .toFile('sample-resize.jpg')

sharp('../samples/sample-yoko.png')
  .resize(48, 48)
  .toFile('sample-yoko-resize.jpg')
