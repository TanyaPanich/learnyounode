const fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', function (error, contents) {
  if (error) {
    return console.log(error)
  }
  console.log(contents.split('\n').length - 1)
})
