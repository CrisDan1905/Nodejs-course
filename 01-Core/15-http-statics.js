 
'use strict'

const http = require('http').createServer(webServer),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    urls = [
        {   
            id: 1,
            route: '',
            output: 'assets/index.html'
        },
        {
            id: 2,
            route: 'acerca',
            output: 'assets/acerca.html'
        },
        {
            id: 3,
            route: 'contacto',
            output: 'assets/contacto.html'        
        }
    ]

function webServer(req, res) {
    let pathURL = path.basename(req.url), //Retorna la ultima sección de una ruta
        id = url.parse( req.url, true ).query.id; // Retorna la URL convertida en un objeto URL. "query" retorna el queryString "id" de la petición

    console.log(`path: ${pathURL}, id: ${id}`);

    urls.forEach(url => {
        if (url.route === pathURL || +url.id === +id) { // Revisa que la ruta al que se solicita entrar concuerde con una de las definidas o que el querystring id de la url sea igual a la variable id
            res.writeHead(200, {'Content-Type':'text/html'}) // Si es asi responde con un codigo 200 y finaliza con el output puesto en el arreglo
            fs.readFile(url.output, (err, data)=> {
                if (err) 
                    throw err;
                else
                    res.end(data);

            })
        }
    })

    if (!req.finished) { // Si se corta la comunicación antes de que haya respuesta
        res.writeHead(400, {'Content-Type':'text/html'}) // Si es asi responde con un codigo 200 y finaliza con el output puesto en el arreglo
        fs.readFile('assets/404.html', (err, data)=> {
            if (err)
                throw err;
            else
                res.end(data)
        })
    }
}

http.listen(3000);