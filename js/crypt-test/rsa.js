c = require('cryptico')

let plaintext = 'hogehoge'

const pkey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxhomS3kWYQgl/QEeLoT1pN9LN
Rdp3HIkZagBNPKIbfPLy9I46fjNitcSAcrfSCnFNJOTBLucPrGB5ZYJ4268ljg3D
fHS3OZPFS0YjpWqYQkUYxQhokUHuOWF2+cJHLoDtCAwxKi0pJOqeL62eLyOfCbRt
wQCcfRmtbXFneRT28QIDAQAB
-----END PUBLIC KEY-----`

/*
const pkey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxhomS3kWYQgl/QEeLoT1pN9LN
Rdp3HIkZagBNPKIbfPLy9I46fjNitcSAcrfSCnFNJOTBLucPrGB5ZYJ4268ljg3D
fHS3OZPFS0YjpWqYQkUYxQhokUHuOWF2+cJHLoDtCAwxKi0pJOqeL62eLyOfCbRt
wQCcfRmtbXFneRT28QIDAQAB`
*/

let enc = c.encrypt(plaintext, pkey)
console.log(enc.cipher)

/*
var PassPhrase = "";
var Bits = 1024;
var MattsRSAkey = c.generateRSAKey(PassPhrase, Bits);

var MattsPublicKeyString = c.publicKeyString(MattsRSAkey)
var PlainText = "Matt, I need you to help me with my Starcraft strategy.";
var EncryptionResult = c.encrypt(PlainText, MattsPublicKeyString);
console.log(MattsPublicKeyString)


/*
var CipherText = EncryptionResult.cipher
var DecryptionResult = c.decrypt(CipherText, MattsRSAkey);
//console.log(DecryptionResult.plaintext)

var parametersBigint = ["n", "d", "p", "q", "dmp1", "dmq1", "coeff"];

privateKeyString = function(rsakey) {
    var keyObj = {};
    parametersBigint.forEach(function(parameter){
        keyObj[parameter] = c.b16to64(rsakey[parameter].toString(16));
    });
    // e is 3 implicitly
    return JSON.stringify(keyObj);
}
privateKeyFromString = function(string) {
    var keyObj = JSON.parse(string);
    var rsa = new RSAKey();
    parametersBigint.forEach(function(parameter){
        rsa[parameter] = parseBigInt(c.b64to16(keyObj[parameter].split("|")[0]), 16);
    });
    rsa.e = parseInt("03", 16);
    return rsa
}


console.log(privateKeyString(MattsRSAkey))

*/
