var fs = require('fs')
var jwt = require('jsonwebtoken')
//var cert = fs.readFileSync('./private-key.pem')
var cert = `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCxhomS3kWYQgl/QEeLoT1pN9LNRdp3HIkZagBNPKIbfPLy9I46
fjNitcSAcrfSCnFNJOTBLucPrGB5ZYJ4268ljg3DfHS3OZPFS0YjpWqYQkUYxQho
kUHuOWF2+cJHLoDtCAwxKi0pJOqeL62eLyOfCbRtwQCcfRmtbXFneRT28QIDAQAB
AoGBAIP6MzjeyfqBzbGuxgHGY3NfrvYwolO/ASXFqmfBVfr9j1iT+1D9FZKi821S
29npLYZekToVdm4uhqJ5lt/m4nPYvXd9LBxGyzfmeBQpEqBeFR/350cV0wjuW/pZ
ET1new1dSMuGmE4kumkyGVT9tAmZ97HRc2rxrvJAS/W/F3bhAkEA6VESu2B6Oogl
qR4BA9THtn7znJKJ0Z4X0NTzMKWpRHoMAHOBQ9ghOQkTP0lVAAS3FNuEpliSM8aI
hKBfRwImPQJBAMLI5nXW7xoOHve/2uoZ1k0NA88RVvNficW5Tynd22VtTUmZoO2d
kWO1KlH+KweKOTrb+u5jP7IjXKap7eXGUsUCQFcLOhPR4IfptzMq0HIfdgqtvjER
sn0ToAr3B2uEwmubpNKeRQGMpohizF11/FIvcCZF520v6guK6++e7SzOrnkCQQDB
O7pdFr+WsoGIOB09dipBv/KSXlpLD/FGZKKjHwPC6B7vL+gVMeaE6rm0I5ieX0KN
IKQcD/ulhi0o7ZUjCI8dAkEA54lE/7HUu2CwIy1HAGR9mo7ZxOjaa2oO0r60e5ns
mp2cYm7VjZ456jY4ZvWoVnrRcQEovn0P2g8rp1lubwY5kQ==
-----END RSA PRIVATE KEY-----`
var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256', expiresIn: 1})

console.log(token)

//var key = fs.readFileSync('./public-key.pem')
var key = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxhomS3kWYQgl/QEeLoT1pN9LN
Rdp3HIkZagBNPKIbfPLy9I46fjNitcSAcrfSCnFNJOTBLucPrGB5ZYJ4268ljg3D
fHS3OZPFS0YjpWqYQkUYxQhokUHuOWF2+cJHLoDtCAwxKi0pJOqeL62eLyOfCbRt
wQCcfRmtbXFneRT28QIDAQAB
-----END PUBLIC KEY-----`

var decode = jwt.verify(token, key)

console.log(decode)

setTimeout(() => {
  try {
    var decode = jwt.verify(token, key)
    console.log(decode)
  } catch (err) {
    console.log(err.message)
  }
}, 2000)
