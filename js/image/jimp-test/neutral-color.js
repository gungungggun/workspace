const Jimp = require("jimp")

Jimp.read('../samples/sample.png', (err, image) => {
  image.cover(48, 48)
  let sum = {
    r: 0,
    g: 0,
    b: 0
  }
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
    sum.r += image.bitmap.data[idx + 0]
    sum.g += image.bitmap.data[idx + 1]
    sum.b += image.bitmap.data[idx + 2]
    if (x === image.bitmap.width - 1 && x === y) {
      let nc = {
        r: Math.round(sum.r / image.bitmap.width / image.bitmap.height),
        g: Math.round(sum.g / image.bitmap.width / image.bitmap.height),
        b: Math.round(sum.b / image.bitmap.width / image.bitmap.height)
      }
      console.log(nc)
      new Jimp(48, 48, Jimp.rgbaToInt(nc.r, nc.g, nc.b, 255), (err, newimg) => {
        newimg.write('sample-nc.jpg')
      })
    }
  })
})
