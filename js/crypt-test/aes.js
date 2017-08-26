let key = 'yhfmajs12797uyhiydhd;ewews!;ssqx'

var CryptoJS = require("crypto-js")
C = CryptoJS
var ciphertext = CryptoJS.AES.encrypt('abcdefg', key, {mode: C.mode.CFB})
console.log(ciphertext.toString())

var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), key, { mode: C.mode.CFB})
var plaintext = bytes.toString(CryptoJS.enc.Utf8)
console.log(plaintext)

