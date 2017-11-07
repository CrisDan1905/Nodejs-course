'use strict';

const fs = require('fs'),
      Q = require('q'),
      file = './assets/nombres.txt',
      newFile = './assets/nombres-promises-q.txt'

function existFile(file) {
    let defer = Q.defer();
    fs.access(file, fs.F_OK, (err) => 
        (err) ? defer.reject( new Error('El archivo no existe')) : defer.resolve(true)
    );

    return defer.promise;
}

function readFile(file) {

    console.log('El archivo existe');

    let defer = Q.defer();

    fs.readFile(file, (err, data) => 
        (err) ? defer.reject(new Error('El archivo no se pudo leer')) :  defer.resolve(data)
    );
    
    return defer.promise;
}

function writeFile(file, data) {

    console.log('El archivo se ha copiado exitosamente');

    let defer = Q.defer();

    fs.writeFile(file, data, (err) => 
        (err) ?  defer.reject(new Error('El archivo no se pudo copiar')) : defer.resolve('El archivo se ha copiado con éxito')
    );

    return defer.promise;

}


/*Si existe el archivo
    //Abrelo
    //Leelo
    //Cópialo
    //Avisa que se copió
    //Maneja Errores
*/

existFile(file)
    .then(() => readFile(file))
    .then((dataPromise) => writeFile(newFile, dataPromise))
    .then((dataPromise) => { console.log(dataPromise) })
    .fail((err) => { console.log(err.message) });


