const sharp = require('sharp')

sharp('../samples/sample.png')
  .resize(48, 48)
  .raw()
  .toBuffer()
  .then((buffer) => {
    console.log(buffer[0])
    console.log(buffer[1])
    console.log(buffer[2])
    console.log(buffer[3])

    console.log(buffer[4])
    console.log(buffer[5])
    console.log(buffer[6])
    console.log(buffer[7])
  })
