const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })) //Serve para o express reconhecer url com decodificação de parâmetros; 
//permite gama maior de comunicação com o servidor
app.set('view engine', 'ejs')
const numeroSorteado = Math.floor(Math.random()*10) +1;
console.log(numeroSorteado);
app.get('/advinhacao', (request, response) => {
    n1= ''
    response.render('advinhe-o-numero', {numeroSorteado, n1})
})

app.post('/advinhacao', (request, response) => {
    n1= parseInt(request.body.n1)   
    response.render('advinhe-o-numero', {numeroSorteado, n1})
})

console.log("Rodando server...")
app.listen(8000);