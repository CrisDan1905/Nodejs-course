'use strict'

/* -- EJEMPLO DE NODE.JS --
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n');
});

server.listen(port, hostname, () => { // listen indica por qué puerto y direccion ip va a escuchar el servidor
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

function webServer(req, res) {
    res.statusCode = 200; // El codigo http que enviará
    res.setHeader('Content-type', 'text/plain'); // header que se le envia
    res.end('Hola mundo'); // Es la respuesta que será enviada al cliente. SIEMPRE debe ser llamada
}

const server = http.createServer(webServer);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})