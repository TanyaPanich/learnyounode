var fs = require('fs')
let arrayOfLines = fs.readFileSync(process.argv[2]).toString().split('\n')
console.log(arrayOfLines.length - 1)
