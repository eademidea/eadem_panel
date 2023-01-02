module.exports.gravaClientes = (app, cliente) => {
  console.log('gravando cliente.. .. ')
  var grava = app.configs.SqliteConfig
  grava.openDb().then(db => {
    var nome = cliente.nome;
    var senha = cliente.senha;
    var guiche = cliente.guiche;
    (db.exec(`INSERT INTO clientes ( nome,senha,guiche)  VALUES ('${nome}','${senha}','${guiche}') `));

  });
}
