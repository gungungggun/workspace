const Jimp = require("jimp")

let rgb = {
  r: 135,
  g: 141,
  b: 167
}

let hex = Jimp.rgbaToInt(rgb.r, rgb.g, rgb.b, 255)
console.log(hex.toString(16).slice(0, 6))
