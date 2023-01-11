module.exports.registerConfigurations = (app, req) => {
    const insert = `INSERT INTO CONFIGURACOES 
    (corFonteCabecalho, corFundoCabecalho, corQuadroDireito
        , corQuadroEsquerdo, corFonteQuadroEsquerdo, corFonteQuadroDireito, corFundo) 
    VALUES 
    ('${req.headers.corfontecabecalho}', '${req.headers.corfundocabecalho}', 
    '${req.headers.corquadrodireito}', '${req.headers.corquadroesquerdo}',
    '${req.headers.corfontequadroesquerdo}','${req.headers.corfontequadrodireito}',    
    '${req.headers.corfundo}')`
    var sqlite = app.configs.SqliteConfig
    sqlite.openDb().then(db => {
        (db.exec(insert))
    })
}

module.exports.deleteConfigurations = (app) => {
    var sqlite = app.configs.SqliteConfig
    sqlite.openDb().then(db => {
        (db.exec(`DELETE FROM CONFIGURACOES`))
    })
}


module.exports.getConfigurations = getConfigurations;

async function getConfigurations(app) {
    var sqlite = app.configs.SqliteConfig
    var query = 'SELECT * FROM CONFIGURACOES'
    return sqlite.openDb().then(db => {
        return db.all(query)
            .then(res => res)
    });
}