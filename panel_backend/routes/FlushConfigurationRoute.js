module.exports = getConfiguration

async function getConfiguration(app) {
    app.delete('/limpar-configuracoes', async (req, res) => {
        await app.controllers.ConfigurationsController.flushConfigurations(app);
        res.send("Configuração restaurada.")
    })
}