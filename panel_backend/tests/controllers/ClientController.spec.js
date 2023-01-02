var example = require('../../controllers/ClientController')

describe('Teste da camada de controller', () => {
    it('Deve testar o método call client', () => {
        module.exports = (app) => {
            app.controllers.ClientController.callClient(app, req)
        }
    })

    it('Deve testar o método call client', () => {
        module.exports = (app) => {
            app.controllers.ClientController.callClient(null, null)
        }
    })
})