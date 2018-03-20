const fs = require('fs')
const ext = '.' + process.argv[3]

fs.readdir(process.argv[2], function callback (err, list) {
 if(err) return console.log(err)

const filtered = list.filter((el)=>el.match(ext))
console.log(filtered.join('\n'));
})
