
/* 
Los buffers son una tira de bytes (datos binarios)
Son como arrays desde el lado del servidor
sirven para manipular datos directamente, socketds, streams, implementar protocolos, etc
*/

'use strict'

const buf = new Buffer(100); // Se establece un buffer de 100 posiciones
const buf2 = new Buffer(26);
var str = '\u00bd + \u00bc = \u00be'; // Codigo unicode. Imprimiendolo se sabe que es



/**
 * @param first - El string que se escribirá en el buffer
 * @param second - Donde se empezará a escribir en el buffer
 * @param third - Cuantas posiciones ocupará en el buffer
 * @param forth - El formato en el que se va a codificar
 */
buf.write('abcd', 0, 4, 'ascii'); //

// En el primer parametro se está imprimiento el buffer (inilegible)
// En el segundo se hace pasandolo a string en formato ascii
console.log(
    buf, 
    buf.toString('ascii'),
    str,
    str.length + ' caracteres',
    Buffer.byteLength(str, 'utf8') + ' bytes' // El metodo byteLength indica el numero de bytes que ocupa el parametro pasado
);

for ( let i = 0; i < buf2.length; i++ ) {

    // 97 en ASCII es a
    buf2[i] = i + 97;
    // En cada posicion del buffer está escribiendo una letra
}

console.log(buf2.toString('ascii'));