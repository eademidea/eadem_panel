
export default function callClient(req, res) {
    sendInfoToReact(req)
}

function sendInfoToReact(req) {
    var nome = req.headers.nome
    var senha = `Senha: ${req.headers.senha}`
    var guiche = `Guichê: ${req.headers.guiche}`
    io.emit('data.client', {
        "nome": nome,
        "senha": senha,
        "guiche": guiche
    })
}