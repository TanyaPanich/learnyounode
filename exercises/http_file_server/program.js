const fs = require('fs')
const http = require('http')
const port = Number(process.argv[2])
const fileLocation = process.argv[3]


const server = http.createServer( (req, res)  => {
  const src = fs.createReadStream(fileLocation)
  src.pipe(res)
})

server.listen(port)
