module.exports = function (app) {
    var http = require('http')
    return http.createServer(app)
}