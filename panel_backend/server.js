require('./enviroments/panel.dev.env')
var app = require('./configs/ServerConfig')
var server = app.configs.HttpConfig;
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

/*
  Único endPoint que usará socket, esse ficará fora do arquivo de rotas no momento.
 */
app.post('/chamar', async (req, res) => {
    var nome = req.headers.nome
    var senha = req.headers.senha
    var guiche = req.headers.guiche
    var cliente = {
        'nome': nome,
        'senha': senha,
        'guiche': guiche
    }
    app.controllers.ClientController.gravarCliente(app, cliente)
    var response = await app.controllers.ClientController.obterUltimosRegistros(app, req);
    io.emit('data.client', {
        "clientes": response
    })
    res.send('Ok!')
})


server.listen(SERVER_PORT, SERVER_HOST, () => {
    app.models.InicializadorTabelas.criarTabela(app)
    console.log(`server is running ${SERVER_HOST}/${SERVER_PORT} `)
})