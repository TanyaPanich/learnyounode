const net = require('net')
const port = parseInt([process.argv[2]])

const server = net.createServer(function (socket) {
   let date = new Date()
   if (date.length === 0) socket.end('')
   let year = date.getFullYear()
   let month = date.getMonth() + 1
   if (month < 10) {
     month = '0' + month
   }
   let day = date.getDate()
   if (day < 10) {
     day = '0' + day
   }
   let hour = date.getHours()
   if (hour < 10) {
     hour = '0' + hour
   }
   let minutes = date.getMinutes()
   if (minutes < 10) {
     minutes = '0' + minutes
   }
   socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n')

})
server.listen(port)
