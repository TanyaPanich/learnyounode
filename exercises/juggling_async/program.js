const http = require('http')
const bl = require('bl')
const urls = [process.argv[2], process.argv[3], process.argv[4]]

let results =[]
let count = 0;
if (urls.length === 3) {
  for(let i = 0; i < urls.length; i++){
    http.get(urls[i], (response) => {
      response.pipe(bl(function(error, data) {
        if(error) return console.error()
        results[i] = data.toString()
        count++;
        if (count === 3) {
          for(let i = 0; i < results.length; i++) {
            console.log(results[i])
          }
        }
      }))
    })
  }

} else {
  return console.log('Give me 3 urls')
}
