const Jimp = require("jimp")

Jimp.read('../samples/sample.png', (err, image) => {
  image.resize(48, 48)
    .write('sample-resize.jpg')
})

Jimp.read('../samples/sample-yoko.png', (err, image) => {
  image.resize(48, Jimp.AUTO)
    .write('sample-yoko-resize.jpg')
})

Jimp.read('../samples/sample-tate.png', (err, image) => {
  image.resize(Jimp.AUTO, 48)
    .write('sample-tate-resize.jpg')
})
