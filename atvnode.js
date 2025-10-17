const port = 8000;
const http = require('http');

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
const data = currentDate.getDate();
const mes = currentDate.getMonth();
const hora = currentDate.getHours();
const minutos = currentDate.getMinutes();
console.log(`Hoje é ${data}/${mes} às ${hora}:${minutos}))
    res.write("Hello, World!");
   
    console.log(data);
    res.end();
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);
console.log(data);
