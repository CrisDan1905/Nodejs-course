'use strict'

const http = require('http').createServer(); // createServer() -> es el que crea el servidor 
const hostname = '127.0.0.1';
const port = 3000;

function webServer(req, res) {
    res.statusCode = 200; // El codigo http que enviará
    res.setHeader('Content-type', 'text/plain'); // header que se le envia
    res.end('Hola mundo'); // Es la respuesta que será enviada al cliente. SIEMPRE debe ser llamada
}
    // En esta linea se convirtió el servidor en un emisor de eventos
    http.on('request', webServer);

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});