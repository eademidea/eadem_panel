var example = require('../../controllers/ClientController')

describe('Teste da camada de controller', () => {
    it('Deve testar o método call client', () => {
        module.exports = (app) => {
            var teste = app.controllers.ClientController.callClient(app, req)
            console.log(teste)
        }
    })
})