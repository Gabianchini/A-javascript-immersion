//Modulo http
//Outro modulo muiso usado para fazer comunicacao http
//O modulo ja vem com o node
//Pode criar um servidor que serve paginas web para nós
const {createServer} = require('http');
let server = createServer((request, response) =>{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello word</h1>
    <p> Primeira pagina com note</p>
    `);
    response.end();
});

server.listen(8000);
console.log("Ouvindo a porta 8000")