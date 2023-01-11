module.exports = getConfiguration

async function getConfiguration(app) {
    app.get('/obter-configuracoes', async (req, res) => {
        var response = await app.controllers.ConfigurationsController.getConfigurations(app);
        res.send(response)
    })
}