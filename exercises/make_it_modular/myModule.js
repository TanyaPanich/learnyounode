const fs = require('fs')
const path = require('path')
//
// var path = require('path');
// //Return the extension:
// var ext = path.extname('/Users/Refsnes/demo_path.js');
// console.log(ext); ==> returns "js"

module.exports = function (pathTodir, extension, callback) {
  fs.readdir(pathTodir, function(err, list) {
    if(err) {
      return callback(err)
    }
    list = list.filter((file) => {
      return path.extname(file) === '.' + extension
    })

    callback(null, list)//what's this? why not return console.log(err)?
  })
}
