const fs = require('node:fs')



result = fs.readFileSync('test.mpeg','base64')

var stats = fs.statSync("test.mpeg")
var fileSizeInBytes = stats.size;
console.log(fileSizeInBytes)