var express = require('express')
var consign = require('consign')
var app = express()


consign()
    .include('routes')
    .then('controllers')
    .then('/configs/HttpConfig.js')
    .into(app);


module.exports = app;