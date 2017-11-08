const Jimp = require("jimp")

Jimp.read('../samples/sample.png', (err, image) => {
  image.cover(48, 48)
    .write('sample-cover.jpg')
})

Jimp.read('../samples/sample-yoko.png', (err, image) => {
  image.cover(48, 48)
    .write('sample-yoko-cover.jpg')
})

Jimp.read('../samples/sample-yoko.png', (err, image) => {
  image.contain(48, 48)
    .write('sample-yoko-contain.jpg')
})

Jimp.read('../samples/sample-tate.png', (err, image) => {
  image.cover(48, 48)
    .write('sample-tate-cover.jpg')
})

Jimp.read('../samples/sample-tate.png', (err, image) => {
  image.contain(48, 48)
    .write('sample-tate-contain.jpg')
})
