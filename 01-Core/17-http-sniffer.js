'use strict'

const http = require('http'),
    options = { // Son las opciones que se quieren enviar en la peticion
        host:'meristation.as.com', // host que quiero para mi cliente http
        port: 80,
        path: '/'
    };

let htmlCode = new String();

function httpClient(res) {
    console.log(`El sitio ${options.host} ha respondido. Con codigo de ${res.statusCode}`);
    res.on('data', (data) => {
        htmlCode += data;
        console.log(data, data.toString());
    })
}

function httpError(err){
    console.log(`El sitio ${options.host} no responte. Con codigo de ${err.code}.
        Error: ${err.message}`);
}

function webServer(req, res) {
    res.writeHead(200, {'content-Type':'text/html'}); // Headers para enviar con la respuesta
    res.end(htmlCode) // Responderá con el codigo html guardado de la petición
}
// instancia cliente de HTTP
http.get(options, httpClient) // Con el metodo get se realiza la peticion al servidor enviando las opciones
    .on('error', httpError)

// instancia servidor de HTTP
    http.createServer(webServer) // Con createServer se crea el servidor deseado
    .listen(3000); // Escuchará por el puerto 3000


