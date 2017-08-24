var cryptor = require('crypto');
var fs = require('fs')
var path = require('path')
var sign = cryptor.createSign('RSA-SHA256');
sign.update('some data to sign');
var privateKey = fs.readFileSync(path.resolve('test'), "utf8");
var signedData = sign.sign(privateKey, 'base64');
console.log(signedData)

var verify = cryptor.createVerify('RSA-SHA256');
verify.write('some data to sign');
verify.end();
var publicKey = fs.readFileSync(path.resolve('test.pub'), "utf8");
console.log(verify.verify(publicKey, signedData, 'base64'));
