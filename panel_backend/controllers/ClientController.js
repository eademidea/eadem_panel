module.exports.callClient = (app, req) => {
    console.log('cheeegueei aqui...')
    app.models.example.testar(app)
}