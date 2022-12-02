const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

SERVER_HOST="localhost"
SERVER_PORT="4004"

app.get('/testerino',(req,res)=>{
    io.emit('data.client', "teste desenvolvimento ok!")
    res.send("ok!")
})

io.on('connection', socket => {
    console.log("Connection => Server has connected...".concat(socket.id))
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

