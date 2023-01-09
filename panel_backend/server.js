require('./enviroments/panel.dev.env')
var app = require('./configs/ServerConfig')
var server = app.configs.HttpConfig;
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

const { header, validationResult } = require('express-validator');

/*
  Único endPoint que usará socket, esse ficará fora do arquivo de rotas no momento.
 */
app.post('/chamar', [
    header('nome').notEmpty().withMessage("O campo nome é obrigatório")
    , header('senha').notEmpty().withMessage("O campo nome é obrigatório")
    , header('guiche').notEmpty().withMessage("O campo nome é obrigatório")
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    app.controllers.ClientController.gravarCliente(app, {
        'nome': req.headers.nome,
        'senha': req.headers.senha,
        'guiche': req.headers.guiche
    })


    var response = await app.controllers.ClientController.obterUltimosRegistros(app, req);

    io.emit('data.client', {
        "clientes": response
    })

    res.send(response)
})


server.listen(SERVER_PORT, SERVER_HOST, () => {
    app.models.InicializadorTabelas.criarTabela(app)
    console.log(`server is running ${SERVER_HOST}/${SERVER_PORT} `)
})