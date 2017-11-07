/* Single thread */

'use strict'


/* 

El metodo global process sire para obtener informacion general del proceso actual de node


*/
function singleThread() {

    process.argv[2] = 'estoy programando en node.js';
    process.argv[3] = 2+5;
    

    console.log('-------------------------------------------');
    console.log('EL PROCESO DE NODE.JS');
    console.log('Id del proceso.......... ' + process.pid);
    console.log('Titulo.................. ' + process.title);
    console.log('Directorio de Node...... ' + process.execPath);
    console.log('Directorio actual....... ' + process.cwd());
    console.log('Version de Node......... ' + process.version);
    console.log('Versiones Dependencias.. ' + process.versions);
    console.log('Plataforma (S.O.)....... ' + process.platform);
    console.log('Arquitectura (S.0.)..... ' + process.arch);
    console.log('Tiempo activo de Node... ' + process.uptime());
    console.log('Argumentos del proceso.. ' + process.argv); // Arreglo con cada uno de los procesos realizados por el programa
    console.log('-------------------------------------------');

    for (let key in process.argv) {
        console.log(process.argv[key]);
    }

}

singleThread();
