'use strict'

const http = require('http').createServer(webServer); // para crear un server stream se debe pasar como parametro la funcion a ejecutar
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function webServer(req, res) {

    function readFile(err, data) {
        if (err) 
            throw err;
        else 
            res.end(data);
    }

    res.statusCode = 200; // El codigo http que enviará
    res.setHeader('Content-type', 'text/html'); // header que se le envia
    fs.readFile('assets/index.html', readFile);
}
    // En esta linea se convirtió el servidor en un emisor de eventos

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});