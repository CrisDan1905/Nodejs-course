'use strict'

const http = require('http'),
    options = { // Son las opciones que se quieren enviar en la peticion
        host:'jonmircha.com', // host que quiero para mi cliente http
        port: 80,
        path: '/'
    }

http.get(options, (res)=> { // Con el metodo get se realiza la peticion al servidor enviando las opciones
    console.log(`El sitio ${options.host} ha respondido. Con codigo de ${res.statusCode}`);
    })
    .on('error', (err)=> {
        console.log(`El sitio ${options.host} no responte. Con codigo de ${err.code}.
            Error: ${err.message}`);
    });
