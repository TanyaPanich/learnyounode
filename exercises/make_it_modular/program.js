const readAndFilter = require('./myModule.js')
const pathTodir = process.argv[2]
const extension = process.argv[3]

readAndFilter(pathTodir, extension, function (err, list) {
  if(err) {
    return console.log('program.js has an error:', err)
  }

  list.forEach(file => console.log(file))
})
