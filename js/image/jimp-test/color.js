const Jimp = require("jimp")

let rgb = {
  r: 255,
  g: 255,
  b: 0
}

let hex = Jimp.rgbaToInt(rgb.r, rgb.g, rgb.b, 255)
console.log(hex.toString(16).slice(0, 6))
