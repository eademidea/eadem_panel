var sqlite3 = require('sqlite3')
var sqlite = require('sqlite')

module.exports.openDb = function (app) {
    return sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database
    })
}