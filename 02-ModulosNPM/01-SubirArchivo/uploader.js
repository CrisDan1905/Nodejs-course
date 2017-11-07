'use strict'

const http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra');

function serverUpload(req, res) {

    if (req.method === 'GET' &&  req.url === '/') {
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <h3>Uploader de archivos Node.js</h3>
            <form action ="/upload" enctype="multipart/form-data" method="post">
                <div><input type="file" name="upload" required></div>
                <div><input type="submit" name="Subir archivo"></div>
            </form>
        `);
        
    }
    console.log(req.method);

    if (req.method === 'POST' && req.url === '/upload') { 
        let form = new formidable.IncomingForm(); // Para parsear datos que entren
        
        form
            .parse(req, (err, fields, files) => { // Se parsea la petición que se hace
                res.writeHead(200, {'Content-Type': 'text/html'}); // En caso de que todo pase bien
                res.write(`
                    <h1>Archivos Recibidos</h1>
                    <a href="/">Regresar</a>
                    <br/>
                    <code>${util.inspect({files: files})}</code>
                `);
                res.end();
            })
            .on('progress', (bytesReceived, bytesExpected) => {
                let percentCompleted = ( bytesReceived / bytesExpected ) * 100; // El porcentaje de los datos recibidos
                console.log(percentCompleted.toFixed());
            }) // Mientras se esté ejecutando
            .on('error', (err) => {
                console.log(err);
            })
            .on('end', (fields, files) => {
                // this es el formulario 'form'
                let tempPath = form.openedFiles[0].path; // Ubicación temporal del archivo que se sube;
                let fileName = form.openedFiles[0].name; // Nombre del archivo subido
                let newLocation = './upload/' + fileName;

                fse.copy(tempPath, newLocation, (err) => {
                    return err ? console.log(err) : console.log('Archivo subido con exito');
                }); // Metodo para copiar archivos recibidos
            });

        return; // imprescindible
    }

}

http.listen(3000);

console.log('Servidor corriendo en htttp://localhost:3000');
