module.exports.criarTabelaClients = (app) => {
    var cria = app.configs.SqliteConfig
    var creteSql = `CREATE TABLE IF NOT EXISTS CLIENTES 
                    (ID INTEGER PRIMARY KEY AUTOINCREMENT
                    , nome VARCHAR(35)
                    , guiche VARCHAR(10), senha VARCHAR(10) 
                    , data_hora_chamada TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) `;
    cria.openDb().then(db => {
        db.exec(creteSql);
        console.log('Tabela CLIENTES ok...')
    })
}

module.exports.criarTabelaConfiguracoes = (app) => {
    var cria = app.configs.SqliteConfig
    var creteSql = `CREATE TABLE IF NOT EXISTS CONFIGURACOES 
                    (ID INTEGER PRIMARY KEY AUTOINCREMENT
                    , corFonteCabecalho VARCHAR(25)
                    , corFundoCabecalho VARCHAR(25)
                    , corQuadroEsquerdo VARCHAR(25)
                    , corQuadroDireito VARCHAR(25)
                    , corFonteQuadroEsquerdo VARCHAR(25)
                    , corFonteQuadroDireito VARCHAR(25)
                    , corFundo VARCHAR(25)
                    , data_hora_chamada TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) `;
    cria.openDb().then(db => {
        db.exec(creteSql);
        console.log('Tabela CONFIGURACOES ok...')
    })
}