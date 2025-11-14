const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
response.render('formulario')
})

app.post('/sei-la', (request, response) => {
    let msg = req.body.nomezinho + "testando" + req.body.sobrenome
    response.send(msg)

    })