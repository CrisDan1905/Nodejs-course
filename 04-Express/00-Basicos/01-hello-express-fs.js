'use strict'

const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(`${__dirname}/assets/index.html`)); // __dirname es variable de node que devuelve el directorio del actual modulo

app.listen(3000, () => console.log('escuchando Express-fs desde puerto 3000'));
