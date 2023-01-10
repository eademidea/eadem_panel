const { header, validationResult } = require('express-validator');

module.exports = registerConfiguration

async function registerConfiguration(app) {
    app.post('/registrar-configuracao', [
        header('corFonteCabecalho').notEmpty().withMessage("O campo nome é obrigatório")
        , header('corFundoCabecalho').notEmpty().withMessage("O campo nome é obrigatório")
        , header('corFonteQuadro').notEmpty().withMessage("O campo nome é obrigatório")
        , header('corQuadro').notEmpty().withMessage("O campo nome é obrigatório")
        , header('corFundo').notEmpty().withMessage("O campo nome é obrigatório")
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        app.controllers.ConfigurationsController.registerConfiguration(app, req, res)
    })
}

module.exports = getConfiguration

async function getConfiguration(app) {
    app.get('/obter-configuracoes', async (req, res) => {
        var response = await app.controllers.ConfigurationsController.getConfigurations(app);
        res.send(response)
    })
}