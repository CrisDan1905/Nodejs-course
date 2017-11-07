'use strict'

const http = require('http').createServer(webServer); // para crear un server stream se debe pasar como parametro la funcion a ejecutar
const fs = require('fs');
const index = fs.createReadStream('assets/index.html'); // Se crea un stream de lectura con el archivo index

const hostname = '127.0.0.1';
const port = 3000;

function webServer(req, res) {
    res.statusCode = 200; // El codigo http que enviará
    res.setHeader('Content-type', 'text/html'); // header que se le envia
    index.pipe(res); // pipe() abre la transmision de la info
}
    // En esta linea se convirtió el servidor en un emisor de eventos

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});