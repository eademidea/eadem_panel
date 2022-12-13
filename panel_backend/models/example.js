module.exports.testar = (app) => {
    console.log('aqui estou .. .. ')
    var teste = app.configs.SqliteConfig
    teste.openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS TESTE (id INTEGER PRIMARY KEY, nome TEXT) ')
    })
}