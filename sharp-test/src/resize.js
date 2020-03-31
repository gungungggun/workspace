const sharp = require('sharp')

sharp('samples/uruuru.png')
  .resize(36, 36)
  .toFile('output/uruuru36x36.png')
