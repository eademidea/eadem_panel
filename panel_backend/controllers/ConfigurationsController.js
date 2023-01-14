module.exports.registerConfiguration = (app, req) => {
    app.models.ConfigurationsCrud.deleteConfigurations(app)
    setTimeout(async() => {
        app.models.ConfigurationsCrud.registerConfigurations(app, req)
    }, 500);
    
}

module.exports.getConfigurations = getConfigurations

async function getConfigurations(app) {
    return await app.models.ConfigurationsCrud.getConfigurations(app);
}

module.exports.flushConfigurations = (app) => {
    app.models.ConfigurationsCrud.deleteConfigurations(app)
}