const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const urlObj = url.parse(req.url, true)
  const timeString = new Date(urlObj.query.iso)
  let time_result

  if (/^\/api\/parsetime/.test(req.url)) {
    time_result = parsetime(timeString)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    time_result = unixtime(timeString)
  }

  if (time_result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(time_result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
