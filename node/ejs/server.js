const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs'); // motor de visualização: ejs; parte da configuração do app que montamos com express
// significa que um dos tipos de arquivo que vai tentar abrir são arquivos ejs
// vai usar para renderizar as páginas/ gerar visualização


app.get("/index", (request, response) => {
response.render("index"); //vai renderizar um arquivo .ejs
});

app.use((request, response, next) => { //middleair -- funciona como else do servidor node
response.status(404).send("<h1>Página não encontrada.</h1>"); //
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});