'use strict'
// fs es un modulo de entradas y salidas util para leer o escribir archivos
const fs = require('fs');
// Se crea un stream de lectura
/**
 * @param path -> la ruta del archivo a leer
 */
const readStream = fs.createReadStream('./assets/nombres.txt');
/**Se crea un stream de escritura
 * @param path -> la ruta del archivo a crear
 */
const writeStream = fs.createWriteStream('./assets/nombres_copia.txt');

/**
 * El metodo pipe() abre un canal para poder hacer la escritura o lectura deseada
 * // Aqui se está creando la copa del stream de lectura sobre el stream de escritura
 */
readStream.pipe(writeStream);

// Como en jQuery, nodejs tiene un metodo "on" que sirve para subscribirse a eventos
// El evento 'data' indica "mientras hayan datos..."
readStream.on('data', (chunk) => {
    console.log(`He leido: ${chunk.length} caracteres`);
})

// El evento 'end' se ejecutá al terminar de leer el stream de lectura
readStream.on('end', ()=> {
    console.log('Terminé de leer el archivo');
})