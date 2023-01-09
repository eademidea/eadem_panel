module.exports.callClient = (app, req) => {
    app.models.InicializadorTabelas.criarTabela(app)
}

module.exports.gravarCliente = gravarCliente;

async function gravarCliente(app, cliente) {
    app.models.ClientesCrud.gravaClientes(app, cliente)
}

module.exports.obterUltimosRegistros = obterRegistros;

async function obterRegistros(app) {
    return await app.models.ClientesCrud.obterUltimosRegistros(app)
}