const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
let distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Routes
const appRoutes = require('./routes/routes');

// route middlewares
app.use('/v1/', appRoutes);

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor corriendo en: ${PORT}`)
})