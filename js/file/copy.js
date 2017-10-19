let fs = require('fs')
fs.createReadStream('test.txt').pipe(fs.createWriteStream('test-copy.txt'))
