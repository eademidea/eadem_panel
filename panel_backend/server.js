const express = require('express')
const http = require('http')
const socket = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socket(server)


SERVER_HOST="localhost"
SERVER_PORT="4004"


io.on('connection', socket => {
    console.log("Connection => Server has connected...")
    socket.on("data.client", (data) => {
        console.log(`data.client => `, data)
    })

    socket.on("disconnect", () => {
        console.log("Disconnect => A connection was disconnected...")
    })
})

server.listen(SERVER_PORT, SERVER_HOST, ()=>{
    console.log(`server is running ${SERVER_HOST}/${SERVER_PORT} `)
})

