module.exports = (app) => {
    app.post('/teste', (req, res) => {
        app.controllers.ClientController.callClient(app, req)
        res.send("ok!")
    })
}