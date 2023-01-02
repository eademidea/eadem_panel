module.exports.criarTabela = (app) => {
    console.log('criando.. .. ')
    var cria = app.configs.SqliteConfig
    var creteSql = `CREATE TABLE IF NOT EXISTS CLIENTES 
                    (ID INTEGER PRIMARY KEY AUTOINCREMENT
                    , nome VARCHAR(35)
                    , guiche VARCHAR(10), senha VARCHAR(10) 
                    , data_hora_chamada TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) `;
    cria.openDb().then(db=>{
        db.exec(creteSql);
        console.log ('tabela criada')
    })
    

}


