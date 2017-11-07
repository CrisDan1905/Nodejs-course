'use strict'
// importando externo
// const myData = require('./My-data.js');
const myData = require('./My-data'); // Se puede emitir la extensión del archivo
const Clock = require('./Clock-es6');

const cucu = new Clock();

cucu.setClock();

cucu.on('tictac', ()=>cucu.theTime()); 

console.log(myData.name);
console.log(myData.email);
console.log(myData._phone);
