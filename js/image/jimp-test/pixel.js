const Jimp = require("jimp")

Jimp.read('../samples/sample.png', (err, image) => {
  let color = image.getPixelColor(0, 0)
  console.log(Jimp.intToRGBA(color))
})
