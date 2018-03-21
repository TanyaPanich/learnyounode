const bl = require('bl')
const http = require('http')


http.get(process.argv[2], (response) => {
  response.pipe(bl(function (err, data) {
    if (err) console.error
    console.log(data.length)
    console.log(data.toString());
  }))
}).on('error', console.error)
