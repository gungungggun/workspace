const QRCode = require('qrcode')

const url = "https://google.com"

QRCode.toFile('qr.png', url, {
  scale: 10,
  color: {
    dark: '#000',  // Blue dots
    light: '#fff' // Transparent background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
})
