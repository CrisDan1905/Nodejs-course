/* Hacer Debug con el core de Node.js https://nodejs.org/dist/latest-v8.x/docs/api/debugger.html
  En la terminal ejecutar node inspect <nombre-archivo>
*/

'use strict'

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

function webServer(req, res) {
    debugger; // Para debuguear node inspect <nombre-archivo>
    res.statusCode = 200; // El codigo http que enviará
    res.setHeader('Content-type', 'text/plain'); // header que se le envia
    res.end('Hola mundo'); // Es la respuesta que será enviada al cliente. SIEMPRE debe ser llamada
}

const server = http.createServer(webServer);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})