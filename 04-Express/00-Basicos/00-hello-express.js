'use strict'

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('¡Hola mundo!'));

app.listen(3000, () => console.log('Express escuchando en el puerto 3000'));
