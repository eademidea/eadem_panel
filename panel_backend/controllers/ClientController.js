// module.exports.callClient = (app, req) => {
//     console.log('cheeegueei aqui...')
//     app.models.example.testar(app)
// }
module.exports.callClient = (app, req) => {
    console.log('cheeegueei aqui...')
    app.models.criacaoTabela.criarTabela(app)
}

module.exports.gravarCliente =  function(app, cliente)  {
    console.log(cliente)
    app.models.clientesChamados.gravaClientes(app, cliente)
}

//criar um metodo que chama a rota post que grava no banco as configurações inciais