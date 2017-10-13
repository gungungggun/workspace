let plaintext = 'hogehoge'

const pkey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxhomS3kWYQgl/QEeLoT1pN9LN
Rdp3HIkZagBNPKIbfPLy9I46fjNitcSAcrfSCnFNJOTBLucPrGB5ZYJ4268ljg3D
fHS3OZPFS0YjpWqYQkUYxQhokUHuOWF2+cJHLoDtCAwxKi0pJOqeL62eLyOfCbRt
wQCcfRmtbXFneRT28QIDAQAB
-----END PUBLIC KEY-----`

var e = new JSEncrypt();
e.setPublicKey(pkey)
var encrypted = e.encrypt(plaintext);

console.log(encrypted)
