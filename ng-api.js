var connect = require('connect')
var http = require('http')

var app = connect()
    .use(connect.static('public'))

http.createServer(app).listen(1339);
