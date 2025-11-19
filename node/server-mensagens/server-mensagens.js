const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

let msgs = []

app.get('/', (request, response) => {
response.render('livro-de-visitas')
})

app.post('/livro-de-visitas', (req, response) => {
    const user = req.body.user
    const msg = req.body.msg
    msgs.push(
        {
            user: user,
            msg: msg
        }
        
    )
    response.redirect('/mensagens')
  
})

app.get('/mensagens', (request, response) => {

    response.render('teste', {
        msgs
    })
 })
    console.log("Rodando server...")
    app.listen(8000);