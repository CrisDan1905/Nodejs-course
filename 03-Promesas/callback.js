'use strict';

const fs = require('fs');
const file = './assets/nombres.txt';
const newFile = './assets/nombres-callback.txt'

fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('El archivo no existe');
    }
    else {
        console.log('El archivo existe');
        fs.readFile(file, (err, data) => {
            if (err) {

                console.log('El archivo no pudo ser leido');

            } else {

                console.log('El archivo pudo ser leido exitosamente');
                fs.writeFile(newFile, data, (err) => {
                    if (err) {

                        console.log('El archivo no pudo ser copiado');

                    } else {

                        console.log('El archivo pudo ser copiado exitosamente');
                        
                    }
                });

            }
        });
    }
});
