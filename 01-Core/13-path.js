 
'use strict'

const http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
        {
            route: '',
            output: '<h2>HOME</h2>'
        },
        {
            route: 'acerca',
            output: '<h2>ACERCA</h2>'
        },
        {
            route: 'contacto',
            output: '<h2>CONTACTO</h2>'        
        }
    ]

function webServer(req, res) {
    let message = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url) //Retorna la ultima seccion de una ruta
        console.log(pathURL);

        urls.forEach(url => {
            if (url.route === pathURL) { // Revisa que la ruta al que se solicita entrar concuerde con una de las definidas
                res.writeHead(200, {'Content-Type':'text/html'}) // Si es asi responde con un codigo 200 y finaliza con el output puesto en el arreglo
                res.end(message + url.output)
            }
        })

        if (!req.finished) { // Si se corta la comunicación antes de que haya respuesta
            res.writeHead(400, {'Content-Type':'text/html'}) // Si es asi responde con un codigo 200 y finaliza con el output puesto en el arreglo
            res.end('<h1>Error 404: Not found</h1>');
        }
}

http.listen(3000);