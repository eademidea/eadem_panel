module.exports = obterRegistros;

async function obterRegistros(app) {
    app.get('/obterUltimosRegistros', async (req, res) => {
        var response = await app.controllers.ClientController.obterUltimosRegistros(app, req);
        res.send(response)
    })
}