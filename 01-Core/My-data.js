'use strict'

const name = 'Danilo';
const email = 'danilo@gutierrez.com';
const _phone = '3128465189'; // Será privada, por lo que no se exportará

// Para exportar se llama a "module.exports" de node y se asigna una propiedad que será
// igual al objeto a exportar (no necesariamente deben tener el mismo nombre)
module.exports.name = name;
module.exports.email = email;