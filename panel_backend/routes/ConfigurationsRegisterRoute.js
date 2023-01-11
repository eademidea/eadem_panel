const { header, validationResult } = require('express-validator');
module.exports = registerConfig

async function registerConfig(app) {
    app.post('/registrar-configuracao',[
        header('corFonteCabecalho').notEmpty().withMessage("O campo nome é obrigatório")
        ,header('corFundoCabecalho').notEmpty().withMessage("O campo nome é obrigatório")
        ,header('corQuadroEsquerdo').notEmpty().withMessage("O campo nome é obrigatório")
        ,header('corFonteQuadroEsquerdo').notEmpty().withMessage("O campo nome é obrigatório")
        ,header('corFonteQuadroDireito').notEmpty().withMessage("O campo nome é obrigatório")
        ,header('corFundo').notEmpty().withMessage("O campo nome é obrigatório")
    ], (req, res) => {
        app.controllers.ConfigurationsController.registerConfiguration(app, req, res)
        res.send("Ok!")
    })
}



