const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();

// Capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Routes
const appRoutes = require('./routes/routes');

// Route middlewares
app.use('/v1/', appRoutes);

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Success'
    })
});

// Iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: ${PORT}`)
});

module.exports = app;

