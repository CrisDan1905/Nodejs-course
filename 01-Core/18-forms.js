'use strict'

const http = require('http').createServer(webServer),
    form = require('fs').readFileSync('assets/form.html'),
    querystring = require('querystring'),
    util = require('util');

let dataString = '';

function webServer(req, res) {
    if (req.method === 'GET') { // Si se está haciendo un get...
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.end(form);
    };

    if (req.method === 'POST') { // Si se está haciendo un post...

        req
            .on('data', data => { // Mientras se esten recibiendo datos
                dataString += data    // agreguelos a la variable "dataString"
            })
            .on('end', () => { // Al finalizar que haga este console
                const dataObject = querystring.parse(dataString);
                const dataJSON = util.inspect(dataObject); // devuelve una representacion en string de un objeto, se usa mucho para debuguear
                const templateString = `Los datos que enviaste por POST como string son: ${dataString}
                Los datos que enviaste por POST como JSON son: ${dataJSON}`;
                console.log(templateString);
                res.end(templateString);
            })

    }
}

http.listen(3000);

console.log('Servidor corriendo...')