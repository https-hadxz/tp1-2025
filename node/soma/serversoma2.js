const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/soma', (request, response) => {
response.render('soma')
})

app.post('/soma', (req, res) => {
console.log("n1="+req.body.n1)
console.log("n2="+req.body.n2)
console.log("NOME="+req.body.nome)
result = parseFloat(req.body.n1)+parseFloat(req.body.n2)
if (isNaN(result)) {
result = "Valores inválidos."
} else {
 result = req.body.nome + ", sua conta deu: " + result
}

res.render('soma', {x: result})
})

app.get('/mult', (request, response) => {
    response.render('mult')
    })
    
app.post('/mult', (req, res) => {
    console.log("n1="+req.body.n1)
    console.log("n2="+req.body.n2)
    console.log("NOME="+req.body.nome)
    result = parseFloat(req.body.n1)*parseFloat(req.body.n2)
    if (isNaN(result)) {
    result = "Valores inválidos."
    } else {
     result = req.body.nome + ", sua conta deu: " + result
    }
    
res.render('mult', {x: result})
    })

app.get('/sub', (request, response) => {
        response.render('sub')
        })
        
app.post('/sub', (req, res) => {
        console.log("n1="+req.body.n1)
        console.log("n2="+req.body.n2)
        console.log("NOME="+req.body.nome)
        result = parseFloat(req.body.n1)-parseFloat(req.body.n2)
        if (isNaN(result)) {
        result = "Valores inválidos."
        } else {
         result = req.body.nome + ", sua conta deu: " + result
        }
        
        res.render('sub', {x: result})
        })

    app.get('/div', (request, response) => {
            response.render('div')
            })
            
    app.post('/div', (req, res) => {
            console.log("n1="+req.body.n1)
            console.log("n2="+req.body.n2)
            console.log("NOME="+req.body.nome)
            result = parseFloat(req.body.n1)/parseFloat(req.body.n2)
            if (isNaN(result)) {
            result = "Valores inválidos."
            } else {
             result = req.body.nome + ", sua conta deu: " + result
            }
            
            res.render('div', {x: result})
            })


            app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))