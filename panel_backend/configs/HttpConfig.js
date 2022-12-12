module.exports = function (app) {
    console.log('teste')
    var http = require('http')
    return http.createServer(app)
}