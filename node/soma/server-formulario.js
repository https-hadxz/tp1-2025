const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
response.render('formulario')
})

app.post('/sei-la', (req, response) => {
    let msg = req.body.nomezinho + " " + req.body.sobrenome
    response.send(msg)

    })
    console.log("Rodando server...")
    app.listen(8000);