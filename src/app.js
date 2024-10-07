const express = require('express');
const cors = require('cors');
const config = require('./config');

const routerApi = require('./routes')

const app = express();

//middleware
app.use(cors());  

//configuración
app.set('port', config.app.port);

//rutas
routerApi(app);

module.exports = app;