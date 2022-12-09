import callClient from '../controller/ClientController'
var app = express()
var server = http.createServer(app)

app.post('/chamar', (req, res) => {
    callClient(req, res)
    res.send("ok!")
})