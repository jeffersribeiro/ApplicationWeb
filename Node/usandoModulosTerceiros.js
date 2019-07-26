/*
const _ = require('lodash')
setInterval(() => console.log(_.random(0, 5)),2000)
*/
const http = require('http')
http.createServer((req, resp) => {
    resp.write('Bom diaaa!')
    resp.end()
}).listen(8080)