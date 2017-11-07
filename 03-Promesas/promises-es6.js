"use strict";

const fs = require("fs"),
  file = "./assets/nombres.txt",
  newFile = "./assets/nombres-promises-es6.txt",
  promise = new Promise((resolve, reject) => {
    fs.access(file, fs.F_OK,
      err => err ? reject(new Error("El archivo no existe")) : resolve(true)
    );
  });

promise
    .then((resolved, rejected) => {
        console.log('El archivo existe');
    
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err, data) => 
            (err) ? reject(new Error('El archivo no se pudo leer')) :  resolve(data)
            );
        })
    })
    .then((resolved, rejected) => {

        console.log('El archivo se ha copiado exitosamente');
        const data = resolved;

        // En el objeto 'resolve' es donde se guarda la data que devolvió la promesa anterior
        return new Promise((resolve, reject) => {
            fs.writeFile(newFile, data, (err) => 
            (err) ?  reject(new Error('El archivo no se pudo copiar')) : resolve('El archivo se ha copiado con éxito')
            );
        })
    })
    .then((resolved, rejected) => { console.log(resolved); })
    .catch((err) => console.log(err.message));
