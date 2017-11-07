'use strict'

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('¡Hola mundo!'));

app.get('/user/:id-:name-:age', (req, res) => { // :id-:name-:age son parametros de la URL
    res.send(`
        ${req.params.name}, bienvenido a Express, tu id es <b>${req.params.id}</b>
        y tienes ${req.params.age} años
    `)
});

app.listen(3000, () => console.log('Express escuchando en el puerto 3000'));