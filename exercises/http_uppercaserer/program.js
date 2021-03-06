const http = require('http')
const map = require('through2-map')

const server = http.createServer((req,res) => {
  if(req.method === 'POST') {
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  } else {
    return res.end('I only accept POST!\n')
  }
})

server.listen(Number(process.argv[2]))
