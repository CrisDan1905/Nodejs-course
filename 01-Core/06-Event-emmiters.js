// Usa el patron de diseño observador

'use strict'

// Se pide el eventEmmiter del modulo de eventos
const EventEmmiter = require('events').EventEmitter;

class myEmitter extends EventEmmiter {}

const pub = new myEmitter();

// Aquí se está creando un evento personalizado
pub.on('myevent', (message) => {
    console.log(message);
});

pub.once('myevent', (message) => {
    console.log('Se emite la primera vez, ' + message);
});

// emit() permite emitir el evento que se creó
pub.emit('myevent', 'Soy un emisor de eventos');
pub.emit('myevent', 'volví a emitir');
pub.emit('myevent', 'una vez más');
pub.emit('myevent', 'y de nuevo');

// Remueve todos los manejadores de eventos asignados al evento en concreto
pub.removeAllListeners('myevent');
pub.emit('myevent', 'emito despues de remover el manejador de evento');

