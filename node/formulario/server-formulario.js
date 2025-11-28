const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
response.render('formulario')
})

app.post('/saudacao', (req, response) => {
    var msg = "Olá, " + req.body.nomezinho + " " + req.body.sobrenome + " da cidade de " + req.body.cidade
    response.render('saudacao', {msg})

    })
    console.log("Rodando server...")
    app.listen(8000);