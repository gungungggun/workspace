const sharp = require('sharp')
const chalk = require('chalk')

let width, height

const image = sharp('samples/uruuru.png')
image
  .metadata()
  .then(function(metadata) {
    width = metadata.width
    height = metadata.height
    return image
  })
  .then(function(data) {
    data.stats()
    .then(function(stats) {
      const r = Math.round(stats.channels[0].sum/(width * height)).toString(16)
      const g = Math.round(stats.channels[1].sum/(width * height)).toString(16)
      const b = Math.round(stats.channels[2].sum/(width * height)).toString(16)
      const hex = '#' + r + g + b
      console.log('中間色は↓')
      console.log(chalk.hex(hex).bold(hex))
    })
  })
