
var app = require('./configs/ServerConfig')
var server = app.configs.HttpConfig;

var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});


const SERVER_HOST = "localhost"
const SERVER_PORT = "4004"

app.post('/chamar', (req, res) => {
  var nome = req.headers.nome
  var senha = `Senha: ${req.headers.senha}`
  var guiche = `Guichê: ${req.headers.guiche}`
  io.emit('data.client', {
    "nome": nome,
    "senha": senha,
    "guiche": guiche
  })
  res.send("ok!")
})


server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`server is running ${SERVER_HOST}/${SERVER_PORT} `)
})