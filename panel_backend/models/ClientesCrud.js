module.exports.gravaClientes = (app, cliente) => {
  var sqlite = app.configs.SqliteConfig
  sqlite.openDb().then(db => {
    var nome = cliente.nome;
    var senha = cliente.senha;
    var guiche = cliente.guiche;
    (db.exec(`INSERT INTO clientes ( nome,senha,guiche)  VALUES ('${nome}','${senha}','${guiche}') `));
  });
}

module.exports.obterUltimosRegistros = obterRegistros;

async function obterRegistros(app) {
  console.log('chegueeeei')
  var sqlite = app.configs.SqliteConfig
  var query = `SELECT * FROM clientes WHERE date(data_hora_chamada) = date() ORDER BY id desc LIMIT 6`
  return sqlite.openDb().then(db => {
    return db.all(query)
      .then(res => res)
  });
}