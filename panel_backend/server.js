var app = require('./configs/ServerConfig')
var server = app.configs.HttpConfig;
var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

const SERVER_HOST = "localhost"
const SERVER_PORT = "4004"


/*
  Único endPoint que usará socket, esse ficará fora do arquivo de rotas no momento.
 */
app.post('/chamar', (req, res) => {
  //Além de chamar o cliente no painel, esse metodo tem que chamar o metodo que grava no banco.
  var nome = req.headers.nome
  var senha = req.headers.senha
  var guiche = req.headers.guiche

  //fazer validação se os campos estão vindo corretamente

  var cliente = {
    'nome' : nome,
    'senha' : senha,
    'guiche' : guiche
  }

  app.controllers.ClientController.gravarCliente(app,cliente)

  io.emit('data.client', {
    "nome": nome,
    "senha": senha,
    "guiche": guiche
  })
  res.send("ok!")
})


server.listen(SERVER_PORT, SERVER_HOST, () => {
  app.models.criacaoTabela.criarTabela(app)
  console.log(`server is running ${SERVER_HOST}/${SERVER_PORT} `)
})