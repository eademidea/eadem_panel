

  
module.exports.callClient = (app, req) => {

    console.log('cheeegueei aqui...')

    var nome = req.headers.nome
    var senha = `Senha: ${req.headers.senha}`
    var guiche = `Guichê: ${req.headers.guiche}`
    io.emit('data.client', {
        "nome": nome,
        "senha": senha,
        "guiche": guiche
    })
}