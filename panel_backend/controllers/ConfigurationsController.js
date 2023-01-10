module.exports.registerConfiguration = (app, req, res) => {
    app.models.ConfigurationsCrud.deleteConfigurations(app)
    app.models.ConfigurationsCrud.registerConfigurations(app, req)
    res.send("Ok!")
}


module.exports.getConfigurations = getConfigurations

async function getConfigurations(app) {
    return await app.models.ConfigurationsCrud.getConfigurations(app);
}