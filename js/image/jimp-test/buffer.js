const Jimp = require("jimp")

Jimp.read('../samples/sample.png', (err, image) => {
  image.resize(48, 48)
    .getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
      console.log(buffer)
    })
})
